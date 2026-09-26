import React from "react";

const SPECTRUM_BARS = [40, 70, 45, 90, 60, 100, 50, 80, 30, 65, 40];

/**
 * Spotify Now Playing Card
 * Displays real-time audio playback status and animated spectrum.
 *
 * @param {{
 *   data: { isPlaying: boolean, title: string, artist: string, songUrl: string },
 *   heading: string
 * }} props
 */
export default function SpotifyCard({ data, heading, offlineLabel = "Offline" }) {
  const isPlaying = Boolean(data?.isPlaying);
  const hasUrl = Boolean(data?.songUrl && data.songUrl !== "#");
  const displayTitle = isPlaying
    ? (data?.title || "Spotify")
    : (data?.title === "Offline" || !data?.title ? offlineLabel : data.title);

  return (
    <div className="shrink-0 w-[280px] sm:w-[320px] md:w-[400px] bg-white/95 backdrop-blur-[20px] border-2 border-slate-100 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl transition-colors duration-300 flex flex-col justify-between">
      <div>
        <p className="font-mono text-[10px] text-purple-600 font-bold mb-4 tracking-widest uppercase">
          {"// [PROCESS_ID: 0xAUDIO]"}
        </p>
        <div className="flex items-center gap-3">
          <h3
            className="text-2xl font-black text-slate-900 uppercase italic truncate"
            title={heading}
          >
            {heading}
          </h3>
          {hasUrl ? (
            <a
              href={data.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform cursor-pointer"
              title="Escuchar en Spotify"
            >
              <svg
                className="w-6 h-6 text-[#1DB954] shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.394-.756.522-1.151.282-3.153-1.928-7.116-2.364-11.785-1.295-.453.104-.915-.178-1.019-.632-.104-.453.178-.915.632-1.019 5.093-1.166 9.475-.68 13.042 1.509.394.24.522.756.281 1.155zm1.436-3.197c-.302.492-.952.651-1.444.349-3.58-2.198-9.055-2.75-12.871-1.507-.563.183-1.171-.125-1.354-.688-.183-.563.125-1.171.688-1.354 4.364-1.419 10.395-.811 14.632 1.751.492.302.651.952.349 1.449zm.135-3.375C15.068 8.441 8.75 8.225 5.09 9.336c-.669.204-1.376-.173-1.58-.842-.204-.669.173-1.376.842-1.58 4.204-1.28 11.168-1.034 15.823 1.734.586.347.784 1.101.437 1.687-.347.586-1.101.784-1.687.433z" />
              </svg>
            </a>
          ) : (
            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform cursor-pointer"
            >
              <svg
                className="w-6 h-6 text-[#1DB954] shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.394-.756.522-1.151.282-3.153-1.928-7.116-2.364-11.785-1.295-.453.104-.915-.178-1.019-.632-.104-.453.178-.915.632-1.019 5.093-1.166 9.475-.68 13.042 1.509.394.24.522.756.281 1.155zm1.436-3.197c-.302.492-.952.651-1.444.349-3.58-2.198-9.055-2.75-12.871-1.507-.563.183-1.171-.125-1.354-.688-.183-.563.125-1.171.688-1.354 4.364-1.419 10.395-.811 14.632 1.751.492.302.651.952.349 1.449zm.135-3.375C15.068 8.441 8.75 8.225 5.09 9.336c-.669.204-1.376-.173-1.58-.842-.204-.669.173-1.376.842-1.58 4.204-1.28 11.168-1.034 15.823 1.734.586.347.784 1.101.437 1.687-.347.586-1.101.784-1.687.433z" />
              </svg>
            </a>
          )}
        </div>
        {hasUrl ? (
          <a
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-900 font-bold text-sm mt-4 font-mono truncate hover:text-[#1DB954] transition-colors flex items-center gap-2 group"
            title="Escuchar en Spotify"
          >
            {displayTitle}
            <svg
              className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </a>
        ) : (
          <p
            className="text-slate-900 font-bold text-sm mt-4 font-mono truncate"
            title={displayTitle}
          >
            {displayTitle}
          </p>
        )}
        <p
          className="text-slate-500 text-xs mt-1 font-mono truncate"
          title={data.artist}
        >
          {data.artist}
        </p>
      </div>
      <div className="flex items-end justify-between gap-1 h-8 mt-8">
        {SPECTRUM_BARS.map((h, i) => (
          <div
            key={i}
            className={`w-full bg-purple-500 rounded-t-sm origin-bottom transition-all duration-500 ${isPlaying ? "animate-spectrum" : "opacity-30"}`}
            style={{
              height: isPlaying ? `${h}%` : "20%",
              animationDelay: `-${i * 0.15}s`,
              animationDuration: `${0.8 + (i % 3) * 0.2}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
