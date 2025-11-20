"use client";

import { Search, Command } from "lucide-react";
import { AgentTool } from "@/types/agent";

interface SearchFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedTool: AgentTool | 'all';
  setSelectedTool: (tool: AgentTool | 'all') => void;
}

export function SearchFilters({ 
  searchQuery, 
  setSearchQuery, 
  selectedTool, 
  setSelectedTool 
}: SearchFiltersProps) {
  const tools: { id: AgentTool | 'all'; label: string }[] = [
    { id: 'all', label: 'All Tools' },
    { id: 'windsurf', label: 'Windsurf' },
    { id: 'claude', label: 'Claude' },
    { id: 'cursor', label: 'Cursor' },
    { id: 'replit', label: 'Replit' },
  ];

  return (
    <div className="space-y-8">
      {/* Command Palette Style Search */}
      <div className="relative max-w-2xl mx-auto group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-purple-500/20 to-orange-500/20 rounded-2xl opacity-50 group-hover:opacity-100 blur transition duration-500" />
        <div className="relative bg-[#0A0A0A] rounded-xl border border-white/10 flex items-center p-2 shadow-2xl">
          <div className="p-3 text-gray-500">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            className="w-full bg-transparent border-none text-lg text-white placeholder-gray-500 focus:ring-0 px-2 py-1"
            placeholder="Search agents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          <div className="hidden md:flex items-center gap-1 px-3 py-1.5 bg-white/5 rounded-lg border border-white/5">
            <Command className="w-3 h-3 text-gray-500" />
            <span className="text-xs text-gray-500 font-mono">K</span>
          </div>
        </div>
      </div>

      {/* Minimal Pill Filters */}
      <div className="flex flex-wrap justify-center gap-2">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setSelectedTool(tool.id)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedTool === tool.id
                ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            {tool.label}
          </button>
        ))}
      </div>
    </div>
  );
}
