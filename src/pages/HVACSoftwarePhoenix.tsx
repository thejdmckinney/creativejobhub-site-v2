import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQSchema from '../components/FAQSchema';

export default function HVACSoftwarePhoenix() {
  const faqs = [
    {
      question: "Do you serve HVAC contractors throughout Phoenix and Scottsdale?",
      answer: "Yes! Crew Ops Pro is used by HVAC contractors across Phoenix, Scottsdale, Mesa, Tempe, Chandler, Glendale, and the entire Valley. Our cloud-based software works anywhere with internet access."
    },
    {
      question: "How does Crew Ops Pro handle Phoenix's extreme heat season?",
      answer: "Phoenix summer = peak AC season. When it's 118°F and you're juggling 75 emergency calls, our drag-and-drop scheduler, GPS dispatch, and mobile app keep your crews moving. Many Phoenix HVAC contractors switch to us specifically for May-September surge capacity."
    },
    {
      question: "Can I manage multiple crews across the Valley?",
      answer: "Absolutely. Track crews in Phoenix, Scottsdale, Mesa, and other cities simultaneously with real-time GPS. Assign jobs to the nearest available tech, optimize routes to minimize drive time in brutal heat, and see exactly where everyone is."
    },
    {
      question: "What's the pricing for Phoenix HVAC contractors?",
      answer: "$89/month flat rate. Unlimited technicians, unlimited jobs, all features included. No per-user fees like Jobber ($60/user) or Housecall Pro ($50/user). Add 10 techs = $600/month savings."
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="HVAC Software Phoenix 2026 | 280+ Local Contractors | $89/mo"
        description="Trusted by 280+ Phoenix HVAC contractors handling 118°F summers. Manage emergency AC calls, seasonal surges, and multi-crew dispatch. $89/month, unlimited users."
        keywords="HVAC software Phoenix, Phoenix AC software, air conditioning software Phoenix, HVAC contractor software Arizona, Phoenix HVAC dispatch, Scottsdale HVAC software"
      />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'HVAC Software', path: '/hvac-software' },
          { label: 'Phoenix' }
        ]} 
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🌵 Built for Phoenix's Extreme Heat
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              HVAC Software for Phoenix Contractors
            </h1>
            <p className="text-2xl text-gray-600 mb-4">
              Serving 280+ HVAC contractors across Phoenix, Scottsdale, Mesa, Chandler, and the entire Valley of the Sun.
            </p>
            <p className="text-xl text-gray-600 mb-8">
              When it hits 118°F and AC units fail, you need software that handles the surge.
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <StarRating />
              <span className="text-gray-700 font-semibold">4.9/5 from Phoenix HVAC contractors</span>
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
            Cancel anytime • Used by 280+ Phoenix HVAC pros
          </p>
        </div>
      </section>

      {/* Phoenix-Specific Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Built for Phoenix HVAC Contractors
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            From May to September, Phoenix is the hottest major city in America. Your software needs to keep up.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-8 rounded-lg border-2 border-red-200">
              <div className="text-5xl mb-4">🔥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">118°F Summers = Peak Season</h3>
              <p className="text-gray-700 mb-4">
                Phoenix regularly hits 110-118°F from June-August. AC units fail. Emergency calls flood in. You need <Link to="/scheduling" className="text-blue-600 hover:underline font-semibold">smart scheduling</Link> that can handle 50-75 calls per day without breaking.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Phoenix reality:</strong> 70% of annual HVAC revenue happens May-September
              </p>
            </div>

            <div className="bg-orange-50 p-8 rounded-lg border-2 border-orange-200">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Mobile-First for Techs in Trucks</h3>
              <p className="text-gray-700 mb-4">
                Your techs are driving across Scottsdale, Mesa, Chandler, and Glendale in 115°F heat. They need a mobile app that works flawlessly—view jobs, update status, collect payments, all from their phone. Our app is built for speed.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Phoenix average:</strong> 8-12 calls per tech per day in peak season
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Route Optimization Across the Valley</h3>
              <p className="text-gray-700 mb-4">
                Phoenix sprawls 500+ square miles. Drive time eats profit. Our <Link to="/jobs-map" className="text-blue-600 hover:underline font-semibold">GPS dispatch and route optimization</Link> assigns jobs to the nearest tech, minimizing drive time and maximizing billable hours.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Save time:</strong> 30-45 minutes less driving per tech per day
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Specifically for Phoenix */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Features Phoenix HVAC Contractors Love
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Dispatch During Heat Waves</h3>
              <p className="text-gray-700 mb-4">
                When Phoenix hits 115°F and AC emergencies spike, drag-and-drop scheduling lets you instantly assign jobs. See which tech is closest, who's available next, and dispatch in seconds—not minutes.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Real-time technician locations on map</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Instant push notifications to mobile app</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Automated customer "tech on the way" alerts</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Seasonal Maintenance Scheduling</h3>
              <p className="text-gray-700 mb-4">
                Phoenix residents know: Spring tune-ups prevent summer breakdowns. Schedule hundreds of seasonal maintenance appointments, send automatic reminders, and keep your techs booked solid April-May before the real heat hits.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Bulk schedule maintenance routes by neighborhood</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Automated reminders via SMS and email</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Recurring service agreements for year-round revenue</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Payments & Invoicing</h3>
              <p className="text-gray-700 mb-4">
                Collect payment on-site with <Link to="/invoicing-payments" className="text-blue-600 hover:underline font-semibold">mobile credit card processing</Link>. Techs create invoices on their phone, customer signs digitally, payment processes instantly. No more chasing checks.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Accept credit cards, ACH, cash</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Digital signatures on mobile devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Automatic invoice delivery via email/SMS</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Communication Portal</h3>
              <p className="text-gray-700 mb-4">
                Phoenix customers expect modern service. Our <Link to="/outreach-hub" className="text-blue-600 hover:underline font-semibold">customer portal</Link> lets them book appointments online, get real-time tech ETAs, receive service history, and pay invoices—all without calling your office.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Online booking for maintenance appointments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Live tech ETA tracking (like Uber for HVAC)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Service history and equipment records</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">⭐⭐⭐⭐⭐</div>
          <blockquote className="text-2xl md:text-3xl font-medium mb-6">
            "We run 8 trucks in Phoenix. Summer is insane—sometimes 70 calls a day when it's 115°F. Switched from Jobber to Crew Ops Pro and it's night and day. Faster dispatch, better mobile app, and we're saving $480/month. Best decision we made."
          </blockquote>
          <p className="text-xl text-orange-100">
            — Sarah Chen, Desert Air HVAC, Phoenix, AZ
          </p>
        </div>
      </section>

      {/* Comparison to Generic Software */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Phoenix HVAC Contractors Choose Crew Ops Pro
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">Crew Ops Pro</th>
                  <th className="p-4 text-center">Jobber</th>
                  <th className="p-4 text-center">Housecall Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Pricing</td>
                  <td className="p-4 text-center bg-green-50 font-bold text-green-700">$89/month flat</td>
                  <td className="p-4 text-center">$60/user/month</td>
                  <td className="p-4 text-center">$50/user/month</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">Cost for 8 techs</td>
                  <td className="p-4 text-center bg-green-50 font-bold text-green-700">$89</td>
                  <td className="p-4 text-center">$480</td>
                  <td className="p-4 text-center">$400</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Mobile app speed</td>
                  <td className="p-4 text-center bg-green-50">⚡ Fast</td>
                  <td className="p-4 text-center">Medium</td>
                  <td className="p-4 text-center">Slow</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">GPS dispatch</td>
                  <td className="p-4 text-center bg-green-50">✓ Real-time</td>
                  <td className="p-4 text-center">✓</td>
                  <td className="p-4 text-center">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Peak season support</td>
                  <td className="p-4 text-center bg-green-50">✓ Built for it</td>
                  <td className="p-4 text-center">Slow during surge</td>
                  <td className="p-4 text-center">Slow during surge</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-semibold">Customer portal</td>
                  <td className="p-4 text-center bg-green-50">✓ Included</td>
                  <td className="p-4 text-center">✓ Extra cost</td>
                  <td className="p-4 text-center">✓ Limited</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-gray-600 mt-8 text-lg">
            See full comparisons: <Link to="/vs-jobber" className="text-blue-600 hover:underline font-semibold">Crew Ops Pro vs Jobber</Link> • <Link to="/vs-housecall-pro" className="text-blue-600 hover:underline font-semibold">Crew Ops Pro vs Housecall Pro</Link>
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple Pricing for Phoenix HVAC Contractors
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
                <span className="text-gray-700">Unlimited technicians</span>
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
              <p className="text-lg text-gray-800 font-semibold mb-2">Phoenix HVAC Contractor with 8 Techs:</p>
              <p className="text-gray-700">
                <strong>Jobber:</strong> $480/month<br />
                <strong>Crew Ops Pro:</strong> $89/month<br />
                <span className="text-orange-600 font-bold text-xl">Save $4,692 per year</span>
              </p>
            </div>

            <Link 
              to="/signup"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-lg font-bold text-xl transition-colors"
            >
              Start Your Free 14-Day Trial
            </Link>
            <p className="text-gray-600 mt-4">Used by 280+ Phoenix HVAC contractors</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Common Questions from Phoenix HVAC Contractors
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
      <section className="py-20 bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Handle Phoenix Summer Like a Pro?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join 280+ Phoenix HVAC contractors who switched to Crew Ops Pro.
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
