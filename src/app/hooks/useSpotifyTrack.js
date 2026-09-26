"use client";
import { useEffect, useState } from "react";
import { fetchSpotifyTrack } from "../services/spotifyService";

const INITIAL_SPOTIFY_DATA = {
  title: "Offline",
  artist: "Spotify",
  isPlaying: false,
  songUrl: "#",
};

/**
 * Custom hook to poll and manage current Spotify playback status.
 *
 * @param {number} pollInterval - Polling interval in ms (default: 60000ms / 1 min)
 * @returns {{ spotifyData: { title: string, artist: string, isPlaying: boolean, songUrl: string } }}
 */
export function useSpotifyTrack(pollInterval = 60000) {
  const [spotifyData, setSpotifyData] = useState(INITIAL_SPOTIFY_DATA);

  useEffect(() => {
    let isMounted = true;

    async function loadTrack() {
      if (document.hidden) return;
      const data = await fetchSpotifyTrack();
      if (!isMounted) return;

      if (data.isPlaying) {
        setSpotifyData({
          title: data.title,
          artist: data.artist,
          isPlaying: true,
          songUrl: data.songUrl || "#",
        });
      } else {
        setSpotifyData({
          title: data.title || "Offline",
          artist: data.artist || "Spotify",
          isPlaying: false,
          songUrl: data.songUrl || "#",
        });
      }
    }

    loadTrack();
    const interval = setInterval(loadTrack, pollInterval);

    const onVisibilityChange = () => {
      if (!document.hidden) loadTrack();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      isMounted = false;
      clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [pollInterval]);

  return { spotifyData };
}
