"use client";
import React, { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import SectionVisual from "./SectionVisual";
import SkillTag from "./skills/SkillTag";

/**
 * Interactive Tech Stack section presenting skills grouped into purple-accented
 * domain cards with full-color brand icons and domain filtering.
 */
export default function SkillsSection() {
  const { t } = useLanguage();
  const categories = t.skills.categories || [];
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="min-h-0 py-12 lg:py-20 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 content-card reveal-card w-full">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
              <div>
                <p className="font-mono text-[10px] text-purple-600 dark:text-purple-400 font-bold mb-3 tracking-widest uppercase">
                  {t.skills.module}
                </p>
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase italic">
                  {t.skills.heading}
                </h2>
              </div>

              {/* Filtros rápidos de dominio */}
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setActiveCategory("all")}
                  className={`px-3 py-1.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider transition-all border ${
                    activeCategory === "all"
                      ? "bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-500/25"
                      : "bg-slate-100/80 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-purple-500/40"
                  }`}
                >
                  {t.skills.filterAll}
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider transition-all border ${
                      activeCategory === cat.id
                        ? "bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-500/25"
                        : "bg-slate-100/80 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-purple-500/40"
                    }`}
                  >
                    {cat.filterLabel}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {visibleCategories.map((cat) => {
                const catIndex = categories.findIndex((c) => c.id === cat.id);
                const indexLabel = String(catIndex + 1).padStart(2, "0");
                return (
                  <div
                    key={cat.id || cat.title}
                    className="rounded-2xl p-4 sm:p-5 bg-slate-50/75 dark:bg-slate-900/55 border border-purple-500/15 hover:border-purple-500/40 transition-all duration-300 shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-3 mb-3.5">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="px-2 py-0.5 rounded-md font-mono text-[10px] font-black bg-purple-600/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300 border border-purple-500/20">
                          {indexLabel}
                        </span>
                        <p className="font-mono text-[10px] text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest truncate">
                          {cat.title.replace(/^\/\/\s*/, "")}
                        </p>
                      </div>
                      <span className="font-mono text-[10px] font-bold text-slate-400 dark:text-slate-500 shrink-0">
                        {cat.items.length}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {cat.items.map((skill) => (
                        <SkillTag key={skill} name={skill} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center items-center">
            <SectionVisual
              src="/images/img_algorithmic_core_wb.webp"
              alt="The Algorithmic Core - Skills visual"
              direction="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
