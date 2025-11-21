"use client";

import { SearchAutocomplete } from "@/components/SearchAutocomplete";
import { AgentTool, AgentType } from "@/types/agent";

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
  const tools: { id: AgentTool | 'all'; label: string }[] = [
    { id: 'all', label: 'All Tools' },
    { id: 'windsurf', label: 'Windsurf' },
    { id: 'claude-code', label: 'Claude' },
    { id: 'cursor', label: 'Cursor' },
    { id: 'replit', label: 'Replit' },
  ];

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
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => {
            setSelectedTool('all');
            setSelectedType('all');
          }}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedTool === 'all'
              ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
          }`}
        >
          All Tools
        </button>
        <button
          onClick={() => {
            setSelectedTool('cursor');
            setSelectedType('all');
          }}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedTool === 'cursor'
              ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
          }`}
        >
          Cursor
        </button>
        <button
          onClick={() => {
            setSelectedTool('windsurf');
            setSelectedType('all');
          }}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedTool === 'windsurf'
              ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
          }`}
        >
          Windsurf
        </button>
        <button
          onClick={() => {
            setSelectedTool('mcp');
            setSelectedType('all');
          }}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedTool === 'mcp'
              ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
          }`}
        >
          MCP
        </button>
        <button
          onClick={() => {
            setSelectedTool('claude-code');
            setSelectedType('all');
          }}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedTool === 'claude-code'
              ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
          }`}
        >
          Claude
        </button>
        <button
          onClick={() => {
            setSelectedTool('replit');
            setSelectedType('all');
          }}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedTool === 'replit'
              ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
          }`}
        >
          Replit
        </button>
      </div>

      {/* Type Filters (Context-Aware) */}
      {availableTypes.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2">
          {availableTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 ${
                selectedType === type.id
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
