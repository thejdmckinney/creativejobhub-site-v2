import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';

export default function VsFieldEdge() {
  return (
    <div className="bg-white">
      <SEO 
        title="Creative Job Hub vs FieldEdge - Save $960/Year"
        description="Modern software that doesn't feel stuck in 2010. Get better features for $89/month vs $169/month. Save $960 per year with faster support and a better mobile app."
        keywords="FieldEdge alternative, Creative Job Hub vs FieldEdge, modern field service software"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Creative Job Hub vs FieldEdge
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Creative Job Hub</h3>
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
                  <th className="text-center p-4 font-bold text-blue-600">Creative Job Hub</th>
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
            Why Contractors Switch to Creative Job Hub
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

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">💬</div>
          <blockquote className="text-2xl font-medium mb-6">
            "We were paying FieldEdge $169/month for software that looked ancient and barely worked on mobile. Switched to Creative Job Hub and immediately saved $80/month while getting better features and actually good support."
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
            No credit card required. Switch in minutes.
          </p>
        </div>
      </section>
    </div>
  );
}
