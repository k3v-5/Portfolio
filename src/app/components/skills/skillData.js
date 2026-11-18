import React from "react";

/**
 * Official multi-color brand logos, accent colors, and adaptive container styles
 * for each technology in the portfolio stack.
 */
export const SKILL_ICONS = {
  typescript: {
    color: "#3178C6",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect x="2.5" y="8" width="19.5" height="14" rx="1.5" fill="#FFFFFF" />
        <path
          fill="#3178C6"
          d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
        />
      </svg>
    ),
  },
  nodejs: {
    color: "#5FA04E",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#5FA04E"
          d="M11.998 1.5a1.5 1.5 0 0 0-.75.2l-8.1 4.68a1.5 1.5 0 0 0-.75 1.3v9.36a1.5 1.5 0 0 0 .75 1.3l8.1 4.68a1.5 1.5 0 0 0 1.5 0l8.1-4.68a1.5 1.5 0 0 0 .75-1.3V7.68a1.5 1.5 0 0 0-.75-1.3l-8.1-4.68a1.5 1.5 0 0 0-.75-.2z"
        />
        <path
          fill="#FFFFFF"
          d="M10.4 8.2v5.4c0 .9-.4 1.3-1.2 1.3-.5 0-.8-.1-1.2-.3l-.3 1.4c.5.3 1.1.4 1.7.4 1.8 0 2.8-1 2.8-2.8V8.2h-1.8zm5.3 0c-1.5 0-2.5.8-2.5 2.1 0 1.3.9 1.9 2.3 2.3.9.3 1.3.5 1.3 1 0 .6-.5.9-1.4.9-.8 0-1.5-.2-2-.5l-.4 1.4c.6.3 1.4.6 2.4.6 1.8 0 2.9-.9 2.9-2.3 0-1.2-.7-1.9-2.3-2.4-.9-.3-1.3-.5-1.3-1 0-.5.4-.8 1.1-.8.7 0 1.3.2 1.7.4l.4-1.4c-.5-.2-1.2-.3-2.2-.3z"
        />
      </svg>
    ),
  },
  python: {
    color: "#3776AB",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#3776AB"
          d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.752h5.8v.825H3.852S0 5.766 0 11.905c0 6.14 3.364 5.92 3.364 5.92h2.008v-2.822s-.11-3.364 3.308-3.364h5.686s3.195.052 3.195-3.138V3.138S18.02 0 11.914 0zm-1.74 1.706a1.05 1.05 0 1 1 0 2.102 1.05 1.05 0 0 1 0-2.102z"
        />
        <path
          fill="#FFD43B"
          d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.752h-5.8v-.825h8.154s3.852.467 3.852-5.672c0-6.14-3.364-5.92-3.364-5.92h-2.008v2.822s.11 3.364-3.308 3.364H9.638s-3.195-.052-3.195 3.138v5.367S5.98 24 12.086 24zm1.74-1.706a1.05 1.05 0 1 1 0-2.102 1.05 1.05 0 0 1 0 2.102z"
        />
      </svg>
    ),
  },
  csharp: {
    color: "#7C3AED",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <defs>
          <linearGradient id="csharpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9B4993" />
            <stop offset="100%" stopColor="#512BD4" />
          </linearGradient>
        </defs>
        <path
          fill="url(#csharpGrad)"
          d="M12 1.5l8.8 5.1v10.2L12 22l-8.8-5.2V6.6L12 1.5z"
        />
        <path
          fill="#FFFFFF"
          d="M9.6 8.2a3.9 3.9 0 1 0 0 7.6 3.7 3.7 0 0 0 3.2-1.8l-1.5-.9a2 2 0 0 1-1.7.9 2.1 2.1 0 0 1 0-4.1c.7 0 1.4.4 1.7.9l1.5-.9A3.7 3.7 0 0 0 9.6 8.2zm4.8 1.5v1.3h-1.1v1h1.1v1.2h-1.1v1h1.1v1.3h1v-1.3h1.2v1.3h1v-1.3h1v-1h-1v-1.2h1v-1h-1V9.7h-1v1.3h-1.2V9.7h-1zm1 2.3h1.2v1.2h-1.2V12z"
        />
      </svg>
    ),
  },
  dotnet: {
    color: "#512BD4",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect width="24" height="24" rx="5" fill="#512BD4" />
        <circle cx="5.2" cy="15.2" r="1.15" fill="#FFFFFF" />
        <path
          fill="#FFFFFF"
          d="M7.6 16.3V8.2h1.4l2.9 5V8.2h1.3v8.1h-1.4L9 11.2v5.1H7.6zm6.9 0V8.2h3.9v1.2h-2.5v2.1h2.2v1.2h-2.2V15h2.6v1.3h-4zm4.8 0V9.4h-1.6V8.2h4.6v1.2h-1.6v6.9h-1.4z"
        />
      </svg>
    ),
  },
  webforms: {
    color: "#6366F1",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect x="2" y="3" width="20" height="18" rx="3" fill="#4F46E5" />
        <path fill="#C7D2FE" d="M2 7h20v1.5H2z" />
        <circle cx="5.2" cy="5.2" r="0.8" fill="#FFFFFF" />
        <circle cx="7.8" cy="5.2" r="0.8" fill="#FFFFFF" />
        <path
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.5 11.5L6.8 14.2l2.7 2.7m5-5.4l2.7 2.7-2.7 2.7m-1.7-6l-1.6 6.7"
        />
      </svg>
    ),
  },
  angular: {
    color: "#DD0031",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path fill="#DD0031" d="M12 1.8L2.6 5.1 4 17.4 12 22l8-4.6 1.4-12.3L12 1.8z" />
        <path fill="#C3002F" d="M12 1.8v20.2l8-4.6 1.4-12.3L12 1.8z" />
        <path
          fill="#FFFFFF"
          d="M12 4.6L6.3 17.3h2.1l1.1-2.9h5l1.1 2.9h2.1L12 4.6zm1.7 8h-3.4L12 8.4l1.7 4.2z"
        />
      </svg>
    ),
  },
  vue: {
    color: "#41B883",
    icon: ({ className = "", isDark = false }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path fill="#41B883" d="M1.5 3h4.2L12 13.8 18.3 3h4.2L12 21.2 1.5 3z" />
        <path
          fill={isDark ? "#E2E8F0" : "#35495E"}
          d="M5.7 3h3.5L12 7.8 14.8 3h3.5L12 13.8 5.7 3z"
        />
      </svg>
    ),
  },
  react: {
    color: "#00D8FF",
    icon: ({ className = "", isDark = false }) => {
      const strokeColor = isDark ? "#61DAFB" : "#0284C7";
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="2.1" fill={strokeColor} />
          <g fill="none" stroke={strokeColor} strokeWidth="1.45">
            <ellipse cx="12" cy="12" rx="10" ry="3.9" />
            <ellipse cx="12" cy="12" rx="10" ry="3.9" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="3.9" transform="rotate(120 12 12)" />
          </g>
        </svg>
      );
    },
  },
  nextjs: {
    color: "#94A3B8",
    icon: ({ className = "", isDark = false }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle
          cx="12"
          cy="12"
          r="10.5"
          fill="#090D16"
          stroke={isDark ? "#475569" : "#0F172A"}
          strokeWidth="1.2"
        />
        <path
          fill="#FFFFFF"
          d="M17.2 18.8L9.6 8.2H8v7.6h1.3v-5.7l6.8 9.6c.4-.3.8-.6 1.1-.9z"
        />
        <rect x="14.7" y="8.2" width="1.3" height="7.6" fill="#FFFFFF" />
      </svg>
    ),
  },
  sqlserver: {
    color: "#DC2626",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <ellipse cx="12" cy="5.5" rx="8.5" ry="3.2" fill="#EF4444" />
        <path
          fill="#B91C1C"
          d="M3.5 5.5v4.5c0 1.77 3.8 3.2 8.5 3.2s8.5-1.43 8.5-3.2V5.5c0 1.77-3.8 3.2-8.5 3.2s-8.5-1.43-8.5-3.2z"
        />
        <path
          fill="#991B1B"
          d="M3.5 10.5v4.5c0 1.77 3.8 3.2 8.5 3.2s8.5-1.43 8.5-3.2v-4.5c0 1.77-3.8 3.2-8.5 3.2s-8.5-1.43-8.5-3.2z"
        />
        <path
          fill="#7F1D1D"
          d="M3.5 15.5v3.5c0 1.77 3.8 3.2 8.5 3.2s8.5-1.43 8.5-3.2v-3.5c0 1.77-3.8 3.2-8.5 3.2s-8.5-1.43-8.5-3.2z"
        />
        <ellipse cx="12" cy="5.5" rx="5.2" ry="1.5" fill="#FCA5A5" opacity="0.45" />
      </svg>
    ),
  },
  erp: {
    color: "#9333EA",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path fill="#C084FC" d="M12 2L4 6.5 12 11l8-4.5L12 2z" />
        <path fill="#9333EA" d="M4 6.5v9L12 20v-9L4 6.5z" />
        <path fill="#6B21A8" d="M20 6.5v9L12 20v-9l8-4.5z" />
        <circle cx="12" cy="11" r="1.8" fill="#FFFFFF" />
      </svg>
    ),
  },
  edisftp: {
    color: "#10B981",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect x="2.5" y="3" width="19" height="18" rx="4" fill="#059669" />
        <path
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 9.5h8.5m-2.5-2.5l2.5 2.5-2.5 2.5M17 14.5H8.5m2.5 2.5l-2.5-2.5 2.5-2.5"
        />
      </svg>
    ),
  },
  restapi: {
    color: "#0EA5E9",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="4" fill="#0284C7" />
        <circle cx="7" cy="12" r="1.8" fill="#FFFFFF" />
        <circle cx="17" cy="8.5" r="1.6" fill="#BAE6FD" />
        <circle cx="17" cy="15.5" r="1.6" fill="#BAE6FD" />
        <path
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeLinecap="round"
          d="M8.8 11.4L15.4 9M8.8 12.6L15.4 15"
        />
      </svg>
    ),
  },
  linux: {
    color: "#F59E0B",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#1E293B"
          d="M12 2c-2.6 0-3.8 1.9-3.8 4.2 0 .9.2 1.8.4 2.5C7 9.6 5.6 11.5 5.6 14c0 2.1.9 3.8 2.1 4.9h8.6c1.2-1.1 2.1-2.8 2.1-4.9 0-2.5-1.4-4.4-3-5.3.2-.7.4-1.6.4-2.5C15.8 3.9 14.6 2 12 2z"
        />
        <ellipse cx="12" cy="13.8" rx="3.4" ry="4.4" fill="#F8FAFC" />
        <circle cx="10.6" cy="5.6" r="0.85" fill="#FFFFFF" />
        <circle cx="13.4" cy="5.6" r="0.85" fill="#FFFFFF" />
        <circle cx="10.7" cy="5.6" r="0.38" fill="#0F172A" />
        <circle cx="13.3" cy="5.6" r="0.38" fill="#0F172A" />
        <path fill="#F59E0B" d="M10.2 7.4c1.1-.5 2.5-.5 3.6 0-.7 1.1-2.9 1.1-3.6 0z" />
        <path
          fill="#F59E0B"
          d="M6.2 19.6c0-.8.9-1.4 2.2-1.4s2 .7 2 1.4c0 .7-.8 1.1-2.1 1.1s-2.1-.4-2.1-1.1zm7.4 0c0-.7.7-1.4 2-1.4s2.2.6 2.2 1.4-.9 1.1-2.1 1.1-2.1-.4-2.1-1.1z"
        />
      </svg>
    ),
  },
  iis: {
    color: "#0078D4",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path fill="#0078D4" d="M2 2h9.3v9.3H2V2z" />
        <path fill="#2B88D8" d="M12.7 2H22v9.3h-9.3V2z" />
        <path fill="#005A9E" d="M2 12.7h9.3V22H2v-9.3z" />
        <path fill="#106EBE" d="M12.7 12.7H22V22h-9.3v-9.3z" />
      </svg>
    ),
  },
  docker: {
    color: "#2496ED",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#2496ED"
          d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.714h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.929 0h2.12a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m21.642-.288c-.378-.258-1.503-.352-2.31-.082-.14-.49-.413-.91-.796-1.229-.53-.44-1.23-.623-1.97-.502-.33.053-.65.176-.94.36-.18-.46-.49-.85-.89-1.12-.55-.38-1.25-.51-1.96-.36l-.08.02c-.08-.02-.17-.03-.25-.03h-2.48a.25.25 0 00-.25.25v2.85H1.47a.47.47 0 00-.47.47c0 2.22.79 4.3 2.22 5.86C5.07 22.06 7.6 23 10.45 23c6.91 0 11.83-4.4 12.38-10.87.53-.16 1.02-.45 1.4-.87.41-.46.59-1.05.51-1.63a1.9 1.9 0 00-.89-1.07"
        />
      </svg>
    ),
  },
  nginx: {
    color: "#009639",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path fill="#009639" d="M12 1.5L2.5 7v10L12 22.5 21.5 17V7L12 1.5z" />
        <path
          fill="#FFFFFF"
          d="M8 16.5V7.5h1.9l4.2 5.9V7.5H16v9h-1.9l-4.2-5.9v5.9H8z"
        />
      </svg>
    ),
  },
  cicd: {
    color: "#06B6D4",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <defs>
          <linearGradient id="cicdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <path
          fill="none"
          stroke="url(#cicdGrad)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 12a8 8 0 0 1 13.7-5.6L20 8.5M20 4v4.5h-4.5M20 12a8 8 0 0 1-13.7 5.6L4 15.5M4 20v-4.5h4.5"
        />
        <circle cx="12" cy="12" r="2.6" fill="#06B6D4" />
      </svg>
    ),
  },
  git: {
    color: "#F05032",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#F05032"
          d="M21.62 10.44L13.56 2.38a2.53 2.53 0 00-3.58 0L7.61 4.75l2.25 2.25a2.12 2.12 0 012.7 2.7l2.17 2.17a2.12 2.12 0 11-1.28 1.28l-2.02-2.02v4.54a2.12 2.12 0 11-1.81 0V9.45a2.12 2.12 0 01-1.12-2.77L6.23 4.41 2.38 8.26a2.53 2.53 0 000 3.58l8.06 8.06a2.53 2.53 0 003.58 0l7.6-7.6a2.53 2.53 0 000-3.87z"
        />
      </svg>
    ),
  },
  mcp: {
    color: "#8B5CF6",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#7C3AED" />
        <path
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 16.5v-6a2.5 2.5 0 0 1 5 0v6m0-6a2.5 2.5 0 0 1 5 0v6M7 16.5h10"
        />
        <circle cx="7" cy="10.5" r="1.2" fill="#E9D5FF" />
        <circle cx="17" cy="10.5" r="1.2" fill="#E9D5FF" />
      </svg>
    ),
  },
  llm: {
    color: "#A855F7",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <defs>
          <linearGradient id="llmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        <path
          fill="url(#llmGrad)"
          d="M11 2l2.1 5.9L19 10l-5.9 2.1L11 18l-2.1-5.9L3 10l5.9-2.1L11 2z"
        />
        <path
          fill="#C084FC"
          d="M18.5 14l1 2.7 2.7 1-2.7 1-1 2.7-1-2.7-2.7-1 2.7-1 1-2.7z"
        />
      </svg>
    ),
  },
  agents: {
    color: "#EC4899",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect x="4" y="6" width="16" height="13" rx="4" fill="#7C3AED" />
        <path
          stroke="#C084FC"
          strokeWidth="1.8"
          strokeLinecap="round"
          d="M12 2.5V6M2 12h2m16 0h2"
        />
        <circle cx="9.2" cy="12" r="1.4" fill="#F472B6" />
        <circle cx="14.8" cy="12" r="1.4" fill="#38BDF8" />
        <path
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeLinecap="round"
          d="M9.5 15.8h5"
        />
      </svg>
    ),
  },
  n8n: {
    color: "#EA4B71",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="none"
          stroke="#EA4B71"
          strokeWidth="2.1"
          strokeLinecap="round"
          d="M6.5 12h4.2l2-4.2H17M10.7 12l2 4.2H17"
        />
        <circle cx="4.8" cy="12" r="2.6" fill="#EA4B71" />
        <circle cx="18.5" cy="7.8" r="2.5" fill="#EA4B71" />
        <circle cx="18.5" cy="16.2" r="2.5" fill="#EA4B71" />
        <circle cx="4.8" cy="12" r="1" fill="#FFFFFF" />
        <circle cx="18.5" cy="7.8" r="1" fill="#FFFFFF" />
        <circle cx="18.5" cy="16.2" r="1" fill="#FFFFFF" />
      </svg>
    ),
  },
  unreal: {
    color: "#38BDF8",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle
          cx="12"
          cy="12"
          r="10.2"
          fill="#0F172A"
          stroke="#64748B"
          strokeWidth="1.4"
        />
        <path
          fill="#F8FAFC"
          d="M8.5 7.2v6.6c0 1.4.8 2.2 2 2.2.8 0 1.5-.4 1.9-1.1V8.6c0-.8-.5-1.2-1.2-1.4h3.9c-.6.3-.9.7-.9 1.4v5.7c0 .5.3.9.8.9.4 0 .7-.2 1.1-.6v1.6c-.8 1-1.9 1.6-3.1 1.6-.9 0-1.6-.4-2-1-.6.6-1.4 1-2.3 1-1.9 0-3.1-1.4-3.1-3.5V9c0-.8-.4-1.3-1-1.5l3.9-.3z"
        />
      </svg>
    ),
  },
  blender: {
    color: "#EA7600",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#EA7600"
          d="M12.5 5.2l-5.2-3a1 1 0 0 0-1 1.7L9.6 6H4a1 1 0 0 0 0 2h5.2L3.5 11.3a1 1 0 1 0 1 1.7l3.7-2.1A5.8 5.8 0 1 0 19.6 13c0-3.1-2.4-5.7-5.6-6l-1.5-1.8z"
        />
        <circle cx="13.8" cy="13" r="3.4" fill="#FFFFFF" />
        <circle cx="13.8" cy="13" r="2" fill="#265787" />
      </svg>
    ),
  },
  aftereffects: {
    color: "#9999FF",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect
          x="1"
          y="1"
          width="22"
          height="22"
          rx="4.5"
          fill="#00005B"
          stroke="#9999FF"
          strokeWidth="1.2"
        />
        <path
          fill="#9999FF"
          d="M8.6 7.4L5.3 16.8h2l.7-2.2h3.1l.7 2.2h2l-3.3-9.4H8.6zm-.1 5.6l1-3.4 1 3.4H8.5zm8.2-.4c-.2-.6-.7-1.1-1.4-1.1-1 0-1.6.7-1.6 1.9 0 1.2.6 2 1.6 2 .7 0 1.2-.4 1.4-.9h1.6c-.3 1.4-1.4 2.2-3 2.2-2.1 0-3.3-1.4-3.3-3.3 0-1.9 1.2-3.3 3.3-3.3 1.7 0 2.8 1 3 2.5h-1.6z"
        />
      </svg>
    ),
  },
  audiodsp: {
    color: "#C084FC",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <defs>
          <linearGradient id="dspGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E879F9" />
            <stop offset="100%" stopColor="#9333EA" />
          </linearGradient>
        </defs>
        <rect x="2" y="9" width="2.4" height="6" rx="1.2" fill="url(#dspGrad)" />
        <rect x="6" y="5" width="2.4" height="14" rx="1.2" fill="url(#dspGrad)" />
        <rect x="10" y="2.5" width="2.4" height="19" rx="1.2" fill="url(#dspGrad)" />
        <rect x="14" y="6.5" width="2.4" height="11" rx="1.2" fill="url(#dspGrad)" />
        <rect x="18" y="4" width="2.4" height="16" rx="1.2" fill="url(#dspGrad)" />
        <rect x="21.2" y="9.5" width="1.8" height="5" rx="0.9" fill="url(#dspGrad)" />
      </svg>
    ),
  },
  tauri: {
    color: "#24C8DB",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#24C8DB"
          d="M12.5 2.5a7 7 0 0 0-6.8 5.4 3.5 3.5 0 0 1 2.2.8 4.6 4.6 0 0 1 8.8 1.5l2.4.7A7 7 0 0 0 12.5 2.5z"
        />
        <path
          fill="#FFC131"
          d="M11.5 21.5a7 7 0 0 0 6.8-5.4 3.5 3.5 0 0 1-2.2-.8 4.6 4.6 0 0 1-8.8-1.5l-2.4-.7a7 7 0 0 0 6.6 8.4z"
        />
        <circle cx="9.2" cy="9.4" r="2" fill="#24C8DB" />
        <circle cx="14.8" cy="14.6" r="2" fill="#FFC131" />
      </svg>
    ),
  },
  gamedev: {
    color: "#E11D48",
    icon: ({ className = "" }) => (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect x="2" y="6" width="20" height="12" rx="6" fill="#E11D48" />
        <path
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          d="M6.5 12h4M8.5 10v4"
        />
        <circle cx="15.8" cy="10.8" r="1.1" fill="#FFFFFF" />
        <circle cx="17.8" cy="12.8" r="1.1" fill="#FFFFFF" />
      </svg>
    ),
  },
};

