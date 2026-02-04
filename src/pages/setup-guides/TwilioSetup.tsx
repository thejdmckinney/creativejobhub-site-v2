import SEO from '../../components/SEO';
import SetupGuideGate from '../../components/SetupGuideGate';
import { Link } from 'react-router-dom';

export default function TwilioSetup() {
  return (
    <>
      <SEO 
        title="Twilio Setup Guide - Free SMS & Calling for Your Business"
        description="Step-by-step guide to set up Twilio for professional business texting and calling. Free for most contractors. Takes 5 minutes."
        keywords="twilio setup, business sms, contractor texting, twilio api, sms integration"
        noIndex={true}
      />
      
      <SetupGuideGate guideName="Twilio SMS & Calling">
        <div className="min-h-screen bg-gray-50 py-12 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">📱</div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">Twilio Setup Guide</h1>
                  <p className="text-xl text-gray-600">Professional SMS & Calling for Your Business</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 bg-blue-50 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5 minutes</div>
                  <div className="text-sm text-gray-600">Setup Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">FREE</div>
                  <div className="text-sm text-gray-600">Up to 1,000 msgs/mo</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">Easy</div>
                  <div className="text-sm text-gray-600">Difficulty Level</div>
                </div>
              </div>
            </div>

            {/* What You'll Need */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Need</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>A credit card (won't be charged unless you exceed free tier)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>10 minutes of your time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Your business email</span>
                </li>
              </ul>
            </div>

            {/* Step 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold">1</div>
                <h2 className="text-2xl font-bold text-gray-900">Create Your Twilio Account</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Go to <a href="https://www.twilio.com/try-twilio" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">twilio.com/try-twilio</a> and click "Sign up"
                </p>
                
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Fill out the form:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• First & Last Name</li>
                    <li>• Email (use your business email)</li>
                    <li>• Password (make it strong!)</li>
                    <li>• Check "I'm not a robot"</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                  <p className="text-sm font-semibold text-blue-900">💡 Pro Tip:</p>
                  <p className="text-sm text-blue-800">Use your business email, not personal. This keeps everything organized.</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold">2</div>
                <h2 className="text-2xl font-bold text-gray-900">Verify Your Email & Phone</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Twilio will send you a verification email. Click the link to verify.
                </p>
                
                <p className="text-gray-700">
                  Then you'll need to verify your phone number (they'll send you a code via SMS).
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <p className="text-sm font-semibold text-yellow-900">⚠️ Important:</p>
                  <p className="text-sm text-yellow-800">This is a security measure. You'll only need to do this once.</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold">3</div>
                <h2 className="text-2xl font-bold text-gray-900">Get Your First Phone Number</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  After verification, Twilio will walk you through getting your first phone number.
                </p>
                
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">You'll be able to:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Choose your area code</li>
                    <li>• Pick a number with your city/region</li>
                    <li>• Get a toll-free number (optional, costs extra)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                  <p className="text-sm font-semibold text-blue-900">💡 Pro Tip:</p>
                  <p className="text-sm text-blue-800">Pick a local area code for your business. Customers trust local numbers more than toll-free.</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold">4</div>
                <h2 className="text-2xl font-bold text-gray-900">Get Your API Credentials</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Once you're in your Twilio dashboard, you need to find your API credentials. These are like passwords that let Creative Job Hub send messages on your behalf.
                </p>
                
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Where to find them:</p>
                  <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                    <li>Go to your Twilio Console Dashboard</li>
                    <li>Look for "Account SID" and "Auth Token"</li>
                    <li>Click the eye icon to reveal your Auth Token</li>
                    <li>Copy both to a safe place (you'll need them next)</li>
                  </ol>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-4">
                  <p className="text-sm font-semibold text-red-900">🔒 Security Warning:</p>
                  <p className="text-sm text-red-800">Never share these with anyone or post them online. Treat them like your bank password!</p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold">5</div>
                <h2 className="text-2xl font-bold text-gray-900">Connect to Creative Job Hub</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Now head over to your Creative Job Hub account:
                </p>
                
                <div className="bg-gray-100 rounded-lg p-4">
                  <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                    <li>Go to <strong>Settings</strong> → <strong>Integrations</strong></li>
                    <li>Click <strong>"Connect Twilio"</strong></li>
                    <li>Paste your Account SID</li>
                    <li>Paste your Auth Token</li>
                    <li>Enter your Twilio phone number</li>
                    <li>Click <strong>"Test Connection"</strong></li>
                    <li>You should receive a test SMS!</li>
                  </ol>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-4">
                  <p className="text-sm font-semibold text-green-900">✅ Success!</p>
                  <p className="text-sm text-green-800">You can now send professional SMS messages to your customers!</p>
                </div>
              </div>
            </div>

            {/* Pricing Info */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Twilio Pricing</h2>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="font-semibold text-green-900 mb-2">Free Trial:</p>
                  <p className="text-green-800">$15.50 in free credits when you sign up (about 1,000 messages)</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="font-semibold text-blue-900 mb-2">After Free Trial:</p>
                  <ul className="space-y-2 text-blue-800">
                    <li>• SMS: ~$0.0079 per message (less than a penny!)</li>
                    <li>• Phone number: $1-2/month to keep your number</li>
                    <li>• Typical contractor with 50 jobs/mo: ~$5-10/month total</li>
                  </ul>
                </div>

                <p className="text-gray-700 italic">
                  Compare this to Jobber or Housecall Pro bundling SMS into their $300+/month plan!
                </p>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Issues & Solutions</h2>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">❌ "Invalid credentials" error</p>
                  <p className="text-gray-700">→ Double-check you copied the Account SID and Auth Token correctly. No extra spaces!</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 mb-2">❌ "Phone number not verified" error</p>
                  <p className="text-gray-700">→ In trial mode, you can only text verified numbers. Upgrade to a paid account (still cheap!) to text anyone.</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 mb-2">❌ Can't find my API credentials</p>
                  <p className="text-gray-700">→ They're on your main dashboard at console.twilio.com under "Account Info"</p>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">🎉 You're All Set!</h2>
              <p className="text-xl mb-6">
                You can now send professional SMS messages to your customers for less than a penny per message.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/setup-guides/resend" 
                  className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-center"
                >
                  Next: Setup Email (Resend) →
                </Link>
                <Link 
                  to="/bring-your-own-tools" 
                  className="inline-block px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors text-center"
                >
                  ← Back to BYOT Page
                </Link>
              </div>
            </div>

            {/* Need Help */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Need help? We're here for you!</p>
              <a 
                href="https://support.creativejobhub.com/en/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </SetupGuideGate>
    </>
  );
}
