/**
 * Spotify Service
 * Handles communication with the Spotify API route and returns
 * standardized playback state.
 */

export async function fetchSpotifyTrack() {
  try {
    const res = await fetch("/api/spotify");
    if (!res.ok) {
      return {
        isPlaying: false,
        title: "Offline",
        artist: "Spotify",
        songUrl: "#",
      };
    }

    const data = await res.json();
    if (data.isPlaying) {
      return {
        isPlaying: true,
        title: data.title || "Offline",
        artist: data.artist || "Spotify",
        songUrl: data.songUrl || "#",
      };
    }

    return {
      isPlaying: false,
      title: data.title || "Offline",
      artist: data.artist || "Spotify",
      songUrl: data.songUrl || "#",
    };
  } catch (error) {
    console.error("❌ Error cargando Spotify", error);
    return {
      isPlaying: false,
      title: "Offline",
      artist: "Spotify",
      songUrl: "#",
    };
  }
}
