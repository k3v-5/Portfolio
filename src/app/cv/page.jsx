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
  const [lang, setLang] = useState("es");
  const [copied, setCopied] = useState(false);

  const pdfUrl = lang === "en" ? "/cv-en.pdf" : "/cv.pdf";
  const pdfDownloadName = lang === "en" ? "Kevin_Garrido_CV_EN.pdf" : "Kevin_Garrido_CV.pdf";

  const handlePrint = () => {
    window.print();
  };

  const handleCopyAtsText = () => {
    const pData = cvData.profiles.fullstack;
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

          <div className="flex flex-wrap items-center gap-2">
            {/* Lang switcher */}
            <div className="flex items-center bg-slate-900 border border-slate-700 rounded-lg p-0.5 text-xs font-mono font-bold mr-2">
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
              download={pdfDownloadName}
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold px-4 py-1.5 rounded-lg shadow-md hover:shadow-purple-500/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <ArrowDownTrayIcon className="w-4 h-4" />
              <span>{lang === "es" ? "Descargar PDF" : "Download PDF"}</span>
            </a>
          </div>
        </div>
      </header>

      {/* OXFORD CV VIEW (SINGLE OFFICIAL CV) */}
      <main className="max-w-[850px] mx-auto print:max-w-none print:w-full">
        <OxfordCvView profile="fullstack" lang={lang} />
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
