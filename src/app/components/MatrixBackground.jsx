"use client";
import { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    let matrixInterval;
    let handleResize;

    if (canvas) {
      const ctx = canvas.getContext("2d");
      let columns, drops;
      const fontSize = 14;

      handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = canvas.width / fontSize;
        drops = Array(Math.floor(columns)).fill(1);
      };

      handleResize();
      const symbols = "01ΣΔ∫√μλπθΦΨΩαβγ∞≈∑∏".split("");

      const draw = () => {
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#9333EA";
        ctx.font = fontSize + "px 'Fira Code', monospace";
        drops.forEach((y, i) => {
          const text = symbols[Math.floor(Math.random() * symbols.length)];
          ctx.fillText(text, i * fontSize, y * fontSize);
          if (y * fontSize > canvas.height && Math.random() > 0.975)
            drops[i] = 0;
          drops[i]++;
        });
      };

      matrixInterval = setInterval(draw, 80);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      clearInterval(matrixInterval);
      if (handleResize) window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="grain-overlay"></div>
      <canvas id="matrix-canvas" ref={canvasRef}></canvas>
    </>
  );
}
