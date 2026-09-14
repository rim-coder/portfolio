import React from 'react';
import { ExternalLink, Video, CheckCircle2, Layers } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function ProjectCard({ project }) {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 p-6 md:p-7 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1">
      <div>
        {/* Header badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {project.badge}
          </span>
          {project.featured && (
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
              Projet Phare
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors mb-3">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-slate-300 leading-relaxed mb-5">
          {project.summary}
        </p>

        {/* Architecture */}
        {project.architecture && (
          <div className="mb-5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs">
            <div className="flex items-center gap-1.5 font-semibold text-slate-300 mb-1">
              <Layers size={13} className="text-emerald-400" />
              <span>Architecture de la solution :</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              {project.architecture}
            </p>
          </div>
        )}

        {/* Key Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-6 space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Fonctionnalités clés :
            </h4>
            <ul className="space-y-1.5">
              {project.highlights.map((h, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer: Tags and Action Links */}
      <div className="pt-4 border-t border-slate-800/80">
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors shadow-sm cursor-pointer"
            >
              <GithubIcon size={14} />
              <span>Dépôt GitHub</span>
            </a>
          )}

          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
            >
              <Video size={14} className="text-teal-400" />
              <span>Voir la démo vidéo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
