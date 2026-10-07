"use client";
import React, { useState, useRef, useEffect } from "react";
import { SpeakerWaveIcon, PlayIcon, PauseIcon } from "@heroicons/react/24/solid";

/**
 * Audio Demo Player
 * Component to preview generative audio snippets for AbletonEngine & N8Effect.
 *
 * @param {{
 *   src: string,
 *   label?: string,
 *   fallbackNote?: string
 * }} props
 */
export default function AudioDemoPlayer({
  src,
  label = "Audio Output Preview",
  fallbackNote = "Coloca tu archivo MP3 en public/audio/",
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [fileMissing, setFileMissing] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      if (audio.duration) {
        setCurrentTime(audio.currentTime);
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setFileMissing(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    const handleError = () => {
      setFileMissing(true);
      setIsPlaying(false);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
    };
  }, [src]);

  const togglePlay = () => {
    if (fileMissing) {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3500);
      return;
    }

    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setFileMissing(true);
          setShowTooltip(true);
          setTimeout(() => setShowTooltip(false), 3500);
        });
    }
  };

  const handleSeek = (e) => {
    if (fileMissing || !duration) return;
    const audio = audioRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(1, clickX / rect.width));
    if (audio) {
      audio.currentTime = newProgress * duration;
      setProgress(newProgress * 100);
    }
  };

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds) || timeInSeconds <= 0) return "0:00";
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="mt-5 w-full bg-slate-900/90 text-white rounded-2xl p-4 border border-purple-500/20 backdrop-blur-md shadow-inner relative overflow-hidden">
      <audio ref={audioRef} src={src} preload="metadata" />

      <div className="flex items-center justify-between gap-3 mb-2.5">
        <div className="flex items-center gap-2">
          <SpeakerWaveIcon className="w-4 h-4 text-purple-400 shrink-0" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-purple-300">
            {label}
          </span>
        </div>

        {/* Visualizador de Barras de Espectro de Audio */}
        <div className="flex items-end gap-1 h-3.5 px-2">
          {[0.1, 0.4, 0.2, 0.5, 0.3].map((delay, idx) => (
            <span
              key={idx}
              className={`w-1 bg-gradient-to-t from-purple-500 to-fuchsia-400 rounded-full transition-all duration-300 ${
                isPlaying ? "animate-spectrum" : "h-1.5 opacity-40"
              }`}
              style={{
                animationDelay: `${delay}s`,
                height: isPlaying ? undefined : "4px",
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Botón Play / Pause */}
        <button
          type="button"
          onClick={togglePlay}
          className="w-9 h-9 rounded-full bg-purple-600 hover:bg-purple-500 active:scale-95 text-white flex items-center justify-center shrink-0 transition-transform shadow-md hover:shadow-purple-500/30"
          title={isPlaying ? "Pausar" : "Reproducir demo"}
          aria-label={isPlaying ? "Pausar audio" : "Reproducir audio"}
        >
          {isPlaying ? (
            <PauseIcon className="w-4 h-4" />
          ) : (
            <PlayIcon className="w-4 h-4 ml-0.5" />
          )}
        </button>

        {/* Barra de progreso interactiva */}
        <div className="flex-1 flex flex-col gap-1">
          <div
            onClick={handleSeek}
            className="w-full h-2 bg-slate-800 rounded-full overflow-hidden cursor-pointer relative group"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-400 rounded-full transition-[width] duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[9px] font-mono text-slate-400">
            <span>{formatTime(currentTime)}</span>
            <span>{duration ? formatTime(duration) : "--:--"}</span>
          </div>
        </div>
      </div>

      {/* Notificación si el archivo de audio aún no se ha colocado */}
      {showTooltip && (
        <div className="absolute inset-x-2 bottom-2 bg-purple-950/95 border border-purple-400/40 text-purple-200 text-[10px] font-mono px-3 py-2 rounded-xl text-center backdrop-blur-md transition-all shadow-lg">
          ℹ️ {fallbackNote}:{" "}
          <span className="text-white font-bold">{src.replace("/audio/", "")}</span>
        </div>
      )}
    </div>
  );
}
