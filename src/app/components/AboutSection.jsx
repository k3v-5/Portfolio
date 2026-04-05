import React from "react";

export default function AboutSection() {
  return (
    <section id="sobre-mi">
      <div className="grid-layout">
        <div className="content-card reveal-card">
          <p className="font-mono text-[10px] text-purple-500 mb-4 tracking-widest">
            // MODULE_01: BIO
          </p>
          <h2 className="text-4xl lg:text-5xl font-black mb-8 text-slate-900 uppercase italic">
            Sobre Mí
          </h2>
          <p className="text-slate-500 leading-relaxed text-lg lg:text-xl font-light">
            Soy de Aguascalientes, México, tengo 23 años y 2 años de experiencia
            en el sector tecnológico. Me apasiona el aprendizaje autodidacta y
            crear soluciones escalables, uniendo el código robusto con
            experiencias de usuario fluidas.
          </p>
          <div className="mt-8 pt-6 border-t border-slate-100">
            <p className="text-sm text-slate-400 font-mono uppercase tracking-widest">
              Educación
            </p>
            <p className="text-slate-900 font-bold mt-2">
              Universidad Autónoma de Aguascalientes
            </p>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
