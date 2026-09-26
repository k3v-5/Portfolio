"use client";
import { useEffect, useState } from "react";
import { fetchSignalLogs } from "../services/signalLogService";

/**
 * Custom hook to fetch dynamic signal logs and rendered Markdown.
 *
 * @returns {{ logs: Array<{ id: string, content: string, sideText: string | null }>, loading: boolean }}
 */
export function useSignalLogs() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadLogs() {
      const posts = await fetchSignalLogs();
      if (isMounted) {
        setLogs(posts);
        setLoading(false);
      }
    }

    loadLogs();

    return () => {
      isMounted = false;
    };
  }, []);

  return { logs, loading };
}
