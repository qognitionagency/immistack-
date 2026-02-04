import React from 'react';

export const TrustedBy: React.FC = () => {
  return (
    <section className="py-10 border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
          Directly Integrated With Government Portals
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
          {/* Text-based Logos simulating government entities */}
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full border-2 border-navy flex items-center justify-center font-serif font-bold text-navy">AU</div>
             <div className="text-left leading-tight">
               <div className="font-bold text-navy text-sm">Australian Gov</div>
               <div className="text-[10px] text-gray-500 uppercase tracking-wider">Department of Home Affairs</div>
             </div>
          </div>

          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full border-2 border-navy flex items-center justify-center font-serif font-bold text-navy">CA</div>
             <div className="text-left leading-tight">
               <div className="font-bold text-navy text-sm">Canada</div>
               <div className="text-[10px] text-gray-500 uppercase tracking-wider">IRCC Direct Connect</div>
             </div>
          </div>

          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full border-2 border-navy flex items-center justify-center font-serif font-bold text-navy">UK</div>
             <div className="text-left leading-tight">
               <div className="font-bold text-navy text-sm">UK Gov</div>
               <div className="text-[10px] text-gray-500 uppercase tracking-wider">Home Office API</div>
             </div>
          </div>

           <div className="hidden md:block w-px h-10 bg-gray-200"></div>

           <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-gray-400 text-xl">LEAP</span>
           </div>
           <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-gray-400 text-xl">Xero</span>
           </div>
        </div>
      </div>
    </section>
  );
};