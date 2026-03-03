import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import SoftwareApplicationSchema from '../components/SoftwareApplicationSchema';
import ProductSchema from '../components/ProductSchema';
import FAQSchema from '../components/FAQSchema';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import RelatedPages from '../components/RelatedPages';
import { trackPricingView } from '../utils/analytics';

const faqs = [
  {
    question: "What if I have 10 employees?",
    answer: "Same price. $89/month. We don't charge per user."
  },
  {
    question: "Are there any contracts?",
    answer: "Nope. Month-to-month. Cancel anytime with one click."
  },
  {
    question: "Do you charge per text message?",
    answer: "No. Unlimited texts included."
  },
  {
    question: "What about payment processing fees?",
    answer: "Standard rates (2.9% + $0.30 per transaction). We don't mark them up like some platforms do."
  },
  {
    question: "Will the price ever increase?",
    answer: "Not for you. If you sign up at $89/month, that's your price. We might adjust pricing for new customers in the future, but existing customers are grandfathered in."
  },
  {
    question: "What if I need to add features later?",
    answer: "Everything's already included. There's nothing to add."
  },
  {
    question: "Is there a setup fee?",
    answer: "No. No setup fees, no training fees, no hidden fees."
  },
  {
    question: "Can I really cancel anytime?",
    answer: "Yes. One click in your account settings. No hoops, no 'are you sure?' guilt trips, no having to email support."
  }
];

