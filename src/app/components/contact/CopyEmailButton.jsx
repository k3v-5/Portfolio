import React from "react";

/**
 * Copy Email Button
 * Interactive button with visual feedback when copying email to clipboard.
 *
 * @param {{
 *   email: string,
 *   copied: boolean,
 *   onCopy: () => void,
 *   copyHint: string,
 *   copiedHint: string
 * }} props
 */
export default function CopyEmailButton({
  email,
  copied,
  onCopy,
  copyHint,
  copiedHint,
}) {
  return (
    <div className="group flex flex-col items-center justify-center mb-16 relative">
      <button
        onClick={onCopy}
        className="group flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 bg-slate-50 border-2 border-slate-200 hover:border-purple-500 px-4 sm:px-8 py-3 sm:py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 w-full sm:w-auto"
      >
        <span className="font-mono text-slate-900 font-bold tracking-wider text-[11px] sm:text-base group-hover:text-purple-600 transition-colors break-all">
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
            className="w-5 h-5 text-slate-400 group-hover:text-purple-500 transition-colors shrink-0"
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

      <span
        className={`absolute -bottom-8 text-xs font-mono tracking-widest uppercase transition-opacity duration-300 ${copied ? "text-green-500 opacity-100" : "text-slate-400 opacity-0 group-hover:opacity-100"}`}
      >
        {copied ? copiedHint : copyHint}
      </span>
    </div>
  );
}
