import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Features() {
  return (
    <>
      <SEO
        title="All Features | Complete Field Service Management Platform"
        description="Everything you need to run your field service business: scheduling, live GPS tracking, invoicing, payments, client outreach, and more. All in one platform for $89/month."
        keywords="field service management features, contractor software features, scheduling software, invoicing software, GPS tracking, live dispatch, client outreach"
        ogImage="https://www.crewopspro.com/crewopspro-home-page.png"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Everything You Need in One Platform
            </h1>
            <p className="text-2xl text-blue-100 mb-8">
              From scheduling to payment collection, manage your entire field service operation with powerful features designed for contractors.
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

      {/* Core Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All the tools you need to run a successful field service business, included in one affordable platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Scheduling */}
            <Link
              to="/scheduling"
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <span className="text-4xl">📅</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Scheduling</h3>
              <p className="text-gray-600 mb-4">
                Drag-and-drop calendar with conflict alerts, emergency dispatch, and smart job assignment. Stop double-booking your best techs.
              </p>
              <span className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                Learn more →
              </span>
            </Link>

            {/* Jobs Map */}
            <Link
              to="/features/jobs-map"
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                <span className="text-4xl">🗺️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Jobs Map & Live Tracking</h3>
              <p className="text-gray-600 mb-4">
                See every technician's location in real-time. Emergency dispatch in seconds. No more phone tag when urgent calls come in.
              </p>
              <span className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                Learn more →
              </span>
            </Link>

            {/* Invoicing & Payments */}
            <Link
              to="/invoicing-payments"
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <span className="text-4xl">💳</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Invoicing & Payments</h3>
              <p className="text-gray-600 mb-4">
                Accept payments on-site with mobile card readers. Send professional invoices instantly and get paid the same day.
              </p>
              <span className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                Learn more →
              </span>
            </Link>

            {/* Outreach Hub */}
            <Link
              to="/outreach-hub"
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all hover:scale-105 group border-2 border-orange-200"
            >
              <div className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase mb-4">
                New Feature
              </div>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                <span className="text-4xl">📣</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Outreach Hub</h3>
              <p className="text-gray-600 mb-4">
                Proactive client engagement with mass emails, SMS campaigns, and automated follow-ups. A feature competitors don't have.
              </p>
              <span className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                Learn more →
              </span>
            </Link>

            {/* Customer Management */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">📋</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Management</h3>
              <p className="text-gray-600 mb-4">
                Complete customer profiles with job history, notes, photos, and property details. Everything in one place.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Unlimited customer records</li>
                <li>✓ Service history tracking</li>
                <li>✓ Photo attachments</li>
                <li>✓ Custom tags & notes</li>
              </ul>
            </div>

            {/* Estimates & Quotes */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">📄</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Estimates & Quotes</h3>
              <p className="text-gray-600 mb-4">
                Create professional estimates in minutes. Send via email or text for instant approval signatures.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Custom templates</li>
                <li>✓ Digital signatures</li>
                <li>✓ One-click conversions to jobs</li>
                <li>✓ Track approval status</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Communication Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keep everyone informed with automated notifications and real-time updates
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-2 border-blue-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">SMS & Email Automation</h3>
                  <p className="text-gray-700 mb-4">
                    Automatic appointment reminders, job confirmations, and follow-ups keep customers informed without manual effort.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ Automated appointment reminders</li>
                    <li>✓ On-the-way notifications</li>
                    <li>✓ Job completion confirmations</li>
                    <li>✓ Review requests</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border-2 border-green-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Mobile Field App</h3>
                  <p className="text-gray-700 mb-4">
                    Your techs get a mobile app with everything they need: job details, customer info, photos, and payment collection.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ Offline mode for no-signal areas</li>
                    <li>✓ Built-in navigation</li>
                    <li>✓ Before/after photos</li>
                    <li>✓ Digital signatures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Bring Your Own Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use your existing accounts without markups or hidden fees
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl">💳</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Stripe Connect</h3>
              <p className="text-gray-600">
                Use your own Stripe account. You keep 100% of transaction fees - we don't take a cut.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">QuickBooks Sync</h3>
              <p className="text-gray-600">
                Two-way sync with QuickBooks Online. Every invoice automatically syncs both ways.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl">📲</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Twilio SMS</h3>
              <p className="text-gray-600">
                Connect your Twilio account for SMS. Pay wholesale rates directly to Twilio.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/bring-your-own-tools"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              Learn About Integration →
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-12 border-2 border-orange-200">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                More Features. Lower Price.
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Crew Ops Pro includes features that Jobber and Housecall Pro charge extra for - or don't offer at all. Like our Outreach Hub for proactive client engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/competitors"
                  className="bg-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors"
                >
                  Compare Features
                </Link>
                <Link
                  to="/pricing"
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors border-2 border-gray-300"
                >
                  See Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of contractors who manage their entire operation with Crew Ops Pro. Start your free trial today - no credit card required.
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
            💰 $89/month • ✨ All features included • 🚀 No contracts
          </p>
        </div>
      </section>
    </>
  );
}
