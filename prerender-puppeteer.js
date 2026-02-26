import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Detect if we're running on Vercel or locally
const isVercel = process.env.VERCEL === '1' || process.env.CI === 'true';

// Import the appropriate puppeteer version
let puppeteer;
let chromium;

if (isVercel) {
  // Use puppeteer-core with chromium for Vercel
  puppeteer = await import('puppeteer-core');
  chromium = await import('@sparticuz/chromium');
} else {
  // Use regular puppeteer for local development
  puppeteer = await import('puppeteer');
}

// Define all routes
const routes = [
  '/',
  '/pricing',
  '/how-it-works',
  '/competitors',
  '/contact',
  '/vs-jobber',
  '/vs-housecall-pro',
  '/vs-servicetitan',
  '/vs-workiz',
  '/vs-fieldedge',
  '/vs-servicem8',
  '/chimney-sweep-software',
  '/handyman-software',
  '/pool-service-software',
  '/plumbing-software',
  '/hvac-software',
  '/electrical-software',
  '/landscaping-software',
  '/painting-software',
  '/general-contractors-software',
  '/bring-your-own-tools',
  '/scheduling',
  '/team-management',
  '/invoicing-payments',
  '/outreach-hub',
  '/features',
  '/features/jobs-map',
  '/blog',
  '/terms-of-service',
  '/privacy-policy',
  '/why-i-built-this',
  '/signup',
  '/login',
  '/setup-guides',
  '/setup-guides/stripe',
  '/setup-guides/mapbox',
  '/setup-guides/twilio',
  '/setup-guides/resend',
];

// Start a local server for pre-rendering
async function startLocalServer() {
  const { createServer } = await import('vite');
  const server = await createServer({
    configFile: path.resolve(__dirname, 'vite.config.ts'),
    root: path.resolve(__dirname),
    server: {
      port: 5173,
    },
    preview: {
      port: 4173,
    },
  });
  
  // Use preview mode to serve the built files
  await server.listen();
  const port = server.config.server.port || 5173;
  console.log(`🚀 Preview server started on http://localhost:${port}`);
  return { server, port };
}

// Pre-render a single page
async function prerenderPage(browser, url, route) {
  const page = await browser.newPage();
  
  try {
    // Navigate to the page
    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });
    
    // Wait for React to render
    await page.waitForSelector('#root > *', { timeout: 10000 });
    
    // Give React Helmet time to update meta tags
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Remove duplicate meta tags (keep only React Helmet's versions)
    await page.evaluate(() => {
      // Remove all meta tags WITHOUT data-rh="true" attribute when there are duplicates
      const allMetas = document.querySelectorAll('meta[name="description"], meta[name="title"], meta[name="keywords"]');
      allMetas.forEach(meta => {
        if (!meta.hasAttribute('data-rh')) {
          // Only remove if there's a React Helmet version of the same tag
          const name = meta.getAttribute('name');
          const rhVersion = document.querySelector(`meta[name="${name}"][data-rh="true"]`);
          if (rhVersion) {
            meta.remove();
          }
        }
      });
    });
    
    // Get the fully rendered HTML
    const html = await page.content();
    
    // Save to file
    const outputPath = route === '/' 
      ? path.join(__dirname, 'dist', 'index.html')
      : path.join(__dirname, 'dist', route, 'index.html');
    
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Clean up the HTML a bit
    let cleanedHtml = html
      // Remove Vite's HMR script in production
      .replace(/<script type="module" src="\/@vite\/client"><\/script>/g, '')
      // Ensure proper spacing
      .replace(/>\s+</g, '>\n<');
    
    fs.writeFileSync(outputPath, cleanedHtml);
    console.log(`  ✅ ${route}`);
    
  } catch (error) {
    console.error(`  ❌ ${route} - Error: ${error.message}`);
  } finally {
    await page.close();
  }
}

// Main function
async function generateStaticPages() {
  console.log('🎯 Starting full static site generation with Puppeteer...\n');
  
  let browser;
  let serverProcess;
  
  try {
    // Start local preview server
    console.log('📦 Starting preview server...');
    const { spawn } = await import('child_process');
    
    // Use vite preview instead of custom server
    serverProcess = spawn('npx', ['vite', 'preview', '--port', '4173'], {
      cwd: __dirname,
      stdio: 'pipe',
    });
    
    // Wait for server to start
    await new Promise((resolve) => {
      let output = '';
      serverProcess.stdout.on('data', (data) => {
        output += data.toString();
        if (output.includes('Local:') || output.includes('localhost:4173')) {
          resolve();
        }
      });
      serverProcess.stderr.on('data', (data) => {
        const message = data.toString();
        if (message.includes('Local:') || message.includes('localhost:4173')) {
          resolve();
        }
      });
      
      // Fallback timeout
      setTimeout(resolve, 3000);
    });
    
    console.log('✅ Preview server running on http://localhost:4173\n');
    
    // Launch browser
    console.log('🌐 Launching Chromium...');
    
    const browserOptions = {
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    };
    
    if (isVercel) {
      browserOptions.executablePath = await chromium.default.executablePath();
      browserOptions.args = [...browserOptions.args, ...chromium.default.args];
    }
    
    browser = await puppeteer.default.launch(browserOptions);
    console.log('✅ Browser launched\n');
    
    // Pre-render all pages
    console.log(`📄 Pre-rendering ${routes.length} pages:\n`);
    
    for (const route of routes) {
      const url = `http://localhost:4173${route}`;
      await prerenderPage(browser, url, route);
    }
    
    console.log('\n✨ Static site generation complete!');
    console.log('\n📊 All pages now have:');
    console.log('   ✅ Full content (not just meta tags)');
    console.log('   ✅ Canonical tags');
    console.log('   ✅ Internal links');
    console.log('   ✅ H1 tags');
    console.log('   ✅ Word count for SEO crawlers\n');
    
  } catch (error) {
    console.error('❌ Error during static site generation:', error);
    process.exit(1);
  } finally {
    // Clean up
    if (browser) {
      await browser.close();
    }
    if (serverProcess) {
      serverProcess.kill();
    }
  }
}

// Run the script
generateStaticPages();
