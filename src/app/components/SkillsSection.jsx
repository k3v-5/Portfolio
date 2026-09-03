"use client";
import React from "react";
import { useLanguage } from "../i18n/LanguageContext";


export default function SkillsSection() {
  const { t } = useLanguage();
  const categories = t.skills.categories;

  return (
    <section id="skills" className="!min-h-0 !py-8 lg:!py-12">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex justify-start">
        <div className="content-card reveal-card max-w-2xl w-full">
          <p className="font-mono text-[10px] text-purple-600 font-bold mb-4 tracking-widest uppercase">
            {t.skills.module}
          </p>
          <h2 className="text-4xl lg:text-5xl font-black mb-8 text-slate-900 uppercase italic">
            {t.skills.heading}
          </h2>

          <div className="space-y-6">
            {categories && categories.length > 0 ? (
              categories.map((cat) => (
                <div key={cat.title}>
                  <p className="font-mono text-[10px] text-purple-600 font-bold uppercase tracking-widest mb-2.5">
                    {cat.title}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
