"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PlayIcon, FilmIcon } from "@heroicons/react/24/solid";

/**
 * Video Demo Player
 * Lightweight click-to-play HTML5 video slot that shows the project poster on load
 * (0 bytes of video transferred until clicked) and switches to native controls on demand.
 *
 * @param {{
 *   src: string,
 *   poster?: string | null,
 *   alt?: string,
 *   playLabel?: string,
 *   fit?: "cover" | "contain"
 * }} props
 */
export default function VideoDemoPlayer({
  src,
  poster = null,
  alt = "Project demo video",
  playLabel = "Ver Demo (0:12)",
  fit = "cover",
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [posterError, setPosterError] = useState(false);

  if (isPlaying) {
    return (
      <div className="w-full h-full bg-black relative">
        <video
          src={src}
          poster={poster || undefined}
          controls
          autoPlay
          playsInline
          preload="metadata"
          className="w-full h-full object-contain bg-black"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      aria-label={playLabel}
      className="w-full h-full relative group/video block text-left cursor-pointer focus:outline-none"
    >
      {poster && !posterError ? (
        <Image
          src={poster}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          quality={75}
          onError={() => setPosterError(true)}
          className={`w-full h-full ${fit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-700 group-hover/video:scale-105`}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950" />
      )}

      {/* Gradiente sutil para legibilidad del botón Play */}
      <div className="absolute inset-0 bg-slate-950/25 group-hover/video:bg-slate-950/40 transition-colors duration-300" />

      {/* Botón Play central con acento morado */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-purple-600/90 group-hover/video:bg-purple-500 text-white flex items-center justify-center shadow-2xl shadow-purple-950/60 ring-4 ring-white/20 group-hover/video:ring-purple-300/50 transition-all duration-300 group-hover/video:scale-110">
          <PlayIcon className="w-7 h-7 ml-1" />
        </span>
      </div>

      {/* Etiqueta inferior izquierda */}
      <div className="absolute bottom-3 left-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[9px] font-bold uppercase tracking-widest bg-slate-950/80 text-purple-200 border border-purple-400/30 backdrop-blur-md">
          <FilmIcon className="w-3 h-3 text-purple-400" />
          <span>{playLabel}</span>
        </span>
      </div>
    </button>
  );
}
