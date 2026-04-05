"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import MatrixBackground from "./components/MatrixBackground";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  const containerRef = useRef(null);

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

    const ctxGsap = gsap.context(() => {
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
            scrub: 1.5,
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

      // Fade-In de Cartas renderizadas desde componentes hijos
      gsap.utils.toArray(".reveal-card").forEach((card) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef);

    // Cleanup final
    return () => {
      ctxGsap.revert();
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={containerRef}>
      <MatrixBackground />
      <CustomCursor />
      <Navbar />

      <div className="scroll-container pb-24 lg:pb-32">
        {/* Background Images de SpotlightSection (Desktop Only) */}
        <div className="bg-identity-layer">
          <div
            style={{
              position: "absolute",
              top: "15%",
              right: "5%",
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
              left: "5%",
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
              top: "54%",
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
              top: "80%",
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
            viewBox="0 0 2120 2590"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "100%" }}
          >
            <path
              id="scroll-path"
              d="M698.973 23.7537C844.473 293.254 1969.97 211.754 2033.97 425.754C2097.97 639.754 432.989 765.83 87.4731 964.754C-258.043 1163.68 1896.97 1777.25 2059.47 1221.25C2221.97 665.254 266.973 2102.75 87.4731 1666.25C-92.0268 1229.75 2102.48 2090.25 1841.47 2269.75C1580.47 2449.25 626.473 2539.25 626.473 2539.25 L 626.473 2590"
              stroke="#9F44C9"
              strokeWidth="100"
            />
          </svg>
        </div>

        <Herosection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />

        {/* Espaciador visual moderado */}
        <div className="h-32 lg:h-64 w-full pointer-events-none"></div>

        <ProjectsSection />

        {/* Espaciador visual más amplio para la última imagen */}
        <div className="h-48 lg:h-96 w-full pointer-events-none"></div>

        <ContactSection />

        <footer className="py-16 text-center opacity-30 font-mono text-[9px] uppercase tracking-[0.8em]">
          Kevin Garrido // Data Engineering System // 2026
        </footer>
      </div>
    </div>
  );
}
