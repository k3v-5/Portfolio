import React from "react";

export default function AboutSection() {
  return (
    <section id="about-me">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex justify-start">
        <div className="content-card reveal-card max-w-2xl w-full">
          <p className="font-mono text-[10px] text-purple-500 mb-4 tracking-widest">
            // MODULE_01: BIO
          </p>
          <h2 className="text-4xl lg:text-5xl font-black mb-8 text-slate-900 uppercase italic">
            About Me
          </h2>
          <p className="text-slate-500 leading-relaxed text-lg lg:text-xl font-light">
            Intelligent Computing Engineer with a specialized focus on
            artificial intelligence, data mining, and full-stack development.
            Experienced in architecting scalable web applications using React,
            Angular, and .NET, while streamlining business processes through
            data-driven reporting and RESTful services. Committed to leveraging
            advanced algorithms and modern frontend frameworks to solve complex
            organizational challenges and drive technical efficiency.
          </p>
          <div className="mt-8 pt-6 border-t border-slate-100">
            <p className="text-sm text-slate-400 font-mono uppercase tracking-widest">
              Education
            </p>
            <p className="text-slate-900 font-bold mt-2">
              B.S. Intelligent Computing Engineering
            </p>
            <p className="text-slate-500 text-sm mt-1">
              Autonomous University of Aguascalientes | August 2019 - June 2024
            </p>
            <p className="text-slate-400 text-sm mt-2 italic">
              Focus: Artificial Intelligence, Data Mining, Intelligent
              Optimization, and Advanced Algorithms. Designed computational
              solutions using intelligent models to address complex software
              engineering problems.
            </p>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
