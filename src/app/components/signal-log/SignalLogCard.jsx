import React from "react";

/**
 * Signal Log Card
 * Displays a dynamic Markdown log entry.
 *
 * @param {{ log: { id: string, content: string, sideText: string | null } }} props
 */
export default function SignalLogCard({ log }) {
  const processId = log.id ? log.id.replace(".md", "") : "UNKNOWN";

  return (
    <div className="shrink-0 w-[280px] sm:w-[320px] md:w-[400px] bg-white/95 backdrop-blur-[20px] border-2 border-slate-100 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl transition-colors duration-300 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex justify-between gap-4">
      <div className="flex-1">
        <p className="font-mono text-[10px] text-purple-600 font-bold mb-6 tracking-widest uppercase">
          {`// [PROCESS_ID: ${processId}]`}
        </p>
        <div
          className="text-sm font-mono text-slate-600 space-y-4 prose-a:text-purple-500 prose-strong:text-slate-900 prose-headings:font-black prose-headings:italic prose-headings:text-xl"
          dangerouslySetInnerHTML={{ __html: log.content }}
        />
      </div>
      {log.sideText && (
        <div className="font-mono text-purple-300 [writing-mode:vertical-rl] text-xs tracking-widest uppercase rotate-180 opacity-50 flex items-center justify-center shrink-0">
          {log.sideText}
        </div>
      )}
    </div>
  );
}
