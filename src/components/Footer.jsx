import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { PERSONAL_INFO } from '../data/projectsData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/20 text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-3">
            Vous avez une opportunité ou un projet ?
          </h3>
          <p className="text-sm text-slate-400 mb-8 max-w-lg mx-auto">
            Diplômée en Ingénierie Informatique, je suis à l'écoute d'opportunités professionnelles (CDI, Stage pré-embauche, Projets Full Stack & IA).
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
            >
              <Mail size={16} />
              <span>{PERSONAL_INFO.email}</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-all cursor-pointer"
            >
              <GithubIcon size={16} />
              <span>github.com/rim-coder</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-800/80 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name} — Tous droits réservés.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <span>Retour en haut</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
