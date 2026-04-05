import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    return NextResponse.json({ isPlaying: false, error: "Missing env vars" });
  }

  try {
    const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

    // 1. Obtener un nuevo Access Token
    const tokenResponse = await fetch(
      "https://accounts.spotify.com/api/token",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${basic}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: refreshToken,
        }),
        cache: "no-store",
      },
    );

    const tokenData = await tokenResponse.json();
    if (!tokenResponse.ok) return NextResponse.json({ isPlaying: false });

    // 2. Consultar qué se está reproduciendo
    const nowPlayingResponse = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: { Authorization: `Bearer ${tokenData.access_token}` },
        cache: "no-store",
      },
    );

    // 204 significa que no hay nada reproduciéndose
    if (nowPlayingResponse.status === 204 || nowPlayingResponse.status > 400) {
      return NextResponse.json({ isPlaying: false });
    }

    const song = await nowPlayingResponse.json();
    if (!song || !song.item) return NextResponse.json({ isPlaying: false });

    return NextResponse.json({
      isPlaying: song.is_playing,
      title: song.item.name,
      artist: song.item.artists.map((artist) => artist.name).join(", "),
    });
  } catch (error) {
    return NextResponse.json({ isPlaying: false, error: "Server error" });
  }
}
