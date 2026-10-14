import { apiFetch } from "./apiClient";

/**
 * Spotify Service
 * Maneja la comunicación con el endpoint /api/spotify y retorna un estado estandarizado.
 */

export const SPOTIFY_OFFLINE_STATE = Object.freeze({
  isPlaying: false,
  title: "Offline",
  artist: "Spotify",
  songUrl: "#",
});

/**
 * Consulta la pista de reproducción actual de Spotify.
 * @param {AbortSignal} [signal]
 * @returns {Promise<{ isPlaying: boolean, title: string, artist: string, songUrl: string }>}
 */
export async function fetchSpotifyTrack(signal) {
  const result = await apiFetch("/api/spotify", { signal, timeoutMs: 6000 });

  if (!result.ok || !result.data) {
    return { ...SPOTIFY_OFFLINE_STATE };
  }

  const { isPlaying, title, artist, songUrl } = result.data;
  return {
    isPlaying: Boolean(isPlaying),
    title: title || "Offline",
    artist: artist || "Spotify",
    songUrl: songUrl || "#",
  };
}
