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

      // Fade-In de Cartas renderizadas desde componentes hijos
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

        <Herosection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />

        <footer className="py-16 text-center opacity-30 font-mono text-[9px] uppercase tracking-[0.8em]">
          Kevin Garrido // Data Engineering System // 2026
        </footer>
      </div>
    </div>
  );
}
