"use client";
import React from "react";
import { ArrowDownTrayIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "../i18n/LanguageContext";

export default function Herosection({ onOpenCv }) {
  const { t } = useLanguage();

  return (
    <section id="kevin-garrido" className="justify-center text-center">
      <div className="max-w-6xl px-4">
        <p className="font-mono text-purple-600 text-xs mb-6 tracking-[0.8em] opacity-60">
          {t.hero.eyebrow}
        </p>
        <h1 className="text-6xl lg:text-[10rem] font-black tracking-tighter mb-8 bg-gradient-to-b from-slate-900 to-purple-600 dark:from-white dark:to-purple-400 bg-clip-text text-transparent uppercase italic leading-[0.85] pr-4 lg:pr-8">
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
            className="group inline-flex items-center gap-3 bg-slate-900 dark:bg-purple-600 hover:bg-purple-600 dark:hover:bg-purple-500 text-white font-mono text-[11px] uppercase font-bold tracking-widest px-8 py-3.5 rounded-full transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(147,51,234,0.35)] transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{t.hero.ctaProjects}</span>
            <span className="text-purple-400 group-hover:text-white transition-colors">&gt;&gt;</span>
          </a>
          <a
            href="#lab"
            className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-purple-600 text-slate-800 dark:text-slate-200 font-mono text-[11px] uppercase font-bold tracking-widest px-7 py-3.5 rounded-full transition-all duration-300 backdrop-blur-md shadow-sm hover:shadow-[0_0_20px_rgba(147,51,234,0.15)] transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{t.hero.ctaLab}</span>
          </a>
          <button
            type="button"
            onClick={onOpenCv}
            className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-100 dark:hover:bg-purple-900/50 border-2 border-purple-200 dark:border-purple-800 hover:border-purple-600 text-purple-700 dark:text-purple-300 font-mono text-[11px] uppercase font-bold tracking-widest px-7 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-[0_0_25px_rgba(147,51,234,0.25)] transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <DocumentTextIcon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>{t.hero.ctaViewCv || "Ver CV"}</span>
          </button>
          <a
            href="/cv.pdf"
            download="Kevin_Garrido_CV.pdf"
            title={t.hero.ctaCv || "Descargar CV (.pdf)"}
            className="inline-flex items-center justify-center bg-white dark:bg-slate-900 hover:bg-purple-50 dark:hover:bg-purple-950/40 border-2 border-slate-200 dark:border-slate-700 hover:border-purple-600 text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-300 font-mono text-[11px] uppercase font-bold p-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(147,51,234,0.15)] transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <ArrowDownTrayIcon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          </a>
          <a
            href="#contact"
            className="text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 font-mono text-[11px] uppercase font-bold tracking-widest px-5 py-3 transition-colors"
          >
            <span>{t.hero.ctaContact}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
