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
    h1: 'The Job Management Software Built for Service Businesses',
    content: 'Creative Job Hub is the all-in-one job management software built specifically for service businesses. Schedule jobs and dispatch techs with drag-and-drop simplicity. Track your team in real-time with GPS and live job updates. Send professional estimates and invoices from your phone. Get paid faster with mobile payment processing. Manage customers, track job history, and grow your business with powerful reporting. Simple pricing at $89/month with everything included. No hidden fees, no per-user charges. Try Creative Job Hub free for 14 days.',
  },
  {
    path: '/pricing',
    title: 'Creative Job Hub Pricing | $89/Month, Everything Included',
    description: 'Simple, transparent pricing. $89/month includes unlimited users, jobs, estimates, invoices, mobile apps, QuickBooks sync, and 24/7 support. No hidden fees. Try free for 14 days.',
    h1: 'Simple, Transparent Pricing',
    content: 'Creative Job Hub costs $89 per month with everything included. Unlimited users, unlimited jobs, unlimited customers. Mobile apps for iOS and Android included. QuickBooks integration included. Online booking included. Customer portal included. 24/7 support included. No setup fees, no contracts, no hidden charges. Try free for 14 days with no credit card required. Cancel anytime.',
  },
  {
    path: '/how-it-works',
    title: 'How Creative Job Hub Works | Job Management Made Simple',
    description: 'See how Creative Job Hub helps service businesses manage jobs, schedules, customers, and payments in one simple platform.',
    h1: 'How Creative Job Hub Works',
    content: 'Creative Job Hub simplifies job management for service businesses in four easy steps. First, schedule jobs with drag-and-drop calendar. Second, dispatch technicians with mobile apps and GPS tracking. Third, complete jobs on-site with digital forms, photos, and signatures. Fourth, invoice customers and collect payment immediately. Manage your entire business from one simple platform.',
  },
  {
    path: '/competitors',
    title: 'Competitors - Compare Field Service Software',
    description: 'Compare Creative Job Hub vs Jobber, Housecall Pro, ServiceTitan, Workiz, FieldEdge, and ServiceM8. See why contractors are switching to save $2,000-$5,000 per year.',
    h1: 'Compare Field Service Software',
  },
  {
    path: '/contact',
    title: 'Contact Creative Job Hub | Talk to Our Team',
    description: 'Have questions about Creative Job Hub? Contact our team for support, sales inquiries, or general information.',
    h1: 'Contact Us',
  },
  {
    path: '/vs-jobber',
    title: 'Creative Job Hub vs Jobber | The Best Jobber Alternative',
    description: 'Compare Creative Job Hub vs Jobber head-to-head. See why contractors are switching to save $2,000+ per year with better features at a lower price.',
    h1: 'Creative Job Hub vs Jobber',
    content: 'Creative Job Hub vs Jobber comparison. Creative Job Hub costs $89/month flat with unlimited users. Jobber starts at $49/month but adds $30 per additional user, quickly reaching $200-300/month for small teams. Both offer scheduling, dispatching, invoicing, and mobile apps. Creative Job Hub includes QuickBooks sync and online booking at no extra cost. Jobber charges extra for these features. Save $2,000+ per year by switching to Creative Job Hub while getting more features included.',
  },
  {
    path: '/vs-housecall-pro',
    title: 'Creative Job Hub vs Housecall Pro | Side-by-Side Review',
    description: 'Compare Creative Job Hub vs Housecall Pro. See why contractors are switching to save $2,400+ per year with more features at a fraction of the cost.',
    h1: 'Creative Job Hub vs Housecall Pro',
    content: 'Creative Job Hub vs Housecall Pro comparison. Creative Job Hub costs $89/month with everything included and unlimited users. Housecall Pro starts at $49/month but requires multiple add-ons and charges per user, reaching $250-400/month for typical setups. Both platforms offer scheduling, mobile apps, and payment processing. Creative Job Hub includes all features in base price. Housecall Pro charges extra for marketing tools, online booking, and integrations. Contractors save $2,400+ per year with Creative Job Hub.',
  },
  {
    path: '/vs-servicetitan',
    title: 'Creative Job Hub vs ServiceTitan | Which is Better?',
    description: 'Compare Creative Job Hub vs ServiceTitan. See why small service businesses choose Creative Job Hub and save $5,000+ per year.',
    h1: 'Creative Job Hub vs ServiceTitan',
  },
  {
    path: '/vs-workiz',
    title: 'Creative Job Hub vs Workiz | The Best Workiz Alternative',
    description: 'Compare Creative Job Hub vs Workiz head-to-head. See why contractors are switching to save $1,200+ per year with better features and support.',
    h1: 'Creative Job Hub vs Workiz',
  },
  {
    path: '/vs-fieldedge',
    title: 'Creative Job Hub vs FieldEdge | The Best FieldEdge Alternative',
    description: 'Compare Creative Job Hub vs FieldEdge. See why contractors are switching to save thousands per year with simpler software that actually works.',
    h1: 'Creative Job Hub vs FieldEdge',
  },
  {
    path: '/vs-servicem8',
    title: 'Creative Job Hub vs ServiceM8 | The Best ServiceM8 Alternative',
    description: 'Compare Creative Job Hub vs ServiceM8. See why contractors are switching for better US-based support, modern interface, and built-in features.',
    h1: 'Creative Job Hub vs ServiceM8',
  },
  {
    path: '/chimney-sweep-software',
    title: 'Chimney Sweep Software - #1 Ranked by Google AI for CSIA Inspections',
    description: 'The only field service software built for chimney sweeps with CSIA inspection checklists and creosote tracking built right into the mobile app. Ranked #1 by Google AI for chimney sweep features. $89/month, everything included.',
    h1: 'Chimney Sweep Software',
  },
  {
    path: '/handyman-software',
    title: 'Handyman Software | Job Management for Handyman Businesses',
    description: 'Field service software built for multi-trade handyman businesses. Manage plumbing, electrical, HVAC, and more trades in one system. Track skills, schedule the right tech, and grow your business. $89/month, everything included.',
    h1: 'Handyman Business Software',
  },
  {
    path: '/pool-service-software',
    title: 'Pool Service Software | Job Management for Pool Companies',
    description: 'Manage pool service jobs, schedules, and customers with easy-to-use pool service software from Creative Job Hub.',
    h1: 'Pool Service Software',
  },
  {
    path: '/plumbing-software',
    title: 'Plumbing Software - Schedule, Invoice & Get Paid Faster | $89/mo',
    description: 'The best plumbing software for managing service calls, emergency jobs, recurring maintenance, and invoicing. Built for plumbers who need simple, powerful tools. $89/month flat, unlimited plumbers.',
    h1: 'Plumbing Software',
    content: 'Plumbing software built for service calls, emergency dispatch, and recurring maintenance. Schedule plumbers efficiently with drag-and-drop calendar. Dispatch emergency calls to nearest available plumber. Track parts and materials used on each job. Send estimates and invoices from mobile app. Collect payment on-site. Manage water heater installations, drain cleaning, pipe repairs, and maintenance contracts. $89/month flat pricing with unlimited plumbers.',
  },
  {
    path: '/hvac-software',
    title: 'HVAC Software | Job Management for HVAC Companies',
    description: 'HVAC business management software designed for small contractors. Schedule maintenance, track jobs, and grow your business.',
    h1: 'HVAC Software',
    content: 'HVAC software for managing service calls, installations, and preventive maintenance contracts. Schedule HVAC technicians efficiently. Track equipment serviced and parts used. Manage seasonal maintenance agreements. Send service reminders to customers automatically. Create professional estimates for new system installations. Invoice and collect payment on-site. Perfect for heating and cooling contractors. $89/month with everything included.',
  },
  {
    path: '/electrical-software',
    title: 'Electrical Contractor Software | Creative Job Hub',
    description: 'The best electrical contractor software for managing service calls, installations, and commercial projects. Track permits, code compliance, and circuit loads. $89/month flat pricing.',
    h1: 'Electrical Contractor Software',
    content: 'Electrical contractor software for service calls, installations, and commercial electrical projects. Schedule electricians and track job progress. Manage permits and inspections. Document circuit loads and panel upgrades. Track materials and equipment used. Create detailed estimates for rewiring jobs. Invoice customers and collect payment. Perfect for residential and commercial electrical contractors. $89/month flat pricing.',
  },
  {
    path: '/landscaping-software',
    title: 'Landscaping Software | Job Management for Lawn Care Professionals',
    description: 'The best landscaping software for managing crews, recurring maintenance, and seasonal contracts. Schedule mowing routes, track equipment, and invoice on-site. $89/month flat pricing.',
    h1: 'Landscaping Software',
  },
  {
    path: '/painting-software',
    title: 'Painting Contractor Software | Creative Job Hub',
    description: 'The best painting contractor software for managing residential and commercial projects. Track color selections, materials, and multi-day jobs. $89/month flat pricing.',
    h1: 'Painting Contractor Software',
  },
  {
    path: '/general-contractors-software',
    title: 'General Contractor Software | Creative Job Hub',
    description: 'Field service software for ALL contractor types: remodeling, roofing, carpentry, flooring, drywall, masonry, fencing, decking, and more. Manage projects, crews, and subcontractors. $89/month flat.',
    h1: 'General Contractor Software',
  },
  {
    path: '/bring-your-own-tools',
    title: 'Bring Your Own Tools | Creative Job Hub Integrations',
    description: 'Use Creative Job Hub with tools you already love. Connect your workflows and run your business your way.',
    h1: 'Bring Your Own Tools',
  },
  {
    path: '/scheduling',
    title: 'Smart Scheduling Features | Creative Job Hub',
    description: 'Stop double-booking with drag-and-drop scheduling, instant conflict alerts, emergency dispatch, and auto-assignment. Smart scheduling that keeps your techs productive.',
    h1: 'Stop Double-Booking Your Best Techs',
    content: 'Smart scheduling with drag-and-drop calendar. Instant conflict alerts prevent double-booking. Emergency dispatch finds available technicians fast. Auto-assignment matches jobs to the right techs based on skills, location, and availability. Color-coded calendar shows job status at a glance. Mobile app sync keeps everyone updated in real-time. Recurring job automation saves hours every week.',
  },
  {
    path: '/invoicing-payments',
    title: 'Get Paid Faster with Creative Job Hub | Invoicing & Payments',
    description: 'Collect payment on-site with tap-to-pay, send professional invoices instantly, and get paid the same day. No more Net 30—get your money when the job is done.',
    h1: 'Get Paid Faster, Not Net-30 Slower',
    content: 'Collect payment on-site with tap-to-pay credit card processing. Send professional invoices instantly from mobile app. Get paid same day, not Net 30. Automatic payment reminders reduce late payments. Online payment portal makes it easy for customers to pay. QuickBooks sync eliminates double data entry. Track outstanding invoices and cash flow in real-time. Accept credit cards, ACH, checks, and cash.',
  },
  {
    path: '/outreach-hub',
    title: 'Outreach Hub | Client Communication Software for Contractors',
    description: 'Stay connected with clients through mass email campaigns, SMS marketing, call logging, and automated follow-ups. A feature competitors don\'t have.',
    h1: 'Stay Connected With Your Clients',
    content: 'Outreach Hub helps contractors maximize client engagement. Send mass email campaigns to promote seasonal services. Send SMS campaigns for urgent announcements. Log all client calls and interactions. Schedule automated follow-ups. Win back inactive customers. Generate repeat business with targeted campaigns. A competitive advantage that Jobber and Housecall Pro don\'t offer.',
  },
  {
    path: '/features',
    title: 'All Features | Crew Ops Pro Field Service Software',
    description: 'Everything you need to run a successful field service business. Scheduling, GPS tracking, jobs map, invoicing, customer management, and more—all in one platform.',
    h1: 'Everything You Need to Run Your Field Service Business',
    content: 'Crew Ops Pro includes all the features you need. Smart scheduling with drag-and-drop calendar. Real-time GPS tracking and team management. Live jobs map with emergency dispatch. Mobile invoicing and payment processing. Outreach hub for client campaigns. Customer management with complete history. Professional estimates and quotes. QuickBooks integration. Mobile apps for iOS and Android. All included at one simple price.',
  },
  {
    path: '/features/jobs-map',
    title: 'Live Tech Tracking & Jobs Map | Real-Time Field Service GPS Tracking',
    description: 'See where every technician is in real-time. Emergency dispatch software with live GPS tracking, job status updates, and instant crew visibility for field service contractors.',
    h1: 'Stop Asking "Where\'s My Team?"',
    content: 'Jobs Map shows every technician\'s location in real-time on a live map. See who\'s available, who\'s on a job, and who\'s closest to an emergency. Color-coded status pins show availability at a glance. Emergency dispatch finds the nearest available tech in seconds. No more phone tag when urgent calls come in. ETA calculator shows arrival times with real traffic data. Job clustering helps optimize routes. Stop guessing where your team is—see everyone on the map.',
  },
  {
    path: '/blog',
    title: 'Creative Job Hub Blog | Tips for Service Business Growth',
    description: 'Read expert tips on job management, scheduling, customer communication, and growing your service business.',
    h1: 'Creative Job Hub Blog',
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service - Creative Job Hub',
    description: 'Terms of Service for Creative Job Hub field service management software.',
    h1: 'Terms of Service',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy - Creative Job Hub',
    description: 'Privacy Policy for Creative Job Hub. Learn how we collect, use, and protect your personal information.',
    h1: 'Privacy Policy',
  },
];

// Function to inject meta tags and H1 into HTML
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
  
  // Inject H1 tag and content into body (for SEO crawlers that don't execute JavaScript)
  if (route.h1) {
    let bodyContent = `<div id="root"><h1 style="position:absolute;left:-9999px;">${route.h1}</h1>`;
    
    // Add content snippet if available
    if (route.content) {
      bodyContent += `<div style="position:absolute;left:-9999px;">${route.content}</div>`;
    }
    
    html = html.replace('<div id="root">', bodyContent);
  }
  
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
