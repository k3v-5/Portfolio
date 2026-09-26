"use client";
import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import SectionVisual from "./SectionVisual";

import SkillTag from "./skills/SkillTag";

export default function SkillsSection() {
  const { t } = useLanguage();
  const categories = t.skills.categories;

  return (
    <section id="skills" className="min-h-0 py-12 lg:py-20 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 content-card reveal-card w-full">
            <p className="font-mono text-[10px] text-purple-600 font-bold mb-4 tracking-widest uppercase">
              {t.skills.module}
            </p>
            <h2 className="text-4xl lg:text-5xl font-black mb-8 text-slate-900 uppercase italic">
              {t.skills.heading}
            </h2>

            <div className="space-y-6">
              {categories && categories.length > 0
                ? categories.map((cat) => (
                    <div key={cat.title}>
                      <p className="font-mono text-[10px] text-purple-600 font-bold uppercase tracking-widest mb-2.5">
                        {cat.title}
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        {cat.items.map((skill) => (
                          <SkillTag key={skill} name={skill} />
                        ))}
                      </div>
                    </div>
                  ))
                : null}
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
