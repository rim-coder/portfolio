import React from 'react';
import { Mail, Phone, ArrowUp, ArrowUpRight } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { PERSONAL_INFO } from '../data/projectsData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-24 border-t border-[#181822] bg-[#0A0A0D] text-center relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#C89B94] mb-4">
          CONTACT & OPPORTUNITÉS
        </p>

        <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#F7F5F2] tracking-tight leading-[1.2] mb-6 font-normal">
          Travaillons <span className="italic text-[#D4A396] font-serif-luxury font-normal">ensemble</span>
        </h2>

        <p className="text-sm text-[#A8A39B] max-w-lg mx-auto font-light leading-relaxed mb-12">
          À l'écoute d'opportunités stimulantes en tant que développeuse informatique (CDI, Stage pré-embauche, Projets Full Stack, Data & IA).
        </p>

        {/* Contact links pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C89B94] hover:bg-[#Dbb1ab] text-[#0B0B0E] font-semibold text-xs tracking-[0.15em] uppercase transition-all shadow-lg shadow-[#C89B94]/20"
          >
            <Mail size={15} />
            <span>{PERSONAL_INFO.email}</span>
            <ArrowUpRight size={14} />
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#13131A] hover:bg-[#1C1C26] text-[#E5E0DA] border border-[#2B2B38] hover:border-[#C89B94]/40 font-semibold text-xs tracking-[0.15em] uppercase transition-all"
          >
            <GithubIcon size={15} />
            <span>github.com/rim-coder</span>
            <ArrowUpRight size={14} />
          </a>

          {PERSONAL_INFO.phone && (
            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#13131A] hover:bg-[#1C1C26] text-[#E5E0DA] border border-[#2B2B38] hover:border-[#C89B94]/40 font-semibold text-xs tracking-[0.15em] uppercase transition-all"
            >
              <Phone size={14} className="text-[#C89B94]" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
          )}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 border-t border-[#181822] text-[11px] text-[#6E6A63] font-light">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name} · Licence en Ingénierie Informatique (FST Mohammedia)
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-[#D4A396] transition-colors cursor-pointer tracking-wider"
          >
            <span>RETOUR EN HAUT</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
