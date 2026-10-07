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

export default function CvModal({ isOpen, onClose, initialProfile = "fullstack" }) {
  const { lang: siteLang, t } = useLanguage();
  const [profile, setProfile] = useState(initialProfile);
  const [cvLang, setCvLang] = useState(siteLang);
  const [copied, setCopied] = useState(false);

  // Sync lang with site when site changes
  useEffect(() => {
    setCvLang(siteLang);
  }, [siteLang]);

  // Lock scroll when open
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

  const pdfFileName = `Kevin_Garrido_CV_${profile.toUpperCase()}_${cvLang.toUpperCase()}.pdf`;
  const pdfUrl = `/cv/${pdfFileName}`;

  const profilesList = [
    { key: "fullstack", icon: "⚡", label: t.cvModal?.profiles?.fullstack || "Full-Stack & DevOps" },
    { key: "devops", icon: "☁️", label: t.cvModal?.profiles?.devops || "DevOps & Cloud" },
    { key: "ai", icon: "🧠", label: t.cvModal?.profiles?.ai || "AI & MCP Engines" },
    { key: "general", icon: "🌐", label: t.cvModal?.profiles?.general || "General" },
  ];

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
        <div className="bg-slate-900/95 border-b border-slate-800 px-4 sm:px-6 py-4 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <p className="font-mono text-[10px] text-purple-400 font-bold tracking-widest uppercase">
                {t.cvModal?.badge || "OXFORD ATS FORMAT // 1-PAGE TAILORED"}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {/* Language Switcher */}
              <div className="flex items-center bg-slate-800/80 border border-slate-700 rounded-lg p-0.5 text-[10px] font-mono font-bold">
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

              {/* Close button */}
              <button
                onClick={onClose}
                aria-label={t.cvModal?.actions?.close || "Close"}
                className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-1.5 rounded-lg transition-colors border border-slate-700"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Profile Switcher Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mr-1 hidden sm:inline">
                Perfil:
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
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60"
                    }`}
                  >
                    <span>{p.icon}</span>
                    <span>{p.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Actions: Download, Open, Copy */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleCopyAtsText}
                className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-mono text-xs px-3 py-1.5 rounded-lg border border-slate-700 transition"
                title="Copiar texto plano estructurado"
              >
                {copied ? (
                  <>
                    <ClipboardDocumentCheckIcon className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">
                      {t.cvModal?.actions?.copied || "¡Copiado!"}
                    </span>
                  </>
                ) : (
                  <>
                    <ClipboardDocumentIcon className="w-4 h-4 text-slate-400" />
                    <span className="hidden sm:inline">
                      {t.cvModal?.actions?.copyText || "Copiar ATS"}
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
                  {t.cvModal?.actions?.openPdf || "Ver PDF"}
                </span>
              </a>

              <a
                href={pdfUrl}
                download={pdfFileName}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-mono text-xs font-bold px-4 py-1.5 rounded-lg shadow-md hover:shadow-purple-500/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <ArrowDownTrayIcon className="w-4 h-4" />
                <span>{t.cvModal?.actions?.downloadPdf || "Descargar PDF"}</span>
              </a>
            </div>
          </div>
        </div>

        {/* MODAL BODY (SCROLLABLE OXFORD PAPER PREVIEW) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-950/70 flex justify-center">
          <div className="w-full max-w-[850px] transition-all">
            <OxfordCvView profile={profile} lang={cvLang} />

            {/* ATS Badge & Explanatory Footer */}
            <div className="mt-6 mb-2 flex items-center justify-between text-slate-500 text-[11px] font-mono px-2">
              <span className="flex items-center gap-1.5">
                <SparklesIcon className="w-3.5 h-3.5 text-purple-400" />
                <span>{t.cvModal?.atsNotice || "Formato Oxford de 1 página estricta, compatible con lectores ATS."}</span>
              </span>
              <span className="opacity-60 hidden sm:inline">
                PDF: {pdfFileName}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
