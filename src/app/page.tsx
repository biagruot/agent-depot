"use client";

import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import { Navbar } from "@/components/Navbar";
import { SearchFilters } from "@/components/SearchFilters";
import { AgentCard } from "@/components/AgentCard";
import { agents } from "@/data/agents";
import { AgentTool } from "@/types/agent";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTool, setSelectedTool] = useState<AgentTool | 'all'>('all');

  // Configure Fuse.js
  const fuse = useMemo(() => {
    return new Fuse(agents, {
      keys: ["name", "description", "tags", "category"],
      threshold: 0.3,
    });
  }, []);

  // Filter agents
  const filteredAgents = useMemo(() => {
    let result = agents;

    // 1. Filter by Tool
    if (selectedTool !== 'all') {
      result = result.filter((agent) => agent.tool === selectedTool);
    }

    // 2. Filter by Search Query
    if (searchQuery.trim()) {
      const searchResults = fuse.search(searchQuery);
      result = searchResults.map((res) => res.item);
    }

    return result;
  }, [searchQuery, selectedTool, fuse]);

  return (
    <main className="min-h-screen relative">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 relative z-10">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            v1.0 Now Live
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">Agent</span> Directory
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
            Discover verified coding agents for Claude, Windsurf, Cursor, and Replit. 
            Curated for developers who build the future.
          </p>
          
          <SearchFilters 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedTool={selectedTool}
            setSelectedTool={setSelectedTool}
          />
        </div>
      </section>

      {/* Results Grid (Bento Style) */}
      <section className="py-12 px-4 pb-32">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8 px-2">
            <h2 className="text-xl font-semibold text-gray-200">
              {searchQuery ? `Search Results (${filteredAgents.length})` : "Featured Agents"}
            </h2>
            <span className="text-sm text-gray-500 font-mono">
              {filteredAgents.length} / {agents.length}
            </span>
          </div>

          {filteredAgents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[280px]">
              {filteredAgents.map((agent, i) => (
                <div 
                  key={agent.id}
                  className={`${
                    // Make the first item span 2 cols and 2 rows if it's featured (Bento effect)
                    i === 0 && !searchQuery && agent.featured ? "md:col-span-2 md:row-span-2" : ""
                  } ${
                    // Make every 7th item span 2 cols
                    i > 0 && i % 7 === 0 && !searchQuery ? "md:col-span-2" : ""
                  }`}
                >
                  <AgentCard agent={agent} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 glass-panel rounded-3xl">
              <p className="text-xl text-gray-400">No agents found matching your criteria.</p>
              <button 
                onClick={() => { setSearchQuery(""); setSelectedTool("all"); }}
                className="mt-4 text-primary hover:text-white transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-white/5 py-12 mt-auto bg-black/20 backdrop-blur-lg">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2025 AgentDepot. Built for the AI coding community.
          </p>
        </div>
      </footer>
    </main>
  );
}
