"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeftIcon,
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  PrinterIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";
import OxfordCvView from "../components/cv/OxfordCvView";
import cvData from "../data/cvData";

export default function CvPage() {
  const [profile, setProfile] = useState("fullstack");
  const [lang, setLang] = useState("es");
  const [copied, setCopied] = useState(false);

  const profilesList = [
    { key: "fullstack", icon: "⚡", label: lang === "es" ? "Full-Stack & DevOps" : "Full-Stack & DevOps" },
    { key: "devops", icon: "☁️", label: lang === "es" ? "DevOps & Cloud" : "DevOps & Cloud" },
    { key: "ai", icon: "🧠", label: lang === "es" ? "IA & Motores MCP" : "AI & MCP Engines" },
    { key: "general", icon: "🌐", label: lang === "es" ? "General (Cómputo)" : "General (Intelligent Comp.)" },
  ];

  const pdfFileName = `Kevin_Garrido_CV_${profile.toUpperCase()}_${lang.toUpperCase()}.pdf`;
  const pdfUrl = `/cv/${pdfFileName}`;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyAtsText = () => {
    const pData = cvData.profiles[profile] || cvData.profiles.general;
    const personal = cvData.personal;
    const edu = cvData.education;

    const selectedProjects = (pData.selected_projects || [])
      .map((k) => cvData.projects[k])
      .filter(Boolean);

    const skillsPriority = pData.skills_priority || ["fullstack", "devops", "ai", "tools"];

    let text = `${personal.name.toUpperCase()}\n`;
    text += `${personal.location} | ${personal.phone} | ${personal.email}\n`;
    text += `LinkedIn: ${personal.linkedin.url} | GitHub: ${personal.github.url}\n\n`;

    text += `SUMMARY\n${pData[`title_${lang}`]}: ${pData[`summary_${lang}`]}\n\n`;

    text += `EDUCATION\n${edu[`school_${lang}`]} - ${edu.location}\n`;
    text += `${edu[`degree_${lang}`]} (${edu[`dates_${lang}`]})\n`;
    text += `${edu[`focus_${lang}`]}\n\n`;

    text += `PROFESSIONAL EXPERIENCE\n`;
    cvData.experience.forEach((job) => {
      text += `• ${job.company} (${job.location}) - ${job[`role_${lang}`]} [${job[`dates_${lang}`]}]\n`;
      job[`bullets_${lang}`].forEach((b) => {
        text += `   - ${b}\n`;
      });
      text += `\n`;
    });

    text += `SELECTED PROJECTS\n`;
    selectedProjects.forEach((p) => {
      text += `• ${p[`title_${lang}`]} [${p.tech}]\n`;
      p[`bullets_${lang}`].forEach((b) => {
        text += `   - ${b}\n`;
      });
      text += `\n`;
    });

    text += `TECHNICAL SKILLS\n`;
    skillsPriority.forEach((sKey) => {
      const g = cvData.skills[sKey];
      if (g) {
        const itemsStr = Array.isArray(g.items) ? g.items.join(", ") : g.items;
        text += `• ${g[`label_${lang}`]}: ${itemsStr}\n`;
      }
    });

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      {/* HEADER / NAVIGATION BAR (HIDDEN IN PRINT) */}
      <header className="max-w-[850px] mx-auto mb-8 print:hidden">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-slate-400 hover:text-purple-400 uppercase transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            <span>{lang === "es" ? "Volver al Portfolio" : "Back to Portfolio"}</span>
          </Link>

          <div className="flex items-center gap-3">
            {/* Lang switcher */}
            <div className="flex items-center bg-slate-900 border border-slate-700 rounded-lg p-0.5 text-xs font-mono font-bold">
              <button
                onClick={() => setLang("es")}
                className={`px-3 py-1 rounded transition-colors ${
                  lang === "es"
                    ? "bg-purple-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded transition-colors ${
                  lang === "en"
                    ? "bg-purple-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>

        {/* PROFILE SELECTOR & ACTIONS */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mr-1">
              {lang === "es" ? "Perfil Vacante:" : "Profile:"}
            </span>
            {profilesList.map((p) => {
              const isActive = profile === p.key;
              return (
                <button
                  key={p.key}
                  onClick={() => setProfile(p.key)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                    isActive
                      ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.4)] border border-purple-400"
                      : "bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
                  }`}
                >
                  <span>{p.icon}</span>
                  <span>{p.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopyAtsText}
              className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-mono text-xs px-3 py-1.5 rounded-lg border border-slate-700 transition"
              title="Copiar texto plano ATS"
            >
              {copied ? (
                <>
                  <ClipboardDocumentCheckIcon className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">
                    {lang === "es" ? "¡Copiado!" : "Copied!"}
                  </span>
                </>
              ) : (
                <>
                  <ClipboardDocumentIcon className="w-4 h-4 text-slate-400" />
                  <span>{lang === "es" ? "Copiar ATS" : "Copy ATS"}</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-mono text-xs px-3 py-1.5 rounded-lg border border-slate-700 transition"
              title="Imprimir"
            >
              <PrinterIcon className="w-4 h-4 text-slate-400" />
              <span>{lang === "es" ? "Imprimir" : "Print"}</span>
            </button>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-mono text-xs px-3 py-1.5 rounded-lg border border-slate-700 transition"
              title="Ver PDF en pestaña"
            >
              <ArrowTopRightOnSquareIcon className="w-4 h-4 text-slate-400" />
              <span>PDF</span>
            </a>

            <a
              href={pdfUrl}
              download={pdfFileName}
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold px-4 py-1.5 rounded-lg shadow-md hover:shadow-purple-500/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <ArrowDownTrayIcon className="w-4 h-4" />
              <span>{lang === "es" ? "Descargar PDF" : "Download PDF"}</span>
            </a>
          </div>
        </div>
      </header>

      {/* OXFORD CV VIEW */}
      <main className="max-w-[850px] mx-auto print:max-w-none print:w-full">
        <OxfordCvView profile={profile} lang={lang} />
      </main>

      {/* FOOTER */}
      <footer className="max-w-[850px] mx-auto mt-8 pt-4 border-t border-slate-800 text-center text-[10px] font-mono text-slate-500 uppercase tracking-widest print:hidden">
        {lang === "es"
          ? "Formato Oxford de 1 página estricta // Verificado para lectores ATS // Kevin Garrido"
          : "Strict 1-Page Oxford Layout // ATS-friendly verified // Kevin Garrido"}
      </footer>
    </div>
  );
}
