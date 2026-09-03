"use client";
import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();
  const about = t.about;

  return (
    <section id="about-me">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex justify-start">
        <div className="content-card reveal-card max-w-2xl w-full">
          <p className="font-mono text-[10px] text-purple-600 font-bold mb-4 tracking-widest uppercase">
            {about.module}
          </p>
          <h2 className="text-4xl lg:text-5xl font-black mb-8 text-slate-900 uppercase italic">
            {about.heading}
          </h2>
          <p className="text-slate-500 leading-relaxed text-lg lg:text-xl font-light">
            {about.bio}
          </p>
          <div className="mt-8 pt-6 border-t border-slate-100">
            <p className="text-sm text-slate-400 font-mono uppercase tracking-widest">
              {about.educationLabel}
            </p>
            <p className="text-slate-900 font-bold mt-2">{about.degree}</p>
            <p className="text-slate-500 text-sm mt-1">{about.school}</p>
            <p className="text-slate-400 text-sm mt-2 italic">
              {about.focus}
            </p>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
