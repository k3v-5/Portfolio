"use client";
import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <nav>
      <div className="container mx-auto px-6 lg:px-8 py-5 flex justify-between items-center">
        <div className="text-xl font-black text-slate-900 uppercase tracking-tighter italic">
          <a href="#kevin-garrido">Kevin Garrido</a>
        </div>
        <div className="hidden md:flex space-x-10 text-[10px] font-mono font-bold tracking-[0.4em] uppercase">
          <a
            href="#about-me"
            className="hover:text-purple-600 transition-colors text-slate-400"
          >
            {t.nav.bio}
          </a>
          <a
            href="#experience"
            className="hover:text-purple-600 transition-colors text-slate-400"
          >
            {t.nav.exp}
          </a>
          <a
            href="#skills"
            className="hover:text-purple-600 transition-colors text-slate-400"
          >
            {t.nav.skills}
          </a>
          <a
            href="#ai-tooling"
            className="hover:text-purple-600 transition-colors text-slate-400"
          >
            {t.nav.ai}
          </a>
          <a
            href="#projects"
            className="hover:text-purple-600 transition-colors text-slate-400"
          >
            {t.nav.projects}
          </a>
        </div>
        <div className="flex items-center gap-3 md:gap-5">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-slate-400 hover:text-purple-600 transition-colors uppercase border border-slate-200 hover:border-purple-300 rounded-full px-3 py-1.5"
            title={lang === "en" ? "Cambiar a Español" : "Switch to English"}
          >
            <span className={lang === "en" ? "text-slate-900" : ""}>EN</span>
            <span className="opacity-30">/</span>
            <span className={lang === "es" ? "text-slate-900" : ""}>ES</span>
          </button>
          <a
            href="#contact"
            className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-[10px] font-mono font-bold hover:bg-purple-600 transition uppercase shadow-xl"
          >
            {t.nav.contact}
          </a>
        </div>
      </div>
    </nav>
  );
}
