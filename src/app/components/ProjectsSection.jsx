import React from "react";

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="flex-col">
      <div className="container mx-auto px-6 lg:px-12 mb-16 text-center">
        <p className="font-mono text-[10px] text-purple-500 mb-4 tracking-widest uppercase">
          // MODULE_04: PORTFOLIO
        </p>
        <h2 className="text-5xl lg:text-8xl font-black text-slate-900 uppercase italic tracking-tighter">
          Proyectos
        </h2>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Proyecto 1: Dating App */}
          <a
            href="https://github.com/k3v-5/CitasApp"
            target="_blank"
            rel="noreferrer"
            className="content-card reveal-card group p-8 block hover:border-purple-500 transition-colors"
          >
            <div className="aspect-video bg-slate-50 rounded-2xl overflow-hidden mb-6 border border-slate-100 relative">
              <img
                src="/images/projects/dating-app/principal.jpg"
                alt="Dating App"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
            <h3 className="text-3xl font-black text-slate-900 uppercase italic">
              Dating App
            </h3>
            <p className="text-slate-500 mt-3 text-sm">
              Búsqueda por preferencias y chat en tiempo real.
            </p>
            <p className="text-slate-400 font-mono text-[9px] mt-4 uppercase tracking-widest">
              Angular • .NET • SQL
            </p>
          </a>

          {/* Proyecto 2: Ecommerce */}
          <a
            href="/"
            className="content-card reveal-card group p-8 block hover:border-purple-500 transition-colors"
          >
            <div className="aspect-video bg-slate-50 rounded-2xl overflow-hidden mb-6 border border-slate-100 relative">
              <img
                src="/images/projects/tesla-shop/principal.jpg"
                alt="Ecommerce Website"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
            <h3 className="text-3xl font-black text-slate-900 uppercase italic">
              E-Commerce
            </h3>
            <p className="text-slate-500 mt-3 text-sm">
              Plataforma con Next.js y PostgreSQL. Carrito, checkout y admin
              panel.
            </p>
            <p className="text-slate-400 font-mono text-[9px] mt-4 uppercase tracking-widest">
              Next.js • PostgreSQL
            </p>
          </a>

          {/* Proyecto 3: Crypto Tracker */}
          <a
            href="https://cryptotrackerkg.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="content-card reveal-card group p-8 block hover:border-purple-500 transition-colors"
          >
            <div className="aspect-video bg-slate-50 rounded-2xl overflow-hidden mb-6 border border-slate-100 relative">
              <img
                src="/images/projects/crypto-tracker/principal.jpg"
                alt="Crypto Tracker"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
            <h3 className="text-3xl font-black text-slate-900 uppercase italic">
              Crypto Tracker
            </h3>
            <p className="text-slate-500 mt-3 text-sm">
              Rastreador de criptomonedas usando React y CoinGecko API.
            </p>
            <p className="text-slate-400 font-mono text-[9px] mt-4 uppercase tracking-widest">
              React • API REST
            </p>
          </a>

          {/* Proyecto 4: Sentiment Analysis */}
          <a
            href="https://github.com/k3v-5/Sentiment-analysis"
            target="_blank"
            rel="noreferrer"
            className="content-card reveal-card group p-8 block hover:border-purple-500 transition-colors"
          >
            <div className="aspect-video bg-slate-50 rounded-2xl overflow-hidden mb-6 border border-slate-100 relative">
              <img
                src="/images/projects/sentiment-analysis/principal.jpg"
                alt="Sentiment Analysis"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
            <h3 className="text-3xl font-black text-slate-900 uppercase italic">
              Sentiment Analysis
            </h3>
            <p className="text-slate-500 mt-3 text-sm">
              Modelo de IA para determinar sentimientos positivos/negativos en
              texto.
            </p>
            <p className="text-slate-400 font-mono text-[9px] mt-4 uppercase tracking-widest">
              Python • Data Science
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
