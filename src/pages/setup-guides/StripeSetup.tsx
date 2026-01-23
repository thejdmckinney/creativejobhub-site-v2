import SEO from '../../components/SEO';
import SetupGuideGate from '../../components/SetupGuideGate';
import { Link } from 'react-router-dom';

export default function StripeSetup() {
  return (
    <>
      <SEO 
        title="Stripe Setup Guide - Accept Payments Directly to Your Bank"
        description="Set up Stripe to accept credit card payments. Standard 2.9% + $0.30 per transaction. Money goes directly to YOUR bank account."
        keywords="stripe setup, payment processing, contractor payments, credit card processing"
      />
      
      <SetupGuideGate guideName="Stripe Payment Processing">
        <div className="min-h-screen bg-gray-50 py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">💳</div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">Stripe Setup Guide</h1>
                  <p className="text-xl text-gray-600">Accept Credit Cards - Money Goes Direct to YOU</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 bg-blue-50 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10 minutes</div>
                  <div className="text-sm text-gray-600">Setup Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">2.9% + $0.30</div>
                  <div className="text-sm text-gray-600">Per Transaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">Medium</div>
                  <div className="text-sm text-gray-600">Difficulty Level</div>
                </div>
              </div>
            </div>

            {/* Why Stripe */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Connect Your Own Stripe?</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Money Goes Directly to YOUR Bank</p>
                    <p className="text-sm text-gray-600">Not through a middleman. You own the customer relationship.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Standard Rates - No Markup</p>
                    <p className="text-sm text-gray-600">2.9% + $0.30 per transaction. Same rate whether you use us or not.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Full Control</p>
                    <p className="text-sm text-gray-600">Issue refunds, view transactions, export data - it's YOUR account.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Setup Steps */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Setup Steps</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold text-sm">1</div>
                    <h3 className="text-xl font-bold text-gray-900">Create Stripe Account</h3>
                  </div>
                  <div className="ml-11 space-y-3">
                    <p className="text-gray-700">
                      Go to <a href="https://dashboard.stripe.com/register" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">stripe.com/register</a>
                    </p>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-2">You'll need:</p>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Business name & address</li>
                        <li>• Tax ID / EIN (or SSN if sole prop)</li>
                        <li>• Bank account details</li>
                        <li>• Phone number</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold text-sm">2</div>
                    <h3 className="text-xl font-bold text-gray-900">Complete Verification</h3>
                  </div>
                  <div className="ml-11">
                    <p className="text-gray-700 mb-3">
                      Stripe needs to verify your business (standard procedure for payment processors)
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                      <p className="text-sm font-semibold text-yellow-900">⏱️ Timing:</p>
                      <p className="text-sm text-yellow-800">Verification usually takes 24-48 hours. You can still test payments immediately.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold text-sm">3</div>
                    <h3 className="text-xl font-bold text-gray-900">Get Your API Keys</h3>
                  </div>
                  <div className="ml-11">
                    <div className="bg-gray-100 rounded-lg p-4">
                      <ol className="space-y-2 text-gray-700 text-sm list-decimal list-inside">
                        <li>Go to Developers → API Keys</li>
                        <li>You'll see "Publishable key" and "Secret key"</li>
                        <li>Copy both (you'll need them next)</li>
                      </ol>
                    </div>
                    <div className="bg-red-50 border-l-4 border-red-600 p-4 mt-3">
                      <p className="text-sm font-semibold text-red-900">🔒 Security:</p>
                      <p className="text-sm text-red-800">NEVER share your Secret Key publicly. Treat it like your bank password!</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold text-sm">4</div>
                    <h3 className="text-xl font-bold text-gray-900">Connect to Creative Job Hub</h3>
                  </div>
                  <div className="ml-11">
                    <div className="bg-gray-100 rounded-lg p-4">
                      <ol className="space-y-2 text-gray-700 text-sm list-decimal list-inside">
                        <li>Go to Creative Job Hub → Settings → Integrations</li>
                        <li>Click "Connect Stripe"</li>
                        <li>Paste your Publishable Key</li>
                        <li>Paste your Secret Key</li>
                        <li>Click "Test Connection"</li>
                        <li>Try a test payment!</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Breakdown */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Stripe Fees Explained</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="font-semibold text-blue-900 mb-2">Standard Rate:</p>
                  <p className="text-blue-800">2.9% + $0.30 per successful card charge</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Example:</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• $100 invoice: You pay $3.20 in fees → You keep $96.80</li>
                    <li>• $500 invoice: You pay $14.80 in fees → You keep $485.20</li>
                    <li>• $1,000 invoice: You pay $29.30 in fees → You keep $970.70</li>
                  </ul>
                </div>
                <p className="text-gray-700 italic">
                  This is the same rate whether you use Creative Job Hub, Jobber, or any other software. The difference? We don't add our own fee on top!
                </p>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">🎉 Payments Are Live!</h2>
              <p className="text-xl mb-6">
                You can now accept credit cards and money goes straight to your bank account.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/setup-guides/slack" 
                  className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-center"
                >
                  Next: Setup Team Chat (Slack) →
                </Link>
                <Link 
                  to="/bring-your-own-tools" 
                  className="inline-block px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors text-center"
                >
                  ← Back to BYOT Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SetupGuideGate>
    </>
  );
}
