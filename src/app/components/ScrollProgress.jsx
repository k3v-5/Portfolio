"use client";
import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const currentScroll = window.scrollY;

          if (totalHeight > 0) {
            const progress = Math.min(
              1,
              Math.max(0, currentScroll / totalHeight)
            );
            setScrollProgress(progress);
          }

          setShowBackToTop(currentScroll > 450);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Barra de progreso de lectura ultra-fina en el tope superior */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] z-[60] pointer-events-none origin-left bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-400 transition-transform duration-75 ease-out shadow-[0_0_10px_rgba(192,132,252,0.8)]"
        style={{
          transform: `scaleX(${scrollProgress})`,
        }}
        aria-hidden="true"
      />

      {/* Botón flotante Volver Arriba */}
      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
          showBackToTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center justify-center w-11 h-11 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-purple-500 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 shadow-xl hover:shadow-[0_0_25px_rgba(147,51,234,0.35)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 group focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Volver arriba"
          title="Volver arriba"
        >
          <ArrowUpIcon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </>
  );
}
