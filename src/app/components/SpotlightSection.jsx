"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Registramos el plugin fuera del componente
gsap.registerPlugin(ScrollTrigger);

export default function SpotlightSection() {
  // 1. Creamos las referencias (en lugar de usar IDs o Clases para buscar en el DOM)
  const spotlightRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    // 2. Inicializamos Lenis
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    // 3. Usamos gsap.context() (¡Súper importante en React!)
    // Esto agrupa todas las animaciones para poder limpiarlas fácilmente cuando el componente se desmonte.
    const ctx = gsap.context(() => {
      const path = pathRef.current;
      const spotlight = spotlightRef.current;

      if (!path || !spotlight) return;

      // Calculamos la longitud y preparamos el trazo
      const pathLength = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      // Creamos la animación
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: spotlight,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    });

    // 4. FUNCIÓN DE LIMPIEZA (Cleanup) - Crítico en React
    // Si no haces esto, al cambiar de página o por el StrictMode de React,
    // se crearán múltiples instancias de ScrollTrigger y Lenis rompiendo el scroll.
    return () => {
      ctx.revert(); // Mata todas las animaciones de GSAP en este contexto
      gsap.ticker.remove(updateLenis); // Desvincula Lenis de GSAP
      lenis.destroy(); // Destruye la instancia de Lenis
    };
  }, []); // El array vacío asegura que esto solo se ejecute una vez al montar

  return (
    <>
      <section class="hero">
        <h1>Designed to keep information clear and connected</h1>
      </section>

      <section class="spotlight">
        <div class="row">
          <div class="img">
            <img src="/images/img_1.svg" />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="card">
              <h2>A cleaner way to handle incoming updates</h2>
              <p>
                Instead of showing every message or notification instantly, the
                app groups related items and presents them in an organized
                panel. It keeps your workspace calm, even when activity spikes.
              </p>
            </div>
          </div>

          <div class="col">
            <div class="img">
              <img src="/images/img_2.svg" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="img">
            <img src="/images/img_3.svg" />
          </div>
        </div>
        <div class="row">
          <div class="img">
            <img src="/images/img_4.svg" />
          </div>
        </div>
        <div class="svg-path">
          <svg
            width="3908"
            height="6187"
            viewBox="0 0 3908 6187"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="stroke-path"
              d="M3607.44 26.947C3422.12 689.207 3410.6 1249.86 1037.44 1196.95C-1335.73 1144.03 4641.01 5936.56 3707.44 3266.95C2773.87 597.336 2175.27 4268.65 837.437 4676.95C-659.945 5265.45 55.3335 5752.07 3607.44 6086.95"
              stroke="#BF6BDB"
              stroke-width="200"
            />
          </svg>
        </div>
      </section>
      <section class="outro">
        <h1>Clearer organization ready for whatever comes next</h1>
      </section>
    </>
  );
}
