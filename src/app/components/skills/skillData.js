import React from "react";

/**
 * Official brand colors and normalized SVG icons for each skill.
 */
export const SKILL_ICONS = {
  python: {
    color: "#3776AB",
    hoverBg: "rgba(55, 118, 171, 0.08)",
    hoverBorder: "rgba(55, 118, 171, 0.35)",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.752h5.8v.825H3.852S0 5.766 0 11.905c0 6.14 3.364 5.92 3.364 5.92h2.008v-2.822s-.11-3.364 3.308-3.364h5.686s3.195.052 3.195-3.138V3.138S18.02 0 11.914 0zm-1.74 1.706a1.05 1.05 0 1 1 0 2.102 1.05 1.05 0 0 1 0-2.102z" />
        <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.752h-5.8v-.825h8.154s3.852.467 3.852-5.672c0-6.14-3.364-5.92-3.364-5.92h-2.008v2.822s.11 3.364-3.308 3.364H9.638s-3.195-.052-3.195 3.138v5.367S5.98 24 12.086 24zm1.74-1.706a1.05 1.05 0 1 1 0-2.102 1.05 1.05 0 0 1 0 2.102z" />
      </svg>
    ),
  },
  react: {
    color: "#61DAFB",
    hoverBg: "rgba(97, 218, 251, 0.08)",
    hoverBorder: "rgba(97, 218, 251, 0.4)",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  nextjs: {
    color: "#000000",
    hoverBg: "rgba(0, 0, 0, 0.08)",
    hoverBorder: "#000000",
    icon: (props) => (
      <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="90" cy="90" r="90" fill="#000000" />
        <path
          d="M149.5 157.5L69.1 54H54V126H66.1V69.4L140 164.8C143.3 162.6 146.5 160.2 149.5 157.5Z"
          fill="#ffffff"
        />
        <rect x="115" y="54" width="12" height="72" fill="#ffffff" />
      </svg>
    ),
  },
  typescript: {
    color: "#3178C6",
    hoverBg: "rgba(49, 120, 198, 0.08)",
    hoverBorder: "rgba(49, 120, 198, 0.4)",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="3" strokeWidth="1.8" />
        <path d="M5 8h6M8 8v9M13 14.8c.7.8 1.6 1.2 2.7 1.2 1.5 0 2.3-.7 2.3-1.7 0-2.2-4-1.4-4-3.5 0-1.2 1-1.8 2.2-1.8 1.1 0 1.9.4 2.5 1.1" strokeWidth="1.8" />
      </svg>
    ),
  },
  angular: {
    color: "#DD0031",
    hoverBg: "rgba(221, 0, 49, 0.08)",
    hoverBorder: "rgba(221, 0, 49, 0.4)",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2L2.5 5.5l1.5 12.5L12 22l8-4 1.5-12.5L12 2zm0 2.5l6 11.5h-2.1l-1.3-3.2H9.4L8.1 16H6l6-11.5zm-1.8 6.5h3.6L12 7.7 10.2 11z" />
      </svg>
    ),
  },
  csharp: {
    color: "#512BD4",
    hoverBg: "rgba(81, 43, 212, 0.08)",
    hoverBorder: "rgba(81, 43, 212, 0.4)",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 1.5L2.5 7v10L12 22.5 21.5 17V7L12 1.5zm0 2.4l7 4.1v8l-7 4.1-7-4.1v-8l7-4.1z" />
        <path d="M11 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 3.8-2.2l-1.6-.9a2.7 2.7 0 1 1 0-3.8l1.6-.9A4.5 4.5 0 0 0 11 7.5zm5.5 1.5h-1v2h-1v1h1v1h-1v1h1v2h1v-2h1v2h1v-2h1v-1h-1v-1h1v-1h-1v-2h-1v2h-1v-2zm0 3h1v1h-1v-1z" />
      </svg>
    ),
  },
  dotnet: {
    color: "#512BD4",
    hoverBg: "rgba(81, 43, 212, 0.08)",
    hoverBorder: "rgba(81, 43, 212, 0.4)",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...props}>
        <circle cx="12" cy="12" r="9.5" />
        <path d="M6.5 15V9h2l3 4.5V9h2v6h-2l-3-4.5V15h-2zm9.5-1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  sqlserver: {
    color: "#CC292B",
    hoverBg: "rgba(204, 41, 43, 0.08)",
    hoverBorder: "rgba(204, 41, 43, 0.4)",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...props}>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v5c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 10v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" />
        <path d="M4 15v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" />
      </svg>
    ),
  },
  blender: {
    color: "#F5792A",
    hoverBg: "rgba(245, 121, 42, 0.08)",
    hoverBorder: "rgba(245, 121, 42, 0.4)",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...props}>
        <circle cx="12.5" cy="13.5" r="4.5" />
        <circle cx="12.5" cy="13.5" r="2" fill="currentColor" />
        <path d="M12.5 9L6 4.5M10 10.5L3 11M11 15.5L4 18M12.5 18l.5 4" />
      </svg>
    ),
  },
  aftereffects: {
    color: "#9999FF",
    hoverBg: "rgba(153, 153, 255, 0.12)",
    hoverBorder: "rgba(153, 153, 255, 0.45)",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8.5 7L5 17h2l.8-2.5h3.4l.8 2.5h2L10.5 7H8.5zm.3 6l1.2-4 1.2 4H8.8zm8.2-.5c-.2-.7-.7-1.2-1.5-1.2-1.1 0-1.8.8-1.8 2.2 0 1.4.7 2.2 1.8 2.2.8 0 1.3-.5 1.5-1.1h1.5c-.3 1.5-1.4 2.3-3 2.3-2.1 0-3.3-1.4-3.3-3.4 0-2 1.2-3.4 3.3-3.4 1.7 0 2.8.9 3 2.4H17z" />
      </svg>
    ),
  },
  gamedev: {
    color: "#E11D48",
    hoverBg: "rgba(225, 29, 72, 0.08)",
    hoverBorder: "rgba(225, 29, 72, 0.4)",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="6" width="20" height="12" rx="6" />
        <path d="M6 12h4M8 10v4M16 11h.01M18 13h.01" />
      </svg>
    ),
  },
  linux: {
    color: "#FCC624",
    hoverBg: "rgba(252, 198, 36, 0.1)",
    hoverBorder: "rgba(252, 198, 36, 0.5)",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2c-2.8 0-4 2.2-4 4.5 0 .8.2 1.8.5 2.5C7.2 9.5 6 11.2 6 13.5c0 2 1 3.5 2 4.5-.5 1.2-1.5 2-3 2.5 0 0 2 .5 4 0 1 .5 2 .5 3 .5s2 0 3-.5c2 .5 4 0 4 0-1.5-.5-2.5-1.3-3-2.5 1-1 2-2.5 2-4.5 0-2.3-1.2-4-2.5-4.5.3-.7.5-1.7.5-2.5C16 4.2 14.8 2 12 2zm-1.5 4a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6zm3 0a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6zm-1.5 1.8c.8 0 1.5.5 1.5 1.2 0 .5-.7 1-1.5 1s-1.5-.5-1.5-1c0-.7.7-1.2 1.5-1.2z" />
      </svg>
    ),
  },
  mcp: {
    color: "#8B5CF6",
    hoverBg: "rgba(139, 92, 246, 0.08)",
    hoverBorder: "rgba(139, 92, 246, 0.4)",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...props}>
        <circle cx="6" cy="6" r="3" fill="currentColor" fillOpacity="0.2" />
        <circle cx="18" cy="6" r="3" fill="currentColor" fillOpacity="0.2" />
        <circle cx="12" cy="18" r="3" fill="currentColor" fillOpacity="0.2" />
        <path d="M8.5 7.5l7 7M15.5 7.5l-7 7M9 6h6M7.5 8.5l3 7M16.5 8.5l-3 7" />
      </svg>
    ),
  },
  n8n: {
    color: "#EA4B71",
    hoverBg: "rgba(234, 75, 113, 0.08)",
    hoverBorder: "rgba(234, 75, 113, 0.4)",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" {...props}>
        <circle cx="5" cy="12" r="3" fill="currentColor" fillOpacity="0.25" />
        <circle cx="12" cy="7" r="3" fill="currentColor" fillOpacity="0.25" />
        <circle cx="19" cy="12" r="3" fill="currentColor" fillOpacity="0.25" />
        <path d="M7.7 10.7l2.6-2.4M13.7 8.3l2.6 2.4M8 12h8" />
      </svg>
    ),
  },
  datamining: {
    color: "#10B981",
    hoverBg: "rgba(16, 185, 129, 0.08)",
    hoverBorder: "rgba(16, 185, 129, 0.4)",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M14 2l7 7-3 3-7-7 3-3z" />
        <path d="M11 5L2 14l3 3 9-9" />
        <path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" />
        <path d="M9 18h6" />
      </svg>
    ),
  },
  orange: {
    color: "#FF7F00",
    hoverBg: "rgba(255, 127, 0, 0.08)",
    hoverBorder: "rgba(255, 127, 0, 0.4)",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...props}>
        <circle cx="12" cy="13" r="8" />
        <path d="M12 5c0-2 2-3 4-3-1 2-2 3-4 3z" fill="currentColor" />
        <path d="M12 9v8M8 11l8 4M8 15l8-4" />
      </svg>
    ),
  },
  optimization: {
    color: "#06B6D4",
    hoverBg: "rgba(6, 182, 212, 0.08)",
    hoverBorder: "rgba(6, 182, 212, 0.4)",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...props}>
        <path d="M3 19c3-1 5-8 9-8s5 5 9 5" />
        <circle cx="12" cy="11" r="2" fill="currentColor" />
        <circle cx="21" cy="16" r="2" fill="currentColor" />
        <path d="M12 3v4M10 5h4" />
      </svg>
    ),
  },
  powerbi: {
    color: "#F2C811",
    hoverBg: "rgba(242, 200, 17, 0.1)",
    hoverBorder: "rgba(242, 200, 17, 0.5)",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <rect x="3" y="12" width="4" height="9" rx="1.5" />
        <rect x="10" y="7" width="4" height="14" rx="1.5" />
        <rect x="17" y="3" width="4" height="18" rx="1.5" />
      </svg>
    ),
  },
  tableau: {
    color: "#E97627",
    hoverBg: "rgba(233, 118, 39, 0.08)",
    hoverBorder: "rgba(233, 118, 39, 0.4)",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M11 2h2v5h-2zM11 17h2v5h-2zM2 11h5v2H2zM17 11h5v2h-5z" />
        <path d="M10.5 8h3v8h-3zM8 10.5h8v3H8z" opacity="0.8" />
        <path d="M5.5 5.5h2v2h-2zM16.5 5.5h2v2h-2zM5.5 16.5h2v2h-2zM16.5 16.5h2v2h-2z" />
      </svg>
    ),
  },
  restapi: {
    color: "#059669",
    hoverBg: "rgba(5, 150, 105, 0.08)",
    hoverBorder: "rgba(5, 150, 105, 0.4)",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 14l4-4 4 4" />
        <path d="M8 10v9" />
        <path d="M20 10l-4 4-4-4" />
        <path d="M16 14V5" />
      </svg>
    ),
  },
};

