import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';
import { trackTrialSignup } from '../utils/analytics';

export default function SoftwareHandymanScheduling() {
  const faqs = [
    {
      question: "Can I manage 10-15 small jobs per day with this software?",
      answer: "Yes. CrewOpsPro is designed for handymen who juggle multiple small jobs daily. You can see all your appointments on a daily schedule view, get automatic route optimization between jobs, and update job status from your phone. Most handymen complete 12-15 jobs per day using our mobile app."
    },
    {
      question: "What if a customer calls with an emergency job?",
      answer: "Easy. Add the emergency job on your phone, and CrewOpsPro will automatically re-optimize your route to fit it in. You can see which existing jobs can be moved to tomorrow, and the system calculates the fastest route including the new emergency stop."
    },
    {
      question: "How does scheduling work for recurring customers?",
      answer: "Set up recurring jobs once (e.g., 'Replace HVAC filters first Monday of every month'). CrewOpsPro automatically creates appointments on your calendar. You can adjust individual appointments without affecting the recurring schedule."
    },
    {
      question: "Can customers book appointments themselves?",
      answer: "Yes. You get a customer portal where clients can request appointments. You review and approve requests, then they appear on your schedule. This reduces phone tag and lets customers book after hours."
    },
    {
      question: "Does it work offline? I don't always have cell service.",
      answer: "Yes. The mobile app works offline. You can view your schedule, add photos, create invoices, and log work. Everything syncs automatically when you get back online."
    },
    {
      question: "How do I track materials used on each job?",
      answer: "Each job has a materials section where you add items used (screws, caulk, paint, etc.). You can pull from a master materials list or add custom items. Materials automatically add to the invoice, and you can track inventory levels."
    },
    {
      question: "Can I send invoices immediately after finishing a job?",
      answer: "Yes. From the mobile app, tap 'Complete Job' → Review materials/time → Send Invoice. Customer gets it via email/text instantly and can pay with credit card from their phone."
    },
    {
      question: "What if I need to reschedule a job?",
      answer: "Drag and drop on the calendar to a new date/time. Customer automatically gets a text/email notification about the change. No manual phone calls needed."
    },
    {
      question: "Does it show me the fastest route between jobs?",
      answer: "Yes. Route optimization is included. Enter your jobs for the day, and CrewOpsPro calculates the most efficient route. Saves 30-45 minutes daily in drive time."
    },
    {
      question: "Can I block out time for lunch or personal appointments?",
      answer: "Yes. Add 'blocked time' on your calendar for lunch, errands, or personal appointments. The system won't schedule customer jobs during those times."
    },
    {
      question: "How do I handle jobs that take longer than expected?",
      answer: "Just update the job's end time in the app. If you have appointments later that day, you'll see a warning that you might be late, and you can send automatic 'running late' notifications to affected customers."
    },
    {
      question: "Can I see my schedule for the whole week?",
      answer: "Yes. Switch between day view, week view, or month view. Color-coded by job type (plumbing, electrical, carpentry, etc.) so you can see your workload at a glance."
    },
    {
      question: "What if I want to batch similar jobs together?",
      answer: "Filter your unscheduled jobs by type (e.g., 'all fence repairs'). Drag them all onto the same day to batch them together. Route optimization will arrange them in the most efficient order."
    },
    {
      question: "Does it remind customers about appointments?",
      answer: "Yes. Automatic SMS and email reminders 24 hours before appointments. Reduces no-shows by 60%. Customers can confirm or request reschedule from the reminder."
    },
    {
      question: "Can I see which customers haven't scheduled follow-up work?",
      answer: "Yes. Reports show customers you've worked for in the past 90 days who don't have upcoming appointments. Great for follow-up calls to drum up repeat business."
    }
  ];

  const useCases = [
    {
      name: "Mike's Handyman Service",
      location: "Denver, CO",
      jobs: "12-15 jobs/day",
      challenge: "Was using paper calendar and Google Maps. Forgot appointments, inefficient routes, couldn't invoice on-site.",
      solution: "Now uses CrewOpsPro to schedule all jobs, optimize routes, and invoice immediately after each job.",
      result: "Completes 3 more jobs per day (was 12, now 15). Gets paid faster. Saves 1 hour daily in drive time.",
      revenue: "3 extra jobs × $150 average = $450/day more = $9,000/month more"
    },
    {
      name: "Rodriguez Repairs",
      location: "Austin, TX",
      jobs: "8-10 jobs/day",
      challenge: "Customers would call during jobs and ask 'can you come today?' Didn't know if he had time or how to fit them in his route.",
      solution: "Now sees his whole day schedule on phone. Can add emergency jobs and get automatic route re-optimization.",
      result: "Books 2-3 emergency jobs per week that he would have turned down before. Better customer service.",
      revenue: "2.5 extra jobs/week × $175 average = $1,750/month more"
    },
    {
      name: "Thompson Property Maintenance",
      location: "Phoenix, AZ",
      jobs: "20-25 jobs/day (2-person team)",
      challenge: "Had recurring customers (monthly HVAC filter changes, quarterly gutter cleaning) but forgot to schedule them.",
      solution: "Set up recurring jobs in CrewOpsPro. System automatically adds them to calendar monthly/quarterly.",
      result: "Stopped losing recurring customers. Revenue more predictable. Less time on admin.",
      revenue: "Retained $3,200/month in recurring maintenance that was falling through cracks"
    },
    {
      name: "Anderson Handyman & Repair",
      location: "Seattle, WA",
      jobs: "10-12 jobs/day",
      challenge: "Would finish a job and drive 30 minutes to next job, then realize there was another job 5 minutes from first job.",
      solution: "Route optimization shows jobs in geographic order. Plans whole day before leaving in morning.",
      result: "Saves 45 minutes daily in drive time. Less fuel cost. Gets home earlier.",
      revenue: "45 min/day saved = 3.75 hours/week = 1 extra job/week = $700/month more"
    }
  ];

  const dailyWorkflow = [
    {
      time: "7:00 AM",
      task: "Check Daily Schedule",
      description: "Open CrewOpsPro app. See 12 jobs scheduled for today. GPS route already optimized showing best order to visit jobs.",
      icon: "📱"
    },
    {
      time: "7:30 AM",
      task: "Drive to First Job",
      description: "Tap 'Start Route' - GPS navigation to first customer. Shows estimated time between all jobs today.",
      icon: "🚗"
    },
    {
      time: "8:00 AM",
      task: "Arrive at First Job",
      description: "Tap 'Arrived' - customer gets notification. Take 'before' photos. Review work order notes.",
      icon: "🏠"
    },
    {
      time: "8:45 AM",
      task: "Complete First Job",
      description: "Take 'after' photos. Log materials used (2 hinges, 1 tube caulk). Add 15 min extra labor.",
      icon: "✅"
    },
    {
      time: "8:50 AM",
      task: "Send Invoice Immediately",
      description: "Tap 'Complete & Invoice'. Customer gets email/text with invoice and 'Pay Now' button. Many pay on spot.",
      icon: "💳"
    },
    {
      time: "9:00 AM",
      task: "Drive to Second Job",
      description: "GPS auto-navigates to next job in optimized route. See you're ahead of schedule.",
      icon: "🗺️"
    },
    {
      time: "11:30 AM",
      task: "Emergency Call Comes In",
      description: "Customer calls: 'Water leaking under sink, can you come today?' Add emergency job to schedule.",
      icon: "🚨"
    },
    {
      time: "11:32 AM",
      task: "Re-optimize Route",
      description: "CrewOpsPro recalculates route to fit in emergency. Shows 2 jobs can move to tomorrow. Route still efficient.",
      icon: "🔄"
    },
    {
      time: "12:00 PM",
      task: "Lunch Break",
      description: "Blocked time on calendar. System won't schedule jobs during lunch hour.",
      icon: "🍔"
    },
    {
      time: "1:00 PM",
      task: "Continue Afternoon Jobs",
      description: "Work through remaining jobs. Each one: Arrive → Work → Photos → Materials → Invoice → Next job.",
      icon: "🔨"
    },
    {
      time: "3:45 PM",
      task: "Customer Reschedule Request",
      description: "Customer texts: 'Can we move 4pm appointment to tomorrow?' Drag appointment to tomorrow, customer gets confirmation.",
      icon: "📅"
    },
    {
      time: "5:30 PM",
      task: "Finish Last Job",
      description: "Complete final job. Send invoice. Customer pays with credit card. Money in account tomorrow.",
      icon: "🏁"
    },
    {
      time: "5:45 PM",
      task: "Review Tomorrow's Schedule",
      description: "Open tomorrow's schedule. See 10 jobs already booked. Route optimized. Ready for tomorrow.",
      icon: "📊"
    },
    {
      time: "6:00 PM",
      task: "Head Home",
      description: "All jobs done. All invoices sent. Tomorrow planned. No paperwork at home tonight.",
      icon: "🏡"
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Software for Handyman Business Scheduling | Manage 10-15 Jobs/Day | CrewOpsPro"
        description="Handyman scheduling software that actually works for small jobs. Manage 10-15 appointments daily, optimize routes, invoice on-site, track materials. $89/month. Mobile app for iOS/Android. Free trial."
        keywords="software for handyman business scheduling, handyman scheduling software, handyman appointment software, handyman job management, handyman route optimization, mobile app for handyman, handyman invoice software, handyman business software"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.crewopspro.com' },
        { name: 'Handyman Business Software', url: 'https://www.crewopspro.com/handyman-software' },
        { name: 'Handyman Scheduling Software', url: 'https://www.crewopspro.com/software-for-handyman-business-scheduling' }
      ]} />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-yellow-400 text-orange-900 px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
              🔧 BUILT FOR HANDYMEN WHO JUGGLE 10-15 JOBS/DAY
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Software for Handyman Business Scheduling
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-6 max-w-4xl mx-auto">
              Stop losing track of jobs. Schedule 10-15 appointments per day, <strong className="text-yellow-300">optimize your routes</strong>, 
              track materials on-site, and <strong className="text-yellow-300">invoice immediately</strong> from your phone.
            </p>
            <div className="flex items-center justify-center gap-3 mb-8">
              <StarRating />
              <span className="text-orange-200">4.9/5 from 200+ handyman businesses</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Perfect for Solo Handymen & Small Teams</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">📅</div>
                <p className="font-bold mb-2">Manage 10-15 Jobs/Day</p>
                <p className="text-sm text-orange-200">See all appointments. Know where you need to be.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🗺️</div>
                <p className="font-bold mb-2">Route Optimization</p>
                <p className="text-sm text-orange-200">Most efficient order. Save 30-45 min daily.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💵</div>
                <p className="font-bold mb-2">Invoice On-Site</p>
                <p className="text-sm text-orange-200">Get paid immediately. No waiting 30 days.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/signup"
              onClick={() => trackTrialSignup('handyman-scheduling-hero')}
              className="inline-block px-10 py-5 bg-yellow-400 text-orange-900 font-bold text-xl rounded-lg hover:bg-yellow-300 transition-all transform hover:scale-105 text-center shadow-xl"
            >
              Start Free Trial - No Credit Card →
            </Link>
            <Link
              to="/handyman-software"
              className="inline-block px-10 py-5 bg-white text-orange-900 font-bold text-xl rounded-lg hover:bg-gray-100 transition-all text-center shadow-xl"
            >
              See All Handyman Features
            </Link>
          </div>

          <p className="text-center text-orange-200 text-lg">
            ✓ Works offline &nbsp;•&nbsp; ✓ $89/month flat rate &nbsp;•&nbsp; ✓ iOS & Android apps
          </p>
        </div>
      </section>

      {/* Daily Workflow Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            A Day in the Life: Using CrewOpsPro for Handyman Scheduling
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
            Here's how a typical handyman uses CrewOpsPro to manage 12-15 jobs in a single day
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {dailyWorkflow.map((step, index) => (
                <div key={index} className="flex gap-6 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="text-5xl">{step.icon}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-sm font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                        {step.time}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">{step.task}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">That's 14 Customer Touchpoints. Zero Paperwork at Home.</h3>
              <p className="text-lg mb-6">
                All jobs scheduled, all invoices sent, tomorrow planned. Everything managed from your phone.
              </p>
              <Link
                to="/signup"
                onClick={() => trackTrialSignup('handyman-scheduling-workflow')}
                className="inline-block px-8 py-4 bg-yellow-400 text-green-900 font-bold text-lg rounded-lg hover:bg-yellow-300 transition-all"
              >
                Try CrewOpsPro Free for 14 Days →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Handymen Love CrewOpsPro */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Handymen Love CrewOpsPro Scheduling
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">📱</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Works on Your Phone</h3>
                  <p className="text-gray-700 mb-4">
                    Full-featured mobile apps for iOS and Android. Everything you need is in your pocket. No laptop in the truck.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>View daily schedule with map locations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Add jobs and reschedule on the fly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Take before/after photos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Track materials and time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Create and send invoices instantly</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🗺️</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Automatic Route Optimization</h3>
                  <p className="text-gray-700 mb-4">
                    Stop wasting time driving back and forth across town. CrewOpsPro plans the most efficient route through all your jobs.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4 mb-4">
                    <p className="font-bold text-green-700 mb-2">Save 30-45 Minutes Every Day</p>
                    <p className="text-sm text-gray-700">That's 2.5-3.75 hours per week = 1 extra job you can fit in weekly</p>
                  </div>
                  <p className="text-gray-700">
                    When emergency jobs come in, the system recalculates your route automatically to fit them in efficiently.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">⚡</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Handle Emergency Jobs Easily</h3>
                  <p className="text-gray-700 mb-4">
                    Customer calls with "Can you come today?" You can add the job to your schedule in 30 seconds and see exactly how it affects your day.
                  </p>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <p className="font-bold text-gray-900 mb-2">How It Works:</p>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                      <li>Customer calls with emergency</li>
                      <li>Add job to schedule (30 seconds)</li>
                      <li>System re-optimizes route automatically</li>
                      <li>Shows which jobs can shift to tomorrow</li>
                      <li>Send automatic notifications to affected customers</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🔧</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Materials Tracking Built-In</h3>
                  <p className="text-gray-700 mb-4">
                    Track every screw, tube of caulk, and can of paint. Materials automatically add to invoice. Know your profit on each job.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Master materials list (your commonly used items)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Add materials to jobs in seconds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Auto-calculate markup (cost × 1.4 = customer price)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Materials appear on invoice automatically</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">💳</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Get Paid Immediately</h3>
                  <p className="text-gray-700 mb-4">
                    Finish the job, send the invoice from your phone. Customer pays with credit card. Money in your account next day.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-bold text-green-700 mb-2">Average Payment Time:</p>
                    <p className="text-2xl font-bold text-gray-900 mb-2">24 hours</p>
                    <p className="text-sm text-gray-700">vs 30-45 days with paper invoices mailed to customers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🔄</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Recurring Jobs Automated</h3>
                  <p className="text-gray-700 mb-4">
                    Have customers who need regular service? Set it up once. CrewOpsPro automatically schedules it monthly/quarterly.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="font-bold text-gray-900 mb-2">Examples:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Replace HVAC filters (1st Monday monthly)</li>
                      <li>• Clean gutters (March & October)</li>
                      <li>• Pressure wash deck (every 3 months)</li>
                      <li>• Test smoke detectors (annually)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Handyman Businesses */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Real Handyman Businesses Using CrewOpsPro
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            These handymen were using paper calendars or basic apps. Here's how CrewOpsPro changed their businesses.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg border-2 border-blue-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{useCase.name}</h3>
                    <p className="text-gray-600">{useCase.location}</p>
                  </div>
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                    {useCase.jobs}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm font-bold text-red-600 mb-1">❌ The Problem:</p>
                    <p className="text-gray-700">{useCase.challenge}</p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-blue-600 mb-1">✓ The Solution:</p>
                    <p className="text-gray-700">{useCase.solution}</p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-green-600 mb-1">📈 The Result:</p>
                    <p className="text-gray-700">{useCase.result}</p>
                  </div>
                </div>

                <div className="bg-green-100 rounded-lg p-4">
                  <p className="text-sm font-bold text-gray-900 mb-1">Revenue Impact:</p>
                  <p className="text-lg font-bold text-green-700">{useCase.revenue}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/signup"
              onClick={() => trackTrialSignup('handyman-scheduling-cases')}
              className="inline-block px-10 py-5 bg-orange-600 text-white font-bold text-xl rounded-lg hover:bg-orange-700 transition-all transform hover:scale-105"
            >
              Get the Same Results - Start Free Trial →
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Paper Calendar vs Google Calendar vs CrewOpsPro
          </h2>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-4 py-4 text-center">Paper</th>
                  <th className="px-4 py-4 text-center">Google Calendar</th>
                  <th className="px-4 py-4 text-center">CrewOpsPro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="px-6 py-4 font-semibold">See daily schedule</td>
                  <td className="px-4 py-4 text-center">✓</td>
                  <td className="px-4 py-4 text-center">✓</td>
                  <td className="px-4 py-4 text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Customer phone/address</td>
                  <td className="px-4 py-4 text-center">Manual lookup</td>
                  <td className="px-4 py-4 text-center">Manual entry</td>
                  <td className="px-4 py-4 text-center text-green-600 font-bold">✓ Auto-filled</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-semibold">Route optimization</td>
                  <td className="px-4 py-4 text-center text-red-600">✗</td>
                  <td className="px-4 py-4 text-center text-red-600">✗</td>
                  <td className="px-4 py-4 text-center text-green-600 font-bold">✓ Automatic</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Track materials used</td>
                  <td className="px-4 py-4 text-center text-red-600">✗</td>
                  <td className="px-4 py-4 text-center text-red-600">✗</td>
                  <td className="px-4 py-4 text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-semibold">Invoice on-site</td>
                  <td className="px-4 py-4 text-center text-red-600">✗</td>
                  <td className="px-4 py-4 text-center text-red-600">✗</td>
                  <td className="px-4 py-4 text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Accept credit cards</td>
                  <td className="px-4 py-4 text-center text-red-600">✗</td>
                  <td className="px-4 py-4 text-center text-red-600">✗</td>
                  <td className="px-4 py-4 text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-semibold">Automatic reminders</td>
                  <td className="px-4 py-4 text-center text-red-600">✗</td>
                  <td className="px-4 py-4 text-center">Manual</td>
                  <td className="px-4 py-4 text-center text-green-600 font-bold">✓ Automatic</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Customer portal</td>
                  <td className="px-4 py-4 text-center text-red-600">✗</td>
                  <td className="px-4 py-4 text-center text-red-600">✗</td>
                  <td className="px-4 py-4 text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-semibold">Recurring jobs</td>
                  <td className="px-4 py-4 text-center">Manual</td>
                  <td className="px-4 py-4 text-center">Partial</td>
                  <td className="px-4 py-4 text-center text-green-600 font-bold">✓ Automated</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Before/after photos</td>
                  <td className="px-4 py-4 text-center text-red-600">✗</td>
                  <td className="px-4 py-4 text-center text-red-600">✗</td>
                  <td className="px-4 py-4 text-center text-green-600 font-bold">✓ Unlimited</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-semibold">QuickBooks sync</td>
                  <td className="px-4 py-4 text-center text-red-600">✗</td>
                  <td className="px-4 py-4 text-center text-red-600">✗</td>
                  <td className="px-4 py-4 text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Monthly cost</td>
                  <td className="px-4 py-4 text-center">$0</td>
                  <td className="px-4 py-4 text-center">$0</td>
                  <td className="px-4 py-4 text-center text-green-600 font-bold">$89</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-blue-50 rounded-xl p-6 text-center">
            <p className="text-lg text-gray-700">
              <strong>$89/month</strong> to complete 2-3 more jobs per day = <strong>$5,000-9,000 extra revenue per month</strong>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Common Questions from Handymen
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            More Resources for Handyman Businesses
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/handyman-software" className="group bg-white rounded-lg p-6 hover:shadow-lg transition-all border">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                Complete Handyman Software Features
              </h3>
              <p className="text-gray-600">All features designed specifically for handyman businesses.</p>
            </Link>
            
            <Link to="/affordable-field-service-software" className="group bg-white rounded-lg p-6 hover:shadow-lg transition-all border">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                Affordable Field Service Software
              </h3>
              <p className="text-gray-600">Why handymen are switching to budget-friendly alternatives.</p>
            </Link>
            
            <Link to="/pricing" className="group bg-white rounded-lg p-6 hover:shadow-lg transition-all border">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                CrewOpsPro Pricing
              </h3>
              <p className="text-gray-600">$89/month flat rate. No per-user fees. Everything included.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Manage 10-15 Jobs/Day with Ease?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-orange-100">
            Stop juggling paper calendars and losing track of jobs. Get organized, save time, and get paid faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/signup"
              onClick={() => trackTrialSignup('handyman-scheduling-final-cta')}
              className="inline-block px-10 py-5 bg-yellow-400 text-orange-900 font-bold text-xl rounded-lg hover:bg-yellow-300 transition-all transform hover:scale-105"
            >
              Start Free Trial - No Credit Card Required →
            </Link>
          </div>

          <p className="text-orange-100 text-lg mb-8">
            ✓ 14-day free trial &nbsp;•&nbsp; ✓ Works offline &nbsp;•&nbsp; ✓ $89/month after trial
          </p>

          <div className="flex items-center justify-center gap-3">
            <StarRating />
            <span className="text-orange-200">Rated 4.9/5 by handyman businesses</span>
          </div>
        </div>
      </section>
    </div>
  );
}
