import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Field Service Software That Doesn't Cost More Than Your Truck Payment
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                $89/month. Everything included. Built by a contractor who got tired of $400/month software bills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/signup" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block text-center">
                  Start Free Trial - No Credit Card
                </Link>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Watch 2-Min Demo
                </button>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
              <p className="text-gray-500">Video/Screenshot Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Most Field Service Software Sucks
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hidden Pricing</h3>
              <p className="text-gray-600">
                They hide real costs behind 'contact sales' and charge extra for GPS tracking, custom forms, and basic features.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Built By Software People</h3>
              <p className="text-gray-600">
                Designed by people who've never worked a job in the field. Rigid workflows that don't match reality.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Terrible Mobile Apps</h3>
              <p className="text-gray-600">
                Too many taps to clock in, add photos, or update a job when you're standing on a ladder.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nickel and Dimed</h3>
              <p className="text-gray-600">
                Want text messaging? Extra. QuickBooks sync? Extra. You end up paying $300-500/month.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Built By a Contractor, For Contractors
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-blue-700 rounded-lg aspect-square flex items-center justify-center">
              <p className="text-blue-200">Photo placeholder</p>
            </div>
            <div className="space-y-4 text-lg">
              <p>I'm Jeremy. I run Creative Constructors in the Dallas-Fort Worth area.</p>
              <p>After spending over $10,000 on Jobber and Housecall Pro - and still missing features I actually needed - I built Creative Job Hub.</p>
              <p className="font-bold text-xl">$89/month. Everything you need. No games.</p>
              <Link to="/how-it-works" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors mt-4">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Pricing So Simple, You Don't Need a Sales Call
          </h2>
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 shadow-xl">
            <div className="text-5xl font-bold mb-6">$89/month</div>
            <p className="text-blue-100 mb-8">Everything included. No upsells.</p>
            <Link to="/signup" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Stop Overpaying For Field Service Software
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            14-day free trial. No credit card. No sales call.
          </p>
          <Link to="/signup" className="inline-block bg-white text-orange-600 px-12 py-4 rounded-lg font-bold text-xl hover:bg-orange-50 transition-colors">
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}
