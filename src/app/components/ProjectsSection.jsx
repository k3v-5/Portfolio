"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  CodeBracketIcon,
  EyeIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { useLanguage } from "../i18n/LanguageContext";

// Datos independientes del idioma (título/descripción se resuelven vía
// translations.js por `id`). `tagIds` son claves estables — el filtro
// compara contra estas, nunca contra la etiqueta traducida en pantalla.
const ProjectsData = [
  {
    id: 0,
    image: "/images/projects/darx/principal.webp",
    tagIds: ["all", "gameDev", "ai"],
    gitUrl: null,
    previewUrl: null,
  },
  {
    id: 1,
    image: "/images/projects/dating-app/principal.jpg",
    tagIds: ["all", "web"],
    gitUrl: "https://github.com/k3v-5/CitasApp",
    previewUrl: "https://github.com/k3v-5/CitasApp",
  },
  {
    id: 2,
    image: "/images/projects/tesla-shop/principal.jpg",
    tagIds: ["all", "web"],
    gitUrl: null,
    previewUrl: null,
  },
  {
    id: 3,
    image: "/images/projects/crypto-tracker/principal.jpg",
    tagIds: ["all", "web"],
    gitUrl: "https://github.com/k3v-5/CryptoTracker",
    previewUrl: "https://cryptotrackerkg.netlify.app/",
  },
  {
    id: 4,
    image: "/images/projects/sentiment-analysis/principal.webp",
    tagIds: ["all", "dataScience"],
    gitUrl: "https://github.com/k3v-5/Sentiment-analysis",
    previewUrl: "https://github.com/k3v-5/Sentiment-analysis",
  },
  {
    id: 5,
    image: "/images/projects/lexikit/principal.webp",
    tagIds: ["all", "ai"],
    gitUrl: "https://github.com/k3v-5/LexiKit",
    previewUrl: null,
  },
];

const FILTER_IDS = ["all", "gameDev", "ai", "web", "dataScience"];

