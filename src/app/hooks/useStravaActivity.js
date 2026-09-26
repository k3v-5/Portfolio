"use client";
import { useEffect, useState } from "react";
import { fetchStravaActivity } from "../services/stravaService";

const INITIAL_STRAVA_DATA = {
  name: "Loading route...",
  pace: "--:--",
  distance: "--",
  time: "--",
  elevation: "--",
  type: "RUN",
};

/**
 * Custom hook to retrieve Strava activity data when enabled.
 *
 * @param {{ enabled?: boolean }} options
 * @returns {{ stravaData: typeof INITIAL_STRAVA_DATA }}
 */
export function useStravaActivity({ enabled = false } = {}) {
  const [stravaData, setStravaData] = useState(INITIAL_STRAVA_DATA);

  useEffect(() => {
    if (!enabled) return;

    let isMounted = true;

    async function loadActivity() {
      const data = await fetchStravaActivity();
      if (isMounted) {
        setStravaData(data);
      }
    }

    loadActivity();

    return () => {
      isMounted = false;
    };
  }, [enabled]);

  return { stravaData };
}
