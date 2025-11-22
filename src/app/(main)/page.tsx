"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import Fuse from "fuse.js";
import { AgentCard } from "@/components/AgentCard";
import { SearchFilters } from "@/components/SearchFilters";
import { AgentModal } from "@/components/AgentModal";
import { agents } from "@/data/agents";
import { AgentTool, AgentType, Agent } from "@/types/agent";

import { useSearchParams } from "next/navigation";
import { SortDropdown, SortOption } from "@/components/SortDropdown";
import { ShareFiltersButton } from "@/components/ShareFiltersButton";
import { EmailSignup } from "@/components/EmailSignup";

function HomeContent() {
  const searchParams = useSearchParams();

  // Initialize state from URL parameters
  const initialTool = (searchParams.get("tool") as AgentTool) || 'all';
  const initialType = (searchParams.get("type") as AgentType) || 'all';
  const initialQuery = searchParams.get("q") || "";
  const initialSort = (searchParams.get("sort") as SortOption) || 'popular';

  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
  const [selectedTool, setSelectedTool] = useState<AgentTool | 'all'>(initialTool);
  const [selectedType, setSelectedType] = useState<AgentType | 'all'>(initialType);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [currentSort, setCurrentSort] = useState<SortOption>(initialSort);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();

    if (searchQuery) params.set("q", searchQuery);
    if (selectedTool !== 'all') params.set("tool", selectedTool);
    if (selectedType !== 'all') params.set("type", selectedType);
    if (currentSort !== 'popular') params.set("sort", currentSort);

    const newUrl = params.toString() ? `?${params.toString()}` : '/';
    window.history.replaceState({}, '', newUrl);
  }, [searchQuery, selectedTool, selectedType, currentSort]);


  // Configure Fuse.js
  const fuse = useMemo(() => {
    return new Fuse(agents, {
      keys: ["name", "description", "tags", "category", "author.name"],
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

    // 2. Filter by Type
    if (selectedType !== 'all') {
      result = result.filter((agent) => agent.type === selectedType);
    }

    // 3. Filter by Search Query
    if (searchQuery.trim()) {
      const searchResults = fuse.search(searchQuery);
      const fuseItems = searchResults.map((res) => res.item);
      result = result.filter(agent => fuseItems.includes(agent));
    }

    // 4. Sort
    result = [...result].sort((a, b) => {
      switch (currentSort) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'popular':
          return (b.stats?.downloads || 0) - (a.stats?.downloads || 0);
        case 'trending':
          // Simple trending logic: recent + high stars
          const scoreA = (a.stats?.stars || 0) + (new Date(a.createdAt).getTime() / 1000000000);
          const scoreB = (b.stats?.stars || 0) + (new Date(b.createdAt).getTime() / 1000000000);
          return scoreB - scoreA;
        case 'alphabetical':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return result;
  }, [searchQuery, selectedTool, selectedType, fuse, currentSort]);

  const isFiltering = searchQuery.trim() !== "" || selectedTool !== 'all' || selectedType !== 'all';

  // Get Featured Agents (for the top row) - Only show if not filtering
  const featuredAgents = useMemo(() => {
    return agents.filter(a => a.featured).slice(0, 4);
  }, []);

  return (
    <div className="min-h-screen pb-20">


      {/* Fixed Submit CTA - Bottom Right */}
      <a
        href="/submit"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
      >
        <span>+</span>
        <span>Submit Agent</span>
      </a>

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "AgentDepot",
            "description": "The complete directory of AI coding agents for developers",
            "url": "https://agentdepot.dev",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://agentdepot.dev/?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      {/* Centered Hero - Glass & Vercel-Inspired */}
      <section className="pt-2 pb-2 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Centered Header with Glass Effect */}
          <div className="text-center mb-12 space-y-6">
            {/* Main Title with Gradient */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-br from-white via-white to-gray-400 bg-clip-text text-transparent animate-fade-in leading-tight">
                AgentDepot
              </h1>

              {/* Subtitle with Glass Badge */}
              <div className="flex items-center justify-center gap-3">
                <p className="text-lg md:text-xl text-gray-400 font-light tracking-wide">
                  Copy. Install. Code.
                </p>
              </div>
            </div>
          </div>

          {/* Search Bar - Primary Action */}
          <div className="mb-6">
            <SearchFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedTool={selectedTool}
              setSelectedTool={setSelectedTool}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-semibold text-white whitespace-nowrap">
                {isFiltering ? `Search Results (${filteredAgents.length})` : "All Agents"}
              </h2>
              <span className="text-sm text-gray-500 font-mono bg-white/5 px-2 py-0.5 rounded-md">
                {filteredAgents.length}
              </span>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
              <ShareFiltersButton />
              <SortDropdown currentSort={currentSort} onSortChange={setCurrentSort} />
            </div>
          </div>

          {filteredAgents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[200px]">
              {filteredAgents.map((agent) => (
                <div key={agent.id}>
                  <AgentCard agent={agent} onClick={setSelectedAgent} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 glass-panel rounded-3xl">
              <p className="text-xl text-gray-400">No matching agents. Maybe build one?</p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedTool("all"); setSelectedType("all"); }}
                className="mt-4 text-primary hover:text-white transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Agent Modal */}
      <AgentModal
        agent={selectedAgent}
        isOpen={!!selectedAgent}
        onClose={() => setSelectedAgent(null)}
      />

      {/* Footer */}
      <footer className="border-t border-white/5 py-16 mt-20 bg-black/20 backdrop-blur-lg">
        <div className="container mx-auto px-4 space-y-12">
          {/* Email Signup */}
          <EmailSignup />

          {/* Platform Support & Copyright */}
          <div className="text-center space-y-4">
            <p className="text-sm text-gray-500">
              Works with <strong className="text-gray-400">Claude</strong>, <strong className="text-gray-400">Cursor</strong>, <strong className="text-gray-400">Windsurf</strong>, <strong className="text-gray-400">Replit</strong>, <strong className="text-gray-400">MCP</strong> & more
            </p>
            <p className="text-gray-500 text-sm">
              &copy; 2025 AgentDepot. Built for the AI coding community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-gray-400">Loading...</div></div>}>
      <HomeContent />
    </Suspense>
  );
}
