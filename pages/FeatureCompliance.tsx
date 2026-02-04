import React from 'react';
import { ArrowRight, ShieldCheck, Globe, Calendar, AlertTriangle } from 'lucide-react';
import { Button } from '../components/Button';

export const FeatureCompliance: React.FC<{onOpenWaitlist: () => void}> = ({onOpenWaitlist}) => {
  return (
    <div className="pt-24 pb-24 animate-fade-in bg-slate">
      
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
         <div className="bg-navy rounded-3xl p-8 md:p-16 border border-gray-700 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-growth/10 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 max-w-2xl text-white">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-growth/10 border border-growth/20 mb-6">
                 <ShieldCheck className="h-4 w-4 text-growth" />
                 <span className="text-xs font-bold uppercase tracking-wide text-growth">Automated Compliance</span>
               </div>
               <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                 Never miss a visa expiry again.
               </h1>
               <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                 Protect your license and your clients. Automated VEVO checks (AU), right-to-work checks (UK), and expiry alerts run in the background 24/7.
               </p>
               <Button onClick={onOpenWaitlist} variant="gold" className="px-8 py-4">
                  Enable Auto-Checks
               </Button>
            </div>
         </div>
      </div>

      {/* Feature Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid md:grid-cols-3 gap-8 mb-24">
            
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
               <div className="w-12 h-12 bg-growth/10 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-growth" />
               </div>
               <h3 className="text-xl font-bold text-navy mb-3">VEVO & Entitlement Checks</h3>
               <p className="text-gray-600 text-sm">
                  System connects directly to DHA (Australia) and Home Office (UK). Set checks to run Weekly, Monthly, or On-Demand.
               </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
               <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
               </div>
               <h3 className="text-xl font-bold text-navy mb-3">Critical Alert System</h3>
               <p className="text-gray-600 text-sm">
                  If a visa status changes (e.g., from 'Bridging A' to 'Expired'), you and the client get an SMS/Email alert instantly.
               </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
               <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Calendar className="h-6 w-6 text-orange-500" />
               </div>
               <h3 className="text-xl font-bold text-navy mb-3">Deadline Calculator</h3>
               <p className="text-gray-600 text-sm">
                  Auto-calculates the 28-day rule for appeals or the 60-day rule for bridging visas based on the decision date.
               </p>
            </div>

         </div>

         {/* Visual Section */}
         <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-200 px-8 py-4 flex justify-between items-center">
               <h3 className="font-bold text-navy">Live Compliance Dashboard</h3>
               <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
               </div>
            </div>
            <div className="p-8">
               <table className="w-full text-left">
                  <thead>
                     <tr className="border-b border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-wider">
                        <th className="pb-4">Client</th>
                        <th className="pb-4">Visa Subclass</th>
                        <th className="pb-4">Expiry Date</th>
                        <th className="pb-4">VEVO Status</th>
                        <th className="pb-4 text-right">Action</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm">
                     <tr className="border-b border-gray-50">
                        <td className="py-4 font-bold text-navy">Sarah Connor</td>
                        <td className="py-4 text-gray-600">482 TSS</td>
                        <td className="py-4 text-red-500 font-bold">14 Days Left</td>
                        <td className="py-4"><span className="bg-green-100 text-growth px-2 py-1 rounded text-xs font-bold">In Effect</span></td>
                        <td className="py-4 text-right"><button className="text-techBlue font-bold hover:underline">Extend</button></td>
                     </tr>
                     <tr className="border-b border-gray-50">
                        <td className="py-4 font-bold text-navy">Kyle Reese</td>
                        <td className="py-4 text-gray-600">820 Partner</td>
                        <td className="py-4 text-gray-600">12 Nov 2025</td>
                        <td className="py-4"><span className="bg-green-100 text-growth px-2 py-1 rounded text-xs font-bold">In Effect</span></td>
                        <td className="py-4 text-right"><button className="text-gray-400 hover:text-navy">View</button></td>
                     </tr>
                     <tr>
                        <td className="py-4 font-bold text-navy">T-800 Systems</td>
                        <td className="py-4 text-gray-600">Standard Business Sponsorship</td>
                        <td className="py-4 text-orange-500 font-bold">3 Months Left</td>
                        <td className="py-4"><span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded text-xs font-bold">Review Needed</span></td>
                        <td className="py-4 text-right"><button className="text-gray-400 hover:text-navy">View</button></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
    </div>
  );
};