/**
 * Normalizes skill name to dictionary key across EN and ES translations.
 */
export function getSkillData(skillName = "") {
  const normalized = skillName.toLowerCase().trim();

  if (normalized.includes("python") && !normalized.includes("blender")) {
    return SKILL_ICONS.python;
  }
  if (normalized.includes("react")) {
    return SKILL_ICONS.react;
  }
  if (normalized.includes("next")) {
    return SKILL_ICONS.nextjs;
  }
  if (normalized.includes("typescript")) {
    return SKILL_ICONS.typescript;
  }
  if (normalized.includes("angular")) {
    return SKILL_ICONS.angular;
  }
  if (normalized === "c#" || normalized.includes("c#")) {
    return SKILL_ICONS.csharp;
  }
  if (normalized.includes(".net")) {
    return SKILL_ICONS.dotnet;
  }
  if (normalized.includes("sql")) {
    return SKILL_ICONS.sqlserver;
  }
  if (normalized.includes("blender")) {
    return SKILL_ICONS.blender;
  }
  if (normalized.includes("after effects")) {
    return SKILL_ICONS.aftereffects;
  }
  if (normalized.includes("game dev") || normalized.includes("videojuegos")) {
    return SKILL_ICONS.gamedev;
  }
  if (normalized.includes("linux")) {
    return SKILL_ICONS.linux;
  }
  if (normalized.includes("mcp") || normalized.includes("model context")) {
    return SKILL_ICONS.mcp;
  }
  if (normalized.includes("n8n")) {
    return SKILL_ICONS.n8n;
  }
  if (normalized.includes("mining") || normalized.includes("miner")) {
    return SKILL_ICONS.datamining;
  }
  if (normalized.includes("orange")) {
    return SKILL_ICONS.orange;
  }
  if (normalized.includes("optimi") || normalized.includes("inteligente")) {
    return SKILL_ICONS.optimization;
  }
  if (normalized.includes("powerbi") || normalized.includes("power bi")) {
    return SKILL_ICONS.powerbi;
  }
  if (normalized.includes("tableau")) {
    return SKILL_ICONS.tableau;
  }
  if (normalized.includes("api") || normalized.includes("rest")) {
    return SKILL_ICONS.restapi;
  }

  // Fallback
  return {
    color: "#9333ea",
    hoverBg: "rgba(147, 51, 234, 0.08)",
    hoverBorder: "rgba(147, 51, 234, 0.4)",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  };
}
