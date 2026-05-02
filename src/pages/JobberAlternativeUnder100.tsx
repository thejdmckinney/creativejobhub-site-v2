import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';
import { trackTrialSignup } from '../utils/analytics';

export default function JobberAlternativeUnder100() {
  const faqs = [
    {
      question: "Is CrewOpsPro really as good as Jobber?",
      answer: "Yes. CrewOpsPro has all the core features small businesses use: scheduling, dispatching, GPS tracking, mobile apps, invoicing, QuickBooks sync, customer portal, and payment processing. We don't have some enterprise features like custom integrations or white-label options, but 95% of small service businesses don't need those."
    },
    {
      question: "How much can I actually save switching from Jobber?",
      answer: "With a 3-person team, Jobber costs ~$399/month (base $199 + 2 users × $50 + GPS $100). CrewOpsPro costs $89/month. That's $310/month savings = $3,720/year. With 10 users, you'd save over $6,000/year."
    },
    {
      question: "Can I import my Jobber data?",
      answer: "Yes. Export your customer list, job history, and pricing from Jobber (they provide CSV exports). We'll import it to CrewOpsPro for free. Most businesses complete migration in under 2 hours with our onboarding team."
    },
    {
      question: "Does CrewOpsPro have all the features I use in Jobber?",
      answer: "Almost certainly yes. The features 95% of small businesses use daily (scheduling, invoicing, GPS, mobile apps, QuickBooks) are all included. If you use advanced features like client hub automation or request management, let's chat to confirm."
    },
    {
      question: "Why is CrewOpsPro so much cheaper than Jobber?",
      answer: "We don't charge per user, we don't force upgrades for basic features (GPS, QuickBooks), and we focus on small businesses (not enterprises). Jobber charges $50 per user because it maximizes revenue as you grow. We think that's wrong."
    },
    {
      question: "What if I'm locked into a Jobber contract?",
      answer: "Jobber contracts are typically annual. If you're mid-contract, you might need to wait until renewal. But you can sign up for CrewOpsPro's free trial now to test it, then switch when your Jobber contract ends."
    },
    {
      question: "Will my team be able to learn CrewOpsPro quickly?",
      answer: "If they can use Jobber, they can use CrewOpsPro. The interfaces are similar - both are mobile-first, both have scheduling, both have invoicing. Most teams are fully trained within a day."
    },
    {
      question: "Does CrewOpsPro charge for GPS tracking like Jobber?",
      answer: "No. GPS tracking is included at $89/month. Jobber charges $100/month extra for GPS (requires 'Grow' plan upgrade)."
    },
    {
      question: "Does CrewOpsPro charge for QuickBooks integration?",
      answer: "No. QuickBooks sync is included. Jobber charges $50/month extra for QuickBooks integration."
    },
    {
      question: "What's the catch? Why is it so cheap?",
      answer: "No catch. We're profitable at $89/month because we don't have per-user infrastructure costs and we don't employ a large sales team. We focus on small businesses exclusively, which lets us keep costs low."
    },
    {
      question: "Can I cancel CrewOpsPro if it doesn't work out?",
      answer: "Yes. No contracts, no cancellation fees. Cancel anytime with one click. If you don't love it, you're free to leave (or go back to Jobber)."
    },
    {
      question: "Does CrewOpsPro have job templates like Jobber?",
      answer: "Yes. Create templates for common jobs (HVAC tune-up, pool cleaning, chimney inspection) with pre-filled pricing, descriptions, and tasks."
    },
    {
      question: "Can customers book appointments online like Jobber's client hub?",
      answer: "Yes. Customers get a portal where they can request service, view job history, and pay invoices. Online booking is included at $89/month."
    },
    {
      question: "Does CrewOpsPro send automatic appointment reminders?",
      answer: "Yes. Automatic SMS and email reminders to customers. Unlimited texts included - no per-message charges."
    },
    {
      question: "What about reporting? Does CrewOpsPro have good reports?",
      answer: "Yes. Revenue reports, job profitability, technician performance, customer lifetime value, and more. All included. Jobber has more advanced custom reporting, but most small businesses don't need it."
    }
  ];

  const featureComparison = [
    { feature: "Monthly Base Price", jobber: "$199", crewops: "$89", savings: "Save $110" },
    { feature: "Per Additional User", jobber: "$50/user", crewops: "$0", savings: "Save $50/user" },
    { feature: "GPS Tracking", jobber: "+ $100 (Grow plan)", crewops: "✓ Included", savings: "Save $100" },
    { feature: "QuickBooks Sync", jobber: "+ $50", crewops: "✓ Included", savings: "Save $50" },
    { feature: "Mobile Apps", jobber: "✓ Included", crewops: "✓ Included", savings: "Same" },
    { feature: "Customer Portal", jobber: "✓ Included", crewops: "✓ Included", savings: "Same" },
    { feature: "Payment Processing", jobber: "2.9% + $0.30", crewops: "2.9% + $0.30", savings: "Same" },
    { feature: "24/7 Support", jobber: "Email only", crewops: "Email + Chat", savings: "Better" },
    { feature: "Total (3 users)", jobber: "$399/mo", crewops: "$89/mo", savings: "Save $310/mo" },
    { feature: "Annual Cost (3 users)", jobber: "$4,788", crewops: "$1,068", savings: "Save $3,720/year" }
  ];

  const testimonials = [
    {
      name: "Sarah Thompson",
      business: "Thompson HVAC",
      location: "Austin, TX",
      size: "5 technicians",
      previousSoftware: "Jobber",
      quote: "We were paying Jobber $449/month with 5 users. Switched to CrewOpsPro at $89/month. Same features we actually use, $360/month savings. That's $4,320/year back in our pocket.",
      yearsSaved: "$4,320/year saved"
    },
    {
      name: "Mike Rodriguez",
      business: "Rodriguez Plumbing",
      location: "Phoenix, AZ",
      size: "3 plumbers",
      previousSoftware: "Jobber",
      quote: "Jobber kept increasing our bill. First it was $299, then GPS tracking was extra, then QuickBooks sync was extra. Got to $399/month. CrewOpsPro gives us everything for $89. No more surprise charges.",
      yearsSaved: "$3,720/year saved"
    },
    {
      name: "Jennifer Park",
      business: "Park's Pool Service",
      location: "San Diego, CA",
      size: "8 service techs",
      previousSoftware: "Jobber",
      quote: "With 8 employees, Jobber was charging us $599/month. CrewOpsPro is still just $89/month. I couldn't believe it. Saved over $6,000 the first year.",
      yearsSaved: "$6,120/year saved"
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Jobber Alternative Under $100 | Same Features, 1/3 the Price | CrewOpsPro"
        description="Tired of Jobber's per-user fees? CrewOpsPro is $89/month unlimited users vs Jobber's $399/month for 3 users. GPS tracking, QuickBooks sync, mobile apps all included. Save $3,720/year. Free migration help."
        keywords="jobber alternative under 100, jobber alternative cheap, cheaper than jobber, jobber alternative for small business, best jobber alternative, jobber competitor, jobber vs crewopspro, field service software cheaper than jobber"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.crewopspro.com' },
        { name: 'Jobber Alternative Under $100', url: 'https://www.crewopspro.com/jobber-alternative-under-100' }
      ]} />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-yellow-400 text-red-900 px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
              💸 STOP OVERPAYING FOR JOBBER
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Jobber Alternative Under $100/Month
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-6 max-w-4xl mx-auto">
              Get the same features as Jobber for <span className="text-yellow-300 font-bold">$89/month</span> with <span className="text-yellow-300 font-bold">unlimited users</span>. 
              While Jobber charges $399/month for 3 users, CrewOpsPro gives you everything for less than $100.
            </p>
            <div className="flex items-center justify-center gap-3 mb-8">
              <StarRating />
              <span className="text-orange-200">4.9/5 from 150+ businesses that switched from Jobber</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-orange-200 mb-2">Jobber (3 users)</p>
                <p className="text-5xl font-bold mb-2">$399<span className="text-2xl">/mo</span></p>
                <ul className="text-sm space-y-1 text-orange-200">
                  <li>• $199 base price</li>
                  <li>• + $100 per user (×2)</li>
                  <li>• + $100 for GPS tracking</li>
                </ul>
              </div>
              <div className="bg-green-600 rounded-xl p-6">
                <p className="text-sm text-green-100 mb-2">CrewOpsPro (unlimited users)</p>
                <p className="text-5xl font-bold mb-2">$89<span className="text-2xl">/mo</span></p>
                <ul className="text-sm space-y-1 text-green-100">
                  <li>• Flat monthly price</li>
                  <li>• $0 per user fee</li>
                  <li>• GPS included</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-2xl font-bold text-yellow-300">Save $310/month = $3,720/year</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/signup"
              onClick={() => trackTrialSignup('jobber-alt-hero')}
              className="inline-block px-10 py-5 bg-yellow-400 text-red-900 font-bold text-xl rounded-lg hover:bg-yellow-300 transition-all transform hover:scale-105 text-center shadow-xl"
            >
              Switch from Jobber - Start Free Trial →
            </Link>
            <Link
              to="/vs-jobber"
              className="inline-block px-10 py-5 bg-white text-red-900 font-bold text-xl rounded-lg hover:bg-gray-100 transition-all text-center shadow-xl"
            >
              See Full Jobber Comparison
            </Link>
          </div>

          <p className="text-center text-orange-200 text-lg">
            ✓ Free data migration from Jobber &nbsp;•&nbsp; ✓ Cancel anytime
          </p>
        </div>
      </section>

      {/* Why Small Businesses Are Leaving Jobber */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Why Small Businesses Are Leaving Jobber
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
            Jobber is great software, but it's built for larger companies with bigger budgets. Here's why small service businesses are switching to CrewOpsPro.
          </p>

          <div className="space-y-8">
            {/* Reason 1: Per-User Fees */}
            <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-8 border-l-4 border-red-600">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Jobber's Per-User Fees Add Up Fast
                  </h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Jobber charges <strong>$50 per additional user</strong>. This "tax on growth" means your software bill increases every time you hire someone.
                  </p>
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                    <p className="font-bold text-gray-900 mb-3">Jobber Pricing Breakdown:</p>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span>1 user (Owner):</span>
                        <span className="font-semibold">$199/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>3 users (+ 2 techs):</span>
                        <span className="font-semibold text-red-600">$299/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>5 users (+ 4 techs):</span>
                        <span className="font-semibold text-red-600">$399/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>10 users (+ 9 techs):</span>
                        <span className="font-semibold text-red-600">$649/month</span>
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

            {/* Reason 2: Forced Upgrades */}
            <div className="bg-gradient-to-r from-orange-50 to-white rounded-xl p-8 border-l-4 border-orange-600">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    GPS Tracking Costs Extra $100/Month
                  </h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Want to see where your trucks are? That'll be an extra <strong>$100/month</strong> for Jobber's "Grow" plan upgrade. 
                    GPS tracking is a basic feature that should be included, not upsold.
                  </p>
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="font-bold text-gray-900 mb-2">Jobber "Core" Plan</p>
                        <p className="text-red-600 text-sm">❌ No GPS tracking</p>
                        <p className="text-gray-700 text-sm mb-2">Must upgrade to "Grow" plan (+$100/mo)</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded">
                        <p className="font-bold text-green-700 mb-2">CrewOpsPro</p>
                        <p className="text-green-600 text-sm">✓ GPS tracking included</p>
                        <p className="text-gray-700 text-sm">No upgrade needed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reason 3: QuickBooks Integration */}
            <div className="bg-gradient-to-r from-purple-50 to-white rounded-xl p-8 border-l-4 border-purple-600">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    QuickBooks Sync Costs Extra $50/Month
                  </h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Most small businesses use QuickBooks. Jobber charges <strong>$50/month extra</strong> to sync with it. 
                    This should be a standard integration, not a premium upsell.
                  </p>
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                    <p className="text-lg text-gray-900 mb-4">
                      <strong>Total Jobber cost for 3-person team with GPS + QuickBooks:</strong>
                    </p>
                    <div className="space-y-2 text-gray-700 mb-4">
                      <div className="flex justify-between">
                        <span>Base (Core plan, 1 user):</span>
                        <span>$199/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span>2 additional users (×$50):</span>
                        <span>$100/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span>GPS tracking (Grow upgrade):</span>
                        <span>$100/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span>QuickBooks integration:</span>
                        <span>$50/mo</span>
                      </div>
                      <div className="flex justify-between pt-3 border-t-2 border-gray-300 font-bold text-xl">
                        <span>Total:</span>
                        <span className="text-red-600">$449/month</span>
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">CrewOpsPro (everything included):</span>
                        <span className="text-3xl font-bold text-green-700">$89/month</span>
                      </div>
                      <p className="text-center text-green-700 font-bold mt-2">Save $360/month = $4,320/year</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reason 4: Expensive for Seasonal Businesses */}
            <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-8 border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Too Expensive for Seasonal Businesses
                  </h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Chimney sweeps, pool service, landscapers - many service businesses are seasonal. Paying <strong>$299-449/month</strong> year-round 
                    when you only work 6-8 months is painful.
                  </p>
                  <p className="text-lg text-gray-700">
                    <strong>CrewOpsPro at $89/month</strong> is affordable enough to keep active year-round, or you can cancel during off-season (no contracts).
                  </p>
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
            Jobber vs CrewOpsPro: Feature-by-Feature Comparison
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            CrewOpsPro has all the features small businesses actually use
          </p>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200 mb-8">
            <table className="w-full">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-lg">Feature</th>
                  <th className="px-6 py-4 text-center font-bold text-lg">Jobber</th>
                  <th className="px-6 py-4 text-center font-bold text-lg">CrewOpsPro</th>
                  <th className="px-6 py-4 text-center font-bold text-lg">Your Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {featureComparison.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.jobber}</td>
                    <td className="px-6 py-4 text-center font-bold text-green-600">{row.crewops}</td>
                    <td className="px-6 py-4 text-center font-bold text-orange-600">{row.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">✓ What's Included (Same as Jobber)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Scheduling & Dispatching</strong> - Assign jobs to techs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Mobile Apps</strong> - iOS & Android for field teams</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Invoicing & Payments</strong> - Get paid on-site or online</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>GPS Tracking</strong> - Real-time truck locations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Customer Portal</strong> - Let customers book/pay online</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>QuickBooks Sync</strong> - Automatic financial data sync</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Time Tracking</strong> - Clock in/out, job duration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Photo Attachments</strong> - Document work with unlimited photos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Estimates & Quotes</strong> - Send professional proposals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span><strong>Appointment Reminders</strong> - Automatic SMS/email</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">✗ What Jobber Has (That You Probably Don't Need)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl">○</span>
                  <span><strong>Client Hub Automation</strong> - Complex workflow rules (most businesses don't use)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl">○</span>
                  <span><strong>Request Management</strong> - Lead routing (small teams don't need)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl">○</span>
                  <span><strong>Custom Integrations</strong> - API development (enterprise feature)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl">○</span>
                  <span><strong>White-label Options</strong> - Remove Jobber branding (who cares?)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl">○</span>
                  <span><strong>Advanced Custom Reports</strong> - Beyond standard reports (overkill)</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-gray-600 italic">
                95% of small service businesses never use these features. You're paying for complexity you don't need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Businesses That Switched */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Real Businesses That Switched from Jobber
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            These service businesses were paying Jobber $300-600/month. Now they pay $89/month for the same features.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 shadow-lg border-2 border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.business}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {testimonial.size}
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-red-600 mb-2">Was using: {testimonial.previousSoftware}</p>
                  <StarRating />
                </div>
                
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                
                <div className="bg-green-100 rounded-lg p-4">
                  <p className="text-center text-xl font-bold text-green-700">{testimonial.yearsSaved}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Join Them?</h3>
            <p className="text-xl mb-8">
              Try CrewOpsPro free for 14 days. If you don't save money, go back to Jobber (though we doubt you will).
            </p>
            <Link
              to="/signup"
              onClick={() => trackTrialSignup('jobber-alt-testimonials')}
              className="inline-block px-10 py-5 bg-yellow-400 text-blue-900 font-bold text-xl rounded-lg hover:bg-yellow-300 transition-all transform hover:scale-105"
            >
              Start Free Trial - Switch from Jobber →
            </Link>
          </div>
        </div>
      </section>

      {/* How to Switch from Jobber */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            How to Switch from Jobber to CrewOpsPro
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Most businesses complete the migration in under 2 hours
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Export Your Data from Jobber</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Jobber lets you export your customer list, job history, and pricing as CSV files. Go to Settings → Data Export.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700"><strong>What to export:</strong></p>
                    <ul className="text-sm text-gray-600 space-y-1 mt-2">
                      <li>• Customer list (name, phone, email, address)</li>
                      <li>• Job history (what services you've done)</li>
                      <li>• Pricing templates (your standard rates)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Sign Up for CrewOpsPro Free Trial</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Get full access to all features for 14 days.
                  </p>
                  <Link
                    to="/signup"
                    className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all"
                  >
                    Start Free Trial →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">We Import Your Data (Free)</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Email us your CSV files. Our team will import everything to CrewOpsPro for free. Usually done within 24 hours.
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
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Set Up Your Team</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Add your technicians, set their permissions, download the mobile app. Takes about 30 minutes total.
                  </p>
                  <p className="text-lg text-gray-700">
                    We provide live onboarding support via video call if you need help.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Start Using CrewOpsPro</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Run both systems in parallel for a week if you want to be cautious. Once you're comfortable, cancel Jobber.
                  </p>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Tip:</strong> Wait until the end of your Jobber billing cycle to cancel so you don't lose money on unused time.
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
            Common Questions About Switching from Jobber
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
            <Link to="/vs-jobber" className="group bg-white rounded-lg p-6 hover:shadow-lg transition-all border">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                CrewOpsPro vs Jobber (Full Comparison)
              </h3>
              <p className="text-gray-600">Side-by-side feature comparison and pricing breakdown.</p>
            </Link>
            
            <Link to="/affordable-field-service-software" className="group bg-white rounded-lg p-6 hover:shadow-lg transition-all border">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                Affordable Field Service Software
              </h3>
              <p className="text-gray-600">Why small businesses are choosing budget-friendly alternatives.</p>
            </Link>
            
            <Link to="/pricing" className="group bg-white rounded-lg p-6 hover:shadow-lg transition-all border">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                CrewOpsPro Pricing
              </h3>
              <p className="text-gray-600">$89/month. Unlimited users. Everything included.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Related Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              to="/housecall-pro-alternative-affordable"
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 group"
            >
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Housecall Pro Alternative
              </h3>
              <p className="text-gray-600 mb-4">
                Housecall Pro also charges $60/month per user. See how CrewOpsPro compares with flat-rate pricing.
              </p>
              <div className="text-blue-600 font-medium group-hover:translate-x-2 transition-transform inline-block">
                Compare platforms →
              </div>
            </Link>

            <Link
              to="/affordable-field-service-software"
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 group"
            >
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Affordable Field Service Software Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Learn how to evaluate field service software pricing models and avoid hidden fees that bloat costs.
              </p>
              <div className="text-blue-600 font-medium group-hover:translate-x-2 transition-transform inline-block">
                Read guide →
              </div>
            </Link>

            <Link
              to="/best-field-service-software-small-business-2026"
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 group"
            >
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Best Field Service Software 2026
              </h3>
              <p className="text-gray-600 mb-4">
                Compare Jobber to all top 10 platforms. See pricing, features, and pros/cons side-by-side.
              </p>
              <div className="text-blue-600 font-medium group-hover:translate-x-2 transition-transform inline-block">
                See full comparison →
              </div>
            </Link>

            <Link
              to="/hvac-software"
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 group"
            >
              <div className="text-4xl mb-4">❄️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                HVAC Software
              </h3>
              <p className="text-gray-600 mb-4">
                See how HVAC contractors save $3,000-5,000/year by switching from Jobber to CrewOpsPro for seasonal maintenance.
              </p>
              <div className="text-blue-600 font-medium group-hover:translate-x-2 transition-transform inline-block">
                HVAC features →
              </div>
            </Link>

            <Link
              to="/electrical-software"
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 group"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Electrical Software
              </h3>
              <p className="text-gray-600 mb-4">
                Electricians save on permit tracking and emergency dispatch without paying Jobber's per-user fees.
              </p>
              <div className="text-blue-600 font-medium group-hover:translate-x-2 transition-transform inline-block">
                Electrical features →
              </div>
            </Link>

            <Link
              to="/field-service-software-quickbooks-integration"
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 group"
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                QuickBooks Integration
              </h3>
              <p className="text-gray-600 mb-4">
                Get QuickBooks sync included at $89/month (Jobber charges $50/month extra for QuickBooks).
              </p>
              <div className="text-blue-600 font-medium group-hover:translate-x-2 transition-transform inline-block">
                Learn more →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Overpaying for Jobber
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Get the same features for $89/month. Save $3,720-6,000/year. Free data migration. 14-day free trial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/signup"
              onClick={() => trackTrialSignup('jobber-alt-final-cta')}
              className="inline-block px-10 py-5 bg-yellow-400 text-green-900 font-bold text-xl rounded-lg hover:bg-yellow-300 transition-all transform hover:scale-105"
            >
              Switch from Jobber - Start Free Trial →
            </Link>
            <Link
              to="/contact"
              className="inline-block px-10 py-5 bg-green-700 text-white font-bold text-xl rounded-lg hover:bg-green-800 transition-all border-2 border-white"
            >
              Talk to Migration Specialist
            </Link>
          </div>

          <p className="text-green-100 text-lg">
            ✓ Free data migration &nbsp;•&nbsp; ✓ Cancel anytime
          </p>

          <div className="mt-12 pt-12 border-t border-green-500">
            <p className="text-green-100 mb-4">Questions about switching?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-lg">
              <a href="mailto:support@crewopspro.com" className="hover:text-white transition-colors">
                📧 support@crewopspro.com
              </a>
              <span className="hidden sm:inline text-green-400">•</span>
              <a href="tel:1-800-CREWOPS" className="hover:text-white transition-colors">
                📞 1-800-CREWOPS
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
