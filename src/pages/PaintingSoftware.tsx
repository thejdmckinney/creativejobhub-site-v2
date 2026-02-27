import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';
import RelatedPages from '../components/RelatedPages';
import SoftwareApplicationSchema from '../components/SoftwareApplicationSchema';

export default function PaintingSoftware() {
  const faqs = [
    {
      question: "Can I track color selections and provide consultations?",
      answer: "Yes! Store color choices, paint brands, and finish types per room or project. Upload photos of color samples and reference previous projects with similar colors. Keep a complete record of what colors you've used at each property for touch-ups or future work."
    },
    {
      question: "Does it handle multi-day painting projects?",
      answer: "Absolutely. Schedule multi-day projects with different crews assigned to each day. Track progress by room or area, log coats applied, and document work completed each day. Customers can see daily updates and photos of the progress."
    },
    {
      question: "Can my painters estimate materials on-site?",
      answer: "Yes. Measure rooms, calculate paint needed, and create detailed estimates right from your phone. Include labor, materials (paint, primer, tape, drop cloths), and markup. Send estimates via email or text for instant approval."
    },
    {
      question: "How much does painting contractor software cost?",
      answer: "$89/month flat. Unlimited painters, unlimited jobs, all features included. No per-user fees, no setup charges. Same price whether you have 1 painter or 20."
    },
    {
      question: "Can I handle weather delays and reschedule jobs easily?",
      answer: "Yes. Drag-and-drop scheduling makes rescheduling fast. The system automatically notifies customers of date changes via text/email. Track weather delays and adjust project timelines without manual calls to every customer."
    }
  ];

  const relatedPages = [
    {
      title: 'Landscaping Software',
      description: 'Manage lawn care, landscaping, and irrigation businesses',
      path: '/landscaping-software',
      icon: '🌿'
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
        title="Painting Software 2026 | Color Tracking & Estimates | $89/mo"
        description="The best painting contractor software for managing residential and commercial projects. Track color selections, materials, and multi-day jobs. $89/month flat pricing."
        keywords="painting contractor software, painter software, painting business software, painting estimating software, house painting software, commercial painting software"
      />
      <SoftwareApplicationSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.crewopspro.com' },
        { name: 'Painting Software', url: 'https://www.crewopspro.com/painting-software' }
      ]} />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Painting Software' }
        ]} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🎨 Built for Painting Contractors
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Painting Software That Simplifies Your Business
            </h1>
            <p className="text-2xl text-gray-600 mb-6">
              Manage residential and commercial painting projects from one simple platform. Track color selections, materials, and multi-day jobs—all from your phone.
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
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              See Pricing - $89/Month
            </Link>
          </div>
        </div>
      </section>

      {/* Why Painters Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Painting Contractors Choose Crew Ops Pro
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">Color Tracking</h3>
              <p className="text-gray-600">
                Store color selections, paint brands, and finish types per room. Upload photos of color samples and keep a complete record for touch-ups or future projects at each property.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📆</div>
              <h3 className="text-xl font-semibold mb-2">Multi-Day Projects</h3>
              <p className="text-gray-600">
                Schedule multi-day projects with different crews assigned to each phase. Track progress by room, log coats applied, and share daily photo updates with customers automatically.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📏</div>
              <h3 className="text-xl font-semibold mb-2">Fast Estimates</h3>
              <p className="text-gray-600">
                Measure rooms, calculate paint needed, and create detailed estimates on-site. Include labor, materials, and markup. Send estimates via text/email for instant approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Everything Your Painting Business Needs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
              <p className="text-gray-600">
                Schedule interior/exterior painting projects with drag-and-drop simplicity. Handle weather delays and reschedule jobs easily with automatic customer notifications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-xl font-semibold mb-2">Professional Estimates</h3>
              <p className="text-gray-600">
                Create detailed painting estimates with room measurements, square footage calculations, and itemized costs. Include photos and send via email or text.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">💳</div>
              <h3 className="text-xl font-semibold mb-2">Fast Payments</h3>
              <p className="text-gray-600">
                Accept credit cards, ACH, and checks on-site or via text/email. Collect deposits before starting and final payments upon completion—all tracked automatically.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📸</div>
              <h3 className="text-xl font-semibold mb-2">Before/After Photos</h3>
              <p className="text-gray-600">
                Take before, during, and after photos right from the app. Share progress updates with customers automatically and build a portfolio of completed projects.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-xl font-semibold mb-2">Materials Tracking</h3>
              <p className="text-gray-600">
                Track paint inventory by color and finish, log materials used per job (paint, primer, tape, drop cloths), and get low-stock alerts. Know your true job profitability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-xl font-semibold mb-2">Customer Communication</h3>
              <p className="text-gray-600">
                Automated appointment reminders, arrival notifications, and project completion updates via text and email. Keep customers informed without manual follow-ups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Simple Pricing for Painting Contractors
          </h2>
          <p className="text-2xl text-purple-100 mb-8">
            No per-painter fees. No contracts. No surprises.
          </p>
          <div className="bg-white text-gray-900 rounded-2xl p-12 max-w-xl mx-auto">
            <div className="mb-6">
              <span className="text-6xl font-bold">$89</span>
              <span className="text-xl text-gray-500">/month</span>
            </div>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Unlimited painters (no per-user fees)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Unlimited jobs & projects</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Color & material tracking</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Multi-day project scheduling</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Before/after photo galleries</span>
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

      {/* Industry Links Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Software Built for All Trades
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you specialize in interior painting, exterior painting, commercial work, or run a multi-trade operation, Crew Ops Pro adapts to your business. One platform for every field service trade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* HVAC */}
            <Link 
              to="/hvac-software"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="text-4xl mb-3">❄️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                HVAC Software
              </h3>
              <p className="text-gray-600">
                Refrigerant tracking, seasonal maintenance contracts, and equipment warranty management for HVAC contractors.
              </p>
            </Link>

            {/* Plumbing */}
            <Link 
              to="/plumbing-software"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Plumbing Software
              </h3>
              <p className="text-gray-600">
                Emergency dispatch, recurring maintenance, and parts tracking built specifically for plumbing contractors.
              </p>
            </Link>

            {/* Electrical */}
            <Link 
              to="/electrical-software"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Electrical Software
              </h3>
              <p className="text-gray-600">
                Permit tracking, code compliance documentation, and panel upgrade management for electricians.
              </p>
            </Link>

            {/* Landscaping */}
            <Link 
              to="/landscaping-software"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="text-4xl mb-3">🌿</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Landscaping Software
              </h3>
              <p className="text-gray-600">
                Route optimization for lawn crews, seasonal contracts, and property maintenance tracking for landscapers.
              </p>
            </Link>

            {/* Pool Service */}
            <Link 
              to="/pool-service-software"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="text-4xl mb-3">🏊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Pool Service Software
              </h3>
              <p className="text-gray-600">
                Chemical tracking, water testing logs, and weekly route management for pool service companies.
              </p>
            </Link>

            {/* Chimney Sweep */}
            <Link 
              to="/chimney-sweep-software"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="text-4xl mb-3">🧹</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Chimney Sweep Software
              </h3>
              <p className="text-gray-600">
                CSIA inspection checklists, creosote tracking, and offline mode for basement work without cell service.
              </p>
            </Link>

            {/* Handyman */}
            <Link 
              to="/handyman-software"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="text-4xl mb-3">🔨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Handyman Software
              </h3>
              <p className="text-gray-600">
                Multi-trade job tracking, flexible pricing, and customer history for handyman services and home repairs.
              </p>
            </Link>

            {/* General Contractors */}
            <Link 
              to="/general-contractors-software"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="text-4xl mb-3">🏗️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                General Contractors
              </h3>
              <p className="text-gray-600">
                Multi-project management, subcontractor coordination, and purchase orders for general contractors.
              </p>
            </Link>
          </div>

          {/* Feature Links */}
          <div className="border-t border-gray-200 pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Core Features Every Trade Needs
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link 
                to="/scheduling"
                className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <div className="text-3xl mb-2">📅</div>
                <h4 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600">Scheduling</h4>
                <p className="text-gray-600 text-sm">Drag-and-drop calendar and route optimization</p>
              </Link>

              <Link 
                to="/jobs-map"
                className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors group"
              >
                <div className="text-3xl mb-2">🗺️</div>
                <h4 className="font-bold text-gray-900 mb-1 group-hover:text-green-600">Jobs Map</h4>
                <p className="text-gray-600 text-sm">Visualize jobs and optimize technician routes</p>
              </Link>

              <Link 
                to="/invoicing-payments"
                className="bg-purple-50 p-6 rounded-lg hover:bg-purple-100 transition-colors group"
              >
                <div className="text-3xl mb-2">💳</div>
                <h4 className="font-bold text-gray-900 mb-1 group-hover:text-purple-600">Invoicing</h4>
                <p className="text-gray-600 text-sm">Accept payments on-site and sync with QuickBooks</p>
              </Link>

              <Link 
                to="/outreach-hub"
                className="bg-orange-50 p-6 rounded-lg hover:bg-orange-100 transition-colors group"
              >
                <div className="text-3xl mb-2">📧</div>
                <h4 className="font-bold text-gray-900 mb-1 group-hover:text-orange-600">Outreach Hub</h4>
                <p className="text-gray-600 text-sm">Email/SMS campaigns and automated follow-ups</p>
              </Link>
            </div>
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
            Ready to Simplify Your Painting Business?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join painting contractors who switched from paper estimates and spreadsheets to Crew Ops Pro.
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
