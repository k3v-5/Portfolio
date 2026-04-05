"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { marked } from "marked";

export default function SignalLogSection() {
  const [logs, setLogs] = useState([]);
  const containerRef = useRef(null);
  const tweenRef = useRef(null);

  // 1. Fetch de los archivos Markdown dinámicos
  useEffect(() => {
    async function loadMarkdown() {
      try {
        const res = await fetch("/posts/logs.json");
        if (!res.ok) return;

        const files = await res.json();
        const posts = await Promise.all(
          files.map(async (file) => {
            const mdRes = await fetch(`/posts/${file}`);
            const text = await mdRes.text();
            // Extraer el SIDE_TEXT si existe usando una expresión regular
            const sideTextMatch = text.match(/<!--\s*SIDE_TEXT:\s*(.*?)\s*-->/);
            const sideText = sideTextMatch ? sideTextMatch[1] : null;
            const cleanText = text.replace(
              /<!--\s*SIDE_TEXT:\s*(.*?)\s*-->/,
              "",
            );
            return { id: file, content: marked.parse(cleanText), sideText };
          }),
        );
        setLogs(posts);
      } catch (e) {
        console.log("SIGNAL_LOG_READY: Waiting for /posts/logs.json");
      }
    }
    loadMarkdown();
  }, []);

  // 2. Efecto "Cinta Transportadora" Infinita con GSAP
  useEffect(() => {
    let ctx;
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        tweenRef.current = gsap.to(".marquee-track", {
          xPercent: -50,
          ease: "none",
          duration: 40, // Tiempo de rotación (ajustable, a mayor número más lento)
          repeat: -1,
        });
      }, containerRef);
    }, 150);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, [logs]); // Se vuelve a ejecutar si cambian los logs

  const renderCards = () => (
    <React.Fragment>
      {/* TARJETA 1: RUNNING STATS */}
      <div className="shrink-0 w-[300px] md:w-[400px] bg-white/95 backdrop-blur-[20px] border-2 border-slate-100 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] p-8 md:p-10 rounded-[3rem] shadow-xl transition-colors duration-300 flex flex-col justify-between">
        <div>
          <p className="font-mono text-[10px] text-purple-500 mb-4 tracking-widest uppercase">
            // [PROCESS_ID: 0xRUN]
          </p>
          <h3 className="text-2xl font-black text-slate-900 uppercase italic">
            Morning Run
          </h3>
          <p className="text-slate-500 text-sm mt-2 font-mono">
            Último split:{" "}
            <span className="font-bold text-slate-900">4:30 min/km</span>
          </p>
        </div>
        <svg
          className="w-full h-16 mt-6 overflow-visible"
          viewBox="0 0 100 30"
          preserveAspectRatio="none"
        >
          <path
            d="M0,25 L20,20 L40,22 L60,10 L80,15 L100,5"
            fill="none"
            stroke="#a855f7"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="100"
            cy="5"
            r="4"
            fill="#a855f7"
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* TARJETA 3: CURRENT VIBE (AUDIO) */}
      <div className="shrink-0 w-[300px] md:w-[400px] bg-white/95 backdrop-blur-[20px] border-2 border-slate-100 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] p-8 md:p-10 rounded-[3rem] shadow-xl transition-colors duration-300 flex flex-col justify-between">
        <div>
          <p className="font-mono text-[10px] text-purple-500 mb-4 tracking-widest uppercase">
            // [PROCESS_ID: 0xAUDIO]
          </p>
          <h3 className="text-2xl font-black text-slate-900 uppercase italic">
            Now Playing
          </h3>
          <p className="text-slate-500 text-sm mt-2 font-mono">
            Gesaffelstein - Opr
          </p>
        </div>
        <div className="flex items-end justify-between gap-1 h-12 mt-8">
          {[40, 70, 45, 90, 60, 100, 50, 80, 30, 65, 40].map((h, i) => (
            <div
              key={i}
              className="w-full bg-purple-500 rounded-t-sm animate-pulse"
              style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* TARJETA 4: BOOK CARD */}
      <div className="shrink-0 w-[300px] md:w-[400px] bg-white/95 backdrop-blur-[20px] border-2 border-slate-100 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] p-8 md:p-10 rounded-[3rem] shadow-xl transition-colors duration-300 flex flex-col justify-between">
        <div>
          <p className="font-mono text-[10px] text-purple-500 mb-4 tracking-widest uppercase">
            // [PROCESS_ID: 0xLIT]
          </p>
          <h3 className="text-2xl font-black text-slate-900 uppercase italic leading-none">
            Neuromancer
          </h3>
          <p className="text-slate-500 text-sm mt-2 font-mono">
            William Gibson
          </p>
        </div>
        <div className="mt-8">
          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
            <div className="bg-purple-500 h-full w-[65%] shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
          </div>
          <p className="text-right text-[10px] font-mono text-slate-400 mt-2 font-bold">
            65% COMPLETED
          </p>
        </div>
      </div>

      {/* TARJETAS DINÁMICAS (MARKDOWN) */}
      {logs.map((log) => (
        <div
          key={log.id}
          className="shrink-0 w-[300px] md:w-[400px] bg-white/95 backdrop-blur-[20px] border-2 border-slate-100 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] p-8 md:p-10 rounded-[3rem] shadow-xl transition-colors duration-300 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex justify-between gap-4"
        >
          <div className="flex-1">
            <p className="font-mono text-[10px] text-purple-500 mb-6 tracking-widest uppercase">
              // [PROCESS_ID: {log.id.replace(".md", "")}]
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
      ))}
    </React.Fragment>
  );

  return (
    <section
      id="signal-log"
      ref={containerRef}
      className="flex-col w-full relative z-10 py-16"
    >
      <div className="container mx-auto px-6 lg:px-12 mb-8 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left">
        <div>
          <p className="font-mono text-[10px] text-purple-500 mb-4 tracking-widest uppercase">
            // MODULE_05: SIGNAL_LOG
          </p>
          <h2 className="text-4xl lg:text-7xl font-black text-slate-900 uppercase italic tracking-tighter">
            Transmissions
          </h2>
        </div>
      </div>

      {/* Contenedor Cinta Transportadora Infinita (Marquee) */}
      <div className="overflow-hidden w-full py-16 [mask-image:_linear-gradient(to_right,transparent_0,_black_10vw,_black_calc(100%-10vw),transparent_100%)]">
        <div
          className="marquee-track flex w-max gap-8"
          onMouseEnter={() => tweenRef.current?.pause()}
          onMouseLeave={() => tweenRef.current?.play()}
        >
          {/* Renderizamos dos veces el mismo bloque de tarjetas para crear el ciclo infinito */}
          <div className="flex gap-8 items-stretch">{renderCards()}</div>
          <div className="flex gap-8 items-stretch">{renderCards()}</div>
        </div>
      </div>
    </section>
  );
}
