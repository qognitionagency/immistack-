import React from 'react';
import { Download, FileText } from 'lucide-react';
import { Button } from './Button';
import { Logo } from './Logo';

export const LeadMagnet: React.FC = () => {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-r from-techBlue to-blue-600 rounded-3xl p-1">
          <div className="bg-navy rounded-[22px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest mb-4">
                 <FileText className="h-4 w-4" /> 2024 Industry Report
              </div>
              <h2 className="text-3xl font-heading font-bold text-white mb-4">The State of Immigration Tech 2024</h2>
              <p className="text-slate-300 mb-6">
                We surveyed 500+ migration agents. Discover why 40% of firms are switching to AI-driven compliance tools this year.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-3 rounded-lg bg-navyLight border border-gray-600 text-white focus:border-techBlue focus:outline-none w-full"
                />
                <Button variant="gold" className="shrink-0">
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-4">We respect your privacy. No spam.</p>
            </div>
            
            <div className="w-full max-w-xs shrink-0 transform rotate-3 hover:rotate-0 transition-transform duration-500">
               <div className="bg-white h-64 w-full rounded shadow-2xl flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 w-full h-2 bg-techBlue"></div>
                  <div className="scale-90 mb-4">
                    <Logo size="medium" />
                  </div>
                  <h3 className="font-heading font-bold text-navy text-2xl leading-tight mb-2">2024<br/>REPORT</h3>
                  <div className="w-16 h-1 bg-gold mb-4"></div>
                  <p className="text-[10px] text-gray-400">BENCHMARKS & TRENDS</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};