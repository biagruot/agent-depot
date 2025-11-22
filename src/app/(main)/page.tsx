"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import Fuse from "fuse.js";
import { AgentCard } from "@/components/AgentCard";
import { SearchFilters } from "@/components/SearchFilters";
import { AgentModal } from "@/components/AgentModal";
import { agents } from "@/data/agents";
import { AgentTool, AgentType, Agent } from "@/types/agent";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SortDropdown, SortOption } from "@/components/SortDropdown";
import { ShareFiltersButton } from "@/components/ShareFiltersButton";
import { EmailSignup } from "@/components/EmailSignup";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ClearFiltersButton } from "@/components/ClearFiltersButton";
import { BackToTop } from "@/components/BackToTop";
import { NoResults } from "@/components/NoResults";

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


  // Configure Fuse.js with optimized settings for 100+ agents
  const fuse = useMemo(() => {
    return new Fuse(agents, {
      keys: [
        { name: "name", weight: 0.3 },
        { name: "description", weight: 0.2 },
        { name: "tags", weight: 0.4 }, // higher weight for tags
        { name: "category", weight: 0.15 },
        { name: "author.name", weight: 0.1 },
      ],
      threshold: 0.1, // very strict matching for high relevance
      ignoreLocation: true,
      minMatchCharLength: 2,
      includeScore: true,
      shouldSort: true,
    });
  }, []);

  // Max score threshold for relevance (lower score = better match)
  const MAX_SCORE = 0.5;

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

    // 3. Filter by Search Query using Fuse results directly for higher relevance
    if (searchQuery.trim()) {
      const fuseResults = fuse.search(searchQuery);
      const maxScore = 0.4; // Discard results with low relevance (higher score)
      const matchedAgents = fuseResults
        .filter((res) => (res.score ?? 1) <= maxScore)
        .map((res) => res.item);
      result = result.filter((agent) => matchedAgents.includes(agent));
    }

    // 4. Sort
    if (searchQuery.trim()) {
      // When searching, sort by Fuse relevance score (lower is better)
      const fuseResults = fuse.search(searchQuery);
      const scoreMap = new Map<string, number>();
      fuseResults.forEach((res) => {
        // @ts-ignore - res.item has id
        scoreMap.set(res.item.id, res.score ?? 0);
      });
      result = [...result].sort((a, b) => {
        const scoreA = scoreMap.get(a.id) ?? Infinity;
        const scoreB = scoreMap.get(b.id) ?? Infinity;
        if (scoreA !== scoreB) return scoreA - scoreB;
        // Fallback to current sort option
        switch (currentSort) {
          case 'newest':
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          case 'popular':
            return (b.stats?.downloads || 0) - (a.stats?.downloads || 0);
          case 'trending':
            const scoreA2 = (a.stats?.stars || 0) + new Date(a.createdAt).getTime() / 1e9;
            const scoreB2 = (b.stats?.stars || 0) + new Date(b.createdAt).getTime() / 1e9;
            return scoreB2 - scoreA2;
          case 'alphabetical':
            return a.name.localeCompare(b.name);
          default:
            return 0;
        }
      });
    } else {
      // No search query – use existing sort logic
      result = [...result].sort((a, b) => {
        switch (currentSort) {
          case 'newest':
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          case 'popular':
            return (b.stats?.downloads || 0) - (a.stats?.downloads || 0);
          case 'trending':
            const scoreA = (a.stats?.stars || 0) + new Date(a.createdAt).getTime() / 1e9;
            const scoreB = (b.stats?.stars || 0) + new Date(b.createdAt).getTime() / 1e9;
            return scoreB - scoreA;
          case 'alphabetical':
            return a.name.localeCompare(b.name);
          default:
            return 0;
        }
      });
    }

    return result;
  }, [searchQuery, selectedTool, selectedType, fuse, currentSort]);

  const isFiltering = searchQuery.trim() !== "" || selectedTool !== 'all' || selectedType !== 'all';

  // Get Featured Agents (for the top row) - Only show if not filtering
  const featuredAgents = useMemo(() => {
    return agents.filter(a => a.featured).slice(0, 4);
  }, []);

  return (
    <div className="min-h-screen pb-20">


      {/* Back to Top Button */}
      <BackToTop />

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
          <div className="text-center mb-8 space-y-6 relative">
            {/* Ambient Glow Background */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-30 pointer-events-none blur-[100px]">
              <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-500/40 rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-500/40 rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
              <div className="absolute bottom-0 left-1/4 w-1/2 h-full bg-orange-500/40 rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
            </div>

            {/* Main Title with Gradient */}
            <div className="space-y-3 relative z-10">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-br from-white via-white to-gray-400 bg-clip-text text-transparent animate-fade-in leading-tight">
                Copy. Paste. Ship.
              </h1>

              {/* Subtitle with Glass Badge */}
              <div className="flex flex-col items-center justify-center gap-6">
                <p className="text-lg md:text-xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto">
                  100+ drop-in rules and agents for your next project.
                </p>

                {/* Social Proof / Stats Line - Space Neutral */}
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-xs font-mono text-gray-500 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/5 border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span>120+ Agents</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/5 border border-white/5">
                    <span className="text-blue-400">⚡️</span>
                    <span>5k+ Installs</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/5 border border-white/5">
                    <span className="text-purple-400">🛡️</span>
                    <span>Open Source</span>
                  </div>
                </div>
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
          {/* Breadcrumbs */}
          <Breadcrumbs
            searchQuery={searchQuery}
            selectedTool={selectedTool}
            selectedType={selectedType}
            onNavigate={(filters) => {
              if (filters.tool !== undefined) setSelectedTool(filters.tool);
              if (filters.type !== undefined) setSelectedType(filters.type);
              if (filters.query !== undefined) setSearchQuery(filters.query);
            }}
          />

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
              <ClearFiltersButton
                searchQuery={searchQuery}
                selectedTool={selectedTool}
                selectedType={selectedType}
                onClear={() => {
                  setSearchQuery("");
                  setSelectedTool("all");
                  setSelectedType("all");
                }}
              />
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
            <NoResults
              searchQuery={searchQuery}
              selectedTool={selectedTool}
              selectedType={selectedType}
              onClearFilters={() => {
                setSearchQuery("");
                setSelectedTool("all");
                setSelectedType("all");
              }}
            />
          )}

          {/* Submit CTA */}
          <div className="mt-24 text-center py-16 border-t border-white/10">
            <h2 className="text-3xl font-bold mb-4">Built something cool?</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Share your agent with the community. We review every submission.
            </p>
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
            >
              Ship It <span className="text-xl">→</span>
            </Link>
          </div>
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

          {/* Legal Links */}
          <nav className="flex justify-center space-x-6 mb-8">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
          </nav>

          {/* Platform Support & Copyright */}
          <div className="text-center space-y-4">
            <p className="text-sm text-gray-500">
              Works with <strong className="text-gray-400">Claude</strong>, <strong className="text-gray-400">Cursor</strong>, <strong className="text-gray-400">Windsurf</strong>, <strong className="text-gray-400">Replit</strong>, <strong className="text-gray-400">MCP</strong> & more
            </p>
            <p className="text-gray-500 text-sm font-mono">
              Open source. Built by devs, for devs. <span className="text-primary/60">git push --force</span> your productivity.
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
