export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Modern Software for Field Service Pros
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Built Different. Priced Right.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-brand hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              See Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Everything You Need
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-3">Mobile First</h3>
              <p className="text-gray-400">
                iOS & Android apps that work offline. Your techs can work anywhere.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-3">All-in-One</h3>
              <p className="text-gray-400">
                Scheduling, dispatching, invoicing, and payments in one platform.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-3">Fair Pricing</h3>
              <p className="text-gray-400">
                One simple price. No hidden fees. No per-user charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-6 text-gray-200">
            Start your 7-day free trial today. No credit card required.
          </p>
          <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            Get Started Free
          </button>
        </div>
      </section>
    </div>
  );
}
