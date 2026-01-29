// Jobber Alternative Page - Comprehensive comparison with UI screenshots
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FAQSchema from '../components/FAQSchema';
import StarRating from '../components/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import vsJobberImage from '../assets/cjh-vs-jobber.png';
import aiPricingImage from '../assets/Ai-pricing-analysis.png';
import clientDetailsImage from '../assets/client-details.png';
import dashboardImage from '../assets/dashboard-view.png';
import jobDetailsImage from '../assets/job-details.png';

const faqs = [
  {
    question: "How hard is it to switch from Jobber to Creative Job Hub?",
    answer: "Switching is straightforward and takes about 2 hours total. Export your customer data from Jobber as CSV files (Settings → Export Data), then import directly into Creative Job Hub. Most contractors complete the entire migration in an afternoon. We provide step-by-step guides and free support during your transition. You can even run both systems in parallel during your 14-day trial to ensure everything transfers correctly before canceling Jobber."
  },
  {
    question: "Will I lose my customer data, job history, or invoices when switching?",
    answer: "No, you won't lose anything. You own your data in Jobber, and you can export everything: customers, properties, job history, notes, invoices, and estimates. Creative Job Hub's import tool maps your Jobber fields automatically, preserving all your historical data. Your customers won't notice any change—their information, preferences, and history come with you seamlessly."
  },
  {
    question: "What about my team? Will they need extensive retraining?",
    answer: "Creative Job Hub is actually simpler and more intuitive than Jobber. If your team can navigate Jobber, they'll pick up Creative Job Hub in about an hour. The mobile app is clean and straightforward—no bloated menus or confusing navigation. We provide video tutorials, quick-start guides, and live support to get your team up to speed quickly. Many contractors report their team prefers Creative Job Hub because it's faster and less cluttered."
  },
  {
    question: "Can I try Creative Job Hub before canceling my Jobber subscription?",
    answer: "Absolutely! Start your 14-day free trial with no credit card required. Import your Jobber data and run both systems side-by-side if you want. Test everything: create estimates, schedule jobs, process payments, run your actual business on Creative Job Hub while keeping Jobber as a safety net. Only cancel Jobber once you're 100% confident. Most contractors know within 3-4 days that Creative Job Hub is the better choice."
  },
  {
    question: "Does Creative Job Hub really include GPS tracking, unlimited users, and unlimited texts?",
    answer: "Yes, everything is included at $89/month—no tiers, no add-ons, no games. GPS tracking, unlimited team members, unlimited text messages, automated workflows, service plans, custom forms, marketing campaigns, QuickBooks sync, mobile apps, online booking, payment processing, and industry-specific tools (pool, chimney, HVAC). What you see is what you get. No surprise charges ever."
  },
  {
    question: "What if I have 10+ employees? Is Creative Job Hub still $89/month?",
    answer: "Yes. $89/month flat whether you have 1 employee or 100. No per-user fees, no volume discounts needed—just one simple price. This is a massive advantage as your business grows. On Jobber, 10 users costs $579/month ($6,948/year). On Creative Job Hub, it's still $89/month ($1,068/year). You save $5,880 annually with a 10-person team—and the savings compound as you hire more."
  },
  {
    question: "How does Creative Job Hub compare to Jobber's mobile app?",
    answer: "Our mobile app (iOS and Android) is built specifically for field techs who need to work fast. It's faster, cleaner, and has fewer steps than Jobber's app. Techs can clock in, view job details, complete checklists, capture photos, collect payments, and generate invoices—all offline if needed. Data syncs automatically when back online. The interface is intuitive enough that most techs start using it effectively on their first job without formal training."
  },
  {
    question: "What happens to my Jobber integrations (QuickBooks, Google Calendar, etc.)?",
    answer: "Creative Job Hub integrates with QuickBooks Online for accounting sync, Google Calendar for scheduling, Stripe for payment processing, Mailchimp for email marketing, and Zapier for connecting to 5,000+ other apps. If you're using a specific integration in Jobber, check our integrations page or contact us—we'll let you know if it's supported or in development. Most popular integrations are already built-in."
  }
];

