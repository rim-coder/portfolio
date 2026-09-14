import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

export default function EducationSection() {
  const s5Modules = [
    "Systèmes de Gestion de Bases de Données Avancés",
    "Algorithmes et Structures de Données Avancés",
    "Programmation Web Avancée",
    "Programmation Orientée Objets",
    "Apprentissage Automatique (Machine Learning)",
    "Génie Logiciel et Modélisation",
    "Anglais Technique"
  ];

  const s6Modules = [
    "Agents Intelligents & Systèmes Autonomes",
    "Intelligence Artificielle",
    "Big Data et Technologie Cloud",
    "Ateliers Pratiques (Business Intelligence / Intelligence des Affaires)",
    "Projet de Fin d'Études (Plateforme de Pilotage Stratégique)"
  ];

  return (
    <section id="formation" className="py-20 text-white border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
            <GraduationCap size={15} />
            <span>Cursus Universitaire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mb-3">
            Formation Académique
          </h2>
          <p className="text-sm text-slate-400">
            Licence Sciences et Techniques — Ingénierie Informatique (LST2I)
          </p>
        </div>

        {/* Institution card */}
        <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <Award size={15} />
                <span>Diplôme Universitaire</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-100">
                Licence en Sciences et Techniques : Ingénierie Informatique (LST2I)
              </h3>
              <p className="text-sm text-slate-300 mt-1">
                Faculté des Sciences et Techniques de Mohammedia (FST) — Université Hassan II de Casablanca
              </p>
            </div>
            <span className="self-start md:self-auto px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-semibold border border-emerald-500/20">
              Promotion Diplômée
            </span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed pt-6">
            Programme axé sur les compétences les plus recherchées dans les métiers du numérique : programmation avancée, conception logicielle, gestion approfondie des données, intelligence artificielle, agents autonomes et technologies décisionnelles.
          </p>
        </div>

        {/* Semesters grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-4 pb-3 border-b border-slate-800">
              <BookOpen size={16} />
              <span>Semestre 5 : Fondations Avancées & Génie Logiciel</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {s5Modules.map((m, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-teal-400 font-bold text-sm mb-4 pb-3 border-b border-slate-800">
              <BookOpen size={16} />
              <span>Semestre 6 : IA, Agents, Big Data & Ateliers BI</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {s6Modules.map((m, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-1.5" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
