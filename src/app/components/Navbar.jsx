import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="container mx-auto px-6 lg:px-8 py-5 flex justify-between items-center">
        <div className="text-xl font-black text-slate-900 uppercase tracking-tighter italic">
          <a href="#kevin-garrido">Kevin Garrido</a>
        </div>
        <div className="hidden md:flex space-x-10 text-[10px] font-mono font-bold tracking-[0.4em] uppercase">
          <a
            href="#about-me"
            className="hover:text-purple-600 transition-colors text-slate-400"
          >
            {"// Bio"}
          </a>
          <a
            href="#experience"
            className="hover:text-purple-600 transition-colors text-slate-400"
          >
            {"// Exp"}
          </a>
          <a
            href="#skills"
            className="hover:text-purple-600 transition-colors text-slate-400"
          >
            {"// Skills"}
          </a>
          <a
            href="#projects"
            className="hover:text-purple-600 transition-colors text-slate-400"
          >
            {"// Projects"}
          </a>
        </div>
        <a
          href="#contact"
          className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-[10px] font-mono font-bold hover:bg-purple-600 transition uppercase shadow-xl"
        >
          Contact.me
        </a>
      </div>
    </nav>
  );
}
