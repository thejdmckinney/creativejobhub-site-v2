import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the base HTML template
const templatePath = path.join(__dirname, 'dist', 'index.html');
const template = fs.readFileSync(templatePath, 'utf-8');

// Define routes with their SEO metadata
const routes = [
  {
    path: '/',
    title: 'Creative Job Hub - Field Service Management Software for Small Businesses',
    description: 'Affordable, easy-to-use field service management software built for small businesses. Manage jobs, customers, and scheduling without the enterprise complexity.',
  },
  {
    path: '/pricing',
    title: 'Pricing - Creative Job Hub',
    description: 'Simple, transparent pricing for field service management software. Pay only $29/month with no hidden fees or long-term contracts.',
  },
  {
    path: '/how-it-works',
    title: 'How It Works - Creative Job Hub',
    description: 'Learn how Creative Job Hub helps you manage your field service business with job scheduling, customer management, and mobile access.',
  },
  {
    path: '/competitors',
    title: 'Compare Field Service Software - Creative Job Hub',
    description: 'Compare Creative Job Hub with other field service management software. See how we stack up against Jobber, ServiceTitan, and HousecallPro.',
  },
  {
    path: '/contact',
    title: 'Contact Us - Creative Job Hub',
    description: 'Get in touch with the Creative Job Hub team. We\'re here to help you streamline your field service business.',
  },
  {
    path: '/vs-jobber',
    title: 'Creative Job Hub vs Jobber - Feature Comparison',
    description: 'Compare Creative Job Hub and Jobber side-by-side. See pricing, features, and which field service software is right for your business.',
  },
  {
    path: '/vs-housecall-pro',
    title: 'Creative Job Hub vs HousecallPro - Feature Comparison',
    description: 'Compare Creative Job Hub and HousecallPro. See how our affordable solution compares to HousecallPro\'s enterprise features.',
  },
  {
    path: '/vs-servicetitan',
    title: 'Creative Job Hub vs ServiceTitan - Feature Comparison',
    description: 'Compare Creative Job Hub and ServiceTitan. See why small businesses choose our simple, affordable solution over ServiceTitan.',
  },
  {
    path: '/vs-workiz',
    title: 'Creative Job Hub vs Workiz - Feature Comparison',
    description: 'Compare Creative Job Hub and Workiz for field service management. See pricing, features, and user experience differences.',
  },
  {
    path: '/vs-fieldedge',
    title: 'Creative Job Hub vs FieldEdge - Feature Comparison',
    description: 'Compare Creative Job Hub and FieldEdge. Discover a simpler alternative for small field service businesses.',
  },
  {
    path: '/vs-servicem8',
    title: 'Creative Job Hub vs ServiceM8 - Feature Comparison',
    description: 'Compare Creative Job Hub and ServiceM8. See which field service software offers better value for small businesses.',
  },
  {
    path: '/chimney-sweep-software',
    title: 'Chimney Sweep Software - Creative Job Hub',
    description: 'Field service management software designed for chimney sweep businesses. Schedule jobs, manage customers, and grow your business.',
  },
  {
    path: '/handyman-software',
    title: 'Handyman Software - Creative Job Hub',
    description: 'Job management software built for handyman services. Track jobs, estimates, and customer communications in one place.',
  },
  {
    path: '/pool-service-software',
    title: 'Pool Service Software - Creative Job Hub',
    description: 'Pool maintenance and service management software. Schedule routes, track chemicals, and manage recurring services.',
  },
  {
    path: '/plumbing-software',
    title: 'Plumbing Software - Creative Job Hub',
    description: 'Plumbing business management software for small businesses. Dispatch jobs, track time, and manage customer relationships.',
  },
  {
    path: '/hvac-software',
    title: 'HVAC Software - Creative Job Hub',
    description: 'HVAC business management software designed for small contractors. Schedule maintenance, track jobs, and grow your business.',
  },
  {
    path: '/electrical-software',
    title: 'Electrical Software - Creative Job Hub',
    description: 'Electrical contractor software for job management and customer tracking. Built for small electrical businesses.',
  },
  {
    path: '/landscaping-software',
    title: 'Landscaping Software - Creative Job Hub',
    description: 'Landscaping business management software. Schedule crews, manage properties, and track recurring maintenance.',
  },
  {
    path: '/painting-software',
    title: 'Painting Software - Creative Job Hub',
    description: 'Painting contractor software for estimates, scheduling, and job management. Built for small painting businesses.',
  },
  {
    path: '/general-contractors-software',
    title: 'General Contractor Software - Creative Job Hub',
    description: 'Project management software for general contractors. Track multiple jobs, manage subcontractors, and stay organized.',
  },
  {
    path: '/bring-your-own-tools',
    title: 'Bring Your Own Tools - Creative Job Hub',
    description: 'Integrate your existing tools with Creative Job Hub. Connect Stripe, Twilio, Mapbox, and more to customize your workflow.',
  },
  {
    path: '/blog',
    title: 'Blog - Creative Job Hub',
    description: 'Field service business tips, industry insights, and software guides for small business owners.',
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service - Creative Job Hub',
    description: 'Terms of Service for Creative Job Hub field service management software.',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy - Creative Job Hub',
    description: 'Privacy Policy for Creative Job Hub. Learn how we protect your data and respect your privacy.',
  },
];

// Function to inject meta tags into HTML
function injectMetaTags(html, route) {
  // Replace title
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${route.title}</title>`
  );
  
  // Replace meta description (with proper escaping and handling multi-line)
  html = html.replace(
    /<meta name="description" content="[^"]*"[^>]*>/g,
    `<meta name="description" content="${route.description}">`
  );
  
  // Inject Open Graph tags
  const ogTags = `
    <meta property="og:title" content="${route.title}">
    <meta property="og:description" content="${route.description}">
    <meta property="og:url" content="https://creativejobhub.com${route.path}">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${route.title}">
    <meta name="twitter:description" content="${route.description}">`;
  
  html = html.replace('</head>', `${ogTags}\n  </head>`);
  
  return html;
}

// Generate static HTML for each route
function generateStaticPages() {
  console.log(`🎯 Generating ${routes.length} static pages...`);
  
  routes.forEach(route => {
    const html = injectMetaTags(template, route);
    
    // Determine output path
    let outputPath;
    if (route.path === '/') {
      outputPath = path.join(__dirname, 'dist', 'index.html');
    } else {
      const routePath = route.path.slice(1); // Remove leading slash
      const dirPath = path.join(__dirname, 'dist', routePath);
      
      // Create directory if it doesn't exist
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      
      outputPath = path.join(dirPath, 'index.html');
    }
    
    // Write the HTML file
    fs.writeFileSync(outputPath, html);
    console.log(`  ✅ ${route.path}`);
  });
  
  console.log('✨ Static page generation complete!');
}

// Run the generator
generateStaticPages();
