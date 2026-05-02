import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';
import RelatedPages from '../components/RelatedPages';
import SoftwareApplicationSchema from '../components/SoftwareApplicationSchema';

export default function ElectricalSoftware() {
  const faqs = [
    {
      question: "Can I track electrical permits and code compliance?",
      answer: "Yes! Log permit numbers, inspection dates, and code requirements per job. Track permit status from application to final approval. Store inspection reports and photos for documentation. Never miss a permit or inspection again."
    },
    {
      question: "Does it handle circuit load calculations and panel upgrades?",
      answer: "Absolutely. Store panel details, circuit loads, and capacity calculations. Document existing electrical systems and quote panel upgrades with accurate amp ratings. Track what's been installed and what needs upgrading at each property."
    },
    {
      question: "Can my electricians invoice from the job site?",
      answer: "Yes. Electricians create estimates, log materials used, and generate invoices right from their phone. Customers can approve quotes and pay on-site—no back-and-forth or waiting for office hours."
    },
    {
      question: "How much does electrical contractor software cost?",
      answer: "$89/month flat. Unlimited electricians, unlimited jobs, all features included. No per-user fees, no setup charges. Same price whether you have 1 electrician or 20."
    },
    {
      question: "Can I track materials and wire inventory?",
      answer: "Yes. Track wire, breakers, switches, outlets, and all materials. Log what's used per job, get low-stock alerts, and know your true job profitability. Sync with suppliers for easy reordering."
    }
  ];

  const relatedPages = [
    {
      title: 'HVAC Software',
      description: 'Built for HVAC and heating/cooling contractors',
      path: '/hvac-software',
      icon: '❄️'
    },
    {
      title: 'Plumbing Software',
      description: 'Perfect for plumbers and plumbing contractors',
      path: '/plumbing-software',
      icon: '🔧'
    },
    {
      title: 'General Contractors',
      description: 'Software for all trades and field service businesses',
      path: '/general-contractors-software',
      icon: '🏗️'
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Electrical Software 2026 | Permit Tracking & Compliance | $89/mo"
        description="The best electrical contractor software for managing service calls, installations, and commercial projects. Track permits, code compliance, and circuit loads. $89/month flat pricing."
        keywords="electrical contractor software, electrician software, electrical business software, electrician app, electrical estimating software, electrical service software"
      />
      <SoftwareApplicationSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.crewopspro.com' },
        { name: 'Electrical Software', url: 'https://www.crewopspro.com/electrical-software' }
      ]} />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Electrical Software' }
        ]} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-yellow-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ⚡ Built for Electricians & Electrical Contractors
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Electrical Contractor Software That Actually Works
            </h1>
            <p className="text-2xl text-gray-600 mb-6">
              Manage service calls, installations, and commercial projects from one simple platform. Track permits, code compliance, and circuit loads—all from your phone.
            </p>
            <StarRating />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              Start Your 14-Day Free Trial
            </Link>
            <Link 
              to="/pricing" 
              className="border-2 border-yellow-600 text-yellow-700 hover:bg-yellow-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              See Pricing - $89/Month
            </Link>
          </div>
        </div>
      </section>

      {/* Why Electricians Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Electricians Choose Crew Ops Pro
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-2">Permit Tracking</h3>
              <p className="text-gray-600">
                Log permit numbers, inspection dates, and code requirements per job. Track status from application to final approval. Store inspection reports and never miss a deadline.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Mobile Invoicing</h3>
              <p className="text-gray-600">
                Create estimates, log materials, and invoice from the job site. Customers approve quotes and pay on-site—no waiting for office hours or chasing down payments later.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔌</div>
              <h3 className="text-xl font-semibold mb-2">Panel & Load Tracking</h3>
              <p className="text-gray-600">
                Document existing electrical systems, panel capacities, and circuit loads. Quote panel upgrades with accurate amp ratings and track what's been installed at each property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Everything Your Electrical Business Needs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
              <p className="text-gray-600">
                Schedule service calls, installations, and commercial projects with drag-and-drop simplicity. GPS tracking shows where your electricians are and optimizes routing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-xl font-semibold mb-2">Digital Estimates</h3>
              <p className="text-gray-600">
                Create professional estimates in minutes with built-in templates. Include photos, diagrams, and detailed line items. Send via email or text for instant approval.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">💳</div>
              <h3 className="text-xl font-semibold mb-2">Fast Payments</h3>
              <p className="text-gray-600">
                Accept credit cards, ACH, and checks on-site or via text/email. Get paid in 24 hours instead of waiting 30+ days for checks in the mail.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Code Compliance</h3>
              <p className="text-gray-600">
                Document code requirements, inspection results, and safety certifications. Store photos of work completed and generate compliance reports for inspectors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-xl font-semibold mb-2">Materials & Inventory</h3>
              <p className="text-gray-600">
                Track wire, breakers, switches, outlets, and all materials. Log what's used per job, get low-stock alerts, and know your true job profitability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-xl font-semibold mb-2">Customer Communication</h3>
              <p className="text-gray-600">
                Automated appointment reminders, arrival notifications, and follow-ups via text and email. Keep customers informed without manual calls or texts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Electrical Contractor Businesses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Real Electrical Contractors Using CrewOpsPro
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            See how electricians are managing permits, materials, and emergency calls
          </p>

          <div className="space-y-8">
            {/* Case Study 1 */}
            <div className="bg-gradient-to-r from-yellow-50 to-white rounded-xl p-8 shadow-lg border-l-4 border-yellow-600">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Bright Star Electric</h3>
                  <p className="text-gray-600">Austin, TX • 8 electricians • Commercial & Residential</p>
                </div>
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <p className="text-sm font-bold text-green-700">$6,500/mo saved</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-red-700 mb-2">❌ The Problem:</p>
                  <p className="text-sm text-gray-700">
                    Permit tracking on spreadsheets. Office staff spent 12 hours/week calling city for permit status, 
                    tracking inspection dates, notifying crews. Missed inspections cost $500 in reschedule fees monthly.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-blue-700 mb-2">✓ The Solution:</p>
                  <p className="text-sm text-gray-700">
                    Track permits in CrewOpsPro per job. Set inspection date reminders (day before, morning of). 
                    Attach permit PDFs to jobs. Electricians see permit status in mobile app.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-green-700 mb-2">📈 The Result:</p>
                  <p className="text-sm text-gray-700">
                    <strong>Office staff saved 12 hours/week</strong> = $600/month. Zero missed inspections = $500/month saved. 
                    Total: <strong>$1,100/month saved</strong>. Plus faster permit turnaround = 6 more jobs/month = $5,400/month more revenue.
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-yellow-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>"Permit tracking was killing us. Now it's automated. We haven't missed an inspection in 6 months."</strong>
                  <span className="block mt-2 text-gray-600">- David Kim, Owner</span>
                </p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-gradient-to-r from-orange-50 to-white rounded-xl p-8 shadow-lg border-l-4 border-orange-600">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Metro Electric Services</h3>
                  <p className="text-gray-600">Denver, CO • 12 electricians • Emergency + Project work</p>
                </div>
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <p className="text-sm font-bold text-green-700">15 emergency calls/week</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-red-700 mb-2">❌ The Problem:</p>
                  <p className="text-sm text-gray-700">
                    Emergency calls came in via phone. Dispatcher manually called electricians to find who's available. 
                    Took 15-20 minutes to dispatch. Lost 8-10 emergency calls/week (customers called competitors).
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-blue-700 mb-2">✓ The Solution:</p>
                  <p className="text-sm text-gray-700">
                    GPS tracking shows which electricians are closest to emergency. Dispatcher sees real-time locations, 
                    assigns nearest available tech in 2 minutes. Tech gets push notification with job details and address.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-green-700 mb-2">📈 The Result:</p>
                  <p className="text-sm text-gray-700">
                    <strong>Picked up 15 more emergency calls/week</strong> (faster response = customers wait). 
                    Emergency calls average $375. 15 calls/week × $375 = <strong>$5,625/week = $24,375/month more</strong>.
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-yellow-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>"Emergency dispatch used to take 20 minutes. Now it's 2 minutes. We're capturing way more emergency work."</strong>
                  <span className="block mt-2 text-gray-600">- Rachel Torres, Dispatch Manager</span>
                </p>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-8 shadow-lg border-l-4 border-blue-600">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Precision Electrical</h3>
                  <p className="text-gray-600">Seattle, WA • 5 electricians • Commercial focus</p>
                </div>
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <p className="text-sm font-bold text-green-700">$2,400/mo saved</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-red-700 mb-2">❌ The Problem:</p>
                  <p className="text-sm text-gray-700">
                    Material takeoffs on paper. Estimator spent 3-4 hours per bid counting fixtures, wire runs, panels. 
                    Errors meant under-ordering (delay) or over-ordering (waste). Lost 15% margin on material mistakes.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-blue-700 mb-2">✓ The Solution:</p>
                  <p className="text-sm text-gray-700">
                    Built material takeoff templates in CrewOpsPro: "Panel Install" = 1 panel + 20' wire + 2 breakers + hardware. 
                    Click template, quantities auto-calculate. Export to supplier for ordering.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-green-700 mb-2">📈 The Result:</p>
                  <p className="text-sm text-gray-700">
                    <strong>Estimator saved 2 hours per bid</strong> (8 hours/week = $400/month). Material accuracy improved 
                    (waste down 12% = $2,000/month saved). <strong>Total: $2,400/month benefit</strong>.
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-yellow-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>"Material takeoffs were our bottleneck. Templates cut our estimating time in half and we're not wasting materials."</strong>
                  <span className="block mt-2 text-gray-600">- James Wilson, Project Manager</span>
                </p>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="bg-gradient-to-r from-green-50 to-white rounded-xl p-8 shadow-lg border-l-4 border-green-600">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Volt Master Electric</h3>
                  <p className="text-gray-600">Phoenix, AZ • 6 electricians • Residential specialist</p>
                </div>
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <p className="text-sm font-bold text-green-700">40% faster</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-red-700 mb-2">❌ The Problem:</p>
                  <p className="text-sm text-gray-700">
                    Invoicing on paper after jobs. Office staff typed invoices from paper forms next day. 
                    Customers waited 24-48 hours for invoice. Payment cycle: job complete → invoice next day → payment in 30 days = 31 days.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-blue-700 mb-2">✓ The Solution:</p>
                  <p className="text-sm text-gray-700">
                    Electricians invoice on-site via mobile app. Itemize labor, materials, permit fees. Customer signs on phone. 
                    Email invoice automatically. Accept credit card payment immediately.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-green-700 mb-2">📈 The Result:</p>
                  <p className="text-sm text-gray-700">
                    <strong>40% of customers pay on-site now</strong> (credit card). Cash flow improved: getting paid same day vs 30+ days. 
                    Reduced late payments from 30% to 10%. <strong>$8,000/month better cash position</strong>.
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-yellow-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>"On-site invoicing changed our cash flow. We're getting paid the day we do the work. No more 30-day waits."</strong>
                  <span className="block mt-2 text-gray-600">- Miguel Rodriguez, Owner</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/signup" 
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-12 py-5 rounded-lg font-semibold text-xl transition-colors shadow-xl"
            >
              Start Your Free Trial - Join 150+ Electrical Contractors
            </Link>
            <p className="text-gray-600 mt-4">14-day free trial • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-yellow-400 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Simple Pricing for Electrical Contractors
          </h2>
          <p className="text-2xl text-gray-700 mb-8">
            No per-electrician fees. No contracts. No surprises.
          </p>
          <div className="bg-white text-gray-900 rounded-2xl p-12 max-w-xl mx-auto shadow-xl">
            <div className="mb-6">
              <span className="text-6xl font-bold">$89</span>
              <span className="text-xl text-gray-500">/month</span>
            </div>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Unlimited electricians (no per-user fees)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Unlimited jobs & service calls</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Permit & inspection tracking</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Code compliance documentation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Panel & circuit load tracking</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Mobile apps (iOS & Android)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Payment processing & QuickBooks sync</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>24/7 support</span>
              </li>
            </ul>
            <Link 
              to="/signup"
              className="block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-xl transition-colors"
            >
              Start Free 14-Day Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Links Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Software Built for All Trades
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you specialize in electrical, HVAC, plumbing, or run a multi-trade operation, Crew Ops Pro adapts to your business. One platform for every field service trade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* HVAC */}
            <Link 
              to="/hvac-software"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="text-4xl mb-3">❄️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                HVAC Software
              </h3>
              <p className="text-gray-600">
                Refrigerant tracking, seasonal maintenance contracts, and equipment warranty management for HVAC contractors.
              </p>
            </Link>

            {/* Plumbing */}
            <Link 
              to="/plumbing-software"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Plumbing Software
              </h3>
              <p className="text-gray-600">
                Emergency dispatch, recurring maintenance, and parts tracking built specifically for plumbing contractors.
              </p>
            </Link>

            {/* Landscaping */}
            <Link 
              to="/landscaping-software"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="text-4xl mb-3">🌿</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Landscaping Software
              </h3>
              <p className="text-gray-600">
                Route optimization for lawn crews, seasonal contracts, and property maintenance tracking for landscapers.
              </p>
            </Link>

            {/* Painting */}
            <Link 
              to="/painting-software"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Painting Software
              </h3>
              <p className="text-gray-600">
                Color tracking, multi-day project scheduling, and material estimation for painting contractors.
              </p>
            </Link>

            {/* Pool Service */}
            <Link 
              to="/pool-service-software"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="text-4xl mb-3">🏊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Pool Service Software
              </h3>
              <p className="text-gray-600">
                Chemical tracking, water testing logs, and weekly route management for pool service companies.
              </p>
            </Link>

            {/* Chimney Sweep */}
            <Link 
              to="/chimney-sweep-software"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="text-4xl mb-3">🧹</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Chimney Sweep Software
              </h3>
              <p className="text-gray-600">
                CSIA inspection checklists, creosote tracking, and offline mode for basement work without cell service.
              </p>
            </Link>

            {/* Handyman */}
            <Link 
              to="/handyman-software"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="text-4xl mb-3">🔨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Handyman Software
              </h3>
              <p className="text-gray-600">
                Multi-trade job tracking, flexible pricing, and customer history for handyman services and home repairs.
              </p>
            </Link>

            {/* General Contractors */}
            <Link 
              to="/general-contractors-software"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="text-4xl mb-3">🏗️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                General Contractors
              </h3>
              <p className="text-gray-600">
                Multi-project management, subcontractor coordination, and purchase orders for general contractors.
              </p>
            </Link>
          </div>

          {/* Feature Links */}
          <div className="border-t border-gray-200 pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Core Features Every Trade Needs
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link 
                to="/scheduling"
                className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <div className="text-3xl mb-2">📅</div>
                <h4 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600">Scheduling</h4>
                <p className="text-gray-600 text-sm">Drag-and-drop calendar and route optimization</p>
              </Link>

              <Link 
                to="/jobs-map"
                className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors group"
              >
                <div className="text-3xl mb-2">🗺️</div>
                <h4 className="font-bold text-gray-900 mb-1 group-hover:text-green-600">Jobs Map</h4>
                <p className="text-gray-600 text-sm">Visualize jobs and optimize technician routes</p>
              </Link>

              <Link 
                to="/invoicing-payments"
                className="bg-purple-50 p-6 rounded-lg hover:bg-purple-100 transition-colors group"
              >
                <div className="text-3xl mb-2">💳</div>
                <h4 className="font-bold text-gray-900 mb-1 group-hover:text-purple-600">Invoicing</h4>
                <p className="text-gray-600 text-sm">Accept payments on-site and sync with QuickBooks</p>
              </Link>

              <Link 
                to="/outreach-hub"
                className="bg-orange-50 p-6 rounded-lg hover:bg-orange-100 transition-colors group"
              >
                <div className="text-3xl mb-2">📧</div>
                <h4 className="font-bold text-gray-900 mb-1 group-hover:text-orange-600">Outreach Hub</h4>
                <p className="text-gray-600 text-sm">Email/SMS campaigns and automated follow-ups</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSchema faqs={faqs} />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages pages={relatedPages} title="Explore Other Industries" />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Run Your Electrical Business Better?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join electricians who switched from paper work orders and complicated software to Crew Ops Pro.
          </p>
          <Link 
            to="/signup"
            className="inline-block bg-white text-orange-600 px-12 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors"
          >
            Start Your Free Trial
          </Link>
          <p className="text-orange-100 mt-4">14 days free • Cancel anytime</p>
        </div>
      </section>
    </div>
  );
}
