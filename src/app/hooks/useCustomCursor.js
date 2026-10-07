"use client";
import { useEffect } from "react";
import gsap from "gsap";

/**
 * Custom hook to manage cursor behaviors:
 * 1. Default content: Displays dot (#cursor-dot) and trailing ring (#cursor-ring).
 * 2. Over buttons/links/interactives: Transforms into a solid purple pointer (#cursor-pointer)
 *    and completely hides browser native pointer.
 * 3. Over skill tags/icons: Completely hides cursor elements so icons are unobstructed.
 */
export function useCustomCursor() {
  useEffect(() => {
    // Only skip on actual touch-only mobile devices
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;

    const dot = document.querySelector("#cursor-dot");
    const ring = document.querySelector("#cursor-ring");
    const pointer = document.querySelector("#cursor-pointer");

    if (!dot || !ring || !pointer) return;

    let mouseX = -100;
    let mouseY = -100;
    let isHoveringButton = false;
    let isHoveringIcon = false;
    let isMouseDown = false;
    let isInsideWindow = false;

    // Smooth ring trailing with GSAP quickTo
    const xMoveRing = gsap.quickTo(ring, "x", {
      duration: 0.22,
      ease: "power2.out",
    });
    const yMoveRing = gsap.quickTo(ring, "y", {
      duration: 0.22,
      ease: "power2.out",
    });

    const checkTargetType = (target) => {
      if (!target || !(target instanceof Element)) {
        return { isButton: false, isIcon: false };
      }

      // Check if hovering skill tags or icons
      const isIcon = !!target.closest(
        ".skill-tag, [data-skill-tag], .skill-icon, .icon-container"
      );

      // Check if hovering buttons, links, or interactive controls (excluding skill tags)
      const isButton =
        !isIcon &&
        !!target.closest(
          "button, a, [role='button'], input[type='submit'], input[type='button'], select, .cursor-pointer, summary, [data-cursor='pointer']"
        );

      return { isButton, isIcon };
    };

    const updateVisibility = () => {
      if (!isInsideWindow) {
        dot.style.opacity = "0";
        ring.style.opacity = "0";
        pointer.style.opacity = "0";
        return;
      }

      if (isHoveringIcon) {
        // Quitar el cursor sobre los iconos para que se vean mejor
        dot.style.opacity = "0";
        ring.style.opacity = "0";
        pointer.style.opacity = "0";
      } else if (isHoveringButton) {
        // Mostrar puntero morado sólido sobre botones
        dot.style.opacity = "0";
        ring.style.opacity = "0";
        pointer.style.opacity = "1";
      } else {
        // Cursor normal (punto y anillo)
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        pointer.style.opacity = "0";
      }
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isInsideWindow) {
        isInsideWindow = true;
      }

      // 1. Move dot (instant hardware transform)
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

      // 2. Move pointer (instant hardware transform, tip at SVG (3, 2))
      const scale = isMouseDown ? 0.88 : 1;
      pointer.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 2}px, 0) scale(${scale})`;

      // 3. Move ring (smooth GSAP lag)
      xMoveRing(mouseX);
      yMoveRing(mouseY);

      // 4. Update element hover detection
      const { isButton, isIcon } = checkTargetType(e.target);
      if (isButton !== isHoveringButton || isIcon !== isHoveringIcon) {
        isHoveringButton = isButton;
        isHoveringIcon = isIcon;
        updateVisibility();
      }
    };

    const handleMouseDown = () => {
      isMouseDown = true;
      if (isHoveringButton) {
        pointer.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 2}px, 0) scale(0.88)`;
      } else {
        gsap.to(ring, { scale: 0.75, duration: 0.1, overwrite: "auto" });
      }
    };

    const handleMouseUp = () => {
      isMouseDown = false;
      if (isHoveringButton) {
        pointer.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 2}px, 0) scale(1)`;
      } else {
        gsap.to(ring, { scale: 1, duration: 0.15, overwrite: "auto" });
      }
    };

    const handleMouseLeave = () => {
      isInsideWindow = false;
      updateVisibility();
    };

    const handleMouseEnter = () => {
      isInsideWindow = true;
      updateVisibility();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      gsap.killTweensOf(ring);
    };
  }, []);
}
