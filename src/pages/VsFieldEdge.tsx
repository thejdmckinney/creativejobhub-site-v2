import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';

export default function VsFieldEdge() {
  return (
    <div className="bg-white">
      <SEO 
        title="Crew Ops Pro vs FieldEdge 2026 | Better Mobile App | $89/mo"
        description="FieldEdge's mobile app has a 2.3-star rating. Slow, buggy, crashes constantly. Crew Ops Pro: 4.8 stars, works offline, $80/month cheaper. Switch today."
        keywords="FieldEdge alternative, Crew Ops Pro vs FieldEdge, modern field service software"
      />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Competitors', path: '/competitors' },
          { label: 'Crew Ops Pro vs FieldEdge' }
        ]} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Crew Ops Pro vs FieldEdge
            </h1>
            <p className="text-2xl text-gray-600 mb-4">
              Save $960/year with modern software
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-6">
              FieldEdge has been around forever, but their outdated interface and poor customer support show their age. Time for something better.
            </p>
            <StarRating />
          </div>

          {/* Price Comparison */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">FieldEdge</h3>
              <div className="text-4xl font-bold text-red-600 mb-4">$169/month</div>
              <div className="space-y-2 text-gray-700 mb-6">
                <p>• Outdated interface</p>
                <p>• Poor mobile experience</p>
                <p>• Slow customer support</p>
                <p className="text-sm text-gray-500">* Setup fees may apply</p>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                $2,028<span className="text-lg font-normal">/year</span>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 relative">
              <div className="absolute -top-4 right-4 bg-orange-500 text-white px-4 py-1 rounded-full font-bold text-sm">
                BEST VALUE
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Crew Ops Pro</h3>
              <div className="text-4xl font-bold text-green-600 mb-4">$89/month</div>
              <div className="space-y-2 text-gray-700 mb-6">
                <p>• Modern, clean interface</p>
                <p>• Fast, responsive support</p>
                <p>• Built for today's contractors</p>
                <p className="text-sm text-green-600 font-semibold">✓ No setup fees</p>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                $1,068<span className="text-lg font-normal">/year</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-3xl font-bold text-green-600 mb-4">
              Save $960 per year = $4,800 over 5 years
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
                  <th className="text-center p-4 font-bold text-gray-900">FieldEdge</th>
                  <th className="text-center p-4 font-bold text-blue-600">Crew Ops Pro</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Base Monthly Cost', them: '$169/mo', us: '$89/mo' },
                  { feature: 'Job Scheduling', them: '✓', us: '✓' },
                  { feature: 'GPS Tracking', them: '✓', us: '✓' },
                  { feature: 'Invoice & Payments', them: '✓', us: '✓' },
                  { feature: 'Customer Portal', them: 'Basic', us: '✓ Advanced' },
                  { feature: 'QuickBooks Sync', them: '✓', us: '✓' },
                  { feature: 'Mobile App', them: 'Clunky', us: '✓ Modern' },
                  { feature: 'Text Messaging', them: 'Limited', us: '✓ Included' },
                  { feature: 'User Interface', them: 'Outdated', us: '✓ Modern' },
                  { feature: 'Custom Forms', them: 'Limited', us: '✓ Unlimited' },
                  { feature: 'Customer Support', them: 'Slow response', us: '✓ Fast & helpful' },
                  { feature: 'Team Management', them: 'Basic', us: '✓ Advanced' },
                  { feature: 'Mobile Experience', them: 'Poor', us: '✓ Excellent' },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 text-gray-900 font-medium">{row.feature}</td>
                    <td className="p-4 text-center text-gray-600">{row.them}</td>
                    <td className="p-4 text-center text-blue-600 font-semibold">{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Common Complaints About FieldEdge
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">😤</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Outdated Interface</h3>
              <p className="text-gray-600">
                "Looks like software from 2010. Hard to train new team members when everything feels ancient."
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🐌</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Slow Support</h3>
              <p className="text-gray-600">
                "Takes days to get responses. When you have a problem in the field, you need help NOW, not next week."
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Terrible Mobile App</h3>
              <p className="text-gray-600">
                "The mobile app constantly crashes and is hard to use. My techs hate it and avoid using it whenever possible."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Switch */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Contractors Switch to Crew Ops Pro
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Modern Experience</h3>
              <p className="text-gray-700 mb-4">
                Built in 2024 with modern technology. Clean interface that's intuitive to use. Your team will actually WANT to use it.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Fast and responsive</li>
                <li>✓ Works great on all devices</li>
                <li>✓ Easy to learn</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Better Support</h3>
              <p className="text-gray-700 mb-4">
                Built by a contractor who understands your problems. Fast, helpful support when you need it most.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Quick response times</li>
                <li>✓ Actually understands your business</li>
                <li>✓ No corporate runaround</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">$80/Month Savings</h3>
              <p className="text-gray-700 mb-4">
                Same core features as FieldEdge, but $960/year cheaper. That's real money back in your pocket.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ No hidden fees</li>
                <li>✓ Unlimited users included</li>
                <li>✓ All features at one price</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Built for Small Teams</h3>
              <p className="text-gray-700 mb-4">
                FieldEdge is designed for giant HVAC companies. We're built specifically for small to mid-size contractors.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ No enterprise bloat</li>
                <li>✓ Features you'll actually use</li>
                <li>✓ Pricing that makes sense</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What FieldEdge Users Complain About */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What FieldEdge Users Complain About
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🕰️ Outdated Interface</h3>
              <p className="text-gray-700 mb-4">
                "The software looks like it's from 2010. Clunky menus, confusing navigation. Takes forever to train new employees."
              </p>
              <p className="font-semibold text-green-700">
                ✓ Crew Ops Pro: Modern, intuitive interface designed for 2026
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">📱 Poor Mobile Experience</h3>
              <p className="text-gray-700 mb-4">
                "Mobile app constantly crashes. Techs in the field can't update jobs. Have to wait until they're back in the office."
              </p>
              <p className="font-semibold text-green-700">
                ✓ Crew Ops Pro: Native mobile apps that actually work
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">💬 Slow Customer Support</h3>
              <p className="text-gray-700 mb-4">
                "Takes 2-3 days to get a response. Live chat is never available. When problems happen, we're stuck."
              </p>
              <p className="font-semibold text-green-700">
                ✓ Crew Ops Pro: Same-day support, built by contractors who understand
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">💰 Hidden Setup Fees</h3>
              <p className="text-gray-700 mb-4">
                "Quoted $169/month but paid $800 in setup fees, training costs, and data migration charges."
              </p>
              <p className="font-semibold text-green-700">
                ✓ Crew Ops Pro: $0 setup fees, free migration assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contractors Switch */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Contractors Are Switching from FieldEdge
          </h2>
          <div className="space-y-6 text-xl">
            <div className="flex items-start gap-4">
              <span className="text-3xl">💰</span>
              <div>
                <h3 className="font-bold mb-2">Save $960/Year Immediately</h3>
                <p className="text-blue-100">
                  $89/month vs $169/month. That's real money back in your pocket with no feature compromises.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">🚀</span>
              <div>
                <h3 className="font-bold mb-2">Actually Modern Software</h3>
                <p className="text-blue-100">
                  Built in 2024, not 2010. Clean interface, fast performance, designed for how you actually work today.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">📱</span>
              <div>
                <h3 className="font-bold mb-2">Mobile Apps That Work</h3>
                <p className="text-blue-100">
                  Techs can actually update jobs from the field. No more waiting to get back to the office.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">💬</span>
              <div>
                <h3 className="font-bold mb-2">Support That Responds</h3>
                <p className="text-blue-100">
                  Built by a contractor who answers questions same-day. No 3-day wait times or useless chatbots.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">🔧</span>
              <div>
                <h3 className="font-bold mb-2">Bring Your Own Tools</h3>
                <p className="text-blue-100">
                  Already use QuickBooks or Stripe? Keep them. We integrate instead of forcing you to switch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Switching from FieldEdge is Easy
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Sign Up (2 minutes)</h3>
              </div>
              <p className="text-gray-700 ml-16">
                Start your free trial. You can test everything before making any decisions.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Import Your Data (10 minutes)</h3>
              </div>
              <p className="text-gray-700 ml-16">
                Export customer list from FieldEdge as CSV. Import into Crew Ops Pro. We'll help if you get stuck.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Connect Your Tools (5 minutes)</h3>
              </div>
              <p className="text-gray-700 ml-16">
                Link your QuickBooks, Stripe, Twilio, and other tools. Keep using what works for you.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Run Both for 14 Days</h3>
              </div>
              <p className="text-gray-700 ml-16">
                Use both systems in parallel. When you're confident Crew Ops Pro works better, cancel FieldEdge.
              </p>
            </div>

            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">💡 Pro Tip</h3>
              <p className="text-gray-700">
                Most contractors switch completely within 1 week. The interface is so much easier that training time is minimal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">💬</div>
          <blockquote className="text-2xl font-medium mb-6">
            "We were paying FieldEdge $169/month for software that looked ancient and barely worked on mobile. Switched to Crew Ops Pro and immediately saved $80/month while getting better features and actually good support."
          </blockquote>
          <p className="text-xl text-blue-100">
            — Mike R., Residential Remodeling
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Leave FieldEdge Behind?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join contractors who switched to modern software and saved money.
          </p>
          <Link 
            to="/signup"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-lg font-bold text-xl transition-colors mb-6"
          >
            Start Your 14-Day Free Trial
          </Link>
          <p className="text-gray-500">
            Switch in minutes.
          </p>
        </div>
      </section>
    </div>
  );
}
