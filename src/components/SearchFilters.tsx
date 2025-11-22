"use client";

import { SearchAutocomplete } from "@/components/SearchAutocomplete";
import { AgentTool, AgentType } from "@/types/agent";
import { useEffect } from "react";

import { useOpenPanel } from "@openpanel/nextjs";
import { SiReplit, SiAnthropic } from "react-icons/si";
import { Wind, Server, LayoutGrid, MousePointer2 } from "lucide-react";

interface SearchFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedTool: AgentTool | 'all';
  setSelectedTool: (tool: AgentTool | 'all') => void;
  selectedType: AgentType | 'all';
  setSelectedType: (type: AgentType | 'all') => void;
}

export function SearchFilters({
  searchQuery,
  setSearchQuery,
  selectedTool,
  setSelectedTool,
  selectedType,
  setSelectedType
}: SearchFiltersProps) {
  const { track } = useOpenPanel();

  // Track search queries with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.length > 2) {
        track('search_query', { query: searchQuery });
      }
    }, 1000); // Wait 1s after typing stops

    return () => clearTimeout(timer);
  }, [searchQuery, track]);

  const handleToolChange = (tool: AgentTool | 'all') => {
    setSelectedTool(tool);
    setSelectedType('all');
    track('filter_tool_change', { tool });
  };

  const handleTypeChange = (type: AgentType | 'all') => {
    setSelectedType(type);
    track('filter_type_change', { type, tool: selectedTool });
  };


  // Context-aware types based on selected tool
  const getAvailableTypes = (): { id: AgentType | 'all'; label: string; icon: string }[] => {
    const baseTypes = [{ id: 'all' as const, label: 'All Types', icon: '🎯' }];

    if (selectedTool === 'all') {
      return [
        ...baseTypes,
        { id: 'rule', label: 'Rules', icon: '📝' },
        { id: 'template', label: 'Templates', icon: '📦' },
        { id: 'plugin', label: 'Plugins', icon: '🔌' },
        { id: 'agent', label: 'Agents', icon: '🤖' },
        { id: 'skill', label: 'Skills', icon: '📚' },
      ];
    }

    if (selectedTool === 'cursor' || selectedTool === 'windsurf') {
      return [...baseTypes, { id: 'rule', label: 'Rules', icon: '📝' }];
    }

    if (selectedTool === 'replit') {
      return [
        ...baseTypes,
        { id: 'template', label: 'Templates', icon: '📦' },
        { id: 'agent', label: 'Agents', icon: '🤖' },
      ];
    }

    if (selectedTool === 'claude-code') {
      return [
        ...baseTypes,
        { id: 'plugin', label: 'Plugins', icon: '🔌' },
        { id: 'skill', label: 'Skills', icon: '📚' },
        { id: 'agent', label: 'Agents', icon: '🤖' },
      ];
    }

    return baseTypes;
  };

  const availableTypes = getAvailableTypes();

  return (
    <div className="space-y-6">
      {/* Command Palette Style Search */}
      <SearchAutocomplete
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Tool Filters */}
      <div className="flex overflow-x-auto pb-2 md:pb-0 md:flex-wrap md:justify-center gap-2 no-scrollbar">
        <button
          onClick={() => handleToolChange('all')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${selectedTool === 'all'
            ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
        >
          <LayoutGrid className="w-4 h-4" />
          All Tools
        </button>
        <button
          onClick={() => handleToolChange('cursor')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${selectedTool === 'cursor'
            ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
        >
          {/* Cursor Icon - Using MousePointer2 as fallback since SiCursor is missing */}
          <MousePointer2 className="w-4 h-4" />
          Cursor
        </button>
        <button
          onClick={() => handleToolChange('windsurf')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${selectedTool === 'windsurf'
            ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
        >
          <Wind className="w-4 h-4" />
          Windsurf
        </button>
        <button
          onClick={() => handleToolChange('mcp')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${selectedTool === 'mcp'
            ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
        >
          <Server className="w-4 h-4" />
          MCP
        </button>
        <button
          onClick={() => handleToolChange('claude-code')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${selectedTool === 'claude-code'
            ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
        >
          <SiAnthropic className="w-4 h-4" />
          Claude
        </button>
        <button
          onClick={() => handleToolChange('replit')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${selectedTool === 'replit'
            ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
        >
          <SiReplit className="w-4 h-4" />
          Replit
        </button>
      </div>

      {/* Type Filters (Context-Aware) */}
      {availableTypes.length > 1 && (
        <div className="flex overflow-x-auto pb-2 md:pb-0 md:flex-wrap md:justify-center gap-2 no-scrollbar">
          {availableTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => handleTypeChange(type.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap ${selectedType === type.id
                ? "bg-primary/20 text-primary border border-primary/30"
                : "bg-white/5 text-gray-500 hover:bg-white/10 hover:text-gray-300 border border-transparent"
                }`}
            >
              <span>{type.icon}</span>
              <span>{type.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
