import React from 'react';
import { EXPERTISE_DOMAINS } from '../data/projectsData';
import { Code2, Bot, Database } from 'lucide-react';

export default function SkillsSection() {
  const getIcon = (id) => {
    switch (id) {
      case 'fullstack':
        return <Code2 size={20} className="text-[#E5B8AE]" />;
      case 'ai':
        return <Bot size={20} className="text-[#E5B8AE]" />;
      case 'bi':
        return <Database size={20} className="text-[#E5B8AE]" />;
      default:
        return <Code2 size={20} className="text-[#E5B8AE]" />;
    }
  };

  return (
    <section id="expertise" className="py-24 border-t border-[#181822] relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Label */}
        <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#C89B94] mb-4">
          EXPERTISE
        </p>

        {/* Headline */}
        <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#F7F5F2] tracking-tight leading-[1.25] mb-14 font-normal">
          Ce que je <span className="italic text-[#D4A396] font-serif-luxury font-normal">maîtrise</span>
        </h2>

        {/* Domain Cards */}
        <div className="space-y-6">
          {EXPERTISE_DOMAINS.map((domain, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-9 rounded-3xl bg-[#13131A]/90 border border-[#20202C] hover:border-[#C89B94]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#C89B94]/5"
            >
              {/* Icon badge */}
              <div className="w-12 h-12 rounded-2xl bg-[#231A21] border border-[#3E2935] flex items-center justify-center mb-6 shadow-inner">
                {getIcon(domain.id)}
              </div>

              {/* Title & Description */}
              <h3 className="font-serif-luxury text-2xl text-[#F7F5F2] font-medium mb-3">
                {domain.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A8A39B] font-light leading-relaxed mb-6 max-w-2xl">
                {domain.description}
              </p>

              {/* Tags grid */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1D1D28]">
                {domain.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] tracking-[0.15em] font-medium px-3.5 py-1.5 rounded-full bg-[#181824] text-[#C4BFB8] border border-[#282838] hover:border-[#C89B94]/50 hover:text-[#E5B8AE] transition-colors"
                  >
                    {tag}
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
