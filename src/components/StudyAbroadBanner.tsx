import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TICKER_ITEMS = [
  "CANADA",
  "AUSTRALIA",
  "USA",
  "EUROPE",
  "POST-LANDING SUPPORT",
  "FREE COUNSELING",
  "SCHOLARSHIP ASSISTANCE"
];

export function StudyAbroadBanner() {
  return (
    <section className="bg-[#0a0c10] text-white pt-24 sm:pt-32 pb-0 overflow-hidden w-full relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-16 sm:mb-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          <div className="lg:w-1/2 flex flex-col items-start text-left">
            <h2 className="text-5xl sm:text-6xl lg:text-[75px] xl:text-[85px] font-sans font-black leading-[1.05] tracking-[-0.04em] mb-10">
              <span className="block text-white pb-2 xl:pb-3">THE BEST</span>
              <span className="block text-[#d02830] pb-2 xl:pb-3">STUDY ABROAD</span>
              <span className="block text-white">SERVICES</span>
            </h2>
            <Link to="/services" className="bg-[#d02830] text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.1em] px-8 py-4 sm:py-4 transition-all duration-300 flex items-center justify-center gap-3 shadow-[4px_4px_0px_#333] hover:shadow-[2px_2px_0px_#333] hover:translate-x-[2px] hover:translate-y-[2px] border border-[#d02830] w-fit">
              BOOK FREE CONSULTATION
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="lg:w-[48%] relative perspective-1000">
            <div className="rounded-[32px] overflow-hidden w-full h-[320px] sm:h-[450px] transform-gpu transition-transform duration-700 hover:scale-[1.02] shadow-2xl relative">
              <div className="absolute inset-0 bg-black/10 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop" 
                alt="Abroad university campus complex" 
                className="w-full h-full object-cover relative z-0"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Infinite Marquee Ticker */}
      <div className="w-full border-t border-b border-gray-800/80 bg-[#0a0c10] py-5 sm:py-7 relative z-10">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0a0c10] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0a0c10] to-transparent z-20 pointer-events-none"></div>
        
        <div className="flex animate-marquee-rtl gap-4 px-4 w-fit">
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <div key={`${item}-${idx}`} className="flex items-center gap-8 px-4 shrink-0 justify-center min-w-fit">
              <span className="font-sans font-black text-xl sm:text-2xl tracking-tight text-slate-200">
                {item}
              </span>
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#d02830]"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
