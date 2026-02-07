import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import schedulingPageImage from '../assets/scheduling-page.png';

export default function SchedulingFeatures() {
  return (
    <div className="bg-white">
      <SEO 
        title="Smart Scheduling Features | Crew Ops Pro"
        description="Drag-and-drop calendar, emergency dispatch, conflict alerts, and auto-assignment. Stop double-booking and manage your field team efficiently."
        keywords="job scheduling software, drag and drop calendar, emergency dispatch, field service scheduling, technician scheduling"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stop Double-Booking Your Best Techs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Smart scheduling that prevents conflicts, handles emergencies, and keeps your field team running efficiently - all from one visual calendar.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-2xl border border-gray-200 max-w-5xl mx-auto">
            <img 
              src={schedulingPageImage} 
              alt="Crew Ops Pro scheduling calendar showing drag-and-drop interface, tech assignments, and job timeline" 
              className="w-full"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Everything You Need to Schedule Smarter
          </h2>

          <div className="space-y-20">
            {/* Drag-and-Drop Calendar */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  DRAG & DROP
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Visual Calendar That Actually Works
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  No more juggling sticky notes or managing multiple calendars. See your entire team's schedule at a glance and move jobs around with a simple drag-and-drop.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">Day, Week, and Month Views</span>
                      <p className="text-gray-600">Switch between views to plan ahead or focus on today's jobs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">Color-Coded by Tech</span>
                      <p className="text-gray-600">Instantly see which tech is assigned to each job</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">Real-Time Updates</span>
                      <p className="text-gray-600">Changes sync instantly across office and mobile apps</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Quick Stats</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-600">Schedule Efficiency</span>
                        <span className="font-bold text-blue-600">+40%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-600">Double-Bookings</span>
                        <span className="font-bold text-green-600">-95%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: '95%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-600">Time Saved/Week</span>
                        <span className="font-bold text-blue-600">8 hrs</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conflict Alerts */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-red-50 rounded-lg p-8">
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
                  <div className="flex items-start">
                    <svg className="w-8 h-8 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">⚠️ Schedule Conflict Detected</h4>
                      <p className="text-gray-700 mb-3">Mike is already scheduled for "HVAC Install" from 2:00 PM - 4:00 PM</p>
                      <div className="space-y-2">
                        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold">
                          Assign to Different Tech
                        </button>
                        <button className="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm font-semibold">
                          Reschedule This Job
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  CONFLICT PREVENTION
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Never Double-Book Again
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Smart alerts catch scheduling conflicts before they become problems. The system won't let you assign two jobs to the same tech at the same time.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">Instant Conflict Detection</span>
                      <p className="text-gray-600">Red warnings appear immediately when you try to create overlapping appointments</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">Suggested Alternatives</span>
                      <p className="text-gray-600">System suggests available techs or time slots</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">Travel Time Consideration</span>
                      <p className="text-gray-600">Accounts for drive time between jobs automatically</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Emergency Scheduling */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  EMERGENCY DISPATCH
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Handle Emergency Call-Outs Fast
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  When urgent jobs come in, you need to act fast. Emergency scheduling mode finds the closest available tech and gets them dispatched in seconds.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-orange-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">Priority Tagging</span>
                      <p className="text-gray-600">Mark jobs as urgent to push them to the top of the queue</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-orange-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">Nearest Tech Finder</span>
                      <p className="text-gray-600">GPS tracking shows which tech is closest to the emergency</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-orange-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">Instant SMS Dispatch</span>
                      <p className="text-gray-600">Tech gets address and details via text - no phone tag</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-orange-50 rounded-lg p-8">
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">URGENT</span>
                    <span className="text-gray-500 text-sm">2 mins ago</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">🚨 Water Heater Leak</h4>
                  <p className="text-gray-600 mb-4">1248 Oak Street, Dallas TX</p>
                  <div className="bg-gray-50 rounded p-3 mb-4">
                    <div className="text-sm text-gray-600 mb-2">Nearest Available Tech:</div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">Mike Chen</div>
                        <div className="text-sm text-gray-500">2.3 miles away</div>
                      </div>
                      <div className="text-green-600 font-semibold">Available Now</div>
                    </div>
                  </div>
                  <button className="w-full bg-orange-500 text-white px-4 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">
                    Dispatch Mike to This Job
                  </button>
                </div>
              </div>
            </div>

            {/* Auto-Assignment */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-green-50 rounded-lg p-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Auto-Assignment Rules</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-blue-600 font-bold">AC</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">HVAC Jobs</div>
                          <div className="text-sm text-gray-500">Mike, Sarah</div>
                        </div>
                      </div>
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-orange-600 font-bold">⚡</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Electrical Jobs</div>
                          <div className="text-sm text-gray-500">James</div>
                        </div>
                      </div>
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-blue-600 font-bold">🔧</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Plumbing Jobs</div>
                          <div className="text-sm text-gray-500">Anyone available</div>
                        </div>
                      </div>
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  SMART AUTOMATION
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Auto-Assign Based on Skills & Location
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Set up assignment rules once and let the system handle the rest. New jobs automatically go to the right tech based on their skills, certifications, and current location.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">Skill-Based Routing</span>
                      <p className="text-gray-600">HVAC jobs go to HVAC techs, electrical to electricians</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">Territory Management</span>
                      <p className="text-gray-600">Assign techs to specific zip codes or service areas</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">Round-Robin Distribution</span>
                      <p className="text-gray-600">Balance workload evenly across your team</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer SMS Reminders */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reduce No-Shows by 40% with SMS Reminders
            </h2>
            <p className="text-lg text-gray-600">
              Automated text reminders keep customers informed and reduce missed appointments - without lifting a finger.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24 Hours Before</h3>
              <div className="bg-blue-50 rounded-lg p-4 text-sm">
                <p className="text-gray-700">
                  "Hi Sarah! Reminder: Mike from Crew Ops Pro will arrive tomorrow at 2:00 PM for your HVAC service. Reply CONFIRM or call us at (555) 123-4567."
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">On The Way</h3>
              <div className="bg-green-50 rounded-lg p-4 text-sm">
                <p className="text-gray-700">
                  "Mike is on his way! He'll arrive in approximately 15 minutes. Track his location: [link]"
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Job Complete</h3>
              <div className="bg-purple-50 rounded-lg p-4 text-sm">
                <p className="text-gray-700">
                  "Thanks for choosing Crew Ops Pro! Your invoice is ready: [link]. Rate your experience: [link]"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Stop Double-Booking?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            See how Crew Ops Pro's smart scheduling can transform your field operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-block bg-white text-blue-600 px-12 py-4 rounded-lg font-bold text-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Request a Demo
            </Link>
            <Link 
              to="/pricing"
              className="inline-block border-2 border-white text-white px-12 py-4 rounded-lg font-bold text-xl hover:bg-blue-700 transition-colors"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
