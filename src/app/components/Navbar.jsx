"use client";
import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../theme/ThemeContext";

export default function Navbar({ onOpenCv }) {
  const { lang, toggleLang, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav>
      <div className="container mx-auto px-6 lg:px-8 py-5 flex justify-between items-center">
        <div className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
          <a href="#kevin-garrido">Kevin Garrido</a>
        </div>
        <div className="hidden md:flex space-x-10 text-[10px] font-mono font-bold tracking-[0.4em] uppercase items-center">
          <a
            href="#about-me"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-slate-500 dark:text-slate-400"
          >
            {t.nav.bio}
          </a>
          <a
            href="#experience"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-slate-500 dark:text-slate-400"
          >
            {t.nav.exp}
          </a>
          <a
            href="#skills"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-slate-500 dark:text-slate-400"
          >
            {t.nav.skills}
          </a>
          <a
            href="#lab"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-slate-500 dark:text-slate-400"
          >
            {t.nav.lab}
          </a>
          <a
            href="#projects"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-slate-500 dark:text-slate-400"
          >
            {t.nav.projects}
          </a>
          <button
            type="button"
            onClick={onOpenCv}
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-slate-500 dark:text-slate-400"
          >
            {t.nav.cv || "// CV"}
          </button>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center justify-center p-2 text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-300 border border-slate-200 dark:border-slate-800 rounded-full transition-colors bg-white/70 dark:bg-slate-900/80 shadow-sm"
            title={
              isDark
                ? lang === "en"
                  ? "Switch to Light Mode"
                  : "Cambiar a Modo Claro"
                : lang === "en"
                  ? "Switch to Dark Mode"
                  : "Cambiar a Modo Oscuro"
            }
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <SunIcon className="w-4 h-4 text-amber-400" />
            ) : (
              <MoonIcon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <button
            type="button"
            onClick={onOpenCv}
            className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-100 dark:hover:bg-purple-900/50 border border-purple-200 dark:border-purple-800 rounded-full px-3 py-1.5 transition-colors uppercase shadow-sm"
            title="Curriculum Vitae"
          >
            <span>CV</span>
          </button>
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors uppercase border border-slate-200 dark:border-slate-800 rounded-full px-3 py-1.5 bg-white/50 dark:bg-slate-900/60"
            title={lang === "en" ? "Cambiar a Español" : "Switch to English"}
          >
            <span className={lang === "en" ? "text-slate-900 dark:text-white" : ""}>EN</span>
            <span className="opacity-30">/</span>
            <span className={lang === "es" ? "text-slate-900 dark:text-white" : ""}>ES</span>
          </button>
          <a
            href="#contact"
            className="bg-slate-900 dark:bg-purple-600 text-white hover:bg-purple-600 dark:hover:bg-purple-500 px-5 md:px-6 py-2.5 rounded-full text-[10px] font-mono font-bold transition uppercase shadow-xl"
          >
            {t.nav.contact}
          </a>
        </div>
      </div>
    </nav>
  );
}
