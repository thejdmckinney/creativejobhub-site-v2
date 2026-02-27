import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function SmsTerms() {
  return (
    <div className="bg-white">
      <SEO 
        title="SMS Terms and Conditions | Crew Ops Pro"
        description="SMS messaging terms and conditions for Crew Ops Pro marketing communications."
        keywords="SMS terms, text message terms, mobile messaging terms"
      />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'SMS Terms' }
        ]} 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">SMS Terms and Conditions</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> February 27, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Program Overview</h2>
            <p className="text-gray-700 mb-4">
              By subscribing to Crew Ops Pro SMS marketing messages, you agree to receive recurring automated marketing text messages (e.g. product updates, special offers, tips) from Crew Ops Pro at the phone number provided. Consent is not a condition of purchase.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Message Frequency</h2>
            <p className="text-gray-700 mb-4">
              Message frequency varies. You may receive up to 4 messages per month. We respect your time and will only send relevant, valuable information about our field service management software.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Message and Data Rates</h2>
            <p className="text-gray-700 mb-4">
              Message and data rates may apply. Standard messaging rates from your mobile carrier will apply to all SMS messages sent and received. Please check with your carrier for details on your specific plan.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Opt-Out</h2>
            <p className="text-gray-700 mb-4">
              You can cancel the SMS service at any time by texting <strong>"STOP"</strong> to any message you receive from us. After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us.
            </p>
            <p className="text-gray-700 mb-4">
              If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Get Help</h2>
            <p className="text-gray-700 mb-4">
              For help or more information, text <strong>"HELP"</strong> to any message you receive from us, or contact us at:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Email: support@crewopspro.com</li>
              <li>Phone: Available through our contact page</li>
              <li>Website: www.crewopspro.com/contact</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Supported Carriers</h2>
            <p className="text-gray-700 mb-4">
              Our SMS service is available on the following mobile phone carriers:
            </p>
            <p className="text-gray-700 mb-4">
              Major carriers: AT&T, Sprint, T-Mobile, Verizon Wireless, Boost, Cricket, MetroPCS, U.S. Cellular, Virgin Mobile, Google Voice, and others.
            </p>
            <p className="text-gray-700 mb-4">
              <em>Carriers are not liable for delayed or undelivered messages.</em>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We respect your privacy. Any information you provide through SMS messaging will be handled in accordance with our Privacy Policy. We will not share your phone number with third parties for their marketing purposes without your explicit consent.
            </p>
            <p className="text-gray-700 mb-4">
              For more information about how we handle your personal data, please review our <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Responsibilities</h2>
            <p className="text-gray-700 mb-4">
              By subscribing to our SMS service, you represent and warrant that:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>You are the owner or authorized user of the mobile phone number you provide</li>
              <li>You are at least 18 years of age or have parental/guardian consent</li>
              <li>You will comply with all applicable laws and regulations</li>
              <li>You will not use the service for any unlawful purpose</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Modifications</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify or discontinue, temporarily or permanently, the SMS service (or any part thereof) with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer of Warranties</h2>
            <p className="text-gray-700 mb-4">
              The SMS service is provided "as is" without warranties of any kind, either express or implied. We do not guarantee that:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Messages will be delivered without delay or error</li>
              <li>The service will be uninterrupted or error-free</li>
              <li>All messages will be received on all devices or carriers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, Crew Ops Pro shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Your use or inability to use the SMS service</li>
              <li>Any unauthorized access to or use of our servers</li>
              <li>Any interruption or cessation of transmission to or from the service</li>
              <li>Any bugs, viruses, or other harmful code that may be transmitted through the service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These SMS Terms and Conditions shall be governed by and construed in accordance with the laws of the United States, including the Telephone Consumer Protection Act (TCPA) and regulations set forth by the Federal Communications Commission (FCC).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We may update these SMS Terms and Conditions from time to time. We will notify you of any material changes by sending a text message to the phone number you provided or by posting a notice on our website. Your continued participation in the SMS program after such modifications will constitute your acknowledgment and acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Questions or Concerns</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions or concerns about these SMS Terms and Conditions, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Crew Ops Pro</strong></p>
              <p className="text-gray-700 mb-2">Email: support@crewopspro.com</p>
              <p className="text-gray-700 mb-2">Website: <a href="https://www.crewopspro.com/contact" className="text-blue-600 hover:text-blue-800 underline">www.crewopspro.com/contact</a></p>
            </div>
          </section>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
            <p className="text-sm text-gray-700">
              <strong>Quick Summary:</strong> By subscribing, you agree to receive marketing texts from Crew Ops Pro (up to 4/month). Message & data rates may apply. Text STOP to cancel, HELP for help. We respect your privacy and follow all applicable laws.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
