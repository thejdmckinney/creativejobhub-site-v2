import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import RelatedPages from '../components/RelatedPages';
import CalculateSavingsButton from '../components/CalculateSavingsButton';
import poolServiceImage from '../assets/crewopspro-pool-service.webp';

export default function PoolServiceSoftware() {
  return (
    <div className="bg-white">
      <SEO 
        title="Pool Service Software 2026 | Chemical Tracking | $89/mo"
        description="Built-in chemical tracking, pool equipment history, and route optimization. Stop using generic software that doesn't understand pool service. $89/month."
        keywords="pool service software, pool maintenance software, pool route software, chemical tracking software, pool business software, pool cleaning software"
      />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Pool Service Software' }
        ]} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Pool Service Software That Tracks Every Chemical Reading
              </h1>
              <p className="text-2xl text-gray-600 mb-6">
                Log water chemistry, optimize routes, automate billing, and grow your pool service business. Built by someone who understands weekly pool maintenance.
              </p>
              <div className="mb-8">
                <StarRating />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/signup" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
                >
                  Start Your 14-Day Free Trial
                </Link>
                <CalculateSavingsButton variant="outline" size="lg" />
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={poolServiceImage} 
                alt="Pool Service Software - Crew Ops Pro" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Pool Service Companies Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Built for Weekly Pool Service Routes
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Generic field service software doesn't understand pool maintenance. We built features specifically for how pool service businesses operate.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">🧪</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Chemical Tracking
              </h3>
              <p className="text-gray-700">
                Log pH, chlorine, alkalinity, hardness, and more at every stop. Track trends over time. Show customers exactly what you're doing each week.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">📸</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Photo Documentation
              </h3>
              <p className="text-gray-700">
                Take photos of water conditions, equipment issues, or completed repairs. Attach to service reports automatically. Prove you were there.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Route Optimization
              </h3>
              <p className="text-gray-700">
                Organize pools by day and optimize drive time. See your Monday route, Tuesday route, etc. Spend less time driving, service more pools.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Automated Billing
              </h3>
              <p className="text-gray-700">
                Set up recurring weekly or monthly service contracts. Invoices generate automatically. Customers get billed even if you forget.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Mobile App for Techs
              </h3>
              <p className="text-gray-700">
                Techs see their daily route, log chemical readings, take photos, mark pools complete, and move to the next stop - all from their phone.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">🔔</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Customer Notifications
              </h3>
              <p className="text-gray-700">
                Send automated texts when you arrive, complete service, or find issues. "Your pool was serviced today" messages keep customers happy.
              </p>
            </div>

            {/* Feature 7 */}
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Equipment & Repairs
              </h3>
              <p className="text-gray-700">
                Track pool equipment (pump model, filter type, heater, etc.). Create repair estimates on-site. Convert to invoices in one tap.
              </p>
            </div>

            {/* Feature 8 */}
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Service History
              </h3>
              <p className="text-gray-700">
                See complete service history for every pool. What chemicals were added? When was the filter cleaned? All tracked automatically.
              </p>
            </div>

            {/* Feature 9 */}
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">💳</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Auto-Pay & QuickBooks
              </h3>
              <p className="text-gray-700">
                Set up customers on auto-pay. Charge credit cards automatically. Everything syncs to QuickBooks. No more chasing payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Pool Service Businesses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Real Pool Service Companies Using CrewOpsPro
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            See how pool service pros are optimizing routes and growing revenue
          </p>

          <div className="space-y-8">
            {/* Case Study 1 */}
            <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-8 shadow-lg border-l-4 border-blue-600">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Crystal Clear Pool Service</h3>
                  <p className="text-gray-600">Phoenix, AZ • 140 weekly accounts • 4 technicians</p>
                </div>
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <p className="text-sm font-bold text-green-700">8 hrs/week saved</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-red-700 mb-2">❌ The Problem:</p>
                  <p className="text-sm text-gray-700">
                    Routes organized manually on paper. Techs drove 180 miles/day with poor routing. 
                    Spent 2 hours/day driving between pools that were 10-15 minutes apart. Wasting gas and time.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-blue-700 mb-2">✓ The Solution:</p>
                  <p className="text-sm text-gray-700">
                    CrewOpsPro's route optimization automatically organized 35 pools per day per tech by geography. 
                    Optimized routes reduced daily driving from 180 miles to 110 miles. Cut drive time by 40%.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-green-700 mb-2">📈 The Result:</p>
                  <p className="text-sm text-gray-700">
                    <strong>Saved 2 hours/day × 4 techs = 8 hours/day saved.</strong> Added 24 new weekly accounts 
                    without hiring. Revenue up $1,440/month ($60/account × 24). Gas costs down $800/month.
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-yellow-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>"We were literally zigzagging across town. CrewOpsPro organized our routes and we picked up 24 accounts without adding a truck."</strong>
                  <span className="block mt-2 text-gray-600">- Carlos Martinez, Owner</span>
                </p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-gradient-to-r from-cyan-50 to-white rounded-xl p-8 shadow-lg border-l-4 border-cyan-600">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Aqua Pro Pool Care</h3>
                  <p className="text-gray-600">Las Vegas, NV • 220 accounts • 6 technicians</p>
                </div>
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <p className="text-sm font-bold text-green-700">$4,200/mo more</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-red-700 mb-2">❌ The Problem:</p>
                  <p className="text-sm text-gray-700">
                    Chemical readings recorded on paper cards at each pool. Cards got wet/damaged. 
                    No history to show customers why green pool happened. Lost historical data for equipment troubleshooting.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-blue-700 mb-2">✓ The Solution:</p>
                  <p className="text-sm text-gray-700">
                    Log pH, chlorine, alkalinity, CYA in CrewOpsPro app per pool. History tracked automatically. 
                    Show customers graph: "Your chlorine dropped 3 weeks ago when we changed filter, here's the trend."
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-green-700 mb-2">📈 The Result:</p>
                  <p className="text-sm text-gray-700">
                    <strong>Upsold 35 customers on equipment maintenance contracts</strong> by showing chemical history 
                    proving equipment issues. $120/month average = <strong>$4,200/month new recurring revenue</strong>.
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-yellow-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>"Having chemical history lets us educate customers. They trust us more because we have the data."</strong>
                  <span className="block mt-2 text-gray-600">- Lisa Chen, Operations Manager</span>
                </p>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-gradient-to-r from-green-50 to-white rounded-xl p-8 shadow-lg border-l-4 border-green-600">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Sunshine Pool Maintenance</h3>
                  <p className="text-gray-600">Tampa, FL • 95 accounts • Owner + 2 techs</p>
                </div>
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <p className="text-sm font-bold text-green-700">$2,850/mo saved</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-red-700 mb-2">❌ The Problem:</p>
                  <p className="text-sm text-gray-700">
                    Owner spent 15 hours/week on billing: creating invoices, tracking payments, sending reminders, 
                    depositing checks. Hired part-time bookkeeper at $450/month just for billing.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-blue-700 mb-2">✓ The Solution:</p>
                  <p className="text-sm text-gray-700">
                    Automated recurring billing. CrewOpsPro charges credit cards automatically every month. 
                    Sends invoices/receipts automatically. Auto-emails payment reminders for past-due accounts.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-green-700 mb-2">📈 The Result:</p>
                  <p className="text-sm text-gray-700">
                    <strong>Owner saved 15 hours/week</strong> (60 hours/month). Eliminated bookkeeper = $450/month saved. 
                    Owner's time worth $40/hour = $2,400/month. <strong>Total: $2,850/month value</strong>.
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-yellow-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>"I don't touch billing anymore. Cards get charged automatically. I just check my bank account and it's there."</strong>
                  <span className="block mt-2 text-gray-600">- Mike Johnson, Owner</span>
                </p>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="bg-gradient-to-r from-purple-50 to-white rounded-xl p-8 shadow-lg border-l-4 border-purple-600">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Blue Wave Pool Service</h3>
                  <p className="text-gray-600">San Diego, CA • 180 accounts • 5 technicians</p>
                </div>
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <p className="text-sm font-bold text-green-700">36 new accounts</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-red-700 mb-2">❌ The Problem:</p>
                  <p className="text-sm text-gray-700">
                    At capacity with 180 accounts. Each tech serviced 36 accounts/week. 
                    Couldn't take new customers without hiring 6th tech (truck, insurance, salary = $50k/year).
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-blue-700 mb-2">✓ The Solution:</p>
                  <p className="text-sm text-gray-700">
                    Optimized routes cut drive time by 30%. Reduced service time with mobile app (no paperwork). 
                    Techs now complete 43 accounts/week instead of 36 (20% more capacity).
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-green-700 mb-2">📈 The Result:</p>
                  <p className="text-sm text-gray-700">
                    <strong>Added 36 new accounts</strong> without hiring (7 per tech × 5 techs). 
                    Revenue: 36 accounts × $60 = <strong>$2,160/month more</strong>. Avoided $50k hiring cost.
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-yellow-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>"We thought we needed another truck. Turns out we just needed better software. Same team, 20% more revenue."</strong>
                  <span className="block mt-2 text-gray-600">- Jennifer Park, Co-Owner</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/signup" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-lg font-semibold text-xl transition-colors shadow-xl"
            >
              Start Your Free Trial - Join 200+ Pool Service Pros
            </Link>
            <p className="text-gray-600 mt-4">14-day free trial • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            One Price. No Hidden Fees.
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Service 50 pools or 500 pools. Add 2 techs or 10 techs. Same price.
          </p>
          <div className="bg-white border-4 border-blue-600 rounded-2xl shadow-2xl p-12 mb-8">
            <div className="text-6xl font-bold text-gray-900 mb-4">$89</div>
            <div className="text-2xl text-gray-600 mb-6">per month</div>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700"><strong>Chemical tracking</strong> - pH, chlorine, alkalinity, more</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700"><strong>Route optimization</strong> - organized by day</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Unlimited pools & technicians</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Automated recurring billing</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Customer notifications</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">QuickBooks integration</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">iOS & Android apps</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Customer portal</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">24/7 support</span>
              </li>
            </ul>
            <Link 
              to="/signup" 
              className="block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Start Your 14-Day Free Trial
            </Link>
            <p className="text-gray-600 mt-4 text-sm">Cancel anytime.</p>
          </div>
        </div>
      </section>

      {/* Real Pool Service Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            We Solve Real Pool Service Problems
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-red-900 mb-3">❌ The Problem</h3>
              <p className="text-gray-700">
                "Customer says we didn't service their pool last week. I have no proof we were there. Lost the customer."
              </p>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-green-900 mb-3">✓ Our Solution</h3>
              <p className="text-gray-700">
                Chemical logs with timestamps and photos prove you serviced the pool. GPS tracking shows your tech was on-site. Customer disputes end immediately.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-red-900 mb-3">❌ The Problem</h3>
              <p className="text-gray-700">
                "My routes are all over the place. I drive 20 extra miles a day because pools aren't organized by location."
              </p>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-green-900 mb-3">✓ Our Solution</h3>
              <p className="text-gray-700">
                Route optimization groups nearby pools together. "Monday Route: East side. Tuesday Route: West side." Cut drive time by hours every week.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-red-900 mb-3">❌ The Problem</h3>
              <p className="text-gray-700">
                "I forget to bill customers sometimes. Lost thousands in revenue because I'm too busy to remember who owes what."
              </p>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-green-900 mb-3">✓ Our Solution</h3>
              <p className="text-gray-700">
                Recurring invoices generate automatically every week/month. Set it once, billing happens forever. Never miss another invoice.
              </p>
            </div>
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
              Whether you specialize in pool service, spa maintenance, pool cleaning, or run a multi-trade operation, Crew Ops Pro adapts to your business. One platform for every field service trade.
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

            {/* Electrical */}
            <Link 
              to="/electrical-software"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Electrical Software
              </h3>
              <p className="text-gray-600">
                Permit tracking, code compliance documentation, and panel upgrade management for electricians.
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

      {/* Related Pages */}
      <RelatedPages
        title="Explore More Solutions"
        pages={[
          {
            title: "See Pricing",
            description: "$89/month for everything. No per-user fees or hidden costs.",
            path: "/pricing",
            icon: "💰"
          },
          {
            title: "Outreach Hub",
            description: "Win back inactive customers and promote seasonal services with targeted campaigns.",
            path: "/outreach-hub",
            icon: "📣"
          },
          {
            title: "Invoicing & Payments",
            description: "Accept payments on-site with mobile card readers and online invoices.",
            path: "/invoicing-payments",
            icon: "�"
          },
          {
            title: "Chimney Sweep Software",
            description: "Industry-specific features for chimney sweep contractors.",
            path: "/chimney-sweep-software",
            icon: "🏠"
          },
          {
            title: "Handyman Software",
            description: "Software for multi-trade contractors managing various services.",
            path: "/handyman-software",
            icon: "�"
          },
          {
            title: "Compare to Competitors",
            description: "See how we compare to Jobber, ServiceTitan, and others.",
            path: "/competitors",
            icon: "⚖️"
          }
        ]}
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Streamline Your Pool Service Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your free 14-day trial. Set up in minutes.
          </p>
          <StarRating />
          <div className="mt-8">
            <Link 
              to="/signup" 
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-5 rounded-lg font-semibold text-xl transition-colors"
            >
              Start Your Free Trial Now
            </Link>
          </div>
          <p className="text-gray-600 mt-6">
            Questions? <a href="mailto:support@crewopspro.com" className="text-blue-600 hover:text-blue-700">Contact us</a> - we're here to help.
          </p>
        </div>
      </section>
    </div>
  );
}
