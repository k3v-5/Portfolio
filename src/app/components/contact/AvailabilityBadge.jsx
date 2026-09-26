import React from "react";

/**
 * Availability Badge
 * Displays current availability indicator with pulsing green light.
 *
 * @param {{ badge: string }} props
 */
export default function AvailabilityBadge({ badge }) {
  return (
    <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center space-x-1.5 md:space-x-2 bg-green-500/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-green-500/20">
      <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
      <span className="text-[8px] md:text-[10px] font-mono text-green-600 font-bold uppercase tracking-wider">
        {badge}
      </span>
    </div>
  );
}
