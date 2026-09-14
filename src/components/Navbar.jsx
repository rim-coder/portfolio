import React from 'react';
import { Mail } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { PERSONAL_INFO } from '../data/projectsData';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-lg tracking-tight hover:text-emerald-400 transition-colors">
          <span className="w-9 h-9 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-extrabold shadow-md shadow-emerald-500/20">
            RB
          </span>
          <span>{PERSONAL_INFO.name}</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#projets" className="hover:text-emerald-400 transition-colors">Projets</a>
          <a href="#competences" className="hover:text-emerald-400 transition-colors">Compétences</a>
          <a href="#formation" className="hover:text-emerald-400 transition-colors">Formation (LST2I)</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-full border border-slate-700 transition-colors"
          >
            <GithubIcon size={15} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-full font-medium transition-colors shadow-sm shadow-emerald-500/20"
          >
            <Mail size={14} />
            <span>Me contacter</span>
          </a>
        </div>
      </div>
    </header>
  );
}
