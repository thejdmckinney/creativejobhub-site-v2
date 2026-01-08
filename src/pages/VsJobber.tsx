import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import vsJobberImage from '../assets/cjh-vs-jobber.png';

export default function VsJobber() {
  return (
    <div className="bg-white">
      <SEO 
        title="Creative Job Hub vs Jobber - Save $1,560/Year"
        description="Detailed comparison: Creative Job Hub vs Jobber. Get the same features for $89/month instead of $219/month. Save $1,560 per year with better support and no user fees."
        keywords="Jobber alternative, Creative Job Hub vs Jobber, Jobber comparison, cheaper than Jobber"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Creative Job Hub vs Jobber
            </h1>
            <p className="text-2xl text-gray-600">
              Same features. Half the price. No hidden fees.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <img 
              src={vsJobberImage} 
              alt="Creative Job Hub vs Jobber Comparison" 
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Price Comparison - Big and Bold */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            The Real Cost (3 Users + Essential Features)
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Jobber */}
            <div className="bg-gray-100 rounded-lg p-8 border-2 border-gray-300">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Jobber</h3>
              <div className="space-y-4 text-lg text-gray-700 mb-6">
                <div className="flex justify-between">
                  <span>Connect plan (base):</span>
                  <span className="font-semibold">$199/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>+ 2 additional users:</span>
                  <span className="font-semibold">$80/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>+ GPS tracking (Grow tier):</span>
                  <span className="font-semibold">$50/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>+ Text reminders:</span>
                  <span className="font-semibold">$30/mo</span>
                </div>
                <div className="border-t-2 border-gray-400 pt-4 flex justify-between">
                  <span className="font-bold text-xl">Total:</span>
                  <span className="font-bold text-2xl text-red-600">$359/mo</span>
                </div>
              </div>
              <p className="text-center text-3xl font-bold text-gray-900 mb-2">$4,308/year</p>
              <p className="text-center text-sm text-gray-500">* Based on typical usage</p>
            </div>

            {/* Creative Job Hub */}
            <div className="bg-green-50 rounded-lg p-8 border-4 border-green-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-full font-bold">
                BEST VALUE
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Creative Job Hub</h3>
              <div className="space-y-4 text-lg text-gray-700 mb-6">
                <div className="flex justify-between">
                  <span>Everything included:</span>
                  <span className="font-semibold">$89/mo</span>
                </div>
                <div className="py-16 text-center">
                  <p className="text-2xl text-gray-500 italic">That's it.</p>
                  <p className="text-gray-600 mt-2">No per-user fees. No upgrades needed.</p>
                </div>
                <div className="border-t-2 border-green-400 pt-4 flex justify-between">
                  <span className="font-bold text-xl">Total:</span>
                  <span className="font-bold text-2xl text-green-600">$89/mo</span>
                </div>
              </div>
              <p className="text-center text-3xl font-bold text-gray-900 mb-2">$1,068/year</p>
              <p className="text-center text-sm text-green-700 font-semibold">✓ All features included</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-5xl font-bold text-green-600 mb-2">Save $3,240/year</p>
            <p className="text-xl text-gray-600">That's a truck payment. Or a vacation. Or actual profit.</p>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Feature-by-Feature Comparison
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-bold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-lg font-bold text-blue-600">Creative Job Hub</th>
                  <th className="px-6 py-4 text-center text-lg font-bold text-gray-600">Jobber</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-semibold">Unlimited Users</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                  <td className="px-6 py-4 text-center text-gray-900">$40/user/mo</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-semibold">GPS Tracking</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                  <td className="px-6 py-4 text-center text-gray-900">Grow tier required</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-semibold">Text Messaging</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓ Unlimited</td>
                  <td className="px-6 py-4 text-center text-gray-900">$30/mo extra</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-semibold">QuickBooks Sync</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-semibold">Custom Forms</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓ Unlimited</td>
                  <td className="px-6 py-4 text-center text-gray-900">Limited on Connect</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-semibold">Automated Workflows</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                  <td className="px-6 py-4 text-center text-gray-900">Grow tier required</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-semibold">Service Plans/Recurring</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                  <td className="px-6 py-4 text-center text-gray-900">Grow tier required</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-semibold">Mobile App (iOS & Android)</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-semibold">Online Booking</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-semibold">Payment Processing</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-semibold">Marketing Campaign Manager</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                  <td className="px-6 py-4 text-center text-2xl text-red-500">✗</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-semibold">Industry-Specific Tools (Pool, Chimney)</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                  <td className="px-6 py-4 text-center text-2xl text-red-500">✗</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-semibold">Built by a Contractor</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                  <td className="px-6 py-4 text-center text-2xl text-red-500">✗</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What Jobber Users Complain About */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What Jobber Users Complain About
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">💸 Per-User Fees Add Up Fast</h3>
              <p className="text-gray-700 mb-4">
                "Started at $199/month. Added 3 employees and now I'm at $319/month just for the base plan."
              </p>
              <p className="font-semibold text-green-700">
                ✓ Creative Job Hub: Unlimited users at $89/month
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">📊 Need Grow Tier For Basic Features</h3>
              <p className="text-gray-700 mb-4">
                "GPS tracking and automated workflows are locked behind the Grow plan. Had to upgrade just to track my team."
              </p>
              <p className="font-semibold text-green-700">
                ✓ Creative Job Hub: All features included
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">💬 Texting Costs Extra</h3>
              <p className="text-gray-700 mb-4">
                "Text reminders are $30/month on top of everything else. Why isn't this included?"
              </p>
              <p className="font-semibold text-green-700">
                ✓ Creative Job Hub: Unlimited texts included
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🔧 Not Built For My Industry</h3>
              <p className="text-gray-700 mb-4">
                "I run a pool service company. No chemical tracking, no pool profiles. Just generic forms."
              </p>
              <p className="font-semibold text-green-700">
                ✓ Creative Job Hub: Pool & chimney tools built-in
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contractors Switch */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Contractors Are Switching from Jobber
          </h2>
          <div className="space-y-6 text-xl">
            <div className="flex items-start gap-4">
              <span className="text-3xl">💰</span>
              <div>
                <p className="font-bold mb-2">They're Tired of Per-User Fees</p>
                <p className="text-blue-100">
                  "I hired 2 employees and my Jobber bill went from $199 to $279. Creative Job Hub stayed at $89."
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">🚀</span>
              <div>
                <p className="font-bold mb-2">They Want All Features, Not Just Some</p>
                <p className="text-blue-100">
                  "On Jobber Connect, I couldn't use GPS tracking or service plans. Had to pay $100+ more per month to upgrade."
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">🔧</span>
              <div>
                <p className="font-bold mb-2">They Need Industry-Specific Tools</p>
                <p className="text-blue-100">
                  "Jobber doesn't have chemical tracking for my pool routes or CSIA compliance for chimney inspections. Creative Job Hub does."
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">📱</span>
              <div>
                <p className="font-bold mb-2">They Want Software Built By Someone Who Gets It</p>
                <p className="text-blue-100">
                  "Jeremy built this because he runs a contracting business. He understands what we actually need in the field."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Plans */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Compare Plans Side-by-Side
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Jobber Plans */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Jobber Plans</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
                  <p className="text-2xl font-bold text-gray-900 mb-2">Connect: $199/mo</p>
                  <p className="text-sm text-gray-600 mb-4">+ $40/user after first</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>✗ No GPS tracking</li>
                    <li>✗ No automated workflows</li>
                    <li>✗ Limited custom forms</li>
                    <li>✗ No service plans</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
                  <p className="text-2xl font-bold text-gray-900 mb-2">Grow: $299/mo</p>
                  <p className="text-sm text-gray-600 mb-4">+ $40/user after first 3</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ GPS tracking included</li>
                    <li>✓ Automated workflows</li>
                    <li>✓ Service plans</li>
                    <li>✗ Still costs $30/mo for texting</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Creative Job Hub */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Creative Job Hub</h3>
              <div className="bg-green-50 rounded-lg p-6 border-4 border-green-500 h-full flex flex-col justify-center">
                <p className="text-4xl font-bold text-gray-900 mb-4 text-center">$89/month</p>
                <p className="text-center text-gray-600 mb-6">Everything. No tiers. No games.</p>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    Unlimited users
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    GPS tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    Unlimited texts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    Automated workflows
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    Service plans
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    Marketing campaigns
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    Industry-specific tools
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Switching from Jobber? Questions Answered.
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How hard is it to switch from Jobber?</h3>
              <p className="text-gray-700">Not hard at all. You can export your customer data from Jobber and import it into Creative Job Hub. Most contractors are fully switched in a day or two.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Will I lose my customer data?</h3>
              <p className="text-gray-700">Nope. You own your data. Export it from Jobber, import to Creative Job Hub. All your customers, job history, and notes come with you.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What about my team? Will they need retraining?</h3>
              <p className="text-gray-700">Creative Job Hub is actually simpler than Jobber. If your team can use Jobber, they'll pick up Creative Job Hub in an hour. Plus, we have video tutorials.</p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I try it before canceling Jobber?</h3>
              <p className="text-gray-700">Yes! Start your 14-day free trial. Run both systems side-by-side if you want. No charge for 14 days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Save $3,240/Year?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join contractors who switched from Jobber and never looked back.
          </p>
          <div className="bg-white text-gray-900 rounded-2xl p-12 max-w-xl mx-auto mb-8">
            <div className="mb-6">
              <span className="text-6xl font-bold">$89</span>
              <span className="text-xl text-gray-500">/month</span>
            </div>
            <p className="text-xl font-semibold mb-8">Everything Jobber charges extra for—included</p>
            <Link 
              to="/signup"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-lg font-bold text-xl transition-colors"
            >
              Start Free Trial - 14 Days
            </Link>
            <p className="text-gray-500 mt-4">No charge for 14 days</p>
          </div>
          <p className="text-orange-100">
            Questions about switching?{' '}
            <a href="mailto:jeremy@creativejobhub.com" className="text-white font-semibold hover:underline">
              Email me directly
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
