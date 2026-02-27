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
        title="Handyman Software That Lets You Charge Different Rates for Different Trades"
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
