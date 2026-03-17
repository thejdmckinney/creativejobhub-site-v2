import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTAButton from '../components/CTAButton';
import csiaChecklistImage from '../assets/csia-inspection-checklist.webp';
import chimneyAppImage from '../assets/crewopspro-chimneysweep.webp';

export default function ChimneyInspectionSuite() {
  const features = [
    {
      title: 'CSIA-Compliant Checklists',
      description: 'Pre-loaded with official CSIA Level 1, 2, and 3 inspection checklists. Every item, every standard, built right into the app—no paper forms or clipboards needed.'
    },
    {
      title: 'Creosote Tracking',
      description: 'Log creosote buildup levels, document stages 1-3, and track changes over time. See historical data for repeat customers to identify patterns and recommend cleaning schedules.'
    },
    {
      title: 'Photo Documentation',
      description: 'Capture photos of chimney conditions, flue liners, caps, crowns, and creosote buildup. Attach directly to inspection reports with timestamps and location data.'
    },
    {
      title: 'Instant Client Delivery',
      description: 'Send complete inspection reports directly to customers via email or text the moment you finish. Include photos, findings, and recommendations in a professional PDF.'
    },
    {
      title: 'Branded PDF Reports',
      description: 'Generate professional inspection reports with your company logo, contact info, and licensing details. Reports are automatically formatted to CSIA standards.'
    },
    {
      title: 'Offline Capability',
      description: 'Complete inspections even without internet connection. Data syncs automatically when you are back online—perfect for rural properties or basements with poor signal.'
    }
  ];

  const workflowSteps = [
    {
      number: '1',
      title: 'Navigate to Property',
      description: 'Tech opens the job on their phone, navigates to the property in the app. Property history, previous inspection notes, and chimney specs are right there.'
    },
    {
      number: '2',
      title: 'Access Chimney Tab',
      description: 'Select the Chimney tab to view all chimneys on the property. Each chimney has its own inspection history, specifications, and maintenance records.'
    },
    {
      number: '3',
      title: 'Start Inspection',
      description: 'Choose inspection level (CSIA Level 1, 2, or 3). The CSIA-compliant checklist loads with every required inspection point. Check off items as you go.'
    },
    {
      number: '4',
      title: 'Document Conditions',
      description: 'Take photos of flue, crown, cap, and interior conditions. Log creosote stage, note any defects, cracks, or safety concerns. Add detailed notes for each finding.'
    },
    {
      number: '5',
      title: 'Generate Report',
      description: 'Complete the inspection and tap Generate Report. App creates a professional PDF with all photos, findings, creosote tracking data, and CSIA compliance details.'
    },
    {
      number: '6',
      title: 'Send to Customer',
      description: 'Send report directly from the app via email or text. Customer receives inspection results immediately. Create quotes for recommended repairs on the spot.'
    }
  ];

  return (
    <>
      <SEO 
        title="Chimney Inspection Suite - CSIA Compliant Checklists & Creosote Tracking"
        description="Complete CSIA-compliant chimney inspections on your phone. Pre-loaded Level 1, 2, 3 checklists, creosote tracking, photo documentation, and instant PDF reports. Built for chimney sweeps."
        keywords="chimney inspection software, CSIA compliant inspection app, chimney sweep software, creosote tracking, chimney inspection checklist, Level 1 2 3 inspection, chimney inspection reports, chimney sweep app"
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-6 bg-gradient-to-br from-orange-50 via-red-50 to-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                🔥 Built Specifically for Chimney Sweeps
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Chimney Inspection Suite
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
                Complete CSIA-Compliant Inspections Right From Your Phone
              </p>

              <p className="text-lg text-gray-600 mb-8">
                Pre-loaded Level 1, 2, and 3 checklists. Creosote tracking. Photo documentation. 
                Instant PDF reports. Everything you need to run professional chimney inspections—no paper, no clipboards, no office follow-up.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <CTAButton 
                  text="Start Free Trial" 
                  url="/signup"
                  style="primary"
                />
                <CTAButton 
                  text="See All Features" 
                  url="/chimney-sweep-software"
                  style="secondary"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  ✓ <span>CSIA Level 1, 2, 3 Checklists</span>
                </div>
                <div className="flex items-center gap-2">
                  ✓ <span>Creosote Tracking Over Time</span>
                </div>
                <div className="flex items-center gap-2">
                  ✓ <span>Branded PDF Reports</span>
                </div>
                <div className="flex items-center gap-2">
                  ✓ <span>Works Offline</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-xl shadow-2xl overflow-hidden border-4 border-white">
                <img 
                  src={csiaChecklistImage}
                  alt="CSIA Compliant Chimney Inspection Checklist on Mobile"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Stop Fighting Paper Forms and Missing Checklist Items
                </h2>
                <div className="space-y-4 text-gray-600 text-lg">
                  <p>
                    <strong className="text-red-600">The Old Way:</strong> Carry paper CSIA checklists, try to remember every inspection point, take photos on your phone, then spend an hour back at the office typing up reports and emailing customers. Miss a checklist item? Now you have got a compliance issue.
                  </p>
                  <p>
                    <strong className="text-green-600">The Crew Ops Pro Way:</strong> Complete CSIA-compliant inspections entirely on your phone. Every checklist item is built in. Take photos as you go. Tap Send Report and the customer has a professional PDF in their inbox before you leave the driveway.
                  </p>
                </div>
                <div className="mt-8 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-600">
                  <p className="text-gray-900 font-semibold mb-2">
                    I used to spend 30 minutes per inspection back at the office writing reports. 
                    Now I send reports from the driveway. Customers love getting results immediately, 
                    and I get home an hour earlier every day.
                  </p>
                  <p className="text-gray-600 text-sm">
                    — Tom Bradley, Bradley Chimney Service, Indianapolis
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={chimneyAppImage}
                  alt="Chimney sweep using mobile inspection app"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                How Chimney Inspections Work
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From arrival to customer report delivery—all on your phone
              </p>
            </div>

            <div className="space-y-12">
              {workflowSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                        {step.number}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    {index === 0 && (
                      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 border border-orange-100">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Property Information Available:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-orange-600 text-xl">•</span>
                            <span>Customer contact info and service address</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-orange-600 text-xl">•</span>
                            <span>Full inspection history with dates and findings</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-orange-600 text-xl">•</span>
                            <span>Chimney specs, age, and previous service notes</span>
                          </li>
                        </ul>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 border border-red-100">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Chimney Details Tracked:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-red-600 text-xl">•</span>
                            <span>Multiple chimneys per property supported</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-red-600 text-xl">•</span>
                            <span>Creosote history tracked over time for each chimney</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-red-600 text-xl">•</span>
                            <span>Past photos, repairs, and maintenance records</span>
                          </li>
                        </ul>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 border border-yellow-100">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">CSIA Checklist Items:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-yellow-600 text-xl">•</span>
                            <span>Level 1: Visual inspection of accessible areas</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-yellow-600 text-xl">•</span>
                            <span>Level 2: Video scanning and accessible areas</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-yellow-600 text-xl">•</span>
                            <span>Level 3: Full structural evaluation checklist</span>
                          </li>
                        </ul>
                      </div>
                    )}
                    {index === 3 && (
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-100">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Documentation Features:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-blue-600 text-xl">•</span>
                            <span>Take unlimited photos with auto-timestamps</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-blue-600 text-xl">•</span>
                            <span>Select creosote stage (1, 2, or 3) with visual guide</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-blue-600 text-xl">•</span>
                            <span>Voice-to-text notes for faster documentation</span>
                          </li>
                        </ul>
                      </div>
                    )}
                    {index === 4 && (
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Report Includes:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-green-600 text-xl">•</span>
                            <span>Branded header with your company logo and info</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-green-600 text-xl">•</span>
                            <span>All photos organized by inspection area</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-green-600 text-xl">•</span>
                            <span>CSIA compliance certification and checklist results</span>
                          </li>
                        </ul>
                      </div>
                    )}
                    {index === 5 && (
                      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-100">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Instant Delivery Options:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-purple-600 text-xl">•</span>
                            <span>Email PDF directly from the job site</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-purple-600 text-xl">•</span>
                            <span>Text message with report link to customer</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-purple-600 text-xl">•</span>
                            <span>Create repair quote right from inspection findings</span>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Everything You Need for Professional Inspections
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive tools designed specifically for chimney inspection workflows
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-6 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Running Professional CSIA-Compliant Inspections Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join chimney sweeps who are saving hours on paperwork, impressing customers with instant reports, 
              and closing more repair jobs with professional inspection documentation.
            </p>
            <div className="mb-6">
              <CTAButton 
                text="Start Free Trial" 
                url="/signup"
                style="success"
              />
            </div>
            <p className="text-gray-400 text-sm mb-8">
              Free 14-day trial • $89/month • Unlimited inspections • All features included
            </p>
            <div className="border-t border-gray-700 pt-8">
              <Link 
                to="/chimney-sweep-software"
                className="text-orange-400 hover:text-orange-300 font-semibold"
              >
                ← Back to Chimney Sweep Software Features
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
