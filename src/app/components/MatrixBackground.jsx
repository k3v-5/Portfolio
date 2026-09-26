"use client";
import { useRef } from "react";
import { useMatrixRain } from "../hooks/useMatrixRain";

export default function MatrixBackground() {
  const canvasRef = useRef(null);
  useMatrixRain(canvasRef);

  return (
    <>
      <div className="grain-overlay"></div>
      <canvas id="matrix-canvas" ref={canvasRef}></canvas>
    </>
  );
}
