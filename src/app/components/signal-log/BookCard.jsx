import React from "react";

/**
 * Book Card
 * Displays currently reading literature and reading progress.
 *
 * @param {{ book: { title: string, author: string, progress: string } }} props
 */
export default function BookCard({ book }) {
  return (
    <div className="shrink-0 w-[280px] sm:w-[320px] md:w-[400px] bg-white/95 backdrop-blur-[20px] border-2 border-slate-100 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl transition-colors duration-300 flex flex-col justify-between">
      <div>
        <p className="font-mono text-[10px] text-purple-600 font-bold mb-4 tracking-widest uppercase">
          {"// [PROCESS_ID: 0xLIT]"}
        </p>
        <h3 className="text-2xl font-black text-slate-900 uppercase italic leading-none">
          {book.title}
        </h3>
        <p className="text-slate-500 text-sm mt-2 font-mono">
          {book.author}
        </p>
      </div>
      <div className="mt-8">
        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
          <div className="bg-purple-500 h-full w-[10%] shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
        </div>
        <p className="text-right text-[10px] font-mono text-slate-400 mt-2 font-bold">
          {book.progress}
        </p>
      </div>
    </div>
  );
}
