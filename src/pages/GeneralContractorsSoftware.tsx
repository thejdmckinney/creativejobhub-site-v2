import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';
import RelatedPages from '../components/RelatedPages';
import SoftwareApplicationSchema from '../components/SoftwareApplicationSchema';

export default function GeneralContractorsSoftware() {
  const faqs = [
    {
      question: "What types of contractors can use this software?",
      answer: "All types! Remodeling, roofing, carpentry, flooring, drywall, masonry, fencing, decking, siding, gutters, insulation, tile work, concrete, framing, and more. If you run a field service business, Crew Ops Pro handles it. One software for all your trades."
    },
    {
      question: "Can I manage multiple projects and crews at once?",
      answer: "Yes! Schedule multiple projects simultaneously, assign different crews to each job, and track progress in real-time. See which crews are on which jobs, what's completed, and what's still pending—all from one dashboard."
    },
    {
      question: "Does it handle subcontractor coordination?",
      answer: "Absolutely. Invite subcontractors to the platform, assign them to specific jobs or phases, and track their work. They can update job status, upload photos, and log hours. You maintain control while they stay informed."
    },
    {
      question: "Can I track materials and purchase orders?",
      answer: "Yes. Create purchase orders for materials, track deliveries, and log what's used per job. Know exactly what materials went to which project and see true job profitability including all material costs."
    },
    {
      question: "How much does general contractor software cost?",
      answer: "$89/month flat. Unlimited users (employees, crews, subcontractors), unlimited jobs, all features included. No per-user fees, no setup charges. Same price whether you have 1 person or 50."
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
      title: 'HVAC Software',
      description: 'Perfect for HVAC and heating/cooling contractors',
      path: '/hvac-software',
      icon: '❄️'
    },
    {
      title: 'Electrical Software',
      description: 'Designed for electricians and electrical contractors',
      path: '/electrical-software',
      icon: '⚡'
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="General Contractor Software | Crew Ops Pro"
        description="Field service software for ALL contractor types: remodeling, roofing, carpentry, flooring, drywall, masonry, fencing, decking, and more. Manage projects, crews, and subcontractors. $89/month flat."
        keywords="general contractor software, contractor management software, construction software, field service software, contractor app, remodeling software, roofing software"
      />
      <SoftwareApplicationSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.crewopspro.com' },
        { name: 'General Contractors', url: 'https://www.crewopspro.com/general-contractors-software' }
      ]} />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'General Contractors' }
        ]} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🏗️ Built for ALL Contractor Types
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              One Software for Every Trade
            </h1>
            <p className="text-2xl text-gray-600 mb-4">
              Manage projects, crews, and subcontractors from one simple platform.
            </p>
            <p className="text-xl text-gray-500 mb-6">
              Works for <strong>remodeling, roofing, carpentry, flooring, drywall, masonry, fencing, decking, siding, gutters, insulation, tile work, concrete, framing</strong>, and more.
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
              className="border-2 border-gray-600 text-gray-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              See Pricing - $89/Month
            </Link>
          </div>
        </div>
      </section>

      {/* Why General Contractors Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why General Contractors Choose Crew Ops Pro
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold mb-2">Works for All Trades</h3>
              <p className="text-gray-600">
                One platform that handles every type of contracting work. Whether you're doing kitchen remodels, roof replacements, or custom carpentry, Crew Ops Pro adapts to your business.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2">Crew & Sub Management</h3>
              <p className="text-gray-600">
                Manage in-house crews and subcontractors from one system. Assign jobs, track progress, and coordinate everyone involved—all with automatic updates and notifications.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Multi-Project Tracking</h3>
              <p className="text-gray-600">
                Run multiple projects simultaneously without losing track. See which jobs are on schedule, which need attention, and where your crews are deployed—all from one dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trades Covered Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
            We Support Every Type of Contractor
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            No matter what trade you're in, Crew Ops Pro has you covered
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-2">🏠</div>
              <h3 className="font-semibold">Remodeling</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-2">🏚️</div>
              <h3 className="font-semibold">Roofing</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-2">🪚</div>
              <h3 className="font-semibold">Carpentry</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-2">🔨</div>
              <h3 className="font-semibold">Flooring</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-2">📐</div>
              <h3 className="font-semibold">Drywall</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-2">🧱</div>
              <h3 className="font-semibold">Masonry</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-2">🚧</div>
              <h3 className="font-semibold">Fencing</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-2">🏗️</div>
              <h3 className="font-semibold">Decking</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-2">🏘️</div>
              <h3 className="font-semibold">Siding</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-2">💧</div>
              <h3 className="font-semibold">Gutters</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-2">🧊</div>
              <h3 className="font-semibold">Insulation</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-2">🪟</div>
              <h3 className="font-semibold">Tile Work</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-2">🏗️</div>
              <h3 className="font-semibold">Concrete</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-2">🏢</div>
              <h3 className="font-semibold">Framing</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-2">🔧</div>
              <h3 className="font-semibold">General Repairs</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-2">🏡</div>
              <h3 className="font-semibold">And More!</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Everything Your Contracting Business Needs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="text-xl font-semibold mb-2">Project Scheduling</h3>
              <p className="text-gray-600">
                Schedule multiple projects with different crews and subcontractors. Drag-and-drop calendar shows who's working where and when. GPS tracking for real-time location updates.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-xl font-semibold mb-2">Professional Estimates</h3>
              <p className="text-gray-600">
                Create detailed project estimates with line items, materials, labor, and markup. Include photos and diagrams. Send via email or text for instant approval.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">💳</div>
              <h3 className="text-xl font-semibold mb-2">Payment Processing</h3>
              <p className="text-gray-600">
                Accept credit cards, ACH, and checks. Collect deposits, progress payments, and final payments. Get paid in 24 hours instead of waiting 30+ days for checks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">👷</div>
              <h3 className="text-xl font-semibold mb-2">Subcontractor Management</h3>
              <p className="text-gray-600">
                Invite subcontractors to the platform, assign them to jobs, and track their work. They update status and upload photos while you maintain control and visibility.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-xl font-semibold mb-2">Materials & POs</h3>
              <p className="text-gray-600">
                Create purchase orders, track material deliveries, and log what's used per project. Know your true job profitability including all material and labor costs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl font-semibold mb-2">Project Reports</h3>
              <p className="text-gray-600">
                Track project profitability, crew productivity, and materials usage. Generate reports for customers, accountants, or internal analysis. Export to QuickBooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Simple Pricing for All Contractors
          </h2>
          <p className="text-2xl text-gray-300 mb-8">
            No per-user fees. No contracts. No surprises.
          </p>
          <div className="bg-white text-gray-900 rounded-2xl p-12 max-w-xl mx-auto">
            <div className="mb-6">
              <span className="text-6xl font-bold">$89</span>
              <span className="text-xl text-gray-500">/month</span>
            </div>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Unlimited users (employees, crews, subs)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Unlimited jobs & projects</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Multi-project scheduling & tracking</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Subcontractor coordination</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Materials & purchase order management</span>
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

      <RelatedPages pages={relatedPages} title="Explore Industry-Specific Solutions" />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Simplify Your Contracting Business?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join contractors across all trades who switched from spreadsheets and complicated software to Crew Ops Pro.
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
