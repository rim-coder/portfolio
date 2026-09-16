import React from 'react';
import { EXPERIENCES } from '../data/projectsData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="stages" className="py-24 border-t border-[#181822] relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Label */}
        <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#C89B94] mb-4">
          EXPÉRIENCES & STAGES
        </p>

        {/* Headline */}
        <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#F7F5F2] tracking-tight leading-[1.25] mb-14 font-normal">
          Mes <span className="italic text-[#D4A396] font-serif-luxury font-normal">stages & missions</span>
        </h2>

        {/* Timeline / Experience Cards */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-9 rounded-3xl bg-[#13131A]/90 border border-[#20202C] hover:border-[#C89B94]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#C89B94]/5"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-4">
                <div>
                  <span className="inline-block text-[10px] tracking-[0.18em] uppercase font-semibold text-[#D4A396] px-2.5 py-0.5 rounded bg-[#C89B94]/10 border border-[#C89B94]/20 mb-2">
                    {exp.type}
                  </span>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#F5F2EC] font-medium">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-light text-[#C7A398] mt-0.5">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1 text-[11px] text-[#7E7972] font-mono shrink-0">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#C89B94]" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-[#7E7972]" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#A8A39B] font-light leading-relaxed mb-5">
                {exp.description}
              </p>

              {/* Tasks bullet points */}
              {exp.tasks && (
                <div className="space-y-2 mb-6">
                  {exp.tasks.map((task, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2.5 text-xs text-[#C4BFB8] font-light">
                      <CheckCircle2 size={13} className="text-[#D4A396] shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Skills pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1D1D28]">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[10px] tracking-[0.12em] font-medium px-2.5 py-1 rounded-full bg-[#181822] text-[#B8B3AC] border border-[#2B2B38]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