export default function Pricing() {
  const [users, setUsers] = useState(3);
  
  useEffect(() => {
    trackPricingView();
  }, []);

  // Calculate competitor pricing (Jobber-style)
  const jobberBase = 199;
  const jobberPerUser = 40;
  const jobberGPS = 100; // Upgrade to Grow tier
  const jobberTexts = 30;
  const jobberTotal = jobberBase + (users - 1) * jobberPerUser + jobberGPS + jobberTexts;
  
  const crewOpsProPrice = 89;
  const annualSavings = (jobberTotal - crewOpsProPrice) * 12;

  return (
    <div className="bg-white">
      <SEO 
        title="Affordable Field Service Management Software - $89/Month | Crew Ops Pro"
        description="Best field service management software for small business. $89/month unlimited users vs competitors at $300+/month. Cloud-based, mobile app, QuickBooks integration included."
        keywords="affordable field service software, field service management software for small business, best field service management software, field service software pricing, unlimited users field service software, cloud based field service software"
      />
      <SoftwareApplicationSchema />
      <ProductSchema />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.crewopspro.com' },
        { name: 'Pricing', url: 'https://www.crewopspro.com/pricing' }
      ]} />
      
      {/* Hero Section - More Attention Grabbing */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🔥 MOST POPULAR PLAN
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Affordable Field Service Management Software for Small Business
              </h1>
              <p className="text-2xl text-blue-100 mb-8">
                Best field service software at $89/month with unlimited users. 
                While competitors charge <span className="font-bold text-white">$300+/month</span>, 
                we keep it simple and affordable.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <StarRating />
                <span className="text-white">4.9/5 from 280+ contractors</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/signup"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors text-center"
                >
                  Start Free Trial - 14 Days
                </Link>
                <Link 
                  to="/how-it-works"
                  className="inline-block bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors text-center"
                >
                  See How It Works
                </Link>
              </div>
              <p className="text-blue-200 text-sm mt-4">
                ✓ No credit card required ✓ Setup in 15 minutes ✓ Cancel anytime
              </p>
            </div>
            
            {/* Pricing Box */}
            <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-6">
                <div className="text-gray-600 text-sm font-semibold uppercase mb-2">Cloud-Based Solution</div>
                <div className="mb-4">
                  <span className="text-6xl font-bold text-gray-900">$89</span>
                  <span className="text-2xl text-gray-500">/month</span>
                </div>
                <p className="text-xl font-semibold text-gray-700">Complete Field Service Management Software</p>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl font-bold">✓</span>
                  <span className="text-gray-700"><strong>Unlimited</strong> users, jobs, texts</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl font-bold">✓</span>
                  <span className="text-gray-700">Mobile field service app (iOS & Android)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl font-bold">✓</span>
                  <span className="text-gray-700">Cloud-based scheduling & dispatch software</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl font-bold">✓</span>
                  <span className="text-gray-700">Field service invoicing & payments</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl font-bold">✓</span>
                  <span className="text-gray-700">QuickBooks integration included</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl font-bold">✓</span>
                  <span className="text-gray-700">GPS tracking & route optimization</span>
                </div>
              </div>
              
              <Link 
                to="/signup"
                className="block w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-bold text-xl transition-colors text-center mb-3"
              >
                Start Free Trial
              </Link>
              <p className="text-center text-sm text-gray-500">No charge for 14 days. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">280+</div>
              <div className="text-gray-600 text-sm">Active Contractors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">4.9/5</div>
              <div className="text-gray-600 text-sm">Customer Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">$3,240</div>
              <div className="text-gray-600 text-sm">Avg. Annual Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">14 Days</div>
              <div className="text-gray-600 text-sm">Free Trial</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section id="calculator" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Compare Field Service Management Software Pricing
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            See how our affordable field service software saves small businesses thousands per year
          </p>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-8">
            <div className="mb-8">
              <label className="block text-gray-900 font-semibold mb-4 text-center text-xl">
                How many people work in your field service business?
              </label>
              <div className="flex items-center justify-center gap-6">
                <button
                  onClick={() => setUsers(Math.max(1, users - 1))}
                  className="w-12 h-12 bg-white rounded-full shadow-lg text-2xl font-bold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  −
                </button>
                <div className="text-6xl font-bold text-blue-600 min-w-[120px] text-center">
                  {users}
                </div>
                <button
                  onClick={() => setUsers(users + 1)}
                  className="w-12 h-12 bg-white rounded-full shadow-lg text-2xl font-bold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  +
                </button>
              </div>
              <div className="text-center mt-4">
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={users}
                  onChange={(e) => setUsers(parseInt(e.target.value))}
                  className="w-64"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Jobber Cost */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Typical Jobber Cost</h3>
                <div className="space-y-2 text-gray-700 mb-4">
                  <div className="flex justify-between">
                    <span>Base plan:</span>
                    <span className="font-semibold">${jobberBase}/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{users - 1} extra user{users > 2 ? 's' : ''}:</span>
                    <span className="font-semibold">${(users - 1) * jobberPerUser}/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GPS tracking upgrade:</span>
                    <span className="font-semibold">${jobberGPS}/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Text messaging:</span>
                    <span className="font-semibold">${jobberTexts}/mo</span>
                  </div>
                  <div className="border-t-2 border-gray-200 pt-2 mt-2 flex justify-between">
                    <span className="font-bold">Monthly Total:</span>
                    <span className="font-bold text-xl text-red-600">${jobberTotal}</span>
                  </div>
                </div>
                <p className="text-center text-2xl font-bold text-gray-900">${(jobberTotal * 12).toLocaleString()}/year</p>
              </div>

              {/* Crew Ops Pro Cost */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 shadow-lg border-2 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Crew Ops Pro</h3>
                <div className="space-y-2 text-gray-700 mb-4">
                  <div className="flex justify-between">
                    <span>Everything included:</span>
                    <span className="font-semibold">${crewOpsProPrice}/mo</span>
                  </div>
                  <div className="py-16 text-center">
                    <p className="text-2xl text-gray-600 font-semibold">That's it. Really.</p>
                    <p className="text-gray-500 mt-2">No per-user fees. Ever.</p>
                  </div>
                  <div className="border-t-2 border-green-300 pt-2 mt-2 flex justify-between">
                    <span className="font-bold">Monthly Total:</span>
                    <span className="font-bold text-xl text-green-600">${crewOpsProPrice}</span>
                  </div>
                </div>
                <p className="text-center text-2xl font-bold text-gray-900">$1,068/year</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <div className="inline-block bg-white rounded-xl px-8 py-6 shadow-lg">
                <p className="text-gray-600 mb-2">You save with Crew Ops Pro:</p>
                <p className="text-5xl font-bold text-green-600 mb-2">${annualSavings.toLocaleString()}</p>
                <p className="text-gray-600">per year</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/signup"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-lg font-bold text-xl transition-colors"
            >
              Start Saving Today - Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Contractors Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Switched from Jobber after they wanted to charge me $50 for each tech. Saved $2,400 in the first year alone. Same features, better price."
              </p>
              <p className="font-semibold text-gray-900">Mike R.</p>
              <p className="text-sm text-gray-500">HVAC Services, Phoenix</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "The pool service features alone are worth it. Chemical tracking, route optimization, and the pricing is unbeatable. No brainer."
              </p>
              <p className="font-semibold text-gray-900">Sarah L.</p>
              <p className="text-sm text-gray-500">Pool Service, Tampa</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Was paying $400/month with Housecall Pro for 6 users. Now paying $89. Literally the exact same features. Easiest decision I ever made."
              </p>
              <p className="font-semibold text-gray-900">Tom K.</p>
              <p className="text-sm text-gray-500">Handyman Services, Austin</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included - Comprehensive List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Complete Field Service Software Features Included
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Best value in field service management software - all features at $89/month
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Core Features */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">🎯</span> Core Features
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700"><strong>Unlimited</strong> users</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700"><strong>Unlimited</strong> jobs</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Mobile app (iOS & Android)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">GPS tracking & live location</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Route optimization</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Customer database (CRM)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Drag-and-drop calendar</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Job templates & workflows</span>
                </div>
              </div>
            </div>

            {/* Communication & Automation */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">💬</span> Communication & Automation
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700"><strong>Unlimited</strong> text messages</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700"><strong>Unlimited</strong> emails</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Automated appointment reminders</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Online booking & scheduling</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Customer portal</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Custom forms & intake</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Photo & file uploads</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Digital signatures</span>
                </div>
              </div>
            </div>

            {/* Billing & Integrations */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">💰</span> Billing & Integrations
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Professional invoicing</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Estimates & quotes</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Payment processing (card & ACH)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Recurring billing</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">QuickBooks Online sync</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Reporting & analytics</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Custom checklists</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Email support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Competitors Charge More */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Why Do Competitors Charge $300-500/Month?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Because they can. They have massive sales teams, fancy offices, and investor expectations.
          </p>
          <div className="bg-gray-800 rounded-xl p-8 mb-8">
            <p className="text-lg text-gray-300 mb-6">
              I built Crew Ops Pro because I was tired of being ripped off by overpriced software. 
              I run Creative Constructors in Dallas-Fort Worth and use this every single day. 
              No sales team. No venture capital. Just good software at a fair price.
            </p>
            <p className="font-semibold text-xl">— Jeremy McKinney, Founder</p>
            <Link to="/why-i-built-this" className="inline-block mt-4 text-blue-400 hover:text-blue-300 underline">
              Read the full story →
            </Link>
          </div>
        </div>
      </section>

      {/* Risk Reversal - Money Back Guarantee */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="text-6xl mb-6">🛡️</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              30-Day Money-Back Guarantee
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Try Crew Ops Pro for 30 days. If you don't love it, we'll refund every penny. No questions asked.
            </p>
            <p className="text-gray-600">
              That's how confident we are that you'll save money and love the software.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Questions? Here Are The Answers.
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Stronger */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Stop Overpaying?</h2>
          <p className="text-2xl mb-12 text-orange-100">
            Join 280+ contractors who switched to Crew Ops Pro and never looked back.
          </p>
          
          <div className="bg-white text-gray-900 rounded-2xl p-12 max-w-xl mx-auto mb-8">
            <div className="mb-6">
              <span className="text-7xl font-bold">$89</span>
              <span className="text-2xl text-gray-500">/month</span>
            </div>
            <p className="text-xl font-semibold mb-2">Everything included</p>
            <p className="text-gray-600 mb-8">No contracts • Cancel anytime • 30-day guarantee</p>
            <Link 
              to="/signup"
              className="block w-full bg-orange-500 hover:bg-orange-600 text-white py-5 rounded-lg font-bold text-2xl transition-colors mb-4"
            >
              Start Free Trial Now
            </Link>
            <p className="text-sm text-gray-500">No charge for 14 days. No credit card required.</p>
          </div>

          <p className="text-orange-100 text-lg">
            Questions? Email me directly:{' '}
            <a href="mailto:jeremy@crewopspro.com" className="text-white font-semibold hover:underline">
              jeremy@crewopspro.com
            </a>
          </p>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages
        title="Learn More About Crew Ops Pro"
        pages={[
          {
            title: "Outreach Hub",
            description: "Proactive client engagement with mass email, SMS campaigns, and follow-ups. A feature competitors don't have.",
            path: "/outreach-hub",
            icon: "📣"
          },
          {
            title: "How It Works",
            description: "See the complete workflow from lead to payment in 6 simple steps.",
            path: "/how-it-works",
            icon: "🔄"
          },
          {
            title: "Compare to Competitors",
            description: "See how we stack up against Jobber, Housecall Pro, and ServiceTitan.",
            path: "/competitors",
            icon: "⚖️"
          },
          {
            title: "Bring Your Own Tools",
            description: "Use Stripe, QuickBooks, and Twilio without markups or hidden fees.",
            path: "/bring-your-own-tools",
            icon: "🔧"
          },
          {
            title: "Industry Solutions",
            description: "Specialized features for pool service, chimney sweeps, HVAC, and more.",
            path: "/chimney-sweep-software",
            icon: "🏠"
          },
          {
            title: "Why I Built This",
            description: "The story of a frustrated contractor who built better software.",
            path: "/why-i-built-this",
            icon: "💡"
          }
        ]}
      />
    </div>
  );
}
