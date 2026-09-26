"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CodeBracketIcon,
  EyeIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

/**
 * Project Card Item Component
 * Renders an individual project card with interactive links, responsive image,
 * and expandable description.
 *
 * @param {{
 *   project: {
 *     id: number,
 *     image: string,
 *     tagIds: string[],
 *     gitUrl: string | null,
 *     previewUrl: string | null,
 *     fit?: string
 *   },
 *   copy: {
 *     title?: string,
 *     badge?: string,
 *     description?: string
 *   },
 *   filters: Record<string, string>,
 *   isExpanded: boolean,
 *   isOverflowing: boolean,
 *   onToggleExpand: (id: number) => void,
 *   onRegisterDescRef: (id: number, el: HTMLElement | null) => void,
 *   readMoreLabel: string,
 *   showLessLabel: string
 * }} props
 */
export default function ProjectCardItem({
  project,
  copy,
  filters,
  isExpanded,
  isOverflowing,
  onToggleExpand,
  onRegisterDescRef,
  readMoreLabel,
  showLessLabel,
}) {
  const [imgError, setImgError] = useState(false);
  const hasImg = project.image && !imgError;

  return (
    <div className="project-card-anim bg-white/95 backdrop-blur-[20px] border border-black/5 p-8 md:p-10 rounded-[3rem] shadow-2xl block">
      <div className="aspect-video rounded-2xl overflow-hidden mb-8 relative group border border-slate-100 bg-slate-950 flex items-center justify-center">
        {hasImg ? (
          <Image
            src={project.image}
            alt={copy?.title || "Project"}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            onError={() => setImgError(true)}
            className={`w-full h-full ${project.fit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-1000 group-hover:scale-105`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 p-6 text-center">
            <SparklesIcon className="h-14 w-14 text-purple-300 mb-2" />
            <span className="font-mono text-[9px] text-purple-400 uppercase tracking-widest">
              {copy?.title ? `${copy.title} // PREVIEW SLOT` : "PREVIEW SLOT"}
            </span>
          </div>
        )}

        {/* Overlay con iconos si hay links */}
        {(project.gitUrl || project.previewUrl) && (
          <div className="items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            {project.gitUrl && (
              <Link
                href={project.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 w-14 mr-4 border-2 flex items-center justify-center relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              >
                <CodeBracketIcon className="h-8 w-8 text-[#ADB7BE] cursor-pointer group-hover/link:text-white" />
              </Link>
            )}
            {project.previewUrl && (
              <Link
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 w-14 border-2 flex items-center justify-center relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              >
                <EyeIcon className="h-8 w-8 text-[#ADB7BE] cursor-pointer group-hover/link:text-white" />
              </Link>
            )}
          </div>
        )}
      </div>

      <div className="flex items-start justify-between gap-4 flex-wrap">
        <h3 className="text-3xl font-black text-slate-900 uppercase italic">
          {copy?.title}
        </h3>
        <div className="flex items-center gap-2 flex-wrap">
          {project.gitUrl && (
            <a
              href={project.gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 hover:bg-purple-600 hover:text-white border border-slate-200 transition-all duration-200"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
          )}
          {copy?.badge && (
            <span className="px-3 py-1 rounded-full font-mono text-[9px] font-bold uppercase tracking-widest bg-purple-100 text-purple-700 border border-purple-200">
              {copy.badge}
            </span>
          )}
        </div>
      </div>

      <p
        ref={(el) => onRegisterDescRef(project.id, el)}
        className={`text-slate-500 mt-4 text-sm leading-relaxed ${
          isExpanded ? "" : "line-clamp-3"
        }`}
      >
        {copy?.description}
      </p>

      {(isOverflowing || isExpanded) && (
        <button
          onClick={() => onToggleExpand(project.id)}
          className="text-purple-500 hover:text-purple-600 font-mono text-[10px] font-bold uppercase tracking-widest mt-2 transition-colors"
        >
          {isExpanded ? showLessLabel : readMoreLabel}
        </button>
      )}

      <p className="text-slate-400 font-mono text-[9px] mt-6 uppercase tracking-widest">
        {project.tagIds.map((id) => filters[id]).join(" • ")}
      </p>
    </div>
  );
}
