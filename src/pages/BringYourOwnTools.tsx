import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SavingsCalculator from '../components/SavingsCalculator';

export default function BringYourOwnTools() {
  return (
    <>
      <SEO 
        title="Stop Paying $300/Month for Tools That Should Be Free"
        description="Creative Job Hub shows you how to connect industry-leading tools like Twilio, Resend, Mapbox, and Stripe to your business - for free. No markups. No middlemen. Just honest pricing and real control."
        keywords="field service software pricing, twilio integration, stripe integration, mapbox integration, contractor software savings, byot, bring your own tools, fsm software cost"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Stop Paying $300/Month for Tools That Should Be <span className="text-yellow-300">Free</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Creative Job Hub shows you how to connect industry-leading tools to your business - for free. No markups. No middlemen. Just honest pricing and real control.
          </p>
          <a 
            href="#real-math" 
            className="inline-block px-8 py-4 bg-yellow-400 text-blue-900 font-bold text-lg rounded-lg hover:bg-yellow-300 transition-colors"
          >
            See How Much You'll Save
          </a>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            The Field Service Software Scam <span className="text-red-600">Nobody Talks About</span>
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <p className="text-xl text-gray-700 mb-6">
              You're paying Jobber, Housecall Pro, or ServiceTitan $300-500/month. But here's what they're <strong>not</strong> telling you:
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-red-600 pb-2">
              They're Charging You For Free Tools
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-3xl">💬</span>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Text Messages?</h4>
                  <p className="text-gray-700">
                    They use <strong>Twilio</strong> - which is <span className="text-green-600 font-bold">FREE</span> for most small businesses. They charge you per message.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-3xl">📧</span>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Email?</h4>
                  <p className="text-gray-700">
                    They use services like SendGrid or Resend - <span className="text-green-600 font-bold">FREE</span> tier handles thousands of emails. They bundle it into your "plan."
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-3xl">🗺️</span>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Mapping & Routing?</h4>
                  <p className="text-gray-700">
                    <strong>Mapbox</strong> offers 100,000 free map loads monthly. They charge you $50+/month for "premium routing."
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-3xl">💳</span>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Payment Processing?</h4>
                  <p className="text-gray-700">
                    <strong>Stripe</strong> charges 2.9% + $0.30. They add their own fee on top.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-red-50 border-l-4 border-red-600 rounded">
              <p className="text-xl font-bold text-red-900">
                You're Paying Them to Use Free Tools Through Their Account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            We Do It Differently. <span className="text-blue-600">Radically Differently.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Old Way */}
            <div className="bg-gray-100 rounded-xl p-8 border-2 border-gray-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                The Old Way <span className="text-sm font-normal text-gray-600">(Jobber, Housecall Pro)</span>
              </h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="font-bold text-lg text-red-600">Monthly Software Fee: $300+</div>
                <div className="pl-4">├─ SMS (their Twilio account): Included*</div>
                <div className="pl-4">├─ Email (their email service): Included*</div>
                <div className="pl-4">├─ Maps (their Mapbox): Included*</div>
                <div className="pl-4">├─ Payments (their Stripe): Included*</div>
                <div className="pl-4">└─ <span className="text-red-600">*You own nothing. You control nothing.</span></div>
              </div>
            </div>

            {/* Creative Job Hub Way */}
            <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-600 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                The Creative Job Hub Way
              </h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="font-bold text-lg text-green-600">Monthly Software Fee: $89</div>
                <div className="pl-4">├─ Your Twilio Account: $0 (free tier)</div>
                <div className="pl-4">├─ Your Resend Account: $0 (free tier)</div>
                <div className="pl-4">├─ Your Mapbox Account: $0 (free tier)</div>
                <div className="pl-4">├─ Your Stripe Account: Standard 2.9% + $0.30</div>
                <div className="pl-4">└─ <span className="text-green-600">✅ You own everything. You control everything.</span></div>
              </div>
              <div className="mt-6 pt-6 border-t-2 border-blue-600">
                <p className="text-xl font-bold text-blue-900">Total: $89/month for REAL control</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Connect Your Own Tools in <span className="text-blue-600">10 Minutes</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">(We Show You How)</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Twilio */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">SMS & Calling - Twilio</h3>
              <div className="space-y-2 mb-4 text-sm">
                <p><strong>Setup Time:</strong> 5 minutes</p>
                <p><strong className="text-green-600">Your Cost: FREE</strong> (up to 1,000 messages/month)</p>
                <p><strong>What You Get:</strong> Professional business texting & calling</p>
                <p className="text-red-600"><strong>They Charge:</strong> $50+/month for the same thing</p>
              </div>
              <Link 
                to="/signup" 
                className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Setup Guide →
              </Link>
            </div>

            {/* Resend */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email - Resend</h3>
              <div className="space-y-2 mb-4 text-sm">
                <p><strong>Setup Time:</strong> 3 minutes</p>
                <p><strong className="text-green-600">Your Cost: FREE</strong> (up to 3,000 emails/month)</p>
                <p><strong>What You Get:</strong> Professional transactional emails, invoices, estimates</p>
                <p className="text-red-600"><strong>They Charge:</strong> Bundled into $300/month plans</p>
              </div>
              <Link 
                to="/signup" 
                className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Setup Guide →
              </Link>
            </div>

            {/* Mapbox */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Maps & Routing - Mapbox</h3>
              <div className="space-y-2 mb-4 text-sm">
                <p><strong>Setup Time:</strong> 5 minutes</p>
                <p><strong className="text-green-600">Your Cost: FREE</strong> (up to 100,000 map loads/month)</p>
                <p><strong>What You Get:</strong> Route optimization, job mapping, territory management</p>
                <p className="text-red-600"><strong>They Charge:</strong> $50-100/month "premium" tier</p>
              </div>
              <Link 
                to="/signup" 
                className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Setup Guide →
              </Link>
            </div>

            {/* Stripe */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Payment Processing - Stripe</h3>
              <div className="space-y-2 mb-4 text-sm">
                <p><strong>Setup Time:</strong> 10 minutes</p>
                <p><strong className="text-green-600">Your Cost:</strong> Standard 2.9% + $0.30 per transaction</p>
                <p><strong>What You Get:</strong> Direct deposit to YOUR bank, full transaction control</p>
                <p className="text-red-600"><strong>They Charge:</strong> 2.9% + $0.30 PLUS their software fee</p>
              </div>
              <Link 
                to="/signup" 
                className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Setup Guide →
              </Link>
            </div>

            {/* Slack */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Team Chat - Slack <span className="text-sm font-normal text-gray-600">(Optional)</span></h3>
              <div className="space-y-2 mb-4 text-sm">
                <p><strong>Setup Time:</strong> 2 minutes</p>
                <p><strong className="text-green-600">Your Cost: FREE</strong> (for small teams)</p>
                <p><strong>What You Get:</strong> Real-time team communication integrated with jobs</p>
                <p className="text-red-600"><strong>They Charge:</strong> This feature doesn't even exist in most FSM software</p>
              </div>
              <Link 
                to="/signup" 
                className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Setup Guide →
              </Link>
            </div>

            {/* Claude AI - Bonus */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-2 border-purple-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Assistant - Claude <span className="text-sm font-normal text-purple-600">(Coming Soon)</span></h3>
              <div className="space-y-2 mb-4 text-sm">
                <p><strong>Setup Time:</strong> 5 minutes</p>
                <p><strong className="text-green-600">Your Cost:</strong> Pay-as-you-go pricing</p>
                <p><strong>What You Get:</strong> AI-powered customer support, estimate generation, scheduling help</p>
                <p className="text-red-600"><strong>They Charge:</strong> Not available</p>
              </div>
              <Link 
                to="/signup" 
                className="inline-block w-full text-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Get Early Access →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Real Math Section */}
      <section id="real-math" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Let's Do The <span className="text-blue-600">Real Math</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">Calculate your exact savings below</p>

          {/* Interactive Calculator */}
          <SavingsCalculator />

          {/* Static table for reference (optional - can be shown below calculator) */}
          <div className="mt-16 pt-12 border-t-2 border-gray-200">
            <p className="text-center text-gray-600 mb-8">Here's a typical example:</p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Feature</th>
                    <th className="px-6 py-4 text-left">Jobber/HCP Cost</th>
                    <th className="px-6 py-4 text-left">Your Real Cost</th>
                    <th className="px-6 py-4 text-left">Annual Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Software Base</td>
                    <td className="px-6 py-4">$300/mo</td>
                    <td className="px-6 py-4 text-green-600 font-bold">$89/mo</td>
                    <td className="px-6 py-4 text-green-600 font-bold">$2,532/year</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">SMS (500 msgs/mo)</td>
                    <td className="px-6 py-4">Included*</td>
                    <td className="px-6 py-4 text-green-600 font-bold">FREE</td>
                    <td className="px-6 py-4 text-green-600 font-bold">$600/year</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Email (1,000/mo)</td>
                    <td className="px-6 py-4">Included*</td>
                    <td className="px-6 py-4 text-green-600 font-bold">FREE</td>
                    <td className="px-6 py-4 text-green-600 font-bold">$300/year</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Maps/Routing</td>
                    <td className="px-6 py-4">Included*</td>
                    <td className="px-6 py-4 text-green-600 font-bold">FREE</td>
                    <td className="px-6 py-4 text-green-600 font-bold">$600/year</td>
                  </tr>
                  <tr className="bg-blue-50 font-bold text-lg">
                    <td className="px-6 py-4">TOTAL</td>
                    <td className="px-6 py-4 text-red-600">$3,600/year</td>
                    <td className="px-6 py-4 text-green-600">$1,068/year</td>
                    <td className="px-6 py-4 text-green-600 text-2xl">💰 $2,532/year</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center text-sm text-gray-600">
              <p>*Included = You're paying for it, they just hide the cost</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Transparency Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Why Would We Do This?
          </h2>
          <p className="text-3xl text-center mb-12 text-blue-300">Because We're Contractors Too.</p>

          <div className="bg-white/10 backdrop-blur rounded-xl p-8 mb-8">
            <p className="text-lg mb-6">
              I built Creative Job Hub after spending <strong className="text-yellow-300">$10,000+</strong> on overpriced field service software. I was paying Jobber $300/month and realized they were just marking up tools I could use myself.
            </p>
            <p className="text-lg mb-6">
              So I built something different:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-2xl">✅</span>
                <span>Honest pricing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-2xl">✅</span>
                <span>No hidden fees</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-2xl">✅</span>
                <span>Treat contractors like the capable business owners they are</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-2xl">✅</span>
                <span>Give you the knowledge to own your tech stack</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-400 text-gray-900 rounded-xl p-8 text-center">
            <p className="text-2xl font-bold">
              You're not too dumb to set up an API key. And you shouldn't pay $200/month extra just because other software companies think you are.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                "This sounds too good to be true. What's the catch?"
              </h3>
              <p className="text-gray-700">
                No catch. You do spend 10-30 minutes setting up your own accounts. We provide video walkthroughs for each one. If you can follow a recipe, you can do this.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                "What if I go over the free tiers?"
              </h3>
              <p className="text-gray-700">
                The free tiers are GENEROUS. A contractor doing 100 jobs/month typically stays free on all of them. If you grow beyond that, you're making enough money that the $20-50/month for upgraded tiers is nothing - and you're STILL saving $150+/month vs traditional FSM software.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                "What if I need help?"
              </h3>
              <p className="text-gray-700">
                We provide setup support. Our guides are step-by-step with screenshots. And our community of contractors helps each other. Plus, once it's set up, it just works.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                "Do I HAVE to set these up?"
              </h3>
              <p className="text-gray-700">
                Nope. Creative Job Hub works great without any integrations. But if you want SMS, email, advanced mapping, etc., this is how you get those features without the markup.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                "Can I switch my existing Twilio/Stripe accounts over?"
              </h3>
              <p className="text-gray-700">
                Absolutely! If you're already using these tools with another software, you can bring them to Creative Job Hub. Your data, your control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Contractors Are <span className="text-blue-600">Waking Up</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
              <p className="text-gray-700 mb-4">
                "I was paying Jobber $340/month. Set up my own Twilio in 5 minutes and switched to Creative Job Hub. Now I'm at $89/month with MORE features. Feels like I found a cheat code."
              </p>
              <p className="font-bold text-gray-900">— Mike R., Plumbing Contractor</p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
              <p className="text-gray-700 mb-4">
                "The setup guides are idiot-proof. Took me 20 minutes to connect everything. Saving $2,400/year now. Wish I'd found this sooner."
              </p>
              <p className="font-bold text-gray-900">— Sarah K., Electrical Contractor</p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
              <p className="text-gray-700 mb-4">
                "Finally, software that treats me like a business owner, not a cash cow."
              </p>
              <p className="font-bold text-gray-900">— Tom D., HVAC Contractor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Stop Overpaying?
          </h2>
          <p className="text-2xl mb-8 text-blue-100">Start Your 14-Day Free Trial</p>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8">
            <ul className="text-lg space-y-3">
              <li>✅ Set up in 20 minutes</li>
              <li>✅ Connect your own tools (we'll show you how)</li>
              <li>✅ Cancel anytime, no questions asked</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              to="/signup" 
              className="inline-block px-8 py-4 bg-yellow-400 text-blue-900 font-bold text-lg rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Start With Just Creative Job Hub - $89/mo
            </Link>
            <Link 
              to="/signup" 
              className="inline-block px-8 py-4 bg-white text-blue-900 font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors border-2 border-white"
            >
              Start With Full Setup Guide Access - $89/mo
            </Link>
          </div>

          <div className="bg-green-400 text-green-900 rounded-lg py-3 px-6 inline-block font-bold text-lg">
            30-Day Money-Back Guarantee
          </div>
          <p className="mt-4 text-blue-100">
            If you don't save money vs your current software, we'll refund you. Period.
          </p>
        </div>
      </section>

      {/* Bottom Strip */}
      <section className="bg-gray-900 text-gray-400 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-lg italic">
            "Built by a contractor who got tired of getting ripped off. Priced for contractors who know their worth."
          </p>
        </div>
      </section>
    </>
  );
}
