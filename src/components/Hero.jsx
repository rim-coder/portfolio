import React from 'react';
import { Mail, ArrowDown, Bot, Database, Code2, GraduationCap, MapPin } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { PERSONAL_INFO } from '../data/projectsData';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden text-white">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[250px] bg-teal-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-6 animate-pulse">
          <GraduationCap size={15} />
          <span>FST Mohammedia • Ingénierie Informatique (LST2I)</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-100 max-w-4xl mx-auto leading-tight sm:leading-tight mb-6">
          Développeuse <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Full Stack</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-400">IA / Automatisation</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
          {PERSONAL_INFO.bio}
        </p>

        <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mb-8">
          <MapPin size={14} className="text-emerald-400" />
          <span>{PERSONAL_INFO.location}</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projets"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Découvrir mes projets</span>
            <ArrowDown size={16} />
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-semibold text-sm transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <GithubIcon size={17} />
            <span>GitHub Profile</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/60 font-medium text-sm transition-all cursor-pointer"
          >
            <Mail size={16} />
            <span>{PERSONAL_INFO.email}</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 text-left">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
              <Code2 size={20} />
            </div>
            <h3 className="text-sm font-bold text-slate-200 mb-1">Architecture Full Stack & BI</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              React, Node.js, PostgreSQL, Recharts, API REST et modélisation de tableaux de bord décisionnels.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-3">
              <Bot size={20} />
            </div>
            <h3 className="text-sm font-bold text-slate-200 mb-1">Agents IA & Automatisation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Botpress Cloud, flux autonomes n8n, intégrations d'API webhooks et techniques de Prompt Engineering.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
              <Database size={20} />
            </div>
            <h3 className="text-sm font-bold text-slate-200 mb-1">Algorithmes & SGBD Avancés</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Structures de données complexes, requêtes SQL optimisées, normalisation et intégrité relationnelle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
