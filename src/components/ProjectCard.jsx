import React from 'react';
import { ArrowUpRight, Video, CheckCircle2 } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function ProjectCard({ project }) {
  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-[#13131A]/90 border border-[#20202C] hover:border-[#C89B94]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#C89B94]/5 flex flex-col justify-between">
      <div>
        {/* Subtitle tag */}
        <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#D4A396] mb-2">
          {project.subtitle}
        </p>

        {/* Title */}
        <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#F7F5F2] font-medium tracking-tight mb-4">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-xs sm:text-sm text-[#A8A39B] font-light leading-relaxed mb-6">
          {project.summary}
        </p>

        {/* Highlights */}
        {project.highlights && (
          <div className="space-y-2 mb-8">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-[#C4BFB8] font-light">
                <CheckCircle2 size={13} className="text-[#D4A396] shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer tags & links */}
      <div className="pt-6 border-t border-[#1D1D28]">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="text-[10px] tracking-[0.1em] font-medium px-3 py-1 rounded-full bg-[#181824] text-[#B8B3AC] border border-[#252535]"
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C89B94] hover:bg-[#Dbb1ab] text-[#0B0B0E] font-semibold text-xs tracking-[0.1em] uppercase transition-all duration-200"
            >
              <GithubIcon size={14} />
              <span>Voir le Code</span>
              <ArrowUpRight size={13} />
            </a>
          )}

          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#181822] hover:bg-[#20202E] text-[#E5E0DA] border border-[#2B2B38] hover:border-[#C89B94]/40 font-semibold text-xs tracking-[0.1em] uppercase transition-all duration-200"
            >
              <Video size={14} className="text-[#D4A396]" />
              <span>Démo Vidéo</span>
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
