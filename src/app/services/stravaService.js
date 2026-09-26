/**
 * Strava Service
 * Handles communication with the Strava API route and returns
 * formatted activity statistics.
 */

export async function fetchStravaActivity() {
  try {
    const res = await fetch("/api/strava");
    if (res.ok) {
      const data = await res.json();
      return {
        name: data.name,
        pace: `${data.pace} /km`,
        distance: `${data.distance} km`,
        time: data.time,
        elevation: data.elevation,
        type: (data.type || "RUN").toUpperCase(),
      };
    } else {
      const errorData = await res.json().catch(() => ({}));
      console.error("❌ Error de la API de Strava:", errorData);
      return {
        name: errorData.error || "No data",
        pace: "--:--",
        distance: "--",
        time: "--",
        elevation: "--",
        type: "N/A",
      };
    }
  } catch (error) {
    console.error("❌ Falló la conexión al endpoint de Strava:", error);
    return {
      name: "Signal lost",
      pace: "--:--",
      distance: "--",
      time: "--",
      elevation: "--",
      type: "ERR",
    };
  }
}
