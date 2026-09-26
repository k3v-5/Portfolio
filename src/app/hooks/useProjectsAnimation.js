"use client";
import { useEffect } from "react";
import gsap from "gsap";

/**
 * Custom hook to trigger entrance stagger animation on project cards when filter tag changes.
 *
 * @param {React.RefObject<HTMLElement>} cardsRef
 * @param {string} tagId
 */
export function useProjectsAnimation(cardsRef, tagId) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card-anim",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
      );
    }, cardsRef);
    return () => ctx.revert();
  }, [cardsRef, tagId]);
}
