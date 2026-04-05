import React from "react";

export default function ExperienceSection() {
  return (
    <section id="experience">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex justify-end">
        <div className="content-card reveal-card max-w-2xl w-full">
          <p className="font-mono text-[10px] text-purple-500 mb-4 tracking-widest">
            {"// MODULE_02: EXPERIENCE"}
          </p>
          <h2 className="text-4xl lg:text-5xl font-black mb-10 text-slate-900 uppercase italic">
            Experience
          </h2>
          <div className="space-y-10 border-l-4 border-purple-500 pl-8 ml-2 relative">
            <div className="relative">
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[40px] top-1 border-4 border-white"></div>
              <h3 className="text-xl font-bold text-slate-900">RAINDE</h3>
              <p className="text-slate-400 font-mono text-[10px] tracking-widest mt-1">
                SOFTWARE ENGINEER | NOV 2024 - CURRENT
              </p>
              <p className="text-slate-500 mt-4 text-sm leading-relaxed">
                • Developed responsive web and mobile applications utilizing
                Angular, TypeScript, and SQL Server.
                <br />
                • Engineered REST APIs focused on mobile solutions and business
                intelligence reporting for the logistics sector.
                <br />
                • Managed publication processes for web and mobile platforms,
                overseeing project compilation and production releases.
                <br />• Collaborated in multidisciplinary environments to
                deliver high-quality code and scalable technical solutions.
              </p>
            </div>
            <div className="relative">
              <div className="absolute w-4 h-4 bg-slate-300 rounded-full -left-[40px] top-1 border-4 border-white"></div>
              <h3 className="text-xl font-bold text-slate-900">
                Lion Intel Solutions
              </h3>
              <p className="text-slate-400 font-mono text-[10px] tracking-widest mt-1">
                FULLSTACK DEVELOPER | MAY 2024 - NOV 2024
              </p>
              <p className="text-slate-500 mt-4 text-sm leading-relaxed">
                • Led the end-to-end development of a comprehensive web
                application for a dermatology center using Vue.js and .NET.
                <br />
                • Integrated marketplace APIs to synchronize catalogs and online
                sales, enhancing digital presence.
                <br />• Streamlined operational processes and centralized
                customer service, resulting in faster response times.
              </p>
            </div>
            <div className="relative">
              <div className="absolute w-4 h-4 bg-slate-300 rounded-full -left-[40px] top-1 border-4 border-white"></div>
              <h3 className="text-xl font-bold text-slate-900">
                Financiera Independencia
              </h3>
              <p className="text-slate-400 font-mono text-[10px] tracking-widest mt-1">
                CUSTOMER SUPPORT | JAN 2024 - APR 2024
              </p>
              <p className="text-slate-500 mt-4 text-sm leading-relaxed">
                • Managed account balances and processed digital payments by
                generating custom payment links for virtual department clients.
              </p>
            </div>
            <div className="relative">
              <div className="absolute w-4 h-4 bg-slate-300 rounded-full -left-[40px] top-1 border-4 border-white"></div>
              <h3 className="text-xl font-bold text-slate-900">
                Cuauhtémoc University
              </h3>
              <p className="text-slate-400 font-mono text-[10px] tracking-widest mt-1">
                IT SUPPORT | MAY 2021 - FEB 2023
              </p>
              <p className="text-slate-500 mt-4 text-sm leading-relaxed">
                • Automated internal service reporting by developing a custom
                request management system.
                <br />• Managed technical infrastructure, including hardware
                maintenance and security camera installations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
