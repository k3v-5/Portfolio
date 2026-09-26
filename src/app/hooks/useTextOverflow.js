"use client";
import { useEffect, useState } from "react";

/**
 * Custom hook to detect line-clamp overflow across dynamic text elements.
 *
 * @param {React.MutableRefObject<Record<string | number, HTMLElement | null>>} refsMap
 * @param {Array<any>} deps
 * @returns {Record<string | number, boolean>} Map of element IDs to boolean indicating if overflowing
 */
export function useTextOverflow(refsMap, deps = []) {
  const [overflowingIds, setOverflowingIds] = useState({});

  useEffect(() => {
    const checkOverflow = () => {
      if (!refsMap.current) return;
      const next = {};
      Object.entries(refsMap.current).forEach(([id, el]) => {
        if (el) {
          const wasClamped = el.classList.contains("line-clamp-3");
          if (!wasClamped) {
            el.classList.add("line-clamp-3");
          }
          next[id] = el.scrollHeight > el.clientHeight + 1;
          if (!wasClamped) {
            el.classList.remove("line-clamp-3");
          }
        }
      });
      setOverflowingIds(next);
    };

    const raf = requestAnimationFrame(checkOverflow);
    window.addEventListener("resize", checkOverflow);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", checkOverflow);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return overflowingIds;
}
