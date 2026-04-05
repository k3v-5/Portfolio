import React from "react";

export default function ExperienceSection() {
  return (
    <section id="experiencia">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex justify-end">
        <div className="content-card reveal-card max-w-2xl w-full">
          <p className="font-mono text-[10px] text-purple-500 mb-4 tracking-widest">
            // MODULE_02: EXPERIENCE
          </p>
          <h2 className="text-4xl lg:text-5xl font-black mb-10 text-slate-900 uppercase italic">
            Trayectoria
          </h2>
          <div className="space-y-10 border-l-4 border-purple-500 pl-8 ml-2 relative">
            <div className="relative">
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[40px] top-1 border-4 border-white"></div>
              <h3 className="text-xl font-bold text-slate-900">RAINDE</h3>
              <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest mt-1">
                Fullstack Dev & QA Tester
              </p>
              <p className="text-slate-500 mt-4 text-sm leading-relaxed">
                Desarrollo de soluciones escalables y de alto rendimiento.
                Pruebas manuales y automatizadas para mantener altos estándares
                de despliegue.
              </p>
            </div>
            <div className="relative">
              <div className="absolute w-4 h-4 bg-slate-300 rounded-full -left-[40px] top-1 border-4 border-white"></div>
              <h3 className="text-xl font-bold text-slate-900">
                Lion System Solutions
              </h3>
              <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest mt-1">
                Desarrollador Web
              </p>
              <p className="text-slate-500 mt-4 text-sm leading-relaxed">
                Diseño e implementación de funcionalidades end-to-end para
                e-commerce. Optimización de consultas SQL y construcción de
                componentes modulares con Vue.js y .NET APIs.
              </p>
            </div>
            <div className="relative">
              <div className="absolute w-4 h-4 bg-slate-300 rounded-full -left-[40px] top-1 border-4 border-white"></div>
              <h3 className="text-xl font-bold text-slate-900">
                Universidad Cuauhtémoc
              </h3>
              <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest mt-1">
                Soporte IT
              </p>
              <p className="text-slate-500 mt-4 text-sm leading-relaxed">
                Gestión de infraestructura IT del campus, redes y seguridad.
                Soporte técnico crítico para personal administrativo y
                académico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
