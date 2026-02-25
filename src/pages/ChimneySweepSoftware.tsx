import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';
import RelatedPages from '../components/RelatedPages';
import CalculateSavingsButton from '../components/CalculateSavingsButton';
import csiaInspectionImage from '../assets/crewopspro-chimneysweep.png';

export default function ChimneySweepSoftware() {
  const [selectedLevel, setSelectedLevel] = useState<'level1' | 'level2' | 'level3'>('level1');
  
  const csiaLevels = {
    level1: {
      name: 'CSIA Level 1',
      description: 'Standard Annual Inspection',
      items: ['Visible flue portions', 'Basic soundness check', 'Freedom from deposits', 'Clearance verification']
    },
    level2: {
      name: 'CSIA Level 2',  
      description: 'Required After Changes/Problems',
      items: ['All Level 1 items', 'Video inspection', 'Attic/crawlspace check', 'Appliance condition review']
    },
    level3: {
      name: 'CSIA Level 3',
      description: 'Comprehensive Structural Inspection',
      items: ['All Level 1 & 2 items', 'Removal of components', 'Hidden hazard assessment', 'Structural integrity verification']
    }
  };

  const faqs = [
    {
      question: "Does the software include CSIA inspection checklists?",
      answer: "Yes! CSIA Level 1 and Level 2 inspection checklists are built directly into the mobile app. Your techs can complete inspections in the field with guided checklists that ensure nothing gets missed."
    },
    {
      question: "Can I track creosote levels?",
      answer: "Absolutely. You can log creosote readings (Stage 1, 2, or 3) for each individual flue. Attach photos, track changes over time, and show customers why cleaning is necessary."
    },
    {
      question: "Does it work for both residential and commercial chimneys?",
      answer: "Yes. The software handles both residential and commercial properties. You can track multiple chimneys and flues per property, each with its own inspection history and maintenance records."
    },
    {
      question: "How much does it cost?",
      answer: "$89/month for unlimited users, unlimited jobs, and all features. No per-user fees, no contracts. Start with a 14-day free trial."
    },
    {
      question: "Can I generate CSIA-compliant inspection reports?",
      answer: "Yes. After completing an inspection, you can instantly generate PDF reports that follow CSIA standards. Reports include all checklist items, photos, creosote levels, and recommendations. Email them directly to customers from the app."
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="The Only Field Service Software That Knows What Creosote Is"
        description="Built-in CSIA Level 1, 2, 3 inspection checklists. Creosote tracking. Flue sizing calculators. Finally, software that understands chimney sweeps. $89/month."
        keywords="chimney sweep software, CSIA inspection software, creosote tracking, chimney inspection app, chimney sweep business software, CSIA checklist app"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.crewopspro.com' },
        { name: 'Chimney Sweep Software', url: 'https://www.crewopspro.com/chimney-sweep-software' }
      ]} />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Chimney Sweep Software' }
        ]} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-green-400 text-green-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🏆 #1 Choice for CSIA-Certified Chimney Sweeps
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Finally, Software Built FOR Chimney Sweeps
            </h1>
            <p className="text-2xl text-blue-100 mb-6 max-w-4xl mx-auto">
              Stop adapting generic field service software. Get CSIA inspection checklists, creosote tracking, and flue documentation built right into your mobile app.
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <StarRating />
              <span className="text-white">4.9/5 from 180+ chimney sweep businesses</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              to="/signup" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-lg font-semibold text-xl transition-colors text-center shadow-xl"
            >
              Start Your 14-Day Free Trial
            </Link>
            <CalculateSavingsButton variant="outline" size="lg" className="bg-white text-blue-600 border-white hover:bg-blue-50" />
          </div>
          <p className="text-center text-blue-200">No credit card required • Set up in 5 minutes • Cancel anytime</p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">180+</div>
              <div className="text-gray-600">Chimney Sweep Businesses</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">CSIA Compliant</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$89</div>
              <div className="text-gray-600">Fixed Monthly Price</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Chimney Sweeps Are Switching */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Chimney Sweeps Are Leaving Generic Software
            </h2>
            <p className="text-xl text-gray-600">
              Jobber and Housecall Pro don't understand your business. We built this specifically for you.
            </p>
          </div>

          {/* Image - Now smaller and better positioned */}
          <div className="max-w-2xl mx-auto mb-12">
            <img 
              src={csiaInspectionImage} 
              alt="CSIA Inspection Checklist and Creosote Tracking in Crew Ops Pro Mobile App" 
              className="w-full rounded-lg shadow-lg border-2 border-gray-200"
              loading="lazy"
            />
            <p className="text-center text-gray-600 mt-4 text-sm">
              Complete CSIA inspections and log creosote readings right from your mobile device
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">❌ Generic Software</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Create custom forms yourself</li>
                <li>• No CSIA checklist templates</li>
                <li>• Manual creosote documentation</li>
                <li>• $200-400/month with fees</li>
                <li>• Built for everyone = Built for no one</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-green-500 md:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">✓ Crew Ops Pro</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>• CSIA Level 1, 2, 3 checklists pre-built</strong> - Tap through inspections, never miss an item</li>
                <li><strong>• Creosote tracking per flue</strong> - Log stages 1, 2, 3 with photos and recommendations</li>
                <li><strong>• Flue sizing and damper documentation</strong> - Track measurements that matter</li>
                <li><strong>• $89/month flat rate</strong> - Unlimited users, no surprise fees</li>
                <li><strong>• Built by someone who gets your business</strong> - Features chimney sweeps actually need</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive CSIA Level Selector */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              All CSIA Inspection Levels Built In
            </h2>
            <p className="text-xl text-gray-600">
              Select a level to see what's included in each inspection checklist
            </p>
          </div>

          {/* Level Selector */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => setSelectedLevel('level1')}
              className={`px-6 py-4 rounded-lg font-semibold text-lg transition-all ${
                selectedLevel === 'level1'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Level 1 Inspection
            </button>
            <button
              onClick={() => setSelectedLevel('level2')}
              className={`px-6 py-4 rounded-lg font-semibold text-lg transition-all ${
                selectedLevel === 'level2'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Level 2 Inspection
            </button>
            <button
              onClick={() => setSelectedLevel('level3')}
              className={`px-6 py-4 rounded-lg font-semibold text-lg transition-all ${
                selectedLevel === 'level3'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Level 3 Inspection
            </button>
          </div>

          {/* Level Details */}
          <div className="bg-blue-50 rounded-xl p-8 shadow-md">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-5xl">📋</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {csiaLevels[selectedLevel].name}
                </h3>
                <p className="text-lg text-gray-700">{csiaLevels[selectedLevel].description}</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4 text-lg">Included in this checklist:</h4>
              <ul className="space-y-3">
                {csiaLevels[selectedLevel].items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-700 mb-4">
                <strong>Works offline</strong> - Complete inspections in basements with no cell service. Everything syncs when you're back online.
              </p>
              <Link 
                to="/signup" 
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Start Your Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Chimney Sweeps Are Saying
            </h2>
            <p className="text-xl text-gray-600">
              Real businesses that switched from generic software
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-blue-600">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "I was using Jobber for 2 years and had to manually create every CSIA checklist. With Crew Ops Pro, they're already built in. Saves me 15 minutes per inspection."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">Robert M.</p>
                <p className="text-gray-600 text-sm">Summit Chimney Services</p>
                <p className="text-gray-500 text-sm">Denver, CO</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-blue-600">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The creosote tracking feature is a game changer. I can show homeowners the Stage 2 buildup with photos right on my phone. Converts estimates to cleanings instantly."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">Linda K.</p>
                <p className="text-gray-600 text-sm">Fireplace & Chimney Experts</p>
                <p className="text-gray-500 text-sm">Portland, OR</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-blue-600">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "We were paying $340/month for Housecall Pro with 3 techs. Switched to Crew Ops Pro at $89 flat rate. Same features plus the chimney-specific tools we actually needed."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">Tom W.</p>
                <p className="text-gray-600 text-sm">WarmHearth Chimney Co.</p>
                <p className="text-gray-500 text-sm">Nashville, TN</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Workflow Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Stop Fighting With Paper Checklists
            </h2>
            <p className="text-xl text-gray-600">
              See how Crew Ops Pro transforms your inspection workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-red-50 rounded-xl p-8 border-2 border-red-200">
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">😤</div>
                <h3 className="text-2xl font-bold text-gray-900">Before Crew Ops Pro</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span>Print CSIA checklists before each job</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span>Handwrite notes and creosote levels</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span>Take photos with personal phone</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span>Drive back to office to type everything up</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span>Email PDF reports manually</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span>Create separate estimate in different software</span>
                </li>
              </ul>
              <div className="mt-6 text-center text-gray-600 font-semibold">
                ⏱️ 45 minutes of admin per inspection
              </div>
            </div>

            {/* After */}
            <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200">
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">😊</div>
                <h3 className="text-2xl font-bold text-gray-900">After Crew Ops Pro</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span><strong>Open app</strong> - Inspection checklist loads automatically</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span><strong>Tap through checklist</strong> - Voice notes and creosote dropdown</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span><strong>Attach photos</strong> - Right in the app, organized by flue</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span><strong>Generate report on-site</strong> - Professional PDF in 30 seconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span><strong>Email from app</strong> - Customer has report before you leave</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span><strong>Convert to estimate</strong> - One tap, customer can approve instantly</span>
                </li>
              </ul>
              <div className="mt-6 text-center text-green-700 font-semibold">
                ⏱️ 5 minutes of admin per inspection
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-blue-600 text-white inline-block px-8 py-4 rounded-lg text-2xl font-bold mb-4">
              Save 40 minutes per inspection = 6+ hours per week
            </div>
            <p className="text-gray-600 text-lg">That's 312 hours per year back in your life</p>
          </div>
        </div>
      </section>

      {/* Complete Features List */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-gray-600">
              Chimney-specific features + complete field service management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Chimney-Specific Features */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span>🔥</span> Chimney-Specific
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700"><strong>CSIA Level 1, 2, 3</strong> checklists</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700"><strong>Creosote tracking</strong> (Stages 1-3)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Flue measurements & documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Damper & cap inspections</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Photo documentation per flue</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Seasonal reminder automation</span>
                </li>
              </ul>
            </div>

            {/* Business Management */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span>💼</span> Business Management
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700"><strong>Unlimited</strong> users & technicians</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700"><strong>Unlimited</strong> jobs & customers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Scheduling & dispatch</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Estimates & invoicing</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Online payments (credit card, ACH)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">QuickBooks integration</span>
                </li>
              </ul>
            </div>

            {/* Mobile & Support */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span>📱</span> Mobile & Support
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700"><strong>Works offline</strong> - No cell service needed</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">iOS & Android apps</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">GPS tracking & routing</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Customer portal & booking</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">24/7 email & chat support</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Free onboarding & training</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/signup" 
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-5 rounded-lg font-semibold text-xl transition-colors"
            >
              Start Your 14-Day Free Trial
            </Link>
            <p className="text-gray-600 mt-4">No credit card required • Set up in minutes</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            One Price. Everything Included.
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            No per-user fees. No contracts. No surprise charges.
          </p>
          <div className="bg-white border-4 border-blue-600 rounded-2xl shadow-2xl p-12 mb-8">
            <div className="text-6xl font-bold text-gray-900 mb-4">$89</div>
            <div className="text-2xl text-gray-600 mb-6">per month</div>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700"><strong>CSIA Inspection Checklists</strong> - Levels 1, 2, and 3</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700"><strong>Creosote Tracking</strong> - Log readings per flue</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700"><strong>Unlimited</strong> users & technicians</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700"><strong>Unlimited</strong> jobs & estimates</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Scheduling, invoicing, payments</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">QuickBooks integration</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">iOS & Android apps</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">24/7 support</span>
              </li>
            </ul>
            <Link 
              to="/signup" 
              className="block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Start Your 14-Day Free Trial
            </Link>
            <p className="text-gray-600 mt-4 text-sm">Cancel anytime. No contracts.</p>
          </div>

          {/* 30-Day Money-Back Guarantee */}
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 mt-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="text-5xl">💰</div>
              <h3 className="text-2xl font-bold text-gray-900">30-Day Money-Back Guarantee</h3>
            </div>
            <p className="text-lg text-gray-700">
              Try Crew Ops Pro risk-free. If it doesn't save you time and improve your business in the first 30 days, we'll refund 100% of your money. No questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            How We Compare to Generic Field Service Software
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center p-4 font-semibold text-blue-600">Crew Ops Pro</th>
                  <th className="text-center p-4 font-semibold text-gray-600">Jobber</th>
                  <th className="text-center p-4 font-semibold text-gray-600">Housecall Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">CSIA Inspection Checklists</td>
                  <td className="text-center p-4">
                    <span className="text-green-600 text-2xl">✓</span>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-red-600">✗</span>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-red-600">✗</span>
                  </td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">Creosote Tracking</td>
                  <td className="text-center p-4">
                    <span className="text-green-600 text-2xl">✓</span>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-red-600">✗</span>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-red-600">✗</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Works Offline</td>
                  <td className="text-center p-4">
                    <span className="text-green-600 text-2xl">✓</span>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-green-600 text-xl">✓</span>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-green-600 text-xl">✓</span>
                  </td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">Monthly Price (Unlimited Users)</td>
                  <td className="text-center p-4">
                    <span className="text-blue-600 font-bold">$89</span>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-gray-600">$219+</span>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-gray-600">$188+</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/competitors" 
              className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              See Full Comparison with All Competitors →
            </Link>
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
            description: "Stay connected with clients through mass emails, SMS campaigns, and automated follow-ups.",
            path: "/outreach-hub",
            icon: "�"
          },
          {
            title: "Scheduling Features",
            description: "Drag-and-drop calendar, route optimization, and automated reminders.",
            path: "/scheduling",
            icon: "📅"
          },
          {
            title: "Handyman Software",
            description: "Software for multi-trade contractors managing various services.",
            path: "/handyman-software",
            icon: "🔧"
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

      <FAQSchema faqs={faqs} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to See Why Chimney Sweeps Are Switching?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your free 14-day trial. Set up in minutes.
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
