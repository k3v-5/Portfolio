"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  VideoCameraIcon,
  CubeTransparentIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

/**
 * Lab Card
 * Displays experimental project details, preview slot, innovations, and tags.
 *
 * @param {{
 *   item: {
 *     id: string,
 *     name: string,
 *     tagline: string,
 *     blurb: string,
 *     image?: string,
 *     highlights?: string[],
 *     tags: string[]
 *   },
 *   innovationsLabel?: string
 * }} props
 */
export default function LabCard({ item, innovationsLabel = "// Key Innovations" }) {
  const [imageError, setImageError] = useState(false);
  const showImage = item.image && !imageError;

  const getFallbackIcon = (id) => {
    if (id === "ae-video-engine") {
      return <VideoCameraIcon className="w-12 h-12 text-purple-400" />;
    }
    if (id === "hendrix-assistant") {
      return <DevicePhoneMobileIcon className="w-12 h-12 text-purple-400" />;
    }
    return <CubeTransparentIcon className="w-12 h-12 text-purple-400" />;
  };

  return (
    <div className="reveal-card bg-white/95 backdrop-blur-[20px] border border-black/5 p-8 md:p-10 rounded-[3rem] shadow-2xl flex flex-col justify-between">
      <div>
        {/* Slot de Imagen por Sección/Apartado */}
        <div className="aspect-[2816/1536] rounded-2xl overflow-hidden mb-8 relative group border border-slate-100 bg-slate-950 flex items-center justify-center">
          {showImage ? (
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              onError={() => setImageError(true)}
              className="object-contain transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950/80 text-center relative overflow-hidden">
              {/* Patrón de grilla de fondo */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(#9F44C9 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              <div className="relative z-10 flex flex-col items-center">
                <div className="p-4 rounded-2xl bg-white/5 border border-purple-500/20 mb-3 shadow-inner">
                  {getFallbackIcon(item.id)}
                </div>
                <span className="font-mono text-[10px] text-purple-300 tracking-[0.3em] uppercase">
                  {item.id === "hendrix-assistant"
                    ? "[ MOBILE AI // ASSISTANT SLOT ]"
                    : "[ MCP ENGINE // VISUAL SLOT ]"}
                </span>
                <span className="text-[11px] text-slate-400 mt-1 font-mono">
                  {item.tagline}
                </span>
              </div>
            </div>
          )}

          {/* Overlay con link al repositorio en hover */}
          {item.gitUrl && (
            <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 flex items-center justify-center">
              <a
                href={item.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub // Repo &gt;&gt;</span>
              </a>
            </div>
          )}

          {/* Tag flotante superior */}
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-mono font-bold tracking-widest uppercase bg-slate-900/80 text-white backdrop-blur-md border border-white/10">
              <CpuChipIcon className="w-3 h-3 text-purple-400" />
              {item.id === "hendrix-assistant"
                ? "AI_ASSISTANT_CORE"
                : "ENGINE_PIPELINE"}
            </span>
          </div>
        </div>

        {/* Header y Tagline */}
        <div className="mb-4">
          <div className="flex items-center justify-between gap-3 mb-1 flex-wrap">
            <p className="font-mono text-[10px] text-purple-600 font-bold uppercase tracking-widest">
              {item.tagline}
            </p>
            {item.gitUrl && (
              <a
                href={item.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-purple-50 text-purple-700 hover:bg-purple-600 hover:text-white border border-purple-200 transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
            )}
          </div>
          <h3 className="text-3xl font-black text-slate-900 uppercase italic tracking-tight">
            {item.name}
          </h3>
        </div>

        {/* Descripción / Blurb */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
          {item.blurb}
        </p>

        {/* Highlights de Arquitectura */}
        {item.highlights && item.highlights.length > 0 && (
          <div className="space-y-2 mb-8 bg-slate-50/80 rounded-2xl p-4 border border-slate-100">
            <p className="font-mono text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-2">
              {innovationsLabel}
            </p>
            {item.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-xs text-slate-700"
              >
                <span className="font-mono text-purple-500 font-bold">
                  &gt;&gt;
                </span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tags Tecnológicos */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full font-mono text-[10px] uppercase tracking-wider font-semibold hover:bg-purple-100 hover:text-purple-700 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
