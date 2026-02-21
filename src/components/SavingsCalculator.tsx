import { useState } from 'react';

export default function SavingsCalculator() {
  const [jobsPerMonth, setJobsPerMonth] = useState(50);
  const [currentSoftware, setCurrentSoftware] = useState('jobber');
  const [teamSize, setTeamSize] = useState(2);

  // Pricing data for different software
  const softwarePricing: { [key: string]: { base: number; name: string } } = {
    jobber: { base: 340, name: 'Jobber' },
    housecallpro: { base: 320, name: 'Housecall Pro' },
    servicetitan: { base: 450, name: 'ServiceTitan' },
    fieldedge: { base: 380, name: 'FieldEdge' },
    workiz: { base: 280, name: 'Workiz' },
    servicem8: { base: 360, name: 'ServiceM8' },
  };

  // Calculate estimated usage and costs
  const estimatedSMS = Math.ceil(jobsPerMonth * 10); // ~10 texts per job
  const estimatedEmails = Math.ceil(jobsPerMonth * 20); // ~20 emails per job (estimates, invoices, reminders)
  const estimatedMapLoads = Math.ceil(jobsPerMonth * 5); // ~5 map loads per job

  // Free tier limits (very generous)
  const twilioFree = 1000; // messages/month
  const resendFree = 3000; // emails/month
  const mapboxFree = 100000; // map loads/month

  // Calculate if they'll stay in free tier
  const smsInFreeTier = estimatedSMS <= twilioFree;
  const emailInFreeTier = estimatedEmails <= resendFree;
  const mapsInFreeTier = estimatedMapLoads <= mapboxFree;

  // Calculate overage costs (if any)
  const twilioOverageCost = !smsInFreeTier ? Math.ceil((estimatedSMS - twilioFree) * 0.0079) : 0;
  const resendOverageCost = !emailInFreeTier ? 20 : 0; // $20/mo for next tier
  const mapboxOverageCost = !mapsInFreeTier ? 25 : 0; // $25/mo for next tier

  // Total Crew Ops Pro cost
  const cjhMonthlyCost = 89 + twilioOverageCost + resendOverageCost + mapboxOverageCost;
  
  // Current software cost
  const currentMonthlyCost = softwarePricing[currentSoftware].base;
  
  // Savings
  const monthlySavings = currentMonthlyCost - cjhMonthlyCost;
  const annualSavings = monthlySavings * 12;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">
          💰 Calculate Your Savings
        </h3>
        <p className="text-gray-600">
          See exactly how much you'll save by switching to Crew Ops Pro
        </p>
      </div>

      {/* Input Controls */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Jobs per Month */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Jobs Per Month
          </label>
          <input
            type="range"
            min="10"
            max="200"
            step="10"
            value={jobsPerMonth}
            onChange={(e) => setJobsPerMonth(Number(e.target.value))}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="text-center mt-2">
            <span className="text-3xl font-bold text-blue-600">{jobsPerMonth}</span>
            <span className="text-gray-600 ml-1">jobs</span>
          </div>
        </div>

        {/* Current Software */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Current Software
          </label>
          <select
            value={currentSoftware}
            onChange={(e) => setCurrentSoftware(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg font-semibold text-gray-700"
          >
            {Object.entries(softwarePricing).map(([key, data]) => (
              <option key={key} value={key}>
                {data.name} (${data.base}/mo)
              </option>
            ))}
          </select>
        </div>

        {/* Team Size */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Team Size
          </label>
          <input
            type="range"
            min="1"
            max="10"
            step="1"
            value={teamSize}
            onChange={(e) => setTeamSize(Number(e.target.value))}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="text-center mt-2">
            <span className="text-3xl font-bold text-blue-600">{teamSize}</span>
            <span className="text-gray-600 ml-1">people</span>
          </div>
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Their Cost */}
        <div className="bg-white rounded-xl p-6 shadow-md border-2 border-red-200">
          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">🔴</span>
            {softwarePricing[currentSoftware].name} Cost
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-gray-600">Software Base</span>
              <span className="font-semibold text-gray-900">${currentMonthlyCost}/mo</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-gray-600">SMS ({estimatedSMS}/mo)</span>
              <span className="font-semibold text-gray-400">Included*</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-gray-600">Email ({estimatedEmails}/mo)</span>
              <span className="font-semibold text-gray-400">Included*</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-gray-600">Maps & Routing</span>
              <span className="font-semibold text-gray-400">Included*</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t-2 border-red-300">
              <span className="font-bold text-lg text-gray-900">Monthly Total</span>
              <span className="font-bold text-2xl text-red-600">${currentMonthlyCost}</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 italic">*Hidden in your monthly fee</p>
        </div>

        {/* Crew Ops Pro Cost */}
        <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-400">
          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">✅</span>
            Crew Ops Pro Cost
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-gray-600">Software Base</span>
              <span className="font-semibold text-green-600">$89/mo</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-gray-600">
                SMS ({estimatedSMS}/mo)
                {smsInFreeTier && <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">FREE</span>}
              </span>
              <span className="font-semibold text-green-600">
                {smsInFreeTier ? 'FREE' : `$${twilioOverageCost}`}
              </span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-gray-600">
                Email ({estimatedEmails}/mo)
                {emailInFreeTier && <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">FREE</span>}
              </span>
              <span className="font-semibold text-green-600">
                {emailInFreeTier ? 'FREE' : `$${resendOverageCost}`}
              </span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-gray-600">
                Maps & Routing
                {mapsInFreeTier && <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">FREE</span>}
              </span>
              <span className="font-semibold text-green-600">
                {mapsInFreeTier ? 'FREE' : `$${mapboxOverageCost}`}
              </span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t-2 border-green-400">
              <span className="font-bold text-lg text-gray-900">Monthly Total</span>
              <span className="font-bold text-2xl text-green-600">${cjhMonthlyCost}</span>
            </div>
          </div>
          <p className="text-xs text-green-700 mt-4 font-semibold">✓ You own everything</p>
        </div>
      </div>

      {/* Savings Summary */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-2xl p-8 text-center shadow-xl">
        <div className="mb-4">
          <p className="text-lg font-semibold text-gray-800 mb-2">You'll Save</p>
          <div className="text-6xl font-bold text-gray-900 mb-2">
            ${monthlySavings.toLocaleString()}
            <span className="text-2xl text-gray-700">/month</span>
          </div>
          <div className="text-3xl font-bold text-gray-800">
            ${annualSavings.toLocaleString()}
            <span className="text-xl text-gray-700">/year</span>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white/50 rounded-lg">
          <p className="text-gray-800 font-semibold mb-2">That's enough to:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="bg-white rounded-lg p-3">
              <div className="font-bold text-blue-600">{Math.floor(annualSavings / 50)}</div>
              <div className="text-gray-700">Google Ads clicks</div>
            </div>
            <div className="bg-white rounded-lg p-3">
              <div className="font-bold text-blue-600">{Math.floor(annualSavings / 3000)}</div>
              <div className="text-gray-700">New power tools</div>
            </div>
            <div className="bg-white rounded-lg p-3">
              <div className="font-bold text-blue-600">{Math.floor(annualSavings / 200)}</div>
              <div className="text-gray-700">Tank fills (gas)</div>
            </div>
            <div className="bg-white rounded-lg p-3">
              <div className="font-bold text-blue-600">{Math.floor(annualSavings / 100)}</div>
              <div className="text-gray-700">Family dinners</div>
            </div>
          </div>
        </div>

        <a
          href="#final-cta"
          className="inline-block mt-6 px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
        >
          Start Saving Today →
        </a>
      </div>

      {/* Usage Summary */}
      <div className="mt-6 text-center text-sm text-gray-600">
        <p className="font-semibold">Your Estimated Usage:</p>
        <div className="flex justify-center gap-6 mt-2">
          <span>📱 {estimatedSMS} SMS/month</span>
          <span>📧 {estimatedEmails} emails/month</span>
          <span>🗺️ {estimatedMapLoads} map loads/month</span>
        </div>
        {(smsInFreeTier && emailInFreeTier && mapsInFreeTier) && (
          <p className="mt-3 text-green-600 font-bold">
            ✅ All your usage stays within FREE tiers!
          </p>
        )}
      </div>
    </div>
  );
}
