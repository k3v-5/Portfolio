import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // Evita que Next.js guarde la respuesta vacía en caché

export async function GET() {
  const clientId = process.env.STRAVA_CLIENT_ID;
  const clientSecret = process.env.STRAVA_CLIENT_SECRET;
  const refreshToken = process.env.STRAVA_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    return NextResponse.json(
      { error: "Faltan variables de entorno de Strava" },
      { status: 400 },
    );
  }

  try {
    // 1. Solicitar un nuevo Access Token usando el Refresh Token
    const tokenResponse = await fetch("https://www.strava.com/oauth/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        grant_type: "refresh_token",
      }),
      cache: "no-store",
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok || !tokenData.access_token) {
      console.error(
        "❌ Strava rechazó el refresh token:",
        tokenResponse.status,
        tokenData,
      );
      return NextResponse.json(
        { error: "No se pudo autenticar con Strava" },
        { status: 502 },
      );
    }

    const accessToken = tokenData.access_token;

    // 2. Obtener la última actividad del atleta
    const activitiesResponse = await fetch(
      "https://www.strava.com/api/v3/athlete/activities?per_page=1",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        cache: "no-store",
      },
    );

    const activities = await activitiesResponse.json();

    // Imprimir la respuesta de Strava en la terminal
    console.log("Respuesta cruda de Strava:", activities);

    if (!activitiesResponse.ok || !Array.isArray(activities)) {
      // Strava devolvió un error (auth, permisos, rate limit, app inactiva, etc.)
      // en vez de una lista de actividades — no lo confundamos con "sin actividades".
      console.error(
        "❌ Strava devolvió un error en vez de actividades:",
        activitiesResponse.status,
        activities,
      );
      return NextResponse.json(
        { error: "Strava no devolvió actividades (ver logs del servidor)" },
        { status: 502 },
      );
    }

    if (activities.length > 0) {
      const lastActivity = activities[0];

      // Calcular ritmo promedio (min/km) a partir de m/s
      const speedMps = lastActivity.average_speed;
      let paceStr = "0:00";
      if (speedMps > 0) {
        const paceSecondsPerKm = 1000 / speedMps;
        const minutes = Math.floor(paceSecondsPerKm / 60);
        const seconds = Math.floor(paceSecondsPerKm % 60);
        paceStr = `${minutes}:${seconds.toString().padStart(2, "0")}`;
      }

      // Convertir distancia de metros a kilómetros
      const distanceKm = (lastActivity.distance / 1000).toFixed(2);

      // Calcular tiempo de movimiento
      const timeSeconds = lastActivity.moving_time || 0;
      const hrs = Math.floor(timeSeconds / 3600);
      const mins = Math.floor((timeSeconds % 3600) / 60);
      const timeStr =
        hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m ${timeSeconds % 60}s`;

      // Elevación ganada
      const elevation = lastActivity.total_elevation_gain || 0;

      return NextResponse.json({
        name: lastActivity.name,
        distance: distanceKm,
        pace: paceStr,
        time: timeStr,
        elevation: `${elevation}m`,
        type: lastActivity.type || "Run",
      });
    }
    console.warn("⚠️ No se encontraron actividades en la cuenta.");
    return NextResponse.json(
      { error: "No se encontraron actividades" },
      { status: 404 },
    );
  } catch (error) {
    console.error("❌ ERROR CRÍTICO EN API:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 },
    );
  }
}
