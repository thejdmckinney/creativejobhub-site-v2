import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';
import RelatedPages from '../components/RelatedPages';
import SoftwareApplicationSchema from '../components/SoftwareApplicationSchema';

export default function HVACSoftware() {
  const faqs = [
    {
      question: "Can I track refrigerant usage and EPA compliance?",
      answer: "Yes! Log refrigerant types, amounts used, and recovery per job. Track EPA 608 certification expiration dates for your techs. Generate compliance reports for audits."
    },
    {
      question: "Does it handle seasonal maintenance contracts?",
      answer: "Absolutely. Set up spring tune-ups and fall maintenance plans with automatic scheduling. The system reminds customers when it's time for their seasonal service and schedules appointments automatically."
    },
    {
      question: "Can my techs complete service reports in the field?",
      answer: "Yes. Techs can log system diagnostics, temps, pressures, and photos right from their phone. Generate detailed service reports and email them to customers on the spot—no paperwork back at the office."
    },
    {
      question: "How much does HVAC software cost?",
      answer: "$89/month flat. Unlimited technicians, unlimited jobs, all features included. No per-user fees, no setup charges. Same price whether you have 1 tech or 20."
    },
    {
      question: "Can I track equipment warranties and service history?",
      answer: "Yes. Store equipment details (make, model, serial number), installation dates, and warranty info. Full service history shows every maintenance visit, repair, and part replaced—all linked to each customer's equipment."
    }
  ];

  const relatedPages = [
    {
      title: 'Plumbing Software',
      description: 'Built for plumbers and plumbing contractors',
      path: '/plumbing-software',
      icon: '🔧'
    },
    {
      title: 'Electrical Software',
      description: 'Perfect for electricians and electrical contractors',
      path: '/electrical-software',
      icon: '⚡'
    },
    {
      title: 'General Contractors',
      description: 'Software for all trades and field service businesses',
      path: '/general-contractors-software',
      icon: '🏗️'
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="HVAC Software | Job Management for HVAC Companies"
        description="The best HVAC software for managing service calls, maintenance contracts, and installations. Track refrigerant, equipment warranties, and seasonal tune-ups. $89/month flat pricing."
        keywords="HVAC software, HVAC service software, heating and cooling software, HVAC contractor software, HVAC business software, air conditioning software"
      />
      <SoftwareApplicationSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.crewopspro.com' },
        { name: 'HVAC Software', url: 'https://www.crewopspro.com/hvac-software' }
      ]} />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'HVAC Software' }
        ]} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ❄️ Built for HVAC Contractors
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              HVAC Software That Keeps Your Business Running Smoothly
            </h1>
            <p className="text-2xl text-gray-600 mb-6">
              Manage service calls, maintenance contracts, and installations from one simple platform. Track refrigerant, equipment warranties, and seasonal tune-ups—all from your phone.
            </p>
            <StarRating />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              Start Your 14-Day Free Trial
            </Link>
            <Link 
              to="/pricing" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              See Pricing - $89/Month
            </Link>
          </div>
        </div>
      </section>

      {/* Why HVAC Contractors Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why HVAC Contractors Choose Crew Ops Pro
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🌡️</div>
              <h3 className="text-xl font-semibold mb-2">Equipment Tracking</h3>
              <p className="text-gray-600">
                Store equipment details, warranties, and full service history per unit. Know exactly when each system was installed, last serviced, and what needs attention next.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-2">Seasonal Maintenance</h3>
              <p className="text-gray-600">
                Automate spring and fall tune-ups with recurring maintenance plans. The system schedules appointments, sends reminders, and keeps you coming back to the same customers year after year.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Refrigerant Compliance</h3>
              <p className="text-gray-600">
                Log refrigerant usage, recovery amounts, and EPA compliance details. Track tech certifications and generate reports for audits. Stay compliant without the paperwork hassle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Everything Your HVAC Business Needs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
              <p className="text-gray-600">
                Schedule service calls, installations, and maintenance with drag-and-drop simplicity. GPS tracking shows where your techs are and optimizes routing for efficiency.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-xl font-semibold mb-2">Digital Service Reports</h3>
              <p className="text-gray-600">
                Techs log system temps, pressures, diagnostics, and photos in the field. Generate professional service reports and email them to customers instantly—no back-office data entry.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">💳</div>
              <h3 className="text-xl font-semibold mb-2">Fast Payments</h3>
              <p className="text-gray-600">
                Accept credit cards, ACH, and checks on-site or via text/email. Get paid in 24 hours instead of waiting 30+ days for checks in the mail.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-xl font-semibold mb-2">Maintenance Contracts</h3>
              <p className="text-gray-600">
                Create recurring service plans with automatic scheduling and billing. Set up spring tune-ups, fall maintenance, and filter changes that repeat year after year.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-xl font-semibold mb-2">Parts & Inventory</h3>
              <p className="text-gray-600">
                Track parts inventory, log materials used per job, and get low-stock alerts. Know your true job costs and profitability by tracking everything that goes out the door.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-xl font-semibold mb-2">Customer Communication</h3>
              <p className="text-gray-600">
                Automated appointment reminders, arrival notifications, and follow-ups via text and email. Keep customers informed without manual calls or texts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Simple Pricing for HVAC Contractors
          </h2>
          <p className="text-2xl text-blue-100 mb-8">
            No per-technician fees. No contracts. No surprises.
          </p>
          <div className="bg-white text-gray-900 rounded-2xl p-12 max-w-xl mx-auto">
            <div className="mb-6">
              <span className="text-6xl font-bold">$89</span>
              <span className="text-xl text-gray-500">/month</span>
            </div>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Unlimited technicians (no per-user fees)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Unlimited jobs & service calls</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Equipment & warranty tracking</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Refrigerant & EPA compliance logging</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Maintenance contract management</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Mobile apps (iOS & Android)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Payment processing & QuickBooks sync</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>24/7 support</span>
              </li>
            </ul>
            <Link 
              to="/signup"
              className="block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-xl transition-colors"
            >
              Start Free 14-Day Trial
            </Link>
          </div>
        </div>
      </section>

      <FAQSchema faqs={faqs} />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages pages={relatedPages} title="Explore Other Industries" />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Run Your HVAC Business Better?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join HVAC contractors who switched from paper service tickets and complicated software to Crew Ops Pro.
          </p>
          <Link 
            to="/signup"
            className="inline-block bg-white text-orange-600 px-12 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors"
          >
            Start Your Free Trial
          </Link>
          <p className="text-orange-100 mt-4">14 days free • Cancel anytime</p>
        </div>
      </section>
    </div>
  );
}
