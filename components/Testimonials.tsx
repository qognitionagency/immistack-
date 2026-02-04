import React from 'react';
import { Quote, CheckCircle2, Building2, Users, Globe } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  firm: string;
  metric: string;
  icon: React.ReactNode;
  tags: string[];
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "We replaced HubSpot and three spreadsheets. The 'God View' for our multi-country branches finally gives me real revenue visibility across Australia and Canada.",
    author: "James L.",
    role: "Director",
    firm: "GlobalMove Partners",
    metric: "Revenue up 22%",
    icon: <Globe className="w-5 h-5 text-techBlue" />,
    tags: ["Enterprise", "Multi-Tenant"]
  },
  {
    id: 2,
    quote: "The VEVO integration alone saves my team 15 hours a week. Auto-detecting expiring passports before the client even knows is absolute magic.",
    author: "Sarah Jenkins",
    role: "Lead Agent",
    firm: "Vista Migration",
    metric: "15hrs/wk Saved",
    icon: <CheckCircle2 className="w-5 h-5 text-growth" />,
    tags: ["Automation", "Compliance"]
  },
  {
    id: 3,
    quote: "My clients stop calling for updates because the Portal shows them everything. The automated EMI payment chasing reduced our admin overhead significantly.",
    author: "Michael Chen",
    role: "Principal Lawyer",
    firm: "Chen Legal",
    metric: "40% Less Admin",
    icon: <Building2 className="w-5 h-5 text-gold" />,
    tags: ["Client Portal", "Payments"]
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Static Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-techBlue/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
             <Users className="w-4 h-4 text-gold" />
             <span className="text-xs font-bold text-gold uppercase tracking-wide">Trusted by 500+ Firms</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            The backbone of <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">modern practice.</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            From solo practitioners to enterprise networks, see why the industry is switching to Immistack.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div 
              key={t.id}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-gold/30 transition-all duration-300 shadow-xl relative"
            >
              {/* Metric Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-navy to-navyLight border border-gray-700 text-white px-4 py-2 rounded-lg shadow-lg z-20">
                <div className="flex items-center gap-2">
                   {t.icon}
                   <span className="font-bold text-sm">{t.metric}</span>
                </div>
              </div>

              {/* Quote Icon */}
              <div className="mb-6 opacity-50">
                <Quote className="w-8 h-8 text-gold" />
              </div>

              {/* Content */}
              <p className="text-lg text-slate-200 mb-8 leading-relaxed italic">
                "{t.quote}"
              </p>

              <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                   <div className="font-bold text-white text-lg">{t.author}</div>
                   <div className="text-sm text-slate-400">{t.role}</div>
                   <div className="text-xs text-gold mt-1 font-medium">{t.firm}</div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-col gap-2 items-end">
                  {t.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold bg-white/5 text-slate-400 px-2 py-1 rounded border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};