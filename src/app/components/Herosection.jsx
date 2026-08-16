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
      </div>
    </section>
  );
}
