# Creative Job Hub - Real Features Reference
## ⚠️ IMPORTANT: Only reference features listed in this file when building the marketing site

This file contains ONLY features that actually exist in the job-flow-hub-71 application.
DO NOT make up features or claim capabilities that aren't listed here.

---

## Core Business Management

### Client Management
- Client database with full contact details
- Multiple properties per client
- Client portal access (clients can log in)
- Contact event logging (calls, emails, texts)
- Client notes and history
- Property inspections tracking
- Client loyalty program
- Client subscriptions to service plans
- Predictive insights for clients
- Balance tracking and investigation

### Job Management
- Job creation and tracking
- Job statuses: Pending, Scheduled, In Progress, Completed, Cancelled
- Job scheduling with calendar view
- Job assignments to technicians
- Time tracking per job
- Job photos gallery
- Job documents (warranties, scope docs)
- Job expenses tracking
- Job line items and pricing
- GPS location tracking for jobs
- Live tracking during jobs
- Job tasks and checklists
- Job warranty tracking
- Job sessions (clock in/out per job)

### Estimates
- Create and send estimates
- Smart AI-powered estimator with 3 pricing tiers (competitive, market, premium)
- Line items with pricing
- Convert estimates to jobs
- Client approval workflow (approve/decline online)
- PDF generation for estimates
- Email estimates to clients

### Invoicing
- Create and send invoices
- Invoice line items
- Tax calculations
- Payment tracking
- Payment collection via Stripe
- Invoice PDF generation
- QuickBooks integration for invoices

### Scheduling
- Calendar view of jobs and appointments
- Drag-and-drop scheduling
- Technician assignments
- Route optimization
- Appointment booking (clients can request appointments online)

---

## Mobile & Field Features

### Progressive Web App (PWA)
- Install on any device (iOS, Android, Desktop)
- Works offline with automatic sync
- Push notifications
- Add to home screen capability

### Mobile Apps
- Native iOS and Android apps via Capacitor
- Camera integration for job photos
- GPS/geolocation tracking
- Clock in/out from mobile
- Offline mode with sync when reconnected

### Field Operations
- Clock in/out with GPS location
- Take and upload job photos directly from mobile
- Update job status on the go
- Add notes and expenses from field
- View schedule and directions
- Complete job checklists

---

## Customer-Facing Features

### Customer Portal
- Clients log in with email/password
- View all their properties and jobs
- See job status and history
- Access invoices and payment history
- Make online payments
- Request new service appointments
- View and accept/decline estimates
- Upload photos and documents
- Message the company directly
- View service subscriptions
- Loyalty points tracking

### Online Booking
- Public booking page for new appointments
- AI-powered availability checking
- Service plan selection portal
- Lead capture forms

---

## AI & Automation Features

### Smart Estimator
- AI generates 3-tier pricing (competitive, market, premium)
- Market insights and local pricing data
- Historical job data analysis
- Breakdown by labor, materials, travel, overhead
- Detailed line items auto-generated

### AI Business Insights
- Revenue forecasting
- Customer segmentation
- Predictive maintenance recommendations
- Photo analysis for job requirements
- Dynamic route optimization

### AI Receptionist
- Voice calls handled by AI (Twilio integration)
- Can look up job info, add expenses
- Natural language processing for field tasks

### Email Automation
- Trial period email sequences
- Lead nurturing campaigns
- Service plan follow-ups
- Automated reminders
- Customizable email templates

---

## Integrations

### Payment Processing
- **Stripe Connect** - Full payment processing
- Accept credit/debit cards
- Payment links for invoices
- Subscription billing
- Bank account deposits

### Communication
- **Twilio** - SMS messaging and voice
- Text customers from the app
- Two-way SMS conversations
- STOP/START compliance
- **Resend** - Transactional emails
- Professional email templates

### Accounting
- **QuickBooks Online** - Full sync
- Auto-sync invoices, payments, customers
- Chart of accounts mapping
- OAuth authentication
- Webhook integration

### Maps & Routing
- **Mapbox** - Premium maps and routing
- Job location mapping
- Route optimization
- Geocoding addresses
- Isochrone analysis (service areas)

### Storage
- **Google Drive** - Photo gallery sync
- Automatic cloud backup of job photos

---

## Advanced Features

