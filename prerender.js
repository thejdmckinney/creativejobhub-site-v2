import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import { createClient } from '@sanity/client';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Sanity client
const sanityClient = createClient({
  projectId: 'bb2zybf9',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

// Static routes to prerender
const staticRoutes = [
  '/',
  '/pricing',
  '/how-it-works',
  '/why-i-built-this',
  '/competitors',
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
  '/blog',
  '/signup',
  '/login',
  '/contact',
  '/terms-of-service',
  '/privacy-policy',
  '/sms-terms',
  '/outreach-hub',
  '/features',
  '/features/jobs-map',
];

async function getAllRoutes() {
  // Fetch blog post slugs from Sanity
  try {
    const posts = await sanityClient.fetch(`
      *[_type == "blogPost" && defined(slug.current)] {
        "slug": slug.current
      }
    `);
    
    const blogRoutes = posts.map(post => `/blog/${post.slug}`);
    console.log(`📝 Found ${posts.length} blog posts to prerender\n`);
    
    return [...staticRoutes, ...blogRoutes];
  } catch (error) {
    console.warn('⚠️  Could not fetch blog posts from Sanity:', error.message);
    console.log('Continuing with static routes only...\n');
    return staticRoutes;
  }
}

async function prerender() {
  const distPath = path.join(__dirname, 'dist');
  const PORT = 3333;
  
  // Get all routes (static + dynamic blog posts)
  const routes = await getAllRoutes();
  console.log(`🎯 Prerendering ${routes.length} total routes...\n`);
  
  // Start sirv server for SPA
  console.log(`🚀 Starting sirv server on http://localhost:${PORT}...\n`);
  const server = spawn('npx', ['sirv', 'dist', '--port', PORT.toString(), '--single'], {
    stdio: 'ignore'
  });
  
  // Wait for server to start
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  for (const route of routes) {
    try {
      const page = await browser.newPage();
      
      // Set a reasonable viewport
      await page.setViewport({ width: 1920, height: 1080 });
      
      // Navigate to the route
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle2',
        timeout: 60000
      });
      
      // Wait for React to fully render content
      await page.waitForFunction(
        () => {
          const root = document.getElementById('root');
          return root && root.children.length > 0;
        },
        { timeout: 30000 }
      );
      
      // Wait for React Helmet to update meta tags
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Get the rendered HTML with updated meta tags
      const html = await page.content();
      
      // Determine output file path
      const outputPath = route === '/' 
        ? path.join(distPath, 'index.html')
        : path.join(distPath, route.slice(1), 'index.html');
      
      // Create directory if it doesn't exist
      if (route !== '/') {
        await fs.mkdir(path.dirname(outputPath), { recursive: true });
      }
      
      // Write the prerendered HTML
      await fs.writeFile(outputPath, html);
      
      console.log(`✅ Prerendered: ${route}`);
      
      await page.close();
    } catch (error) {
      console.error(`❌ Failed to prerender ${route}:`, error.message);
    }
  }
  
  await browser.close();
  server.kill();
  console.log('\n✨ Prerendering complete!');
}

prerender().catch(console.error);
