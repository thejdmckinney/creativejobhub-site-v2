import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the base HTML template
const templatePath = path.join(__dirname, 'dist', 'index.html');
const template = fs.readFileSync(templatePath, 'utf-8');

// Define routes with their SEO metadata (synced with React Helmet in page components)
const routes = [
  {
    path: '/',
    title: 'Creative Job Hub | Job Management Software for Service Businesses',
    description: 'All-in-one job management software for service businesses. Schedule jobs, manage teams, send invoices, and grow with Creative Job Hub',
  },
  {
    path: '/pricing',
    title: 'Creative Job Hub Pricing | $89/Month, Everything Included',
    description: 'Simple, transparent pricing. $89/month includes unlimited users, jobs, estimates, invoices, mobile apps, QuickBooks sync, and 24/7 support. No hidden fees. Try free for 14 days.',
  },
  {
    path: '/how-it-works',
    title: 'How Creative Job Hub Works | Job Management Made Simple',
    description: 'See how Creative Job Hub helps service businesses manage jobs, schedules, customers, and payments in one simple platform.',
  },
  {
    path: '/competitors',
    title: 'Competitors - Compare Field Service Software',
    description: 'Compare Creative Job Hub vs Jobber, Housecall Pro, ServiceTitan, Workiz, FieldEdge, and ServiceM8. See why contractors are switching to save $2,000-$5,000 per year.',
  },
  {
    path: '/contact',
    title: 'Contact Creative Job Hub | Talk to Our Team',
    description: 'Have questions about Creative Job Hub? Contact our team for support, sales inquiries, or general information.',
  },
  {
    path: '/vs-jobber',
    title: 'Creative Job Hub vs Jobber | The Best Jobber Alternative',
    description: 'Compare Creative Job Hub vs Jobber head-to-head. See why contractors are switching to save $2,000+ per year with better features at a lower price.',
  },
  {
    path: '/vs-housecall-pro',
    title: 'Creative Job Hub vs Housecall Pro | Side-by-Side Review',
    description: 'Compare Creative Job Hub vs Housecall Pro. See why contractors are switching to save $2,400+ per year with more features at a fraction of the cost.',
  },
  {
    path: '/vs-servicetitan',
    title: 'Creative Job Hub vs ServiceTitan | Which is Better?',
    description: 'Compare Creative Job Hub vs ServiceTitan. See why small service businesses choose Creative Job Hub and save $5,000+ per year.',
  },
  {
    path: '/vs-workiz',
    title: 'Creative Job Hub vs Workiz | The Best Workiz Alternative',
    description: 'Compare Creative Job Hub vs Workiz head-to-head. See why contractors are switching to save $1,200+ per year with better features and support.',
  },
  {
    path: '/vs-fieldedge',
    title: 'Creative Job Hub vs FieldEdge | The Best FieldEdge Alternative',
    description: 'Compare Creative Job Hub vs FieldEdge. See why contractors are switching to save thousands per year with simpler software that actually works.',
  },
  {
    path: '/vs-servicem8',
    title: 'Creative Job Hub vs ServiceM8 | The Best ServiceM8 Alternative',
    description: 'Compare Creative Job Hub vs ServiceM8. See why contractors are switching for better US-based support, modern interface, and built-in features.',
  },
  {
    path: '/chimney-sweep-software',
    title: 'Chimney Sweep Software - #1 Ranked by Google AI for CSIA Inspections',
    description: 'The only field service software built for chimney sweeps with CSIA inspection checklists and creosote tracking built right into the mobile app. Ranked #1 by Google AI for chimney sweep features. $89/month, everything included.',
  },
  {
    path: '/handyman-software',
    title: 'Handyman Software | Job Management for Handyman Businesses',
    description: 'Field service software built for multi-trade handyman businesses. Manage plumbing, electrical, HVAC, and more trades in one system. Track skills, schedule the right tech, and grow your business. $89/month, everything included.',
  },
  {
    path: '/pool-service-software',
    title: 'Pool Service Software | Job Management for Pool Companies',
    description: 'Manage pool service jobs, schedules, and customers with easy-to-use pool service software from Creative Job Hub.',
  },
  {
    path: '/plumbing-software',
    title: 'Plumbing Software - Schedule, Invoice & Get Paid Faster | $89/mo',
    description: 'The best plumbing software for managing service calls, emergency jobs, recurring maintenance, and invoicing. Built for plumbers who need simple, powerful tools. $89/month flat, unlimited plumbers.',
  },
  {
    path: '/hvac-software',
    title: 'HVAC Software | Job Management for HVAC Companies',
    description: 'HVAC business management software designed for small contractors. Schedule maintenance, track jobs, and grow your business.',
  },
  {
    path: '/electrical-software',
    title: 'Electrical Contractor Software | Creative Job Hub',
    description: 'The best electrical contractor software for managing service calls, installations, and commercial projects. Track permits, code compliance, and circuit loads. $89/month flat pricing.',
  },
  {
    path: '/landscaping-software',
    title: 'Landscaping Software | Job Management for Lawn Care Professionals',
    description: 'The best landscaping software for managing crews, recurring maintenance, and seasonal contracts. Schedule mowing routes, track equipment, and invoice on-site. $89/month flat pricing.',
  },
  {
    path: '/painting-software',
    title: 'Painting Contractor Software | Creative Job Hub',
    description: 'The best painting contractor software for managing residential and commercial projects. Track color selections, materials, and multi-day jobs. $89/month flat pricing.',
  },
  {
    path: '/general-contractors-software',
    title: 'General Contractor Software | Creative Job Hub',
    description: 'Field service software for ALL contractor types: remodeling, roofing, carpentry, flooring, drywall, masonry, fencing, decking, and more. Manage projects, crews, and subcontractors. $89/month flat.',
  },
  {
    path: '/bring-your-own-tools',
    title: 'Bring Your Own Tools | Creative Job Hub Integrations',
    description: 'Use Creative Job Hub with tools you already love. Connect your workflows and run your business your way.',
  },
  {
    path: '/scheduling',
    title: 'Smart Scheduling Features | Creative Job Hub',
    description: 'Stop double-booking with drag-and-drop scheduling, instant conflict alerts, emergency dispatch, and auto-assignment. Smart scheduling that keeps your techs productive.',
  },
  {
    path: '/team-management',
    title: 'Team Management Features | Creative Job Hub',
    description: 'Real-time GPS tracking, job status updates, and team performance insights. Know exactly where your team is and what they\'re doing with live field visibility.',
  },
  {
    path: '/invoicing-payments',
    title: 'Get Paid Faster with Creative Job Hub | Invoicing & Payments',
    description: 'Collect payment on-site with tap-to-pay, send professional invoices instantly, and get paid the same day. No more Net 30—get your money when the job is done.',
  },
  {
    path: '/blog',
    title: 'Creative Job Hub Blog | Tips for Service Business Growth',
    description: 'Read expert tips on job management, scheduling, customer communication, and growing your service business.',
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service - Creative Job Hub',
    description: 'Terms of Service for Creative Job Hub field service management software.',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy - Creative Job Hub',
    description: 'Privacy Policy for Creative Job Hub. Learn how we collect, use, and protect your personal information.',
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
