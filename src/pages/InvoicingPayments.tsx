import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import stripePartnerImage from '../assets/stripe-partner.png';

export default function InvoicingPayments() {
  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Get Paid Faster with Crew Ops Pro | Invoicing & Payments"
        description="Collect payment on-site with tap-to-pay, send professional invoices instantly, and get paid the same day."
        keywords="invoicing software, payment processing, tap to pay"
      />

      <section className="bg-gradient-to-b from-green-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Paid Faster, Not Net-30 Slower
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collect payment the moment the job is done. Professional invoices, on-site payments, and same-day deposits—all powered by Stripe.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-2xl border border-gray-200 max-w-4xl mx-auto bg-white p-8">
            <img 
              src={stripePartnerImage} 
              alt="Powered by Stripe" 
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Every Payment Method Your Customers Want
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tap-to-Pay</h3>
              <p className="text-gray-600">
                Your tech's phone becomes a payment terminal. Payment processes in 2 seconds.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Invoices</h3>
              <p className="text-gray-600">
                Branded, itemized, and sent instantly with a Pay Now button.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Deposits</h3>
              <p className="text-gray-600">
                Next-day deposits to your bank. Same-day deposits available.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Paid Faster?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of field service businesses collecting payment on-site.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup" 
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link 
              to="/pricing" 
              className="bg-green-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-900 transition-colors border-2 border-white/20"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
