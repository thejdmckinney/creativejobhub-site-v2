import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';
import { trackTrialSignup } from '../utils/analytics';

export default function QuickBooksIntegration() {
  const faqs = [
    {
      question: "Does CrewOpsPro sync with both QuickBooks Online and Desktop?",
      answer: "CrewOpsPro syncs with QuickBooks Online. Most field service businesses use QuickBooks Online because it's cloud-based and accessible from anywhere. If you use QuickBooks Desktop, you can export/import data via CSV files."
    },
    {
      question: "What data syncs between CrewOpsPro and QuickBooks?",
      answer: "Invoices, customers, payments, expenses, and items/services all sync automatically. When you create an invoice in CrewOpsPro, it appears in QuickBooks. When customers pay, the payment records in both systems. This eliminates double-entry bookkeeping."
    },
    {
      question: "Do I have to pay extra for QuickBooks integration?",
      answer: "No. QuickBooks sync is included in CrewOpsPro's $89/month price. Some competitors (like Jobber) charge $50/month extra for QuickBooks integration. We think that's wrong - it should be included."
    },
    {
      question: "How often does data sync?",
      answer: "Real-time for critical data (invoices, payments). Other data syncs every 15 minutes. You can also manually trigger a sync anytime if you need immediate updates."
    },
    {
      question: "Will QuickBooks integration mess up my books?",
      answer: "No. The sync is designed to maintain your chart of accounts and existing structure. During setup, you map CrewOpsPro's accounts to your QuickBooks accounts. After that, everything flows automatically without disrupting your books."
    },
    {
      question: "Can I control which invoices sync to QuickBooks?",
      answer: "Yes. You can set rules (e.g., 'only sync paid invoices' or 'sync all invoices immediately'). Most businesses sync all invoices immediately so QuickBooks stays up-to-date."
    },
    {
      question: "What if I already have customers in QuickBooks?",
      answer: "During setup, we'll import your existing QuickBooks customers into CrewOpsPro. This prevents duplicates. Going forward, if you add a customer in CrewOpsPro, they're added to QuickBooks automatically."
    },
    {
      question: "Can my accountant access the QuickBooks data?",
      answer: "Yes. Your accountant accesses QuickBooks directly as they normally would. They don't need access to CrewOpsPro - all financial data is in QuickBooks where they expect it."
    },
    {
      question: "What happens if the sync fails?",
      answer: "You get an error notification immediately. Common issues: QuickBooks credentials expired, item mapping needs updating. Our support team can fix sync issues quickly. Meanwhile, your data is safe in CrewOpsPro."
    },
    {
      question: "Do I need QuickBooks to use CrewOpsPro?",
      answer: "No. QuickBooks is optional. CrewOpsPro has built-in reporting (revenue, expenses, profit/loss) that works without QuickBooks. But if you want professional accounting software for taxes, QuickBooks integration is there."
    },
    {
      question: "Can I disconnect QuickBooks later if I don't like it?",
      answer: "Yes. You can disconnect anytime. Your CrewOpsPro data stays intact. You can reconnect later if needed. There's no penalty or fee for disconnecting."
    },
    {
      question: "Will this work with my QuickBooks accountant edition?",
      answer: "Yes. CrewOpsPro syncs with all editions of QuickBooks Online (Simple Start, Essentials, Plus, Advanced, Accountant)."
    }
  ];

  const syncFeatures = [
    {
      name: "Invoices",
      description: "Invoices created in CrewOpsPro automatically appear in QuickBooks",
      frequency: "Real-time",
      benefit: "No double-entry. Create invoice on-site, it's in QuickBooks instantly."
    },
    {
      name: "Payments",
      description: "When customers pay via credit card or cash, payment records in QuickBooks",
      frequency: "Real-time",
      benefit: "Accurate cash flow tracking. Know exactly what's been paid."
    },
    {
      name: "Customers",
      description: "New customers in CrewOpsPro sync to QuickBooks customer list",
      frequency: "Every 15 min",
      benefit: "One customer database. No duplicates or missing customers."
    },
    {
      name: "Expenses",
      description: "Materials, labor, and job costs sync to QuickBooks as expenses",
      frequency: "Daily",
      benefit: "Track profitability per job. See which jobs made money."
    },
    {
      name: "Items/Services",
      description: "Your service catalog (\"HVAC Tune-up\", \"Pool Cleaning\") syncs",
      frequency: "Every 15 min",
      benefit: "Consistent pricing. Same services in both systems."
    }
  ];

  const useCases = [
    {
      business: "Anderson HVAC",
      size: "7 technicians",
      location: "Dallas, TX",
      problem: "Technicians created paper invoices in field. Office staff spent 10 hours/week entering them into QuickBooks. Mistakes common (wrong amounts, typos).",
      solution: "Techs now create invoices in CrewOpsPro mobile app on-site. Invoices sync to QuickBooks automatically. Office staff does zero data entry.",
      result: "Saved 10 hours/week = $400/week = $1,600/month saved. Fewer accounting errors. QuickBooks always up-to-date.",
      savings: "$1,600/month saved"
    },
    {
      business: "Blue Wave Pool Service",
      size: "12 pool techs",
      location: "Phoenix, AZ",
      problem: "Had 80 recurring customers (weekly service). Office staff manually created 320 invoices/month in QuickBooks. Took 20+ hours monthly.",
      solution: "CrewOpsPro automatically creates recurring invoices and syncs to QuickBooks. Happens automatically every Monday.",
      result: "Eliminated 20 hours/month of manual invoice creation. Office manager now focuses on business growth instead of data entry.",
      savings: "20 hours/month saved"
    },
    {
      business: "Martinez Plumbing",
      size: "4 plumbers",
      location: "Austin, TX",
      problem: "Accountant charged $300/month to reconcile field invoices with QuickBooks. Too many discrepancies between field paperwork and books.",
      solution: "Direct QuickBooks sync means field invoices are already in QuickBooks. Accountant reconciles automatically.",
      result: "Accounting bill dropped from $300/month to $150/month. Cleaner books, fewer errors, accountant spends less time.",
      savings: "$150/month saved"
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Field Service Software with QuickBooks Integration | Auto-Sync Invoices | CrewOpsPro"
        description="Field service software that syncs with QuickBooks Online. Invoices, payments, customers, and expenses sync automatically. No double-entry. $89/month - QuickBooks integration included (not extra)."
        keywords="field service software quickbooks integration, quickbooks field service management, quickbooks sync field service, quickbooks online field service software, auto sync quickbooks invoices"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.crewopspro.com' },
        { name: 'QuickBooks Integration', url: 'https://www.crewopspro.com/field-service-software-quickbooks-integration' }
      ]} />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-yellow-400 text-green-900 px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
              💚 QUICKBOOKS INTEGRATION INCLUDED
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Field Service Software with QuickBooks Integration
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-6 max-w-4xl mx-auto">
              Stop entering field invoices into QuickBooks manually. <strong className="text-yellow-300">Automatic sync</strong> means 
              invoices, payments, and customers flow from the field to your books <strong className="text-yellow-300">without data entry</strong>.
            </p>
            <div className="flex items-center justify-center gap-3 mb-8">
              <StarRating />
              <span className="text-green-200">4.9/5 from 300+ businesses using QuickBooks integration</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Save 10-20 Hours Per Month on Bookkeeping</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">📱</div>
                <p className="font-bold mb-2">Create Invoice in Field</p>
                <p className="text-sm text-green-200">Technician finishes job, sends invoice from phone</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <p className="font-bold mb-2">Auto-Syncs to QuickBooks</p>
                <p className="text-sm text-green-200">Invoice appears in QuickBooks instantly</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">✅</div>
                <p className="font-bold mb-2">Zero Manual Entry</p>
                <p className="text-sm text-green-200">Office staff does nothing. Books stay current.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/signup"
              onClick={() => trackTrialSignup('quickbooks-integration-hero')}
              className="inline-block px-10 py-5 bg-yellow-400 text-green-900 font-bold text-xl rounded-lg hover:bg-yellow-300 transition-all transform hover:scale-105 text-center shadow-xl"
            >
              Try QuickBooks Sync Free - 14 Days →
            </Link>
            <Link
              to="/pricing"
              className="inline-block px-10 py-5 bg-white text-green-900 font-bold text-xl rounded-lg hover:bg-gray-100 transition-all text-center shadow-xl"
            >
              See Pricing ($89/month)
            </Link>
          </div>

          <p className="text-center text-green-200 text-lg">
            ✓ QuickBooks Online integration included &nbsp;•&nbsp; ✓ No extra fees &nbsp;•&nbsp; ✓ Real-time sync
          </p>
        </div>
      </section>

      {/* What Syncs */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            What Data Syncs Between CrewOpsPro and QuickBooks?
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
            Everything your accountant needs flows automatically from the field to your books
          </p>

          <div className="space-y-6">
            {syncFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-600">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{feature.name}</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                        {feature.frequency}
                      </span>
                    </div>
                    <p className="text-lg text-gray-700 mb-3">{feature.description}</p>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-blue-900 mb-1">💡 Benefit:</p>
                      <p className="text-sm text-gray-700">{feature.benefit}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border-2 border-yellow-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              The Big Picture: Your Complete Workflow
            </h3>
            <div className="grid md:grid-cols-5 gap-4 text-center">
              <div>
                <div className="text-3xl mb-2">🔨</div>
                <p className="font-bold text-gray-900 mb-1">1. Finish Job</p>
                <p className="text-sm text-gray-600">Technician completes work</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📱</div>
                <p className="font-bold text-gray-900 mb-1">2. Create Invoice</p>
                <p className="text-sm text-gray-600">Mobile app, 30 seconds</p>
              </div>
              <div>
                <div className="text-3xl mb-2">⚡</div>
                <p className="font-bold text-gray-900 mb-1">3. Auto-Sync</p>
                <p className="text-sm text-gray-600">Invoice → QuickBooks</p>
              </div>
              <div>
                <div className="text-3xl mb-2">💳</div>
                <p className="font-bold text-gray-900 mb-1">4. Customer Pays</p>
                <p className="text-sm text-gray-600">Credit card or check</p>
              </div>
              <div>
                <div className="text-3xl mb-2">✅</div>
                <p className="font-bold text-gray-900 mb-1">5. Payment Recorded</p>
                <p className="text-sm text-gray-600">Both systems updated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why QuickBooks Integration Matters */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why QuickBooks Integration Is Essential for Field Service
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-4xl">⏰</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Save 10-20 Hours Per Month</h3>
                  <p className="text-gray-700 mb-4">
                    Manual data entry is the #1 time-waster for field service businesses. Office staff spends hours each week typing field invoices into QuickBooks.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-bold text-green-700 mb-2">Time Savings Example:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 50 invoices/week × 3 min each = 150 min/week</li>
                      <li>• 10 hours/month saved</li>
                      <li>• @ $25/hour = <strong>$250/month saved</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🎯</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Eliminate Data Entry Errors</h3>
                  <p className="text-gray-700 mb-4">
                    Typos, wrong amounts, missed invoices - manual entry creates accounting errors. QuickBooks integration eliminates human error.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="font-bold text-blue-700 mb-2">Common Errors Prevented:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Wrong customer name/ID</li>
                      <li>• Incorrect invoice amount</li>
                      <li>• Missed or duplicate invoices</li>
                      <li>• Wrong date or payment terms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💰</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Get Paid Faster</h3>
                  <p className="text-gray-700 mb-4">
                    Invoices go out immediately after job completion (not days later when office staff enters them). Faster invoicing = faster payment.
                  </p>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="font-bold text-purple-700 mb-2">Payment Timeline:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Old way:</strong> Invoice sent 2-3 days after job → paid in 30 days = 32-33 days</li>
                      <li>• <strong>With sync:</strong> Invoice sent same day → paid in 30 days = 30 days</li>
                      <li>• Get paid 2-3 days faster on every job</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📊</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Real-Time Financial Visibility</h3>
                  <p className="text-gray-700 mb-4">
                    Know your cash position today (not last week). QuickBooks stays current automatically, so you always know where the business stands financially.
                  </p>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <p className="font-bold text-orange-700 mb-2">What You Can See Instantly:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Revenue this week/month</li>
                      <li>• Outstanding invoices (AR)</li>
                      <li>• Job profitability</li>
                      <li>• Cash flow projection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Business Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Real Businesses Using QuickBooks Integration
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            See how field service businesses eliminated manual bookkeeping
          </p>

          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-white rounded-xl p-8 shadow-lg border-l-4 border-green-600">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{useCase.business}</h3>
                    <p className="text-gray-600">{useCase.location} • {useCase.size}</p>
                  </div>
                  <div className="bg-green-100 px-4 py-2 rounded-lg">
                    <p className="text-sm font-bold text-green-700">{useCase.savings}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="text-sm font-bold text-red-700 mb-2">❌ The Problem:</p>
                    <p className="text-sm text-gray-700">{useCase.problem}</p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm font-bold text-blue-700 mb-2">✓ The Solution:</p>
                    <p className="text-sm text-gray-700">{useCase.solution}</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm font-bold text-green-700 mb-2">📈 The Result:</p>
                    <p className="text-sm text-gray-700">{useCase.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            How to Set Up QuickBooks Integration
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Takes about 15 minutes. We'll guide you through every step.
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Connect Your QuickBooks Account</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    In CrewOpsPro, go to Settings → Integrations → QuickBooks. Click "Connect to QuickBooks". 
                    You'll log in to QuickBooks and authorize the connection.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Security:</strong> Uses official Intuit OAuth2 authentication. CrewOpsPro never sees your QuickBooks password.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Map Your Accounts</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Tell CrewOpsPro which QuickBooks accounts to use. For example: "Revenue from field services goes to 'Service Revenue' account."
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700"><strong>Common mappings:</strong></p>
                    <ul className="text-sm text-gray-600 space-y-1 mt-2">
                      <li>• Income Account (e.g., "Service Revenue")</li>
                      <li>• Payment Account (e.g., "Undeposited Funds")</li>
                      <li>• Expense Accounts (e.g., "Materials", "Labor")</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Import Existing Customers (Optional)</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    If you already have customers in QuickBooks, import them to CrewOpsPro. This prevents duplicate customer records.
                  </p>
                  <p className="text-gray-600">
                    Takes 2-3 minutes. CrewOpsPro matches by name/email and merges duplicate customers automatically.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Set Sync Rules</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Choose what syncs and when. Most businesses use default settings: "Sync all invoices immediately, sync payments when received."
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-green-700 font-semibold">
                      ✓ Done! From now on, everything syncs automatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            QuickBooks Integration: CrewOpsPro vs Competitors
          </h2>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200">
            <table className="w-full">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-4 py-4 text-center">CrewOpsPro</th>
                  <th className="px-4 py-4 text-center">Jobber</th>
                  <th className="px-4 py-4 text-center">Housecall Pro</th>
                  <th className="px-4 py-4 text-center">ServiceTitan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="px-6 py-4 font-semibold">QuickBooks Online Sync</td>
                  <td className="px-4 py-4 text-center text-green-600 font-bold">✓ Included</td>
                  <td className="px-4 py-4 text-center text-red-600">+$50/mo</td>
                  <td className="px-4 py-4 text-center text-green-600">✓ Included</td>
                  <td className="px-4 py-4 text-center text-green-600">✓ Included</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Invoice Sync</td>
                  <td className="px-4 py-4 text-center text-green-600">✓ Real-time</td>
                  <td className="px-4 py-4 text-center text-green-600">✓ Real-time</td>
                  <td className="px-4 py-4 text-center text-green-600">✓ Real-time</td>
                  <td className="px-4 py-4 text-center text-green-600">✓ Real-time</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-semibold">Payment Sync</td>
                  <td className="px-4 py-4 text-center text-green-600">✓ Real-time</td>
                  <td className="px-4 py-4 text-center text-green-600">✓ Real-time</td>
                  <td className="px-4 py-4 text-center text-green-600">✓ Real-time</td>
                  <td className="px-4 py-4 text-center text-green-600">✓ Real-time</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Customer Sync</td>
                  <td className="px-4 py-4 text-center text-green-600">✓ Bi-directional</td>
                  <td className="px-4 py-4 text-center text-green-600">✓ Bi-directional</td>
                  <td className="px-4 py-4 text-center text-green-600">✓ Bi-directional</td>
                  <td className="px-4 py-4 text-center text-green-600">✓ Bi-directional</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-semibold">Expense Tracking</td>
                  <td className="px-4 py-4 text-center text-green-600">✓</td>
                  <td className="px-4 py-4 text-center text-green-600">✓</td>
                  <td className="px-4 py-4 text-center text-green-600">✓</td>
                  <td className="px-4 py-4 text-center text-green-600">✓</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Setup Time</td>
                  <td className="px-4 py-4 text-center text-green-600">15 min</td>
                  <td className="px-4 py-4 text-center">20 min</td>
                  <td className="px-4 py-4 text-center">15 min</td>
                  <td className="px-4 py-4 text-center text-red-600">1-2 hours</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-semibold">Total Cost (with QB sync)</td>
                  <td className="px-4 py-4 text-center text-green-600 font-bold">$89/mo</td>
                  <td className="px-4 py-4 text-center text-red-600">$249/mo</td>
                  <td className="px-4 py-4 text-center">$169/mo</td>
                  <td className="px-4 py-4 text-center text-red-600">$800+/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center bg-green-50 rounded-xl p-6">
            <p className="text-lg text-gray-700">
              <strong>CrewOpsPro advantage:</strong> QuickBooks integration is included at $89/month. 
              Jobber charges <strong>$50/month extra</strong> for the same feature.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            QuickBooks Integration FAQ
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            More Resources
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/affordable-field-service-software" className="group bg-white rounded-lg p-6 hover:shadow-lg transition-all border">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                Affordable Field Service Software
              </h3>
              <p className="text-gray-600">Compare pricing for field service software with QuickBooks sync.</p>
            </Link>
            
            <Link to="/jobber-alternative-under-100" className="group bg-white rounded-lg p-6 hover:shadow-lg transition-all border">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                Jobber Alternative (No QB Fee)
              </h3>
              <p className="text-gray-600">Save $50/month - QuickBooks sync included with CrewOpsPro.</p>
            </Link>
            
            <Link to="/pricing" className="group bg-white rounded-lg p-6 hover:shadow-lg transition-all border">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                CrewOpsPro Pricing
              </h3>
              <p className="text-gray-600">$89/month flat rate. QuickBooks integration included.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Manually Entering Invoices into QuickBooks
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Automatic sync. Zero data entry. Save 10-20 hours per month. $89/month - QuickBooks integration included.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/signup"
              onClick={() => trackTrialSignup('quickbooks-integration-final-cta')}
              className="inline-block px-10 py-5 bg-yellow-400 text-green-900 font-bold text-xl rounded-lg hover:bg-yellow-300 transition-all transform hover:scale-105"
            >
              Try QuickBooks Sync Free - 14 Days →
            </Link>
            <Link
              to="/contact"
              className="inline-block px-10 py-5 bg-green-700 text-white font-bold text-xl rounded-lg hover:bg-green-800 transition-all border-2 border-white"
            >
              Talk to QuickBooks Expert
            </Link>
          </div>

          <p className="text-green-100 text-lg mb-8">
            ✓ No credit card required &nbsp;•&nbsp; ✓ 15-minute setup &nbsp;•&nbsp; ✓ Free support
          </p>

          <div className="flex items-center justify-center gap-3">
            <StarRating />
            <span className="text-green-200">Rated 4.9/5 for QuickBooks integration ease</span>
          </div>
        </div>
      </section>
    </div>
  );
}
