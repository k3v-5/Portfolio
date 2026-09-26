"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Custom hook to control entrance fade-in, parallax scroll, and floating loop
 * for section 3D visuals.
 *
 * @param {{
 *   containerRef: React.RefObject<HTMLElement>,
 *   imgRef: React.RefObject<HTMLElement>,
 *   direction?: "left" | "right" | "center"
 * }} options
 */
export function useSectionVisualAnimation({ containerRef, imgRef, direction = "right" }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef?.current;
    const img = imgRef?.current;
    if (!container || !img) return;

    const ctx = gsap.context(() => {
      // 1. Entrance fade-in
      gsap.fromTo(
        container,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // 2. Independent scroll parallax
      gsap.to(container, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // 3. Subtle floating loop
      gsap.to(img, {
        y: 18,
        rotation: direction === "left" ? -1.5 : direction === "right" ? 1.5 : 0,
        duration: 4.8 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, imgRef, direction]);
}
