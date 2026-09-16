import React from 'react';
import { PROJECTS } from '../data/projectsData';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section id="projets" className="py-24 border-t border-[#181822] relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Label */}
        <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#C89B94] mb-4">
          RÉALISATIONS
        </p>

        {/* Headline */}
        <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#F7F5F2] tracking-tight leading-[1.25] mb-14 font-normal">
          Mes <span className="italic text-[#D4A396] font-serif-luxury font-normal">projets</span>
        </h2>

        {/* Projects list */}
        <div className="space-y-10">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
