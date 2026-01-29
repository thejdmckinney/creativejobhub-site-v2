import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';
import RelatedPages from '../components/RelatedPages';
import SoftwareApplicationSchema from '../components/SoftwareApplicationSchema';

export default function ElectricalSoftware() {
  const faqs = [
    {
      question: "Can I track electrical permits and code compliance?",
      answer: "Yes! Log permit numbers, inspection dates, and code requirements per job. Track permit status from application to final approval. Store inspection reports and photos for documentation. Never miss a permit or inspection again."
    },
    {
      question: "Does it handle circuit load calculations and panel upgrades?",
      answer: "Absolutely. Store panel details, circuit loads, and capacity calculations. Document existing electrical systems and quote panel upgrades with accurate amp ratings. Track what's been installed and what needs upgrading at each property."
    },
    {
      question: "Can my electricians invoice from the job site?",
      answer: "Yes. Electricians create estimates, log materials used, and generate invoices right from their phone. Customers can approve quotes and pay on-site—no back-and-forth or waiting for office hours."
    },
    {
      question: "How much does electrical contractor software cost?",
      answer: "$89/month flat. Unlimited electricians, unlimited jobs, all features included. No per-user fees, no setup charges. Same price whether you have 1 electrician or 20."
    },
    {
      question: "Can I track materials and wire inventory?",
      answer: "Yes. Track wire, breakers, switches, outlets, and all materials. Log what's used per job, get low-stock alerts, and know your true job profitability. Sync with suppliers for easy reordering."
    }
  ];

  const relatedPages = [
    {
      title: 'HVAC Software',
      description: 'Built for HVAC and heating/cooling contractors',
      path: '/hvac-software',
      icon: '❄️'
    },
    {
      title: 'Plumbing Software',
      description: 'Perfect for plumbers and plumbing contractors',
      path: '/plumbing-software',
      icon: '🔧'
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
        title="Electrical Contractor Software | Creative Job Hub"
        description="The best electrical contractor software for managing service calls, installations, and commercial projects. Track permits, code compliance, and circuit loads. $89/month flat pricing."
        keywords="electrical contractor software, electrician software, electrical business software, electrician app, electrical estimating software, electrical service software"
      />
      <SoftwareApplicationSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.creativejobhub.com' },
        { name: 'Electrical Software', url: 'https://www.creativejobhub.com/electrical-software' }
      ]} />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Electrical Software' }
        ]} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-yellow-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ⚡ Built for Electricians & Electrical Contractors
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Electrical Contractor Software That Actually Works
            </h1>
            <p className="text-2xl text-gray-600 mb-6">
              Manage service calls, installations, and commercial projects from one simple platform. Track permits, code compliance, and circuit loads—all from your phone.
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
              className="border-2 border-yellow-600 text-yellow-700 hover:bg-yellow-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              See Pricing - $89/Month
            </Link>
          </div>
        </div>
      </section>

      {/* Why Electricians Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Electricians Choose Creative Job Hub
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-2">Permit Tracking</h3>
              <p className="text-gray-600">
                Log permit numbers, inspection dates, and code requirements per job. Track status from application to final approval. Store inspection reports and never miss a deadline.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Mobile Invoicing</h3>
              <p className="text-gray-600">
                Create estimates, log materials, and invoice from the job site. Customers approve quotes and pay on-site—no waiting for office hours or chasing down payments later.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔌</div>
              <h3 className="text-xl font-semibold mb-2">Panel & Load Tracking</h3>
              <p className="text-gray-600">
                Document existing electrical systems, panel capacities, and circuit loads. Quote panel upgrades with accurate amp ratings and track what's been installed at each property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Everything Your Electrical Business Needs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
              <p className="text-gray-600">
                Schedule service calls, installations, and commercial projects with drag-and-drop simplicity. GPS tracking shows where your electricians are and optimizes routing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-xl font-semibold mb-2">Digital Estimates</h3>
              <p className="text-gray-600">
                Create professional estimates in minutes with built-in templates. Include photos, diagrams, and detailed line items. Send via email or text for instant approval.
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
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Code Compliance</h3>
              <p className="text-gray-600">
                Document code requirements, inspection results, and safety certifications. Store photos of work completed and generate compliance reports for inspectors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-xl font-semibold mb-2">Materials & Inventory</h3>
              <p className="text-gray-600">
                Track wire, breakers, switches, outlets, and all materials. Log what's used per job, get low-stock alerts, and know your true job profitability.
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
      <section className="py-20 bg-yellow-400 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Simple Pricing for Electrical Contractors
          </h2>
          <p className="text-2xl text-gray-700 mb-8">
            No per-electrician fees. No contracts. No surprises.
          </p>
          <div className="bg-white text-gray-900 rounded-2xl p-12 max-w-xl mx-auto shadow-xl">
            <div className="mb-6">
              <span className="text-6xl font-bold">$89</span>
              <span className="text-xl text-gray-500">/month</span>
            </div>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Unlimited electricians (no per-user fees)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Unlimited jobs & service calls</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Permit & inspection tracking</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Code compliance documentation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Panel & circuit load tracking</span>
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
            Ready to Run Your Electrical Business Better?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join electricians who switched from paper work orders and complicated software to Creative Job Hub.
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
