import React from 'react';
import { ABOUT_DATA } from '../data/projectsData';

export default function AboutSection() {
  return (
    <section id="a-propos" className="py-24 border-t border-[#181822] relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section Label */}
        <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#C89B94] mb-4">
          {ABOUT_DATA.tag}
        </p>

        {/* Headline with serif italic contrast */}
        <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#F7F5F2] tracking-tight leading-[1.25] mb-8 font-normal">
          {ABOUT_DATA.headlineMain}{' '}
          <span className="italic text-[#D4A396] font-serif-luxury font-normal">
            {ABOUT_DATA.headlineAccent}
          </span>{' '}
          {ABOUT_DATA.headlineEnd}
        </h2>

        {/* Narrative text */}
        <div className="space-y-5 text-sm sm:text-base text-[#A8A39B] leading-relaxed font-light max-w-3xl">
          <p>{ABOUT_DATA.bioParagraph1}</p>
          <p>{ABOUT_DATA.bioParagraph2}</p>
          <p>{ABOUT_DATA.bioParagraph3}</p>
        </div>
      </div>
    </section>
  );
}
