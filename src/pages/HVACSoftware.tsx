import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';
import RelatedPages from '../components/RelatedPages';
import SoftwareApplicationSchema from '../components/SoftwareApplicationSchema';

export default function HVACSoftware() {
  const faqs = [
    {
      question: "Can I track refrigerant usage and EPA compliance?",
      answer: "Yes! Log refrigerant types, amounts used, and recovery per job. Track EPA 608 certification expiration dates for your techs. Generate compliance reports for audits."
    },
    {
      question: "Does it handle seasonal maintenance contracts?",
      answer: "Absolutely. Set up spring tune-ups and fall maintenance plans with automatic scheduling. The system reminds customers when it's time for their seasonal service and schedules appointments automatically."
    },
    {
      question: "Can my techs complete service reports in the field?",
      answer: "Yes. Techs can log system diagnostics, temps, pressures, and photos right from their phone. Generate detailed service reports and email them to customers on the spot—no paperwork back at the office."
    },
    {
      question: "How much does HVAC software cost?",
      answer: "$89/month flat. Unlimited technicians, unlimited jobs, all features included. No per-user fees, no setup charges. Same price whether you have 1 tech or 20."
    },
    {
      question: "Can I track equipment warranties and service history?",
      answer: "Yes. Store equipment details (make, model, serial number), installation dates, and warranty info. Full service history shows every maintenance visit, repair, and part replaced—all linked to each customer's equipment."
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
      title: 'Electrical Software',
      description: 'Perfect for electricians and electrical contractors',
      path: '/electrical-software',
      icon: '⚡'
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
        title="Best HVAC Software 2026 | $89/mo Unlimited Users | Crew Ops Pro"
        description="The best HVAC software for managing service calls, maintenance contracts, and installations. Track refrigerant, equipment warranties, and seasonal tune-ups. $89/month flat pricing."
        keywords="HVAC software, HVAC service software, heating and cooling software, HVAC contractor software, HVAC business software, air conditioning software"
      />
      <SoftwareApplicationSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.crewopspro.com' },
        { name: 'HVAC Software', url: 'https://www.crewopspro.com/hvac-software' }
      ]} />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'HVAC Software' }
        ]} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ❄️ Built for HVAC Contractors
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              HVAC Software That Keeps Your Business Running Smoothly
            </h1>
            <p className="text-2xl text-gray-600 mb-6">
              Manage service calls, maintenance contracts, and installations from one simple platform. Track refrigerant, equipment warranties, and seasonal tune-ups—all from your phone.
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

      {/* Why HVAC Contractors Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why HVAC Contractors Choose Crew Ops Pro
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🌡️</div>
              <h3 className="text-xl font-semibold mb-2">Equipment Tracking</h3>
              <p className="text-gray-600">
                Store equipment details, warranties, and full service history per unit. Know exactly when each system was installed, last serviced, and what needs attention next.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-2">Seasonal Maintenance</h3>
              <p className="text-gray-600">
                Automate spring and fall tune-ups with recurring maintenance plans. Our <Link to="/scheduling" className="text-blue-600 hover:underline font-semibold">smart scheduling system</Link> sends automatic reminders and keeps you coming back to the same customers year after year.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Refrigerant Compliance</h3>
              <p className="text-gray-600">
                Log refrigerant usage, recovery amounts, and EPA compliance details. Track tech certifications and generate reports for audits. Stay compliant without the paperwork hassle.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center bg-blue-50 p-6 rounded-lg">
            <p className="text-lg text-gray-700">
              <strong>Need all-in-one field service management?</strong> Crew Ops Pro includes <Link to="/jobs-map" className="text-blue-600 hover:underline font-semibold">GPS tracking & dispatch</Link>, <Link to="/invoicing-payments" className="text-blue-600 hover:underline font-semibold">mobile payments</Link>, and <Link to="/outreach-hub" className="text-blue-600 hover:underline font-semibold">customer communication tools</Link> in one platform.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Everything Your HVAC Business Needs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
              <p className="text-gray-600">
                Schedule service calls, installations, and maintenance with drag-and-drop simplicity. GPS tracking shows where your techs are and optimizes routing for efficiency.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-xl font-semibold mb-2">Digital Service Reports</h3>
              <p className="text-gray-600">
                Techs log system temps, pressures, diagnostics, and photos in the field. Generate professional service reports and email them to customers instantly—no back-office data entry.
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
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-xl font-semibold mb-2">Maintenance Contracts</h3>
              <p className="text-gray-600">
                Create recurring service plans with automatic scheduling and billing. Set up spring tune-ups, fall maintenance, and filter changes that repeat year after year.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-xl font-semibold mb-2">Parts & Inventory</h3>
              <p className="text-gray-600">
                Track parts inventory, log materials used per job, and get low-stock alerts. Know your true job costs and profitability by tracking everything that goes out the door.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-xl font-semibold mb-2">Customer Communication</h3>
              <p className="text-gray-600">
                Automated appointment reminders, arrival notifications, and follow-ups via text and email. Keep customers informed without manual calls or texts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real HVAC Businesses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Real HVAC Companies Using CrewOpsPro
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            See how HVAC contractors are managing seasonal demand and maintenance contracts
          </p>

          <div className="space-y-8">
            {/* Case Study 1 - Seasonal Scheduling */}
            <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-8 shadow-lg border-l-4 border-blue-600">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Cool Comfort HVAC</h3>
                  <p className="text-gray-600">Atlanta, GA • 14 technicians • Residential & Commercial</p>
                </div>
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <p className="text-sm font-bold text-green-700">240 more tune-ups/year</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-red-700 mb-2">❌ The Problem:</p>
                  <p className="text-sm text-gray-700">
                    800 maintenance contracts (spring/fall tune-ups). Office called customers manually to schedule = 40 hours/season. 
                    Missed 30% of spring appointments (customers forgot, couldn't reach them). Left money on table.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-blue-700 mb-2">✓ The Solution:</p>
                  <p className="text-sm text-gray-700">
                    Automated seasonal reminders. CrewOpsPro sends email/SMS 2 weeks before: "Spring tune-up due. Book online." 
                    Customers self-schedule. Office only follows up with non-responders.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-green-700 mb-2">📈 The Result:</p>
                  <p className="text-sm text-gray-700">
                    <strong>Tune-up completion rate up from 70% to 90%</strong>. Added 160 tune-ups/season × 2 seasons = 
                    320 more tune-ups/year. @ $150 each = <strong>$48,000/year more revenue</strong>.
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-yellow-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>"Automated reminders doubled our tune-up completion rate. We're actually delivering what customers paid for."</strong>
                  <span className="block mt-2 text-gray-600">- Tom Anderson, Owner</span>
                </p>
              </div>
            </div>

            {/* Case Study 2 - Emergency Dispatch */}
            <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-8 shadow-lg border-l-4 border-red-600">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Arctic Air Solutions</h3>
                  <p className="text-gray-600">Phoenix, AZ • 22 technicians • 70% emergency work</p>
                </div>
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <p className="text-sm font-bold text-green-700">+30 emergency calls/week</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-red-700 mb-2">❌ The Problem:</p>
                  <p className="text-sm text-gray-700">
                    Peak summer: 100+ emergency calls/day. Dispatcher manually assigned techs, lost track of who's where. 
                    Average dispatch time: 25 minutes. Lost 20-25 calls/week (customers called competitors during wait).
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-blue-700 mb-2">✓ The Solution:</p>
                  <p className="text-sm text-gray-700">
                    GPS tracking + automated dispatch. System shows nearest available tech. Dispatcher clicks "Assign" → tech gets push notification. 
                    Average dispatch: 3 minutes (88% faster).
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-green-700 mb-2">📈 The Result:</p>
                  <p className="text-sm text-gray-700">
                    <strong>Captured 30 more emergency calls/week</strong> (faster answer = customers don't hang up). 
                    30 calls/week × $450 average = $13,500/week = <strong>$54,000/month summer revenue</strong>.
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-yellow-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>"During summer heat waves, every minute matters. GPS dispatch lets us grab emergency calls competitors can't handle."</strong>
                  <span className="block mt-2 text-gray-600">- Sarah Martinez, Operations Director</span>
                </p>
              </div>
            </div>

            {/* Case Study 3 - Maintenance Contracts */}
            <div className="bg-gradient-to-r from-green-50 to-white rounded-xl p-8 shadow-lg border-l-4 border-green-600">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Premier Climate Control</h3>
                  <p className="text-gray-600">Dallas, TX • 10 technicians • Maintenance-focused</p>
                </div>
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <p className="text-sm font-bold text-green-700">$18,000/mo recurring</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-red-700 mb-2">❌ The Problem:</p>
                  <p className="text-sm text-gray-700">
                    Had 400 maintenance contracts but no automated billing. Office manually invoiced each customer quarterly. 
                    40% lapsed (forgot to renew). Losing $120,000/year in maintenance revenue.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-blue-700 mb-2">✓ The Solution:</p>
                  <p className="text-sm text-gray-700">
                    Set up recurring billing. CrewOpsPro charges credit cards automatically monthly/quarterly. 
                    Sends renewal reminders 30 days before expiration. Auto-renews unless customer cancels.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-green-700 mb-2">📈 The Result:</p>
                  <p className="text-sm text-gray-700">
                    <strong>Renewal rate up from 60% to 95%</strong>. Added 140 contracts @ $450/year = $63,000/year = 
                    <strong>$5,250/month more recurring revenue</strong>. Plus sold 200 new contracts = $90,000/year more.
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-yellow-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>"Automated billing saved our maintenance business. Customers stay on auto-renew and we're not chasing payments."</strong>
                  <span className="block mt-2 text-gray-600">- Mike Chen, General Manager</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/signup" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-lg font-semibold text-xl transition-colors shadow-xl"
            >
              Start Your Free Trial - Join 250+ HVAC Companies
            </Link>
            <p className="text-gray-600 mt-4">14-day free trial • No credit card required • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Simple Pricing for HVAC Contractors
          </h2>
          <p className="text-2xl text-blue-100 mb-8">
            No per-technician fees. No contracts. No surprises.
          </p>
          <div className="bg-white text-gray-900 rounded-2xl p-12 max-w-xl mx-auto">
            <div className="mb-6">
              <span className="text-6xl font-bold">$89</span>
              <span className="text-xl text-gray-500">/month</span>
            </div>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Unlimited technicians (no per-user fees)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Unlimited jobs & service calls</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Equipment & warranty tracking</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Refrigerant & EPA compliance logging</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Maintenance contract management</span>
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
            Ready to Run Your HVAC Business Better?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join HVAC contractors who switched from paper service tickets and complicated software to Crew Ops Pro.
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
