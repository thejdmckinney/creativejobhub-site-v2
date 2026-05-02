import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQSchema from '../components/FAQSchema';

export default function PlumbingSoftwareFlorida() {
  const faqs = [
    {
      question: "Do you serve plumbing contractors throughout Florida?",
      answer: "Yes! Crew Ops Pro is used by plumbing contractors across Florida including Miami, Tampa, Orlando, Jacksonville, Fort Lauderdale, and all coastal and inland areas. Our cloud-based software works anywhere."
    },
    {
      question: "How does Crew Ops Pro handle Florida's unique plumbing challenges?",
      answer: "Florida's high humidity, saltwater corrosion, and hurricane season create unique demands. Our software helps you manage emergency storm calls, track corrosion-prone equipment, schedule seasonal maintenance before hurricane season, and coordinate multi-crew responses during emergencies."
    },
    {
      question: "Does it work for both residential and commercial plumbing?",
      answer: "Absolutely. Manage everything from Miami high-rise commercial jobs to Tampa residential service calls. Track different service types, bill commercial clients differently, and schedule recurring maintenance for both sectors."
    },
    {
      question: "What's the pricing for Florida plumbing contractors?",
      answer: "$89/month flat rate. Unlimited plumbers, unlimited jobs, all features included. No per-user fees. Whether you're a solo operator in the Keys or running 15 trucks in Miami, same price."
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Plumbing Software Florida 2026 | 350+ Plumbers | $89/mo"
        description="Trusted by 350+ Florida plumbing contractors in Miami, Tampa, Orlando, and Jacksonville. Handle humidity, hurricanes, and growth. $89/month, unlimited users."
        keywords="plumbing software Florida, Florida plumber software, Miami plumbing software, Tampa plumbing contractor software, Orlando plumber app, Florida plumbing dispatch"
      />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Plumbing Software', path: '/plumbing-software' },
          { label: 'Florida' }
        ]} 
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🌴 Built for the Sunshine State
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Plumbing Software for Florida Contractors
            </h1>
            <p className="text-2xl text-gray-600 mb-4">
              Serving 350+ plumbing contractors across Miami, Tampa, Orlando, Jacksonville, Fort Lauderdale, and the entire state.
            </p>
            <p className="text-xl text-gray-600 mb-8">
              Handle humidity, hurricanes, coastal corrosion, and rapid growth with software built for Florida's unique challenges.
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <StarRating />
              <span className="text-gray-700 font-semibold">4.9/5 from Florida plumbing contractors</span>
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
            Cancel anytime • Serving plumbers statewide
          </p>
        </div>
      </section>

      {/* Florida-Specific Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Built for Florida Plumbing Contractors
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Humidity, hurricanes, and high growth demand tough, flexible software.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
              <div className="text-5xl mb-4">🌊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Hurricane Season Emergencies</h3>
              <p className="text-gray-700 mb-4">
                When storms hit, emergency calls spike. Flooded homes, burst pipes, sewage backups. Our <Link to="/scheduling" className="text-blue-600 hover:underline font-semibold">emergency dispatch system</Link> helps you prioritize calls, route crews efficiently, and handle 50+ jobs during storm recovery.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Hurricane prep:</strong> Schedule inspections May-June before peak season
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-lg border-2 border-green-200">
              <div className="text-5xl mb-4">💧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">High Humidity = More Maintenance</h3>
              <p className="text-gray-700 mb-4">
                Florida's 80%+ humidity accelerates pipe corrosion and mold growth. Schedule recurring maintenance contracts, send automated reminders, and keep customers on preventive maintenance plans that protect their homes and your revenue.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Revenue opportunity:</strong> Recurring maintenance = predictable income
              </p>
            </div>

            <div className="bg-orange-50 p-8 rounded-lg border-2 border-orange-200">
              <div className="text-5xl mb-4">🏖️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Coastal Growth = Scaling Fast</h3>
              <p className="text-gray-700 mb-4">
                Florida is booming—Tampa, Orlando, and Miami are top growth markets. As you add trucks and expand territories, Crew Ops Pro scales with unlimited users. No per-user fees means you keep more profit as you grow.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Save money:</strong> Add 10 plumbers = $600/month savings vs Jobber
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Florida Markets */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Popular Across Florida Markets
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Miami-Dade & Fort Lauderdale</h3>
              <p className="text-gray-600 mb-3">140+ contractors in South Florida</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• High-rise commercial plumbing</li>
                <li>• Coastal homes with saltwater corrosion</li>
                <li>• Multi-lingual customer support needs</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tampa Bay Area</h3>
              <p className="text-gray-600 mb-3">95+ contractors in Tampa-St. Pete</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Residential service & repairs</li>
                <li>• New construction in growing suburbs</li>
                <li>• Hurricane prep & storm recovery</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Orlando & Central Florida</h3>
              <p className="text-gray-600 mb-3">70+ contractors in Orlando metro</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tourist area commercial work</li>
                <li>• Residential subdivisions</li>
                <li>• Water heater replacements (hard water)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Jacksonville</h3>
              <p className="text-gray-600 mb-3">45+ contractors in North Florida</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Mix of coastal and inland service</li>
                <li>• Growing residential market</li>
                <li>• Commercial & industrial plumbing</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Florida Keys & Coastal</h3>
              <p className="text-gray-600 mb-3">20+ contractors in coastal areas</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Saltwater corrosion specialists</li>
                <li>• Hurricane-resistant system installs</li>
                <li>• Tourism property maintenance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Statewide Coverage</h3>
              <p className="text-gray-600 mb-3">Plumbers in all 67 counties</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Works in rural and coastal areas</li>
                <li>• Offline mode for remote locations</li>
                <li>• Multi-city business support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Features Florida Plumbers Love
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Storm Dispatch</h3>
              <p className="text-gray-700 mb-4">
                Hurricane aftermath = chaos. Prioritize emergency calls, see which plumber is closest with <Link to="/jobs-map" className="text-blue-600 hover:underline font-semibold">GPS tracking</Link>, and dispatch instantly. Handle high call volume without dropping balls.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Recurring Maintenance Scheduling</h3>
              <p className="text-gray-700 mb-4">
                Sell annual maintenance plans (pipe inspections, water heater flushes, drain cleaning). System auto-schedules recurring jobs, sends reminders, and keeps customers on contract—predictable revenue year-round.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Payments at Job Site</h3>
              <p className="text-gray-700 mb-4">
                Collect payment on-site with <Link to="/invoicing-payments" className="text-blue-600 hover:underline font-semibold">mobile credit card processing</Link>. Create invoice, customer signs on mobile device, payment processes instantly. No more chasing unpaid invoices.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Communication Portal</h3>
              <p className="text-gray-700 mb-4">
                Florida customers expect modern service. <Link to="/outreach-hub" className="text-blue-600 hover:underline font-semibold">Online booking</Link>, real-time plumber ETA tracking, service history access, and invoice payments—all automated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">⭐⭐⭐⭐⭐</div>
          <blockquote className="text-2xl md:text-3xl font-medium mb-6">
            "We switched from Housecall Pro right before hurricane season. Best timing ever. Handled 80+ emergency calls in 3 days without chaos. Mobile app works great, dispatch is fast, and we're saving $350/month. Every Florida plumber should use this."
          </blockquote>
          <p className="text-xl text-blue-100">
            — Tom Brennan, Sunshine Coast Plumbing, Tampa, FL
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Simple Pricing for Florida Plumbers
          </h2>

          <div className="bg-white rounded-2xl shadow-xl p-12 border-2 border-blue-500">
            <div className="text-6xl font-bold text-blue-600 mb-4">$89<span className="text-2xl text-gray-600">/month</span></div>
            <p className="text-2xl text-gray-700 mb-8">Everything Included</p>
            
            <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700">Unlimited plumbers</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700">Emergency dispatch & GPS tracking</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700">Mobile payments & invoicing</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700">Recurring maintenance scheduling</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700">Customer portal</span>
              </li>
            </ul>

            <Link 
              to="/signup"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-lg font-bold text-xl transition-colors"
            >
              Start Your Free 14-Day Trial
            </Link>
            <p className="text-gray-600 mt-4">Used by 350+ Florida plumbing contractors</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Common Questions from Florida Plumbers
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
            Ready to Handle Florida's Unique Challenges?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join 350+ Florida plumbers who switched to Crew Ops Pro.
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
