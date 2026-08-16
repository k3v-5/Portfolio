"use client";
import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function ExperienceSection() {
  const { t } = useLanguage();
  const experience = t.experience;

  return (
    <section id="experience">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex justify-end">
        <div className="content-card reveal-card max-w-2xl w-full">
          <p className="font-mono text-[10px] text-purple-500 mb-4 tracking-widest">
            {experience.module}
          </p>
          <h2 className="text-4xl lg:text-5xl font-black mb-10 text-slate-900 uppercase italic">
            {experience.heading}
          </h2>
          <div className="space-y-10 border-l-4 border-purple-500 pl-8 ml-2 relative">
            {experience.jobs.map((job, i) => (
              <div className="relative" key={job.company}>
                <div
                  className={`absolute w-4 h-4 rounded-full -left-[40px] top-1 border-4 border-white ${
                    i === 0 ? "bg-purple-500" : "bg-slate-300"
                  }`}
                ></div>
                <h3 className="text-xl font-bold text-slate-900">
                  {job.company}
                </h3>
                <p className="text-slate-400 font-mono text-[10px] tracking-widest mt-1">
                  {job.roleDates}
                </p>
                <p className="text-slate-500 mt-4 text-sm leading-relaxed">
                  {job.bullets.map((bullet, bi) => (
                    <React.Fragment key={bi}>
                      {bi > 0 && <br />}• {bullet}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
