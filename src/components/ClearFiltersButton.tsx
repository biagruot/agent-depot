"use client";

import { X } from "lucide-react";
import { AgentTool, AgentType } from "@/types/agent";

interface ClearFiltersButtonProps {
    searchQuery: string;
    selectedTool: AgentTool | 'all';
    selectedType: AgentType | 'all';
    onClear: () => void;
}

export function ClearFiltersButton({
    searchQuery,
    selectedTool,
    selectedType,
    onClear
}: ClearFiltersButtonProps) {
    // Count active filters
    const activeFiltersCount = [
        searchQuery.trim() !== '',
        selectedTool !== 'all',
        selectedType !== 'all',
    ].filter(Boolean).length;

    // Only show if there are 2+ active filters
    if (activeFiltersCount < 2) return null;

    return (
        <button
            onClick={onClear}
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
