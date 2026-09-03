"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { marked } from "marked";
import { useLanguage } from "../i18n/LanguageContext";

// Strava requiere plan de pago desde que su API pasó a nivel "Inactive" para
// apps gratuitas — la tarjeta se oculta hasta reactivar la suscripción, pero
// el código queda listo (solo cambiar a `true`) para no rehacerlo.
const STRAVA_ENABLED = false;

export default function SignalLogSection() {
  const { t } = useLanguage();
  const signalLog = t.signalLog;
  const [logs, setLogs] = useState([]);
  const containerRef = useRef(null);
  const tweenRef = useRef(null);
  const [stravaData, setStravaData] = useState({
    name: "Loading route...",
    pace: "--:--",
    distance: "--",
    time: "--",
    elevation: "--",
    type: "RUN",
  });
  const [spotifyData, setSpotifyData] = useState({
    title: "Offline",
    artist: "Spotify",
    isPlaying: false,
    songUrl: "#",
  });

  // 1. Fetch de los archivos Markdown dinámicos
  useEffect(() => {
    async function loadMarkdown() {
      try {
        const res = await fetch("/posts/logs.json");
        if (!res.ok) return;

        const files = await res.json();
        const posts = await Promise.all(
          files.map(async (file) => {
            const mdRes = await fetch(`/posts/${file}`);
            const text = await mdRes.text();
            // Extraer el SIDE_TEXT si existe usando una expresión regular
            const sideTextMatch = text.match(/<!--\s*SIDE_TEXT:\s*(.*?)\s*-->/);
            const sideText = sideTextMatch ? sideTextMatch[1] : null;
            const cleanText = text.replace(
              /<!--\s*SIDE_TEXT:\s*(.*?)\s*-->/,
              "",
            );
            return { id: file, content: marked.parse(cleanText), sideText };
          }),
        );
        setLogs(posts);
      } catch (e) {
        console.log("SIGNAL_LOG_READY: Waiting for /posts/logs.json");
      }
    }
    loadMarkdown();
  }, []);

  // 2. Fetch de datos de Strava (deshabilitado, ver STRAVA_ENABLED)
  useEffect(() => {
    if (!STRAVA_ENABLED) return;
    async function fetchStrava() {
      try {
        const res = await fetch("/api/strava");
        if (res.ok) {
          const data = await res.json();
          setStravaData({
            name: data.name,
            pace: `${data.pace} /km`,
            distance: `${data.distance} km`,
            time: data.time,
            elevation: data.elevation,
            type: data.type.toUpperCase(),
          });
        } else {
          const errorData = await res.json();
          console.error("❌ Error de la API de Strava:", errorData);
          setStravaData({
            name: errorData.error || "No data",
            pace: "--:--",
            distance: "--",
            time: "--",
            elevation: "--",
            type: "N/A",
          });
        }
      } catch (error) {
        console.error("❌ Falló la conexión al endpoint de Strava:", error);
        setStravaData({
          name: "Signal lost",
          pace: "--:--",
          distance: "--",
          time: "--",
          elevation: "--",
          type: "ERR",
        });
      }
    }
    fetchStrava();
  }, []);

  // 3. Fetch de datos de Spotify
  useEffect(() => {
    async function fetchSpotify() {
      try {
        const res = await fetch("/api/spotify");
        if (res.ok) {
          const data = await res.json();
          if (data.isPlaying) {
            setSpotifyData({
              title: data.title,
              artist: data.artist,
              isPlaying: true,
              songUrl: data.songUrl || "#",
            });
          } else {
            setSpotifyData((prev) => ({ ...prev, isPlaying: false }));
          }
        }
      } catch (error) {
        console.error("❌ Error cargando Spotify", error);
      }
    }

    fetchSpotify();
    // Consultar a Spotify cada 1 minuto (60000 ms)
    const interval = setInterval(fetchSpotify, 60000);
    return () => clearInterval(interval);
  }, []);

  // 4. Efecto "Cinta Transportadora" Infinita con GSAP
  useEffect(() => {
    let ctx;
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        tweenRef.current = gsap.to(".marquee-track", {
          xPercent: -50,
          ease: "none",
          duration: 40, // Tiempo de rotación
          repeat: -1,
        });
      }, containerRef);
    }, 150);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, [logs]);

  // Lógica para permitir "empujar" (hacer scrub) las tarjetas con el tacto y el mouse
  const dragState = useRef({ startX: 0, time: 0, isDragging: false });

  const handleTouchStart = (e) => {
    if (!tweenRef.current) return;
    tweenRef.current.pause();
    dragState.current.isDragging = true;
    dragState.current.startX = e.touches[0].clientX;
    dragState.current.time = tweenRef.current.time();
  };

  const handleMouseDown = (e) => {
    if (!tweenRef.current) return;
    tweenRef.current.pause();
    dragState.current.isDragging = true;
    dragState.current.startX = e.clientX;
    dragState.current.time = tweenRef.current.time();
  };

  const handleDragMove = (currentX, currentTarget) => {
    if (!dragState.current.isDragging || !tweenRef.current) return;
    const deltaX = currentX - dragState.current.startX;
    const trackElement = currentTarget;
    const scrollableDistance = trackElement.offsetWidth / 2;

    const fraction = deltaX / scrollableDistance;
    const duration = tweenRef.current.duration();
    const deltaT = fraction * duration;

    let newTime = dragState.current.time - deltaT;
    newTime = newTime % duration;
    if (newTime < 0) newTime += duration;

    tweenRef.current.time(newTime);
  };

  const handleTouchMove = (e) =>
    handleDragMove(e.touches[0].clientX, e.currentTarget);
  const handleMouseMove = (e) => handleDragMove(e.clientX, e.currentTarget);

  const handleTouchEnd = () => {
    dragState.current.isDragging = false;
    if (!tweenRef.current) return;
    tweenRef.current.play();
  };

  const handleMouseUp = () => {
    dragState.current.isDragging = false;
  };

  const handleMouseLeave = () => {
    dragState.current.isDragging = false;
    if (!tweenRef.current) return;
    tweenRef.current.play();
  };

  const renderCards = () => (
    <React.Fragment>
      {/* TARJETA 1: RUNNING STATS (oculta, ver STRAVA_ENABLED) */}
      {STRAVA_ENABLED && (
        <div className="shrink-0 w-[280px] sm:w-[320px] md:w-[400px] bg-white/95 backdrop-blur-[20px] border-2 border-slate-100 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl transition-colors duration-300 flex flex-col justify-between">
          <div>
            <p className="font-mono text-[10px] text-purple-500 mb-4 tracking-widest uppercase">
              {`// [PROCESS_ID: 0x${stravaData.type}]`}
            </p>
            <div className="flex items-center gap-3">
              <h3
                className="text-2xl font-black text-slate-900 uppercase italic truncate"
                title={stravaData.name}
              >
                {stravaData.name}
              </h3>
              <a
                href="https://www.strava.com/athletes/207444772"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform cursor-pointer"
                title="Ver perfil en Strava"
              >
                <svg
                  className="w-6 h-6 text-[#FC4C02] shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 mt-6">
              <div>
                <p className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">
                  Distance
                </p>
                <p className="font-bold text-slate-900 font-mono text-sm">
                  {stravaData.distance}
                </p>
              </div>
              <div>
                <p className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">
                  Avg Pace
                </p>
                <p className="font-bold text-slate-900 font-mono text-sm">
                  {stravaData.pace}
                </p>
              </div>
              <div>
                <p className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">
                  Time
                </p>
                <p className="font-bold text-slate-900 font-mono text-sm">
                  {stravaData.time}
                </p>
              </div>
              <div>
                <p className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">
                  Elevation
                </p>
                <p className="font-bold text-purple-600 font-mono text-sm">
                  {stravaData.elevation}
                </p>
              </div>
            </div>
          </div>
          <svg
            className="w-full h-12 mt-6 overflow-visible"
            viewBox="0 0 100 30"
            preserveAspectRatio="none"
          >
            <path
              d="M0,25 L20,20 L40,22 L60,10 L80,15 L100,5"
              fill="none"
              stroke="#a855f7"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="100"
              cy="5"
              r="4"
              fill="#a855f7"
              className="animate-pulse"
            />
          </svg>
        </div>
      )}

      {/* TARJETA 3: CURRENT VIBE (AUDIO) */}
      <div className="shrink-0 w-[280px] sm:w-[320px] md:w-[400px] bg-white/95 backdrop-blur-[20px] border-2 border-slate-100 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl transition-colors duration-300 flex flex-col justify-between">
        <div>
          <p className="font-mono text-[10px] text-purple-500 mb-4 tracking-widest uppercase">
            {"// [PROCESS_ID: 0xAUDIO]"}
          </p>
          <div className="flex items-center gap-3">
            <h3
              className="text-2xl font-black text-slate-900 uppercase italic truncate"
              title={signalLog.nowPlaying}
            >
              {signalLog.nowPlaying}
            </h3>
            {spotifyData.isPlaying && spotifyData.songUrl !== "#" ? (
              <a
                href={spotifyData.songUrl}
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
          {spotifyData.isPlaying && spotifyData.songUrl !== "#" ? (
            <a
              href={spotifyData.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 font-bold text-sm mt-4 font-mono truncate hover:text-[#1DB954] transition-colors flex items-center gap-2 group"
              title={`Escuchar en Spotify`}
            >
              {spotifyData.title}
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
              title={spotifyData.title}
            >
              {spotifyData.title}
            </p>
          )}
          <p
            className="text-slate-500 text-xs mt-1 font-mono truncate"
            title={spotifyData.artist}
          >
            {spotifyData.artist}
          </p>
        </div>
        <div className="flex items-end justify-between gap-1 h-8 mt-8">
          {[40, 70, 45, 90, 60, 100, 50, 80, 30, 65, 40].map((h, i) => (
            <div
              key={i}
              className={`w-full bg-purple-500 rounded-t-sm origin-bottom transition-all duration-500 ${spotifyData.isPlaying ? "animate-spectrum" : "opacity-30"}`}
              style={{
                height: spotifyData.isPlaying ? `${h}%` : "20%",
                animationDelay: `-${i * 0.15}s`,
                animationDuration: `${0.8 + (i % 3) * 0.2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* TARJETA 4: BOOK CARD */}
      <div className="shrink-0 w-[280px] sm:w-[320px] md:w-[400px] bg-white/95 backdrop-blur-[20px] border-2 border-slate-100 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl transition-colors duration-300 flex flex-col justify-between">
        <div>
          <p className="font-mono text-[10px] text-purple-500 mb-4 tracking-widest uppercase">
            {"// [PROCESS_ID: 0xLIT]"}
          </p>
          <h3 className="text-2xl font-black text-slate-900 uppercase italic leading-none">
            {signalLog.book.title}
          </h3>
          <p className="text-slate-500 text-sm mt-2 font-mono">
            {signalLog.book.author}
          </p>
        </div>
        <div className="mt-8">
          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
            <div className="bg-purple-500 h-full w-[10%] shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
          </div>
          <p className="text-right text-[10px] font-mono text-slate-400 mt-2 font-bold">
            {signalLog.book.progress}
          </p>
        </div>
      </div>

      {/* TARJETAS DINÁMICAS (MARKDOWN) */}
      {logs.map((log) => (
        <div
          key={log.id}
          className="shrink-0 w-[280px] sm:w-[320px] md:w-[400px] bg-white/95 backdrop-blur-[20px] border-2 border-slate-100 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl transition-colors duration-300 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex justify-between gap-4"
        >
          <div className="flex-1">
            <p className="font-mono text-[10px] text-purple-500 mb-6 tracking-widest uppercase">
              {`// [PROCESS_ID: ${log.id.replace(".md", "")}]`}
            </p>
            <div
              className="text-sm font-mono text-slate-600 space-y-4 prose-a:text-purple-500 prose-strong:text-slate-900 prose-headings:font-black prose-headings:italic prose-headings:text-xl"
              dangerouslySetInnerHTML={{ __html: log.content }}
            />
          </div>
          {log.sideText && (
            <div className="font-mono text-purple-300 [writing-mode:vertical-rl] text-xs tracking-widest uppercase rotate-180 opacity-50 flex items-center justify-center shrink-0">
              {log.sideText}
            </div>
          )}
        </div>
      ))}
    </React.Fragment>
  );

  return (
    <section
      id="signal-log"
      ref={containerRef}
      className="flex-col w-full relative z-10 !min-h-0 !pt-8 !pb-2 md:!pt-12 md:!pb-4"
    >
      <div className="container mx-auto px-6 lg:px-12 mb-4 md:mb-8 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left">
        <div>
          <p className="font-mono text-[10px] text-purple-500 mb-4 tracking-widest uppercase">
            {signalLog.module}
          </p>
          <h2 className="text-4xl lg:text-7xl font-black text-slate-900 uppercase italic tracking-tighter">
            {signalLog.heading}
          </h2>
        </div>
      </div>

      {/* Contenedor Cinta Transportadora Infinita (Marquee) */}
      <div className="overflow-hidden w-full !pt-4 !pb-4 md:!pt-6 md:!pb-6 [mask-image:_linear-gradient(to_right,transparent_0,_black_10vw,_black_calc(100%-10vw),transparent_100%)]">
        <div
          className="marquee-track flex w-max gap-4 md:gap-8 cursor-grab active:cursor-grabbing"
          onMouseEnter={() => tweenRef.current?.pause()}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {/* Renderizamos dos veces el mismo bloque de tarjetas para crear el ciclo infinito */}
          <div className="flex gap-4 md:gap-8 items-stretch">
            {renderCards()}
          </div>
          <div className="flex gap-4 md:gap-8 items-stretch">
            {renderCards()}
          </div>
        </div>
      </div>
    </section>
  );
}