export default function VsJobber() {
  return (
    <div className="bg-white">
      <SEO 
        title="Jobber Alternative: Get All Features for $89/Month | Creative Job Hub"
        description="Tired of Jobber's per-user fees? Creative Job Hub offers all features—GPS tracking, unlimited texts, automated workflows—at $89/month flat. Save $3,240/year. See why contractors are making the switch."
        keywords="Jobber alternative, alternative to Jobber, best Jobber alternatives, cheaper than Jobber, Jobber vs Creative Job Hub, Jobber competitor, switch from Jobber, Jobber pricing alternative"
      />
      <FAQSchema faqs={faqs} />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Competitors', path: '/competitors' },
          { label: 'Creative Job Hub vs Jobber' }
        ]} 
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              The #1 Jobber Alternative: Creative Job Hub
            </h1>
            <p className="text-2xl text-gray-600 mb-6">
              All the features. No per-user fees. Save $3,240+ per year.
            </p>
            <StarRating />
          </div>
          <div className="max-w-4xl mx-auto">
            <img 
              src={vsJobberImage} 
              alt="Creative Job Hub vs Jobber Comparison" 
              className="w-full rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Why Look for Jobber Alternatives */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Contractors Are Looking for Jobber Alternatives
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Jobber is a solid field service platform, but thousands of contractors are searching for alternatives every month. Here's why:
            </p>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">💸 The Per-User Fee Trap</h3>
              <p className="text-gray-700 mb-4">
                Jobber's pricing model punishes growth. Start with 1 user at $199/month, then watch your bill balloon: 
                <strong> $279/month for 3 users, $359/month for 5 users, $519/month for 9 users.</strong> That's $6,228/year 
                just for 9 team members—before any add-ons.
              </p>
              <p className="text-gray-700">
                The math is brutal: hire 2 employees to grow your business, and Jobber charges you $960 more per year. 
                That's not scaling—that's being penalized for success.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">🔒 Tiered Pricing Locks Away Essential Features</h3>
              <p className="text-gray-700 mb-4">
                Jobber's Connect plan ($199/month) sounds reasonable until you realize what's missing:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>No GPS tracking</strong> - Can't see where your team is without upgrading to Grow ($299/mo)</li>
                <li><strong>No automated workflows</strong> - Manual busywork unless you pay for Grow tier</li>
                <li><strong>No service plans/recurring billing</strong> - Can't set up maintenance contracts on Connect</li>
                <li><strong>Limited custom forms</strong> - Want industry-specific checklists? Upgrade required</li>
              </ul>
              <p className="text-gray-700">
                Most contractors end up on the Grow plan ($299/month base) just to get features that should be standard. 
                That's $3,588/year before adding team members.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">💬 Add-On Fees for "Basic" Features</h3>
              <p className="text-gray-700 mb-4">
                Even on the Grow plan, Jobber charges extra for features you'd expect to be included:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Text messaging: $30/month</strong> - Want to send appointment reminders via text? That'll be $360/year extra</li>
                <li><strong>Additional phone numbers: $5-10/month each</strong> - Multi-location businesses pay more</li>
                <li><strong>Advanced reporting: Higher tiers only</strong> - Can't analyze profitability without upgrading further</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">🔧 Generic Software for Specific Industries</h3>
              <p className="text-gray-700 mb-4">
                Jobber is built to serve everyone, which means it's optimized for no one. Pool service contractors can't track chemical levels. 
                Chimney sweeps can't use CSIA inspection templates. HVAC techs can't log refrigerant usage efficiently.
              </p>
              <p className="text-gray-700">
                You end up building workarounds in custom fields or maintaining separate spreadsheets—defeating the purpose of having 
                field service software in the first place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Price Comparison - Big and Bold */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            The Real Cost (3 Users + Essential Features)
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Jobber */}
            <div className="bg-gray-100 rounded-lg p-8 border-2 border-gray-300">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Jobber</h3>
              <div className="space-y-4 text-lg text-gray-700 mb-6">
                <div className="flex justify-between">
                  <span>Connect plan (base):</span>
                  <span className="font-semibold">$199/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>+ 2 additional users:</span>
                  <span className="font-semibold">$80/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>+ GPS tracking (Grow tier):</span>
                  <span className="font-semibold">$50/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>+ Text reminders:</span>
                  <span className="font-semibold">$30/mo</span>
                </div>
                <div className="border-t-2 border-gray-400 pt-4 flex justify-between">
                  <span className="font-bold text-xl">Total:</span>
                  <span className="font-bold text-2xl text-red-600">$359/mo</span>
                </div>
              </div>
              <p className="text-center text-3xl font-bold text-gray-900 mb-2">$4,308/year</p>
              <p className="text-center text-sm text-gray-500">* Based on typical usage</p>
            </div>

            {/* Creative Job Hub */}
            <div className="bg-green-50 rounded-lg p-8 border-4 border-green-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-full font-bold">
                BEST VALUE
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Creative Job Hub</h3>
              <div className="space-y-4 text-lg text-gray-700 mb-6">
                <div className="flex justify-between">
                  <span>Everything included:</span>
                  <span className="font-semibold">$89/mo</span>
                </div>
                <div className="py-16 text-center">
                  <p className="text-2xl text-gray-500 italic">That's it.</p>
                  <p className="text-gray-600 mt-2">No per-user fees. No upgrades needed.</p>
                </div>
                <div className="border-t-2 border-green-400 pt-4 flex justify-between">
                  <span className="font-bold text-xl">Total:</span>
                  <span className="font-bold text-2xl text-green-600">$89/mo</span>
                </div>
              </div>
              <p className="text-center text-3xl font-bold text-gray-900 mb-2">$1,068/year</p>
              <p className="text-center text-sm text-green-700 font-semibold">✓ All features included</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-5xl font-bold text-green-600 mb-2">Save $3,240/year</p>
            <p className="text-xl text-gray-600">That's a truck payment. Or a vacation. Or actual profit.</p>
          </div>
        </div>
      </section>

      {/* Real Cost Calculator - Multiple Scenarios */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
            Real-World Cost Comparison: Your Business Size
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            See how much you'll save based on your actual team size and needs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Solo/Small (1-2 people) */}
            <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Solo/Small Team</h3>
              <p className="text-center text-gray-600 mb-6">1-2 people</p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-gray-900 mb-2">Jobber Connect:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Base plan: $199/mo</li>
                    <li>1 extra user: $40/mo</li>
                    <li>Text messaging: $30/mo</li>
                    <li className="pt-2 border-t font-bold text-red-600">Total: $269/mo</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded p-4 border-2 border-green-500">
                  <p className="font-bold text-gray-900 mb-2">Creative Job Hub:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Everything: $89/mo</li>
                    <li>Unlimited users: $0</li>
                    <li>Unlimited texts: $0</li>
                    <li className="pt-2 border-t font-bold text-green-600">Total: $89/mo</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-100 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600">Annual Savings</p>
                <p className="text-3xl font-bold text-green-600">$2,160</p>
                <p className="text-xs text-gray-500 mt-1">That's 2 months of salary for a helper</p>
              </div>
            </div>

            {/* Growing (3-5 people) */}
            <div className="bg-gray-50 rounded-lg p-6 border-4 border-orange-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Growing Business</h3>
              <p className="text-center text-gray-600 mb-6">3-5 people</p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-gray-900 mb-2">Jobber Grow:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Base plan (3 users): $299/mo</li>
                    <li>2 extra users: $80/mo</li>
                    <li>Text messaging: $30/mo</li>
                    <li className="pt-2 border-t font-bold text-red-600">Total: $409/mo</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded p-4 border-2 border-green-500">
                  <p className="font-bold text-gray-900 mb-2">Creative Job Hub:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Everything: $89/mo</li>
                    <li>Unlimited users: $0</li>
                    <li>Unlimited texts: $0</li>
                    <li className="pt-2 border-t font-bold text-green-600">Total: $89/mo</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-100 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600">Annual Savings</p>
                <p className="text-3xl font-bold text-green-600">$3,840</p>
                <p className="text-xs text-gray-500 mt-1">That's a new work truck down payment</p>
              </div>
            </div>

            {/* Established (6-10 people) */}
            <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Established</h3>
              <p className="text-center text-gray-600 mb-6">6-10 people</p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-gray-900 mb-2">Jobber Grow:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Base plan (3 users): $299/mo</li>
                    <li>7 extra users: $280/mo</li>
                    <li>Text messaging: $30/mo</li>
                    <li className="pt-2 border-t font-bold text-red-600">Total: $609/mo</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded p-4 border-2 border-green-500">
                  <p className="font-bold text-gray-900 mb-2">Creative Job Hub:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Everything: $89/mo</li>
                    <li>Unlimited users: $0</li>
                    <li>Unlimited texts: $0</li>
                    <li className="pt-2 border-t font-bold text-green-600">Total: $89/mo</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-100 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600">Annual Savings</p>
                <p className="text-3xl font-bold text-green-600">$6,240</p>
                <p className="text-xs text-gray-500 mt-1">That's enough to hire another employee</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-lg p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">
              The More You Grow, The More Jobber Costs—But We Don't
            </h3>
            <p className="text-xl text-orange-100 mb-6">
              Creative Job Hub is $89/month whether you have 1 employee or 100. Scale without fear.
            </p>
            <Link 
              to="/signup"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Calculate Your Savings - Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Feature-by-Feature Comparison
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-bold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-lg font-bold text-blue-600">Creative Job Hub</th>
                  <th className="px-6 py-4 text-center text-lg font-bold text-gray-600">Jobber</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-semibold">Unlimited Users</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                  <td className="px-6 py-4 text-center text-gray-900">$40/user/mo</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-semibold">GPS Tracking</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                  <td className="px-6 py-4 text-center text-gray-900">Grow tier required</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-semibold">Text Messaging</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓ Unlimited</td>
                  <td className="px-6 py-4 text-center text-gray-900">$30/mo extra</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-semibold">QuickBooks Sync</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-semibold">Custom Forms</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓ Unlimited</td>
                  <td className="px-6 py-4 text-center text-gray-900">Limited on Connect</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-semibold">Automated Workflows</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                  <td className="px-6 py-4 text-center text-gray-900">Grow tier required</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-semibold">Service Plans/Recurring</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                  <td className="px-6 py-4 text-center text-gray-900">Grow tier required</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-semibold">Mobile App (iOS & Android)</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-semibold">Online Booking</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-semibold">Payment Processing</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-semibold">Marketing Campaign Manager</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                  <td className="px-6 py-4 text-center text-2xl text-red-500">✗</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-semibold">Industry-Specific Tools (Pool, Chimney)</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                  <td className="px-6 py-4 text-center text-2xl text-red-500">✗</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-semibold">Built by a Contractor</td>
                  <td className="px-6 py-4 text-center text-2xl text-green-500">✓</td>
                  <td className="px-6 py-4 text-center text-2xl text-red-500">✗</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What Jobber Users Complain About */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What Jobber Users Complain About
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">💸 Per-User Fees Add Up Fast</h3>
              <p className="text-gray-700 mb-4">
                "Started at $199/month. Added 3 employees and now I'm at $319/month just for the base plan."
              </p>
              <p className="font-semibold text-green-700">
                ✓ Creative Job Hub: Unlimited users at $89/month
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">📊 Need Grow Tier For Basic Features</h3>
              <p className="text-gray-700 mb-4">
                "GPS tracking and automated workflows are locked behind the Grow plan. Had to upgrade just to track my team."
              </p>
              <p className="font-semibold text-green-700">
                ✓ Creative Job Hub: All features included
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">💬 Texting Costs Extra</h3>
              <p className="text-gray-700 mb-4">
                "Text reminders are $30/month on top of everything else. Why isn't this included?"
              </p>
              <p className="font-semibold text-green-700">
                ✓ Creative Job Hub: Unlimited texts included
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🔧 Not Built For My Industry</h3>
              <p className="text-gray-700 mb-4">
                "I run a pool service company. No chemical tracking, no pool profiles. Just generic forms."
              </p>
              <p className="font-semibold text-green-700">
                ✓ Creative Job Hub: Pool & chimney tools built-in
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contractors Switch */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Contractors Are Switching from Jobber
          </h2>
          <div className="space-y-6 text-xl">
            <div className="flex items-start gap-4">
              <span className="text-3xl">💰</span>
              <div>
                <p className="font-bold mb-2">They're Tired of Per-User Fees</p>
                <p className="text-blue-100">
                  "I hired 2 employees and my Jobber bill went from $199 to $279. Creative Job Hub stayed at $89."
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">🚀</span>
              <div>
                <p className="font-bold mb-2">They Want All Features, Not Just Some</p>
                <p className="text-blue-100">
                  "On Jobber Connect, I couldn't use GPS tracking or service plans. Had to pay $100+ more per month to upgrade."
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">🔧</span>
              <div>
                <p className="font-bold mb-2">They Need Industry-Specific Tools</p>
                <p className="text-blue-100">
                  "Jobber doesn't have chemical tracking for my pool routes or CSIA compliance for chimney inspections. Creative Job Hub does."
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">📱</span>
              <div>
                <p className="font-bold mb-2">They Want Software Built By Someone Who Gets It</p>
                <p className="text-blue-100">
                  "Jeremy built this because he runs a contracting business. He understands what we actually need in the field."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* See Creative Job Hub in Action - Screenshots */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See Creative Job Hub in Action
            </h2>
            <p className="text-2xl text-gray-600">
              Clean, modern UI that's actually <span className="text-green-600 font-bold">easier to use</span> than Jobber—and <span className="text-green-600 font-bold">70% cheaper</span>
            </p>
          </div>

          {/* Dashboard View */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">📊 Dashboard: Everything at a Glance</h3>
                <p className="text-blue-100">
                  See your day's schedule, revenue, and key metrics instantly. No cluttered interface—just the info you need.
                </p>
              </div>
              <div className="p-6">
                <img 
                  src={dashboardImage} 
                  alt="Creative Job Hub dashboard showing clean layout with daily schedule, revenue metrics, and job overview" 
                  className="w-full rounded-lg shadow-lg border border-gray-200"
                  loading="lazy"
                />
                <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4">
                  <p className="text-gray-700">
                    <strong className="text-green-700">✓ Better than Jobber:</strong> Our dashboard loads 2x faster and shows exactly what you need without overwhelming you with data. 
                    Jobber's dashboard feels cluttered and slow. Ours is clean and lightning-fast—at <strong>$89/month vs Jobber's $199+</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Pricing Analysis */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">🤖 AI Pricing Analysis: Never Underprice Again</h3>
                <p className="text-purple-100">
                  Click the AI button on any price book item and get instant recommendations: Competitive, Market Rate, or Premium pricing.
                </p>
              </div>
              <div className="p-6">
                <img 
                  src={aiPricingImage} 
                  alt="AI pricing analysis showing competitive pricing recommendations for service items" 
                  className="w-full rounded-lg shadow-lg border border-gray-200"
                  loading="lazy"
                />
                <div className="mt-4 bg-purple-50 border-l-4 border-purple-500 p-4">
                  <p className="text-gray-700">
                    <strong className="text-purple-700">🚀 Jobber doesn't have this:</strong> Our AI analyzes your market and suggests optimal pricing to maximize profit without losing customers. 
                    Stop guessing—let AI keep your pricing competitive. <strong>This feature alone could pay for your entire subscription.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Client Details */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">👤 Client Management: Everything in One Place</h3>
                <p className="text-green-100">
                  All client info, job history, notes, and communication in a clean, organized layout. No more hunting through tabs.
                </p>
              </div>
              <div className="p-6">
                <img 
                  src={clientDetailsImage} 
                  alt="Client details page showing comprehensive customer information, job history, and contact details in organized layout" 
                  className="w-full rounded-lg shadow-lg border border-gray-200"
                  loading="lazy"
                />
                <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4">
                  <p className="text-gray-700">
                    <strong className="text-green-700">✓ Cleaner than Jobber:</strong> Our client details page is thoughtfully designed with everything you need visible without scrolling endlessly. 
                    Jobber's client interface is cluttered with unnecessary tabs and buried information. We made it simple—and <strong>saved you $110-$270/month</strong> in the process.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Job Details */}
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">📋 Job Details: Clean, Fast, Complete</h3>
                <p className="text-orange-100">
                  Every detail about a job in one clean view. Schedule, assign, invoice, and track—all without the bloat.
                </p>
              </div>
              <div className="p-6">
                <img 
                  src={jobDetailsImage} 
                  alt="Job details page showing streamlined job information, scheduling, and status tracking" 
                  className="w-full rounded-lg shadow-lg border border-gray-200"
                  loading="lazy"
                />
                <div className="mt-4 bg-orange-50 border-l-4 border-orange-500 p-4">
                  <p className="text-gray-700">
                    <strong className="text-orange-700">✓ Faster workflow:</strong> Our job details screen is designed for speed. No unnecessary clicks, no hidden menus, no confusion. 
                    Everything is exactly where you expect it. Jobber's job interface requires multiple clicks to do simple tasks. 
                    We streamlined it—and <strong>you get this superior UI for $89/month while Jobber charges $199-$299/month</strong> for a more complicated interface.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">
              Better Software. Cleaner Interface. 70% Less Cost.
            </h3>
            <p className="text-xl text-green-100 mb-6">
              See for yourself why contractors are ditching Jobber's cluttered, expensive platform for Creative Job Hub's clean, affordable solution.
            </p>
            <Link 
              to="/signup"
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Start Free 14-Day Trial - No Credit Card
            </Link>
            <p className="text-green-100 mt-4 text-sm">
              Import your Jobber data in minutes • Cancel Jobber after you see the difference
            </p>
          </div>
        </div>
      </section>

      {/* Side-by-Side Plans */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Compare Plans Side-by-Side
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Jobber Plans */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Jobber Plans</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
                  <p className="text-2xl font-bold text-gray-900 mb-2">Connect: $199/mo</p>
                  <p className="text-sm text-gray-600 mb-4">+ $40/user after first</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>✗ No GPS tracking</li>
                    <li>✗ No automated workflows</li>
                    <li>✗ Limited custom forms</li>
                    <li>✗ No service plans</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
                  <p className="text-2xl font-bold text-gray-900 mb-2">Grow: $299/mo</p>
                  <p className="text-sm text-gray-600 mb-4">+ $40/user after first 3</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ GPS tracking included</li>
                    <li>✓ Automated workflows</li>
                    <li>✓ Service plans</li>
                    <li>✗ Still costs $30/mo for texting</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Creative Job Hub */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Creative Job Hub</h3>
              <div className="bg-green-50 rounded-lg p-6 border-4 border-green-500 h-full flex flex-col justify-center">
                <p className="text-4xl font-bold text-gray-900 mb-4 text-center">$89/month</p>
                <p className="text-center text-gray-600 mb-6">Everything. No tiers. No games.</p>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    Unlimited users
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    GPS tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    Unlimited texts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    Automated workflows
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    Service plans
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    Marketing campaigns
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    Industry-specific tools
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Guide */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
            How to Switch from Jobber to Creative Job Hub
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Most contractors complete the switch in under 2 hours. Here's exactly how to do it:
          </p>

          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Export Your Data from Jobber</h3>
                  <p className="text-gray-700 mb-4">
                    In Jobber, go to <strong>Settings → Export Data</strong>. Download CSV files for:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li><strong>Clients</strong> - All customer information, addresses, phone numbers, emails</li>
                    <li><strong>Properties</strong> - Service locations (if different from client addresses)</li>
                    <li><strong>Jobs</strong> - Job history, notes, dates, amounts</li>
                    <li><strong>Invoices</strong> - Billing history and payment status</li>
                    <li><strong>Quotes/Estimates</strong> - All pending and approved estimates</li>
                  </ul>
                  <p className="text-gray-700 font-semibold">
                    ⏱️ Time required: 15 minutes
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Set Up Your Creative Job Hub Account</h3>
                  <p className="text-gray-700 mb-4">
                    Sign up for your 14-day free trial at creativejobhub.com/signup. The setup wizard will guide you through:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li><strong>Business information</strong> - Company name, logo, contact details</li>
                    <li><strong>Service categories</strong> - What types of jobs you do (or use industry templates)</li>
                    <li><strong>Pricing templates</strong> - Your standard rates and packages</li>
                    <li><strong>Team members</strong> - Add unlimited users (no extra cost!)</li>
                  </ul>
                  <p className="text-gray-700 font-semibold">
                    ⏱️ Time required: 20 minutes
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-purple-500">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Import Your Jobber Data</h3>
                  <p className="text-gray-700 mb-4">
                    In Creative Job Hub, go to <strong>Settings → Import Data</strong>. Upload your CSV files:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li><strong>Customer import</strong> - Map Jobber fields to Creative Job Hub fields (we auto-detect most)</li>
                    <li><strong>Job history</strong> - Import past jobs to maintain customer history</li>
                    <li><strong>Review and confirm</strong> - Preview your data before finalizing</li>
                  </ul>
                  <p className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-gray-700 mb-4">
                    <strong>💡 Pro tip:</strong> Import customers first, then jobs. This ensures job records link to the correct customers.
                  </p>
                  <p className="text-gray-700 font-semibold">
                    ⏱️ Time required: 30 minutes
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-orange-500">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Train Your Team & Go Live</h3>
                  <p className="text-gray-700 mb-4">
                    Get your team up to speed in under an hour:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li><strong>Mobile app setup</strong> - Download Creative Job Hub app (iOS/Android), log in, done</li>
                    <li><strong>Quick training</strong> - Watch 5-minute video tutorials for key features</li>
                    <li><strong>Run parallel for a week</strong> - Keep Jobber active while team learns (optional)</li>
                    <li><strong>Cancel Jobber</strong> - Once confident, cancel your Jobber subscription</li>
                  </ul>
                  <p className="bg-green-50 border-l-4 border-green-400 p-4 text-gray-700 mb-4">
                    <strong>✅ Support included:</strong> Free onboarding call, live chat, and email support during your transition. 
                    We'll help you get it right.
                  </p>
                  <p className="text-gray-700 font-semibold">
                    ⏱️ Time required: 45 minutes + ongoing training
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg p-8 shadow-lg border-2 border-green-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              💰 Total Migration Time: ~2 Hours
            </h3>
            <p className="text-xl text-center text-gray-700 mb-6">
              Save $3,240+ per year. That's <strong>$1,620 per hour</strong> of migration work. Best hourly rate you'll ever earn.
            </p>
            <div className="text-center">
              <Link 
                to="/signup"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Start Your Free 14-Day Trial
              </Link>
              <p className="text-gray-500 mt-3">No credit card required • Import your Jobber data in minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
            Switching from Jobber? Your Questions Answered
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Everything you need to know about making the switch with confidence
          </p>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
            <p className="text-xl text-gray-900 mb-4">
              <strong>Still have questions?</strong> Talk to a real person who understands your business.
            </p>
            <p className="text-gray-700">
              Email Jeremy directly:{' '}
              <a href="mailto:jeremy@creativejobhub.com" className="text-blue-600 font-semibold hover:underline">
                jeremy@creativejobhub.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Save $3,240/Year?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join contractors who switched from Jobber and never looked back.
          </p>
          <div className="bg-white text-gray-900 rounded-2xl p-12 max-w-xl mx-auto mb-8">
            <div className="mb-6">
              <span className="text-6xl font-bold">$89</span>
              <span className="text-xl text-gray-500">/month</span>
            </div>
            <p className="text-xl font-semibold mb-8">Everything Jobber charges extra for—included</p>
            <Link 
              to="/signup"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-lg font-bold text-xl transition-colors"
            >
              Start Free Trial - 14 Days
            </Link>
            <p className="text-gray-500 mt-4">No charge for 14 days</p>
          </div>
          <p className="text-orange-100">
            Questions about switching?{' '}
            <a href="mailto:jeremy@creativejobhub.com" className="text-white font-semibold hover:underline">
              Email me directly
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
