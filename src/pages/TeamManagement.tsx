import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import RelatedPages from '../components/RelatedPages';
import jobsMapImage from '../assets/Jobs-map-desktop.png';

export default function TeamManagement() {
  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Team Management Features | Crew Ops Pro"
        description="Real-time GPS tracking, job status updates, and team performance insights. Know exactly where your team is and what they're doing."
        keywords="team management software, GPS tracking, field team management"
      />

      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Know Where Your Team Is And What They're Doing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time visibility into your field operations with GPS tracking, job status updates, and performance analytics.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-2xl border border-gray-200 max-w-6xl mx-auto">
            <img 
              src={jobsMapImage} 
              alt="Live GPS tracking map" 
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Complete Field Team Visibility
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Live GPS Tracking</h3>
              <p className="text-gray-600">
                See exactly where each technician is in real-time. GPS updates every 30 seconds.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Job Status Updates</h3>
              <p className="text-gray-600">
                Techs update job status with one tap. Get instant notifications.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Analytics</h3>
              <p className="text-gray-600">
                Track jobs completed, customer ratings, and average job times.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Know Where Your Team Is?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of field service businesses managing their teams in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link 
              to="/pricing" 
              className="bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-colors border-2 border-white/20"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages
        title="Explore More Features"
        pages={[
          {
            title: "Scheduling Features",
            description: "Drag-and-drop calendar, conflict alerts, and smart job assignment.",
            path: "/scheduling",
            icon: "📅"
          },
          {
            title: "Outreach Hub",
            description: "Keep customers engaged with email campaigns, SMS, and automated follow-ups.",
            path: "/outreach-hub",
            icon: "📣"
          },
          {
            title: "Invoicing & Payments",
            description: "Accept payments anywhere with mobile card readers and online invoicing.",
            path: "/invoicing-payments",
            icon: "💳"
          },
          {
            title: "See Pricing",
            description: "$89/month for unlimited users and all features.",
            path: "/pricing",
            icon: "💰"
          },
          {
            title: "Industry Solutions",
            description: "Specialized features for chimney sweeps, handyman, pool service, and more.",
            path: "/chimney-sweep-software",
            icon: "🏠"
          },
          {
            title: "Compare to Competitors",
            description: "See why contractors choose us over Jobber and Housecall Pro.",
            path: "/competitors",
            icon: "⚖️"
          }
        ]}
      />
    </div>
  );
}
