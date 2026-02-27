import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';
import RelatedPages from '../components/RelatedPages';
import SoftwareApplicationSchema from '../components/SoftwareApplicationSchema';

export default function PlumbingSoftware() {
  const faqs = [
    {
      question: "Can I track emergency calls and after-hours service rates?",
      answer: "Yes! Create custom pricing for emergency calls with automatic time-based rate adjustments. The system tracks emergency vs. regular calls and applies the right pricing automatically."
    },
    {
      question: "Does it handle recurring maintenance contracts?",
      answer: "Absolutely. Set up maintenance plans for water heaters, backflow testing, drain cleaning, and more. The system automatically schedules recurring visits and sends reminders to customers and your team."
    },
    {
      question: "Can my plumbers complete invoices in the field?",
      answer: "Yes. Your plumbers can create estimates, complete work orders, collect payments, and generate invoices right from their phone. No more paperwork when they get back to the truck."
    },
    {
      question: "How much does plumbing software cost?",
      answer: "$89/month for everything. Unlimited plumbers, unlimited jobs, payment processing included. No setup fees, no per-user charges, no surprises."
    },
    {
      question: "Can I track parts inventory and materials used per job?",
      answer: "Yes. Track inventory, log materials used per job, and automatically update stock levels. Generate reports on parts usage, costs, and profitability by job type."
    }
  ];

  const relatedPages = [
    {
      title: 'HVAC Software',
      description: 'Built for heating, cooling, and air quality contractors',
      path: '/hvac-software',
      icon: '❄️'
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
      icon: '🔧'
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Top Plumbing Software 2026 | #1 Rated by Plumbers | $89/mo"
        description="The best plumbing software for managing service calls, emergency jobs, recurring maintenance, and invoicing. Built for plumbers who need simple, powerful tools. $89/month flat, unlimited plumbers."
        keywords="plumbing software, plumber app, plumbing business software, plumber scheduling software, plumbing invoice software, plumbing service software"
      />
      <SoftwareApplicationSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.crewopspro.com' },
        { name: 'Plumbing Software', url: 'https://www.crewopspro.com/plumbing-software' }
      ]} />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Plumbing Software' }
        ]} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🔧 Built for Plumbing Contractors
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Plumbing Software That Actually Works In The Field
            </h1>
            <p className="text-2xl text-gray-600 mb-6">
              Manage emergency calls, schedule jobs, track inventory, and get paid faster. Everything you need to run your plumbing business—from your phone.
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

      {/* Why Plumbers Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Plumbing Contractors Choose Crew Ops Pro
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🚨</div>
              <h3 className="text-xl font-semibold mb-2">Emergency Call Management</h3>
              <p className="text-gray-600">
                Track emergency vs. regular calls with automatic after-hours pricing. Our <Link to="/scheduling" className="text-blue-600 hover:underline font-semibold">drag-and-drop scheduling</Link> helps you dispatch the nearest plumber to urgent jobs.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Mobile-First Design</h3>
              <p className="text-gray-600">
                Your plumbers can do everything from their phone: create estimates, complete jobs, collect payments, and generate invoices—right at the customer's location. Full <Link to="/jobs-map" className="text-blue-600 hover:underline font-semibold">GPS tracking</Link> shows exactly where your team is.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-2">Recurring Maintenance</h3>
              <p className="text-gray-600">
                Set up maintenance plans for water heaters, backflow testing, and drain cleaning. Automated scheduling keeps you coming back to the same customers.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center bg-blue-50 p-6 rounded-lg">
            <p className="text-lg text-gray-700">
              <strong>Want to see the complete platform?</strong> Crew Ops Pro combines job management with <Link to="/invoicing-payments" className="text-blue-600 hover:underline font-semibold">fast payments</Link> and <Link to="/outreach-hub" className="text-blue-600 hover:underline font-semibold">automated customer follow-ups</Link> to help you grow. <Link to="/how-it-works" className="text-blue-600 hover:underline font-semibold">See how it works →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Everything Your Plumbing Business Needs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
              <p className="text-gray-600">
                Drag-and-drop scheduling with GPS routing. See where your plumbers are in real-time and dispatch the closest one to emergency calls.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">💳</div>
              <h3 className="text-xl font-semibold mb-2">Get Paid Faster</h3>
              <p className="text-gray-600">
                Accept credit cards, ACH, and checks in the field. Customers pay on the spot via text or email. Average payment time: 24 hours vs. 30+ days.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-xl font-semibold mb-2">Inventory Tracking</h3>
              <p className="text-gray-600">
                Track parts, materials, and supplies. Log what's used per job and get alerts when stock is low. Know your true job profitability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl font-semibold mb-2">Custom Estimates</h3>
              <p className="text-gray-600">
                Create detailed estimates with line items, photos, and notes. Convert estimates to jobs with one tap. Professional-looking PDFs impress customers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-xl font-semibold mb-2">Customer Communication</h3>
              <p className="text-gray-600">
                Automated appointment reminders via text and email. Job updates, arrival notifications, and follow-ups keep customers informed automatically.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-xl font-semibold mb-2">Business Reports</h3>
              <p className="text-gray-600">
                See revenue, profitability, tech performance, and customer trends. Know which services make the most money and where to focus your marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Simple Pricing for Plumbing Contractors
          </h2>
          <p className="text-2xl text-blue-100 mb-8">
            No per-user fees. No setup charges. No surprises.
          </p>
          <div className="bg-white text-gray-900 rounded-2xl p-12 max-w-xl mx-auto">
            <div className="mb-6">
              <span className="text-6xl font-bold">$89</span>
              <span className="text-xl text-gray-500">/month</span>
            </div>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Unlimited plumbers (no per-user fees)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Unlimited jobs & customers</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Mobile apps (iOS & Android)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Payment processing (Stripe integration)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>GPS tracking & routing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Inventory & materials tracking</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>QuickBooks integration</span>
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
            Ready to Run Your Plumbing Business Better?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join plumbers who switched from spreadsheets and complicated software to Crew Ops Pro.
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
