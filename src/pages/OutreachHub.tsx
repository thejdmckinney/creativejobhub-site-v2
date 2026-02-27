import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function OutreachHub() {
  return (
    <>
      <SEO
        title="Outreach Hub - Proactive Client Communication Tool"
        description="Stay connected with your clients using Crew Ops Pro's Outreach Hub. Send mass emails, SMS campaigns, log calls, schedule follow-ups, and maximize client engagement. A feature Jobber and Housecall Pro don't offer."
        keywords="client outreach software, customer communication tool, mass email campaigns, SMS marketing for contractors, client engagement, follow-up scheduler, call logging, outbound calling hub, customer retention software"
        ogImage="https://www.crewopspro.com/crewopspro-home-page.png"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4">
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                🚀 Feature Competitors Don't Have
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Outreach Hub
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-blue-100">
              Proactively Connect With Your Entire Client Base
            </p>
            <p className="text-xl text-blue-200 mb-8">
              Send mass emails, launch SMS campaigns, log calls, and schedule follow-ups — all in one powerful hub. Stay top-of-mind with your customers and grow your business through strategic outreach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg"
              >
                Start Your Free Trial
              </Link>
              <Link
                to="/pricing"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage Banner */}
      <section className="bg-yellow-400 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg md:text-xl font-bold text-gray-900">
              ⚡ What Jobber & Housecall Pro Don't Offer: A Dedicated Outreach Hub for Maximizing Client Engagement
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Stay Connected
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't wait for customers to reach out. Take control of your relationships with powerful outreach tools built right into your field service software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Send Email */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">📧</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Send Email</h3>
              <p className="text-gray-600 mb-4">
                Launch targeted email campaigns to your entire client base or specific segments. Promote seasonal services, special offers, or maintenance reminders.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Mass email campaigns</li>
                <li>✓ Segment by service type</li>
                <li>✓ Pre-built templates</li>
                <li>✓ Track open rates</li>
              </ul>
            </div>

            {/* Send SMS */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">💬</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Send SMS</h3>
              <p className="text-gray-600 mb-4">
                Text your customers directly with high open-rate SMS campaigns. Perfect for time-sensitive promotions and quick reminders.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Bulk SMS messaging</li>
                <li>✓ 98% open rate potential</li>
                <li>✓ Two-way conversations</li>
                <li>✓ Instant delivery</li>
              </ul>
            </div>

            {/* Log Calls & Texts */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">📞</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Log Calls & Texts</h3>
              <p className="text-gray-600 mb-4">
                Keep detailed records of every client interaction. Document conversations, outcomes, and next steps for complete visibility.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Call logging with notes</li>
                <li>✓ Text conversation history</li>
                <li>✓ Outcome tracking</li>
                <li>✓ Client interaction timeline</li>
              </ul>
            </div>

            {/* Schedule Follow-Ups */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">📅</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Schedule Follow-Ups</h3>
              <p className="text-gray-600 mb-4">
                Never miss a follow-up opportunity. Set reminders to reconnect with clients at the perfect time for maximum conversion.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Automated reminders</li>
                <li>✓ Custom follow-up dates</li>
                <li>✓ Task assignments</li>
                <li>✓ Priority flagging</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Real-World Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how the Outreach Hub helps service businesses grow revenue and strengthen customer relationships
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Seasonal Services */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-2 border-blue-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔔</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Seasonal Service Promotions</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Scenario:</strong> Spring is here and you want to promote HVAC tune-ups to your entire client base.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Solution:</strong> Use the Outreach Hub to send a mass email campaign offering a 15% discount on spring maintenance. Follow up with SMS reminders to clients who haven't responded in 5 days.
                  </p>
                  <p className="text-green-700 font-semibold">
                    📈 Result: 30% increase in bookings compared to waiting for clients to call
                  </p>
                </div>
              </div>
            </div>

            {/* Win-Back Campaign */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border-2 border-orange-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Win-Back Inactive Clients</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Scenario:</strong> You have 200 clients who haven't booked a job in 12+ months.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Solution:</strong> Filter inactive clients and launch a "We Miss You" campaign with a special comeback offer. Log calls to personally reconnect with high-value past customers.
                  </p>
                  <p className="text-green-700 font-semibold">
                    📈 Result: Reactivate 20-30% of dormant accounts
                  </p>
                </div>
              </div>
            </div>

            {/* Maintenance Reminders */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border-2 border-green-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⏰</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Proactive Maintenance Reminders</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Scenario:</strong> Clients need annual pool maintenance, but forget to schedule.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Solution:</strong> Set up automated follow-up reminders in the Outreach Hub. Schedule SMS messages 2 weeks before typical service dates and log responses.
                  </p>
                  <p className="text-green-700 font-semibold">
                    📈 Result: 50% more proactive bookings vs reactive service calls
                  </p>
                </div>
              </div>
            </div>

            {/* Upsell Opportunities */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border-2 border-purple-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📈</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Targeted Upsell Campaigns</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Scenario:</strong> You want to upsell premium services to recent basic service customers.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Solution:</strong> Segment clients by service type and send personalized email campaigns showcasing premium add-ons. Schedule follow-up calls for high-value prospects.
                  </p>
                  <p className="text-green-700 font-semibold">
                    📈 Result: 25% increase in average job value
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Competitors Can't Do
            </h2>
            <p className="text-xl text-gray-600">
              Crew Ops Pro vs Jobber vs Housecall Pro
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    <th className="px-6 py-4 text-left text-lg font-bold">Feature</th>
                    <th className="px-6 py-4 text-center text-lg font-bold">Crew Ops Pro</th>
                    <th className="px-6 py-4 text-center text-lg font-bold">Jobber</th>
                    <th className="px-6 py-4 text-center text-lg font-bold">Housecall Pro</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-blue-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Dedicated Outreach Hub</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                        <span className="text-green-600 font-bold text-xl">✓</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                        <span className="text-red-600 font-bold text-xl">✗</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                        <span className="text-red-600 font-bold text-xl">✗</span>
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Mass Email Campaigns</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                        <span className="text-green-600 font-bold text-xl">✓</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-500 text-sm">Limited</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-500 text-sm">Limited</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Bulk SMS Campaigns</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                        <span className="text-green-600 font-bold text-xl">✓</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                        <span className="text-red-600 font-bold text-xl">✗</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                        <span className="text-red-600 font-bold text-xl">✗</span>
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Call & Text Logging</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                        <span className="text-green-600 font-bold text-xl">✓</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-500 text-sm">Basic</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-500 text-sm">Basic</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Automated Follow-Up Scheduler</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                        <span className="text-green-600 font-bold text-xl">✓</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                        <span className="text-red-600 font-bold text-xl">✗</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                        <span className="text-red-600 font-bold text-xl">✗</span>
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Client Segmentation</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                        <span className="text-green-600 font-bold text-xl">✓</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-500 text-sm">Limited</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-500 text-sm">Limited</span>
                    </td>
                  </tr>
                  <tr className="bg-blue-50 font-bold">
                    <td className="px-6 py-4 text-gray-900 text-lg">Monthly Price</td>
                    <td className="px-6 py-4 text-center text-green-600 text-xl">$89</td>
                    <td className="px-6 py-4 text-center text-gray-600 text-xl">$340+</td>
                    <td className="px-6 py-4 text-center text-gray-600 text-xl">$320+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Proactive Outreach Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't leave revenue on the table waiting for customers to remember you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Increase Revenue</h3>
              <p className="text-gray-600">
                Proactively reach out with service reminders, seasonal promotions, and special offers to generate more bookings from your existing client base.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strengthen Relationships</h3>
              <p className="text-gray-600">
                Stay top-of-mind with regular, valuable communication. Build loyalty by showing customers you care about their needs proactively.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reduce Churn</h3>
              <p className="text-gray-600">
                Keep clients engaged with timely follow-ups and relevant offers. Don't let them forget about you and go to competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20" id="final-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Maximize Client Engagement?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start using the Outreach Hub today and take control of your customer relationships. No other field service software offers this level of proactive outreach capability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg inline-block"
            >
              Start Your Free Trial
            </Link>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg inline-block"
            >
              Request a Demo
            </Link>
          </div>
          <p className="text-blue-200 mt-6">
            💰 Save $3,000+/year compared to Jobber • ✨ Get features they don't have
          </p>
        </div>
      </section>
    </>
  );
}
