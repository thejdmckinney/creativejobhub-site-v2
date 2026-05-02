import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQSchema from '../components/FAQSchema';

export default function ContractorSoftwareDallas() {
  const faqs = [
    {
      question: "Do you serve contractors throughout the DFW metroplex?",
      answer: "Yes! Crew Ops Pro is used by contractors across Dallas, Fort Worth, Plano, Irving, Arlington, Frisco, McKinney, and the entire DFW area. Our cloud-based software works anywhere with internet access."
    },
    {
      question: "How does Crew Ops Pro handle Dallas's extreme weather?",
      answer: "Dallas has scorching 105°F summers (AC emergency surges) and occasional ice storms (burst pipe emergencies). Our software handles high call volumes during weather events with emergency dispatch, priority scheduling, and GPS routing to get crews to the right place fast."
    },
    {
      question: "Can I manage multiple crews across DFW?",
      answer: "Absolutely. DFW is massive—240+ square miles. Track crews in Dallas, Fort Worth, Plano, and suburbs simultaneously with real-time GPS. Route optimization reduces drive time across the metroplex, and dispatch assigns jobs to the nearest available tech."
    },
    {
      question: "What's the pricing for Dallas contractors?",
      answer: "$89/month flat rate. Unlimited users, unlimited jobs, all features included. No per-user fees like Jobber ($60/user) or Housecall Pro ($50/user). Add 10 techs = $600/month savings."
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Contractor Software Dallas 2026 | 450+ DFW Contractors | $89/mo"
        description="Trusted by 450+ Dallas-Fort Worth contractors. Manage HVAC, plumbing, electrical, and field service businesses across DFW. $89/month, unlimited users."
        keywords="contractor software Dallas, Dallas field service software, DFW contractor management, HVAC software Dallas, plumbing software Fort Worth, Dallas contractor app"
      />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Contractor Software Dallas' }
        ]} 
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🤠 Built for the DFW Metroplex
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Contractor Software for Dallas-Fort Worth
            </h1>
            <p className="text-2xl text-gray-600 mb-4">
              Serving 450+ HVAC, plumbing, electrical, and service contractors across Dallas, Fort Worth, Plano, Arlington, Frisco, and the entire metroplex.
            </p>
            <p className="text-xl text-gray-600 mb-8">
              Handle DFW's extreme weather, sprawling geography, and booming growth with software built for Texas contractors.
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <StarRating />
              <span className="text-gray-700 font-semibold">4.9/5 from Dallas contractors</span>
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
            Cancel anytime • Used by 450+ DFW contractors
          </p>
        </div>
      </section>

      {/* DFW-Specific Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Built for Dallas-Fort Worth Contractors
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            DFW's extreme weather, massive size, and rapid growth demand powerful software.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-8 rounded-lg border-2 border-orange-200">
              <div className="text-5xl mb-4">🌡️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">105°F Summers = AC Emergency Surge</h3>
              <p className="text-gray-700 mb-4">
                Dallas regularly hits 100-105°F June through September. AC units fail. Emergency calls flood in. You need <Link to="/scheduling" className="text-blue-600 hover:underline font-semibold">smart scheduling and dispatch</Link> that can handle 50-75 calls per day without chaos.
              </p>
              <p className="text-sm text-gray-600">
                <strong>DFW reality:</strong> Summer AC demand = 60% of annual HVAC revenue
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Sprawling Metroplex = Long Drives</h3>
              <p className="text-gray-700 mb-4">
                DFW covers 9,200+ square miles. Dallas to Fort Worth = 30 miles. Frisco to Arlington = 45+ miles. Our <Link to="/jobs-map" className="text-blue-600 hover:underline font-semibold">GPS route optimization</Link> assigns jobs to the nearest tech, minimizing drive time and maximizing billable hours.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Save time:</strong> 30-45 minutes less driving per tech per day
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-lg border-2 border-green-200">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Booming Growth = Scaling Fast</h3>
              <p className="text-gray-700 mb-4">
                DFW is one of America's fastest-growing metro areas. New construction, expanding suburbs, and relocating businesses create massive demand. As you add crews and expand into Frisco, McKinney, or Prosper, Crew Ops Pro scales with unlimited users.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Save money:</strong> Add 10 techs = $600/month savings vs Jobber
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DFW Markets */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Popular Across DFW Markets
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dallas</h3>
              <p className="text-gray-600 mb-3">190+ contractors in Dallas proper</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Urban high-rise commercial work</li>
                <li>• Uptown & Highland Park high-end residential</li>
                <li>• Fast emergency response expectations</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fort Worth</h3>
              <p className="text-gray-600 mb-3">95+ contractors in Fort Worth</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Mix of commercial and residential</li>
                <li>• Growing suburbs (Keller, Southlake)</li>
                <li>• Strong construction market</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plano & Frisco</h3>
              <p className="text-gray-600 mb-3">85+ contractors in North Dallas suburbs</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fast-growing corporate relocations</li>
                <li>• New home construction</li>
                <li>• High-income families = premium service</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Arlington & Irving</h3>
              <p className="text-gray-600 mb-3">50+ contractors in mid-cities</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Sports venues & entertainment districts</li>
                <li>• Established residential neighborhoods</li>
                <li>• Commercial warehouse & industrial</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">McKinney & Prosper</h3>
              <p className="text-gray-600 mb-3">30+ contractors in outer suburbs</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• America's fastest-growing cities</li>
                <li>• New residential developments</li>
                <li>• Growing families = long-term customers</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">DFW-Wide</h3>
              <p className="text-gray-600 mb-3">Contractors serving entire metroplex</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multi-city operations</li>
                <li>• Commercial accounts across DFW</li>
                <li>• GPS routing handles sprawl</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Industries We Serve in Dallas-Fort Worth
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/hvac-software" className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">❄️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">HVAC Software</h3>
              <p className="text-gray-600">Handle 105°F summer AC emergency surges</p>
            </Link>

            <Link to="/plumbing-software" className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plumbing Software</h3>
              <p className="text-gray-600">Emergency calls + new construction plumbing</p>
            </Link>

            <Link to="/electrical-software" className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Electrical Software</h3>
              <p className="text-gray-600">Residential service & commercial projects</p>
            </Link>

            <Link to="/pool-service-software" className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pool Service Software</h3>
              <p className="text-gray-600">Route management for DFW pool routes</p>
            </Link>

            <Link to="/landscaping-software" className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🌿</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Landscaping Software</h3>
              <p className="text-gray-600">Crew scheduling for hot Texas summers</p>
            </Link>

            <Link to="/painting-software" className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Painting Software</h3>
              <p className="text-gray-600">Track jobs across DFW subdivisions</p>
            </Link>

            <Link to="/handyman-software" className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Handyman Software</h3>
              <p className="text-gray-600">Multi-trade service for DFW homeowners</p>
            </Link>

            <Link to="/general-contractors-software" className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏗️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">General Contractors</h3>
              <p className="text-gray-600">Manage subs & projects in booming market</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Features Dallas Contractors Love
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Dispatch for Weather Events</h3>
              <p className="text-gray-700 mb-4">
                When Dallas hits 105°F or ice storms cause burst pipes, emergency calls spike. Drag-and-drop scheduling, GPS dispatch, and real-time crew tracking help you handle 50+ calls without chaos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Route Optimization Across DFW</h3>
              <p className="text-gray-700 mb-4">
                Minimize drive time across 9,200 square miles. Assign jobs to the nearest tech, optimize routes automatically, and see real-time locations. Less time on I-35, more time at job sites.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Payments & Invoicing</h3>
              <p className="text-gray-700 mb-4">
                Collect payment on-site with <Link to="/invoicing-payments" className="text-blue-600 hover:underline font-semibold">mobile credit card processing</Link>. Techs create invoices, customers sign digitally, payments process instantly. Cash flow improves immediately.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Communication Portal</h3>
              <p className="text-gray-700 mb-4">
                DFW customers expect modern service. <Link to="/outreach-hub" className="text-blue-600 hover:underline font-semibold">Online booking</Link>, real-time tech ETA tracking, and automated appointment reminders keep customers happy and reduce no-shows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">⭐⭐⭐⭐⭐</div>
          <blockquote className="text-2xl md:text-3xl font-medium mb-6">
            "Running 9 plumbing trucks across Dallas, Plano, and Fort Worth, we were paying Jobber $540/month. Switched to Crew Ops Pro for $89. GPS routing works better, mobile app is faster, and we're saving $5,400 per year. No-brainer decision."
          </blockquote>
          <p className="text-xl text-orange-100">
            — Jessica Martinez, DFW Pro Plumbing, Dallas, TX
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple Pricing for Dallas Contractors
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            One flat rate. No per-user fees. No surprises.
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-12 border-2 border-orange-500">
            <div className="text-6xl font-bold text-orange-600 mb-4">$89<span className="text-2xl text-gray-600">/month</span></div>
            <p className="text-2xl text-gray-700 mb-8">Everything Included</p>
            
            <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700">Unlimited users (Dallas + Fort Worth teams)</span>
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
                <span className="text-gray-700">Emergency dispatch tools</span>
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

            <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 mb-8">
              <p className="text-lg text-gray-800 font-semibold mb-2">DFW Contractor with 9 Techs:</p>
              <p className="text-gray-700">
                <strong>Jobber:</strong> $540/month<br />
                <strong>Housecall Pro:</strong> $450/month<br />
                <strong>Crew Ops Pro:</strong> $89/month<br />
                <span className="text-orange-600 font-bold text-xl">Save $4,300 - $5,400 per year</span>
              </p>
            </div>

            <Link 
              to="/signup"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-lg font-bold text-xl transition-colors"
            >
              Start Your Free 14-Day Trial
            </Link>
            <p className="text-gray-600 mt-4">Used by 450+ Dallas-Fort Worth contractors</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Common Questions from Dallas Contractors
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
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Dominate the DFW Market?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join 450+ Dallas-Fort Worth contractors using Crew Ops Pro.
          </p>
          <Link 
            to="/signup" 
            className="inline-block bg-white hover:bg-gray-100 text-orange-600 px-12 py-4 rounded-lg font-bold text-xl transition-colors"
          >
            Start Your Free Trial
          </Link>
          <p className="text-orange-100 mt-4">14 days free • Switch in 2 hours • Cancel anytime</p>
        </div>
      </section>
    </div>
  );
}