### Reports & Analytics
- Revenue charts and forecasts
- Job completion trends
- Top clients by revenue
- Customer segmentation analysis
- Employee time reports
- Payroll-ready time exports
- Expense reports
- Custom report generation

### Service Plans (Subscription Management)
- Create recurring service plans
- Monthly or annual billing
- Define visit frequency
- Standard services per plan
- Features and benefits
- Public portal for plan selection
- Stripe payment links
- Lead nurturing sequences for service plans

### Portfolio Management
- Photo galleries by job or category
- Featured work showcasing
- SEO-optimized public galleries
- Tag and categorize portfolio items
- Share links to specific projects

### Team Management
- User roles: Owner, Manager, Technician, Admin
- Invite team members via email
- Set hourly rates per employee
- Department assignments
- Employee numbers for organization
- Permission controls

### Document Management
- Custom PDF templates (warranties, scope of work)
- HTML/CSS template editor
- Handlebars template variables
- Multiple page sizes (Letter, A4, Legal)
- Version control for documents
- Document sharing with clients

### Time Tracking
- Clock in/out per job
- GPS location stamp on clock-in
- Break tracking
- Overtime tracking
- Time admin panel for reviewing hours
- Export to payroll

### Leads Management
- Lead capture and qualification
- Lead source tracking
- Lead status pipeline
- Convert leads to clients
- Lead notes and follow-ups
- Assign leads to team members

### Price Book
- Service items catalog
- Standard pricing for common services
- AI pricing analysis (competitive/market/premium)
- Quick-add to estimates and invoices

### Settings & Customization
- Organization profile and branding
- Custom logo upload
- Email signature management
- Business hours configuration
- Tax rates setup
- Service categories
- Lead sources management
- Document templates
- Team permissions

---

## Technical Capabilities

### Data & Infrastructure
- PostgreSQL database (Supabase)
- Real-time updates
- Row-level security
- Offline data queue with IndexedDB
- Automatic cloud sync
- Multi-tenant architecture

### Security
- User authentication (Supabase Auth)
- Password reset flows
- Role-based access control
- Secure API endpoints
- Encrypted data storage

### Performance
- Fast initial load times
- Instant navigation (React Router)
- Optimistic UI updates
- Background sync
- Image optimization

---

## Platform Support

### Web Browsers
- Chrome, Firefox, Safari, Edge
- Mobile responsive design
- Desktop and tablet optimized

### Mobile Platforms
- iOS app via Capacitor
- Android app via Capacitor
- Progressive Web App for all platforms

### Offline Support
- Works completely offline
- Queues changes for sync
- Auto-sync when connection restored
- Offline indicators in UI

---

## Subscription Plans (From Billing System)

### Starter Plan ($29/month or $300/year)
- 1 user seat
- Unlimited jobs, estimates & invoices
- Basic scheduling
- Customer portal
- Email support

### Team Plan ($49/month or $468/year) - MOST POPULAR
- 5 user seats
- Everything in Starter
- Advanced scheduling & dispatch
- Team collaboration
- SMS notifications
- Priority support

### Pro Plan ($89/month or $948/year)
- Unlimited users
- Everything in Team
- Advanced reporting & analytics
- Custom integrations
- API access
- Dedicated account manager

**All plans include:**
- 7-day free trial
- No credit card required to start
- Cancel anytime
- All core features listed above

---

## What IS NOT Available (Do NOT claim these)
- Multi-language support (English only)
- Multi-currency support (USD only)
- Inventory management
- Purchase orders
- Equipment tracking beyond basic info
- Built-in marketing automation beyond email sequences
- Custom mobile app branding
- White-label options
- Multi-company management from one account

---

## Key Differentiators (Use These for Marketing)

1. **Built by a Contractor** - Actually used daily by the developer
2. **All-in-One** - No need for separate tools
3. **Transparent Pricing** - No hidden fees or surprise charges
4. **AI-Powered** - Smart estimating, routing, and insights
5. **Works Offline** - Field techs never blocked
6. **Customer Portal** - Clients can self-service
7. **Mobile-First** - Real native apps, not just responsive web
8. **No Per-User Fees** - Pro plan has unlimited users
9. **QuickBooks Integration** - Seamless accounting sync
10. **7-Day Free Trial** - No credit card required

---

Last Updated: 2026-01-04
Source: thejdmckinney/job-flow-hub-71 repository analysis
