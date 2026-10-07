"use client";
import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import SectionVisual from "./SectionVisual";

export default function ExperienceSection({ onOpenCv }) {
  const { t } = useLanguage();
  const experience = t.experience;

  return (
    <section id="experience" className="min-h-0 py-12 lg:py-20 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 flex justify-center items-center order-2 lg:order-1">
            <SectionVisual
              src="/images/img_2wb.webp"
              alt="Experience visual - Identity 2"
              direction="left"
            />
          </div>
          <div className="lg:col-span-7 content-card reveal-card w-full order-1 lg:order-2">
            <p className="font-mono text-[10px] text-purple-600 font-bold mb-4 tracking-widest uppercase">
              {experience.module}
            </p>
            <h2 className="text-4xl lg:text-5xl font-black mb-10 text-slate-900 dark:text-white uppercase italic">
              {experience.heading}
            </h2>
            <div className="space-y-10 border-l-4 border-purple-600 pl-8 ml-2 relative">
              {experience.jobs.map((job, i) => (
                <div className="relative" key={job.company}>
                  <div
                    className={`absolute w-4 h-4 rounded-full -left-[40px] top-1 border-4 border-white dark:border-slate-900 ${
                      i === 0 ? "bg-purple-600" : "bg-slate-300 dark:bg-slate-600"
                    }`}
                  ></div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {job.company}
                  </h3>
                  <p className="text-slate-400 font-mono text-[10px] tracking-widest mt-1">
                    {job.roleDates}
                  </p>
                  <p className="text-slate-500 dark:text-slate-300 mt-4 text-sm leading-relaxed">
                    {job.bullets.map((bullet, bi) => (
                      <React.Fragment key={bi}>
                        {bi > 0 && <br />}• {bullet}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                {"// ATS-FRIENDLY OXFORD FORMAT"}
              </span>
              <button
                type="button"
                onClick={onOpenCv}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 uppercase tracking-widest hover:underline"
              >
                <span>{experience.viewFullCv || "Ver CV Completo (Formato Oxford ATS) →"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
