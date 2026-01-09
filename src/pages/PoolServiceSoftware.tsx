import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import poolServiceImage from '../assets/pool-software-image.png';

export default function PoolServiceSoftware() {
  return (
    <div className="bg-white">
      <SEO 
        title="Pool Service Software - Chemical Tracking & Route Optimization"
        description="Pool service software with chemical tracking, water testing logs, route optimization, and automated billing. Built for pool maintenance companies. $89/month, everything included."
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
                <Link 
                  to="/pricing" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
                >
                  See Pricing
                </Link>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={poolServiceImage} 
                alt="Pool Service Software - Creative Job Hub" 
                className="w-full h-full object-cover"
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
            <p className="text-gray-600 mt-4 text-sm">No credit card required. Cancel anytime.</p>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Streamline Your Pool Service Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your free 14-day trial. No credit card required. Set up in minutes.
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
            Questions? <a href="mailto:support@creativejobhub.com" className="text-blue-600 hover:text-blue-700">Contact us</a> - we're here to help.
          </p>
        </div>
      </section>
    </div>
  );
}
