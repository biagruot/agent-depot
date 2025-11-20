"use client";

import { Search, Filter } from "lucide-react";
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
    { id: 'claude', label: 'Claude Code' },
    { id: 'cursor', label: 'Cursor' },
    { id: 'replit', label: 'Replit' },
  ];

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-500" />
        </div>
        <input
          type="text"
          className="block w-full pl-11 pr-4 py-4 bg-card-bg border border-card-border rounded-xl text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          placeholder="Search for agents, debugging tools, or frameworks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Tool Filters */}
      <div className="flex flex-wrap justify-center gap-2">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setSelectedTool(tool.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedTool === tool.id
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "bg-card-bg border border-card-border text-gray-400 hover:border-gray-600 hover:text-white"
            }`}
          >
            {tool.label}
          </button>
        ))}
      </div>
    </div>
  );
}
