import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Crew Ops Pro</title>
        <meta name="description" content="Terms of Service for Crew Ops Pro field service management software." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Header */}
            <div className="mb-8">
              <Link 
                to="/" 
                className="text-blue-600 hover:text-blue-700 font-medium mb-4 inline-block"
              >
                ← Back to Home
              </Link>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
              <p className="text-gray-600">Last Updated: January 26, 2026</p>
            </div>

            {/* Content */}
            <div className="prose prose-blue max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-4">
                  Welcome to Crew Ops Pro. By accessing or using our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                <p className="text-gray-700 mb-4">
                  Crew Ops Pro provides field service management software designed for contractors and service professionals. Our platform includes features for:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Job scheduling and management</li>
                  <li>Customer relationship management</li>
                  <li>Invoicing and payment processing</li>
                  <li>Route optimization</li>
                  <li>Team collaboration tools</li>
                  <li>Reporting and analytics</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration</h2>
                <p className="text-gray-700 mb-4">
                  To access certain features of our service, you may be required to create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Keep your password secure and confidential</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Accept responsibility for all activities that occur under your account</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Subscription and Payment</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Free Trial:</strong> We may offer a free trial period. At the end of the trial, your subscription will automatically convert to a paid plan unless you cancel.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Subscription Fees:</strong> You agree to pay all fees associated with your chosen subscription plan. All fees are in U.S. dollars and are non-refundable except as required by law.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Automatic Renewal:</strong> Your subscription will automatically renew at the end of each billing period unless you cancel before the renewal date.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Payment Method:</strong> You must provide a valid payment method. By providing payment information, you authorize us to charge all fees to your payment method.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cancellation and Refunds</h2>
                <p className="text-gray-700 mb-4">
                  You may cancel your subscription at any time through your account settings or by contacting our support team. Upon cancellation:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>You will retain access to paid features until the end of your current billing period</li>
                  <li>Your account will not be charged for subsequent billing periods</li>
                  <li>No refunds will be provided for partial billing periods</li>
                  <li>Your data will be retained according to our Privacy Policy</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Acceptable Use</h2>
                <p className="text-gray-700 mb-4">You agree NOT to use our service to:</p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit any harmful or malicious code</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the service</li>
                  <li>Use the service for any illegal or unauthorized purpose</li>
                  <li>Resell or redistribute the service without permission</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  The Crew Ops Pro platform, including all content, features, and functionality, is owned by Crew Ops Pro and is protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Your Content:</strong> You retain all rights to the data and content you upload to our platform. By using our service, you grant us a limited license to use, store, and display your content solely for the purpose of providing our services to you.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Security and Privacy</h2>
                <p className="text-gray-700 mb-4">
                  We take data security seriously and implement industry-standard measures to protect your information. However, no method of transmission over the internet is 100% secure. For more information, please review our <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</Link>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Service Availability</h2>
                <p className="text-gray-700 mb-4">
                  While we strive to provide uninterrupted service, we do not guarantee that our service will be available at all times. We may experience:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Scheduled maintenance and updates</li>
                  <li>Unexpected downtime due to technical issues</li>
                  <li>Service modifications or improvements</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  We are not liable for any damages resulting from service interruptions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Disclaimer of Warranties</h2>
                <p className="text-gray-700 mb-4">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, CREATIVE JOB HUB SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Indemnification</h2>
                <p className="text-gray-700 mb-4">
                  You agree to indemnify, defend, and hold harmless Crew Ops Pro and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Your use of the service</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any rights of another party</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Modifications to Terms</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify these Terms at any time. We will notify you of any material changes by:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Posting the updated Terms on our website</li>
                  <li>Sending an email notification to your registered email address</li>
                  <li>Displaying a notice within the platform</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Your continued use of the service after changes are posted constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Termination</h2>
                <p className="text-gray-700 mb-4">
                  We may terminate or suspend your account and access to the service immediately, without prior notice, for any reason, including but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Violation of these Terms</li>
                  <li>Fraudulent or illegal activity</li>
                  <li>Non-payment of fees</li>
                  <li>Abusive behavior toward our staff or other users</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Governing Law</h2>
                <p className="text-gray-700 mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Dispute Resolution</h2>
                <p className="text-gray-700 mb-4">
                  Any disputes arising from these Terms or your use of the service shall be resolved through binding arbitration, except that either party may seek injunctive relief in court for intellectual property disputes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong>{' '}
                    <a href="mailto:support@crewopspro.com" className="text-blue-600 hover:text-blue-700">
                      support@crewopspro.com
                    </a>
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Website:</strong>{' '}
                    <a href="https://www.crewopspro.com" className="text-blue-600 hover:text-blue-700">
                      crewopspro.com
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Contact Form:</strong>{' '}
                    <Link to="/contact" className="text-blue-600 hover:text-blue-700">
                      crewopspro.com/contact
                    </Link>
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Severability</h2>
                <p className="text-gray-700 mb-4">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">19. Entire Agreement</h2>
                <p className="text-gray-700 mb-4">
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and Crew Ops Pro regarding the use of our service.
                </p>
              </section>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-gray-600 text-center">
                  By using Crew Ops Pro, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
