import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';

export default function VsWorkiz() {
  return (
    <div className="bg-white">
      <SEO 
        title="Creative Job Hub vs Workiz - Save $1,788/Year"
        description="Compare Creative Job Hub vs Workiz. Get more features for $89/month vs $238/month. Save $1,788 per year with unlimited users and better integrations."
        keywords="Workiz alternative, Creative Job Hub vs Workiz, Workiz comparison"
      />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Competitors', path: '/competitors' },
          { label: 'Creative Job Hub vs Workiz' }
        ]} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Creative Job Hub vs Workiz
            </h1>
            <p className="text-2xl text-gray-600 mb-4">
              Save $1,692/year with better mobile experience
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-6">
              Workiz looks good on paper, but contractors complain about the clunky mobile app and limited customization. Let's compare.
            </p>
            <StarRating />
          </div>

          {/* Price Comparison */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Workiz</h3>
              <div className="text-4xl font-bold text-red-600 mb-4">$230/month</div>
              <div className="space-y-2 text-gray-700 mb-6">
                <p>• Base plan: $150/mo</p>
                <p>• Additional features: +$50/mo</p>
                <p>• Per-user charges: +$30/mo</p>
                <p className="text-sm text-gray-500">* Limited customization</p>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                $2,760<span className="text-lg font-normal">/year</span>
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
                <p>• Unlimited users</p>
                <p>• Full customization</p>
                <p className="text-sm text-green-600 font-semibold">✓ Better mobile app</p>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                $1,068<span className="text-lg font-normal">/year</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-3xl font-bold text-green-600 mb-4">
              Save $1,692 per year = $8,460 over 5 years
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
                  <th className="text-center p-4 font-bold text-gray-900">Workiz</th>
                  <th className="text-center p-4 font-bold text-blue-600">Creative Job Hub</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Base Monthly Cost', them: '$230/mo', us: '$89/mo' },
                  { feature: 'Job Scheduling', them: '✓', us: '✓' },
                  { feature: 'GPS Tracking', them: '✓', us: '✓' },
                  { feature: 'Invoice & Payments', them: '✓', us: '✓' },
                  { feature: 'Mobile App Quality', them: 'Clunky', us: '✓ Fast & Smooth' },
                  { feature: 'Customer Portal', them: 'Basic', us: '✓ Advanced' },
                  { feature: 'QuickBooks Sync', them: '✓', us: '✓' },
                  { feature: 'Custom Forms', them: 'Limited', us: '✓ Unlimited' },
                  { feature: 'Text Messaging', them: 'Add-on $', us: '✓ Included' },
                  { feature: 'Marketing Tools', them: 'Basic', us: '✓ Advanced' },
                  { feature: 'Team Management', them: 'Per user fee', us: '✓ Unlimited' },
                  { feature: 'Industry Templates', them: 'Generic', us: '✓ Specialized' },
                  { feature: 'Customization', them: 'Limited', us: '✓ Extensive' },
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

      {/* What Workiz Users Complain About */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            What Workiz Users Complain About
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            These are real complaints from actual Workiz users on review sites and forums.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📱 Clunky Mobile App</h3>
              <p className="text-gray-600 mb-4">
                "The mobile app is slow and unintuitive. My techs constantly complain about how many screens they have to tap through to complete a job. It's frustrating when you're on a ladder or your hands are dirty."
              </p>
              <p className="text-sm font-semibold text-green-600">
                ✓ Creative Job Hub: Built by a contractor who uses it daily in the field
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎨 Limited Customization</h3>
              <p className="text-gray-600 mb-4">
                "Can't customize forms or workflows the way we need. Everything is rigid and generic. Our pool service business needs specific fields and Workiz doesn't let us add them easily."
              </p>
              <p className="text-sm font-semibold text-green-600">
                ✓ Creative Job Hub: Fully customizable forms and workflows
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💸 Nickel and Diming</h3>
              <p className="text-gray-600 mb-4">
                "Started at $150/month, but ended up at $250 after adding team members and basic features that should be included. Text messaging costs extra. Extra users cost extra. It adds up fast."
              </p>
              <p className="text-sm font-semibold text-green-600">
                ✓ Creative Job Hub: Everything included, unlimited users
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🐌 Slow Loading Times</h3>
              <p className="text-gray-600 mb-4">
                "Takes forever to load on mobile data. When you're between jobs and trying to update info quickly, waiting 10-15 seconds for screens to load is unacceptable. Kills productivity."
              </p>
              <p className="text-sm font-semibold text-green-600">
                ✓ Creative Job Hub: Lightning-fast mobile performance
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
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Actually Fast Mobile App</h3>
              <p className="text-gray-600">
                Built by someone who uses it in the field every day. No unnecessary screens, no slow loading times.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Full Customization</h3>
              <p className="text-gray-600">
                Create custom forms, workflows, and templates that match exactly how your business works.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Better Price</h3>
              <p className="text-gray-600">
                Save $141/month ($1,692/year) with unlimited users and all features included.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 rounded-lg p-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 italic mb-4">
                "Switched from Workiz 3 months ago because the mobile app was driving my team crazy. CJH is SO much faster and easier to use. My techs actually like using it now instead of complaining. Plus I'm saving $150/month."
              </p>
              <p className="font-semibold text-gray-900">— David R., Electrician, Phoenix AZ</p>
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
            {/* Workiz */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Workiz</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Basic Plan</span>
                  <span className="font-semibold text-gray-900">$150/mo</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Text Messaging</span>
                  <span className="font-semibold text-gray-900">+$20/mo</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Additional Users (2)</span>
                  <span className="font-semibold text-gray-900">+$40/mo</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Premium Features</span>
                  <span className="font-semibold text-gray-900">+$20/mo</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b-2 border-gray-300">
                  <span className="text-gray-700">Mobile App Issues</span>
                  <span className="font-semibold text-red-600">Time lost</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xl font-bold text-gray-900">Monthly Total</span>
                  <span className="text-3xl font-bold text-red-600">$230</span>
                </div>
                <div className="text-center pt-4">
                  <p className="text-2xl font-bold text-gray-900">$2,760/year</p>
                  <p className="text-sm text-gray-500 mt-1">Plus lost productivity</p>
                </div>
              </div>
            </div>

            {/* Creative Job Hub */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 text-white relative">
              <div className="absolute -top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold">
                SAVE $1,692/YR
              </div>
              <h3 className="text-2xl font-bold mb-6 text-center">Creative Job Hub</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-blue-400">
                  <span className="text-blue-100">Complete Plan</span>
                  <span className="font-semibold">$89/mo</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-blue-400">
                  <span className="text-blue-100">Text Messaging</span>
                  <span className="font-semibold text-green-300">✓ Included</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-blue-400">
                  <span className="text-blue-100">Unlimited Users</span>
                  <span className="font-semibold text-green-300">✓ Included</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-blue-400">
                  <span className="text-blue-100">All Features</span>
                  <span className="font-semibold text-green-300">✓ Included</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b-2 border-blue-300">
                  <span className="text-blue-100">Fast Mobile App</span>
                  <span className="font-semibold text-green-300">✓ Optimized</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xl font-bold">Monthly Total</span>
                  <span className="text-3xl font-bold text-green-300">$89</span>
                </div>
                <div className="text-center pt-4">
                  <p className="text-2xl font-bold">$1,068/year</p>
                  <p className="text-sm text-blue-200 mt-1">Everything included</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Mobile App: Where It Really Matters
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Your techs spend 80% of their time in the mobile app. It needs to be fast, simple, and reliable.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-red-50 rounded-lg p-8 border-2 border-red-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Workiz Mobile</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🐌</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Slow Loading</h4>
                    <p className="text-gray-600 text-sm">10-15 second load times on mobile data</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🤯</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Too Many Taps</h4>
                    <p className="text-gray-600 text-sm">Multiple screens to complete simple tasks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">😕</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Confusing UI</h4>
                    <p className="text-gray-600 text-sm">Not intuitive, requires training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Frequent Bugs</h4>
                    <p className="text-gray-600 text-sm">Crashes and sync issues reported</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-8 border-2 border-green-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Creative Job Hub Mobile</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Lightning Fast</h4>
                    <p className="text-gray-600 text-sm">Instant loading, even on slow connections</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">👆</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Minimal Taps</h4>
                    <p className="text-gray-600 text-sm">Everything is 1-2 taps away</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">😊</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Intuitive Design</h4>
                    <p className="text-gray-600 text-sm">Built by someone who uses it daily</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Rock Solid</h4>
                    <p className="text-gray-600 text-sm">Reliable, tested in real field conditions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Switching FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Making The Switch: Common Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How hard is it to migrate from Workiz?
              </h3>
              <p className="text-gray-600">
                Pretty easy! Export your customer list from Workiz (they provide CSV export), and we'll help you import it. Most contractors complete the switch in a day or two.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I try it before canceling Workiz?
              </h3>
              <p className="text-gray-600">
                Absolutely! Start a 14-day free trial. Run it alongside Workiz, let your team test the mobile app, and switch when you're confident. No charge for 14 days.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Will my team adapt easily to a new app?
              </h3>
              <p className="text-gray-600">
                Most techs find CJH easier to use than Workiz because it's more intuitive. Less taps, faster loading, clearer layout. We've had multiple contractors tell us their team actually prefers CJH.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you have the same integrations as Workiz?
              </h3>
              <p className="text-gray-600">
                Yes! We integrate with QuickBooks, payment processors, and all essential business tools. If there's a specific integration you need, let us know.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Save $1,692 Per Year?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Get a faster mobile app, better customization, and save money.
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
