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
    id: 'electrical',
    name: 'Electrical',
    headline: 'Track Service Calls and Projects Seamlessly',
    pains: [
      'Mix of quick repairs and multi-day projects',
      'Code compliance documentation scattered everywhere',
      'Hard to track which jobs are profitable'
    ],
    capabilities: [
      'Separate workflows for service calls vs projects',
      'Photo documentation with job notes synced to cloud',
      'Job-level P&L shows margin before you close'
    ],
    proofSnippet: 'Electricians identify 18% more profitable job types'
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
  },
  {
    id: 'landscaping',
    name: 'Landscaping',
    headline: 'Stop Losing Track of Weekly Maintenance Routes',
    pains: [
      'Route optimization wastes hours each week',
      'Seasonal clients need different schedules',
      'Weather delays mess up the whole week'
    ],
    capabilities: [
      'Route planning optimizes drive time automatically',
      'Recurring job templates for weekly maintenance',
      'Drag-and-drop rescheduling when weather hits'
    ],
    proofSnippet: 'Landscapers save 8 hours/week on routing'
  },
  {
    id: 'painting',
    name: 'Painting',
    headline: 'Estimate Accurately, Track Progress, Get Paid',
    pains: [
      'Underestimating materials kills your margin',
      'Multi-day projects need progress tracking',
      'Final walk-throughs reveal missed spots'
    ],
    capabilities: [
      'Material calculators built into estimates',
      'Daily photo updates show crew progress',
      'Punch list feature catches touch-ups before final payment'
    ],
    proofSnippet: 'Painting contractors boost margins by 12%'
  },
  {
    id: 'handyman',
    name: 'Handyman',
    headline: 'Handle Every Type of Job Without Switching Tools',
    pains: [
      'Every job is different - hard to standardize',
      'Clients call for "one more thing" constantly',
      'Tracking inventory across job types is chaos'
    ],
    capabilities: [
      'Custom service templates for common job types',
      'Add line items on-site with mobile app',
      'Simple inventory tracking for frequently used items'
    ],
    proofSnippet: 'Handymen capture 91% of upsell opportunities'
  },
  {
    id: 'pool',
    name: 'Pool Service',
    headline: 'Automate Routes, Track Chemicals, Get Paid Weekly',
    pains: [
      'Weekly routes need perfect consistency',
      'Chemical levels and equipment notes get lost',
      'Weekly billing is tedious and error-prone'
    ],
    capabilities: [
      'Recurring routes auto-schedule every week',
      'Custom fields track pH, chlorine, equipment status',
      'Automated weekly invoicing with autopay option'
    ],
    proofSnippet: 'Pool techs reduce billing time by 75%'
  },
  {
    id: 'chimney',
    name: 'Chimney Sweep',
    headline: 'CSIA Compliance + Scheduling in One System',
    pains: [
      'CSIA inspection checklists on paper get lost',
      'Seasonal demand spikes are hard to manage',
      'Before/after photos scattered across phones'
    ],
    capabilities: [
      'Digital CSIA inspection forms with required fields',
      'Booking widget handles seasonal rush automatically',
      'Photo gallery attaches to customer record permanently'
    ],
    proofSnippet: 'Sweeps complete inspections 30% faster'
  }
];

export default function IndustryTabs() {
  const [activeTab, setActiveTab] = useState<string>(industries[0].id);
  const activeIndustry = industries.find(ind => ind.id === activeTab) || industries[0];

  return (
    <div className="bg-white">
      {/* Tab Navigation - Scrollable on mobile */}
      <div className="border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-2 sm:space-x-3 lg:space-x-4 overflow-x-auto scrollbar-hide" aria-label="Industry tabs">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={`py-3 px-2 sm:px-3 border-b-2 font-semibold text-sm sm:text-base transition-colors whitespace-nowrap flex-shrink-0 ${
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
