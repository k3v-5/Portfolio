"use client";
import React from "react";
import { useCustomCursor } from "../hooks/useCustomCursor";

export default function CustomCursor() {
  useCustomCursor();

  return (
    <>
      <div id="cursor-dot" />
      <div id="cursor-ring" />
      <div id="cursor-pointer" aria-hidden="true">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_10px_rgba(147,51,234,0.65)]"
        >
          <path
            d="M3 2V21L8 16.5L12.5 24.5L15 23L10.5 15.5H17.5L3 2Z"
            fill="#9333ea"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </>
  );
}
