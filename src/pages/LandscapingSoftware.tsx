import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';
import RelatedPages from '../components/RelatedPages';
import SoftwareApplicationSchema from '../components/SoftwareApplicationSchema';

export default function LandscapingSoftware() {
  const faqs = [
    {
      question: "Can I schedule seasonal crews and recurring maintenance?",
      answer: "Yes! Set up weekly mowing, monthly hedge trimming, and seasonal cleanups with automatic recurring schedules. The system handles crew assignments, route optimization, and tracks which properties are due for service. Perfect for managing 50+ weekly lawn maintenance accounts."
    },
    {
      question: "Does it handle property maintenance contracts?",
      answer: "Absolutely. Create seasonal contracts (spring cleanup, weekly mowing, fall leaf removal, snow removal) with automatic billing. Track what's been completed at each property and when the next service is due. Renew contracts automatically year after year."
    },
    {
      question: "Can my crew invoice from the job site?",
      answer: "Yes. Crew leaders create estimates, log materials used (mulch, plants, fertilizer), and generate invoices right from their phone. Take before/after photos and send them with the invoice. Customers can approve and pay on-site."
    },
    {
      question: "How much does landscaping software cost?",
      answer: "$89/month flat. Unlimited crew members, unlimited jobs, all features included. No per-user fees, no setup charges. Same price whether you have 1 crew or 10."
    },
    {
      question: "Can I track equipment, materials, and irrigation systems?",
      answer: "Yes. Log equipment maintenance schedules (mowers, trimmers, blowers), track materials inventory (mulch, plants, stone), and document irrigation systems at each property. Know exactly what equipment needs service and what materials you need to restock."
    }
  ];

  const relatedPages = [
    {
      title: 'Painting Software',
      description: 'Built for painters and painting contractors',
      path: '/painting-software',
      icon: '🎨'
    },
    {
      title: 'Handyman Software',
      description: 'Perfect for handymen and home repair services',
      path: '/handyman-software',
      icon: '🔨'
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
        title="Landscaping Software | Job Management for Lawn Care Professionals"
        description="The best landscaping software for managing crews, recurring maintenance, and seasonal contracts. Schedule mowing routes, track equipment, and invoice on-site. $89/month flat pricing."
        keywords="landscaping software, lawn care software, landscaping business software, lawn maintenance software, landscape management software, crew scheduling software"
      />
      <SoftwareApplicationSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.creativejobhub.com' },
        { name: 'Landscaping Software', url: 'https://www.creativejobhub.com/landscaping-software' }
      ]} />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Landscaping Software' }
        ]} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🌿 Built for Landscapers & Lawn Care Professionals
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Landscaping Software That Grows Your Business
            </h1>
            <p className="text-2xl text-gray-600 mb-6">
              Manage crews, recurring maintenance, and seasonal contracts from one simple platform. Schedule mowing routes, track equipment, and invoice on-site—all from your phone.
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
              className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              See Pricing - $89/Month
            </Link>
          </div>
        </div>
      </section>

      {/* Why Landscapers Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Landscapers Choose Creative Job Hub
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🗓️</div>
              <h3 className="text-xl font-semibold mb-2">Recurring Schedules</h3>
              <p className="text-gray-600">
                Set up weekly mowing, monthly hedge trimming, and seasonal cleanups that repeat automatically. The system handles crew assignments and route optimization for 50+ weekly accounts.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Mobile Crew Management</h3>
              <p className="text-gray-600">
                Crew leaders see their daily schedule, navigate to properties, log services completed, and invoice on-site. Track which properties have been serviced and which are still pending.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-2">Seasonal Contracts</h3>
              <p className="text-gray-600">
                Create spring cleanup, weekly mowing, fall leaf removal, and snow removal contracts with automatic billing. Track what's been completed and renew contracts year after year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Everything Your Landscaping Business Needs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
              <p className="text-gray-600">
                Schedule recurring mowing routes, one-time projects, and seasonal cleanups with drag-and-drop simplicity. GPS tracking optimizes crew routes and shows real-time job progress.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-xl font-semibold mb-2">Digital Estimates</h3>
              <p className="text-gray-600">
                Create professional estimates for landscaping projects, irrigation installs, and seasonal maintenance. Include photos, property measurements, and detailed line items.
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
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-xl font-semibold mb-2">Recurring Billing</h3>
              <p className="text-gray-600">
                Automate invoicing for weekly, bi-weekly, or monthly maintenance contracts. Charge cards on file automatically or email invoices—no manual billing required.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-xl font-semibold mb-2">Materials & Equipment</h3>
              <p className="text-gray-600">
                Track materials inventory (mulch, plants, fertilizer, stone), log equipment maintenance schedules, and document irrigation systems at each property.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-xl font-semibold mb-2">Customer Communication</h3>
              <p className="text-gray-600">
                Automated appointment reminders, arrival notifications, and service completion updates via text and email. Share before/after photos with customers automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Simple Pricing for Landscapers
          </h2>
          <p className="text-2xl text-green-100 mb-8">
            No per-crew member fees. No contracts. No surprises.
          </p>
          <div className="bg-white text-gray-900 rounded-2xl p-12 max-w-xl mx-auto">
            <div className="mb-6">
              <span className="text-6xl font-bold">$89</span>
              <span className="text-xl text-gray-500">/month</span>
            </div>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Unlimited crew members (no per-user fees)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Unlimited jobs & maintenance accounts</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Recurring schedule management</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Seasonal contract tracking</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Equipment & materials tracking</span>
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
            Ready to Grow Your Landscaping Business?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join landscapers who switched from paper schedules and complicated software to Creative Job Hub.
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
