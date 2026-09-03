"use client";
import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Herosection() {
  const { t } = useLanguage();

  return (
    <section id="kevin-garrido" className="justify-center text-center">
      <div className="max-w-6xl px-4">
        <p className="font-mono text-purple-600 text-xs mb-6 tracking-[0.8em] opacity-60">
          {t.hero.eyebrow}
        </p>
        <h1 className="text-6xl lg:text-[10rem] font-black tracking-tighter mb-8 bg-gradient-to-b from-slate-900 to-purple-600 bg-clip-text text-transparent uppercase italic leading-[0.85] pr-4 lg:pr-8">
          Kevin
          <br />
          Garrido
        </h1>
        <div className="flex flex-wrap justify-center gap-6 font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-slate-400">
          {t.hero.tags.map((tag, i) => (
            <React.Fragment key={tag}>
              {i > 0 && <span className="hidden md:block">•</span>}
              <span>{tag}</span>
            </React.Fragment>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 bg-slate-900 hover:bg-purple-600 text-white font-mono text-[11px] uppercase font-bold tracking-widest px-8 py-3.5 rounded-full transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(147,51,234,0.35)] transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{t.hero.ctaProjects}</span>
            <span className="text-purple-400 group-hover:text-white transition-colors">&gt;&gt;</span>
          </a>
          <a
            href="#lab"
            className="inline-flex items-center gap-2 bg-white/80 hover:bg-slate-50 border-2 border-slate-200 hover:border-purple-600 text-slate-800 font-mono text-[11px] uppercase font-bold tracking-widest px-7 py-3.5 rounded-full transition-all duration-300 backdrop-blur-md shadow-sm hover:shadow-[0_0_20px_rgba(147,51,234,0.15)] transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{t.hero.ctaLab}</span>
          </a>
          <a
            href="#contact"
            className="text-slate-400 hover:text-purple-600 font-mono text-[11px] uppercase font-bold tracking-widest px-5 py-3 transition-colors"
          >
            <span>{t.hero.ctaContact}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
