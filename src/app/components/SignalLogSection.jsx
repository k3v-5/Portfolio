"use client";
import React, { useRef } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useSignalLogs } from "../hooks/useSignalLogs";
import { useStravaActivity } from "../hooks/useStravaActivity";
import { useSpotifyTrack } from "../hooks/useSpotifyTrack";
import { useMarquee } from "../hooks/useMarquee";
import StravaCard from "./signal-log/StravaCard";
import SpotifyCard from "./signal-log/SpotifyCard";
import BookCard from "./signal-log/BookCard";
import SignalLogCard from "./signal-log/SignalLogCard";

// Strava requiere plan de pago desde que su API pasó a nivel "Inactive" para
// apps gratuitas — la tarjeta se oculta hasta reactivar la suscripción, pero
// el código queda listo (solo cambiar a `true`) para no rehacerlo.
const STRAVA_ENABLED = false;

export default function SignalLogSection() {
  const { t } = useLanguage();
  const signalLog = t.signalLog;
  const containerRef = useRef(null);

  const { logs } = useSignalLogs();
  const { stravaData } = useStravaActivity({ enabled: STRAVA_ENABLED });
  const { spotifyData } = useSpotifyTrack();
  const { dragHandlers } = useMarquee({ containerRef, dependency: logs });

  const renderCards = () => (
    <React.Fragment>
      {STRAVA_ENABLED && <StravaCard data={stravaData} />}
      <SpotifyCard
        data={spotifyData}
        heading={signalLog.nowPlaying}
        offlineLabel={signalLog.offline}
      />
      <BookCard book={signalLog.book} />
      {logs.map((log) => (
        <SignalLogCard key={log.id} log={log} />
      ))}
    </React.Fragment>
  );

  return (
    <section
      id="signal-log"
      ref={containerRef}
      className="flex-col w-full relative z-10 !min-h-0 !pt-8 !pb-2 md:!pt-12 md:!pb-4"
    >
      <div className="container mx-auto px-6 lg:px-12 mb-4 md:mb-8 flex flex-col justify-center items-center text-center">
        <div>
          <p className="font-mono text-[10px] text-purple-600 font-bold mb-4 tracking-widest uppercase">
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
          className="marquee-track flex w-max gap-4 md:gap-8 cursor-grab active:cursor-grabbing touch-pan-y"
          {...dragHandlers}
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
