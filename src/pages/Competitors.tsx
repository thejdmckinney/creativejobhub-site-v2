import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';

export default function Competitors() {
  const competitors = [
    {
      name: 'Jobber',
      pricing: '$359/month',
      pain: 'Hidden costs for basic features like GPS tracking and custom forms',
      link: '/vs-jobber'
    },
    {
      name: 'Housecall Pro',
      pricing: '$249/month',
      pain: 'Expensive add-ons for marketing automation and integrations',
      link: '/vs-housecall-pro'
    },
    {
      name: 'ServiceTitan',
      pricing: '$500+/month',
      pain: 'Enterprise pricing with long contracts and complex setup',
      link: '/vs-servicetitan'
    },
    {
      name: 'Workiz',
      pricing: '$230/month',
      pain: 'Limited customization and clunky mobile experience',
      link: '/vs-workiz'
    },
    {
      name: 'FieldEdge',
      pricing: '$169/month',
      pain: 'Outdated UI and poor customer support',
      link: '/vs-fieldedge'
    },
    {
      name: 'ServiceM8',
      pricing: '$129/month',
      pain: 'Basic features only, lacks advanced job management',
      link: '/vs-servicem8'
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Competitors - Compare Field Service Software"
        description="Compare Creative Job Hub vs Jobber, Housecall Pro, ServiceTitan, Workiz, FieldEdge, and ServiceM8. See why contractors are switching to save $2,000-$5,000 per year."
        keywords="field service software comparison, Jobber alternative, ServiceTitan alternative, Housecall Pro alternative"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Why Contractors Choose Creative Job Hub Over The Competition
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            We're not trying to be everything to everyone. We're focused on one thing: helping small to mid-size field service businesses run better, without the enterprise price tag.
          </p>
          <div className="mb-8">
            <StarRating />
          </div>
          <Link 
            to="/signup" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Start Your 14-Day Free Trial
          </Link>
        </div>
      </section>

      {/* Main Difference Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            The Creative Job Hub Difference
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparent Pricing</h3>
              <p className="text-gray-600 mb-4">
                $89/month. Everything included. No hidden fees, no per-user charges, no expensive add-ons.
              </p>
              <p className="text-sm text-gray-500">
                Compare that to competitors who charge $200-500/month plus fees for basic features.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-5xl mb-4">
                <svg className="w-16 h-16 text-orange-500" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M480 288c0-80.25-49.28-148.92-119.19-177.62L320 192V80a16 16 0 0 0-16-16h-96a16 16 0 0 0-16 16v112l-40.81-81.62C81.28 139.08 32 207.75 32 288v32h448v-32zm16 96H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Built By a Contractor</h3>
              <p className="text-gray-600 mb-4">
                Not by software people who've never worked in the field. Every feature solves a real problem.
              </p>
              <p className="text-sm text-gray-500">
                We understand your workflow because we use it every single day.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Nickel-and-Diming</h3>
              <p className="text-gray-600 mb-4">
                GPS tracking, custom forms, text messaging, QuickBooks sync - all included at no extra cost.
              </p>
              <p className="text-sm text-gray-500">
                Other platforms charge $50-100 extra per month for each of these features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Comparison Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            See How We Stack Up
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We've spent thousands of dollars testing every major field service platform. Here's what we found.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitors.map((competitor) => (
              <div key={competitor.name} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{competitor.name}</h3>
                  <span className="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded">
                    {competitor.pricing}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  {competitor.pain}
                </p>
                {competitor.link !== '#' ? (
                  <Link 
                    to={competitor.link}
                    className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    See Full Comparison →
                  </Link>
                ) : (
                  <div className="block w-full text-center bg-gray-200 text-gray-500 px-6 py-3 rounded-lg font-semibold cursor-not-allowed">
                    Comparison Coming Soon
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What You Get vs. What They Charge Extra For
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left p-4 font-bold text-gray-900">Feature</th>
                  <th className="text-center p-4 font-bold text-blue-600">Creative Job Hub</th>
                  <th className="text-center p-4 font-bold text-gray-600">Competitors</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'GPS Tracking', us: 'Included', them: '+$30-50/mo' },
                  { feature: 'Custom Forms', us: 'Included', them: '+$25-40/mo' },
                  { feature: 'Text Messaging', us: 'Included', them: '+$40-60/mo' },
                  { feature: 'QuickBooks Sync', us: 'Included', them: '+$30-50/mo' },
                  { feature: 'Marketing Automation', us: 'Included', them: '+$50-100/mo' },
                  { feature: 'Team Management', us: 'Included', them: 'Per User Fee' },
                  { feature: 'Customer Portal', us: 'Included', them: '+$30-40/mo' },
                  { feature: 'Recurring Maintenance', us: 'Included', them: '+$25-35/mo' },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 text-gray-900">{row.feature}</td>
                    <td className="p-4 text-center">
                      <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded font-semibold">
                        ✓ {row.us}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded font-semibold">
                        ✗ {row.them}
                      </span>
                    </td>
                  </tr>
                ))}
                <tr className="bg-blue-50 border-t-2 border-blue-200">
                  <td className="p-4 font-bold text-gray-900">TOTAL MONTHLY COST</td>
                  <td className="p-4 text-center">
                    <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
                      $89/mo
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
                      $450+/mo
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-2xl font-bold text-gray-900 mb-4">
              Save $4,332 per year with Creative Job Hub
            </p>
            <p className="text-lg text-gray-600">
              That's enough to buy a new truck, hire help, or just keep more money in your pocket.
            </p>
          </div>
        </div>
      </section>

      {/* Real Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Contractors Are Switching
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-gray-600 mb-4 italic">
                "I was paying Jobber $350/month and still didn't have the features I needed. Creative Job Hub gave me everything for $89. No brainer."
              </p>
              <p className="font-semibold text-gray-900">- Mike, HVAC Contractor</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-gray-600 mb-4 italic">
                "ServiceTitan wanted $600/month plus a 2-year contract. CJH lets me try it free for 14 days and cancel anytime. That's how confident they are."
              </p>
              <p className="font-semibold text-gray-900">- Sarah, Plumbing Company Owner</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-gray-600 mb-4 italic">
                "Housecall Pro's mobile app was clunky and slow. CJH is faster and actually works the way I work in the field."
              </p>
              <p className="font-semibold text-gray-900">- David, Electrical Contractor</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-gray-600 mb-4 italic">
                "I called Workiz support 6 times before getting help. Jeremy at CJH responds within hours. Built and supported by someone who gets it."
              </p>
              <p className="font-semibold text-gray-900">- Tom, Handyman Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stop Overpaying For Field Service Software
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Try Creative Job Hub free for 14 days. No charge for 14 days. See why contractors are making the switch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup" 
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-lg font-bold text-xl transition-colors"
            >
              Start Free Trial
            </Link>
            <Link 
              to="/pricing" 
              className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-12 py-4 rounded-lg font-bold text-xl transition-colors"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

