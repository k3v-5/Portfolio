"use client";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Custom hook for writing text to the clipboard with feedback status and auto-reset.
 *
 * @param {number} timeout - Delay in ms before resetting copied state (default: 2000ms)
 * @returns {{ copied: boolean, copy: (text: string) => Promise<boolean> }}
 */
export function useClipboardCopy(timeout = 2000) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  const copy = useCallback(
    async (text) => {
      if (typeof window === "undefined" || !navigator.clipboard) return false;
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);

        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
          setCopied(false);
        }, timeout);

        return true;
      } catch (err) {
        console.error("Failed to copy text: ", err);
        return false;
      }
    },
    [timeout],
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return { copied, copy };
}
