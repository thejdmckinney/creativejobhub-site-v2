import SEO from '../../components/SEO';
import SetupGuideGate from '../../components/SetupGuideGate';
import { Link } from 'react-router-dom';

export default function ResendSetup() {
  return (
    <>
      <SEO 
        title="Resend Email Setup Guide - Professional Transactional Emails"
        description="Step-by-step guide to set up Resend for professional business emails, invoices, and estimates. Free for up to 3,000 emails/month."
        keywords="resend setup, transactional email, business email, email api, smtp"
        noIndex={true}
      />
      
      <SetupGuideGate guideName="Resend Email">
        <div className="min-h-screen bg-gray-50 py-12 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">📧</div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">Resend Setup Guide</h1>
                  <p className="text-xl text-gray-600">Professional Email for Estimates, Invoices & More</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 bg-blue-50 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">3 minutes</div>
                  <div className="text-sm text-gray-600">Setup Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">FREE</div>
                  <div className="text-sm text-gray-600">Up to 3,000 emails/mo</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">Very Easy</div>
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
                  <span>A domain name for your business (e.g., crewopspro.com)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Access to your domain's DNS settings</span>
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
                <h2 className="text-2xl font-bold text-gray-900">Create Resend Account</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Go to <a href="https://resend.com/signup" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">resend.com/signup</a>
                </p>
                
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Sign up with:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Your business email</li>
                    <li>• Or sign in with GitHub (if you have one)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                  <p className="text-sm font-semibold text-blue-900">💡 Pro Tip:</p>
                  <p className="text-sm text-blue-800">Resend is built by developers for developers. Super clean interface!</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold">2</div>
                <h2 className="text-2xl font-bold text-gray-900">Add Your Domain</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Click "Add Domain" and enter your business domain (e.g., yourcompany.com)
                </p>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <p className="text-sm font-semibold text-yellow-900">⚠️ Important:</p>
                  <p className="text-sm text-yellow-800">You need to own a domain. Don't have one? Get one from Namecheap or GoDaddy for ~$12/year.</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold">3</div>
                <h2 className="text-2xl font-bold text-gray-900">Verify Your Domain (DNS Records)</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Resend will give you DNS records to add. This proves you own the domain.
                </p>
                
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">You'll need to add 3 records:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• SPF record (TXT)</li>
                    <li>• DKIM record (TXT)</li>
                    <li>• DMARC record (TXT)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                  <p className="text-sm font-semibold text-blue-900">💡 How to add DNS records:</p>
                  <p className="text-sm text-blue-800 mb-2">Go to where you bought your domain (Namecheap, GoDaddy, etc.):</p>
                  <ol className="text-sm text-blue-800 list-decimal list-inside space-y-1">
                    <li>Log in to your domain provider</li>
                    <li>Find "DNS Settings" or "DNS Management"</li>
                    <li>Click "Add Record"</li>
                    <li>Copy/paste exactly what Resend gives you</li>
                    <li>Save and wait 5-60 minutes for propagation</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold">4</div>
                <h2 className="text-2xl font-bold text-gray-900">Get Your API Key</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Once your domain is verified, go to "API Keys" and create a new key.
                </p>
                
                <div className="bg-gray-100 rounded-lg p-4">
                  <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                    <li>Click "Create API Key"</li>
                    <li>Name it "Crew Ops Pro"</li>
                    <li>Select "Full Access"</li>
                    <li>Copy the key (you'll only see it once!)</li>
                  </ol>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-4">
                  <p className="text-sm font-semibold text-red-900">🔒 Security:</p>
                  <p className="text-sm text-red-800">Save this key somewhere safe! You can't see it again after closing the window.</p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold">5</div>
                <h2 className="text-2xl font-bold text-gray-900">Connect to Crew Ops Pro</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg p-4">
                  <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                    <li>Go to Crew Ops Pro → <strong>Settings</strong> → <strong>Integrations</strong></li>
                    <li>Click <strong>"Connect Resend"</strong></li>
                    <li>Paste your API Key</li>
                    <li>Enter your "From" email (e.g., team@yourcompany.com)</li>
                    <li>Click <strong>"Send Test Email"</strong></li>
                    <li>Check your inbox!</li>
                  </ol>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-4">
                  <p className="text-sm font-semibold text-green-900">✅ Done!</p>
                  <p className="text-sm text-green-800">Your estimates and invoices will now come from your own domain. Super professional!</p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Resend Pricing</h2>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="font-semibold text-green-900 mb-2">Free Tier (Forever):</p>
                  <p className="text-green-800">3,000 emails per month, 100 emails per day</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="font-semibold text-blue-900 mb-2">If You Outgrow Free:</p>
                  <p className="text-blue-800">$20/month for 50,000 emails (you'd need to be doing 500+ jobs/month!)</p>
                </div>

                <p className="text-gray-700">
                  Most contractors stay on the free tier forever. You'd have to send a LOT of emails to need the paid plan.
                </p>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">🎉 Email Setup Complete!</h2>
              <p className="text-xl mb-6">
                Your invoices and estimates will now look super professional coming from your own domain.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/setup-guides/mapbox" 
                  className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-center"
                >
                  Next: Setup Maps (Mapbox) →
                </Link>
                <Link 
                  to="/bring-your-own-tools" 
                  className="inline-block px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors text-center"
                >
                  ← Back to BYOT Page
                </Link>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Stuck on DNS records? We can help!</p>
              <a 
                href="https://support.crewopspro.com/en/" 
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
