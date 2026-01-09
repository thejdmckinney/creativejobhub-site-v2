import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import vsHousecallProImage from '../assets/cjh-vs-housecall-pro.png';

export default function VsHousecallPro() {
  return (
    <div className="bg-white">
      <SEO 
        title="Creative Job Hub vs Housecall Pro - Save $1,188/Year"
        description="Compare Creative Job Hub vs Housecall Pro. Get unlimited users for $89/month vs $188/month. Save $1,188 per year with better mobile apps and faster support."
        keywords="Housecall Pro alternative, Creative Job Hub vs Housecall Pro, Housecall Pro comparison"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Creative Job Hub vs Housecall Pro
            </h1>
            <p className="text-2xl text-gray-600 mb-4">
              Save $1,920/year and get better features
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-6">
              Housecall Pro markets itself as the all-in-one solution, but their pricing tells a different story. Let's break down the real costs.
            </p>
            <StarRating />
          </div>
          <div className="max-w-4xl mx-auto mb-12">
            <img 
              src={vsHousecallProImage} 
              alt="Creative Job Hub vs Housecall Pro Comparison" 
              className="w-full rounded-lg shadow-2xl"
            />
          </div>

          {/* Price Comparison */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Housecall Pro</h3>
              <div className="text-4xl font-bold text-red-600 mb-4">$249/month</div>
              <div className="space-y-2 text-gray-700 mb-6">
                <p>• Base plan: $169/mo</p>
                <p>• Marketing add-on: +$50/mo</p>
                <p>• Advanced features: +$30/mo</p>
                <p className="text-sm text-gray-500">* Per user fees apply</p>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                $2,988<span className="text-lg font-normal">/year</span>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 relative">
              <div className="absolute -top-4 right-4 bg-orange-500 text-white px-4 py-1 rounded-full font-bold text-sm">
                BEST VALUE
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Creative Job Hub</h3>
              <div className="text-4xl font-bold text-green-600 mb-4">$89/month</div>
              <div className="space-y-2 text-gray-700 mb-6">
                <p>• All features included</p>
                <p>• No hidden fees</p>
                <p>• Unlimited users</p>
                <p className="text-sm text-green-600 font-semibold">✓ Everything you need</p>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                $1,068<span className="text-lg font-normal">/year</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-3xl font-bold text-green-600 mb-4">
              Save $1,920 per year = $9,600 over 5 years
            </p>
            <Link 
              to="/signup" 
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Start Your 14-Day Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Feature-by-Feature Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
              <thead>
                <tr className="bg-gray-50 border-b-2 border-gray-200">
                  <th className="text-left p-4 font-bold text-gray-900">Feature</th>
                  <th className="text-center p-4 font-bold text-gray-900">Housecall Pro</th>
                  <th className="text-center p-4 font-bold text-blue-600">Creative Job Hub</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Base Monthly Cost', them: '$169/mo', us: '$89/mo' },
                  { feature: 'Job Scheduling', them: '✓', us: '✓' },
                  { feature: 'GPS Tracking', them: '✓', us: '✓' },
                  { feature: 'Invoice & Payments', them: '✓', us: '✓' },
                  { feature: 'Customer Portal', them: '✓', us: '✓' },
                  { feature: 'QuickBooks Sync', them: '✓', us: '✓' },
                  { feature: 'Mobile App', them: '✓', us: '✓' },
                  { feature: 'Text Messaging', them: 'Add-on $', us: '✓ Included' },
                  { feature: 'Marketing Automation', them: '+$50/mo', us: '✓ Included' },
                  { feature: 'Custom Forms', them: 'Limited', us: '✓ Unlimited' },
                  { feature: 'Recurring Maintenance', them: 'Basic', us: '✓ Advanced' },
                  { feature: 'Team Management', them: 'Per user fee', us: '✓ Unlimited' },
                  { feature: 'Industry-Specific Tools', them: 'Generic', us: '✓ Specialized' },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 text-gray-900 font-medium">{row.feature}</td>
                    <td className="p-4 text-center text-gray-700">{row.them}</td>
                    <td className="p-4 text-center">
                      <span className="text-green-600 font-semibold">{row.us}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What Housecall Pro Users Complain About */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            What Housecall Pro Users Complain About
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            These are real complaints from actual Housecall Pro users on review sites and forums.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💸 Hidden Costs Add Up Fast</h3>
              <p className="text-gray-600 mb-4">
                "Started at $169/mo but ended up paying over $300 with all the add-ons we needed. Marketing automation should be standard, not a $50/month extra."
              </p>
              <p className="text-sm font-semibold text-green-600">
                ✓ Creative Job Hub: Everything included in $89/mo
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📱 Clunky Mobile Experience</h3>
              <p className="text-gray-600 mb-4">
                "The mobile app is slow and crashes frequently. Takes too many taps to do simple things when I'm on a ladder or in the truck."
              </p>
              <p className="text-sm font-semibold text-green-600">
                ✓ Creative Job Hub: Built for field use, fast and intuitive
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔒 Locked Into Per-User Pricing</h3>
              <p className="text-gray-600 mb-4">
                "Adding team members costs extra every month. Went from $169 to $249 just by hiring 2 people. That's $960/year more for the same features."
              </p>
              <p className="text-sm font-semibold text-green-600">
                ✓ Creative Job Hub: Unlimited users at no extra cost
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎨 Generic, Not Industry-Specific</h3>
              <p className="text-gray-600 mb-4">
                "Doesn't have specialized features for my pool service business. Had to create workarounds for chemical tracking and maintenance schedules."
              </p>
              <p className="text-sm font-semibold text-green-600">
                ✓ Creative Job Hub: Industry-specific tools built-in
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contractors Switch */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Contractors Are Switching to Creative Job Hub
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real Cost Savings</h3>
              <p className="text-gray-600">
                Save $160/month ($1,920/year) without sacrificing features. That's real money back in your pocket.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Better Mobile Experience</h3>
              <p className="text-gray-600">
                Fast, intuitive mobile app designed by someone who actually works in the field every day.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry-Specific Features</h3>
              <p className="text-gray-600">
                Built-in tools for pool service, HVAC, plumbing, electrical, chimney sweeps, and more.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 rounded-lg p-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 italic mb-4">
                "I switched from Housecall Pro 6 months ago and haven't looked back. CJH is faster, cheaper, and actually has the features I need for my pool business. Housecall was costing me $280/month with add-ons. Now I pay $89 and get MORE features."
              </p>
              <p className="font-semibold text-gray-900">— Marcus T., Pool Service Owner, Dallas TX</p>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Plan Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            The Real Cost Breakdown
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Housecall Pro */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Housecall Pro</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Basic Plan</span>
                  <span className="font-semibold text-gray-900">$169/mo</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Marketing Add-on</span>
                  <span className="font-semibold text-gray-900">+$50/mo</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Additional User (2)</span>
                  <span className="font-semibold text-gray-900">+$30/mo</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Text Messages (est.)</span>
                  <span className="font-semibold text-gray-900">+$15/mo</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b-2 border-gray-300">
                  <span className="text-gray-700">Processing Fees (2.9%)</span>
                  <span className="font-semibold text-gray-900">Variable</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xl font-bold text-gray-900">Monthly Total</span>
                  <span className="text-3xl font-bold text-red-600">$264+</span>
                </div>
                <div className="text-center pt-4">
                  <p className="text-2xl font-bold text-gray-900">$3,168/year</p>
                  <p className="text-sm text-gray-500 mt-1">Plus processing fees</p>
                </div>
              </div>
            </div>

            {/* Creative Job Hub */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 text-white relative">
              <div className="absolute -top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold">
                SAVE $2,100/YR
              </div>
              <h3 className="text-2xl font-bold mb-6 text-center">Creative Job Hub</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-blue-400">
                  <span className="text-blue-100">Complete Plan</span>
                  <span className="font-semibold">$89/mo</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-blue-400">
                  <span className="text-blue-100">Marketing Tools</span>
                  <span className="font-semibold text-green-300">✓ Included</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-blue-400">
                  <span className="text-blue-100">Unlimited Users</span>
                  <span className="font-semibold text-green-300">✓ Included</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-blue-400">
                  <span className="text-blue-100">Text Messages</span>
                  <span className="font-semibold text-green-300">✓ Included</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b-2 border-blue-300">
                  <span className="text-blue-100">All Features</span>
                  <span className="font-semibold text-green-300">✓ Included</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xl font-bold">Monthly Total</span>
                  <span className="text-3xl font-bold text-green-300">$89</span>
                </div>
                <div className="text-center pt-4">
                  <p className="text-2xl font-bold">$1,068/year</p>
                  <p className="text-sm text-blue-200 mt-1">No hidden fees. Ever.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Switching FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Making The Switch: Common Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How hard is it to migrate from Housecall Pro?
              </h3>
              <p className="text-gray-600">
                We make it easy. Export your customer list from Housecall Pro (they provide this), and we'll help you import everything. Most contractors are fully switched in 1-2 days.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I try it before canceling Housecall Pro?
              </h3>
              <p className="text-gray-600">
                Absolutely! Start a 14-day free trial. Test everything, run it alongside Housecall Pro, and only switch when you're 100% confident. No charge for 14 days.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What if I'm locked in a contract with Housecall Pro?
              </h3>
              <p className="text-gray-600">
                Check your contract terms. Many contractors find the savings with CJH cover any early termination fees within 2-3 months. Calculate your potential savings - it might be worth it to switch now.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you offer the same integrations as Housecall Pro?
              </h3>
              <p className="text-gray-600">
                Yes! We integrate with QuickBooks, payment processors, and all the essential tools you're already using. If there's something specific you need, let us know - we're always adding new integrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Save $1,920 Per Year?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join the contractors who switched from Housecall Pro and never looked back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              to="/signup" 
              className="inline-block bg-white hover:bg-gray-100 text-orange-600 px-12 py-4 rounded-lg font-bold text-xl transition-colors"
            >
              Start Free Trial
            </Link>
            <Link 
              to="/pricing" 
              className="inline-block bg-orange-700 hover:bg-orange-800 text-white px-12 py-4 rounded-lg font-bold text-xl transition-colors"
            >
              See Pricing Details
            </Link>
          </div>
          <p className="text-orange-100">
            14-day free trial • No charge for 14 days • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
