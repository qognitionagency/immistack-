import React from 'react';
import { Check, X, Minus } from 'lucide-react';
import { Button } from './Button';

export const ComparisonTable: React.FC<{onOpenWaitlist: () => void}> = ({onOpenWaitlist}) => {
  return (
    <section className="py-24 bg-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-navy mb-4">Why modern firms switch to Immistack</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stop using "cloud-hosted" desktop software. Move to a true cloud-native platform designed for speed.
          </p>
        </div>

        <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-200">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-6 bg-white border-b-2 border-gray-200 min-w-[200px]"></th>
                <th className="p-6 border-b-2 border-gold bg-navy text-white min-w-[220px]">
                  <div className="text-2xl font-bold">Immistack</div>
                  <div className="text-xs text-gold mt-1 font-bold uppercase tracking-wide">The New Standard</div>
                </th>
                <th className="p-6 border-b-2 border-gray-200 bg-gray-50 min-w-[200px]">
                  <div className="text-lg font-bold text-gray-500">Legacy Software</div>
                  <div className="text-xs text-gray-400 mt-1">Migration Manager, etc.</div>
                </th>
                <th className="p-6 border-b-2 border-gray-200 bg-gray-50 min-w-[200px]">
                  <div className="text-lg font-bold text-gray-500">Generic CRMs</div>
                  <div className="text-xs text-gray-400 mt-1">Salesforce, HubSpot</div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {[
                { feature: "Platform Type", immi: "True Cloud (SaaS)", comp1: "Desktop / Remote Desktop", comp2: "Cloud" },
                { feature: "3-Portal System (Admin/Agent/Client)", immi: true, comp1: "Basic Client Portal Only", comp2: "No (Single View)" },
                { feature: "Payment Gateway Choice", immi: "Any (Stripe, Square, Wise)", comp1: "Restricted / Manual", comp2: "Integration Required" },
                { feature: "AI Document Parsing", immi: true, comp1: false, comp2: false },
                { feature: "Automated VEVO Checks", immi: "Daily & On-Demand", comp1: "Manual / Limited", comp2: false },
                { feature: "Mobile Experience", immi: "Native Mobile Design", comp1: "Non-Responsive", comp2: "Generic App" },
                { feature: "Implementation Time", immi: "< 24 Hours", comp1: "3-6 Weeks", comp2: "Months" },
              ].map((row, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-5 font-bold text-navy text-sm border-r border-gray-100">{row.feature}</td>
                  
                  {/* Immistack Column */}
                  <td className="p-5 text-center bg-navy/5 border-r border-navy/10 font-bold text-navy shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]">
                    {row.immi === true ? <div className="flex justify-center"><div className="bg-growth/10 p-1 rounded-full"><Check className="w-5 h-5 text-growth" /></div></div> : row.immi}
                  </td>
                  
                  {/* Competitor 1 */}
                  <td className="p-5 text-center border-r border-gray-100 text-gray-500 text-sm">
                    {row.comp1 === false ? <X className="w-5 h-5 text-gray-300 mx-auto" /> : 
                     row.comp1 === true ? <Check className="w-5 h-5 text-gray-400 mx-auto" /> : row.comp1}
                  </td>
                  
                  {/* Competitor 2 */}
                  <td className="p-5 text-center text-gray-500 text-sm">
                    {row.comp2 === false ? <Minus className="w-5 h-5 text-gray-300 mx-auto" /> : row.comp2}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
           <Button onClick={onOpenWaitlist} variant="gold" className="px-10 py-4 text-lg shadow-xl shadow-gold/20">
             Switch to Immistack Today
           </Button>
           <p className="mt-4 text-sm text-gray-500">Free data migration from Migration Manager & Officio.</p>
        </div>
      </div>
    </section>
  );
};