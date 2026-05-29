"use client";

import { X } from "lucide-react";
import { AgentTool, AgentType } from "@/types/agent";
import { useOpenPanel } from "@openpanel/nextjs";
import { analyticsEvents } from "@/lib/analytics";

interface ClearFiltersButtonProps {
  searchQuery: string;
  selectedTool: AgentTool | "all";
  selectedType: AgentType | "all";
  resultsCount?: number;
  onClear: () => void;
}

export function ClearFiltersButton({
  searchQuery,
  selectedTool,
  selectedType,
  resultsCount = 0,
  onClear,
}: ClearFiltersButtonProps) {
  const { track } = useOpenPanel();

  // Count active filters
  const activeFiltersCount = [
    searchQuery.trim() !== "",
    selectedTool !== "all",
    selectedType !== "all",
  ].filter(Boolean).length;

  // Only show if there are 2+ active filters
  if (activeFiltersCount < 2) return null;

  const handleClear = () => {
    // Track filters cleared
    const [eventName, data] = analyticsEvents.filtersCleared({
      had_query: searchQuery.trim() !== "",
      had_tool_filter: selectedTool !== "all",
      had_type_filter: selectedType !== "all",
      results_count_before: resultsCount,
    });

    track(eventName, data);

    // Clear the filters
    onClear();
  };

  return (
    <button
      onClick={handleClear}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all border border-white/10 hover:border-white/20"
      aria-label="Clear all filters"
    >
      <X className="w-4 h-4" />
      <span className="hidden sm:inline">Clear all filters</span>
      <span className="sm:hidden">Clear</span>
      <span className="px-1.5 py-0.5 bg-white/10 rounded text-xs font-mono">
        {activeFiltersCount}
      </span>
    </button>
  );
}
