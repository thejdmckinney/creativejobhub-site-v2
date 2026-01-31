import { useState } from 'react';

interface IndustryData {
  id: string;
  name: string;
  headline: string;
  pains: string[];
  capabilities: string[];
  proofSnippet: string;
}

const industries: IndustryData[] = [
  {
    id: 'plumbers',
    name: 'Plumbers',
    headline: 'Stop Losing Emergency Calls to Competitors',
    pains: [
      'Missed calls during rush jobs = lost revenue',
      'Techs can\'t find customer history in the field',
      'Payment delays kill your cash flow'
    ],
    capabilities: [
      'SMS dispatch directly to techs - no phone tag',
      'Complete job history on mobile before arrival',
      'Take payment on-site, funds in 1-2 days'
    ],
    proofSnippet: 'Plumbers using CJH close 23% more emergency calls'
  },
  {
    id: 'hvac',
    name: 'HVAC',
    headline: 'Manage Seasonal Surges Without Chaos',
    pains: [
      'Summer surge overwhelms your scheduling',
      'Maintenance contracts get forgotten',
      'Techs waste time on paperwork instead of service calls'
    ],
    capabilities: [
      'Drag-and-drop schedule handles 50+ jobs/day',
      'Auto-reminders for maintenance contracts',
      'Mobile app = 5 minutes per job vs 20 minutes on paper'
    ],
    proofSnippet: 'HVAC teams handle 40% more jobs in peak season'
  },
  {
    id: 'contractors',
    name: 'General Contractors',
    headline: 'Track Multiple Jobs Without the Spreadsheet Hell',
    pains: [
      'Juggling 10+ jobs in different stages',
      'Subcontractor coordination is a nightmare',
      'Change orders and extras get lost'
    ],
    capabilities: [
      'Job-level dashboards show progress at a glance',
      'Subcontractor portal for schedules and docs',
      'Photo + note capturing for all change orders'
    ],
    proofSnippet: 'Contractors recover $12K/year in unbilled extras'
  }
];

export default function IndustryTabs() {
  const [activeTab, setActiveTab] = useState<string>(industries[0].id);
  const activeIndustry = industries.find(ind => ind.id === activeTab) || industries[0];

  return (
    <div className="bg-white">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8" aria-label="Industry tabs">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={`py-4 px-1 border-b-2 font-semibold text-lg transition-colors ${
                  activeTab === industry.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                aria-selected={activeTab === industry.id}
                role="tab"
              >
                {industry.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">
          {activeIndustry.headline}
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Pain Points */}
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-2xl mr-2">❌</span>
              Common Problems
            </h4>
            <ul className="space-y-3">
              {activeIndustry.pains.map((pain, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span className="text-gray-700">{pain}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-2xl mr-2">✅</span>
              How CJH Solves It
            </h4>
            <ul className="space-y-3">
              {activeIndustry.capabilities.map((capability, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span className="text-gray-700">{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Proof Snippet */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p className="text-blue-900 font-semibold text-lg">
            📊 {activeIndustry.proofSnippet}
          </p>
        </div>
      </div>
    </div>
  );
}
