import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQSchema from '../components/FAQSchema';

export default function FieldServiceSoftwareTexas() {
  const faqs = [
    {
      question: "Do you serve contractors throughout Texas?",
      answer: "Yes! Crew Ops Pro is used by contractors across Texas including Dallas, Houston, Austin, San Antonio, Fort Worth, El Paso, and all surrounding areas. Our cloud-based software works anywhere with internet access."
    },
    {
      question: "How does Crew Ops Pro handle Texas heat and seasonal demand?",
      answer: "Our scheduling system is built to handle seasonal surges. When temperatures hit 100°F+ and AC calls spike, our drag-and-drop scheduler and GPS dispatch help you manage 50+ jobs per day. Many Texas HVAC contractors switch to us specifically for peak summer season."
    },
    {
      question: "Can I manage multiple crews across Texas cities?",
      answer: "Absolutely. Track crews in Dallas, Houston, Austin, and other cities simultaneously with GPS tracking. See real-time locations, assign jobs to the nearest available crew, and optimize routes across the state."
    },
    {
      question: "What's the pricing for Texas contractors?",
      answer: "$89/month flat rate. Unlimited users, unlimited jobs, all features included. No per-user fees like Jobber or Housecall Pro. Same price whether you're in a small town or running 10 crews in Houston."
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Field Service Software Texas 2026 | 1,200+ Contractors | $89/mo"
        description="Trusted by 1,200+ Texas contractors in Dallas, Houston, Austin, and beyond. Manage HVAC, plumbing, electrical, and field service businesses. $89/month, unlimited users."
        keywords="field service software Texas, contractor software Texas, HVAC software Dallas, plumbing software Houston, Texas contractor management, field service management Texas"
      />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Field Service Software Texas' }
        ]} 
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🤠 Trusted by Texas Contractors
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Field Service Software Built for Texas Contractors
            </h1>
            <p className="text-2xl text-gray-600 mb-4">
              Serving 1,200+ HVAC, plumbing, electrical, and service businesses across Dallas, Houston, Austin, San Antonio, and the entire Lone Star State.
            </p>
            <p className="text-xl text-gray-600 mb-8">
              Handle extreme heat, seasonal surges, and growing crews with software that works as hard as you do.
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <StarRating />
              <span className="text-gray-700 font-semibold">4.9/5 from Texas contractors</span>
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
            No credit card required • Cancel anytime • Serving all 254 Texas counties
          </p>
        </div>
      </section>

      {/* Texas-Specific Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Built for the Challenges Texas Contractors Face
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            From scorching summers to rapid business growth, Texas demands tough software.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-8 rounded-lg border-2 border-orange-200">
              <div className="text-5xl mb-4">🌡️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Extreme Heat = High Demand</h3>
              <p className="text-gray-700 mb-4">
                When Dallas hits 105°F and Houston AC units fail, you need software that can handle 50+ emergency calls per day. Our <Link to="/scheduling" className="text-blue-600 hover:underline font-semibold">smart scheduling</Link> and GPS dispatch get your crews to the right place fast.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Texas peak season:</strong> June-September when AC demand spikes 300%
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Rapid Growth = Scaling Challenges</h3>
              <p className="text-gray-700 mb-4">
                Texas is booming. Austin, Dallas-Fort Worth, and Houston are top growth cities. As you add crews and expand to new cities, Crew Ops Pro scales with unlimited users—no per-seat fees like Jobber's $60/user.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Save money:</strong> Add 10 users = $600/month savings vs Jobber
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-lg border-2 border-green-200">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Big State = Long Drives</h3>
              <p className="text-gray-700 mb-4">
                Dallas to Houston = 240 miles. Austin to El Paso = 580 miles. Our <Link to="/jobs-map" className="text-blue-600 hover:underline font-semibold">route optimization</Link> and GPS tracking minimize drive time and fuel costs. See where every crew is in real-time.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Save time:</strong> 2-3 hours less driving per crew per week
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular in Texas Cities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Popular Across Major Texas Markets
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dallas-Fort Worth</h3>
              <p className="text-gray-600 mb-3">450+ contractors using Crew Ops Pro in DFW metroplex</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• HVAC contractors managing summer AC surge</li>
                <li>• Plumbing businesses with 5-15 trucks</li>
                <li>• Electrical contractors doing new construction</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Houston</h3>
              <p className="text-gray-600 mb-3">380+ contractors in Greater Houston area</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pool service routes in humid climate</li>
                <li>• HVAC service with Gulf Coast heat</li>
                <li>• Multi-trade contractors (plumbing + electrical)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Austin</h3>
              <p className="text-gray-600 mb-3">220+ contractors in Austin metro</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Residential remodeling & handyman</li>
                <li>• Tech-savvy contractors seeking modern software</li>
                <li>• Growing businesses expanding to surrounding cities</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">San Antonio</h3>
              <p className="text-gray-600 mb-3">150+ contractors in San Antonio</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Landscaping businesses with seasonal crews</li>
                <li>• Painting contractors handling subdivisions</li>
                <li>• General contractors managing subcontractors</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">El Paso</h3>
              <p className="text-gray-600 mb-3">45+ contractors in West Texas</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• HVAC with desert climate challenges</li>
                <li>• Service businesses covering large territories</li>
                <li>• Bilingual teams serving diverse communities</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Statewide Coverage</h3>
              <p className="text-gray-600 mb-3">Contractors in all 254 counties</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Works in rural areas with mobile data</li>
                <li>• Offline mode for remote job sites</li>
                <li>• Supports businesses serving multiple cities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve in Texas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Industries We Serve in Texas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/hvac-software" className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">❄️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">HVAC Software</h3>
              <p className="text-gray-600">Handle summer AC surge when it's 105°F in Dallas</p>
            </Link>

            <Link to="/plumbing-software" className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plumbing Software</h3>
              <p className="text-gray-600">Emergency calls + recurring maintenance in one system</p>
            </Link>

            <Link to="/electrical-software" className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Electrical Software</h3>
              <p className="text-gray-600">Manage residential and commercial electrical jobs</p>
            </Link>

            <Link to="/pool-service-software" className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pool Service Software</h3>
              <p className="text-gray-600">Route optimization for weekly pool maintenance</p>
            </Link>

            <Link to="/landscaping-software" className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🌿</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Landscaping Software</h3>
              <p className="text-gray-600">Crew scheduling for seasonal Texas lawn care</p>
            </Link>

            <Link to="/painting-software" className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Painting Software</h3>
              <p className="text-gray-600">Track projects across Texas subdivisions</p>
            </Link>

            <Link to="/handyman-software" className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Handyman Software</h3>
              <p className="text-gray-600">Multi-trade software for diverse service offerings</p>
            </Link>

            <Link to="/general-contractors-software" className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏗️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">General Contractors</h3>
              <p className="text-gray-600">Manage subcontractors and large projects</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">⭐⭐⭐⭐⭐</div>
          <blockquote className="text-2xl md:text-3xl font-medium mb-6">
            "We were paying Jobber $340/month for 4 users. Switched to Crew Ops Pro at $89 flat. Same features, better mobile app, and it actually handles our summer surge when Dallas hits 100°F. Saved us $3,000+ per year."
          </blockquote>
          <p className="text-xl text-blue-100">
            — Marcus Rodriguez, Rodriguez HVAC, Dallas, TX
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple Pricing for Texas Contractors
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            One flat rate. No per-user fees. No surprises.
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-12 border-2 border-blue-500">
            <div className="text-6xl font-bold text-blue-600 mb-4">$89<span className="text-2xl text-gray-600">/month</span></div>
            <p className="text-2xl text-gray-700 mb-8">Everything Included</p>
            
            <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700">Unlimited users (Dallas + Houston teams)</span>
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

            <Link 
              to="/signup"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-lg font-bold text-xl transition-colors"
            >
              Start Your Free 14-Day Trial
            </Link>
            <p className="text-gray-600 mt-4">Used by 1,200+ Texas contractors</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Common Questions from Texas Contractors
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
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join 1,200+ Texas Contractors?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Start your free trial today. No credit card required.
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
