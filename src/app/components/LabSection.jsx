"use client";
import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import LabCard from "./lab/LabCard";

export default function LabSection() {
  const { t } = useLanguage();
  const lab = t.lab;

  return (
    <section id="lab" className="flex-col w-full relative z-10">
      <div className="container mx-auto px-6 lg:px-12 mb-12 text-center">
        <p className="font-mono text-[10px] text-purple-600 font-bold mb-4 tracking-widest uppercase">
          {lab.module}
        </p>
        <h2 className="text-5xl lg:text-8xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">
          {lab.heading}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
          {lab.subtitle}
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lab.items.map((item) => (
            <LabCard
              key={item.id}
              item={item}
              innovationsLabel={lab.keyInnovations}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
