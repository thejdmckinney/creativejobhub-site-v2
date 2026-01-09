import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';

export default function VsServiceTitan() {
  return (
    <div className="bg-white">
      <SEO 
        title="Creative Job Hub vs ServiceTitan - Save $5,000+/Year"
        description="Enterprise features without enterprise pricing. Get the same functionality as ServiceTitan for $89/month instead of $500+/month. Perfect for growing contractors."
        keywords="ServiceTitan alternative, affordable ServiceTitan, Creative Job Hub vs ServiceTitan"
      />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Competitors', path: '/competitors' },
          { label: 'Creative Job Hub vs ServiceTitan' }
        ]} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Creative Job Hub vs ServiceTitan
            </h1>
            <p className="text-2xl text-gray-600 mb-4">
              Save $4,932/year without the enterprise complexity
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-6">
              ServiceTitan is overkill for small to mid-size contractors. You don't need a $500+/month enterprise platform to run a successful field service business.
            </p>
            <StarRating />
          </div>

          {/* Price Comparison */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ServiceTitan</h3>
              <div className="text-4xl font-bold text-red-600 mb-4">$500+/month</div>
              <div className="space-y-2 text-gray-700 mb-6">
                <p>• Base plan: $500+/mo (quoted)</p>
                <p>• Long-term contract required</p>
                <p>• Complex setup & onboarding</p>
                <p>• Training required</p>
                <p className="text-sm text-gray-500">* Actual pricing not public</p>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                $6,000+<span className="text-lg font-normal">/year</span>
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
                <p>• No contracts, cancel anytime</p>
                <p>• Easy setup in minutes</p>
                <p>• Built-in tutorials</p>
                <p className="text-sm text-green-600 font-semibold">✓ Simple & powerful</p>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                $1,068<span className="text-lg font-normal">/year</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-3xl font-bold text-green-600 mb-4">
              Save $4,932+ per year = $24,660+ over 5 years
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

      {/* Who ServiceTitan Is Actually For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            ServiceTitan Is Built For Enterprise
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            If you're running a $10M+ operation with 50+ trucks and call centers, ServiceTitan makes sense. But for most contractors, it's expensive overkill.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Focus</h3>
              <p className="text-gray-600">
                Designed for large operations with dedicated IT departments and complex workflows
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sales-Heavy Process</h3>
              <p className="text-gray-600">
                Requires talking to sales reps, demos, and negotiating contracts - no self-serve option
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complex Implementation</h3>
              <p className="text-gray-600">
                Weeks or months of setup, training, and configuration before you can use it
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Do You Really Need Enterprise Software?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">ServiceTitan Makes Sense If You:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Have 50+ trucks in your fleet</li>
                  <li>✓ Run a call center operation</li>
                  <li>✓ Do $10M+ in annual revenue</li>
                  <li>✓ Need complex territory management</li>
                  <li>✓ Have a dedicated IT team</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Creative Job Hub Is Better If You:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Have 1-20 trucks</li>
                  <li>✓ Owner-operated or small team</li>
                  <li>✓ Do $100K-$5M in revenue</li>
                  <li>✓ Want simple, fast software</li>
                  <li>✓ Need to get started today</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Feature-by-Feature Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
              <thead>
                <tr className="bg-gray-50 border-b-2 border-gray-200">
                  <th className="text-left p-4 font-bold text-gray-900">Feature</th>
                  <th className="text-center p-4 font-bold text-gray-900">ServiceTitan</th>
                  <th className="text-center p-4 font-bold text-blue-600">Creative Job Hub</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Monthly Cost', them: '$500+ (quoted)', us: '$89/mo' },
                  { feature: 'Setup Time', them: 'Weeks/Months', us: 'Minutes' },
                  { feature: 'Contract Required', them: 'Yes (1-3 years)', us: 'No - Cancel anytime' },
                  { feature: 'Job Scheduling', them: '✓', us: '✓' },
                  { feature: 'GPS Tracking', them: '✓', us: '✓' },
                  { feature: 'Invoice & Payments', them: '✓', us: '✓' },
                  { feature: 'Customer Portal', them: '✓', us: '✓' },
                  { feature: 'QuickBooks Sync', them: '✓', us: '✓' },
                  { feature: 'Mobile App', them: '✓', us: '✓' },
                  { feature: 'Complexity Level', them: 'High - Training req.', us: 'Low - Intuitive' },
                  { feature: 'Call Center Features', them: '✓ Advanced', us: 'Basic (enough)' },
                  { feature: 'Best For', them: 'Enterprise ($10M+)', us: 'Small/Mid ($100K-$5M)' },
                  { feature: 'Implementation Help', them: 'Paid consulting', us: 'Free tutorials' },
                  { feature: 'Pricing Transparency', them: 'Contact sales', us: 'Public pricing' },
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

      {/* What Contractors Say About ServiceTitan */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            What Small Contractors Say About ServiceTitan
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Real feedback from contractors who tried ServiceTitan and realized it wasn't right for their business size.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💰 Way Too Expensive</h3>
              <p className="text-gray-600 mb-4">
                "They quoted me $650/month for my 3-truck operation. That's $7,800/year! I don't even have an office staff. The math just doesn't work for small businesses like mine."
              </p>
              <p className="text-sm font-semibold text-green-600">
                ✓ Creative Job Hub: $89/mo = save $6,732/year
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">⏱️ Takes Forever to Set Up</h3>
              <p className="text-gray-600 mb-4">
                "Took 6 weeks to get it configured and another 2 weeks training my guys. Lost jobs because we couldn't quote fast enough during setup. Not worth it for a small team."
              </p>
              <p className="text-sm font-semibold text-green-600">
                ✓ Creative Job Hub: Up and running in minutes
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🤯 Overly Complicated</h3>
              <p className="text-gray-600 mb-4">
                "Has features we'll never use. My technicians just need to see their schedule, navigate to jobs, and collect payment. ServiceTitan felt like using a 747 cockpit to drive a pickup truck."
              </p>
              <p className="text-sm font-semibold text-green-600">
                ✓ Creative Job Hub: Simple tools that do the job
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔒 Locked Into Long Contracts</h3>
              <p className="text-gray-600 mb-4">
                "They wanted a 2-year contract. What if it doesn't work out? What if my business changes? Too much risk for a small operation to commit $15,000+ upfront."
              </p>
              <p className="text-sm font-semibold text-green-600">
                ✓ Creative Job Hub: No contracts, cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When to Choose Each */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Making The Right Choice For Your Business Size
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* ServiceTitan */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-gray-400">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose ServiceTitan If...</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏢</span>
                  <p className="text-gray-700">You're running a large enterprise operation with $10M+ in annual revenue</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📞</span>
                  <p className="text-gray-700">You operate a call center with dedicated CSRs and dispatchers</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚛</span>
                  <p className="text-gray-700">You manage 50+ trucks and complex territory routing</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💼</span>
                  <p className="text-gray-700">You have IT staff to manage software implementation</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💰</span>
                  <p className="text-gray-700">Budget isn't a concern and you need every enterprise feature</p>
                </div>
              </div>
            </div>

            {/* Creative Job Hub */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 text-white border-t-4 border-orange-500">
              <h3 className="text-2xl font-bold mb-6 text-center">Choose Creative Job Hub If...</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏠</span>
                  <p className="text-blue-50">You're a small to mid-size contractor doing $100K-$5M/year</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">👨‍💼</span>
                  <p className="text-blue-50">You're owner-operated or have a team of 1-20 people</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚀</span>
                  <p className="text-blue-50">You want to get started today, not in 6 weeks</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💡</span>
                  <p className="text-blue-50">You need simple, powerful tools without the complexity</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💵</span>
                  <p className="text-blue-50">You want to save $5,000/year without sacrificing features</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Cost Analysis */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            5-Year Cost Comparison
          </h2>

          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left p-4 text-gray-900">Timeframe</th>
                  <th className="text-right p-4 text-gray-900">ServiceTitan</th>
                  <th className="text-right p-4 text-blue-600">Creative Job Hub</th>
                  <th className="text-right p-4 text-green-600">You Save</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Year 1</td>
                  <td className="p-4 text-right text-gray-700">$6,000+</td>
                  <td className="p-4 text-right text-blue-600">$1,068</td>
                  <td className="p-4 text-right text-green-600 font-bold">$4,932</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Year 2</td>
                  <td className="p-4 text-right text-gray-700">$12,000+</td>
                  <td className="p-4 text-right text-blue-600">$2,136</td>
                  <td className="p-4 text-right text-green-600 font-bold">$9,864</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Year 3</td>
                  <td className="p-4 text-right text-gray-700">$18,000+</td>
                  <td className="p-4 text-right text-blue-600">$3,204</td>
                  <td className="p-4 text-right text-green-600 font-bold">$14,796</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Year 4</td>
                  <td className="p-4 text-right text-gray-700">$24,000+</td>
                  <td className="p-4 text-right text-blue-600">$4,272</td>
                  <td className="p-4 text-right text-green-600 font-bold">$19,728</td>
                </tr>
                <tr className="border-t-2 border-gray-300 bg-white">
                  <td className="p-4 font-bold text-gray-900 text-lg">5 Year Total</td>
                  <td className="p-4 text-right font-bold text-gray-900 text-lg">$30,000+</td>
                  <td className="p-4 text-right font-bold text-blue-600 text-lg">$5,340</td>
                  <td className="p-4 text-right font-bold text-green-600 text-2xl">$24,660+</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-8 text-center">
              <p className="text-2xl font-bold text-gray-900 mb-2">
                That's $24,660+ back in your pocket over 5 years
              </p>
              <p className="text-gray-600">
                Enough to buy a new truck, hire another technician, or reinvest in your business growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="mb-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <p className="text-xl text-gray-700 italic mb-6">
                "We almost signed with ServiceTitan at $725/month. Thank god we found Creative Job Hub first. We're getting everything we need for $89/month. That's $7,632 saved every year. Over 3 years, that's $22,896 - enough to buy a brand new service van. Best decision I made this year."
              </p>
              <div>
                <p className="font-bold text-gray-900">— Robert K., HVAC Owner</p>
                <p className="text-gray-600">8 trucks, Dallas TX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Common Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Is Creative Job Hub too "simple" compared to ServiceTitan?
              </h3>
              <p className="text-gray-600">
                Not at all. We have all the core features you need: scheduling, GPS, invoicing, payments, customer portal, QuickBooks sync, and more. We just don't have the enterprise features you'll never use (like call center routing for 100+ agents). Simple doesn't mean limited - it means focused on what matters.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I grow with Creative Job Hub or will I outgrow it?
              </h3>
              <p className="text-gray-600">
                You can grow from 1 truck to 20+ trucks on Creative Job Hub. Most contractors doing under $5M/year will never outgrow it. If you grow into a $10M+ enterprise operation, congrats! At that point ServiceTitan might make sense. But that's years away for most businesses.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What if I've already committed to ServiceTitan?
              </h3>
              <p className="text-gray-600">
                Check your contract terms. Some contractors find that the savings with CJH ($400+/month) cover any early termination fees within 3-6 months. Calculate the total savings over the remaining contract period - you might be better off switching now.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How can Creative Job Hub be so much cheaper?
              </h3>
              <p className="text-gray-600">
                We don't have a massive sales team, expensive marketing, or bloated enterprise features. We're built by a contractor, for contractors. We focus on what you actually need and price it fairly. No venture capital pressure to overcharge. No salespeople earning commissions. Just honest pricing for honest work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Save $4,932+ Per Year?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Get enterprise-quality software without the enterprise price tag.
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
            14-day free trial • No charge for 14 days • No long-term contracts
          </p>
        </div>
      </section>
    </div>
  );
}
