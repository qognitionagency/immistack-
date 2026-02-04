import React from 'react';
import { PieChart, TrendingUp, Handshake, Split } from 'lucide-react';
import { Button } from '../components/Button';

export const FeatureCommission: React.FC<{onOpenWaitlist: () => void}> = ({onOpenWaitlist}) => {
  return (
    <div className="pt-24 pb-24 animate-fade-in bg-slate">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
         <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <span>Features</span>
            <span>/</span>
            <span className="text-navy font-bold">Commission Tracking</span>
         </div>
         <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-growth/10 border border-growth/20 mb-6">
                 <PieChart className="h-4 w-4 text-growth" />
                 <span className="text-xs font-bold uppercase tracking-wide text-growth">Revenue Intelligence</span>
               </div>
               <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
                 Track every dollar owed to you.
               </h1>
               <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                 For education agents and aggregators. Automatically calculate commissions from universities and split payments with sub-agents.
               </p>
               <Button onClick={onOpenWaitlist} variant="primary" className="px-8 py-4">
                  Request Demo
               </Button>
            </div>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
               <div className="mb-6">
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-2">Projected Claims (Q4)</div>
                  <div className="text-3xl font-bold text-navy">$142,500.00</div>
                  <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
                     <div className="bg-growth h-2 rounded-full w-3/4"></div>
                  </div>
               </div>
               <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded border border-gray-100">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-700 text-xs">UM</div>
                        <div>
                           <div className="font-bold text-navy text-sm">University of Melbourne</div>
                           <div className="text-[10px] text-gray-500">Invoice #9921</div>
                        </div>
                     </div>
                     <div className="text-right">
                        <div className="font-bold text-growth">$12,000</div>
                        <div className="text-[10px] text-gray-500">Paid</div>
                     </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded border border-gray-100">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center font-bold text-red-700 text-xs">MU</div>
                        <div>
                           <div className="font-bold text-navy text-sm">Monash University</div>
                           <div className="text-[10px] text-gray-500">Invoice #9922</div>
                        </div>
                     </div>
                     <div className="text-right">
                        <div className="font-bold text-gray-400">$8,500</div>
                        <div className="text-[10px] text-orange-500 font-bold">Overdue (2 days)</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
               <TrendingUp className="h-8 w-8 text-growth mb-4" />
               <h3 className="font-bold text-navy text-lg mb-2">Forecast Revenue</h3>
               <p className="text-gray-600 text-sm">Predict cash flow based on student census dates and university payout cycles.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
               <Split className="h-8 w-8 text-techBlue mb-4" />
               <h3 className="font-bold text-navy text-lg mb-2">Sub-Agent Splits</h3>
               <p className="text-gray-600 text-sm">Automatically calculate the split for your downstream partners and generate self-billed invoices for them.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
               <Handshake className="h-8 w-8 text-goldDark mb-4" />
               <h3 className="font-bold text-navy text-lg mb-2">Claim Management</h3>
               <p className="text-gray-600 text-sm">Bulk invoice universities for all students in a specific intake. Track partial payments easily.</p>
            </div>
         </div>
      </div>
    </div>
  );
};