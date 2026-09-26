import React from "react";

/**
 * Strava Activity Card
 * Displays latest athletic activity telemetry.
 *
 * @param {{ data: { name: string, pace: string, distance: string, time: string, elevation: string, type: string } }} props
 */
export default function StravaCard({ data }) {
  return (
    <div className="shrink-0 w-[280px] sm:w-[320px] md:w-[400px] bg-white/95 backdrop-blur-[20px] border-2 border-slate-100 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl transition-colors duration-300 flex flex-col justify-between">
      <div>
        <p className="font-mono text-[10px] text-purple-600 font-bold mb-4 tracking-widest uppercase">
          {`// [PROCESS_ID: 0x${data.type}]`}
        </p>
        <div className="flex items-center gap-3">
          <h3
            className="text-2xl font-black text-slate-900 uppercase italic truncate"
            title={data.name}
          >
            {data.name}
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
              {data.distance}
            </p>
          </div>
          <div>
            <p className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">
              Avg Pace
            </p>
            <p className="font-bold text-slate-900 font-mono text-sm">
              {data.pace}
            </p>
          </div>
          <div>
            <p className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">
              Time
            </p>
            <p className="font-bold text-slate-900 font-mono text-sm">
              {data.time}
            </p>
          </div>
          <div>
            <p className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">
              Elevation
            </p>
            <p className="font-bold text-purple-600 font-mono text-sm">
              {data.elevation}
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
  );
}
