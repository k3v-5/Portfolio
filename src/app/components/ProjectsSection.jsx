"use client";
import React, { useState, useRef, useCallback } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useProjectsAnimation } from "../hooks/useProjectsAnimation";
import { useTextOverflow } from "../hooks/useTextOverflow";
import ProjectFilters from "./projects/ProjectFilters";
import ProjectCardItem from "./projects/ProjectCardItem";

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
    fit: "contain",
  },
  {
    id: 6,
    image: "/images/projects/n8effect/principal.webp",
    tagIds: ["all", "audioDev", "gameDev"],
    gitUrl: null,
    previewUrl: null,
    fit: "contain",
  },
  {
    id: 5,
    image: "/images/projects/lexikit/principal.webp",
    tagIds: ["all", "ai"],
    gitUrl: "https://github.com/k3v-5/LexiKit",
    previewUrl: null,
  },
  {
    id: 7,
    image: "/images/projects/ableton-engine/principal.webp",
    tagIds: ["all", "ai", "audioDev"],
    gitUrl: "https://github.com/k3v-5/AbletonEngine",
    previewUrl: null,
    fit: "contain",
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
];

const FILTER_IDS = ["all", "gameDev", "ai", "web", "dataScience", "audioDev"];

export default function ProjectsSection() {
  const { t } = useLanguage();
  const filters = t.projects.filters;
  const [tagId, setTagId] = useState("all");
  const [expandedIds, setExpandedIds] = useState({});

  const cardsRef = useRef(null);
  const descRefs = useRef({});

  // GSAP card stagger on filter change
  useProjectsAnimation(cardsRef, tagId);

  // Line-clamp text overflow detection
  const overflowingIds = useTextOverflow(descRefs, [tagId, t]);

  const filteredProjects = ProjectsData.filter((project) =>
    project.tagIds.includes(tagId),
  );

  const toggleExpanded = useCallback((id) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const registerDescRef = useCallback((id, el) => {
    descRefs.current[id] = el;
  }, []);

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

      <ProjectFilters
        filterIds={FILTER_IDS}
        activeTagId={tagId}
        onSelectTag={setTagId}
        filters={filters}
      />

      <div ref={cardsRef} className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <ProjectCardItem
              key={project.id}
              project={project}
              copy={t.projects.items[project.id]}
              filters={filters}
              isExpanded={!!expandedIds[project.id]}
              isOverflowing={!!overflowingIds[project.id]}
              onToggleExpand={toggleExpanded}
              onRegisterDescRef={registerDescRef}
              readMoreLabel={t.projects.readMore}
              showLessLabel={t.projects.showLess}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
