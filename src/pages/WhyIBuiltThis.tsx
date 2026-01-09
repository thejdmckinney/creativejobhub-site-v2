import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';

export default function WhyIBuiltThis() {
  return (
    <div className="bg-white">
      <SEO 
        title="Why I Built This - The Story Behind Creative Job Hub"
        description="The story of how a contractor built Creative Job Hub after getting frustrated with overpriced, feature-locked software. Real contractor, real problems, real solutions."
        keywords="contractor software story, why Creative Job Hub, field service software founder"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            I Got Tired of Paying $400/Month for Software That Didn't Work
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            So I built what I actually needed. And it turns out, you need it too.
          </p>
          <StarRating />
        </div>
      </section>

      {/* The Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Problem Started When I Started My Business</h2>
            
            <p className="text-xl text-gray-700 mb-6">
              When I started <span className="font-semibold">Creative Constructors</span> here in Dallas-Fort Worth, I knew I needed software to manage everything. Scheduling, invoicing, customer communication—all the stuff you can't do with a pen and paper when you're trying to grow.
            </p>

            <p className="text-xl text-gray-700 mb-6">
              I tried <span className="font-semibold">Housecall Pro</span> first. Then <span className="font-semibold">Jobber</span>. Then <span className="font-semibold">Workiz</span>.
            </p>

            <p className="text-xl text-gray-700 mb-8">
              They all had the same problem: <span className="font-semibold text-red-600">The base price looked fair, but everything I actually needed cost extra.</span>
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What They Charged Me Extra For:</h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>❌ Recurring maintenance plans</li>
                <li>❌ Service plan management</li>
                <li>❌ Booking confirmations (automated)</li>
                <li>❌ Customer reminders</li>
                <li>❌ Thank you emails</li>
                <li>❌ Pretty much every automation that actually saves time</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">But It Got Worse</h2>

            <p className="text-xl text-gray-700 mb-6">
              Even after paying for upgrades, the software was still <span className="font-semibold">missing features we actually needed in the field.</span>
            </p>

            <p className="text-xl text-gray-700 mb-6">
              I started talking to other contractors—chimney sweeps, handymen, pool service companies, electricians, plumbers. They all complained about the same things:
            </p>

            <div className="bg-gray-100 rounded-lg p-6 mb-8">
              <p className="text-lg text-gray-700 italic mb-4">
                "I need chemical tracking for my pool routes, but Jobber doesn't have it."
              </p>
              <p className="text-lg text-gray-700 italic mb-4">
                "Housecall Pro can't track creosote levels or generate CSIA-compliant reports."
              </p>
              <p className="text-lg text-gray-700 italic">
                "I can't set up service plans without upgrading to a $300/month tier."
              </p>
            </div>

            <p className="text-xl text-gray-700 mb-8">
              That's when I realized: <span className="font-semibold">These platforms are built by software people for generic businesses. Not by contractors for contractors.</span>
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">So I Built Creative Job Hub</h2>

            <p className="text-xl text-gray-700 mb-6">
              I built the software I wish I had from day one. Something that:
            </p>

            <ul className="space-y-4 mb-8 text-xl text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-2xl">✓</span>
                <span><span className="font-semibold">Includes all the enterprise features</span> without the enterprise price</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-2xl">✓</span>
                <span><span className="font-semibold">Works for multi-trade contractors</span> (handymen, electricians, plumbers)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-2xl">✓</span>
                <span><span className="font-semibold">Has industry-specific tools</span> built right in—not as expensive add-ons</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Industry-Specific Features That Actually Matter</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏊 Pool Service Businesses</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Chemical tracking built-in</li>
                  <li>✓ Chemical calculator for precise dosing</li>
                  <li>✓ Pool profile for every property</li>
                  <li>✓ Route optimization for service stops</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🧱 Chimney Sweeps</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Chimney profile for each property</li>
                  <li>✓ CSIA compliance built-in</li>
                  <li>✓ Creosote level tracking</li>
                  <li>✓ Auto-generated PDF reports per job</li>
                </ul>
              </div>
            </div>

            <p className="text-xl text-gray-700 mb-8">
              Other platforms make you pay $100+/month to upgrade for these features—<span className="font-semibold">if they even offer them at all.</span>
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Marketing That Pays For Itself</h2>

            <p className="text-xl text-gray-700 mb-6">
              Here's something no other platform does well: <span className="font-semibold">helping you market to the customers you already have.</span>
            </p>

            <p className="text-xl text-gray-700 mb-6">
              Creative Job Hub includes a <span className="font-semibold">Marketing Campaign Manager</span> with:
            </p>

            <ul className="space-y-3 mb-8 text-xl text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-2xl">✓</span>
                <span>Customizable email templates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-2xl">✓</span>
                <span>Built-in analytics for tracking campaign performance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-2xl">✓</span>
                <span>Automated follow-ups to past customers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-2xl">✓</span>
                <span>Service plan reminders</span>
              </li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <p className="text-xl text-gray-900 font-semibold">
                Send one email campaign to your customer list reminding them about spring maintenance, and you'll book enough jobs to pay for the software for the year.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Built By Someone Who Actually Uses It</h2>

            <p className="text-xl text-gray-700 mb-6">
              I use Creative Job Hub every single day to run Creative Constructors. If something doesn't work in the field, I fix it. If a feature is missing, I add it.
            </p>

            <p className="text-xl text-gray-700 mb-6">
              This isn't software built by a team in Silicon Valley who've never held a wrench. <span className="font-semibold">It's built by a contractor, for contractors.</span>
            </p>

            <p className="text-xl text-gray-700 mb-8">
              When you're on a ladder trying to clock in, or standing in a customer's driveway trying to send an invoice, the app works. Because I've been there. I've done that. And I built the software to make it easy.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">No Tiers. No Upsells. No Bullshit.</h2>

            <p className="text-xl text-gray-700 mb-6">
              $89/month. That's it. Everything included:
            </p>

            <ul className="space-y-3 mb-8 text-xl text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-2xl">✓</span>
                <span>Unlimited users</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-2xl">✓</span>
                <span>All automations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-2xl">✓</span>
                <span>Service plans & recurring maintenance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-2xl">✓</span>
                <span>GPS tracking & route optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-2xl">✓</span>
                <span>QuickBooks sync</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-2xl">✓</span>
                <span>Marketing campaign manager</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-2xl">✓</span>
                <span>Industry-specific tools (pool, chimney, etc.)</span>
              </li>
            </ul>

            <p className="text-2xl text-gray-900 font-bold mb-6">
              No hidden fees. No surprise upgrades. No "contact sales" nonsense.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Try Software Built For You?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            14-day free trial. No charge for 14 days. If you don't love it, cancel anytime.
          </p>
          <Link 
            to="/signup"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-lg font-bold text-xl transition-colors mb-6"
          >
            Start Free Trial
          </Link>
          <p className="text-blue-100">
            Questions? Email me directly:{' '}
            <a href="mailto:jeremy@creativejobhub.com" className="text-white font-semibold hover:underline">
              jeremy@creativejobhub.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
