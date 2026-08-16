"use client";
import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function AIToolingSection() {
  const { t } = useLanguage();
  const aiTooling = t.aiTooling;

  return (
    <section id="ai-tooling">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex justify-center">
        <div className="content-card reveal-card max-w-5xl w-full">
          <p className="font-mono text-[10px] text-purple-500 mb-4 tracking-widest text-center">
            {aiTooling.module}
          </p>
          <h2 className="text-4xl lg:text-5xl font-black mb-4 text-slate-900 uppercase italic text-center">
            {aiTooling.heading}
          </h2>
          <p className="text-slate-500 text-sm text-center max-w-2xl mx-auto mb-12">
            {aiTooling.subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {aiTooling.tools.map((tool) => (
              <div
                key={tool.name}
                className="border border-slate-200 rounded-2xl p-6 flex flex-col"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {tool.name}
                </h3>
                <p className="text-slate-400 font-mono text-[10px] tracking-widest mt-1 mb-4 uppercase">
                  {tool.full}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {tool.blurb}
                </p>
                <p className="text-slate-700 text-sm leading-relaxed mb-6">
                  {tool.usage}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {tool.tags.map((tag) => (
                    <span key={tag} className="skill-tag !py-1.5 !px-3 !text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
