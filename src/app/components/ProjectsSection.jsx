"use client";
import React, { useState, useRef, useCallback } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useProjectsAnimation } from "../hooks/useProjectsAnimation";
import { useTextOverflow } from "../hooks/useTextOverflow";
import ProjectFilters from "./projects/ProjectFilters";
import ProjectCardItem from "./projects/ProjectCardItem";
import { PROJECT_FILTER_IDS, getProjectsByTag } from "../data/projectsData";

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

  const filteredProjects = getProjectsByTag(tagId);

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
        <h2 className="text-5xl lg:text-8xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">
          {t.projects.heading}
        </h2>
      </div>

      <ProjectFilters
        filterIds={PROJECT_FILTER_IDS}
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
