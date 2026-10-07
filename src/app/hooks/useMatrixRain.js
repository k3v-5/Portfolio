"use client";
import { useEffect } from "react";

/**
 * Custom hook to manage Matrix rain digital rain effect on an HTML5 canvas.
 *
 * @param {React.RefObject<HTMLCanvasElement>} canvasRef
 */
export function useMatrixRain(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let lastTime = 0;
    const intervalMs = 80;
    const fontSize = 14;
    let columns = 0;
    let drops = [];

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = canvas.width / fontSize;
      drops = Array(Math.floor(columns)).fill(1);
    };

    handleResize();
    const symbols = "01ΣΔ∫√μλπθΦΨΩαβγ∞≈∑∏".split("");

    const drawFrame = () => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#9333EA";
      ctx.font = fontSize + "px 'Fira Code', monospace";
      drops.forEach((y, i) => {
        const text = symbols[Math.floor(Math.random() * symbols.length)];
        ctx.fillText(text, i * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    if (prefersReducedMotion) {
      drawFrame();
      return;
    }

    const loop = (timestamp) => {
      if (document.hidden) {
        animId = requestAnimationFrame(loop);
        return;
      }

      if (timestamp - lastTime >= intervalMs) {
        lastTime = timestamp;
        drawFrame();
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    let resizeTimeout;
    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", onResize);
    };
  }, [canvasRef]);
}
