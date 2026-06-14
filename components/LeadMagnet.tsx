import React, { useState } from 'react';
import { Download, FileText, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from './Button';
import { Logo } from './Logo';
import { CRMStatus } from '../types';

const SOURCE = 'Lead Magnet - State of Immigration Tech 2026';

export const LeadMagnet: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<CRMStatus>(CRMStatus.IDLE);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus(CRMStatus.SUBMITTING);
    try {
      const res = await fetch('/api/create-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          firmName: 'Report Download',
          firmSize: 'Solo',
          persona: 'Professional',
          source: SOURCE,
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus(CRMStatus.SUCCESS);
    } catch (err) {
      console.error('Lead magnet submission failed:', err);
      setStatus(CRMStatus.ERROR);
    }
  };

  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-r from-techBlue to-blue-600 rounded-3xl p-1">
          <div className="bg-navy rounded-[22px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest mb-4">
                <FileText className="h-4 w-4" /> 2026 Industry Report
              </div>
              <h2 className="text-3xl font-heading font-bold text-white mb-4">The State of Immigration Tech 2026</h2>
              <p className="text-slate-300 mb-6">
                We surveyed 500+ migration agents. Discover why 40% of firms are switching to AI-driven compliance
                tools this year.
              </p>

              {status === CRMStatus.SUCCESS ? (
                <div className="flex items-center gap-3 bg-growth/10 border border-growth/30 rounded-lg p-4">
                  <CheckCircle className="h-6 w-6 text-growth shrink-0" />
                  <p className="text-sm text-white">
                    Check your inbox — we’ve emailed the report to{' '}
                    <span className="font-semibold">{email}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    required
                    aria-label="Email address"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-3 rounded-lg bg-navyLight border border-gray-600 text-white focus:border-techBlue focus:outline-none w-full"
                  />
                  <Button type="submit" variant="gold" className="shrink-0" disabled={status === CRMStatus.SUBMITTING}>
                    {status === CRMStatus.SUBMITTING ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        <Download className="mr-2 h-4 w-4" /> Get the Report
                      </>
                    )}
                  </Button>
                </form>
              )}
              {status === CRMStatus.ERROR && (
                <p className="text-xs text-red-300 mt-2">Something went wrong. Please try again.</p>
              )}
              <p className="text-xs text-gray-500 mt-4">We respect your privacy. No spam.</p>
            </div>

            <div className="w-full max-w-xs shrink-0 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white h-64 w-full rounded shadow-2xl flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 w-full h-2 bg-techBlue"></div>
                <div className="scale-90 mb-4">
                  <Logo size="medium" />
                </div>
                <h3 className="font-heading font-bold text-navy text-2xl leading-tight mb-2">
                  2026
                  <br />
                  REPORT
                </h3>
                <div className="w-16 h-1 bg-gold mb-4"></div>
                <p className="text-[10px] text-gray-400">BENCHMARKS &amp; TRENDS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
