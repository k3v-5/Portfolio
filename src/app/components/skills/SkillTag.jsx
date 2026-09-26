"use client";
import React, { useState } from "react";
import { getSkillData } from "./skillData";

export default function SkillTag({ name }) {
  const [isHovered, setIsHovered] = useState(false);
  const skill = getSkillData(name);
  const IconComponent = skill.icon;

  return (
    <span
      data-skill-tag="true"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="skill-tag group inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-[13px] font-bold tracking-wide transition-all duration-300 select-none border"
      style={{
        backgroundColor: isHovered ? skill.hoverBg : "#ffffff",
        borderColor: isHovered ? skill.color : "#cbd5e1",
        color: isHovered ? "#0f172a" : "#1e293b",
        boxShadow: isHovered
          ? `0 8px 24px ${skill.hoverBg}, 0 0 18px ${skill.color}45`
          : "0 1px 3px rgba(0, 0, 0, 0.05)",
        transform: isHovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      <span
        className="skill-icon w-5 h-5 flex-shrink-0 flex items-center justify-center transition-all duration-300"
        style={{
          color: isHovered ? skill.color : "#0f172a",
          filter: isHovered
            ? `drop-shadow(0 0 8px ${skill.color}) drop-shadow(0 0 16px ${skill.color}cc) saturate(1.4) contrast(1.1)`
            : "drop-shadow(0 1px 2px rgba(15, 23, 42, 0.15))",
          transform: isHovered ? "scale(1.22)" : "scale(1)",
        }}
      >
        <IconComponent className="w-full h-full" />
      </span>
      <span>{name}</span>
    </span>
  );
}
