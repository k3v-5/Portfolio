"use client";
import React, { useRef } from "react";
import Link from "next/link";
import CustomCursor from "../components/CustomCursor";
import MatrixBackground from "../components/MatrixBackground";
import { useScrollAnimations } from "../hooks/useScrollAnimations";
import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../theme/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

// Micro-componente para estandarizar los títulos de sección
const SectionHeading = ({ number, title }) => (
  <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white uppercase italic mb-3 md:mb-4 flex items-center tracking-tight">
    <span className="text-purple-500 font-mono text-sm md:text-base mr-4 tracking-widest opacity-80">
      {number}.
    </span>
    {title}
  </h2>
);

// Micro-componente para estandarizar los elementos de lista tipo terminal
const ListItem = ({ strong, text }) => (
  <li className="flex items-start group">
    <span className="text-purple-500 mr-3 font-mono text-xs leading-relaxed mt-1 opacity-50 group-hover:opacity-100 transition-opacity">
      {">>"}
    </span>
    <span className="text-slate-500 dark:text-slate-300 font-light text-sm md:text-base leading-relaxed">
      {strong && (
        <strong className="text-slate-900 dark:text-white font-medium mr-1.5">
          {strong}
        </strong>
      )}
      {text}
    </span>
  </li>
);

export default function PrivacyPolicy() {
  const containerRef = useRef(null);
  const { lang, toggleLang, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const privacy = t.privacy;

  useScrollAnimations({
    containerRef,
    revealCards: false,
    scrub: 0.65,
  });

  return (
    <div ref={containerRef} className="relative min-h-screen scroll-container">
      <MatrixBackground />
      <CustomCursor />

      {/* Línea SVG de fondo */}
      <div className="svg-line-container" style={{ opacity: 0.85 }}>
        <svg
          viewBox="0 0 2120 10000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%" }}
        >
          <path
            id="scroll-path"
            d="M 699 0 C 699 248, 1950 303, 1950 550 C 1950 910, 1980 990, 1980 1350 C 1980 1710, 140 1790, 140 2150 C 140 2510, 1980 2590, 1980 2950 C 1980 3265, 1350 3335, 1350 3650 C 1350 3988, 200 4063, 200 4400 C 200 4738, 1920 4813, 1920 5150 C 1920 5510, 180 5590, 180 5950 C 180 6355, 1940 6445, 1940 6850 C 1940 7210, 900 7290, 900 7650 C 900 8010, 1950 8090, 1950 8450 C 1950 8788, 250 8863, 250 9200 C 250 9425, 1060 9475, 1060 9700 C 1060 9835, 1060 9865, 1060 10000"
            stroke="#c084fc"
            strokeWidth="32"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-20 relative z-10">
        {/* Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 max-w-5xl mx-auto">
          <Link
            href="/"
            className="group inline-flex items-center text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 font-mono text-xs md:text-sm tracking-widest uppercase transition-all duration-300"
          >
            <svg
              className="w-4 h-4 mr-3 transform group-hover:-translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            {privacy.backToHome}
          </Link>

          <div className="flex items-center gap-2">
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

            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 text-[10px] font-mono font-bold tracking-widest text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors uppercase border border-slate-200 dark:border-slate-800 rounded-full px-3 py-1.5 bg-white/50 dark:bg-slate-900/60 shadow-sm"
              title={lang === "en" ? "Cambiar a Español" : "Switch to English"}
            >
              <span className={lang === "en" ? "text-slate-900 dark:text-white" : ""}>EN</span>
              <span className="opacity-30">/</span>
              <span className={lang === "es" ? "text-slate-900 dark:text-white" : ""}>ES</span>
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto bg-white/80 dark:bg-slate-900/85 backdrop-blur-md border border-white/50 dark:border-slate-800 p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] shadow-2xl transition-colors duration-300">
          {/* Header Section */}
          <div className="mb-8 border-b border-slate-100 dark:border-slate-800 pb-8">
            <p className="font-mono text-[10px] md:text-xs text-purple-500 mb-4 tracking-widest uppercase font-bold">
              {privacy.docLabel}
            </p>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-8">
              {privacy.title}
            </h1>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 lg:gap-16">
              <p className="text-slate-500 dark:text-slate-300 font-light text-base md:text-lg leading-relaxed max-w-2xl">
                {privacy.intro}
              </p>
              <div className="bg-white/60 dark:bg-slate-800/80 border border-white/40 dark:border-slate-700/60 px-5 py-4 rounded-2xl shrink-0 self-start md:self-auto backdrop-blur-sm shadow-sm">
                <p className="text-slate-400 dark:text-slate-400 font-mono text-[10px] uppercase tracking-widest mb-1">
                  {privacy.lastUpdatedLabel}
                </p>
                <p className="text-slate-900 dark:text-white font-bold text-sm">
                  {privacy.lastUpdatedDate}
                </p>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="space-y-8">
            {privacy.sections.map((section, idx) => (
              <section
                key={section.number}
                className={idx > 0 ? "pt-6 border-t border-slate-100 dark:border-slate-800" : ""}
              >
                <SectionHeading number={section.number} title={section.title} />

                {section.intro && (
                  <p className="text-slate-500 dark:text-slate-300 font-light text-sm md:text-base leading-relaxed mb-3">
                    {section.intro}
                  </p>
                )}

                {section.body && (
                  <p className="text-slate-500 dark:text-slate-300 font-light text-sm md:text-base leading-relaxed">
                    {section.body}
                  </p>
                )}

                {section.items && section.items.length > 0 && (
                  <ul className="space-y-2 md:space-y-2.5 mt-2">
                    {section.items.map((item, itemIdx) => (
                      <ListItem
                        key={itemIdx}
                        strong={item.strong}
                        text={item.text}
                      />
                    ))}
                  </ul>
                )}

                {section.email && (
                  <div className="bg-white/60 dark:bg-slate-800/80 border border-white/40 dark:border-slate-700/60 p-6 rounded-2xl inline-block backdrop-blur-sm shadow-sm mt-3">
                    <p className="font-bold text-slate-900 dark:text-white mb-1">
                      {section.name}
                    </p>
                    <a
                      href={`mailto:${section.email}`}
                      className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300 transition-colors font-mono text-sm flex items-center group"
                    >
                      {section.email}
                      <svg
                        className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
