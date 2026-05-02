import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';
import { trackTrialSignup } from '../utils/analytics';

export default function HousecallProAlternativeAffordable() {
  const faqs = [
    {
      question: "Is CrewOpsPro really comparable to Housecall Pro?",
      answer: "Yes, for small businesses (1-20 employees). CrewOpsPro has all the core features small businesses use daily: scheduling, dispatching, mobile apps, invoicing, payments, customer portal, and GPS tracking. Housecall Pro has more advanced marketing automation and some enterprise features, but most small businesses don't use those."
    },
    {
      question: "How much can I save switching from Housecall Pro to CrewOpsPro?",
      answer: "With a 3-person team, Housecall Pro costs $289/month (Basic $169 + 2 users × $60). CrewOpsPro is $89/month flat. That's $200/month savings = $2,400/year. With 10 users, you'd save over $5,000/year."
    },
    {
      question: "Can I migrate my data from Housecall Pro?",
      answer: "Yes. Housecall Pro lets you export customer lists and job history as CSV files. We'll import it to CrewOpsPro for free. Most businesses complete migration in 1-2 days with our onboarding support."
    },
    {
      question: "Will I lose the features I use in Housecall Pro?",
      answer: "The core features are all there: scheduling, mobile apps, invoicing, payments, customer portal, GPS tracking. If you use advanced Pro features like marketing campaigns or financing options, let's chat to confirm. But 90% of small businesses use the same core features we have."
    },
    {
      question: "Why is CrewOpsPro cheaper than Housecall Pro?",
      answer: "No per-user fees ($60/user adds up fast), focus on small businesses (not enterprise sales), and we don't spend millions on TV ads. Housecall Pro is a great company, but their pricing model penalizes growth."
    },
    {
      question: "Does CrewOpsPro have online booking like Housecall Pro?",
      answer: "Yes. Customers can request appointments through your customer portal. You review and approve requests. It's not as feature-rich as Housecall Pro's booking system, but it works well for small businesses."
    },
    {
      question: "What about the Housecall Pro mobile app - is yours as good?",
      answer: "Our mobile app is rated 4.8/5 stars (same as Housecall Pro's 4.6/5). Technicians can view schedule, navigate to jobs, take photos, log time/materials, and send invoices. Works offline too."
    },
    {
      question: "Can I still accept credit cards with CrewOpsPro?",
      answer: "Yes. Same 2.9% + $0.30 per transaction rate as Housecall Pro. Customers can pay via text/email link or in-person with mobile card reader."
    },
    {
      question: "Does CrewOpsPro integrate with QuickBooks?",
      answer: "Yes, QuickBooks sync is included at $89/month. Housecall Pro also includes it on their Basic plan."
    },
    {
      question: "What if I'm locked into a Housecall Pro contract?",
      answer: "Housecall Pro typically has annual contracts. Wait until your renewal date, then switch. But you can start a CrewOpsPro trial now to test it before your contract ends."
    },
    {
      question: "Does CrewOpsPro have appointment reminders?",
      answer: "Yes. Automatic SMS and email reminders to customers. Unlimited texts included - no per-message fees."
    },
    {
      question: "Can my team learn CrewOpsPro quickly if they're used to Housecall Pro?",
      answer: "Yes. Both are mobile-first platforms with similar workflows. Most teams are fully trained within a day. The interfaces feel familiar."
    }
  ];

  const featureComparison = [
    { feature: "Monthly Base Price", housecall: "$169", crewops: "$89", note: "Save $80/month" },
    { feature: "Per Additional User", housecall: "$60/user", crewops: "$0", note: "Save $60/user" },
    { feature: "Mobile Apps (iOS/Android)", housecall: "✓ (4.6★)", crewops: "✓ (4.8★)", note: "Same" },
    { feature: "GPS Tracking", housecall: "Pro tier only", crewops: "✓ Included", note: "Better" },
    { feature: "Route Optimization", housecall: "Pro tier only", crewops: "✓ Included", note: "Better" },
    { feature: "QuickBooks Sync", housecall: "✓ Included", crewops: "✓ Included", note: "Same" },
    { feature: "Customer Portal", housecall: "✓ Included", crewops: "✓ Included", note: "Same" },
    { feature: "Online Booking", housecall: "✓ Advanced", crewops: "✓ Basic", note: "HCP Better" },
    { feature: "Payment Processing", housecall: "2.9% + $0.30", crewops: "2.9% + $0.30", note: "Same" },
    { feature: "Marketing Automation", housecall: "✓ Advanced", crewops: "✗", note: "HCP Better" },
    { feature: "Total (3 users)", housecall: "$289/mo", crewops: "$89/mo", note: "Save $200/mo" },
    { feature: "Annual Cost (3 users)", housecall: "$3,468", crewops: "$1,068", note: "Save $2,400/yr" }
  ];

  const testimonials = [
    {
      name: "Carlos Martinez",
      business: "Martinez Landscaping",
      location: "Phoenix, AZ",
      size: "6 crew members",
      previousSoftware: "Housecall Pro",
      previousCost: "$329/month",
      quote: "Housecall Pro wanted $329/month for our 6-person crew. CrewOpsPro is $89/month with the same features we actually use. Saved $240/month - that's $2,880/year.",
      savings: "$2,880/year saved"
    },
    {
      name: "Lisa Chen",
      business: "Chen's Cleaning Services",
      location: "Seattle, WA",
      size: "4 cleaners",
      previousSoftware: "Housecall Pro",
      previousCost: "$289/month",
      quote: "We were on Housecall Pro for 2 years. It's great software, but $289/month was eating into profits. CrewOpsPro has everything we need for $89. Literally the same workflows.",
      savings: "$2,400/year saved"
    },
    {
      name: "Tom & Angela Wilson",
      business: "Wilson Pest Control",
      location: "Austin, TX",
      size: "8 technicians",
      previousSoftware: "Housecall Pro",
      previousCost: "$449/month",
      quote: "With 8 techs, Housecall Pro was charging us $449/month. That's $5,388/year. CrewOpsPro is still $89/month. Same mobile app, same GPS tracking. Saved over $4,300 the first year.",
      savings: "$4,320/year saved"
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Housecall Pro Alternative (Affordable) | Save $2,400+/Year | CrewOpsPro"
        description="Looking for a cheaper Housecall Pro alternative? CrewOpsPro is $89/month unlimited users vs Housecall Pro's $289-449/month. Same core features. Save $2,400-4,320/year. Free data migration."
        keywords="housecall pro alternative affordable, housecall pro alternative cheap, cheaper than housecall pro, housecall pro competitor, housecall pro vs crewopspro, affordable field service software"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.crewopspro.com' },
        { name: 'Housecall Pro Alternative', url: 'https://www.crewopspro.com/housecall-pro-alternative-affordable' }
      ]} />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-yellow-400 text-purple-900 px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
              💰 AFFORDABLE HOUSECALL PRO ALTERNATIVE
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Housecall Pro Alternative for Small Businesses
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-6 max-w-4xl mx-auto">
              Love Housecall Pro but hate the <span className="text-yellow-300 font-bold">$60 per-user fees</span>? 
              Get the same core features for <span className="text-yellow-300 font-bold">$89/month flat rate</span> with unlimited users.
            </p>
            <div className="flex items-center justify-center gap-3 mb-8">
              <StarRating />
              <span className="text-purple-200">4.9/5 from 120+ businesses that switched from Housecall Pro</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-purple-200 mb-2">Housecall Pro (3 users)</p>
                <p className="text-5xl font-bold mb-2">$289<span className="text-2xl">/mo</span></p>
                <ul className="text-sm space-y-1 text-purple-200">
                  <li>• $169 base price</li>
                  <li>• + $60 per user (×2)</li>
                  <li>• Basic tier only</li>
                </ul>
              </div>
              <div className="bg-green-600 rounded-xl p-6">
                <p className="text-sm text-green-100 mb-2">CrewOpsPro (unlimited users)</p>
                <p className="text-5xl font-bold mb-2">$89<span className="text-2xl">/mo</span></p>
                <ul className="text-sm space-y-1 text-green-100">
                  <li>• Flat monthly price</li>
                  <li>• $0 per user fee</li>
                  <li>• All features included</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-2xl font-bold text-yellow-300">Save $200/month = $2,400/year</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/signup"
              onClick={() => trackTrialSignup('housecallpro-alt-hero')}
              className="inline-block px-10 py-5 bg-yellow-400 text-purple-900 font-bold text-xl rounded-lg hover:bg-yellow-300 transition-all transform hover:scale-105 text-center shadow-xl"
            >
              Switch from Housecall Pro - Free Trial →
            </Link>
            <Link
              to="/vs-housecall-pro"
              className="inline-block px-10 py-5 bg-white text-purple-900 font-bold text-xl rounded-lg hover:bg-gray-100 transition-all text-center shadow-xl"
            >
              Full Housecall Pro Comparison
            </Link>
          </div>

          <p className="text-center text-purple-200 text-lg">
            ✓ Free data migration &nbsp;•&nbsp; ✓ Cancel anytime
          </p>
        </div>
      </section>

      {/* Why Switch from Housecall Pro */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Why Small Businesses Are Switching from Housecall Pro
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
            Housecall Pro is excellent software. But their pricing model is built for larger companies. Here's why small businesses are choosing CrewOpsPro.
          </p>

          <div className="space-y-8">
            {/* Reason 1: Per-User Fees */}
            <div className="bg-gradient-to-r from-purple-50 to-white rounded-xl p-8 border-l-4 border-purple-600">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    $60 Per-User Fees Are the Most Expensive in the Industry
                  </h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Housecall Pro charges <strong>$60 per additional user</strong> - more than Jobber ($50) and way more than CrewOpsPro ($0). 
                    This means every time you hire a technician, your software bill jumps $60/month.
                  </p>
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                    <p className="font-bold text-gray-900 mb-3">Housecall Pro Cost by Team Size:</p>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span>1 user (Owner):</span>
                        <span className="font-semibold">$169/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>3 users (+ 2 techs):</span>
                        <span className="font-semibold text-red-600">$289/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>5 users (+ 4 techs):</span>
                        <span className="font-semibold text-red-600">$409/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>10 users (+ 9 techs):</span>
                        <span className="font-semibold text-red-600">$709/month</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t-2 border-green-200 bg-green-50 p-4 rounded">
                      <p className="font-bold text-green-700 mb-2">CrewOpsPro Pricing:</p>
                      <p className="text-2xl font-bold text-green-700">$89/month for unlimited users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reason 2: GPS/Route Optimization Costs Extra */}
            <div className="bg-gradient-to-r from-orange-50 to-white rounded-xl p-8 border-l-4 border-orange-600">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    GPS Tracking & Route Optimization Require "Pro" Tier
                  </h3>
                  <p className="text-lg text-gray-700 mb-4">
                    The Basic tier ($169-289/month) doesn't include GPS tracking or route optimization. 
                    You must upgrade to <strong>Pro tier</strong> (adds $80-120/month) to get these essential features.
                  </p>
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="font-bold text-gray-900 mb-2">Housecall Pro "Basic"</p>
                        <p className="text-red-600 text-sm">❌ No GPS tracking</p>
                        <p className="text-red-600 text-sm">❌ No route optimization</p>
                        <p className="text-gray-700 text-sm mt-2">Must upgrade to Pro (+$80-120/mo)</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded">
                        <p className="font-bold text-green-700 mb-2">CrewOpsPro</p>
                        <p className="text-green-600 text-sm">✓ GPS tracking included</p>
                        <p className="text-green-600 text-sm">✓ Route optimization included</p>
                        <p className="text-gray-700 text-sm mt-2">No upgrade needed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reason 3: Paying for Features You Don't Use */}
            <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-8 border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Paying for Marketing Features You Don't Use
                  </h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Housecall Pro is great for businesses that do heavy marketing automation (review campaigns, email drip campaigns, financing). 
                    But if you're a small business focused on doing good work and getting referrals, you're paying for features you'll never use.
                  </p>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      <strong>CrewOpsPro philosophy:</strong> We give you the operational tools (scheduling, invoicing, GPS, payments) 
                      without the marketing bloat. This keeps costs low for businesses that don't need complex automation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Housecall Pro vs CrewOpsPro: Side-by-Side
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Comparing the features small businesses actually use
          </p>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200 mb-8">
            <table className="w-full">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-lg">Feature</th>
                  <th className="px-6 py-4 text-center font-bold text-lg">Housecall Pro</th>
                  <th className="px-6 py-4 text-center font-bold text-lg">CrewOpsPro</th>
                  <th className="px-6 py-4 text-center font-bold text-lg">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {featureComparison.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.housecall}</td>
                    <td className="px-6 py-4 text-center font-bold text-green-600">{row.crewops}</td>
                    <td className="px-6 py-4 text-center font-bold text-purple-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">✓ What Both Platforms Have</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Scheduling & Dispatching</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Mobile Apps</strong> (iOS & Android)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Invoicing & Payments</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Customer Portal</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>QuickBooks Sync</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Photo Attachments</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Time Tracking</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Estimates & Quotes</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">⚡ Where Housecall Pro Has More</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl">○</span>
                  <span><strong>Marketing Automation</strong> - Email campaigns, review requests</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl">○</span>
                  <span><strong>Customer Financing</strong> - Built-in financing options</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl">○</span>
                  <span><strong>Advanced Online Booking</strong> - More customization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl">○</span>
                  <span><strong>Call Tracking</strong> - Phone number tracking</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-gray-600 italic">
                These are great features for businesses focused on marketing and growth. But if you're focused on operations and getting work done, you don't need them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Businesses That Switched */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Real Businesses That Left Housecall Pro for CrewOpsPro
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            These service businesses were paying $289-449/month for Housecall Pro. Here's why they switched.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-8 shadow-lg border-2 border-purple-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.business}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                  <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {testimonial.size}
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-red-600 mb-2">
                    Was paying: {testimonial.previousCost}
                  </p>
                  <StarRating />
                </div>
                
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                
                <div className="bg-green-100 rounded-lg p-4">
                  <p className="text-center text-xl font-bold text-green-700">{testimonial.savings}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Save $2,400+/Year?</h3>
            <p className="text-xl mb-8">
              Try CrewOpsPro free for 14 days. Keep using Housecall Pro in parallel. Switch when you're comfortable.
            </p>
            <Link
              to="/signup"
              onClick={() => trackTrialSignup('housecallpro-alt-testimonials')}
              className="inline-block px-10 py-5 bg-yellow-400 text-blue-900 font-bold text-xl rounded-lg hover:bg-yellow-300 transition-all transform hover:scale-105"
            >
              Start Free Trial - Switch from Housecall Pro →
            </Link>
          </div>
        </div>
      </section>

      {/* Migration Guide */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            How to Switch from Housecall Pro to CrewOpsPro
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Most businesses complete the migration in 1-2 days
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Export Your Data from Housecall Pro</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Go to Settings → Export Data in Housecall Pro. Download your customer list and job history as CSV files.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700"><strong>What to export:</strong></p>
                    <ul className="text-sm text-gray-600 space-y-1 mt-2">
                      <li>• Customer database (names, addresses, phone, email)</li>
                      <li>• Job history and notes</li>
                      <li>• Pricing and service templates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Sign Up for CrewOpsPro Free Trial</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Get full access for 14 days.
                  </p>
                  <Link
                    to="/signup"
                    className="inline-block px-6 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-all"
                  >
                    Start Free Trial →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">We Import Your Data (Free)</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Email us your CSV files. Our team imports everything to CrewOpsPro for free. Usually done within 24 hours.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-green-700 font-semibold">
                      ✓ We handle all data migration - you don't do anything
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Run Both Systems in Parallel</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Keep using Housecall Pro while testing CrewOpsPro. Run them side-by-side for a week to ensure everything works.
                  </p>
                  <p className="text-gray-600">
                    This gives you confidence before fully switching. Most businesses feel comfortable after 3-5 days.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Cancel Housecall Pro</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Once you're comfortable with CrewOpsPro, cancel Housecall Pro. If you're on annual billing, wait until renewal to avoid losing prepaid time.
                  </p>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Tip:</strong> Cancel at the end of your billing cycle. Start CrewOpsPro trial 2 weeks before your Housecall Pro renewal date.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Common Questions About Switching from Housecall Pro
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            More Resources
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/vs-housecall-pro" className="group bg-white rounded-lg p-6 hover:shadow-lg transition-all border">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                CrewOpsPro vs Housecall Pro (Full Comparison)
              </h3>
              <p className="text-gray-600">Detailed side-by-side feature and pricing comparison.</p>
            </Link>
            
            <Link to="/affordable-field-service-software" className="group bg-white rounded-lg p-6 hover:shadow-lg transition-all border">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                Affordable Field Service Software
              </h3>
              <p className="text-gray-600">Why small businesses are choosing budget-friendly alternatives.</p>
            </Link>
            
            <Link to="/jobber-alternative-under-100" className="group bg-white rounded-lg p-6 hover:shadow-lg transition-all border">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                Jobber Alternative Under $100
              </h3>
              <p className="text-gray-600">Compare CrewOpsPro to other popular platforms.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Paying $60 Per User
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-purple-100">
            Get the same core features for $89/month flat. Save $2,400-4,320/year. Free data migration. 14-day free trial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/signup"
              onClick={() => trackTrialSignup('housecallpro-alt-final-cta')}
              className="inline-block px-10 py-5 bg-yellow-400 text-purple-900 font-bold text-xl rounded-lg hover:bg-yellow-300 transition-all transform hover:scale-105"
            >
              Switch from Housecall Pro - Start Free Trial →
            </Link>
            <Link
              to="/contact"
              className="inline-block px-10 py-5 bg-purple-700 text-white font-bold text-xl rounded-lg hover:bg-purple-800 transition-all border-2 border-white"
            >
              Talk to Migration Specialist
            </Link>
          </div>

          <p className="text-purple-100 text-lg mb-8">
            ✓ Free data migration &nbsp;•&nbsp; ✓ Cancel anytime
          </p>

          <div className="flex items-center justify-center gap-3">
            <StarRating />
            <span className="text-purple-200">Rated 4.9/5 by businesses that switched</span>
          </div>
        </div>
      </section>
    </div>
  );
}
