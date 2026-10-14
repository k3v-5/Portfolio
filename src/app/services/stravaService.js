import { apiFetch } from "./apiClient";

/**
 * Strava Service
 * Maneja la comunicación con el endpoint /api/strava y retorna estadísticas formateadas.
 */

export const STRAVA_FALLBACK_STATE = Object.freeze({
  name: "No data",
  pace: "--:--",
  distance: "--",
  time: "--",
  elevation: "--",
  type: "N/A",
});

/**
 * Consulta la última actividad de Strava.
 * @param {AbortSignal} [signal]
 * @returns {Promise<typeof STRAVA_FALLBACK_STATE>}
 */
export async function fetchStravaActivity(signal) {
  const result = await apiFetch("/api/strava", { signal, timeoutMs: 6000 });

  if (!result.ok || !result.data) {
    return {
      ...STRAVA_FALLBACK_STATE,
      name: result.error || "Signal lost",
      type: result.status === 408 ? "TIMEOUT" : "ERR",
    };
  }

  const data = result.data;
  return {
    name: data.name || "Run",
    pace: data.pace ? `${data.pace} /km` : "--:--",
    distance: data.distance ? `${data.distance} km` : "--",
    time: data.time || "--",
    elevation: data.elevation || "--",
    type: (data.type || "RUN").toUpperCase(),
  };
}
