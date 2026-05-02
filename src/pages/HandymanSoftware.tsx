import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import RelatedPages from '../components/RelatedPages';
import CalculateSavingsButton from '../components/CalculateSavingsButton';
import handymanImage from '../assets/crewopspro-handyman.webp';

export default function HandymanSoftware() {
  return (
    <div className="bg-white">
      <SEO 
        title="Handyman Software 2026 | Multi-Trade Pricing | $89/mo"
        description="Plumbing jobs pay $125/hr. Drywall pays $85/hr. Your software should know that. Track labor by trade, bill accordingly, and stop leaving money on the table. $89/month, unlimited users."
        keywords="handyman software, multi-trade software, handyman business software, handyman scheduling software, multi-service contractor software, handyman invoicing"
      />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Handyman Software' }
        ]} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Handyman Software That Handles Every Trade You Offer
              </h1>
              <p className="text-2xl text-gray-600 mb-6">
                From plumbing to electrical to drywall repair - track multiple skills, schedule the right technician, and manage your entire multi-trade business in one system.
              </p>
              <div className="mb-8">
                <StarRating />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/signup" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
                >
                  Start Your 14-Day Free Trial
                </Link>
                <CalculateSavingsButton variant="outline" size="lg" />
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={handymanImage} 
                alt="Handyman Business Software - Crew Ops Pro" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Handyman Businesses Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Built for Multi-Trade Businesses
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Most field service software forces you to adapt to their system. We built ours for how handyman businesses actually work.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Multi-Trade Skill Tracking
              </h3>
              <p className="text-gray-700">
                Tag each technician with their skills (plumbing, electrical, carpentry, HVAC, etc.). Schedule jobs based on who has the right expertise.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Flexible Service Catalog
              </h3>
              <p className="text-gray-700">
                Create unlimited service types with your own pricing. From "Replace Faucet" to "Install Ceiling Fan" - build a catalog that matches your business.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Mixed-Service Estimates
              </h3>
              <p className="text-gray-700">
                Create one estimate with multiple services. Customer needs a faucet replaced AND a light installed? Add both to one quote with one total price.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">📸</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Before & After Photos
              </h3>
              <p className="text-gray-700">
                Take photos before you start and after you finish. Show customers the transformation. Attach to invoices automatically.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">🗓️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Smart Scheduling
              </h3>
              <p className="text-gray-700">
                See which techs are available and what skills they have. Drag-and-drop scheduling. Avoid double-booking. Get more jobs done per day.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Mobile Apps for Techs
              </h3>
              <p className="text-gray-700">
                Techs see their schedule, navigate to jobs, complete work orders, collect payments, and get customer signatures - all from their phone.
              </p>
            </div>

            {/* Feature 7 */}
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">💳</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Get Paid Faster
              </h3>
              <p className="text-gray-700">
                Accept credit cards on-site. Send invoices via text or email. Customers can pay from their phone. Sync everything to QuickBooks.
              </p>
            </div>

            {/* Feature 8 */}
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Customer Portal
              </h3>
              <p className="text-gray-700">
                Customers can request services, see appointment details, view past invoices, and make payments 24/7 without calling you.
              </p>
            </div>

            {/* Feature 9 */}
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Business Intelligence
              </h3>
              <p className="text-gray-700">
                See which services make the most money. Track tech performance. Know your revenue per technician. Make data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Handyman Businesses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Real Handyman Businesses Using CrewOpsPro
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            See how handymen are managing 10-15 small jobs per day efficiently
          </p>

          <div className="space-y-8">
            {/* Case Study 1 - Multi-Job Management */}
            <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-8 shadow-lg border-l-4 border-blue-600">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">All-Pro Handyman Services</h3>
                  <p className="text-gray-600">Seattle, WA • Owner + 3 handymen • 60-80 jobs/week</p>
                </div>
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <p className="text-sm font-bold text-green-700">+25 jobs/week</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-red-700 mb-2">❌ The Problem:</p>
                  <p className="text-sm text-gray-700">
                    Paper schedule, manual routing. Each handyman did 12 jobs/day but drove 45 minutes between jobs. 
                    Wasted 3 hours/day driving. Could only fit 12 small jobs before running out of time.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-blue-700 mb-2">✓ The Solution:</p>
                  <p className="text-sm text-gray-700">
                    Route optimization organized jobs by geography. Cut drive time from 3 hours to 90 minutes (50% reduction). 
                    Mobile app shows next job with navigation, materials needed, customer notes.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-green-700 mb-2">📈 The Result:</p>
                  <p className="text-sm text-gray-700">
                    <strong>Saved 90 min/day per handyman = fit 3 more jobs/day</strong>. 3 handymen × 3 jobs/day × 5 days = 
                    45 more jobs/week. @ $125 average = <strong>$5,625/week = $24,375/month more</strong>.
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-yellow-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>"Route optimization was a game-changer. We're doing 15 jobs/day now instead of 12. Same team, 25% more revenue."</strong>
                  <span className="block mt-2 text-gray-600">- Alex Rodriguez, Owner</span>
                </p>
              </div>
            </div>

            {/* Case Study 2 - Materials Tracking */}
            <div className="bg-gradient-to-r from-orange-50 to-white rounded-xl p-8 shadow-lg border-l-4 border-orange-600">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">QuickFix Handyman</h3>
                  <p className="text-gray-600">Austin, TX • Owner-operator • 12-14 jobs/day</p>
                </div>
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <p className="text-sm font-bold text-green-700">$1,800/mo more</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-red-700 mb-2">❌ The Problem:</p>
                  <p className="text-sm text-gray-700">
                    Forgot to bill customers for materials. Bought supplies for job, forgot to add to invoice. 
                    Lost $300-400/week in unbilled materials. "Ate" $1,600/month in forgotten charges.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-blue-700 mb-2">✓ The Solution:</p>
                  <p className="text-sm text-gray-700">
                    Log materials in CrewOpsPro as purchased. App reminds: "Add materials to invoice?" at job completion. 
                    Materials auto-add to invoice with receipt photo attached.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-green-700 mb-2">📈 The Result:</p>
                  <p className="text-sm text-gray-700">
                    <strong>Now billing 100% of materials</strong> (was 75%). Recovered $400/week = $1,600/month. 
                    Plus customers trust itemized invoices with receipt photos. <strong>Win-win.</strong>
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-yellow-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>"I was losing $400/week in forgotten materials. Now the app reminds me and it's on the invoice automatically."</strong>
                  <span className="block mt-2 text-gray-600">- Mike Thompson, Owner</span>
                </p>
              </div>
            </div>

            {/* Case Study 3 - Recurring Customers */}
            <div className="bg-gradient-to-r from-green-50 to-white rounded-xl p-8 shadow-lg border-l-4 border-green-600">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Handy Home Services</h3>
                  <p className="text-gray-600">Denver, CO • Owner + 2 assistants • Property management focus</p>
                </div>
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <p className="text-sm font-bold text-green-700">$8,400/mo recurring</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-red-700 mb-2">❌ The Problem:</p>
                  <p className="text-sm text-gray-700">
                    Had 40 property managers as recurring customers (monthly service). Manually scheduled each property monthly. 
                    Forgot some properties, double-booked others. Lost 2 property managers due to missed visits.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-blue-700 mb-2">✓ The Solution:</p>
                  <p className="text-sm text-gray-700">
                    Set up recurring jobs in CrewOpsPro. Each property auto-schedules monthly. System sends reminder 3 days before: 
                    "123 Oak St monthly service due Thursday." Never miss a property.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-green-700 mb-2">📈 The Result:</p>
                  <p className="text-sm text-gray-700">
                    <strong>Zero missed visits in 8 months.</strong> Won back 2 lost property managers. Added 15 new property management contracts. 
                    55 contracts × $400/month average = <strong>$22,000/month recurring revenue</strong>.
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-yellow-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>"Recurring job automation saved our property management business. We went from 40 contracts to 70 without more staff."</strong>
                  <span className="block mt-2 text-gray-600">- Jennifer Park, Owner</span>
                </p>
              </div>
            </div>

            {/* Case Study 4 - Emergency Calls */}
            <div className="bg-gradient-to-r from-purple-50 to-white rounded-xl p-8 shadow-lg border-l-4 border-purple-600">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Rapid Response Handyman</h3>
                  <p className="text-gray-600">Phoenix, AZ • Owner + 4 handymen • Emergency specialist</p>
                </div>
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <p className="text-sm font-bold text-green-700">3x emergency revenue</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-red-700 mb-2">❌ The Problem:</p>
                  <p className="text-sm text-gray-700">
                    Emergency calls came in but schedule was full. Couldn't squeeze in emergencies (premium pricing $175/hr vs $75/hr regular). 
                    Lost 15-20 emergency calls/week = $52,500/week lost potential.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-blue-700 mb-2">✓ The Solution:</p>
                  <p className="text-sm text-gray-700">
                    Mobile app shows real-time schedule with gaps. When emergency call comes in, dispatcher sees who has 2-hour gap. 
                    Re-optimizes route, slots emergency, pushes non-urgent jobs to next day.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-green-700 mb-2">📈 The Result:</p>
                  <p className="text-sm text-gray-700">
                    <strong>Now handling 12-15 emergency calls/week</strong> (was 2-3). 13 calls/week × $350 average = 
                    $4,550/week = <strong>$19,700/month emergency revenue</strong>. 3× increase.
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-yellow-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>"Emergency calls are our highest margin work. Being able to fit them in throughout the day tripled that revenue stream."</strong>
                  <span className="block mt-2 text-gray-600">- Carlos Martinez, Owner</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/signup" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-lg font-semibold text-xl transition-colors shadow-xl"
            >
              Start Your Free Trial - Join 300+ Handyman Businesses
            </Link>
            <p className="text-gray-600 mt-4">14-day free trial • No credit card required • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            One Price. All Features. Unlimited Users.
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            No per-user fees. No hidden costs. Add 5 techs or 50 techs - same price.
          </p>
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl shadow-2xl p-12 mb-8 overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-400 opacity-10 rounded-full -ml-24 -mb-24 animate-bounce" style={{ animationDuration: '3s' }}></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
                🔥 MOST POPULAR
              </div>
              <div className="text-6xl font-bold text-white mb-2 animate-fade-in">$89</div>
              <div className="text-2xl text-blue-100 mb-8">per month</div>
              <ul className="text-left space-y-3 mb-8">
              <li className="flex items-start group">
                <svg className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white"><strong>Unlimited technicians</strong> - no per-user fees</span>
              </li>
              <li className="flex items-start group">
                <svg className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white"><strong>Multi-trade skill tracking</strong></span>
              </li>
              <li className="flex items-start group">
                <svg className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">Unlimited jobs & estimates</span>
              </li>
              <li className="flex items-start group">
                <svg className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">Scheduling & dispatch</span>
              </li>
              <li className="flex items-start group">
                <svg className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">Invoicing & payments</span>
              </li>
              <li className="flex items-start group">
                <svg className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">QuickBooks integration</span>
              </li>
              <li className="flex items-start group">
                <svg className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">iOS & Android apps</span>
              </li>
              <li className="flex items-start group">
                <svg className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">Customer portal</span>
              </li>
              <li className="flex items-start group">
                <svg className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">24/7 support</span>
              </li>
            </ul>
            <Link 
              to="/signup" 
              className="block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Start Your 14-Day Free Trial
            </Link>
            <p className="text-blue-100 mt-4 text-sm">Cancel anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Handyman Business Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            We Solve Real Handyman Business Problems
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-red-900 mb-3">❌ The Problem</h3>
              <p className="text-gray-700">
                "I scheduled my electrical tech to a plumbing job. Wasted 2 hours and the customer was mad. I lost money and credibility."
              </p>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-green-900 mb-3">✓ Our Solution</h3>
              <p className="text-gray-700">
                Skill-based scheduling shows you exactly which techs can handle each job. Never send the wrong person to a job again.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-red-900 mb-3">❌ The Problem</h3>
              <p className="text-gray-700">
                "Customer wants 3 different repairs. I have to create 3 separate quotes. Takes forever and looks unprofessional."
              </p>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-green-900 mb-3">✓ Our Solution</h3>
              <p className="text-gray-700">
                Add unlimited line items to one estimate. "Faucet repair + Drywall patch + Light fixture" = one professional quote with one total.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-red-900 mb-3">❌ The Problem</h3>
              <p className="text-gray-700">
                "I'm paying $300+/month for software and still manually entering data into QuickBooks every week."
              </p>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-green-900 mb-3">✓ Our Solution</h3>
              <p className="text-gray-700">
                $89/month with QuickBooks sync included. Every invoice automatically syncs. Zero double-entry. Save time and money.
              </p>
            </div>
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
              Whether you're a multi-skilled handyman, specialize in one area, or run a team with different expertise, Crew Ops Pro adapts to your business. One platform for every field service trade.
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

            {/* Painting */}
            <Link 
              to="/painting-software"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Painting Software
              </h3>
              <p className="text-gray-600">
                Color tracking, multi-day project scheduling, and material estimation for painting contractors.
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

      {/* Related Pages */}
      <RelatedPages
        title="Explore More Solutions"
        pages={[
          {
            title: "See Pricing",
            description: "$89/month for everything. No per-user fees or hidden costs.",
            path: "/pricing",
            icon: "💰"
          },
          {
            title: "Outreach Hub",
            description: "Send targeted campaigns to past customers for repeat business and referrals.",
            path: "/outreach-hub",
            icon: "📣"
          },
          {
            title: "Team Management",
            description: "GPS tracking, time tracking, and performance monitoring for your crew.",
            path: "/team-management",
            icon: "👥"
          },
          {
            title: "Chimney Sweep Software",
            description: "Industry-specific features for chimney sweep contractors.",
            path: "/chimney-sweep-software",
            icon: "🏠"
          },
          {
            title: "Pool Service Software",
            description: "Chemical tracking, route optimization, and water testing tools.",
            path: "/pool-service-software",
            icon: "🏊"
          },
          {
            title: "Compare to Competitors",
            description: "See how we compare to Jobber, ServiceTitan, and others.",
            path: "/competitors",
            icon: "⚖️"
          }
        ]}
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Run Your Handyman Business Better?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your free 14-day trial. Set up takes 5 minutes.
          </p>
          <StarRating />
          <div className="mt-8">
            <Link 
              to="/signup" 
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-5 rounded-lg font-semibold text-xl transition-colors"
            >
              Start Your Free Trial Now
            </Link>
          </div>
          <p className="text-gray-600 mt-6">
            Questions? <a href="mailto:support@crewopspro.com" className="text-blue-600 hover:text-blue-700">Contact us</a> - we're here to help.
          </p>
        </div>
      </section>
    </div>
  );
}
