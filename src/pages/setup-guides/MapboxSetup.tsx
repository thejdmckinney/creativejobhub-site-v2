import SEO from '../../components/SEO';
import SetupGuideGate from '../../components/SetupGuideGate';
import { Link } from 'react-router-dom';

export default function MapboxSetup() {
  return (
    <>
      <SEO 
        title="Mapbox Setup Guide - Free Maps & Routing for Contractors"
        description="Set up Mapbox for professional route optimization and job mapping. Free for up to 100,000 map loads/month. Perfect for contractors."
        keywords="mapbox setup, route optimization, contractor mapping, field service maps"
        noIndex={true}
      />
      
      <SetupGuideGate guideName="Mapbox Maps & Routing">
        <div className="min-h-screen bg-gray-50 py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">🗺️</div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">Mapbox Setup Guide</h1>
                  <p className="text-xl text-gray-600">Route Optimization & Professional Job Mapping</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 bg-blue-50 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5 minutes</div>
                  <div className="text-sm text-gray-600">Setup Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">FREE</div>
                  <div className="text-sm text-gray-600">Up to 100K loads/mo</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">Easy</div>
                  <div className="text-sm text-gray-600">Difficulty Level</div>
                </div>
              </div>
            </div>

            {/* Quick steps summary */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5-Minute Setup</h2>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold text-sm">1</div>
                    <h3 className="text-xl font-bold text-gray-900">Create Account</h3>
                  </div>
                  <p className="text-gray-700 ml-11">
                    Go to <a href="https://account.mapbox.com/auth/signup/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">mapbox.com/signup</a> and create a free account with your business email.
                  </p>
                </div>

                {/* Step 2 */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold text-sm">2</div>
                    <h3 className="text-xl font-bold text-gray-900">Get Your Access Token</h3>
                  </div>
                  <div className="ml-11 space-y-3">
                    <p className="text-gray-700">After signup, you'll see your dashboard with a "Default public token"</p>
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                      <p className="text-sm font-semibold text-blue-900">💡 Pro Tip:</p>
                      <p className="text-sm text-blue-800">Create a new token specifically for Creative Job Hub. Click "Create a token" and name it "Creative Job Hub Production"</p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold text-sm">3</div>
                    <h3 className="text-xl font-bold text-gray-900">Connect to Creative Job Hub</h3>
                  </div>
                  <div className="ml-11">
                    <div className="bg-gray-100 rounded-lg p-4">
                      <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                        <li>Go to Creative Job Hub → Settings → Integrations</li>
                        <li>Click "Connect Mapbox"</li>
                        <li>Paste your access token</li>
                        <li>Click "Test Connection"</li>
                        <li>You should see a map load!</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features you get */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Be Able to Do</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">📍 Job Mapping</h3>
                  <p className="text-sm text-gray-700">See all your jobs on a beautiful interactive map</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">🚗 Route Optimization</h3>
                  <p className="text-sm text-gray-700">Get the most efficient route for multiple stops</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">📊 Territory View</h3>
                  <p className="text-sm text-gray-700">See where all your customers are located</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">⏱️ Drive Time</h3>
                  <p className="text-sm text-gray-700">Accurate drive time estimates between jobs</p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Mapbox Pricing</h2>
              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <p className="font-semibold text-green-900 mb-2">Free Forever:</p>
                <p className="text-green-800">Up to 100,000 map loads per month</p>
                <p className="text-sm text-green-700 mt-2">That's enough for 100+ jobs/day showing maps. You'll never hit this limit!</p>
              </div>
              <p className="text-gray-700">
                Compare this to Jobber/HCP charging $50-100/month for the same feature in their "premium" tiers!
              </p>
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">🎉 Maps Are Ready!</h2>
              <p className="text-xl mb-6">
                You now have professional routing and mapping - the same tech Uber uses!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/setup-guides/stripe" 
                  className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-center"
                >
                  Next: Setup Payments (Stripe) →
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
