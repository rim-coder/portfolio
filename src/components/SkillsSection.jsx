import React from 'react';
import { SKILL_GROUPS } from '../data/projectsData';
import { Cpu, Check } from 'lucide-react';

export default function SkillsSection() {
  return (
    <section id="competences" className="py-20 text-white bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
            <Cpu size={14} />
            <span>Savoir-faire Technique</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mb-3">
            Compétences & Technologies
          </h2>
          <p className="text-sm text-slate-400">
            Une combinaison de compétences en génie logiciel, développement web moderne, intelligence artificielle et pilotage de données.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_GROUPS.map((group, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-bold text-slate-200 mb-4 pb-3 border-b border-slate-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  {group.title}
                </h3>
                <ul className="space-y-2.5">
                  {group.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check size={13} className="text-emerald-400 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
