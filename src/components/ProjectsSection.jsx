import React, { useState } from 'react';
import { CATEGORIES, PROJECTS } from '../data/projectsData';
import ProjectCard from './ProjectCard';
import { FolderGit2 } from 'lucide-react';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projets" className="py-20 text-white border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
              <FolderGit2 size={14} />
              <span>Réalisations Académiques & Personnelles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
              Projets de Licence
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Chaque projet illustre une dimension de ma formation : du développement Full Stack aux agents intelligents et bases de données avancées.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeCategory === category.id
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/60'
              }`}
            >
              {category.label}
              {category.id === 'all' && ` (${PROJECTS.length})`}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
