import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';

export default function VsServiceM8() {
  return (
    <div className="bg-white">
      <SEO 
        title="ServiceM8: $129/Month Per User. Us: $89/Month Total."
        description="Add 5 users on ServiceM8 = $645/month. Add 50 users on Creative Job Hub = $89/month. Per-user pricing doesn't scale. We do. Try free for 14 days."
        keywords="ServiceM8 alternative, Creative Job Hub vs ServiceM8, ServiceM8 comparison"
      />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Competitors', path: '/competitors' },
          { label: 'Creative Job Hub vs ServiceM8' }
        ]} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Creative Job Hub vs ServiceM8
            </h1>
            <p className="text-2xl text-gray-600 mb-4">
              Save $480/year with more powerful features
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-6">
              ServiceM8 is fine for basic scheduling, but lacks the advanced job management and automation features growing contractors need.
            </p>
            <StarRating />
          </div>

          {/* Price Comparison */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ServiceM8</h3>
              <div className="text-4xl font-bold text-red-600 mb-4">$129/month</div>
              <div className="space-y-2 text-gray-700 mb-6">
                <p>• Basic features only</p>
                <p>• Limited automation</p>
                <p>• Per-user pricing adds up</p>
                <p className="text-sm text-gray-500">* 5+ users = extra costs</p>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                $1,548<span className="text-lg font-normal">/year</span>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 relative">
              <div className="absolute -top-4 right-4 bg-orange-500 text-white px-4 py-1 rounded-full font-bold text-sm">
                BEST VALUE
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Creative Job Hub</h3>
              <div className="text-4xl font-bold text-green-600 mb-4">$89/month</div>
              <div className="space-y-2 text-gray-700 mb-6">
                <p>• Advanced automation</p>
                <p>• Powerful job management</p>
                <p>• Unlimited users included</p>
                <p className="text-sm text-green-600 font-semibold">✓ No per-user fees</p>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                $1,068<span className="text-lg font-normal">/year</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-3xl font-bold text-green-600 mb-4">
              Save $480 per year = $2,400 over 5 years
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
                  <th className="text-center p-4 font-bold text-gray-900">ServiceM8</th>
                  <th className="text-center p-4 font-bold text-blue-600">Creative Job Hub</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Base Monthly Cost', them: '$129/mo', us: '$89/mo' },
                  { feature: 'Job Scheduling', them: '✓', us: '✓' },
                  { feature: 'GPS Tracking', them: '✓', us: '✓' },
                  { feature: 'Invoice & Payments', them: '✓', us: '✓' },
                  { feature: 'Customer Portal', them: 'Basic', us: '✓ Advanced' },
                  { feature: 'QuickBooks Sync', them: '✓', us: '✓' },
                  { feature: 'Mobile App', them: '✓', us: '✓' },
                  { feature: 'Text Messaging', them: 'Add-on', us: '✓ Included' },
                  { feature: 'Automation Rules', them: 'Limited', us: '✓ Advanced' },
                  { feature: 'Custom Forms', them: 'Basic', us: '✓ Unlimited' },
                  { feature: 'Job Templates', them: 'Limited', us: '✓ Unlimited' },
                  { feature: 'Team Management', them: 'Basic', us: '✓ Advanced' },
                  { feature: 'Unlimited Users', them: '✗ Extra cost', us: '✓ Included' },
                  { feature: 'Advanced Reporting', them: 'Add-on', us: '✓ Included' },
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
            Common Complaints About ServiceM8
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Basic Features Only</h3>
              <p className="text-gray-600">
                "ServiceM8 is fine for scheduling, but once you need automation or advanced job management, you hit a wall fast."
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Per-User Costs Add Up</h3>
              <p className="text-gray-600">
                "Started at $129/month but every time we hired someone new, the price went up. Now we're paying way more than we budgeted."
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Limited Customization</h3>
              <p className="text-gray-600">
                "Can't customize it to match our workflow. We have to change how we work to match the software instead of the other way around."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Switch */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Contractors Switch to Creative Job Hub
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Features</h3>
              <p className="text-gray-700 mb-4">
                Everything ServiceM8 does, plus powerful automation, advanced job templates, and unlimited customization.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Automation rules</li>
                <li>✓ Custom workflows</li>
                <li>✓ Advanced reporting</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Unlimited Users</h3>
              <p className="text-gray-700 mb-4">
                One flat price includes unlimited users. Hire more people without worrying about software costs going up.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ No per-user fees</li>
                <li>✓ Add unlimited team members</li>
                <li>✓ Predictable monthly cost</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">$40/Month Savings</h3>
              <p className="text-gray-700 mb-4">
                Save $480/year compared to ServiceM8 base price. Even more savings as you add team members.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Lower base price</li>
                <li>✓ No surprise charges</li>
                <li>✓ More value for money</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Built for Growth</h3>
              <p className="text-gray-700 mb-4">
                ServiceM8 is great when you're tiny, but we're built for contractors who want to grow their business.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Scales with your business</li>
                <li>✓ Advanced features included</li>
                <li>✓ No feature paywalls</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What ServiceM8 Users Complain About */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What ServiceM8 Users Complain About
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">💸 Per-User Fees Add Up Fast</h3>
              <p className="text-gray-700 mb-4">
                "Started at $129/month for 2 users. Now I have 6 staff and paying $389/month. Costs doubled as we grew."
              </p>
              <p className="font-semibold text-green-700">
                ✓ Creative Job Hub: Unlimited users at $89/month flat
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🌏 Australian-Focused Features</h3>
              <p className="text-gray-700 mb-4">
                "Built for Australian market. US contractors hit roadblocks with invoicing, taxes, and local integrations."
              </p>
              <p className="font-semibold text-green-700">
                ✓ Creative Job Hub: Built specifically for US contractors
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">📱 Limited Offline Mode</h3>
              <p className="text-gray-700 mb-4">
                "When I lose signal in rural areas, can't access job details or customer info. Dead in the water."
              </p>
              <p className="font-semibold text-green-700">
                ✓ Creative Job Hub: Full offline mode with auto-sync
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🔧 No Industry-Specific Tools</h3>
              <p className="text-gray-700 mb-4">
                "Generic forms for everything. I run a pool service - need chemical tracking. ServiceM8 doesn't have it."
              </p>
              <p className="font-semibold text-green-700">
                ✓ Creative Job Hub: Pool, chimney, handyman tools built-in
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contractors Switch */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why US Contractors Are Switching from ServiceM8
          </h2>
          <div className="space-y-6 text-xl">
            <div className="flex items-start gap-4">
              <span className="text-3xl">💰</span>
              <div>
                <h3 className="font-bold mb-2">Flat Pricing, No User Fees</h3>
                <p className="text-blue-100">
                  $89/month for unlimited users. Stop worrying about per-seat costs every time you hire someone.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">🇺🇸</span>
              <div>
                <h3 className="font-bold mb-2">Built for US Market</h3>
                <p className="text-blue-100">
                  Designed for US contractors with US-specific features, integrations, and support that understands your business.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">📱</span>
              <div>
                <h3 className="font-bold mb-2">True Offline Mode</h3>
                <p className="text-blue-100">
                  Work anywhere without signal. All data syncs automatically when you're back online.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">🏠</span>
              <div>
                <h3 className="font-bold mb-2">Industry-Specific Tools</h3>
                <p className="text-blue-100">
                  Pool chemical tracking, CSIA chimney inspections, multi-trade management - built right in, not bolt-ons.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">🔗</span>
              <div>
                <h3 className="font-bold mb-2">Better US Integrations</h3>
                <p className="text-blue-100">
                  Native QuickBooks, Stripe, Twilio integration. Keep using the tools you already know.
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
            Switching from ServiceM8 Takes 30 Minutes
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Export Your Customer Data</h3>
              </div>
              <p className="text-gray-700 ml-16">
                ServiceM8 lets you export customers as CSV. Takes 2 minutes. Keep your job history and customer notes.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Import Into Creative Job Hub</h3>
              </div>
              <p className="text-gray-700 ml-16">
                Upload your CSV file. We'll map the fields automatically. Review and import - done in 5 minutes.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Connect Your Payment Tools</h3>
              </div>
              <p className="text-gray-700 ml-16">
                Link Stripe for credit cards, QuickBooks for accounting. Same tools you use now, better integrations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Train Your Team (10 minutes each)</h3>
              </div>
              <p className="text-gray-700 ml-16">
                Interface is simpler than ServiceM8. Most techs are comfortable after one job. Video tutorials included.
              </p>
            </div>

            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">💡 Pro Tip for ServiceM8 Users</h3>
              <p className="text-gray-700">
                Keep ServiceM8 running for 1 week while you test Creative Job Hub. Cancel ServiceM8 once you're confident. No overlap fees.
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
            "ServiceM8 worked fine when it was just me and one helper. But as we grew to 5 people, the per-user costs added up fast. Switched to Creative Job Hub and cut our software bill in half while getting better automation features."
          </blockquote>
          <p className="text-xl text-blue-100">
            — Carlos D., Landscaping & Lawn Care
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I import my data from ServiceM8?
              </h3>
              <p className="text-gray-700">
                Yes! We'll help you migrate your customer data, job history, and pricing. Most contractors are fully switched within 48 hours.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Is it really unlimited users at one price?
              </h3>
              <p className="text-gray-700">
                Absolutely. $89/month whether you have 2 people or 20. No hidden per-user fees, no surprise charges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What if ServiceM8's mobile app works better?
              </h3>
              <p className="text-gray-700">
                Our mobile app is built with modern technology and works great. But if you prefer ServiceM8's mobile experience, we offer a full refund during your 14-day trial.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I keep using ServiceM8 for a while during transition?
              </h3>
              <p className="text-gray-700">
                Yes, many contractors run both systems in parallel for a week or two during transition. No pressure to switch overnight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Upgrade from ServiceM8?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join contractors who switched to more powerful software and saved money.
          </p>
          <Link 
            to="/signup"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-lg font-bold text-xl transition-colors mb-6"
          >
            Start Your 14-Day Free Trial
          </Link>
          <p className="text-gray-500">
            No charge for 14 days. Cancel anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
