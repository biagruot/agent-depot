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
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Discover the Best AI Coding Agents
          </h1>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            The definitive directory for Claude Code, Windsurf, Cursor, and Replit agents. 
            Curated, verified, and ready to install.
          </p>
          
          <SearchFilters 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedTool={selectedTool}
            setSelectedTool={setSelectedTool}
          />
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-12 px-4 bg-background">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">
              {searchQuery ? `Search Results (${filteredAgents.length})` : "Featured Agents"}
            </h2>
            <span className="text-sm text-gray-500">
              Showing {filteredAgents.length} of {agents.length} agents
            </span>
          </div>

          {filteredAgents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAgents.map((agent) => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-card-border rounded-xl">
              <p className="text-xl text-gray-400">No agents found matching your criteria.</p>
              <button 
                onClick={() => { setSearchQuery(""); setSelectedTool("all"); }}
                className="mt-4 text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-card-border py-12 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>&copy; 2025 AgentDepot. Built for the AI coding community.</p>
        </div>
      </footer>
    </main>
  );
}
