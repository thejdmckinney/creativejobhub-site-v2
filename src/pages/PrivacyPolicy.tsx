import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Creative Job Hub</title>
        <meta name="description" content="Privacy Policy for Creative Job Hub. Learn how we collect, use, and protect your personal information." />
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
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
              <p className="text-gray-600">Last Updated: January 26, 2026</p>
            </div>

            {/* Content */}
            <div className="prose prose-blue max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  Welcome to Creative Job Hub. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our field service management platform.
                </p>
                <p className="text-gray-700 mb-4">
                  By using Creative Job Hub, you agree to the collection and use of information in accordance with this policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Information You Provide</h3>
                <p className="text-gray-700 mb-4">We collect information that you voluntarily provide to us, including:</p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Account Information:</strong> Name, email address, phone number, company name, business address</li>
                  <li><strong>Payment Information:</strong> Credit card details, billing address (processed securely through Stripe)</li>
                  <li><strong>Profile Information:</strong> Profile photo, job title, business details</li>
                  <li><strong>Customer Data:</strong> Information about your customers that you input into the platform</li>
                  <li><strong>Communication Data:</strong> Messages, support tickets, feedback, and correspondence with us</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Automatically Collected Information</h3>
                <p className="text-gray-700 mb-4">When you use our service, we automatically collect:</p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Usage Data:</strong> Pages visited, features used, time spent, click patterns</li>
                  <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                  <li><strong>Location Data:</strong> GPS coordinates (with your permission) for route optimization features</li>
                  <li><strong>Cookies:</strong> Session cookies, preference cookies, analytics cookies</li>
                  <li><strong>Log Data:</strong> Server logs, error reports, system activity</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Third-Party Information</h3>
                <p className="text-gray-700 mb-4">We may receive information from third-party services you connect to Creative Job Hub:</p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Google Calendar integration</li>
                  <li>QuickBooks or other accounting software</li>
                  <li>Payment processors (Stripe)</li>
                  <li>Communication tools (Twilio for SMS)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Service Provision</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Create and manage your account</li>
                  <li>Provide access to platform features</li>
                  <li>Process payments and transactions</li>
                  <li>Enable communication with your customers</li>
                  <li>Optimize routes and scheduling</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Service Improvement</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Analyze usage patterns to improve features</li>
                  <li>Develop new functionality</li>
                  <li>Fix bugs and technical issues</li>
                  <li>Conduct research and testing</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Communication</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Send service-related notifications</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Send newsletters and marketing communications (with your consent)</li>
                  <li>Notify you of updates, new features, or special offers</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.4 Security and Fraud Prevention</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Detect and prevent fraudulent activity</li>
                  <li>Protect against security threats</li>
                  <li>Monitor and analyze security incidents</li>
                  <li>Enforce our Terms of Service</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.5 Legal Compliance</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Comply with legal obligations</li>
                  <li>Respond to legal requests and court orders</li>
                  <li>Exercise or defend legal claims</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Share Your Information</h2>
                <p className="text-gray-700 mb-4">We do not sell your personal information. We may share your information in the following circumstances:</p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Service Providers</h3>
                <p className="text-gray-700 mb-4">We share information with trusted third-party service providers who help us operate our platform:</p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Stripe:</strong> Payment processing</li>
                  <li><strong>Twilio:</strong> SMS and communication services</li>
                  <li><strong>Amazon Web Services (AWS):</strong> Cloud hosting and storage</li>
                  <li><strong>Google:</strong> Analytics, maps, and calendar integration</li>
                  <li><strong>Resend:</strong> Email delivery services</li>
                  <li><strong>Supabase:</strong> Database services</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Business Transfers</h3>
                <p className="text-gray-700 mb-4">
                  If Creative Job Hub is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on our website of any change in ownership.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Legal Requirements</h3>
                <p className="text-gray-700 mb-4">We may disclose your information if required by law or in response to:</p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Court orders or legal processes</li>
                  <li>Government or law enforcement requests</li>
                  <li>Protection of our rights, property, or safety</li>
                  <li>Emergency situations involving safety</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.4 With Your Consent</h3>
                <p className="text-gray-700 mb-4">
                  We may share your information with other parties when you provide explicit consent.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Encryption:</strong> All data is encrypted in transit (SSL/TLS) and at rest (AES-256)</li>
                  <li><strong>Access Controls:</strong> Strict authentication and authorization protocols</li>
                  <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
                  <li><strong>Employee Training:</strong> All staff trained on data protection practices</li>
                  <li><strong>Secure Infrastructure:</strong> Data stored in SOC 2 compliant data centers</li>
                  <li><strong>Backup Systems:</strong> Regular automated backups with encryption</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
                <p className="text-gray-700 mb-4">
                  We retain your information for as long as necessary to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Provide you with our services</li>
                  <li>Comply with legal obligations</li>
                  <li>Resolve disputes</li>
                  <li>Enforce our agreements</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  When you close your account, we will delete or anonymize your personal information within 90 days, except where we are required to retain it for legal purposes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Privacy Rights</h2>
                <p className="text-gray-700 mb-4">
                  Depending on your location, you may have the following rights:
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Access and Portability</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Request a copy of your personal information</li>
                  <li>Export your data in a machine-readable format</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 Correction and Update</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Update incorrect or incomplete information</li>
                  <li>Correct inaccurate data</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.3 Deletion</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Request deletion of your personal information</li>
                  <li>Close your account permanently</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.4 Opt-Out</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Unsubscribe from marketing emails (link in every email)</li>
                  <li>Disable non-essential cookies</li>
                  <li>Opt out of certain data collection</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.5 Object and Restrict</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Object to certain types of processing</li>
                  <li>Restrict how we use your information</li>
                </ul>

                <p className="text-gray-700 mb-4">
                  To exercise any of these rights, please contact us at{' '}
                  <a href="mailto:privacy@creativejobhub.com" className="text-blue-600 hover:text-blue-700 underline">
                    privacy@creativejobhub.com
                  </a>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies and Tracking</h2>
                <p className="text-gray-700 mb-4">We use cookies and similar tracking technologies to:</p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Essential Cookies:</strong> Required for basic site functionality (cannot be disabled)</li>
                  <li><strong>Performance Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Marketing Cookies:</strong> Track your visits across websites for advertising purposes</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Links</h2>
                <p className="text-gray-700 mb-4">
                  Our service may contain links to third-party websites or services that are not operated by us. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
                <p className="text-gray-700 mb-4">
                  Creative Job Hub is not intended for use by anyone under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. International Data Transfers</h2>
                <p className="text-gray-700 mb-4">
                  Your information may be transferred to and processed in countries other than your own. These countries may have different data protection laws. By using our service, you consent to such transfers.
                </p>
                <p className="text-gray-700 mb-4">
                  We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. California Privacy Rights (CCPA)</h2>
                <p className="text-gray-700 mb-4">
                  If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Right to know what personal information is collected</li>
                  <li>Right to know if personal information is sold or disclosed</li>
                  <li>Right to opt-out of the sale of personal information</li>
                  <li>Right to request deletion of personal information</li>
                  <li>Right to non-discrimination for exercising your rights</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. European Privacy Rights (GDPR)</h2>
                <p className="text-gray-700 mb-4">
                  If you are in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR):
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Right to access your personal data</li>
                  <li>Right to rectification of inaccurate data</li>
                  <li>Right to erasure ("right to be forgotten")</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                  <li>Right to lodge a complaint with a supervisory authority</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Changes to This Privacy Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Posting the new Privacy Policy on this page</li>
                  <li>Updating the "Last Updated" date</li>
                  <li>Sending you an email notification for material changes</li>
                  <li>Displaying a notice within the platform</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Privacy Team Email:</strong>{' '}
                    <a href="mailto:privacy@creativejobhub.com" className="text-blue-600 hover:text-blue-700">
                      privacy@creativejobhub.com
                    </a>
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>General Support:</strong>{' '}
                    <a href="mailto:support@creativejobhub.com" className="text-blue-600 hover:text-blue-700">
                      support@creativejobhub.com
                    </a>
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Website:</strong>{' '}
                    <a href="https://www.creativejobhub.com" className="text-blue-600 hover:text-blue-700">
                      creativejobhub.com
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Contact Form:</strong>{' '}
                    <Link to="/contact" className="text-blue-600 hover:text-blue-700">
                      creativejobhub.com/contact
                    </Link>
                  </p>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-gray-600 text-center">
                  By using Creative Job Hub, you acknowledge that you have read and understood this Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
