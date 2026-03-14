import SEO from '../components/SEO';
import CTAButton from '../components/CTAButton';

export default function SmartMaterialsList() {
  const features = [
    {
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI analyzes your job requirements and generates complete, job-specific materials lists in seconds.'
    },
    {
      title: 'NEC Code Compliant',
      description: 'Every materials list follows current NEC code requirements with compliance notes included.'
    },
    {
      title: 'Branded PDF Export',
      description: 'Download professional, branded PDFs with your company logo and contact information.'
    },
    {
      title: 'Price Book Integration',
      description: 'Bulk-add materials directly to your Price Book with one click for faster estimating.'
    },
    {
      title: 'Save 15-30 Minutes Per Estimate',
      description: 'Eliminate manual list creation and never forget small hardware items again.'
    },
    {
      title: 'Real-Time Market Pricing',
      description: 'Get accurate pricing based on current market rates and actual product availability.'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Select Job Type',
      description: 'Choose from available job types. Currently supports Electrical Panel Upgrades with more coming soon.',
      image: '/smart-materials-list-1.png'
    },
    {
      number: '2',
      title: 'Answer Quick Questions',
      description: 'Provide job specifics: panel amperage, brand preference, circuit count, service entrance type, and AFCI/GFCI requirements.',
      image: '/smart-materials-list-2.png'
    },
    {
      number: '3',
      title: 'AI Generates Your List',
      description: 'Get a complete, categorized materials list with part numbers, quantities, pricing, and NEC compliance notes.',
      image: '/smart-materials-list-3.png'
    },
    {
      number: '4',
      title: 'Review & Export',
      description: 'Edit quantities, remove items, download a branded PDF, or bulk-add everything to your Price Book.',
      image: '/smart-materials-list-4.png'
    }
  ];

  const categories = [
    'Main Panels & Load Centers',
    'Circuit Breakers (Standard, AFCI, GFCI)',
    'Wire & Cable (By gauge and type)',
    'Grounding Equipment',
    'Hardware & Connectors',
    'Consumables & Accessories'
  ];

  return (
    <>
      <SEO 
        title="Smart Materials List Builder - AI-Powered for Electrical Contractors | Crew Ops Pro"
        description="Generate complete, code-compliant materials lists in seconds. AI-powered tool for electrical contractors saves 15-30 minutes per estimate with accurate pricing and NEC compliance."
        keywords="electrical materials list, panel upgrade materials, AI estimating tool, electrical contractor software, NEC compliant materials list, electrical price book"
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                ✨ New AI-Powered Feature
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Smart Materials List Builder
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Stop wasting 30 minutes creating materials lists. Let AI generate complete, 
                code-compliant lists in seconds—with accurate pricing and part numbers.
              </p>

              <div className="mb-8">
                <CTAButton 
                  text="Start Free Trial" 
                  url="/signup"
                  style="primary"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  ✓ <span>NEC Code Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  ✓ <span>Real Market Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  ✓ <span>Branded PDF Export</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-xl shadow-2xl overflow-hidden border-4 border-white">
                <img 
                  src="/smart-materials-list-1.png" 
                  alt="Smart Materials List Builder Interface"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Stop Losing Time on Manual Materials Lists
                </h2>
                <div className="space-y-4 text-gray-600 text-lg">
                  <p>
                    <strong className="text-red-600">The Old Way:</strong> Spend 30+ minutes per estimate manually 
                    creating materials lists, cross-referencing catalogs, looking up part numbers, 
                    calculating quantities, and hoping you didn't forget anything.
                  </p>
                  <p>
                    <strong className="text-green-600">The New Way:</strong> Answer 5 quick questions and get a 
                    complete, professional materials list in under 60 seconds—with accurate pricing, 
                    part numbers, and NEC compliance built in.
                  </p>
                </div>
                <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <p className="text-gray-900 font-semibold mb-2">
                    "I used to spend 45 minutes building materials lists for panel upgrades. 
                    Now it takes 2 minutes. This feature alone is worth the subscription."
                  </p>
                  <p className="text-gray-600 text-sm">
                    — Mike Torres, Torres Electric, Houston TX
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/smart-materials-list-2.png" 
                  alt="Quick questionnaire interface"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Four simple steps to generate professional, code-compliant materials lists
              </p>
            </div>

            <div className="space-y-16">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                        {step.number}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <img 
                      src={step.image}
                      alt={step.title}
                      className="rounded-lg shadow-xl w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Every List Includes Everything You Need
              </h2>
              <p className="text-xl text-gray-600">
                Organized, detailed, and ready to use
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Categorized Materials
                </h3>
                <ul className="space-y-3">
                  {categories.map((category, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-600 text-xl">✓</span>
                      <span className="text-gray-700">{category}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Every Item Includes
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span className="text-gray-700"><strong>Brand recommendations</strong> and specific part numbers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span className="text-gray-700"><strong>Accurate quantities</strong> based on job requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span className="text-gray-700"><strong>Realistic market pricing</strong> updated regularly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span className="text-gray-700"><strong>NEC code compliance</strong> notes where applicable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span className="text-gray-700"><strong>Installation tips</strong> and best practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Built for Electrical Contractors
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every feature designed to save you time and improve accuracy
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6 bg-blue-600 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Contractors Love It
              </h2>
              <p className="text-xl text-blue-100">
                See what electrical contractors are saying about Smart Materials Lists
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <p className="text-lg mb-4">
                  "Game changer. I'm getting estimates out 3x faster and my accuracy has gone way up. 
                  No more forgotten ground bars or wire connectors."
                </p>
                <p className="font-semibold">— David Chen</p>
                <p className="text-blue-200 text-sm">Chen Electric, San Diego</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <p className="text-lg mb-4">
                  "The NEC compliance notes alone are worth it. Makes sure every job meets code 
                  without having to reference my code book constantly."
                </p>
                <p className="font-semibold">— Sarah Rodriguez</p>
                <p className="text-blue-200 text-sm">Rodriguez Electric Services, Phoenix</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <p className="text-lg mb-4">
                  "I show the branded PDF to customers during estimates. Makes me look way more 
                  professional and organized. Closing more jobs because of it."
                </p>
                <p className="font-semibold">— James Mitchell</p>
                <p className="text-blue-200 text-sm">Mitchell Electrical, Denver</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              ⚡ Coming Soon
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More Job Types On The Way
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We're adding new job types every month. Next up:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white px-6 py-3 rounded-lg shadow-sm font-medium text-gray-700">
                Service Upgrades
              </span>
              <span className="bg-white px-6 py-3 rounded-lg shadow-sm font-medium text-gray-700">
                EV Charger Installations
              </span>
              <span className="bg-white px-6 py-3 rounded-lg shadow-sm font-medium text-gray-700">
                Generator Installs
              </span>
              <span className="bg-white px-6 py-3 rounded-lg shadow-sm font-medium text-gray-700">
                Sub-Panel Additions
              </span>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-6 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Building Smarter Materials Lists Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join electrical contractors who are saving hours every week with AI-powered materials lists.
              Try it free for 14 days—no credit card required.
            </p>
            <div className="mb-6">
              <CTAButton 
                text="Start Free Trial" 
                url="/signup"
                style="success"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Free 14-day trial • No credit card required • Cancel anytime
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
