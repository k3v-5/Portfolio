import React from "react";

export default function Herosection() {
  return (
    <section id="kevin-garrido" className="justify-center text-center">
      <div className="max-w-6xl px-4">
        <p className="font-mono text-purple-600 text-xs mb-6 tracking-[0.8em] opacity-60">
          &gt;&gt; HELLO_WORLD
        </p>
        <h1 className="text-6xl lg:text-[10rem] font-black tracking-tighter mb-8 bg-gradient-to-b from-slate-900 to-purple-600 bg-clip-text text-transparent uppercase italic leading-[0.85]">
          Kevin
          <br />
          Garrido
        </h1>
        <div className="flex flex-wrap justify-center gap-6 font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-slate-400">
          <span>Intelligent Computing</span>
          <span className="hidden md:block">•</span>
          <span>Fullstack Developer</span>
          <span className="hidden md:block">•</span>
          <span>QA Tester</span>
        </div>
      </div>
    </section>
  );
}
