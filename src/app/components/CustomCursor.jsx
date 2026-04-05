"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  useEffect(() => {
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
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div id="cursor-dot"></div>
      <div id="cursor-ring"></div>
    </>
  );
}
