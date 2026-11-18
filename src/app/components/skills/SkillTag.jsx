"use client";
import React, { useState } from "react";
import { getSkillData } from "./skillData";
import { useTheme } from "../../theme/ThemeContext";

/**
 * Interactive technology pill badge with full-color brand emblem inside
 * a glassmorphic icon well harmonized with the portfolio's purple theme.
 *
 * @param {{ name: string }} props
 */
export default function SkillTag({ name }) {
  const [isHovered, setIsHovered] = useState(false);
  const { isDark } = useTheme();
  const skill = getSkillData(name);
  const IconComponent = skill.icon;

  const chipBg = isHovered
    ? isDark
      ? "rgba(88, 28, 135, 0.28)"
      : "rgba(243, 232, 255, 0.85)"
    : isDark
      ? "rgba(15, 23, 42, 0.72)"
      : "rgba(255, 255, 255, 0.92)";

  const chipBorder = isHovered
    ? isDark
      ? "rgba(192, 132, 252, 0.7)"
      : "rgba(147, 51, 234, 0.65)"
    : isDark
      ? "rgba(168, 85, 247, 0.16)"
      : "rgba(203, 213, 225, 0.9)";

  const chipShadow = isHovered
    ? `0 10px 26px -6px rgba(147, 51, 234, 0.35), 0 0 14px ${skill.color}33`
    : isDark
      ? "0 2px 10px rgba(0, 0, 0, 0.35)"
      : "0 2px 6px rgba(15, 23, 42, 0.04)";

  return (
    <span
      data-skill-tag="true"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="skill-tag group inline-flex items-center gap-2.5 pl-1.5 pr-3.5 py-1.5 rounded-2xl text-xs sm:text-[13px] font-bold tracking-tight transition-all duration-300 select-none border backdrop-blur-md"
      style={{
        backgroundColor: chipBg,
        borderColor: chipBorder,
        color: isHovered
          ? isDark
            ? "#ffffff"
            : "#3b0764"
          : isDark
            ? "#e2e8f0"
            : "#1e293b",
        boxShadow: chipShadow,
        transform: isHovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      <span
        className="skill-icon w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex-shrink-0 flex items-center justify-center p-1.5 transition-all duration-300 border"
        style={{
          backgroundColor: isDark ? `${skill.color}22` : `${skill.color}14`,
          borderColor: isHovered ? `${skill.color}80` : `${skill.color}30`,
          filter: isHovered
            ? `drop-shadow(0 0 8px ${skill.color}66)`
            : "none",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
        }}
      >
        <IconComponent className="w-full h-full" isDark={isDark} />
      </span>
      <span>{name}</span>
    </span>
  );
}
