import React from 'react';
import { EDUCATION } from '../data/projectsData';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="parcours" className="py-24 border-t border-[#181822] relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Label */}
        <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#C89B94] mb-4">
          FORMATION & DIPLÔMES
        </p>

        {/* Headline */}
        <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#F7F5F2] tracking-tight leading-[1.25] mb-14 font-normal">
          Mon <span className="italic text-[#D4A396] font-serif-luxury font-normal">parcours universitaire</span>
        </h2>

        {/* Education Stack */}
        <div className="space-y-8">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-9 rounded-3xl bg-[#13131A]/90 border border-[#20202C] hover:border-[#C89B94]/40 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#F5F2EC] font-medium">
                    {edu.diploma}
                  </h3>
                  <p className="text-sm font-light text-[#D4A396] mt-0.5">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-[11px] text-[#7E7972] font-mono shrink-0">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#C89B94]" />
                    {edu.period}
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-[#7E7972]" />
                    {edu.location}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#A8A39B] font-light leading-relaxed mb-4">
                {edu.description}
              </p>

              {edu.modules && (
                <div className="pt-4 border-t border-[#1D1D28]">
                  <p className="text-[10px] tracking-[0.18em] uppercase text-[#7E7972] font-semibold mb-2.5 flex items-center gap-1.5">
                    <BookOpen size={12} className="text-[#C89B94]" />
                    Modules clés & spécialités :
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.modules.map((m, mIdx) => (
                      <span
                        key={mIdx}
                        className="text-[10px] tracking-[0.08em] px-2.5 py-1 rounded-lg bg-[#181824] text-[#C4BFB8] border border-[#252534]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
