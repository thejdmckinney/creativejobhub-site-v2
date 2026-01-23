import SEO from '../../components/SEO';
import SetupGuideGate from '../../components/SetupGuideGate';
import { Link } from 'react-router-dom';

export default function SetupGuidesIndex() {
  return (
    <>
      <SEO 
        title="Setup Guides - Connect Your Own Tools & Save Money"
        description="Step-by-step guides to connect Twilio, Resend, Mapbox, Stripe, and Slack to Creative Job Hub. Free tier for everything!"
        keywords="setup guides, integration tutorials, twilio setup, stripe setup, mapbox setup"
      />
      
      <SetupGuideGate guideName="All Integration Guides">
        <div className="min-h-screen bg-gray-50 py-12 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">Setup Guides</h1>
              <p className="text-xl text-gray-600">
                Step-by-step instructions to connect your own tools. Each guide takes 5-10 minutes.
              </p>
            </div>

            {/* Guide Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Twilio */}
              <Link to="/setup-guides/twilio" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                <div className="text-4xl mb-4">📱</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  Twilio (SMS)
                </h2>
                <p className="text-gray-600 mb-4">Professional business texting and calling</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-600 font-semibold">5 min setup</span>
                  <span className="text-green-600 font-bold">FREE</span>
                </div>
              </Link>

              {/* Resend */}
              <Link to="/setup-guides/resend" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                <div className="text-4xl mb-4">📧</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  Resend (Email)
                </h2>
                <p className="text-gray-600 mb-4">Transactional emails, invoices, estimates</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-600 font-semibold">3 min setup</span>
                  <span className="text-green-600 font-bold">FREE</span>
                </div>
              </Link>

              {/* Mapbox */}
              <Link to="/setup-guides/mapbox" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                <div className="text-4xl mb-4">🗺️</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  Mapbox (Maps)
                </h2>
                <p className="text-gray-600 mb-4">Route optimization, job mapping</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-600 font-semibold">5 min setup</span>
                  <span className="text-green-600 font-bold">FREE</span>
                </div>
              </Link>

              {/* Stripe */}
              <Link to="/setup-guides/stripe" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                <div className="text-4xl mb-4">💳</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  Stripe (Payments)
                </h2>
                <p className="text-gray-600 mb-4">Accept credit cards, direct to your bank</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-600 font-semibold">10 min setup</span>
                  <span className="text-green-600 font-bold">2.9% + $0.30</span>
                </div>
              </Link>

              {/* Slack - Coming Soon */}
              <div className="bg-gray-100 rounded-xl shadow-lg p-6 opacity-75">
                <div className="text-4xl mb-4">💬</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Slack (Team Chat)
                </h2>
                <p className="text-gray-600 mb-4">Real-time team communication</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 font-semibold">Coming Soon</span>
                  <span className="text-green-600 font-bold">FREE</span>
                </div>
              </div>

              {/* Claude AI - Coming Soon */}
              <div className="bg-gray-100 rounded-xl shadow-lg p-6 opacity-75 border-2 border-purple-200">
                <div className="text-4xl mb-4">🤖</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Claude AI
                </h2>
                <p className="text-gray-600 mb-4">AI-powered customer support</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-purple-600 font-semibold">Coming Soon</span>
                  <span className="text-gray-500">Pay-as-you-go</span>
                </div>
              </div>
            </div>

            {/* Recommended Order */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommended Setup Order</h2>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full font-bold text-sm flex-shrink-0">1</span>
                  <div>
                    <p className="font-semibold text-gray-900">Twilio (SMS)</p>
                    <p className="text-sm text-gray-600">Start texting customers right away</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full font-bold text-sm flex-shrink-0">2</span>
                  <div>
                    <p className="font-semibold text-gray-900">Resend (Email)</p>
                    <p className="text-sm text-gray-600">Send professional invoices and estimates</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full font-bold text-sm flex-shrink-0">3</span>
                  <div>
                    <p className="font-semibold text-gray-900">Stripe (Payments)</p>
                    <p className="text-sm text-gray-600">Get paid faster with credit cards</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full font-bold text-sm flex-shrink-0">4</span>
                  <div>
                    <p className="font-semibold text-gray-900">Mapbox (Maps)</p>
                    <p className="text-sm text-gray-600">Optimize your routes and save gas</p>
                  </div>
                </li>
              </ol>
              <p className="mt-6 text-sm text-gray-600 italic">
                Total setup time: ~25 minutes for all 4 integrations
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-6">
                Pick an integration above and follow the step-by-step guide.
              </p>
              <Link 
                to="/signup" 
                className="inline-block px-8 py-4 bg-yellow-400 text-blue-900 font-bold text-lg rounded-lg hover:bg-yellow-300 transition-colors"
              >
                Start Your Free Trial
              </Link>
            </div>
          </div>
        </div>
      </SetupGuideGate>
    </>
  );
}
