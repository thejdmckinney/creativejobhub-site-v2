import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';

export default function HowItWorks() {
  return (
    <div className="bg-white">
      <SEO 
        title="How It Works - 6-Step Workflow"
        description="See how Creative Job Hub streamlines your entire workflow: capture leads, create smart estimates, schedule jobs, complete work in the field, get paid fast, and delight customers with a self-service portal."
        keywords="field service workflow, contractor workflow, job management process, service business workflow"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            How Creative Job Hub Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            From booking to payment, Creative Job Hub handles everything. Here's how we help you run your field service business better.
          </p>
          <div className="mb-8">
            <StarRating />
          </div>
          <Link 
            to="/signup" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Start Your 14-Day Free Trial
          </Link>
        </div>
      </section>

      {/* Main Workflow Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            The Complete Workflow
          </h2>

          {/* Step 1: Lead Capture */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    1
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Capture Leads</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  New customers can book appointments online through your custom booking page. Our AI receptionist can even handle phone calls, capture lead info, and schedule appointments automatically.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Online booking page with real-time availability</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>AI receptionist handles phone calls 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Lead tracking and source attribution</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-8 border-2 border-blue-200">
                <div className="text-6xl mb-4 text-center">📞</div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 mb-2">Never Miss a Lead</p>
                  <p className="text-gray-600">Capture customer info automatically from phone, web, or referrals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Create Estimates */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-green-50 rounded-lg p-8 border-2 border-green-200">
                <div className="text-6xl mb-4 text-center">💰</div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 mb-2">Smart Pricing</p>
                  <p className="text-gray-600">AI generates competitive, market, and premium pricing tiers instantly</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    2
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Create Smart Estimates</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Our AI-powered estimator analyzes your market, historical data, and job requirements to suggest three pricing tiers. Add photos, line items, and send professional estimates in minutes.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>AI suggests 3 pricing tiers with market insights</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Professional PDF estimates with your branding</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Customers approve online with one click</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3: Schedule Jobs */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    3
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Schedule & Dispatch</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Drag-and-drop scheduling makes it easy to assign jobs to your team. Our route optimization ensures techs take the most efficient routes, saving time and gas money.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Calendar view with drag-and-drop scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>AI-powered route optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Automated SMS reminders to customers</span>
                  </li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-8 border-2 border-purple-200">
                <div className="text-6xl mb-4 text-center">📅</div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 mb-2">Effortless Scheduling</p>
                  <p className="text-gray-600">See your whole week at a glance. Assign techs and optimize routes automatically.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Complete Jobs */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-orange-50 rounded-lg p-8 border-2 border-orange-200">
                <div className="text-6xl mb-4 text-center">📱</div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 mb-2">Mobile-First</p>
                  <p className="text-gray-600">Techs use their phones for everything - even works offline</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    4
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Complete Jobs in the Field</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Your techs clock in with GPS tracking, complete job checklists, take photos, and update job status - all from their phone. Works offline and syncs when back online.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>GPS clock in/out with location tracking</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Photo uploads and job notes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Works offline, syncs automatically</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 5: Get Paid */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    5
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Get Paid Fast</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Generate invoices instantly when the job is done. Customers can pay online with credit card, and money hits your bank account in 2 days. Integrates with QuickBooks automatically.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Accept credit/debit cards via Stripe</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Send payment links via text or email</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Auto-sync with QuickBooks Online</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-8 border-2 border-green-200">
                <div className="text-6xl mb-4 text-center">💳</div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 mb-2">Fast Payments</p>
                  <p className="text-gray-600">Customers pay online instantly. Money in your bank in 2 business days.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 6: Customer Portal */}
          <div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-blue-50 rounded-lg p-8 border-2 border-blue-200">
                <div className="text-6xl mb-4 text-center">👤</div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 mb-2">Client Self-Service</p>
                  <p className="text-gray-600">Customers manage everything themselves - less work for you</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    6
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Customer Portal</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Your customers get their own login where they can view job history, make payments, request service, and track jobs in real-time. Less phone calls for you.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Customers view all their properties and jobs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Request service appointments online</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Pay invoices and view payment history</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Everything You Need in One Place
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered</h3>
              <p className="text-gray-600">
                Smart pricing, AI receptionist, route optimization, and business insights powered by artificial intelligence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Apps</h3>
              <p className="text-gray-600">
                Native iOS and Android apps. Works offline with automatic sync. Install as PWA on any device.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Text & Call</h3>
              <p className="text-gray-600">
                Two-way SMS messaging and AI phone receptionist. Communicate with customers right from the app.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reports & Analytics</h3>
              <p className="text-gray-600">
                Revenue forecasting, customer segmentation, employee time reports, and custom analytics dashboards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">QuickBooks Sync</h3>
              <p className="text-gray-600">
                Automatic two-way sync with QuickBooks Online. Invoices, payments, and customers sync automatically.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Service Plans</h3>
              <p className="text-gray-600">
                Recurring subscription billing for maintenance plans. Automated lead nurturing and Stripe payment processing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Time Tracking</h3>
              <p className="text-gray-600">
                GPS clock in/out, payroll-ready time exports, overtime tracking, and detailed employee time reports.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Photo Galleries</h3>
              <p className="text-gray-600">
                Job photos auto-backup to Google Drive. Create public portfolio galleries to showcase your work.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Documents</h3>
              <p className="text-gray-600">
                Create custom warranties, scope of work documents, and contracts with your branding and templates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Streamline Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join contractors who are saving time and making more money with Creative Job Hub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-lg font-bold text-xl transition-colors"
            >
              Start Your 14-Day Free Trial
            </Link>
            <Link 
              to="/pricing"
              className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-12 py-4 rounded-lg font-bold text-xl transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <p className="text-blue-200 mt-6">
            No charge for 14 days. Cancel anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
