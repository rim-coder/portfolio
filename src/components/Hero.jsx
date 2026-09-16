import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/projectsData';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden text-center">
      {/* Delicate ambient rose glow behind portrait */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-[#C89B94]/12 rounded-full blur-3xl pointer-events-none -z-10 animate-subtle-pulse" />
      <div className="absolute top-48 left-1/2 -translate-x-1/2 w-[520px] h-[400px] bg-[#634842]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 flex flex-col items-center">
        {/* Profile portrait with refined circular frame */}
        <div className="relative mb-10 group">
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden p-1 bg-gradient-to-b from-[#D4A396]/60 via-[#1A1A24] to-transparent shadow-2xl shadow-[#C89B94]/10">
            <img
              src="/photo.jpg"
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover rounded-full filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-500 scale-105"
            />
          </div>
        </div>

        {/* Small subtitle badge */}
        <p className="text-[11px] sm:text-xs tracking-[0.25em] font-medium text-[#C89B94] uppercase mb-4">
          {PERSONAL_INFO.badgeTitle}
        </p>

        {/* Main Name with Luxury Serif Typography */}
        <h1 className="font-serif-luxury tracking-tight mb-6">
          <span className="block text-4xl sm:text-6xl md:text-7xl font-semibold text-[#F7F5F2]">
            {PERSONAL_INFO.firstName}
          </span>
          <span className="block text-4xl sm:text-6xl md:text-7xl font-normal italic text-[#D4A396] mt-1 font-serif-luxury">
            {PERSONAL_INFO.lastName}
          </span>
        </h1>

        {/* Bio tagline */}
        <p className="text-sm sm:text-base text-[#B3AEA6] max-w-2xl mx-auto leading-relaxed font-light mb-10">
          {PERSONAL_INFO.tagline}
        </p>

        {/* Action Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C89B94] hover:bg-[#Dbb1ab] text-[#0B0B0E] font-semibold text-xs tracking-[0.15em] uppercase transition-all duration-300 shadow-lg shadow-[#C89B94]/20 hover:-translate-y-0.5"
          >
            <span>Me Contacter</span>
            <ArrowUpRight size={15} />
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#13131A] hover:bg-[#1C1C26] text-[#E5E0DA] border border-[#2B2B38] font-semibold text-xs tracking-[0.15em] uppercase transition-all duration-300 hover:border-[#C89B94]/40 hover:-translate-y-0.5"
          >
            <span>GitHub</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Delicate scroll indicator */}
        <div className="flex flex-col items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[#736E67]">
          <span>Scroll pour explorer</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#C89B94]/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
