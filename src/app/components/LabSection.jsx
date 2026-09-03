"use client";
import React, { useState } from "react";
import {
  VideoCameraIcon,
  CubeTransparentIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import { useLanguage } from "../i18n/LanguageContext";

export default function LabSection() {
  const { t } = useLanguage();
  const lab = t.lab;
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const getFallbackIcon = (id) => {
    if (id === "ae-video-engine") {
      return <VideoCameraIcon className="w-12 h-12 text-purple-400" />;
    }
    return <CubeTransparentIcon className="w-12 h-12 text-purple-400" />;
  };

  return (
    <section id="lab" className="flex-col w-full relative z-10">
      <div className="container mx-auto px-6 lg:px-12 mb-12 text-center">
        <p className="font-mono text-[10px] text-purple-500 mb-4 tracking-widest uppercase">
          {lab.module}
        </p>
        <h2 className="text-5xl lg:text-8xl font-black text-slate-900 uppercase italic tracking-tighter">
          {lab.heading}
        </h2>
        <p className="text-slate-500 text-sm max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
          {lab.subtitle}
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {lab.items.map((item) => {
            const hasError = imageErrors[item.id];
            const showImage = item.image && !hasError;

            return (
              <div
                key={item.id}
                className="reveal-card bg-white/95 backdrop-blur-[20px] border border-black/5 p-8 md:p-10 rounded-[3rem] shadow-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Slot de Imagen por Sección/Apartado */}
                  <div className="aspect-[2816/1536] rounded-2xl overflow-hidden mb-8 relative group border border-slate-100 bg-slate-950 flex items-center justify-center">
                    {showImage ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        onError={() => handleImageError(item.id)}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
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
                            [ MCP ENGINE // VISUAL SLOT ]
                          </span>
                          <span className="text-[11px] text-slate-400 mt-1 font-mono">
                            {item.tagline}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Tag flotante superior */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-mono font-bold tracking-widest uppercase bg-slate-900/80 text-white backdrop-blur-md border border-white/10">
                        <CpuChipIcon className="w-3 h-3 text-purple-400" />
                        ENGINE_PIPELINE
                      </span>
                    </div>
                  </div>

                  {/* Header y Tagline */}
                  <div className="mb-4">
                    <p className="font-mono text-[10px] text-purple-600 font-bold uppercase tracking-widest mb-1">
                      {item.tagline}
                    </p>
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
                        {lab.keyInnovations || "// Key Innovations"}
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
          })}
        </div>
      </div>
    </section>
  );
}
