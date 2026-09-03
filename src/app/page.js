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
import LabSection from "./components/LabSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import MatrixBackground from "./components/MatrixBackground";
import CustomCursor from "./components/CustomCursor";
import SignalLogSection from "./components/SignalLogSection";
import { useLanguage } from "./i18n/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Inicializamos Lenis con curva cinemática no lineal y respuesta ágil
    const lenis = new Lenis({
      duration: 1.0, // Duración controlada para eliminar la pesadez
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva exponencial no lineal: reactividad inmediata al toque y frenado orgánico
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.2, // Acelera el avance natural de la rueda sin requerir esfuerzo
      touchMultiplier: 1.5,
      infinite: false,
    });
    lenis.on("scroll", ScrollTrigger.update);
    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    // Debe coincidir con el "y: -120" del efecto parallax de las imágenes
    // más abajo: una vez el usuario scrollea de largo, el wrapper ya está
    // desplazado -PARALLAX_SHIFT px, así que hay que descontarlo al calcular
    // dónde debe "aterrizar" cada imagen para que el hueco final sea el
    // que realmente se pide, no uno inflado por ese offset oculto.
    const PARALLAX_SHIFT = 120;

    // Posiciona las imágenes de fondo ancladas a sus secciones (no a un
    // porcentaje de la altura total de la página), para que agregar o quitar
    // secciones en cualquier parte del layout no las desalinee.
    const positionIdentityImages = () => {
      const scrollContainerEl = document.querySelector(".scroll-container");
      if (!scrollContainerEl || window.innerWidth <= 1024) return;

      const scRect = scrollContainerEl.getBoundingClientRect();
      const relTop = (el) => el.getBoundingClientRect().top - scRect.top;
      const relBottom = (el) => el.getBoundingClientRect().bottom - scRect.top;
      const setTop = (wrapId, px) => {
        const wrap = document.getElementById(wrapId);
        if (wrap && Number.isFinite(px)) {
          wrap.parentElement.style.top = `${px}px`;
        }
      };
      // Altura real renderizada de la imagen (width fijo por CSS var,
      // height:auto según su relación de aspecto natural).
      const imgHeight = (imgId) => {
        const img = document.getElementById(imgId);
        if (!img) return 0;
        const cssWidth = parseFloat(getComputedStyle(img).width) || 0;
        if (img.naturalWidth && img.naturalHeight) {
          return (img.naturalHeight / img.naturalWidth) * cssWidth;
        }
        return cssWidth * (1536 / 2816); // ratio nativo exacto
      };
      // Posiciona una imagen para que, una vez asentado el scroll (parallax
      // ya aplicado), su borde inferior quede a `finalGap` px ANTES del
      // elemento objetivo — nunca lo invade, y el hueco visible es el que
      // se pide, no uno inflado por el parallax o el padding interno de la
      // tarjeta.
      const setBefore = (wrapId, imgId, targetEl, finalGap = 40) => {
        if (!targetEl) return;
        setTop(
          wrapId,
          relTop(targetEl) - imgHeight(imgId) - finalGap + PARALLAX_SHIFT,
        );
      };

      const aboutEl = document.getElementById("about-me");
      const experienceCardEl =
        document.querySelector("#experience .content-card") ||
        document.getElementById("experience");
      const skillsEl = document.getElementById("skills");
      const skillsCardEl =
        document.querySelector("#skills .content-card") || skillsEl;
      const labEl = document.getElementById("lab");
      const projectsEl = document.getElementById("projects");
      const signalLogEl = document.getElementById("signal-log");
      const contactCardEl =
        document.querySelector("#contact .content-card") ||
        document.getElementById("contact");

      // Imagen 1: About
      if (aboutEl) {
        setTop("wrap-1", relTop(aboutEl) + aboutEl.offsetHeight * 0.35);
      }
      // Imagen 2: centrada en la mitad del contenido de "Experience" (lado izquierdo)
      if (experienceCardEl) {
        const h = imgHeight("img-2");
        setTop(
          "wrap-2",
          relTop(experienceCardEl) + experienceCardEl.offsetHeight / 2 - h / 2,
        );
      }
      // Imagen 5: The Algorithmic Core (centrada con Skills, lado derecho)
      if (skillsCardEl) {
        const h = imgHeight("img-5");
        setTop(
          "wrap-5",
          relTop(skillsCardEl) + skillsCardEl.offsetHeight / 2 - h / 2,
        );
      }
      // Imagen 6: The Creative Synthesis (centrada entre Skills y Lab)
      if (skillsEl && labEl) {
        const h = imgHeight("img-6");
        const gapCenter = (relBottom(skillsEl) + relTop(labEl)) / 2;
        setTop("wrap-6", gapCenter - h / 2 + PARALLAX_SHIFT);
      }
      // Imagen 3: Server Towers (centrada entre Lab y Projects)
      if (labEl && projectsEl) {
        const h = imgHeight("img-3");
        const gapCenter = (relBottom(labEl) + relTop(projectsEl)) / 2;
        setTop("wrap-3", gapCenter - h / 2 + PARALLAX_SHIFT);
      }
      // Imagen 7: The Deep Transmission (entre Projects y Signal Log)
      if (projectsEl && signalLogEl) {
        const h = imgHeight("img-7");
        const gapCenter = (relBottom(projectsEl) + relTop(signalLogEl)) / 2;
        setTop("wrap-7", gapCenter - h / 2 + PARALLAX_SHIFT);
      }
      // Imagen 4: posicionada de forma segura para nunca invadir las tarjetas de Signal Log
      const signalTrackEl =
        document.querySelector("#signal-log .marquee-track") || signalLogEl;
      if (signalTrackEl && contactCardEl) {
        const cardsBottom = relBottom(signalTrackEl);
        // Garantizamos que el borde superior nunca invada las tarjetas (mínimo 70px de margen):
        setTop("wrap-4", cardsBottom + 70 + PARALLAX_SHIFT);
      }
    };

    positionIdentityImages();

    // Recalcula si cambia el tamaño de ventana (reflow de texto) o si algo
    // (fuentes, imágenes) ajusta la altura de las secciones tras el mount.
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        positionIdentityImages();
        ScrollTrigger.refresh();
      }, 150);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", positionIdentityImages);

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
            scrub: 0.8, // Respuesta rápida que acompaña el scroll de forma precisa
          },
        });
      }

      // Animación de imágenes de fondo (Identity Layer)
      const imageIndices = [1, 2, 3, 4, 5, 6, 7];
      imageIndices.forEach((num) => {
        const wrapper = document.querySelector(`#wrap-${num}`);
        const el = document.querySelector(`#img-${num}`);

        if (wrapper && el && window.innerWidth > 1024) {
          // 1. Efecto Fade-In al hacer scroll
          gsap.to(el, {
            opacity: 1,
            scrollTrigger: {
              trigger: wrapper,
              start: "top 85%", // Comienza a aparecer un poco antes
              end: "top 30%", // Opacidad 100% cuando alcanza el 30% superior de la pantalla
              scrub: true,
            },
          });

          // 2. Parallax de scroll (aplicado al wrapper)
          gsap.to(wrapper, {
            y: -PARALLAX_SHIFT,
            scrollTrigger: {
              trigger: wrapper,
              start: "top bottom", // Inicia al entrar por debajo
              end: "bottom top", // Termina al salir por arriba
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
          duration: 0.8,
          ease: "power2.out",
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
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", positionIdentityImages);
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
          {/* 1: About */}
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

          {/* 2: Experience */}
          <div
            style={{
              position: "absolute",
              top: "28%",
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

          {/* 5: The Algorithmic Core (Between Experience & Skills) */}
          <div
            style={{
              position: "absolute",
              top: "40%",
              right: "5%",
              width: "var(--img-width)",
            }}
          >
            <div id="wrap-5" className="w-full h-full">
              <img
                src="/images/img_algorithmic_core_wb.png"
                className="identity-img w-full"
                id="img-5"
                alt="bg-identity 5 - The Algorithmic Core"
              />
            </div>
          </div>

          {/* 6: The Creative Synthesis (Between Skills & Lab) */}
          <div
            style={{
              position: "absolute",
              top: "52%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "var(--img-width)",
            }}
          >
            <div id="wrap-6" className="w-full h-full">
              <img
                src="/images/img_creative_synthesis_wb.png"
                className="identity-img w-full"
                id="img-6"
                alt="bg-identity 6 - The Creative Synthesis"
              />
            </div>
          </div>

          {/* 3: Server Towers (Between Lab & Projects) */}
          <div
            style={{
              position: "absolute",
              top: "65%",
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

          {/* 7: The Deep Transmission (Between Projects & Signal Log) */}
          <div
            style={{
              position: "absolute",
              top: "78%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "var(--img-width)",
            }}
          >
            <div id="wrap-7" className="w-full h-full">
              <img
                src="/images/img_deep_transmission_wb.png"
                className="identity-img w-full"
                id="img-7"
                alt="bg-identity 7 - The Deep Transmission"
              />
            </div>
          </div>

          {/* 4: Neural Core (Between Signal Log & Contact) */}
          <div
            style={{
              position: "absolute",
              top: "90%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "min(var(--img-width), 640px)",
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

        {/* Espaciador visual para The Creative Synthesis */}
        <div className="h-44 lg:h-80 w-full pointer-events-none"></div>

        <LabSection />

        {/* Espaciador visual para Server Towers */}
        <div className="h-44 lg:h-80 w-full pointer-events-none"></div>

        <ProjectsSection />

        {/* Espaciador visual más amplio para The Deep Transmission */}
        <div className="h-48 lg:h-96 w-full pointer-events-none"></div>

        <SignalLogSection />

        {/* Espaciador visual amplio para que la imagen 4 respire sin solapar */}
        <div className="h-64 lg:h-[440px] w-full pointer-events-none"></div>

        <ContactSection />

        <footer className="py-16 text-center opacity-30 font-mono text-[9px] uppercase tracking-[0.8em]">
          {t.footer}
        </footer>
      </div>
    </div>
  );
}
