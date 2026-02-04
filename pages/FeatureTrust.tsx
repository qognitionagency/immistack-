import React from 'react';
import { Landmark, ShieldCheck, Download, History, ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';

export const FeatureTrust: React.FC<{onOpenWaitlist: () => void}> = ({onOpenWaitlist}) => {
  return (
    <div className="pt-24 pb-24 animate-fade-in bg-slate">
      
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
         <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <span>Features</span>
            <span>/</span>
            <span className="text-navy font-bold">Trust Accounting</span>
         </div>
         <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/5 border border-navy/10 mb-6">
                 <Landmark className="h-4 w-4 text-navy" />
                 <span className="text-xs font-bold uppercase tracking-wide text-navy">Financial Compliance</span>
               </div>
               <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
                 Audit-ready Trust Accounts. Zero spreadsheets.
               </h1>
               <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                 Manage client funds with absolute confidence. Immistack's ledger system is purpose-built for OMARA, OISC, and ICCRC compliance.
               </p>
               <Button onClick={onOpenWaitlist} variant="primary" className="px-8 py-4">
                  Request Demo
               </Button>
            </div>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 relative">
               <div className="absolute top-0 right-0 p-4">
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                     <ShieldCheck className="h-3 w-3" /> Compliant
                  </span>
               </div>
               <div className="border-b border-gray-100 pb-4 mb-4">
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Matter</div>
                  <div className="font-bold text-navy">Smith Family - 189 Visa</div>
               </div>
               <table className="w-full text-sm">
                  <thead className="text-xs text-gray-400 uppercase font-bold text-left">
                     <tr>
                        <th className="pb-2">Date</th>
                        <th className="pb-2">Description</th>
                        <th className="pb-2 text-right">Credit</th>
                        <th className="pb-2 text-right">Debit</th>
                        <th className="pb-2 text-right">Bal</th>
                     </tr>
                  </thead>
                  <tbody className="text-navy">
                     <tr className="border-b border-gray-50">
                        <td className="py-2">01 Oct</td>
                        <td className="py-2">Initial Deposit</td>
                        <td className="py-2 text-right text-green-600">+$5,000.00</td>
                        <td className="py-2 text-right">-</td>
                        <td className="py-2 text-right font-bold">$5,000.00</td>
                     </tr>
                     <tr className="border-b border-gray-50">
                        <td className="py-2">03 Oct</td>
                        <td className="py-2">DHA Visa Fee</td>
                        <td className="py-2 text-right">-</td>
                        <td className="py-2 text-right">-$4,115.00</td>
                        <td className="py-2 text-right font-bold">$885.00</td>
                     </tr>
                     <tr>
                        <td className="py-2">04 Oct</td>
                        <td className="py-2">Prof. Fees (Inv #102)</td>
                        <td className="py-2 text-right">-</td>
                        <td className="py-2 text-right">-$885.00</td>
                        <td className="py-2 text-right font-bold">$0.00</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
               <ShieldCheck className="h-8 w-8 text-growth mb-4" />
               <h3 className="font-bold text-navy text-lg mb-2">Automated Compliance</h3>
               <p className="text-gray-600 text-sm">System automatically prevents overdrafts and ensures funds are allocated to specific matters, not just the client.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
               <Download className="h-8 w-8 text-techBlue mb-4" />
               <h3 className="font-bold text-navy text-lg mb-2">One-Click Reporting</h3>
               <p className="text-gray-600 text-sm">Generate your End of Month (EOM) reconciliation report and Client Account Statements in seconds.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
               <History className="h-8 w-8 text-goldDark mb-4" />
               <h3 className="font-bold text-navy text-lg mb-2">Immutable Audit Trail</h3>
               <p className="text-gray-600 text-sm">Every transaction is logged with user IP, timestamp, and modification history. Safe Harbor ready.</p>
            </div>
         </div>
      </div>
    </div>
  );
};