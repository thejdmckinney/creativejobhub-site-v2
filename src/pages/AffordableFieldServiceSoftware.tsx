import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';
import { trackTrialSignup } from '../utils/analytics';

export default function AffordableFieldServiceSoftware() {
  const faqs = [
    {
      question: "What makes field service software 'affordable' for small businesses?",
      answer: "Affordable field service software should cost under $100/month with no hidden fees, no per-user charges, and no forced upgrades for basic features. CrewOpsPro costs $89/month flat - whether you have 1 employee or 10. Most competitors charge $199+ base price plus $40-60 per additional user, quickly reaching $300-500/month."
    },
    {
      question: "Why do most field service software companies charge per user?",
      answer: "Per-user pricing maximizes revenue as your business grows. A 3-person team pays $199 + (2 × $50) = $299/month. A 10-person team pays $199 + (9 × $50) = $649/month. We believe this penalizes growth. CrewOpsPro charges $89/month regardless of team size because we want you to succeed, not nickel-and-dime you."
    },
    {
      question: "What features are included at $89/month?",
      answer: "Everything: unlimited users, unlimited jobs, GPS tracking, mobile apps (iOS & Android), QuickBooks integration, customer portal, payment processing, scheduling, dispatching, invoicing, estimates, time tracking, photo attachments, and 24/7 support. No upgrades needed."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes. 14-day free trial with full access to all features. If you don't love it, cancel with one click."
    },
    {
      question: "What industries is this built for?",
      answer: "Any field service business: HVAC, plumbing, electrical, chimney sweeps, pool service, landscaping, handyman, painting, cleaning, property maintenance, general contractors. If you go to customer locations, CrewOpsPro works for you."
    },
    {
      question: "How much can I actually save compared to Jobber or Housecall Pro?",
      answer: "With a 3-person team: Jobber costs ~$299/month = $3,588/year. CrewOpsPro costs $89/month = $1,068/year. You save $2,520/year. With a 10-person team, you'd save even more (~$5,000+/year)."
    },
    {
      question: "Do you charge extra for GPS tracking or QuickBooks sync?",
      answer: "No. Both included. Competitors often charge $50-100/month extra for GPS tracking or QuickBooks integration. We include everything at $89/month."
    },
    {
      question: "What if I only have 1-2 employees? Is there a cheaper plan?",
      answer: "We don't have tiered pricing because it creates confusion. $89/month is our only plan. For solo operators or 2-person teams, this is still more affordable than most competitors' 'starter' plans ($129-199/month)."
    },
    {
      question: "Can I switch from Jobber, Housecall Pro, or ServiceTitan?",
      answer: "Yes. We can import your customer list, job history, and pricing. Most businesses migrate in under 2 hours. We provide free onboarding support to make the switch painless."
    },
    {
      question: "Is there a contract or cancellation fee?",
      answer: "No contracts. No cancellation fees. Cancel anytime with one click. If CrewOpsPro doesn't work for your business, you're free to leave."
    }
  ];

  const pricingComparison = [
    {
      company: "CrewOpsPro",
      basePrice: "$89/mo",
      perUser: "$0",
      gps: "✓ Included",
      quickbooks: "✓ Included",
      mobile: "✓ Included",
      totalFor3: "$89/mo",
      totalFor10: "$89/mo",
      yearlyFor3: "$1,068"
    },
    {
      company: "Jobber",
      basePrice: "$199/mo",
      perUser: "$50/user",
      gps: "$100 upgrade",
      quickbooks: "$50 upgrade",
      mobile: "✓ Included",
      totalFor3: "$399/mo",
      totalFor10: "$649/mo",
      yearlyFor3: "$4,788"
    },
    {
      company: "Housecall Pro",
      basePrice: "$169/mo",
      perUser: "$59/user",
      gps: "✓ Included",
      quickbooks: "$50 upgrade",
      mobile: "✓ Included",
      totalFor3: "$287/mo",
      totalFor10: "$700/mo",
      yearlyFor3: "$3,444"
    },
    {
      company: "ServiceTitan",
      basePrice: "$600+/mo",
      perUser: "Varies",
      gps: "✓ Included",
      quickbooks: "✓ Included",
      mobile: "✓ Included",
      totalFor3: "$800+/mo",
      totalFor10: "$1,200+/mo",
      yearlyFor3: "$9,600+"
    }
  ];

  const useCases = [
    {
      business: "Mike's Handyman Service",
      size: "Solo operator",
      problem: "Using paper invoices and Google Calendar. Losing track of follow-ups.",
      solution: "Switched to CrewOpsPro. Now sends invoices from phone, tracks all jobs digitally.",
      savings: "$1,200/year vs Jobber"
    },
    {
      business: "Anderson Chimney Sweep",
      size: "3 employees",
      problem: "Jobber cost $299/month. Too expensive for seasonal work.",
      solution: "CrewOpsPro costs $89/month. Same features, $210/month savings.",
      savings: "$2,520/year"
    },
    {
      business: "Blue Wave Pool Service",
      size: "8 employees",
      problem: "Housecall Pro cost $640/month with per-user fees.",
      solution: "Switched to CrewOpsPro. $89/month flat pricing. Saved $551/month.",
      savings: "$6,612/year"
    },
    {
      business: "Precision Electric",
      size: "5 employees",
      problem: "ServiceM8 charged per user + per text. Bill kept growing.",
      solution: "CrewOpsPro includes unlimited users and texts. Predictable $89/month.",
      savings: "$3,000+/year"
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Affordable Field Service Software for Small Business | $89/Month, No Per-User Fees"
        description="Best affordable field service management software for small business. $89/month unlimited users vs Jobber ($299+), Housecall Pro ($287+). Full-featured: scheduling, invoicing, GPS, QuickBooks sync, mobile apps. Save $2,000-5,000/year."
        keywords="affordable field service software, field service software for small business, cheap field service management software, best field service software under 100, field service software no per user fees, jobber alternative cheap, housecall pro alternative affordable, budget field service software"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.crewopspro.com' },
        { name: 'Affordable Field Service Software', url: 'https://www.crewopspro.com/affordable-field-service-software' }
      ]} />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
              💰 SAVE $2,000-5,000 PER YEAR
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Affordable Field Service Software for Small Business
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6 max-w-4xl mx-auto">
              Get full-featured field service management software for <span className="text-yellow-300 font-bold">$89/month</span> with <span className="text-yellow-300 font-bold">unlimited users</span>. 
              While Jobber charges $299+/month and Housecall Pro charges $287+/month, CrewOpsPro gives you everything for less than $100.
            </p>
            <div className="flex items-center justify-center gap-3 mb-8">
              <StarRating />
              <span className="text-blue-200">4.9/5 from 500+ small businesses</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/signup"
              onClick={() => trackTrialSignup('affordable-hero')}
              className="inline-block px-10 py-5 bg-green-500 text-white font-bold text-xl rounded-lg hover:bg-green-600 transition-all transform hover:scale-105 text-center shadow-xl"
            >
              Start Free 14-Day Trial →
            </Link>
            <Link
              to="/pricing"
              className="inline-block px-10 py-5 bg-white text-blue-900 font-bold text-xl rounded-lg hover:bg-gray-100 transition-all text-center shadow-xl"
            >
              See Pricing Comparison
            </Link>
          </div>

          <p className="text-center text-blue-200 text-lg">
            ✓ Cancel anytime &nbsp;•&nbsp; ✓ Free data migration
          </p>
        </div>
      </section>

      {/* What is Affordable Field Service Software */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            What is Affordable Field Service Software?
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mb-12">
            <p className="text-xl leading-relaxed">
              <strong>Affordable field service software</strong> is cloud-based job management software designed specifically for small service businesses 
              that costs under $100/month and includes all essential features without hidden fees or per-user charges.
            </p>

            <p className="text-lg leading-relaxed">
              Most field service management (FSM) software companies target large enterprises and charge accordingly. Jobber, Housecall Pro, ServiceTitan, 
              and FieldEdge all start at $169-600/month and charge $40-60 per additional user. For a small business with 3-5 employees, the monthly cost 
              quickly reaches $300-500+.
            </p>

            <p className="text-lg leading-relaxed">
              <strong>True affordable FSM software should include:</strong>
            </p>

            <ul className="text-lg space-y-3 ml-6">
              <li><strong>Flat monthly pricing</strong> - No per-user fees that increase as you grow</li>
              <li><strong>All core features included</strong> - No "upgrade to Pro for GPS tracking" nonsense</li>
              <li><strong>Mobile apps</strong> - Both iOS and Android for field technicians</li>
              <li><strong>Scheduling & dispatching</strong> - Assign jobs to teams efficiently</li>
              <li><strong>Invoicing & payments</strong> - Get paid faster without QuickBooks exports</li>
              <li><strong>Customer management</strong> - Track job history, notes, and communication</li>
              <li><strong>QuickBooks integration</strong> - Sync financial data automatically</li>
              <li><strong>GPS tracking</strong> - Know where your teams are in real-time</li>
              <li><strong>Photo attachments</strong> - Document work with unlimited storage</li>
              <li><strong>Customer support</strong> - 24/7 help when you need it</li>
            </ul>

            <p className="text-lg leading-relaxed">
              CrewOpsPro includes all of these features for <strong>$89/month flat</strong> - whether you have 1 employee or 20. 
              No surprise charges. No forced upgrades. No per-user fees.
            </p>
          </div>

          {/* Quick Comparison Box */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Price Comparison</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-sm text-gray-600 mb-2">Jobber (3 users)</p>
                <p className="text-4xl font-bold text-gray-900 mb-2">$399<span className="text-lg">/mo</span></p>
                <p className="text-sm text-red-600">$4,788/year</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-sm text-gray-600 mb-2">Housecall Pro (3 users)</p>
                <p className="text-4xl font-bold text-gray-900 mb-2">$287<span className="text-lg">/mo</span></p>
                <p className="text-sm text-red-600">$3,444/year</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-6 shadow-md border-2 border-green-400">
                <p className="text-sm text-gray-600 mb-2">CrewOpsPro (unlimited)</p>
                <p className="text-4xl font-bold text-green-700 mb-2">$89<span className="text-lg">/mo</span></p>
                <p className="text-sm text-green-700 font-semibold">$1,068/year</p>
              </div>
            </div>
            <p className="text-center text-lg font-semibold text-gray-900 mt-6">
              Save $2,376-3,720 per year with CrewOpsPro
            </p>
          </div>
        </div>
      </section>

      {/* Who Is Affordable Field Service Software For */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Who is Affordable Field Service Software For?
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
            Small service businesses that need professional software without enterprise pricing
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Handyman Services */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                <Link to="/handyman-software" className="hover:text-blue-600">Handyman Services</Link>
              </h3>
              <p className="text-gray-700 mb-4">
                Solo operators and small handyman crews managing repairs, installations, and maintenance across multiple properties.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Schedule multiple small jobs per day</li>
                <li>✓ Track materials and labor costs</li>
                <li>✓ Send professional invoices on-site</li>
              </ul>
            </div>

            {/* Chimney Sweeps */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🧹</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                <Link to="/chimney-sweep-software" className="hover:text-blue-600">Chimney Sweeps</Link>
              </h3>
              <p className="text-gray-700 mb-4">
                CSIA-certified sweeps tracking annual inspections, creosote levels, and seasonal maintenance.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Automatic annual inspection reminders</li>
                <li>✓ Photo documentation for insurance</li>
                <li>✓ CSIA compliance tracking</li>
              </ul>
            </div>

            {/* Electricians */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                <Link to="/electrician-software" className="hover:text-blue-600">Electricians</Link>
              </h3>
              <p className="text-gray-700 mb-4">
                Licensed electrical contractors managing service calls, installations, and commercial projects.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Track permits and inspections</li>
                <li>✓ Material takeoff lists</li>
                <li>✓ License renewal reminders</li>
              </ul>
            </div>

            {/* HVAC Companies */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">❄️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                <Link to="/hvac-software" className="hover:text-blue-600">HVAC Companies</Link>
              </h3>
              <p className="text-gray-700 mb-4">
                Small HVAC contractors handling installations, repairs, and seasonal maintenance contracts.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Seasonal maintenance scheduling</li>
                <li>✓ Equipment history tracking</li>
                <li>✓ Emergency service dispatching</li>
              </ul>
            </div>

            {/* Pool Service */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                <Link to="/pool-service-software" className="hover:text-blue-600">Pool Service</Link>
              </h3>
              <p className="text-gray-700 mb-4">
                Pool maintenance companies managing weekly routes, chemical deliveries, and equipment repairs.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Recurring service automation</li>
                <li>✓ Chemical tracking & billing</li>
                <li>✓ Route optimization</li>
              </ul>
            </div>

            {/* Plumbers */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                <Link to="/plumbing-software" className="hover:text-blue-600">Plumbing Services</Link>
              </h3>
              <p className="text-gray-700 mb-4">
                Small plumbing companies handling emergency calls, installations, and preventive maintenance.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Emergency call prioritization</li>
                <li>✓ Parts inventory tracking</li>
                <li>✓ Warranty documentation</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              Whether you're a <strong>solo operator</strong> or a <strong>10-person team</strong>, CrewOpsPro gives you enterprise-level features at small business pricing.
            </p>
            <Link
              to="/signup"
              onClick={() => trackTrialSignup('affordable-who-for')}
              className="inline-block px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 transition-all"
            >
              Try It Free  →
            </Link>
          </div>
        </div>
      </section>

      {/* Why CrewOpsPro is Better Than Competitors */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Why CrewOpsPro is More Affordable Than Competitors
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
            We're not "cheap" - we're honest. Here's how we keep costs low without cutting features.
          </p>

          <div className="space-y-8 mb-12">
            {/* Reason 1 */}
            <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-8 border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                1. No Per-User Pricing Model
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Most field service software companies charge $40-60 per additional user. This "tax on growth" penalizes small businesses for hiring employees.
              </p>
              <div className="bg-white rounded-lg p-6 border">
                <p className="text-sm text-gray-600 mb-2">Example: 5-person HVAC company</p>
                <p className="text-gray-900 mb-2">
                  <strong>Jobber:</strong> $199 base + (4 users × $50) = <span className="text-red-600 font-bold">$399/month</span>
                </p>
                <p className="text-gray-900">
                  <strong>CrewOpsPro:</strong> <span className="text-green-600 font-bold">$89/month</span> (unlimited users)
                </p>
                <p className="text-sm text-gray-600 mt-3">Annual savings: <strong>$3,720</strong></p>
              </div>
            </div>

            {/* Reason 2 */}
            <div className="bg-gradient-to-r from-green-50 to-white rounded-xl p-8 border-l-4 border-green-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                2. Everything Included - No Forced Upgrades
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Competitors use "tiered pricing" to upsell you. Want GPS tracking? Upgrade to "Pro" for +$100/month. Need QuickBooks sync? That's another $50/month.
              </p>
              <div className="bg-white rounded-lg p-6 border">
                <p className="font-semibold text-gray-900 mb-3">Common "upgrade" charges:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• GPS Tracking: <span className="text-red-600">$50-100/month</span></li>
                  <li>• QuickBooks Integration: <span className="text-red-600">$50/month</span></li>
                  <li>• Customer Portal: <span className="text-red-600">$30/month</span></li>
                  <li>• Advanced Reporting: <span className="text-red-600">$40/month</span></li>
                  <li>• Priority Support: <span className="text-red-600">$99/month</span></li>
                </ul>
                <p className="text-green-600 font-bold mt-4">CrewOpsPro: All included at $89/month</p>
              </div>
            </div>

            {/* Reason 3 */}
            <div className="bg-gradient-to-r from-purple-50 to-white rounded-xl p-8 border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                3. No Sales Team Overhead
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                ServiceTitan and FieldEdge employ large sales teams that require demos, negotiations, and "contact us for pricing." Those salaries get passed to you.
              </p>
              <p className="text-lg text-gray-700">
                <strong>CrewOpsPro approach:</strong> Self-serve signup. Transparent pricing. No demos required (though we offer them if you want). 
                This saves us $200-300 per customer in sales costs - savings we pass to you.
              </p>
            </div>

            {/* Reason 4 */}
            <div className="bg-gradient-to-r from-orange-50 to-white rounded-xl p-8 border-l-4 border-orange-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                4. Focus on Small Business, Not Enterprise
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Enterprise software requires extensive customization, integrations with legacy systems, dedicated account managers, and compliance certifications.
              </p>
              <p className="text-lg text-gray-700">
                <strong>We serve 1-50 person service companies</strong> that need scheduling, invoicing, and GPS tracking - not complex ERP integrations. 
                This focus lets us build better software at 1/3 the cost.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-10 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">The Bottom Line</h3>
            <p className="text-xl mb-6">
              CrewOpsPro gives you the same features as $300-600/month software for <span className="text-yellow-300 font-bold">$89/month</span>.
            </p>
            <p className="text-lg text-blue-100 mb-8">
              No tricks. No upsells. No per-user fees. Just honest pricing for small businesses.
            </p>
            <Link
              to="/pricing"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all"
            >
              See Full Pricing Comparison →
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Pricing Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Affordable Field Service Software: Price Comparison (2026)
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Real costs for a 3-person team vs 10-person team
          </p>

          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Software</th>
                    <th className="px-6 py-4 text-center font-bold">Base Price</th>
                    <th className="px-6 py-4 text-center font-bold">Per User</th>
                    <th className="px-6 py-4 text-center font-bold">GPS</th>
                    <th className="px-6 py-4 text-center font-bold">QuickBooks</th>
                    <th className="px-6 py-4 text-center font-bold">3 Users</th>
                    <th className="px-6 py-4 text-center font-bold">10 Users</th>
                    <th className="px-6 py-4 text-center font-bold">Annual (3)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pricingComparison.map((row, index) => (
                    <tr key={index} className={index === 0 ? 'bg-green-50 border-l-4 border-green-500' : 'bg-white'}>
                      <td className="px-6 py-4 font-bold text-gray-900">
                        {row.company === 'CrewOpsPro' ? (
                          <span className="flex items-center gap-2">
                            {row.company}
                            <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">BEST VALUE</span>
                          </span>
                        ) : (
                          row.company
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">{row.basePrice}</td>
                      <td className="px-6 py-4 text-center">{row.perUser}</td>
                      <td className="px-6 py-4 text-center">{row.gps}</td>
                      <td className="px-6 py-4 text-center">{row.quickbooks}</td>
                      <td className="px-6 py-4 text-center font-bold text-lg">{row.totalFor3}</td>
                      <td className="px-6 py-4 text-center font-bold text-lg">{row.totalFor10}</td>
                      <td className="px-6 py-4 text-center font-bold text-xl text-green-600">{row.yearlyFor3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-green-500">
              <p className="text-sm text-gray-600 mb-2">vs Jobber (3 users)</p>
              <p className="text-3xl font-bold text-green-600">Save $3,720/year</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-green-500">
              <p className="text-sm text-gray-600 mb-2">vs Housecall Pro (3 users)</p>
              <p className="text-3xl font-bold text-green-600">Save $2,376/year</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-green-500">
              <p className="text-sm text-gray-600 mb-2">vs ServiceTitan (3 users)</p>
              <p className="text-3xl font-bold text-green-600">Save $8,532/year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Real Small Businesses Saving with CrewOpsPro
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            How affordable field service software impacts actual businesses
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg border border-blue-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{useCase.business}</h3>
                    <p className="text-sm text-gray-600">{useCase.size}</p>
                  </div>
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    {useCase.savings}
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-red-600 mb-2">❌ Problem:</p>
                  <p className="text-gray-700">{useCase.problem}</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-green-600 mb-2">✓ Solution:</p>
                  <p className="text-gray-700">{useCase.solution}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-10 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Could Your Business Save $2,000-6,000/Year?</h3>
            <p className="text-xl mb-8">
              If you're currently paying $200+/month for field service software (or thinking about it), CrewOpsPro can save you thousands per year.
            </p>
            <Link
              to="/signup"
              onClick={() => trackTrialSignup('affordable-use-cases')}
              className="inline-block px-10 py-5 bg-white text-blue-600 font-bold text-xl rounded-lg hover:bg-gray-100 transition-all"
            >
              Calculate Your Savings - Start Free Trial →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions About Affordable Field Service Software
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages (Internal Linking) */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Explore More Solutions
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/jobber-alternative-under-100" className="group bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all border">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                Jobber Alternative Under $100
              </h3>
              <p className="text-gray-600">Why pay $299+/month? Get the same features for $89/month.</p>
            </Link>
            
            <Link to="/handyman-software" className="group bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all border">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                Software for Handyman Business
              </h3>
              <p className="text-gray-600">Manage repairs, estimates, and invoicing from your phone.</p>
            </Link>
            
            <Link to="/pricing" className="group bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all border">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                See Full Pricing
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
              to="/jobber-alternative-under-100"
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 group"
            >
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Jobber Alternative Under $100
              </h3>
              <p className="text-gray-600 mb-4">
                Discover how to save $2,000-5,000/year by switching from Jobber's per-user pricing to flat-rate pricing.
              </p>
              <div className="text-blue-600 font-medium group-hover:translate-x-2 transition-transform inline-block">
                Compare pricing →
              </div>
            </Link>

            <Link
              to="/housecall-pro-alternative-affordable"
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 group"
            >
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Housecall Pro Alternative
              </h3>
              <p className="text-gray-600 mb-4">
                Get the same features without paying $60/month per additional technician. Same power, better price.
              </p>
              <div className="text-blue-600 font-medium group-hover:translate-x-2 transition-transform inline-block">
                See comparison →
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
                Compare the top 10 field service platforms side-by-side. See features, pricing, and which is best for your industry.
              </p>
              <div className="text-blue-600 font-medium group-hover:translate-x-2 transition-transform inline-block">
                Read comparison →
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
                Learn how field service software with built-in QuickBooks sync can save you 10+ hours per month on bookkeeping.
              </p>
              <div className="text-blue-600 font-medium group-hover:translate-x-2 transition-transform inline-block">
                Learn more →
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
                See how HVAC contractors manage seasonal maintenance contracts and emergency calls with affordable software.
              </p>
              <div className="text-blue-600 font-medium group-hover:translate-x-2 transition-transform inline-block">
                View HVAC features →
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
                Discover how electricians track permits, manage emergency dispatch, and bill materials with affordable field service software.
              </p>
              <div className="text-blue-600 font-medium group-hover:translate-x-2 transition-transform inline-block">
                See electrical features →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Save $2,000-5,000 Per Year?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Get full-featured field service management software for just $89/month. No per-user fees. No forced upgrades. No surprises.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/signup"
              onClick={() => trackTrialSignup('affordable-final-cta')}
              className="inline-block px-10 py-5 bg-white text-green-600 font-bold text-xl rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Start Free 14-Day Trial →
            </Link>
            <Link
              to="/how-it-works"
              className="inline-block px-10 py-5 bg-green-700 text-white font-bold text-xl rounded-lg hover:bg-green-800 transition-all border-2 border-white"
            >
              Watch Demo Video
            </Link>
          </div>

          <p className="text-green-100 text-lg">
            ✓ Set up in 5 minutes &nbsp;•&nbsp; ✓ Cancel anytime
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
