import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTAButton from '../components/CTAButton';

export default function RouteOptimization() {
  const keyFeatures = [
    {
      icon: '🗺️',
      title: 'Real-Time Traffic Integration',
      description: 'Powered by Mapbox, routes automatically adjust for current traffic conditions, accidents, and road closures. Always get the fastest path to every job.'
    },
    {
      icon: '🎯',
      title: 'Skill-Based Auto-Assignment',
      description: 'Automatically assign jobs to technicians based on skill level, certifications, and specialty areas. HVAC jobs go to HVAC techs, plumbing to plumbers.'
    },
    {
      icon: '📍',
      title: 'Geographic Clustering',
      description: 'Group nearby jobs together automatically. Minimize drive time between appointments by clustering jobs in the same neighborhood or zip code.'
    },
    {
      icon: '📡',
      title: 'Live GPS Tracking & ETAs',
      description: 'Watch technicians move in real time. Get accurate ETAs for customers. Know exactly where every tech is and when they will arrive at the next job.'
    },
    {
      icon: '🔄',
      title: 'Dynamic Re-Routing',
      description: 'Job runs late? Emergency call comes in? Routes automatically recalculate to fit new jobs or delays without disrupting the entire schedule.'
    },
    {
      icon: '⚖️',
      title: 'Workload Balancing',
      description: 'Distribute jobs evenly across your team. Prevent one tech from being overwhelmed while another sits idle. Balance by time, distance, and complexity.'
    },
    {
      icon: '⚡',
      title: 'One-Click Route Creation',
      description: 'Select unassigned jobs from your dashboard and click Create Route. The system instantly builds optimized routes for each technician based on location and availability.'
    },
    {
      icon: '🏢',
      title: 'HQ-Based Routing',
      description: 'Routes start and end at your office or warehouse. Optimize for morning pickups of equipment and end-of-day returns. Account for commute time in scheduling.'
    }
  ];

  const benefits = [
    {
      metric: '30%',
      label: 'Less Drive Time',
      description: 'Optimized routes cut daily driving by up to 30%, letting techs complete more jobs per day.'
    },
    {
      metric: '25%',
      label: 'Fuel Savings',
      description: 'Reduce fuel costs by eliminating unnecessary miles and avoiding traffic congestion.'
    },
    {
      metric: '2-3',
      label: 'More Jobs Per Day',
      description: 'Less time driving means more time working. Most businesses add 2-3 extra appointments per tech daily.'
    },
    {
      metric: '15 min',
      label: 'Faster Scheduling',
      description: 'Build optimized routes in seconds instead of spending 15+ minutes manually planning each day.'
    }
  ];

  const technicalFeatures = [
    {
      category: 'Routing Intelligence',
      items: [
        'Mapbox real-time traffic data',
        'Multi-stop route optimization',
        'Turn-by-turn navigation',
        'Avoid tolls/highways options',
        'Historical traffic patterns'
      ]
    },
    {
      category: 'Assignment Logic',
      items: [
        'Skill level matching',
        'Certification requirements',
        'Equipment availability',
        'Technician preferences',
        'Service area boundaries'
      ]
    },
    {
      category: 'Schedule Integration',
      items: [
        'Active job schedule sync',
        'Time window compliance',
        'Break time scheduling',
        'Lunch hour blocking',
        'End-of-day buffer time'
      ]
    },
    {
      category: 'Smart Features',
      items: [
        'Emergency job insertion',
        'Same-day scheduling',
        'Customer time preferences',
        'Property access notes',
        'Drive time calculations'
      ]
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Select Unassigned Jobs',
      description: 'View all unscheduled jobs on your dashboard. Filter by date, priority, or service type. Select the jobs you want to route for today or this week.'
    },
    {
      step: '2',
      title: 'Click Create Routes',
      description: 'Hit the Create Routes button. The system analyzes job locations, technician availability, skill requirements, and current traffic conditions.'
    },
    {
      step: '3',
      title: 'Review Optimized Routes',
      description: 'See suggested routes for each technician with total drive time, number of stops, and estimated completion time. Routes are color-coded by tech on the map.'
    },
    {
      step: '4',
      title: 'Adjust if Needed',
      description: 'Drag jobs between technicians or reorder stops manually. The system recalculates drive times and ETAs automatically as you make changes.'
    },
    {
      step: '5',
      title: 'Send to Technicians',
      description: 'Approve routes and send to technician phones. They get turn-by-turn navigation, job details, and customer info for each stop in order.'
    },
    {
      step: '6',
      title: 'Monitor in Real-Time',
      description: 'Watch techs progress throughout the day. See GPS location, current job status, and ETA to next appointment. Adjust routes on the fly if needed.'
    }
  ];

  return (
    <>
      <SEO 
        title="Intelligent Route Optimization - AI-Powered Scheduling & GPS Tracking"
        description="Optimize field service routes with AI-powered routing, real-time traffic data, skill-based auto-assignment, and live GPS tracking. Save 30% on drive time and fuel costs."
        keywords="route optimization, field service routing, GPS tracking, technician scheduling, service route planner, auto dispatch, workload balancing, real-time traffic routing"
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                🚀 Powered by AI & Real-Time Traffic Data
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Intelligent Route Optimization
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
                AI-Powered Routing That Saves Time, Fuel, and Headaches
              </p>

              <p className="text-lg text-gray-600 mb-8">
                Build optimized routes in seconds with automatic traffic avoidance, skill-based job assignment, 
                and live GPS tracking. Let your technicians focus on the work, not the windshield.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <CTAButton 
                  text="Start Free Trial" 
                  url="/signup"
                  style="primary"
                />
                <CTAButton 
                  text="See All Features" 
                  url="/features"
                  style="secondary"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  ✓ <span>Real-Time Traffic Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  ✓ <span>One-Click Route Creation</span>
                </div>
                <div className="flex items-center gap-2">
                  ✓ <span>Live GPS Tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  ✓ <span>Skill-Based Auto-Assignment</span>
                </div>
              </div>
            </div>

            {/* Key Features Cards */}
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-100">
                  <div className="text-4xl mb-3">🚗</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Routing</h3>
                  <p className="text-gray-600 text-sm">
                    AI clusters jobs geographically and avoids traffic in real-time to minimize drive time.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-indigo-100">
                  <div className="text-4xl mb-3">�‍🔧</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Skill Matching</h3>
                  <p className="text-gray-600 text-sm">
                    Automatically assigns jobs to techs based on certifications, skills, and specialty areas.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-100">
                  <div className="text-4xl mb-3">📍</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Live Tracking</h3>
                  <p className="text-gray-600 text-sm">
                    See every tech's location in real-time with accurate ETAs for customers and next stops.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The Impact of Smart Routing
              </h2>
              <p className="text-xl text-gray-600">
                Real results from field service businesses using route optimization
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-5xl font-bold text-blue-600 mb-2">
                    {benefit.metric}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.label}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After Comparison */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Before vs. After Route Optimization
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <div className="bg-white rounded-xl p-8 border-2 border-red-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl">
                    ❌
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Manual Routing</h3>
                    <p className="text-red-600 font-semibold">Inefficient & Time-Consuming</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl flex-shrink-0">•</span>
                    <span>15-30 minutes planning routes each morning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl flex-shrink-0">•</span>
                    <span>Techs criss-cross the city with poor route planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl flex-shrink-0">•</span>
                    <span>Getting stuck in traffic because routes ignore congestion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl flex-shrink-0">•</span>
                    <span>Unbalanced workloads - some techs overwhelmed, others idle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl flex-shrink-0">•</span>
                    <span>Emergency jobs disrupt entire day schedule</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl flex-shrink-0">•</span>
                    <span>No visibility into technician locations during the day</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Result:</strong> Wasted fuel, fewer jobs per day, frustrated techs and customers
                  </p>
                </div>
              </div>

              {/* After */}
              <div className="bg-white rounded-xl p-8 border-2 border-green-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                    ✅
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">AI Route Optimization</h3>
                    <p className="text-green-600 font-semibold">Efficient & Automatic</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                    <span>One-click routing in under 30 seconds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                    <span>Jobs clustered geographically to minimize drive time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                    <span>Routes avoid traffic automatically with real-time data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                    <span>Workload balanced evenly across all technicians</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                    <span>Dynamic re-routing handles emergencies seamlessly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                    <span>Live GPS tracking shows exact technician locations and ETAs</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Result:</strong> 30% less drive time, 25% lower fuel costs, 2-3 more jobs per tech daily
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                How Route Optimization Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From unassigned jobs to optimized routes in under a minute
              </p>
            </div>

            <div className="space-y-12">
              {howItWorks.map((item, index) => (
                <div 
                  key={index}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    {index === 0 && (
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">What You'll See:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-blue-600 text-xl">•</span>
                            <span>All pending jobs with customer names and addresses</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-blue-600 text-xl">•</span>
                            <span>Service type, duration, and priority level for each job</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-blue-600 text-xl">•</span>
                            <span>Filter by date range, service area, or job type</span>
                          </li>
                        </ul>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-100">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">AI Analyzes:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-purple-600 text-xl">•</span>
                            <span>Geographic proximity of all job locations</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-purple-600 text-xl">•</span>
                            <span>Current traffic conditions and predicted delays</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-purple-600 text-xl">•</span>
                            <span>Technician skills, availability, and current location</span>
                          </li>
                        </ul>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Route Details Include:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-green-600 text-xl">•</span>
                            <span>Total drive time and miles per technician</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-green-600 text-xl">•</span>
                            <span>Number of stops and estimated completion time</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-green-600 text-xl">•</span>
                            <span>Color-coded routes on map for easy visualization</span>
                          </li>
                        </ul>
                      </div>
                    )}
                    {index === 3 && (
                      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8 border border-orange-100">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Easy Adjustments:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-orange-600 text-xl">•</span>
                            <span>Drag-and-drop jobs between technicians</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-orange-600 text-xl">•</span>
                            <span>Reorder stops to match customer preferences</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-orange-600 text-xl">•</span>
                            <span>System recalculates drive times instantly</span>
                          </li>
                        </ul>
                      </div>
                    )}
                    {index === 4 && (
                      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-100">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Technicians Receive:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-cyan-600 text-xl">•</span>
                            <span>Push notification with their daily route</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-cyan-600 text-xl">•</span>
                            <span>Turn-by-turn navigation for each stop</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-cyan-600 text-xl">•</span>
                            <span>Customer info and job details at their fingertips</span>
                          </li>
                        </ul>
                      </div>
                    )}
                    {index === 5 && (
                      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Live Dashboard Shows:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-indigo-600 text-xl">•</span>
                            <span>Real-time GPS location of every technician</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-indigo-600 text-xl">•</span>
                            <span>Job status (en route, in progress, completed)</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-indigo-600 text-xl">•</span>
                            <span>Accurate ETAs for customers and next appointments</span>
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

        {/* Key Features Grid */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Powerful Routing Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need for intelligent route planning and technician management
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Details Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Under the Hood
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced routing technology powered by industry-leading platforms
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalFeatures.map((section, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {section.category}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-blue-600 flex-shrink-0">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-3">
                Powered by Mapbox
              </h3>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                We use Mapbox for real-time traffic data, turn-by-turn navigation, and accurate drive time calculations. 
                The same mapping technology used by companies like Uber, DoorDash, and Instacart.
              </p>
            </div>
          </div>
        </section>

        {/* Mobile App Preview Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Technicians Get Their Route on Their Phone
                </h2>
                <div className="space-y-4 text-gray-600 text-lg">
                  <p>
                    Once you approve routes, technicians receive their daily schedule on their mobile app. 
                    Each stop shows customer info, job details, and turn-by-turn navigation to get there.
                  </p>
                  <p>
                    They can see their full day at a glance - where they are going, when they need to be there, 
                    and how long each job should take. No more calling the office asking for directions.
                  </p>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Mobile Features:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-600">Turn-by-turn navigation to each stop</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-600">Customer contact info and property notes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-600">One-tap to call or text customer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-600">Mark jobs complete and move to next stop</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-600">Works offline - routes download for the day</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  📱 Mobile App Benefits
                </h3>
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                        🧭
                      </div>
                      <h4 className="font-bold text-lg">Smart Navigation</h4>
                    </div>
                    <p className="text-blue-100 text-sm">
                      Turn-by-turn directions with real-time traffic updates. Gets techs to jobs faster with no wrong turns.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                        📞
                      </div>
                      <h4 className="font-bold text-lg">One-Tap Contact</h4>
                    </div>
                    <p className="text-blue-100 text-sm">
                      Call or text customers with one tap. Customer info right in the app - no searching through paperwork.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                        ✅
                      </div>
                      <h4 className="font-bold text-lg">Job Tracking</h4>
                    </div>
                    <p className="text-blue-100 text-sm">
                      Mark jobs complete instantly. Updates office in real-time so dispatch knows when to send next job.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                        📡
                      </div>
                      <h4 className="font-bold text-lg">Offline Mode</h4>
                    </div>
                    <p className="text-blue-100 text-sm">
                      Routes download at start of day. Works in rural areas or basements with no cell signal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6 bg-blue-600 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What Service Businesses Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <p className="text-lg mb-4">
                  Route optimization saved us 2 hours of drive time per tech per day. 
                  We are now doing 18-20 jobs per tech instead of 15. Game changer for our bottom line.
                </p>
                <p className="font-semibold">— Mark Stevens</p>
                <p className="text-blue-200 text-sm">Stevens HVAC, Atlanta</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <p className="text-lg mb-4">
                  The skill-based assignment is brilliant. HVAC jobs automatically go to HVAC techs, 
                  plumbing to plumbers. No more manually sorting through jobs every morning.
                </p>
                <p className="font-semibold">— Lisa Chen</p>
                <p className="text-blue-200 text-sm">Chen Home Services, San Francisco</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <p className="text-lg mb-4">
                  Live GPS tracking means I always know where my techs are. 
                  Customer calls asking for ETA? I can tell them exactly when the tech will arrive.
                </p>
                <p className="font-semibold">— Robert Martinez</p>
                <p className="text-blue-200 text-sm">Martinez Plumbing, Phoenix</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-6 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stop Wasting Time and Fuel on Bad Routes
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start optimizing routes in seconds with AI-powered routing, real-time traffic avoidance, 
              and automatic job assignment. Your technicians and your fuel budget will thank you.
            </p>
            <div className="mb-6">
              <CTAButton 
                text="Start Free Trial" 
                url="/signup"
                style="success"
              />
            </div>
            <p className="text-gray-400 text-sm mb-8">
              Free 14-day trial • $89/month • Unlimited routes • All features included
            </p>
            <div className="border-t border-gray-700 pt-8">
              <Link 
                to="/features"
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                ← Back to All Features
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
