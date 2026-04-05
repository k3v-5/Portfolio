"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default function Home() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Inicializamos Lenis para el Smooth Scroll (Heredado de tu Spotlight)
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    // 2. Efecto Matrix de fondo
    const canvas = canvasRef.current;
    let matrixInterval;
    let handleResize;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      let columns, drops;
      const fontSize = 14;

      handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = canvas.width / fontSize;
        drops = Array(Math.floor(columns)).fill(1);
      };

      handleResize();
      const symbols = "01ΣΔ∫√μλπθΦΨΩαβγ∞≈∑∏".split("");

      const draw = () => {
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#B95BD8";
        ctx.font = fontSize + "px 'Fira Code', monospace";
        drops.forEach((y, i) => {
          const text = symbols[Math.floor(Math.random() * symbols.length)];
          ctx.fillText(text, i * fontSize, y * fontSize);
          if (y * fontSize > canvas.height && Math.random() > 0.975)
            drops[i] = 0;
          drops[i]++;
        });
      };

      matrixInterval = setInterval(draw, 50);
      window.addEventListener("resize", handleResize);
    }

    // 3. Animaciones GSAP
    const ctxGsap = gsap.context(() => {
      // Cursor personalizado
      const dot = document.querySelector("#cursor-dot");
      const ring = document.querySelector("#cursor-ring");

      const handleMouseMove = (e) => {
        if (dot && ring) {
          gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0 });
          gsap.to(ring, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      };
      window.addEventListener("mousemove", handleMouseMove);

      // Animación de la línea SVG
      const path = document.querySelector("#scroll-path");
      if (path) {
        const pathLength = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".scroll-container",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }

      // Animación de imágenes de fondo (Identity Layer)
      const imageIndices = [1, 2, 3, 4];
      imageIndices.forEach((num) => {
        const wrapper = document.querySelector(`#wrap-${num}`);
        const el = document.querySelector(`#img-${num}`);

        if (wrapper && el && window.innerWidth > 1024) {
          // 1. Efecto Fade-In al hacer scroll
          gsap.to(el, {
            opacity: 1,
            scrollTrigger: {
              trigger: wrapper.parentElement,
              start: "top 90%",
              end: "bottom 10%",
              scrub: true,
            },
          });

          // 2. Parallax de scroll (aplicado al wrapper para evitar conflicto de ejes Y)
          gsap.to(wrapper, {
            y: -120,
            scrollTrigger: {
              trigger: wrapper.parentElement,
              start: "top 90%",
              end: "bottom 10%",
              scrub: true,
            },
          });

          // 3. Efecto de flotación infinita (aplicado directamente a la imagen)
          gsap.to(el, {
            y: 30,
            rotation: 1.5,
            duration: 5 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      });

      // Fade-In de Cartas
      gsap.utils.toArray(".reveal-card").forEach((card) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, containerRef);

    // Cleanup final
    return () => {
      clearInterval(matrixInterval);
      if (handleResize) {
        window.removeEventListener("resize", handleResize);
      }
      ctxGsap.revert();
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  // Información rescatada del componente AboutSection
  const skills = [
    "React",
    "Next.js",
    "Vue",
    "Angular",
    "TypeScript",
    "Python",
    ".NET",
    "TensorFlow",
    "PyTorch",
    "Django",
    "Node.js",
    "SQL",
    "NoSQL",
    "Power BI",
  ];

  return (
    <div ref={containerRef}>
      <div className="grain-overlay"></div>
      <canvas id="matrix-canvas" ref={canvasRef}></canvas>

      {/* Cursores GSAP */}
      <div id="cursor-dot"></div>
      <div id="cursor-ring"></div>

      {/* Navbar Minimalista */}
      <nav>
        <div className="container mx-auto px-6 lg:px-8 py-5 flex justify-between items-center">
          <div className="text-xl font-black text-slate-900 uppercase tracking-tighter italic">
            Kevin Garrido
          </div>
          <div className="hidden md:flex space-x-10 text-[10px] font-mono font-bold tracking-[0.4em] uppercase">
            <a
              href="#sobre-mi"
              className="hover:text-purple-600 transition-colors text-slate-400"
            >
              // Bio
            </a>
            <a
              href="#experiencia"
              className="hover:text-purple-600 transition-colors text-slate-400"
            >
              // Exp
            </a>
            <a
              href="#skills"
              className="hover:text-purple-600 transition-colors text-slate-400"
            >
              // Tech
            </a>
            <a
              href="#proyectos"
              className="hover:text-purple-600 transition-colors text-slate-400"
            >
              // Work
            </a>
          </div>
          <a
            href="#contacto"
            className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-[10px] font-mono font-bold hover:bg-purple-600 transition uppercase shadow-xl"
          >
            Handshake.req
          </a>
        </div>
      </nav>

      <div className="scroll-container">
        {/* Background Images de SpotlightSection (Desktop Only) */}
        <div className="bg-identity-layer">
          <div
            style={{
              position: "absolute",
              top: "15%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "var(--img-width)",
            }}
          >
            <div id="wrap-1" className="w-full h-full">
              <img
                src="/images/img_1wb.png"
                className="identity-img w-full"
                id="img-1"
                alt="bg-identity 1"
              />
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "35%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "var(--img-width)",
            }}
          >
            <div id="wrap-2" className="w-full h-full">
              <img
                src="/images/img_2wb.png"
                className="identity-img w-full"
                id="img-2"
                alt="bg-identity 2"
              />
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "55%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "var(--img-width)",
            }}
          >
            <div id="wrap-3" className="w-full h-full">
              <img
                src="/images/img_3wb.png"
                className="identity-img w-full"
                id="img-3"
                alt="bg-identity 3"
              />
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "75%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "var(--img-width)",
            }}
          >
            <div id="wrap-4" className="w-full h-full">
              <img
                src="/images/img_4wb.png"
                className="identity-img w-full"
                id="img-4"
                alt="bg-identity 4"
              />
            </div>
          </div>
        </div>

        {/* Línea SVG de fondo */}
        <div className="svg-line-container">
          <svg
            viewBox="0 0 3259 7000"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "100%" }}
          >
            <path
              id="scroll-path"
              d="M1574.18 31.0454C1421.44 498.712 1100.61 756.881 3018.18 1260.05C3452.35 1459 2761.18 1485.55 2477.18 1437.7C2193.18 1389.86 786.643 1214.55 429.178 1732.55C388.798 1808.06 509.935 1966.42 912.889 2268.55C3088.07 3446.44 3309.13 4480.63 3018.18 2862.05C2606.93 1267.73 2556.14 2854.66 429.178 4075.05C-385.958 4763.89 253.091 5000.12 3018.18 5199.05 L 1574 7000"
            />
          </svg>
        </div>

        {/* HERO (Basado en Herosection.jsx) */}
        <section className="justify-center text-center">
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

        {/* BIO (Basado en AboutSection.jsx) */}
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
                Soy de Aguascalientes, México, tengo 23 años y 2 años de
                experiencia en el sector tecnológico. Me apasiona el aprendizaje
                autodidacta y crear soluciones escalables, uniendo el código
                robusto con experiencias de usuario fluidas.
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

        {/* EXPERIENCIA (De AboutSection.jsx) */}
        <section id="experiencia">
          <div className="grid-layout">
            <div></div>
            <div></div>
            <div className="content-card reveal-card">
              <p className="font-mono text-[10px] text-purple-500 mb-4 tracking-widest">
                // MODULE_02: EXPERIENCE
              </p>
              <h2 className="text-4xl lg:text-5xl font-black mb-10 text-slate-900 uppercase italic">
                Trayectoria
              </h2>
              <div className="space-y-10 border-l-4 border-purple-500 pl-8 ml-2 relative">
                {/* Exp 1 */}
                <div className="relative">
                  <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[40px] top-1 border-4 border-white"></div>
                  <h3 className="text-xl font-bold text-slate-900">RAINDE</h3>
                  <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest mt-1">
                    Fullstack Dev & QA Tester
                  </p>
                  <p className="text-slate-500 mt-4 text-sm leading-relaxed">
                    Desarrollo de soluciones escalables y de alto rendimiento.
                    Pruebas manuales y automatizadas para mantener altos
                    estándares de despliegue.
                  </p>
                </div>
                {/* Exp 2 */}
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
                {/* Exp 3 */}
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

        {/* SKILLS */}
        <section id="skills">
          <div className="grid-layout">
            <div className="content-card reveal-card">
              <p className="font-mono text-[10px] text-purple-500 mb-4 tracking-widest">
                // MODULE_03: TECH_STACK
              </p>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 text-slate-900 uppercase italic">
                Skills
              </h2>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </section>

        {/* PROYECTOS (De ProjectsSection.jsx) */}
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
                  Modelo de IA para determinar sentimientos positivos/negativos
                  en texto.
                </p>
                <p className="text-slate-400 font-mono text-[9px] mt-4 uppercase tracking-widest">
                  Python • Data Science
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="justify-center">
          <div className="content-card reveal-card max-w-5xl w-full text-center border-4 border-slate-50 shadow-2xl mx-4">
            <p className="font-mono text-[10px] text-purple-500 mb-6 tracking-[0.5em]">
              &gt;&gt; SIGNAL_READY
            </p>
            <h2 className="text-6xl font-black mb-12 italic uppercase text-slate-900">
              Hablemos.
            </h2>
            <form
              className="space-y-6 text-left"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input
                  type="text"
                  placeholder="IDENTITY"
                  className="bg-slate-50 border border-slate-200 p-6 rounded-3xl font-mono text-xs outline-none focus:border-purple-500 transition-all text-slate-900"
                />
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="bg-slate-50 border border-slate-200 p-6 rounded-3xl font-mono text-xs outline-none focus:border-purple-500 transition-all text-slate-900"
                />
              </div>
              <textarea
                placeholder="PAYLOAD"
                rows="4"
                className="w-full bg-slate-50 border border-slate-200 p-6 rounded-3xl font-mono text-xs outline-none focus:border-purple-500 transition-all text-slate-900"
              ></textarea>
              <button className="w-full bg-slate-900 py-6 rounded-3xl font-black font-mono text-[10px] uppercase tracking-[0.5em] hover:bg-purple-600 text-white transition-all transform active:scale-95 shadow-2xl">
                [ SEND_EXECUTE ]
              </button>
            </form>
          </div>
        </section>

        <footer className="py-16 text-center opacity-30 font-mono text-[9px] uppercase tracking-[0.8em]">
          Kevin Garrido // Data Engineering System // 2026
        </footer>
      </div>
    </div>
  );
}
