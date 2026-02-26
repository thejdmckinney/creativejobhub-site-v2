import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import RelatedPages from '../components/RelatedPages';
import jobsMapImage from '../assets/Jobs-map-desktop.png';

export default function JobsMap() {
  return (
    <>
      <SEO
        title="Live Tech Tracking & Jobs Map | Real-Time Field Service GPS Tracking"
        description="See where every technician is in real-time. Emergency dispatch software with live GPS tracking, job status updates, and instant crew visibility for field service contractors."
        keywords="field service GPS tracking, live technician tracking software, field crew monitoring, dispatch software for contractors, real-time job map, emergency job scheduling software, technician location tracking, field service visibility"
        ogImage="https://www.crewopspro.com/Jobs-map-desktop.png"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-block mb-4">
              <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide animate-pulse">
                🚨 For Operations Managers
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Stop Asking "Where's My Team?"
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-blue-100">
              See Every Technician's Location in Real-Time
            </p>
            <p className="text-xl text-blue-200 mb-8">
              Emergency call comes in? Know instantly who's closest. No more phone tag, no more guessing. Just look at the map and dispatch the nearest available tech in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Request a Demo
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white/20 max-w-5xl mx-auto">
            <img 
              src={jobsMapImage} 
              alt="Live jobs map showing real-time technician locations with GPS tracking and job status indicators" 
              className="w-full"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* The Nightmare Scenario */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We Know This Pain
            </h2>
            <p className="text-xl text-gray-700">
              You've lived this nightmare. Let us paint the picture...
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Scenario 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-red-500">
              <div className="text-4xl mb-4">😰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                3:47 PM on Friday
              </h3>
              <p className="text-gray-700 mb-4">
                Emergency call: "Our AC is out and we have a baby in the house."
              </p>
              <p className="text-gray-700 mb-4">
                You start calling techs one by one:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>📞 Mike - voicemail</li>
                <li>📞 Sarah - on a job, 45 min away</li>
                <li>📞 Tom - doesn't answer</li>
                <li>📞 Lisa - "I'm close but stuck in traffic"</li>
              </ul>
              <p className="text-red-600 font-bold mt-4">
                12 minutes wasted. Customer furious.
              </p>
            </div>

            {/* Scenario 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-red-500">
              <div className="text-4xl mb-4">🤦</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The Wrong Tech Gets Sent
              </h3>
              <p className="text-gray-700 mb-4">
                You finally reach someone who says they're "not far."
              </p>
              <p className="text-gray-700 mb-4">
                Turns out they're 40 minutes away. Another tech was around the corner but you didn't know.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>⛽ Extra fuel costs</li>
                <li>😡 Angry customer waiting</li>
                <li>💰 Lost revenue (could've done 2 jobs)</li>
                <li>😓 Stressed-out team</li>
              </ul>
              <p className="text-red-600 font-bold mt-4">
                All because you couldn't see the map.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Now Imagine This Instead
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Emergency call comes in at 3:47 PM. You open the jobs map...
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 md:p-12 shadow-xl border-2 border-green-300">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Glance at the Map (2 seconds)
                    </h3>
                    <p className="text-gray-700">
                      See all 6 techs. Tom is <strong>3 blocks away</strong> and his pin shows "Available."
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Click Tom's Pin (1 second)
                    </h3>
                    <p className="text-gray-700">
                      Popup shows: "Finished last job 8 min ago. ETA to emergency: 4 minutes."
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Assign Emergency Job (3 seconds)
                    </h3>
                    <p className="text-gray-700">
                      Click "Assign" → Tom's phone buzzes with job details, customer info, and GPS directions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-700 mb-2">
                      Total Time: 6 Seconds
                    </h3>
                    <p className="text-gray-700">
                      Customer gets: "Tom is 4 minutes away!" Hero status achieved. 🎉
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What You See on the Jobs Map
            </h2>
            <p className="text-xl text-gray-600">
              Real-time visibility into your entire operation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">📍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Live GPS Pins</h3>
              <p className="text-gray-600 mb-4">
                Every tech shows as a pin on the map. Updates every 30 seconds. See exactly where everyone is right now - not 20 minutes ago.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Auto-updates in real-time</li>
                <li>✓ Shows direction of travel</li>
                <li>✓ Battery-efficient tracking</li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">🟢</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Color-Coded Status</h3>
              <p className="text-gray-600 mb-4">
                Instantly know who's available without asking. Pin colors show tech status at a glance.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>🟢 Green = Available / Between Jobs</li>
                <li>🔵 Blue = On Active Job</li>
                <li>🟡 Yellow = Running Late</li>
                <li>⚫ Gray = Off Duty / Lunch</li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">⏱️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ETA Calculator</h3>
              <p className="text-gray-600 mb-4">
                Click any tech's pin to see their estimated arrival time to a new job location. Factors in current traffic.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Real traffic data</li>
                <li>✓ Multiple route options</li>
                <li>✓ Time to complete current job</li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">🚨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Dispatch</h3>
              <p className="text-gray-600 mb-4">
                Drop a pin for an emergency job and instantly see which techs are closest. One-click dispatch to the nearest available tech.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ "Find closest tech" button</li>
                <li>✓ Instant push notification</li>
                <li>✓ GPS directions sent to phone</li>
              </ul>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Job Clustering</h3>
              <p className="text-gray-600 mb-4">
                See all scheduled jobs as pins on the map. Cluster nearby jobs together for efficient routing and same-day add-ons.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Visual route optimization</li>
                <li>✓ Identify nearby opportunities</li>
                <li>✓ Reduce drive time waste</li>
              </ul>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile App Sync</h3>
              <p className="text-gray-600 mb-4">
                Techs don't do anything special. Their location updates automatically when they clock in or start driving to a job.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Zero tech burden</li>
                <li>✓ Privacy controls (off-duty = hidden)</li>
                <li>✓ Works in background</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real World Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Real Situations This Solves
            </h2>
            <p className="text-xl text-gray-600">
              From operations managers who've been there
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Use Case 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                💧 Burst Pipe Emergency
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Scenario:</strong> Saturday morning, customer calls with water gushing everywhere. Needs someone NOW.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Old way:</strong> Call 5 techs, wait for callbacks, customer's house flooding. 25 minutes wasted.
              </p>
              <p className="text-green-700 font-semibold mb-2">
                <strong>With Jobs Map:</strong>
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Check map: Jake is 2.1 miles away, between jobs</li>
                <li>• Dispatch to Jake's phone: 8 seconds</li>
                <li>• Jake arrives: 6 minutes later</li>
                <li>• Customer saves: $15,000 in water damage</li>
              </ul>
            </div>

            {/* Use Case 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🏃 Tech Called In Sick
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Scenario:</strong> Mike calls in sick at 7 AM. He had 7 jobs today. Who's going to cover them?
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Old way:</strong> Manually look at schedules, calculate who's nearby, make 10+ phone calls to reschedule.
              </p>
              <p className="text-green-700 font-semibold mb-2">
                <strong>With Jobs Map:</strong>
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• See Mike's 7 job pins on map</li>
                <li>• See which techs are nearby each job</li>
                <li>• Drag-and-drop reassign in 3 minutes</li>
                <li>• Auto-notify affected customers & techs</li>
              </ul>
            </div>

            {/* Use Case 3 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border-2 border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🔥 Equipment Breakdown
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Scenario:</strong> HVAC system fails at a commercial building. They'll lose customers if not fixed today.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Old way:</strong> Frantically call techs asking "Can you squeeze this in?" Nobody knows where anyone is.
              </p>
              <p className="text-green-700 font-semibold mb-2">
                <strong>With Jobs Map:</strong>
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Drop emergency pin on map at customer location</li>
                <li>• System shows: "Sarah is 8 min away, finishes in 20 min"</li>
                <li>• Schedule for Sarah right after current job</li>
                <li>• Customer gets: "Tech arriving at 2:40 PM" (confident ETA)</li>
              </ul>
            </div>

            {/* Use Case 4 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                💰 Upsell Opportunity
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Scenario:</strong> Customer calls: "Can someone look at our second location while you're in the area?"
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Old way:</strong> "Uh, let me check and call you back..." Customer hangs up. Deal lost.
              </p>
              <p className="text-green-700 font-semibold mb-2">
                <strong>With Jobs Map:</strong>
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Enter second address while customer's on phone</li>
                <li>• Map shows: Tom is 0.3 miles away right now</li>
                <li>• "Actually Tom can be there in 10 minutes!"</li>
                <li>• Boom: $800 add-on job booked on the spot</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Stop Playing Phone Tag
            </h2>
            <p className="text-xl text-gray-600">
              Old way vs. new way
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-700 to-gray-900 text-white">
                    <th className="px-6 py-4 text-left text-lg font-bold">Emergency Situation</th>
                    <th className="px-6 py-4 text-center text-lg font-bold">❌ Without Jobs Map</th>
                    <th className="px-6 py-4 text-center text-lg font-bold">✅ With Jobs Map</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Finding closest tech</td>
                    <td className="px-6 py-4 text-center text-red-600">
                      5-15 phone calls<br/>
                      <span className="text-sm text-gray-500">10-20 minutes</span>
                    </td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">
                      Glance at map<br/>
                      <span className="text-sm text-gray-500">5 seconds</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Knowing who's available</td>
                    <td className="px-6 py-4 text-center text-red-600">
                      Call everyone<br/>
                      <span className="text-sm text-gray-500">Voicemails, interruptions</span>
                    </td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">
                      Color-coded pins<br/>
                      <span className="text-sm text-gray-500">Instant visibility</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Dispatching emergency job</td>
                    <td className="px-6 py-4 text-center text-red-600">
                      Text job details<br/>
                      <span className="text-sm text-gray-500">Back-and-forth confusion</span>
                    </td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">
                      One-click assign<br/>
                      <span className="text-sm text-gray-500">GPS directions sent</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Giving customer ETA</td>
                    <td className="px-6 py-4 text-center text-red-600">
                      Wild guess<br/>
                      <span className="text-sm text-gray-500">"Someone will be there soon"</span>
                    </td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">
                      Accurate ETA<br/>
                      <span className="text-sm text-gray-500">"Tom is 6 minutes away"</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Your stress level</td>
                    <td className="px-6 py-4 text-center text-red-600 text-3xl">
                      😫
                    </td>
                    <td className="px-6 py-4 text-center text-green-600 text-3xl">
                      😎
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Battery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              "What About Privacy & Battery?"
            </h2>
            <p className="text-xl text-gray-600">
              We built this the right way
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Privacy */}
            <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Respectful Privacy Controls
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                  <span><strong>Only tracks during work hours</strong> - Clock out and tracking stops instantly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                  <span><strong>Techs can pause tracking</strong> for lunch breaks or personal stops</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                  <span><strong>No secret surveillance</strong> - Techs know exactly when they're being tracked</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                  <span><strong>You set the rules</strong> - Enable/disable tracking per tech or team</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-4 italic">
                Most techs love it because dispatch stops bugging them with "where are you?" calls.
              </p>
            </div>

            {/* Battery */}
            <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200">
              <div className="text-4xl mb-4">🔋</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Battery-Efficient Tracking
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                  <span><strong>Smart updates</strong> - More frequent when driving, less when stationary</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                  <span><strong>Background optimization</strong> - Uses native OS location services efficiently</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                  <span><strong>Minimal battery drain</strong> - Typically 5-10% over a full work day</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                  <span><strong>WiFi-first</strong> - Uses WiFi positioning when available to save battery</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-4 italic">
                Tested with real field crews - never had a tech run out of battery mid-day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">💬</div>
          <blockquote className="text-2xl md:text-3xl font-semibold mb-6">
            "We had an emergency pool pump failure on a 95-degree day. I opened the map, saw Mike was 4 miles away finishing up, and had him there in 12 minutes. Customer thought we were magic. This feature alone saves us 2-3 hours of phone tag every single week."
          </blockquote>
          <p className="text-xl text-blue-200">
            — David R., Operations Manager
          </p>
          <p className="text-lg text-blue-300">
            Pool Service Company, Phoenix AZ
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Guessing Where Your Team Is
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            The next emergency call is coming. Will you be ready? Start your free trial and see everyone on the map in 10 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              to="/signup"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg inline-block"
            >
              Start Free 14-Day Trial
            </Link>
            <Link
              to="/contact"
              className="bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-800 transition-colors shadow-lg inline-block border-2 border-white"
            >
              Schedule a Demo
            </Link>
          </div>
          <p className="text-orange-200">
            💳 No credit card required • ⚡ Set up in minutes • 📍 See your first tech on the map today
          </p>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages
        title="Explore More Features"
        pages={[
          {
            title: "Scheduling Features",
            description: "Drag-and-drop calendar with smart conflict detection and emergency slots.",
            path: "/scheduling",
            icon: "📅"
          },
          {
            title: "Outreach Hub",
            description: "Stay connected with clients through automated campaigns and follow-ups.",
            path: "/outreach-hub",
            icon: "📣"
          },
          {
            title: "Team Management",
            description: "Time tracking, performance monitoring, and payroll-ready reports.",
            path: "/team-management",
            icon: "👥"
          },
          {
            title: "See Pricing",
            description: "$89/month for unlimited users and all features including GPS tracking.",
            path: "/pricing",
            icon: "💰"
          },
          {
            title: "All Features",
            description: "See everything Crew Ops Pro can do for your field service business.",
            path: "/features",
            icon: "⚡"
          },
          {
            title: "Compare to Competitors",
            description: "See why contractors choose us over Jobber and Housecall Pro.",
            path: "/competitors",
            icon: "⚖️"
          }
        ]}
      />
    </>
  );
}
