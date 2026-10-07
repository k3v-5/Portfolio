import React from "react";

/**
 * Project Filters Component
 * Tab navigation for filtering projects by domain tag.
 *
 * @param {{
 *   filterIds: string[],
 *   activeTagId: string,
 *   onSelectTag: (id: string) => void,
 *   filters: Record<string, string>
 * }} props
 */
export default function ProjectFilters({
  filterIds,
  activeTagId,
  onSelectTag,
  filters,
}) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 py-6 mb-8 w-full">
      {filterIds.map((id) => (
        <button
          key={id}
          onClick={() => onSelectTag(id)}
          className={`${
            activeTagId === id
              ? "bg-slate-900 text-white dark:bg-purple-600 dark:text-white"
              : "bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
          } rounded-full px-6 py-2.5 text-xs font-bold font-mono uppercase tracking-widest transition-all shadow-sm`}
        >
          {filters[id]}
        </button>
      ))}
    </div>
  );
}
