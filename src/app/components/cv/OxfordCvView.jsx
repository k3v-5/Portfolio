"use client";
import React from "react";
import cvData from "../../data/cvData";

export default function OxfordCvView({ profile = "fullstack", lang = "es" }) {
  const pData = cvData.profiles[profile] || cvData.profiles.general;
  const personal = cvData.personal;
  const edu = cvData.education;

  // Selected projects
  const selectedProjects = (pData.selected_projects || [])
    .map((k) => cvData.projects[k])
    .filter(Boolean);

  // Skills prioritized
  const skillsPriority = pData.skills_priority || ["fullstack", "devops", "ai", "tools"];

  return (
    <div className="bg-white text-slate-900 font-serif leading-snug p-6 sm:p-10 md:p-12 max-w-[850px] mx-auto shadow-2xl rounded-sm border border-slate-200 text-[13px] sm:text-[14px]">
      {/* HEADER */}
      <header className="text-center border-b border-black pb-3 mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase text-black font-serif">
          {personal.name}
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-[11px] sm:text-[12px] text-slate-700 mt-1.5 font-sans">
          <span>{personal.location}</span>
          <span>•</span>
          <a
            href={`tel:${personal.phone.replace(/[^0-9+]/g, "")}`}
            className="hover:text-purple-700 transition-colors"
          >
            {personal.phone}
          </a>
          <span>•</span>
          <a
            href={`mailto:${personal.email}`}
            className="text-purple-700 hover:underline"
          >
            {personal.email}
          </a>
          <span>•</span>
          <a
            href={personal.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:underline"
          >
            {personal.linkedin.display}
          </a>
          <span>•</span>
          <a
            href={personal.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:underline"
          >
            {personal.github.display}
          </a>
        </div>
      </header>

      {/* SUMMARY */}
      <section className="mb-4">
        <p className="text-slate-800 leading-relaxed text-justify">
          <strong className="text-black font-bold mr-1">
            {pData[`title_${lang}`]}:
          </strong>
          {pData[`summary_${lang}`]}
        </p>
      </section>

      {/* EDUCATION */}
      <section className="mb-4">
        <h2 className="text-[12px] font-sans font-black tracking-widest uppercase border-b border-black pb-0.5 mb-2 text-black">
          {lang === "en" ? "EDUCATION" : "EDUCACIÓN"}
        </h2>
        <div className="flex justify-between items-baseline font-bold text-black text-[13px] sm:text-[14px]">
          <span>{edu[`school_${lang}`]}</span>
          <span className="font-normal text-[11px] sm:text-[12px] text-slate-600 font-sans">
            {edu.location}
          </span>
        </div>
        <div className="flex justify-between items-baseline italic text-slate-800 text-[12px] sm:text-[13px]">
          <span>{edu[`degree_${lang}`]}</span>
          <span className="font-normal not-italic text-[11px] sm:text-[12px] text-slate-600 font-sans">
            {edu[`dates_${lang}`]}
          </span>
        </div>
        <p className="text-[11px] sm:text-[12px] text-slate-700 mt-1">
          {edu[`focus_${lang}`]}
        </p>
      </section>

      {/* WORK EXPERIENCE */}
      <section className="mb-4">
        <h2 className="text-[12px] font-sans font-black tracking-widest uppercase border-b border-black pb-0.5 mb-2 text-black">
          {lang === "en" ? "PROFESSIONAL EXPERIENCE" : "EXPERIENCIA PROFESIONAL"}
        </h2>
        <div className="space-y-3">
          {cvData.experience.map((job) => (
            <div key={job.company}>
              <div className="flex justify-between items-baseline font-bold text-black text-[13px] sm:text-[14px]">
                <span>{job.company}</span>
                <span className="font-normal text-[11px] sm:text-[12px] text-slate-600 font-sans">
                  {job.location}
                </span>
              </div>
              <div className="flex justify-between items-baseline italic text-slate-800 text-[12px] sm:text-[13px] mb-1">
                <span>{job[`role_${lang}`]}</span>
                <span className="font-normal not-italic text-[11px] sm:text-[12px] text-slate-600 font-sans">
                  {job[`dates_${lang}`]}
                </span>
              </div>
              <ul className="list-disc ml-5 space-y-1 text-slate-800 text-[12px] sm:text-[12.5px] leading-relaxed">
                {job[`bullets_${lang}`].map((b, bi) => (
                  <li key={bi}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="mb-4">
        <h2 className="text-[12px] font-sans font-black tracking-widest uppercase border-b border-black pb-0.5 mb-2 text-black">
          {lang === "en" ? "SELECTED PROJECTS" : "PROYECTOS TÉCNICOS DESTACADOS"}
        </h2>
        <div className="space-y-3">
          {selectedProjects.map((p) => (
            <div key={p.title_en}>
              <div className="flex justify-between items-baseline text-[13px] sm:text-[14px]">
                <span className="font-bold text-black">{p[`title_${lang}`]}</span>
                <span className="text-[11px] sm:text-[12px] text-slate-600 font-sans italic">
                  [{p.tech}]
                </span>
              </div>
              <ul className="list-disc ml-5 space-y-1 text-slate-800 text-[12px] sm:text-[12.5px] leading-relaxed mt-0.5">
                {p[`bullets_${lang}`].map((b, bi) => (
                  <li key={bi}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section>
        <h2 className="text-[12px] font-sans font-black tracking-widest uppercase border-b border-black pb-0.5 mb-2 text-black">
          {lang === "en" ? "TECHNICAL SKILLS" : "HABILIDADES TÉCNICAS"}
        </h2>
        <div className="space-y-1 text-[12px] sm:text-[12.5px]">
          {skillsPriority.map((sKey) => {
            const skillGroup = cvData.skills[sKey];
            if (!skillGroup) return null;
            return (
              <p key={sKey} className="text-slate-800">
                <strong className="text-black font-bold mr-1">
                  {skillGroup[`label_${lang}`]}:
                </strong>
                <span className="font-sans text-[11.5px] sm:text-[12px] text-slate-700">
                  {Array.isArray(skillGroup.items)
                    ? skillGroup.items.join(", ")
                    : skillGroup.items}
                </span>
              </p>
            );
          })}
        </div>
      </section>
    </div>
  );
}
