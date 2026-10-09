"use client";
import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../theme/ThemeContext";

export default function Navbar({ onOpenCv }) {
  const { lang, toggleLang, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { href: "#about-me", label: t.nav.bio },
    { href: "#experience", label: t.nav.exp },
    { href: "#skills", label: t.nav.skills },
    { href: "#lab", label: t.nav.lab },
    { href: "#projects", label: t.nav.projects },
  ];

  return (
    <nav className="relative z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex justify-between items-center">
        <div className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
          <a href="#kevin-garrido" onClick={() => setIsMobileMenuOpen(false)}>
            Kevin Garrido
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 lg:space-x-10 text-[10px] font-mono font-bold tracking-[0.4em] uppercase items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-slate-500 dark:text-slate-400"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onOpenCv}
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-slate-500 dark:text-slate-400"
          >
            {t.nav.cv || "// CV"}
          </button>
        </div>

        {/* Action Controls & Mobile Hamburger */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
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

          {/* CV Button */}
          <button
            type="button"
            onClick={onOpenCv}
            className="flex items-center gap-1 text-[10px] font-mono font-bold tracking-widest text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-100 dark:hover:bg-purple-900/50 border border-purple-200 dark:border-purple-800 rounded-full px-2.5 sm:px-3 py-1.5 transition-colors uppercase shadow-sm"
            title="Curriculum Vitae"
          >
            <span>CV</span>
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 text-[10px] font-mono font-bold tracking-widest text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors uppercase border border-slate-200 dark:border-slate-800 rounded-full px-2.5 sm:px-3 py-1.5 bg-white/50 dark:bg-slate-900/60"
            title={lang === "en" ? "Cambiar a Español" : "Switch to English"}
          >
            <span className={lang === "en" ? "text-slate-900 dark:text-white" : ""}>EN</span>
            <span className="opacity-30">/</span>
            <span className={lang === "es" ? "text-slate-900 dark:text-white" : ""}>ES</span>
          </button>

          {/* Contact CTA (Desktop) */}
          <a
            href="#contact"
            className="hidden sm:inline-flex bg-slate-900 dark:bg-purple-600 text-white hover:bg-purple-600 dark:hover:bg-purple-500 px-4 md:px-6 py-2.5 rounded-full text-[10px] font-mono font-bold transition uppercase shadow-xl"
          >
            {t.nav.contact}
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 border border-slate-200 dark:border-slate-800 rounded-full transition-colors bg-white/70 dark:bg-slate-900/80 shadow-sm"
            aria-label={isMobileMenuOpen ? t.nav.close || "Cerrar" : t.nav.menu || "Menú"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            ) : (
              <Bars3Icon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-6 pt-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex flex-col space-y-3 font-mono text-xs font-bold uppercase tracking-[0.25em]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-xl text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/40 transition-all flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-purple-500 opacity-60 text-[10px]">&gt;&gt;</span>
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCv?.();
                }}
                className="py-2 px-3 rounded-xl text-left text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/40 transition-all flex items-center justify-between"
              >
                <span>{t.nav.cv || "// CV"}</span>
                <span className="text-purple-500 opacity-60 text-[10px]">&gt;&gt;</span>
              </button>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-center">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center bg-slate-900 dark:bg-purple-600 text-white hover:bg-purple-600 dark:hover:bg-purple-500 py-3 rounded-full text-xs font-mono font-bold transition uppercase shadow-xl tracking-widest"
              >
                {t.nav.contact}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
