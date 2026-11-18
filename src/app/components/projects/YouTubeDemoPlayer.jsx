"use client";
import React, { useMemo } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

/**
 * Converts various YouTube URL formats to an embed URL.
 * Supports standard watch URLs with playlist, pure playlists, youtu.be, and direct IDs.
 *
 * @param {string} urlOrId
 * @returns {string|null}
 */
function getYouTubeEmbedUrl(urlOrId) {
  if (!urlOrId || typeof urlOrId !== "string") return null;

  if (
    urlOrId.includes("youtube.com/embed/") ||
    urlOrId.includes("youtube-nocookie.com/embed/")
  ) {
    return urlOrId;
  }

  try {
    const parsed = new URL(urlOrId);
    const videoId = parsed.searchParams.get("v");
    const listId = parsed.searchParams.get("list");

    if (videoId && listId) {
      return `https://www.youtube-nocookie.com/embed/${videoId}?list=${listId}`;
    }
    if (listId && !videoId) {
      return `https://www.youtube-nocookie.com/embed/videoseries?list=${listId}`;
    }
    if (videoId) {
      return `https://www.youtube-nocookie.com/embed/${videoId}`;
    }

    // Handle youtu.be/<id>?list=...
    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.replace(/^\//, "");
      const list = parsed.searchParams.get("list");
      return list
        ? `https://www.youtube-nocookie.com/embed/${id}?list=${list}`
        : `https://www.youtube-nocookie.com/embed/${id}`;
    }
  } catch {
    // If a raw video ID was provided
    if (/^[a-zA-Z0-9_-]{11}$/.test(urlOrId.trim())) {
      return `https://www.youtube-nocookie.com/embed/${urlOrId.trim()}`;
    }
  }

  return null;
}

/**
 * YouTube Demo Player
 * Compact, responsive YouTube demo player for albums, playlists, and project showcases.
 * Supports rendering either as a full-bleed embedded card slot or a standalone framed box.
 *
 * @param {{
 *   url: string,
 *   label?: string,
 *   openLabel?: string,
 *   embeddedSlot?: boolean
 * }} props
 */
export default function YouTubeDemoPlayer({
  url,
  label = "Demo en YouTube // Playlist",
  openLabel = "Abrir en YouTube",
  embeddedSlot = false,
}) {
  const embedUrl = useMemo(() => getYouTubeEmbedUrl(url), [url]);

  if (!embedUrl) return null;

  if (embeddedSlot) {
    return (
      <div className="w-full h-full bg-black relative">
        <iframe
          src={embedUrl}
          title={label || "YouTube video player"}
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="mt-5 w-full bg-slate-900/90 text-white rounded-2xl p-3 sm:p-4 border border-purple-500/20 backdrop-blur-md shadow-inner relative overflow-hidden">
      {/* Header con branding de YouTube, título y enlace externo */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 min-w-0">
          <div
            className="w-6 h-6 rounded-lg bg-red-600/95 flex items-center justify-center shrink-0 shadow-sm"
            aria-hidden="true"
          >
            <svg
              className="w-3.5 h-3.5 fill-white"
              viewBox="0 0 24 24"
              role="img"
              aria-label="YouTube"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-purple-300 truncate">
            {label}
          </span>
        </div>

        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-slate-400 hover:text-white transition-colors shrink-0 hover:underline"
            title={openLabel}
          >
            <span>{openLabel}</span>
            <ArrowTopRightOnSquareIcon className="w-3 h-3 shrink-0" />
          </a>
        )}
      </div>

      {/* Contenedor del reproductor de video en formato 16:9 */}
      <div className="w-full aspect-video rounded-xl overflow-hidden border border-slate-800 bg-black shadow-md">
        <iframe
          src={embedUrl}
          title={label || "YouTube video player"}
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
