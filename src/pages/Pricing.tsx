import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Pricing() {
  return (
    <div className="bg-white">
      <SEO 
        title="Pricing - $89/Month, Everything Included"
        description="Simple, transparent pricing. $89/month includes unlimited users, jobs, estimates, invoices, mobile apps, QuickBooks sync, and 24/7 support. No hidden fees. Try free for 14 days."
        keywords="field service pricing, contractor software pricing, affordable field service software, unlimited users"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            One Price. Everything Included. No Games.
          </h1>
          <p className="text-2xl text-gray-600">
            What you see is what you pay. Forever.
          </p>
        </div>
      </section>

      {/* The Price - Center of Page */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-4 border-blue-600 rounded-2xl shadow-2xl p-16 text-center">
            <div className="mb-6">
              <span className="text-7xl font-bold text-gray-900">$89</span>
              <span className="text-2xl text-gray-500">/month</span>
            </div>
            <p className="text-2xl font-semibold text-gray-900 mb-2">Everything Included</p>
            <p className="text-lg text-gray-600 mb-8">Cancel Anytime. No Contract</p>
            <Link 
              to="/signup"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-lg font-bold text-xl transition-colors mb-4"
            >
              Start Free Trial - 14 Days
            </Link>
            <p className="text-gray-500">No Charge for 14 Days</p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Core Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Core Features</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Unlimited users</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Unlimited jobs</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Mobile app (iOS & Android)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">GPS tracking & route optimization</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Customer database</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Job scheduling & calendar</span>
                </div>
              </div>
            </div>

            {/* Communication & Payments */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Communication & Payments</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Unlimited text & email messaging</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Online booking & forms</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Invoicing & estimates</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Payment processing (card & ACH)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Automated reminders</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Photo uploads (unlimited)</span>
                </div>
              </div>
            </div>

            {/* Integrations & Support */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Integrations & Support</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">QuickBooks Online sync</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Custom forms & checklists</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Reporting & analytics</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Email support</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Free updates forever</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">No setup fees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Won't Pay Extra For */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Other Platforms Charge Extra For
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="text-3xl text-red-500 mb-3">❌</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Per-user fees</h3>
              <p className="text-gray-700 font-semibold mb-1">$0 extra at Creative Job Hub</p>
              <p className="text-sm text-gray-500">Competitors: $20-50/user/month</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="text-3xl text-red-500 mb-3">❌</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">GPS tracking</h3>
              <p className="text-gray-700 font-semibold mb-1">$0 extra at Creative Job Hub</p>
              <p className="text-sm text-gray-500">Competitors: Higher tier required</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="text-3xl text-red-500 mb-3">❌</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Text messaging</h3>
              <p className="text-gray-700 font-semibold mb-1">$0 extra at Creative Job Hub</p>
              <p className="text-sm text-gray-500">Competitors: $0.02-0.05/message</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="text-3xl text-red-500 mb-3">❌</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">QuickBooks integration</h3>
              <p className="text-gray-700 font-semibold mb-1">$0 extra at Creative Job Hub</p>
              <p className="text-sm text-gray-500">Competitors: $50-100/month</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="text-3xl text-red-500 mb-3">❌</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Custom forms</h3>
              <p className="text-gray-700 font-semibold mb-1">$0 extra at Creative Job Hub</p>
              <p className="text-sm text-gray-500">Competitors: Higher tier required</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="text-3xl text-red-500 mb-3">❌</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">API access</h3>
              <p className="text-gray-700 font-semibold mb-1">$0 extra at Creative Job Hub</p>
              <p className="text-sm text-gray-500">Competitors: Enterprise only</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Math */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            The Real Cost Comparison
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Typical Jobber */}
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Typical Jobber</h3>
              <div className="space-y-3 text-gray-700 mb-6">
                <div className="flex justify-between">
                  <span>Base plan:</span>
                  <span className="font-semibold">$199/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>+ 2 extra users:</span>
                  <span className="font-semibold">$80</span>
                </div>
                <div className="flex justify-between">
                  <span>+ GPS tier upgrade:</span>
                  <span className="font-semibold">$50</span>
                </div>
                <div className="flex justify-between">
                  <span>+ Texting:</span>
                  <span className="font-semibold">$30</span>
                </div>
                <div className="border-t-2 border-gray-300 pt-3 flex justify-between">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold text-xl">$359/month</span>
                </div>
              </div>
              <p className="text-center text-2xl font-bold text-gray-900">$4,308/year</p>
            </div>

            {/* Creative Job Hub */}
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Creative Job Hub</h3>
              <div className="space-y-3 text-gray-700 mb-6">
                <div className="flex justify-between">
                  <span>Everything:</span>
                  <span className="font-semibold">$89/mo</span>
                </div>
                <div className="py-12 text-center text-gray-500 italic">
                  That's it.
                </div>
                <div className="border-t-2 border-green-300 pt-3 flex justify-between">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold text-xl">$89/month</span>
                </div>
              </div>
              <p className="text-center text-2xl font-bold text-gray-900">$1,068/year</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-4xl font-bold text-green-600">You save: $3,240 per year</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Questions? Here Are The Answers.
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What if I have 10 employees?</h3>
              <p className="text-gray-700">Same price. $89/month. We don't charge per user.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Are there any contracts?</h3>
              <p className="text-gray-700">Nope. Month-to-month. Cancel anytime with one click.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Do you charge per text message?</h3>
              <p className="text-gray-700">No. Unlimited texts included.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What about payment processing fees?</h3>
              <p className="text-gray-700">Standard rates (2.9% + $0.30 per transaction). We don't mark them up like some platforms do.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Will the price ever increase?</h3>
              <p className="text-gray-700">Not for you. If you sign up at $89/month, that's your price. We might adjust pricing for new customers in the future, but existing customers are grandfathered in.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What if I need to add features later?</h3>
              <p className="text-gray-700">Everything's already included. There's nothing to add.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Is there a setup fee?</h3>
              <p className="text-gray-700">No. No setup fees, no training fees, no hidden fees.</p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I really cancel anytime?</h3>
              <p className="text-gray-700">Yes. One click in your account settings. No hoops, no "are you sure?" guilt trips, no having to email support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-600 text-white rounded-lg p-8">
            <p className="text-xl mb-6 italic">
              "Built by a contractor, for contractors. I use this software every day to run Creative Constructors in Dallas-Fort Worth. If it works for me, it'll work for you."
            </p>
            <p className="font-semibold">— Jeremy McKinney, Founder</p>
            <Link to="/why-i-built-this" className="inline-block mt-4 text-blue-100 hover:text-white underline">
              Read the full story →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Stop Overpaying?</h2>
          <p className="text-xl mb-12 text-orange-100">
            Start your 14-day free trial. No charge for 14 days. No sales call. Just sign up and start using it.
          </p>
          
          <div className="bg-white text-gray-900 rounded-2xl p-12 max-w-xl mx-auto mb-8">
            <div className="mb-6">
              <span className="text-6xl font-bold">$89</span>
              <span className="text-xl text-gray-500">/month</span>
            </div>
            <p className="text-xl font-semibold mb-8">Everything included</p>
            <Link 
              to="/signup"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-lg font-bold text-xl transition-colors"
            >
              Start Free Trial - 14 Days
            </Link>
          </div>

          <p className="text-orange-100">
            Questions? Email me:{' '}
            <a href="mailto:jeremy@creativejobhub.com" className="text-white font-semibold hover:underline">
              jeremy@creativejobhub.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
