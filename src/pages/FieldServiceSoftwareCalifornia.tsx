import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQSchema from '../components/FAQSchema';

export default function FieldServiceSoftwareCalifornia() {
  const faqs = [
    {
      question: "Do you serve contractors throughout California?",
      answer: "Yes! Crew Ops Pro is used by contractors across California including Los Angeles, San Diego, San Francisco Bay Area, Sacramento, Fresno, and all regions. Our cloud-based software works statewide."
    },
    {
      question: "Does Crew Ops Pro help with California Title 24 compliance?",
      answer: "While we don't provide compliance certification, our software helps you document Title 24-related work, store equipment specs, track permit requirements, and maintain detailed job records for HVAC, electrical, and other regulated trades."
    },
    {
      question: "Can I manage crews across multiple California cities?",
      answer: "Absolutely. Track crews in LA, San Diego, San Francisco, and Sacramento simultaneously with GPS. Route optimization minimizes drive time in California traffic. Perfect for contractors serving multiple metro areas."
    },
    {
      question: "What's the pricing for California contractors?",
      answer: "$89/month flat rate. Unlimited users, unlimited jobs, all features included. No per-user fees. California's high cost of doing business makes our flat pricing especially valuable—save thousands annually vs Jobber or Housecall Pro."
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Field Service Software California 2026 | 850+ Contractors | $89/mo"
        description="Trusted by 850+ California contractors in LA, San Diego, San Francisco, and Sacramento. Handle regulations, traffic, and growth. $89/month, unlimited users."
        keywords="field service software California, contractor software California, HVAC software Los Angeles, plumbing software San Diego, California contractor management, Title 24 software"
      />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Field Service Software California' }
        ]} 
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ☀️ Built for the Golden State
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Field Service Software for California Contractors
            </h1>
            <p className="text-2xl text-gray-600 mb-4">
              Serving 850+ contractors across Los Angeles, San Diego, San Francisco Bay Area, Sacramento, and the entire state.
            </p>
            <p className="text-xl text-gray-600 mb-8">
              Navigate California's regulations, traffic, and high costs with software that actually saves you money.
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <StarRating />
              <span className="text-gray-700 font-semibold">4.9/5 from California contractors</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-lg font-bold text-xl transition-all shadow-xl hover:shadow-2xl hover:scale-105 text-center"
            >
              Start Your 14-Day Free Trial
            </Link>
            <Link 
              to="/pricing" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-lg font-bold text-xl transition-all text-center"
            >
              See Pricing - $89/Month
            </Link>
          </div>
          <p className="text-center text-gray-600 mt-4">
            No credit card required • Cancel anytime • Serving all 58 California counties
          </p>
        </div>
      </section>

      {/* California-Specific Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Built for California Contractors
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Strict regulations, massive traffic, and high operating costs demand smart software.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Navigate CA Regulations</h3>
              <p className="text-gray-700 mb-4">
                Title 24 compliance, CSLB licensing, local permits—California is strict. Track permits, store license numbers, document work details, and maintain digital records. Everything organized for inspections and audits.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Save time:</strong> Digital record-keeping = faster inspections
              </p>
            </div>

            <div className="bg-orange-50 p-8 rounded-lg border-2 border-orange-200">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Beat LA & Bay Area Traffic</h3>
              <p className="text-gray-700 mb-4">
                California traffic is legendary. Our <Link to="/jobs-map" className="text-blue-600 hover:underline font-semibold">GPS route optimization</Link> assigns jobs to the nearest tech, accounts for traffic patterns, and minimizes windshield time. More jobs per day, less fuel burned.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Save money:</strong> 30-60 min less driving per tech per day
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-lg border-2 border-green-200">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Control Your Costs</h3>
              <p className="text-gray-700 mb-4">
                California is expensive. Labor costs, fuel, insurance—everything's pricier. That's why our $89 flat-rate pricing matters. Add 10 employees? Still $89. Competitors charge $50-60 per user = $500-600/month.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Save big:</strong> $6,000+ per year vs Jobber for 10-user team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* California Markets */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Popular Across California Markets
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Los Angeles & Orange County</h3>
              <p className="text-gray-600 mb-3">320+ contractors in Southern California</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multi-crew operations across LA basin</li>
                <li>• High-end residential in Beverly Hills, Malibu</li>
                <li>• Commercial work in downtown LA</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">San Diego</h3>
              <p className="text-gray-600 mb-3">150+ contractors in San Diego County</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Coastal homes with saltwater challenges</li>
                <li>• Military base contracts (Camp Pendleton)</li>
                <li>• Year-round HVAC & landscaping demand</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">San Francisco Bay Area</h3>
              <p className="text-gray-600 mb-3">180+ contractors in SF, Oakland, San Jose</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tech-savvy customers expect modern tools</li>
                <li>• Premium pricing, high expectations</li>
                <li>• Dense urban service routes</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sacramento & Central Valley</h3>
              <p className="text-gray-600 mb-3">120+ contractors in inland California</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Hot summers = HVAC & pool service surge</li>
                <li>• Agricultural area commercial work</li>
                <li>• Growing suburban residential</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fresno & Bakersfield</h3>
              <p className="text-gray-600 mb-3">50+ contractors in Central California</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Agricultural HVAC & refrigeration</li>
                <li>• Residential service & maintenance</li>
                <li>• Less traffic, larger territories</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Statewide Coverage</h3>
              <p className="text-gray-600 mb-3">Contractors in all 58 counties</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Mountain communities to desert valleys</li>
                <li>• Offline mode for rural areas</li>
                <li>• Multi-city operations supported</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Industries We Serve in California
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/hvac-software" className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">❄️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">HVAC Software</h3>
              <p className="text-gray-600">Title 24 compliance & energy efficiency tracking</p>
            </Link>

            <Link to="/plumbing-software" className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plumbing Software</h3>
              <p className="text-gray-600">Emergency calls + water conservation mandates</p>
            </Link>

            <Link to="/electrical-software" className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Electrical Software</h3>
              <p className="text-gray-600">Solar installations & EV charger setup</p>
            </Link>

            <Link to="/pool-service-software" className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pool Service Software</h3>
              <p className="text-gray-600">Route optimization for weekly maintenance</p>
            </Link>

            <Link to="/landscaping-software" className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🌿</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Landscaping Software</h3>
              <p className="text-gray-600">Drought-tolerant design & water management</p>
            </Link>

            <Link to="/painting-software" className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Painting Software</h3>
              <p className="text-gray-600">Residential & commercial project management</p>
            </Link>

            <Link to="/handyman-software" className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Handyman Software</h3>
              <p className="text-gray-600">Multi-trade work for CA homeowners</p>
            </Link>

            <Link to="/general-contractors-software" className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏗️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">General Contractors</h3>
              <p className="text-gray-600">Manage subs & permits across projects</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">⭐⭐⭐⭐⭐</div>
          <blockquote className="text-2xl md:text-3xl font-medium mb-6">
            "Running 12 HVAC techs in Orange County, we were paying Jobber $720/month. Switched to Crew Ops Pro at $89. Software is faster, mobile app works great in LA traffic, and we pocket $631 every month. That's $7,500+ per year back in our business."
          </blockquote>
          <p className="text-xl text-blue-100">
            — David Park, OC Climate Control, Orange County, CA
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple Pricing for California Contractors
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            One flat rate. No per-user fees. Especially valuable in high-cost California.
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-12 border-2 border-blue-500">
            <div className="text-6xl font-bold text-blue-600 mb-4">$89<span className="text-2xl text-gray-600">/month</span></div>
            <p className="text-2xl text-gray-700 mb-8">Everything Included</p>
            
            <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700">Unlimited users (add employees, no extra cost)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700">GPS tracking & route optimization</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700">Mobile invoicing & payments</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700">Scheduling & dispatch</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700">Customer portal & communications</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700">QuickBooks integration</span>
              </li>
            </ul>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-8">
              <p className="text-lg text-gray-800 font-semibold mb-2">California Contractor with 12 Users:</p>
              <p className="text-gray-700">
                <strong>Jobber:</strong> $720/month ($60/user)<br />
                <strong>Housecall Pro:</strong> $600/month ($50/user)<br />
                <strong>Crew Ops Pro:</strong> $89/month<br />
                <span className="text-green-600 font-bold text-xl">Save $6,300 - $7,500 per year</span>
              </p>
            </div>

            <Link 
              to="/signup"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-lg font-bold text-xl transition-colors"
            >
              Start Your Free 14-Day Trial
            </Link>
            <p className="text-gray-600 mt-4">Used by 850+ California contractors</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Common Questions from California Contractors
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

      <FAQSchema faqs={faqs} />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Save Thousands Per Year?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join 850+ California contractors using Crew Ops Pro.
          </p>
          <Link 
            to="/signup" 
            className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-12 py-4 rounded-lg font-bold text-xl transition-colors"
          >
            Start Your Free Trial
          </Link>
          <p className="text-blue-100 mt-4">14 days free • Switch in 2 hours • Cancel anytime</p>
        </div>
      </section>
    </div>
  );
}
