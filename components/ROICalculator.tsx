import React, { useState, useEffect } from 'react';
import { DollarSign, Clock, Users, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const ROICalculator: React.FC<{onOpenWaitlist: () => void}> = ({onOpenWaitlist}) => {
  const [casesPerMonth, setCasesPerMonth] = useState(20);
  const [avgFee, setAvgFee] = useState(2500);
  const [adminStaff, setAdminStaff] = useState(2);
  
  // Calculations based on 40% efficiency gain claim
  const [hoursSaved, setHoursSaved] = useState(0);
  const [revenueIncrease, setRevenueIncrease] = useState(0);
  const [costSavings, setCostSavings] = useState(0);

  useEffect(() => {
    // Assumptions:
    // Manual process takes 10 hours per case. Immistack saves 40% (4 hours).
    // Admin staff cost $30/hr.
    // Improved lead conversion adds 15% more cases.
    
    const savedHoursPerCase = 4;
    const totalHoursSaved = casesPerMonth * savedHoursPerCase * 12; // Annual
    
    const adminHourlyRate = 30;
    const annualAdminSavings = totalHoursSaved * adminHourlyRate;
    
    // Revenue increase from 15% better conversion + reduced churn
    const additionalCases = Math.ceil(casesPerMonth * 0.15);
    const additionalRevenue = additionalCases * avgFee * 12;

    setHoursSaved(totalHoursSaved);
    setCostSavings(annualAdminSavings);
    setRevenueIncrease(additionalRevenue);

  }, [casesPerMonth, avgFee, adminStaff]);

  return (
    <section id="calculator" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-block px-3 py-1 mb-6 border border-growth/30 rounded-full bg-growth/5">
              <span className="text-growth text-xs font-bold uppercase tracking-wider">Business Intelligence</span>
            </div>
            <h2 className="text-4xl font-heading font-bold text-navy mb-6">
              Stop leaving money on the table.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              See how much inefficient workflows are costing your firm. Immistack's 
              automation typically recovers 40% of administrative time.
            </p>
            
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-navy mb-2 flex justify-between">
                  <span>New Cases Per Month</span>
                  <span className="font-bold text-techBlue">{casesPerMonth}</span>
                </label>
                <input 
                  type="range" 
                  min="5" 
                  max="100" 
                  value={casesPerMonth} 
                  onChange={(e) => setCasesPerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-techBlue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-2 flex justify-between">
                  <span>Average Professional Fee ($)</span>
                  <span className="font-bold text-techBlue">${avgFee.toLocaleString()}</span>
                </label>
                <input 
                  type="range" 
                  min="500" 
                  max="10000" 
                  step="500"
                  value={avgFee} 
                  onChange={(e) => setAvgFee(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-techBlue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-2 flex justify-between">
                  <span>Admin Staff Count</span>
                  <span className="font-bold text-techBlue">{adminStaff}</span>
                </label>
                <input 
                  type="range" 
                  min="0" 
                  max="20" 
                  value={adminStaff} 
                  onChange={(e) => setAdminStaff(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-techBlue"
                />
              </div>
            </div>
          </div>

          <div className="bg-navy rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-techBlue/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

            <h3 className="text-xl font-medium text-slate-300 mb-8 relative z-10">Projected Annual Impact</h3>

            <div className="grid gap-6 relative z-10">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-2">
                   <div className="p-2 bg-growth/20 rounded-lg text-growth">
                     <DollarSign className="h-6 w-6" />
                   </div>
                   <span className="text-slate-400 text-sm uppercase tracking-wide">Potential Revenue Gain</span>
                </div>
                <div className="text-4xl font-heading font-bold text-white">
                  ${(revenueIncrease + costSavings).toLocaleString()}
                </div>
                <div className="text-xs text-slate-400 mt-2">
                  Combined operational savings and lead conversion growth.
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-2">
                   <div className="p-2 bg-techBlue/20 rounded-lg text-techBlue">
                     <Clock className="h-6 w-6" />
                   </div>
                   <span className="text-slate-400 text-sm uppercase tracking-wide">Hours Reclaimed</span>
                </div>
                <div className="text-4xl font-heading font-bold text-white">
                  {hoursSaved.toLocaleString()} <span className="text-lg font-normal text-slate-400">hrs/yr</span>
                </div>
                <div className="text-xs text-slate-400 mt-2">
                  Time freed for high-value advisory work.
                </div>
              </div>
            </div>

            <Button onClick={onOpenWaitlist} variant="gold" fullWidth className="mt-8 relative z-10">
              Unlock Your Growth Potential <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};