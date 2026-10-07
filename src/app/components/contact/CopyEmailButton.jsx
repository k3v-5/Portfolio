import React from "react";
import { ArrowTopRightOnSquareIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

/**
 * Copy Email Button
 * Interactive button with visual feedback when copying email to clipboard,
 * plus a direct mailto action button.
 *
 * @param {{
 *   email: string,
 *   copied: boolean,
 *   onCopy: () => void,
 *   copyHint: string,
 *   copiedHint: string,
 *   openMailLabel?: string
 * }} props
 */
export default function CopyEmailButton({
  email,
  copied,
  onCopy,
  copyHint,
  copiedHint,
  openMailLabel = "Abrir correo",
}) {
  return (
    <div className="flex flex-col items-center justify-center mb-16 relative">
      <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
        {/* Botón Principal: Copiar al Portapapeles */}
        <button
          type="button"
          onClick={onCopy}
          className="group flex items-center justify-center gap-3 bg-slate-50 dark:bg-slate-800/80 border-2 border-slate-200 dark:border-slate-700 hover:border-purple-500 px-5 sm:px-8 py-3 sm:py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-sm hover:shadow-md"
          title={copyHint}
        >
          <span className="font-mono text-slate-900 dark:text-white font-bold tracking-wider text-xs sm:text-base group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors break-all">
            {email}
          </span>
          {copied ? (
            <svg
              className="w-5 h-5 text-green-500 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-purple-500 transition-colors shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              ></path>
            </svg>
          )}
        </button>

        {/* Botón Secundario: Abrir Cliente de Correo Directo */}
        <a
          href={`mailto:${email}?subject=Contacto%20//%20Kevin%20Garrido`}
          className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-100 dark:hover:bg-purple-900/60 border-2 border-purple-200 dark:border-purple-800 hover:border-purple-500 text-purple-700 dark:text-purple-300 font-mono text-xs font-bold uppercase tracking-wider px-4 sm:px-5 py-3 sm:py-4 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(147,51,234,0.2)] transform hover:scale-[1.02] active:scale-95"
          title={openMailLabel}
        >
          <EnvelopeIcon className="w-4 h-4" />
          <span className="hidden sm:inline">{openMailLabel}</span>
          <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 opacity-70" />
        </a>
      </div>

      <span
        className={`mt-2.5 text-xs font-mono tracking-widest uppercase transition-opacity duration-300 ${
          copied
            ? "text-green-500 opacity-100 font-bold"
            : "text-slate-400 opacity-80"
        }`}
      >
        {copied ? copiedHint : copyHint}
      </span>
    </div>
  );
}
