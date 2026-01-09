import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import csiaInspectionImage from '../assets/csia-inspection-checklist.png';

export default function ChimneySweepSoftware() {
  return (
    <div className="bg-white">
      <SEO 
        title="Chimney Sweep Software - #1 Ranked by Google AI for CSIA Inspections"
        description="The only field service software built for chimney sweeps with CSIA inspection checklists and creosote tracking built right into the mobile app. Ranked #1 by Google AI for chimney sweep features. $89/month, everything included."
        keywords="chimney sweep software, CSIA inspection software, creosote tracking, chimney inspection app, chimney sweep business software, CSIA checklist app"
      />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Chimney Sweep Software' }
        ]} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🏆 #1 Ranked by Google AI for Chimney Sweep Features
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Chimney Sweep Software Built By Someone Who Understands Your Business
            </h1>
            <p className="text-2xl text-gray-600 mb-6">
              CSIA inspection checklists and creosote tracking built right into the mobile app. Complete inspections in the field, not back at the office.
            </p>
            <StarRating />
          </div>

          {/* App Screenshot */}
          <div className="max-w-4xl mx-auto mb-12">
            <img 
              src={csiaInspectionImage} 
              alt="CSIA Inspection Checklist and Creosote Tracking in Creative Job Hub Mobile App" 
              className="w-full rounded-lg shadow-2xl border-4 border-gray-200"
            />
            <p className="text-center text-gray-600 mt-4 text-sm">
              Complete CSIA inspections and log creosote readings right from your mobile device
            </p>
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
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Why Chimney Sweeps Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Why Chimney Sweeps Choose Creative Job Hub
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We're not generic field service software trying to serve everyone. We built features specifically for chimney professionals.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                CSIA Inspection Checklists
              </h3>
              <p className="text-gray-700">
                Complete CSIA Level 1, 2, and 3 inspections right from your mobile app. All inspection items built-in and ready to use. No more paper forms or clipboards.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Creosote Tracking
              </h3>
              <p className="text-gray-700">
                Log creosote buildup readings (Stage 1, 2, or 3) for each flue. Track history over time. Show customers why they need cleaning now, not later.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">📸</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Photo Documentation
              </h3>
              <p className="text-gray-700">
                Take photos during inspection and attach them directly to the checklist. Show customers exactly what you found. Attach to invoices and reports automatically.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Works Offline
              </h3>
              <p className="text-gray-700">
                Complete inspections in basements or remote areas with no cell service. Everything syncs automatically when you're back online.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Instant Estimates
              </h3>
              <p className="text-gray-700">
                Create estimates on-site based on inspection findings. Email or text it to customers before you leave. Convert estimates to invoices in one tap.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">📆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Seasonal Reminders
              </h3>
              <p className="text-gray-700">
                Automatically remind customers when it's time for their annual inspection. Set up recurring maintenance schedules. Never miss a follow-up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            One Price. Everything Included.
          </h2>
          <div className="bg-white border-4 border-blue-600 rounded-2xl shadow-2xl p-12 mb-8">
            <div className="text-6xl font-bold text-gray-900 mb-4">$89</div>
            <div className="text-2xl text-gray-600 mb-6">per month</div>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700"><strong>CSIA Inspection Checklists</strong> - Levels 1, 2, and 3</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700"><strong>Creosote Tracking</strong> - Log readings per flue</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Unlimited users & technicians</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Scheduling & dispatch</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Estimates & invoices</span>
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

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            How We Compare to Generic Field Service Software
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center p-4 font-semibold text-blue-600">Creative Job Hub</th>
                  <th className="text-center p-4 font-semibold text-gray-600">Jobber</th>
                  <th className="text-center p-4 font-semibold text-gray-600">Housecall Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">CSIA Inspection Checklists</td>
                  <td className="text-center p-4">
                    <span className="text-green-600 text-2xl">✓</span>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-red-600">✗</span>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-red-600">✗</span>
                  </td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">Creosote Tracking</td>
                  <td className="text-center p-4">
                    <span className="text-green-600 text-2xl">✓</span>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-red-600">✗</span>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-red-600">✗</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Works Offline</td>
                  <td className="text-center p-4">
                    <span className="text-green-600 text-2xl">✓</span>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-green-600 text-xl">✓</span>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-green-600 text-xl">✓</span>
                  </td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">Monthly Price (Unlimited Users)</td>
                  <td className="text-center p-4">
                    <span className="text-blue-600 font-bold">$89</span>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-gray-600">$219+</span>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-gray-600">$188+</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/competitors" 
              className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              See Full Comparison with All Competitors →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to See Why Chimney Sweeps Are Switching?
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
