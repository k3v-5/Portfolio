"use client";
import React, { useState, useEffect } from "react";
import {
  XMarkIcon,
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import OxfordCvView from "./OxfordCvView";
import cvData from "../../data/cvData";
import { useLanguage } from "../../i18n/LanguageContext";

export default function CvModal({ isOpen, onClose }) {
  const { lang: siteLang, t } = useLanguage();
  const [cvLang, setCvLang] = useState(siteLang);
  const [copied, setCopied] = useState(false);

  // Sync with site language
  useEffect(() => {
    setCvLang(siteLang);
  }, [siteLang]);

  // Lock scroll when open & handle Escape
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const pdfUrl = cvLang === "en" ? "/cv-en.pdf" : "/cv.pdf";
  const pdfDownloadName = cvLang === "en" ? "Kevin_Garrido_CV_EN.pdf" : "Kevin_Garrido_CV.pdf";

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
    text += `LinkedIn: ${personal.linkedin.url} | GitHub: ${personal.github.url} | Web: ${personal.portfolio?.url}\n\n`;

    text += `SUMMARY\n${pData[`title_${cvLang}`]}: ${pData[`summary_${cvLang}`]}\n\n`;

    text += `EDUCATION\n${edu[`school_${cvLang}`]} - ${edu.location}\n`;
    text += `${edu[`degree_${cvLang}`]} (${edu[`dates_${cvLang}`]})\n`;
    text += `${edu[`focus_${cvLang}`]}\n\n`;

    text += `PROFESSIONAL EXPERIENCE\n`;
    cvData.experience.forEach((job) => {
      text += `• ${job.company} (${job.location}) - ${job[`role_${cvLang}`]} [${job[`dates_${cvLang}`]}]\n`;
      job[`bullets_${cvLang}`].forEach((b) => {
        text += `   - ${b}\n`;
      });
      text += `\n`;
    });

    text += `SELECTED PROJECTS\n`;
    selectedProjects.forEach((p) => {
      text += `• ${p[`title_${cvLang}`]} [${p.tech}]\n`;
      p[`bullets_${cvLang}`].forEach((b) => {
        text += `   - ${b}\n`;
      });
      text += `\n`;
    });

    text += `TECHNICAL SKILLS\n`;
    skillsPriority.forEach((sKey) => {
      const g = cvData.skills[sKey];
      if (g) {
        const itemsStr = Array.isArray(g.items) ? g.items.join(", ") : g.items;
        text += `• ${g[`label_${cvLang}`]}: ${itemsStr}\n`;
      }
    });

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* TOP BAR / CONTROL PANEL */}
        <div className="bg-slate-900/95 border-b border-slate-800 px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <p className="font-mono text-[10px] text-purple-400 font-bold tracking-widest uppercase">
              {cvLang === "es"
                ? "CURRICULUM VITAE // FORMATO OXFORD ATS (1 PÁGINA)"
                : "RESUME // OXFORD ATS FORMAT (1-PAGE)"}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-800/80 border border-slate-700 rounded-lg p-0.5 text-[10px] font-mono font-bold mr-1">
              <button
                onClick={() => setCvLang("es")}
                className={`px-2.5 py-1 rounded transition-colors ${
                  cvLang === "es"
                    ? "bg-purple-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setCvLang("en")}
                className={`px-2.5 py-1 rounded transition-colors ${
                  cvLang === "en"
                    ? "bg-purple-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* Actions: Copy ATS, Open PDF, Download PDF */}
            <button
              onClick={handleCopyAtsText}
              className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-mono text-xs px-3 py-1.5 rounded-lg border border-slate-700 transition"
              title="Copiar texto plano estructurado"
            >
              {copied ? (
                <>
                  <ClipboardDocumentCheckIcon className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">
                    {cvLang === "es" ? "¡Copiado!" : "Copied!"}
                  </span>
                </>
              ) : (
                <>
                  <ClipboardDocumentIcon className="w-4 h-4 text-slate-400" />
                  <span className="hidden sm:inline">
                    {cvLang === "es" ? "Copiar ATS" : "Copy ATS"}
                  </span>
                </>
              )}
            </button>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-mono text-xs px-3 py-1.5 rounded-lg border border-slate-700 transition"
              title="Abrir PDF en pestaña nueva"
            >
              <ArrowTopRightOnSquareIcon className="w-4 h-4 text-slate-400" />
              <span className="hidden sm:inline">
                {cvLang === "es" ? "Ver PDF" : "Open PDF"}
              </span>
            </a>

            <a
              href={pdfUrl}
              download={pdfDownloadName}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-mono text-xs font-bold px-4 py-1.5 rounded-lg shadow-md hover:shadow-purple-500/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <ArrowDownTrayIcon className="w-4 h-4" />
              <span>{cvLang === "es" ? "Descargar PDF" : "Download PDF"}</span>
            </a>

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label={t.cvModal?.actions?.close || "Close"}
              className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-1.5 rounded-lg transition-colors border border-slate-700 ml-1"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* MODAL BODY (SCROLLABLE OXFORD PAPER PREVIEW) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-950/70 flex justify-center">
          <div className="w-full max-w-[850px] transition-all">
            <OxfordCvView profile="fullstack" lang={cvLang} />

            {/* ATS Badge & Explanatory Footer */}
            <div className="mt-6 mb-2 flex items-center justify-between text-slate-500 text-[11px] font-mono px-2">
              <span className="flex items-center gap-1.5">
                <SparklesIcon className="w-3.5 h-3.5 text-purple-400" />
                <span>
                  {cvLang === "es"
                    ? "Formato Oxford de 1 página exacta, optimizado para lectores ATS y lectura ágil."
                    : "Strict 1-page Oxford layout, optimized for ATS parsers and technical recruiters."}
                </span>
              </span>
              <span className="opacity-60 hidden sm:inline">
                {pdfDownloadName}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