export default function ProjectsSection() {
  const { t } = useLanguage();
  const filters = t.projects.filters;
  const [tagId, setTagId] = useState("all");
  const cardsRef = useRef(null);
  const descRefs = useRef({});
  // Descripciones que efectivamente quedan cortadas por el clamp de 3
  // líneas (solo esas muestran el botón "Ver más" — así en desktop, donde
  // suelen entrar completas, no aparece un botón inútil).
  const [overflowingIds, setOverflowingIds] = useState({});
  const [expandedIds, setExpandedIds] = useState({});
  const [imgErrors, setImgErrors] = useState({});

  const filteredProjects = ProjectsData.filter((project) =>
    project.tagIds.includes(tagId),
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card-anim",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
      );
    }, cardsRef);
    return () => ctx.revert();
  }, [tagId]);

  // Detecta qué descripciones quedan realmente truncadas por el
  // line-clamp (varía según idioma, ancho de pantalla y filtro activo).
  useEffect(() => {
    const checkOverflow = () => {
      const next = {};
      Object.entries(descRefs.current).forEach(([id, el]) => {
        if (el) next[id] = el.scrollHeight > el.clientHeight + 1;
      });
      setOverflowingIds(next);
    };
    // Espera al próximo frame para medir después de que el DOM se pinte.
    const raf = requestAnimationFrame(checkOverflow);
    window.addEventListener("resize", checkOverflow);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", checkOverflow);
    };
  }, [tagId, t]);

  const toggleExpanded = (id) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="projects" className="flex-col w-full relative z-10">
      <div className="container mx-auto px-6 lg:px-12 mb-12 text-center">
        <p className="font-mono text-[10px] text-purple-600 font-bold mb-4 tracking-widest uppercase">
          {t.projects.module}
        </p>
        <h2 className="text-5xl lg:text-8xl font-black text-slate-900 uppercase italic tracking-tighter">
          {t.projects.heading}
        </h2>
      </div>

      {/* Menú de Filtros (Tabs) */}
      <div className="flex flex-wrap justify-center items-center gap-4 py-6 mb-8 w-full">
        {FILTER_IDS.map((id) => (
          <button
            key={id}
            onClick={() => setTagId(id)}
            className={`${
              tagId === id
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            } rounded-full px-6 py-2.5 text-xs font-bold font-mono uppercase tracking-widest transition-all shadow-sm`}
          >
            {filters[id]}
          </button>
        ))}
      </div>

      <div ref={cardsRef} className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project) => {
            const copy = t.projects.items[project.id];
            const hasImg = project.image && !imgErrors[project.id];
            return (
              <div
                key={project.id}
                className="project-card-anim bg-white/95 backdrop-blur-[20px] border border-black/5 p-8 md:p-10 rounded-[3rem] shadow-2xl block"
              >
                <div className={`${project.id === 0 ? "aspect-[2816/1536]" : "aspect-video"} rounded-2xl overflow-hidden mb-8 relative group border border-slate-100 bg-slate-950 flex items-center justify-center`}>
                  {hasImg ? (
                    <img
                      src={project.image}
                      alt={copy?.title || "Project"}
                      loading="lazy"
                      decoding="async"
                      onError={() =>
                        setImgErrors((prev) => ({ ...prev, [project.id]: true }))
                      }
                      className={`w-full h-full ${project.id === 0 ? "object-contain" : "object-cover"} transition-transform duration-1000 group-hover:scale-105`}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 p-6 text-center">
                      <SparklesIcon className="h-14 w-14 text-purple-300 mb-2" />
                      <span className="font-mono text-[9px] text-purple-400 uppercase tracking-widest">
                        {project.id === 0 ? "DARX // GAME DEV PREVIEW" : "PREVIEW SLOT"}
                      </span>
                    </div>
                  )}
                  {/* OVERLAY CON ICONOS (solo si hay algún link disponible) */}
                  {(project.gitUrl || project.previewUrl) && (
                    <div className="items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                      {project.gitUrl && (
                        <Link
                          href={project.gitUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-14 w-14 mr-4 border-2 flex items-center justify-center relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                        >
                          <CodeBracketIcon className="h-8 w-8 text-[#ADB7BE] cursor-pointer group-hover/link:text-white" />
                        </Link>
                      )}
                      {project.previewUrl && (
                        <Link
                          href={project.previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-14 w-14 border-2 flex items-center justify-center relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                        >
                          <EyeIcon className="h-8 w-8 text-[#ADB7BE] cursor-pointer group-hover/link:text-white" />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <h3 className="text-3xl font-black text-slate-900 uppercase italic">
                    {copy?.title}
                  </h3>
                  {copy?.badge && (
                    <span className="px-3 py-1 rounded-full font-mono text-[9px] font-bold uppercase tracking-widest bg-purple-100 text-purple-700 border border-purple-200">
                      {copy.badge}
                    </span>
                  )}
                </div>
                <p
                  ref={(el) => {
                    descRefs.current[project.id] = el;
                  }}
                  className={`text-slate-500 mt-4 text-sm leading-relaxed ${
                    expandedIds[project.id] ? "" : "line-clamp-3"
                  }`}
                >
                  {copy?.description}
                </p>
                {(overflowingIds[project.id] || expandedIds[project.id]) && (
                  <button
                    onClick={() => toggleExpanded(project.id)}
                    className="text-purple-500 hover:text-purple-600 font-mono text-[10px] font-bold uppercase tracking-widest mt-2 transition-colors"
                  >
                    {expandedIds[project.id]
                      ? t.projects.showLess
                      : t.projects.readMore}
                  </button>
                )}
                <p className="text-slate-400 font-mono text-[9px] mt-6 uppercase tracking-widest">
                  {project.tagIds.map((id) => filters[id]).join(" • ")}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