export const DEFAULT_SKILL_STYLE = {
  color: "#9333EA",
  icon: ({ className = "" }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="#A855F7"
        strokeWidth="2"
      />
      <path
        stroke="#C084FC"
        strokeWidth="2"
        strokeLinecap="round"
        d="M12 8v8M8 12h8"
      />
    </svg>
  ),
};

/**
 * Declarative matcher rules resolving technologies to official brand badges.
 * Follows Open/Closed Principle (OCP): add rules cleanly without if/else chains.
 */
export const SKILL_MATCHER_RULES = [
  { match: (s) => s.includes("mcp") || s.includes("model context"), data: SKILL_ICONS.mcp },
  { match: (s) => s.includes("agent"), data: SKILL_ICONS.agents },
  { match: (s) => s.includes("n8n"), data: SKILL_ICONS.n8n },
  { match: (s) => s.includes("llm") || /\bia\b/.test(s), data: SKILL_ICONS.llm },
  { match: (s) => s.includes("python") && !s.includes("blender"), data: SKILL_ICONS.python },
  { match: (s) => s.includes("node"), data: SKILL_ICONS.nodejs },
  { match: (s) => s.includes("typescript"), data: SKILL_ICONS.typescript },
  { match: (s) => s.includes("angular"), data: SKILL_ICONS.angular },
  { match: (s) => s.includes("vue"), data: SKILL_ICONS.vue },
  { match: (s) => s.includes("next"), data: SKILL_ICONS.nextjs },
  { match: (s) => s.includes("react"), data: SKILL_ICONS.react },
  { match: (s) => s.includes("web forms") || s.includes("webview") || s.includes("classic asp") || s.includes("asp clásico"), data: SKILL_ICONS.webforms },
  { match: (s) => s === "c#" || s.includes("c#"), data: SKILL_ICONS.csharp },
  { match: (s) => s.includes(".net"), data: SKILL_ICONS.dotnet },
  { match: (s) => s.includes("sql"), data: SKILL_ICONS.sqlserver },
  { match: (s) => s.includes("tms") || s.includes("erp"), data: SKILL_ICONS.erp },
  { match: (s) => s.includes("edi") || s.includes("sftp"), data: SKILL_ICONS.edisftp },
  { match: (s) => s.includes("windows") || s.includes("iis"), data: SKILL_ICONS.iis },
  { match: (s) => s.includes("linux"), data: SKILL_ICONS.linux },
  { match: (s) => s.includes("nginx"), data: SKILL_ICONS.nginx },
  { match: (s) => s.includes("docker"), data: SKILL_ICONS.docker },
  { match: (s) => s.includes("ci/cd") || s.includes("pipeline"), data: SKILL_ICONS.cicd },
  { match: (s) => s.includes("git"), data: SKILL_ICONS.git },
  { match: (s) => s.includes("api") || s.includes("rest"), data: SKILL_ICONS.restapi },
  { match: (s) => s.includes("unreal"), data: SKILL_ICONS.unreal },
  { match: (s) => s.includes("blender"), data: SKILL_ICONS.blender },
  { match: (s) => s.includes("after effects"), data: SKILL_ICONS.aftereffects },
  { match: (s) => s.includes("tauri") || s.includes("three.js"), data: SKILL_ICONS.tauri },
  { match: (s) => s.includes("audio") || s.includes("dsp") || s.includes("vst") || s.includes("ableton"), data: SKILL_ICONS.audiodsp },
  { match: (s) => s.includes("game") || s.includes("videojuegos"), data: SKILL_ICONS.gamedev },
];

/**
 * Resolves a technology name to its brand metadata and SVG icon component.
 * @param {string} skillName
 */
export function getSkillData(skillName = "") {
  const normalized = skillName.toLowerCase().trim();
  const matchedRule = SKILL_MATCHER_RULES.find((rule) => rule.match(normalized));
  return matchedRule ? matchedRule.data : DEFAULT_SKILL_STYLE;
}
