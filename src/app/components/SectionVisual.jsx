"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useSectionVisualAnimation } from "../hooks/useSectionVisualAnimation";

export default function SectionVisual({
  src,
  alt = "Portfolio 3D visual",
  direction = "right", // "left" | "right" | "center"
  standalone = false,
  priority = false,
  className = "",
}) {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useSectionVisualAnimation({ containerRef, imgRef, direction });

  return (
    <div
      ref={containerRef}
      className={`relative z-10 flex items-center justify-center w-full select-none pointer-events-none transition-all ${
        standalone
          ? "py-8 md:py-14 max-w-lg md:max-w-xl lg:max-w-2xl mx-auto"
          : "max-w-md lg:max-w-lg mx-auto"
      } ${className}`}
    >
      <div className="relative z-10 w-full flex items-center justify-center px-4">
        {/* Glow de acento morado sutil de fondo */}
        <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full scale-75 -z-10" />
        <Image
          ref={imgRef}
          src={src}
          alt={alt}
          width={720}
          height={720}
          priority={priority}
          className="w-full h-auto object-contain max-h-[360px] md:max-h-[460px] lg:max-h-[540px] drop-shadow-[0_20px_50px_rgba(185,91,216,0.18)] will-change-transform relative z-10"
        />
      </div>
    </div>
  );
}
