"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  useEffect(() => {
    const dot = document.querySelector("#cursor-dot");
    const ring = document.querySelector("#cursor-ring");

    const xMoveDot = gsap.quickTo(dot, "x", { duration: 0 });
    const yMoveDot = gsap.quickTo(dot, "y", { duration: 0 });
    const xMoveRing = gsap.quickTo(ring, "x", {
      duration: 0.3,
      ease: "power2.out",
    });
    const yMoveRing = gsap.quickTo(ring, "y", {
      duration: 0.3,
      ease: "power2.out",
    });

    const handleMouseMove = (e) => {
      if (dot && ring) {
        xMoveDot(e.clientX);
        yMoveDot(e.clientY);
        xMoveRing(e.clientX);
        yMoveRing(e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div id="cursor-dot"></div>
      <div id="cursor-ring"></div>
    </>
  );
}
