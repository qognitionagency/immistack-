import React from 'react';
import { Logo } from '../components/Logo';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-24 bg-white animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <h1 className="text-5xl font-heading font-bold text-navy mb-8">We are the backbone of <br/><span className="text-gold-gradient">Global Mobility.</span></h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Immistack was founded by a team of immigration lawyers and software engineers who were tired of spreadsheets, manual data entry, and legacy software that looked like it was built in 1999.
        </p>
      </div>

      <div className="bg-slate py-20">
         <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
               <div className="text-4xl font-bold text-navy mb-2">500+</div>
               <div className="text-gray-500 uppercase tracking-widest text-sm">Partner Firms</div>
            </div>
            <div className="p-8 border-l border-r border-gray-200">
               <div className="text-4xl font-bold text-navy mb-2">1M+</div>
               <div className="text-gray-500 uppercase tracking-widest text-sm">Visas Processed</div>
            </div>
            <div className="p-8">
               <div className="text-4xl font-bold text-navy mb-2">4</div>
               <div className="text-gray-500 uppercase tracking-widest text-sm">Global Offices</div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
         <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
               <div className="absolute top-0 left-0 w-full h-full bg-gold/10 rounded-2xl transform -translate-x-4 -translate-y-4"></div>
               <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" alt="The Immistack team of migration agents and technologists collaborating" loading="lazy" width="1632" height="1088" className="rounded-2xl shadow-xl relative z-10" />
            </div>
            <div>
               <h3 className="text-3xl font-heading font-bold text-navy mb-6">Our Mission</h3>
               <p className="text-gray-600 mb-6 text-lg">
                  To democratize access to global opportunities by empowering the professionals who make migration possible.
               </p>
               <p className="text-gray-600 text-lg">
                  We believe that immigration is a human right, but the bureaucracy shouldn't be a barrier. By automating the paperwork, we allow agents to focus on the human story behind every case.
               </p>
            </div>
         </div>
      </div>
    </div>
  );
};