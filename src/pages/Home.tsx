import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import OrganizationSchema from '../components/OrganizationSchema';
import FAQSchema from '../components/FAQSchema';
import SoftwareApplicationSchema from '../components/SoftwareApplicationSchema';
import FAQAccordion from '../components/FAQAccordion';
import IndustryTabs from '../components/IndustryTabs';
import { trackTrialSignup } from '../utils/analytics';
import heroBanner from '../assets/crewopspro-home-page.webp';

export default function Home() {
  // FAQ data for Schema.org markup and display
  const faqs = [
    {
      question: "How much does Crew Ops Pro cost?",
      answer: "$89 per month with everything included - unlimited users, unlimited jobs, QuickBooks integration, mobile apps, GPS tracking, and 24/7 support. No hidden fees or per-user charges."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start."
    },
    {
      question: "Does it work offline?",
      answer: "Yes. The mobile app works offline so your technicians can complete jobs in basements, remote areas, or anywhere without internet. Data syncs automatically when connection is restored."
    },
    {
      question: "Can I import my existing customer data?",
      answer: "Yes. We can import your customer list, job history, and pricing from spreadsheets or most other field service software. Our team handles the migration for free."
    },
    {
      question: "Does it integrate with QuickBooks?",
      answer: "Yes. Crew Ops Pro syncs directly with QuickBooks Online. Invoices, payments, and expenses transfer automatically - no duplicate data entry."
    },
    {
      question: "What industries is Crew Ops Pro built for?",
      answer: "We're built for field service contractors including HVAC, plumbing, electrical, chimney sweeps, handymen, pool service, landscaping, and other service businesses. If you go to customer locations, we're for you."
    },
    {
      question: "How long does it take to get started?",
      answer: "Most contractors are up and running in under 2 hours. Import your customers, add your techs, and you're ready to dispatch jobs. We provide live onboarding support."
    },
    {
      question: "What if my team isn't tech-savvy?",
      answer: "Crew Ops Pro is designed for field teams, not IT departments. If your techs can text, they can use our mobile app. We also provide training videos and 24/7 support."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes. No contracts, no cancellation fees. If Crew Ops Pro doesn't work for your business, cancel with one click."
    },
    {
      question: "Do you charge for customer support?",
      answer: "Never. 24/7 support is included with every plan. Email, phone, or live chat - no extra charge."
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Field Service Software That Doesn't Cost More Than Your Truck Payment"
        description="Jobber wants $3,600/year. ServiceTitan wants $10,000+. We charge $89/month for everything. Built by a contractor who got tired of being ripped off."
        keywords="field service management software, contractor software, hvac software, plumbing software, electrical software, landscaping software, job scheduling, estimates, invoicing, QuickBooks integration"
      />
      <OrganizationSchema />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema />
      
      {/* SECTION 1 - HERO */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Stop Losing Jobs to Messy Scheduling and Slow Invoices
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
                Schedule field teams, dispatch jobs, and get paid faster - all in one system built for service businesses.
              </h2>
              
              {/* Credibility Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Built for field teams</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Works offline</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Get paid in 1-2 days</span>
                </div>
              </div>

              <div className="mb-6">
                <StarRating />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/signup" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block text-center shadow-lg"
                  onClick={() => trackTrialSignup('hero')}
                >
                  Start Your Free Trial
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block text-center"
                >
                  Request a Demo
                </Link>
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                💰 See how much you'll save compared to Jobber
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={heroBanner} 
                alt="Crew Ops Pro dashboard showing job scheduling, team management, and mobile invoicing" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - PROBLEM → SOLUTION STRIP */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-3">❌</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Missed Jobs</h3>
              <p className="text-gray-600 text-sm mb-3">Double-bookings, no-shows, lost revenue</p>
              <div className="text-3xl mb-3">✅</div>
              <p className="text-blue-600 font-semibold text-sm">Smart scheduling prevents conflicts</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">❌</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Messy Scheduling</h3>
              <p className="text-gray-600 text-sm mb-3">Calls, texts, sticky notes everywhere</p>
              <div className="text-3xl mb-3">✅</div>
              <p className="text-blue-600 font-semibold text-sm">One calendar, real-time updates</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">❌</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Slow Payments</h3>
              <p className="text-gray-600 text-sm mb-3">Waiting 30-60 days to get paid</p>
              <div className="text-3xl mb-3">✅</div>
              <p className="text-blue-600 font-semibold text-sm">Collect payment on-site, funds in 1-2 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - FEATURE MICRO-BLOCKS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Everything You Need to Run Your Field Business
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Scheduling Block */}
            <div id="scheduling" className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Stop Double-Booking Your Best Techs
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Drag-and-drop calendar with conflict alerts</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Auto-assign jobs based on tech skills and location</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Customer SMS reminders reduce no-shows by 40%</span>
                </li>
              </ul>
              <Link to="/scheduling" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                Learn more →
              </Link>
            </div>

            {/* Team Management Block */}
            <div id="team-management" className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Know Where Your Team Is and What They're Doing
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Live GPS tracking shows tech locations in real-time</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Time tracking with clock-in/out from mobile app</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Instant dispatch via SMS - no phone tag</span>
                </li>
              </ul>
              <Link to="/team-management" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                Learn more →
              </Link>
            </div>

            {/* Invoicing & Payments Block */}
            <div id="invoicing" className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get Paid Faster, Not Net-30 Slower
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Accept credit cards on-site via mobile app</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Funds deposited in 1-2 business days</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Auto-sync to QuickBooks - zero data entry</span>
                </li>
              </ul>
              <Link to="/invoicing-payments" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                Learn more →
              </Link>
            </div>

            {/* Operations Visibility Block */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow lg:col-span-3">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                See What's Actually Happening in Your Business
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Revenue Insights</h4>
                  <p className="text-gray-600">Track daily revenue, outstanding invoices, and payment trends. See which services generate the most profit and make data-driven pricing decisions.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Tech Performance</h4>
                  <p className="text-gray-600">See which techs close the most jobs and generate the most revenue. Track completion rates, customer ratings, and identify top performers.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Customer History</h4>
                  <p className="text-gray-600">Complete service history, photos, and notes for every customer. Access property details, past invoices, and service preferences instantly from your mobile app.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - INDUSTRY TABS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Built for Your Industry
          </h2>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
            We understand the unique challenges of field service work because we've lived them.
          </p>
        </div>
        <IndustryTabs />
      </section>

      {/* SECTION 5 - SOCIAL PROOF */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Trusted by Service Businesses Across the Country
          </h2>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-1">4.8★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-1">500+</div>
              <div className="text-sm text-gray-600">Active Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-1">50K+</div>
              <div className="text-sm text-gray-600">Jobs Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-1">98%</div>
              <div className="text-sm text-gray-600">Would Recommend</div>
            </div>
          </div>

          {/* Testimonials - TODO: Replace with real testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="mb-4">
                <StarRating />
              </div>
              <p className="text-gray-700 mb-4">
                "We recovered $15,000 in missed service calls in the first 3 months. The SMS dispatch alone was worth the switch."
              </p>
              <div className="font-semibold text-gray-900">Mike Chen</div>
              <div className="text-sm text-gray-600">Chen Plumbing, Austin TX</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="mb-4">
                <StarRating />
              </div>
              <p className="text-gray-700 mb-4">
                "Cut our average payment time from 45 days to 3 days. Cash flow completely changed for our HVAC business."
              </p>
              <div className="font-semibold text-gray-900">Sarah Mitchell</div>
              <div className="text-sm text-gray-600">Cool Air Solutions, Phoenix AZ</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="mb-4">
                <StarRating />
              </div>
              <p className="text-gray-700 mb-4">
                "My techs actually use it. That's the biggest win. Other software sat unused because it was too complicated."
              </p>
              <div className="font-semibold text-gray-900">James Rodriguez</div>
              <div className="text-sm text-gray-600">Rodriguez Electric, Denver CO</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - HOW IT WORKS */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Most contractors are up and running in under 2 hours
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Import Your Customers</h3>
              <p className="text-gray-600">
                Upload your spreadsheet or we'll migrate data from your current software - free of charge
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Add Your Team</h3>
              <p className="text-gray-600">
                Create accounts for your techs, set their skills, and they'll download the mobile app
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Start Dispatching Jobs</h3>
              <p className="text-gray-600">
                Schedule jobs, dispatch to techs, collect payment on-site. That's it.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/contact" 
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-lg font-semibold text-xl transition-colors shadow-lg"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7 - FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Everything you need to know before getting started
          </p>
          <FAQAccordion faqs={faqs} />
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link 
              to="/contact"
              className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              Talk to our team →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8 - FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Stop Losing Revenue to Messy Operations?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join 500+ service businesses using Crew Ops Pro to schedule smarter, dispatch faster, and get paid sooner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-block bg-white text-orange-600 px-12 py-4 rounded-lg font-bold text-xl hover:bg-orange-50 transition-colors shadow-lg"
            >
              Request a Demo
            </Link>
            <Link 
              to="/pricing"
              className="inline-block border-2 border-white text-white px-12 py-4 rounded-lg font-bold text-xl hover:bg-orange-700 transition-colors"
            >
              See Pricing
            </Link>
          </div>
          <p className="mt-6 text-orange-100 text-sm">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
