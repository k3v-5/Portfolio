"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

/**
 * Custom hook to manage Lenis smooth scrolling and GSAP ScrollTrigger animations,
 * including SVG path drawing and card entrance reveals.
 */
export function useScrollAnimations({
  containerRef,
  revealCards = true,
  scrub = 0.65,
  snapSections = false,
  pathStart = "top top",
  pathEnd = "bottom bottom",
  lenisOptions,
} = {}) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Curva cinemática dorada de Lenis: desplazamiento continuo, sedoso y ultra-suave
    const defaultLenisOptions = {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      infinite: false,
    };

    const lenis = new Lenis({
      ...defaultLenisOptions,
      ...(lenisOptions || {}),
    });
    lenis.on("scroll", ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    const ctxGsap = gsap.context(() => {
      // SVG path animation
      const path = document.querySelector("#scroll-path");
      if (path && typeof path.getTotalLength === "function") {
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
            start: pathStart,
            end: pathEnd,
            scrub: typeof scrub === "number" ? scrub : 0.65,
            invalidateOnRefresh: true,
          },
        });
      }

      // Card reveal animations
      if (revealCards) {
        gsap.utils.toArray(".reveal-card").forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 95%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });
      }
    }, containerRef);

    // Posicionamiento automático a la siguiente zona de información al girar la rueda
    let isSnapping = false;
    let snapTimeout = null;

    const getSnapTargets = () => {
      const targets = [];
      const navOffset = 75;

      // 1. Hero / Inicio
      targets.push(0);

      // 2. Secciones principales
      const sectionIds = [
        "about-me",
        "experience",
        "skills",
        "lab",
        "projects",
      ];
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          targets.push(
            Math.round(
              el.getBoundingClientRect().top + window.scrollY - navOffset
            )
          );
        }
      });

      // 3. Filas intermedias de proyectos para explorar todo el catálogo cómodamente
      const projectCards = document.querySelectorAll(".project-card-anim");
      [2, 4, 6].forEach((idx) => {
        if (projectCards[idx]) {
          targets.push(
            Math.round(
              projectCards[idx].getBoundingClientRect().top +
                window.scrollY -
                navOffset -
                15
            )
          );
        }
      });

      // 4. Signal Log
      const signal = document.getElementById("signal-log");
      if (signal) {
        targets.push(
          Math.round(
            signal.getBoundingClientRect().top + window.scrollY - navOffset
          )
        );
      }

      // 5. Contacto
      const contact = document.getElementById("contact");
      if (contact) {
        targets.push(
          Math.round(
            contact.getBoundingClientRect().top + window.scrollY - navOffset
          )
        );
      }

      return Array.from(new Set(targets)).sort((a, b) => a - b);
    };

    const handleWheel = (e) => {
      if (!snapSections) return;
      if (window.innerWidth <= 768) return; // Scroll natural táctil en móviles
      if (Math.abs(e.deltaY) < 32) return; // Descartar micro-movimientos para permitir scroll suave sin sobresaltos

      if (isSnapping) {
        e.preventDefault();
        return;
      }

      const currentScroll = window.scrollY;
      const targets = getSnapTargets();
      const tolerance = 55;

      if (e.deltaY > 0) {
        // Avance hacia abajo: deslizar suavemente a la siguiente zona de información
        const next = targets.find((pos) => pos > currentScroll + tolerance);
        if (next !== undefined) {
          e.preventDefault();
          isSnapping = true;
          lenis.scrollTo(next, {
            duration: 0.9,
            easing: (t) => 1 - Math.pow(1 - t, 3), // Easing suave y natural sin brusquedad
            onComplete: () => {
              isSnapping = false;
            },
          });
          clearTimeout(snapTimeout);
          snapTimeout = setTimeout(() => {
            isSnapping = false;
          }, 950);
        }
      } else {
        // Retroceso hacia arriba: deslizar suavemente a la zona de información anterior
        const prev = [...targets]
          .reverse()
          .find((pos) => pos < currentScroll - tolerance);
        if (prev !== undefined) {
          e.preventDefault();
          isSnapping = true;
          lenis.scrollTo(prev, {
            duration: 0.9,
            easing: (t) => 1 - Math.pow(1 - t, 3),
            onComplete: () => {
              isSnapping = false;
            },
          });
          clearTimeout(snapTimeout);
          snapTimeout = setTimeout(() => {
            isSnapping = false;
          }, 950);
        }
      }
    };

    if (snapSections) {
      window.addEventListener("wheel", handleWheel, { passive: false });
    }

    // Observador para recalcular ScrollTrigger cuando carguen imágenes o cambie el DOM
    let resizeObserver = null;
    let refreshRaf = null;
    const scrollContainer = document.querySelector(".scroll-container");
    if (scrollContainer && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        if (refreshRaf) cancelAnimationFrame(refreshRaf);
        refreshRaf = requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      });
      resizeObserver.observe(scrollContainer);
    }

    const handleWindowLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("load", handleWindowLoad);

    const tRefresh1 = setTimeout(() => ScrollTrigger.refresh(), 200);
    const tRefresh2 = setTimeout(() => ScrollTrigger.refresh(), 700);

    return () => {
      ctxGsap.revert();
      gsap.ticker.remove(updateLenis);
      if (snapSections) {
        window.removeEventListener("wheel", handleWheel);
      }
      window.removeEventListener("load", handleWindowLoad);
      if (resizeObserver) resizeObserver.disconnect();
      if (refreshRaf) cancelAnimationFrame(refreshRaf);
      clearTimeout(tRefresh1);
      clearTimeout(tRefresh2);
      clearTimeout(snapTimeout);
      lenis.destroy();
    };
  }, [containerRef, revealCards, scrub, snapSections, pathStart, pathEnd, lenisOptions]);
}
