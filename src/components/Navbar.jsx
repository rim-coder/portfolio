import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/projectsData';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "À PROPOS", href: "#a-propos" },
    { label: "PARCOURS", href: "#parcours" },
    { label: "STAGES", href: "#stages" },
    { label: "EXPERTISE", href: "#expertise" },
    { label: "RÉALISATIONS", href: "#projets" },
    { label: "CONTACT", href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0B0B0E]/90 border-b border-[#1A1A24] transition-all">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="font-serif-luxury text-lg sm:text-xl tracking-[0.2em] text-[#E5B8AE] hover:text-[#F3D7D0] transition-colors font-medium">
          R. BARRADAH
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-medium tracking-[0.2em] text-[#A6A29D]">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="hover:text-[#E5B8AE] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-[#2E2E3E] text-[10px] font-semibold text-[#D4A396] tracking-wider">
            FR
          </span>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#D4A396] p-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F0F14] border-b border-[#1F1F2C] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs tracking-[0.2em] text-[#C4BFB8] hover:text-[#E5B8AE] py-1.5"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
