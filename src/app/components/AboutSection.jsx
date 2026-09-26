"use client";
import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import SectionVisual from "./SectionVisual";

export default function AboutSection() {
  const { t } = useLanguage();
  const about = t.about;

  return (
    <section id="about-me" className="min-h-0 py-12 lg:py-20 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 content-card reveal-card w-full">
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
          <div className="lg:col-span-5 flex justify-center items-center">
            <SectionVisual
              src="/images/img_1wb.webp"
              alt="About visual - Identity 1"
              direction="right"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
