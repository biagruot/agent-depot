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
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ClearFiltersButton } from "@/components/ClearFiltersButton";
import { BackToTop } from "@/components/BackToTop";
import { NoResults } from "@/components/NoResults";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FloatingSubscribe } from "@/components/FloatingSubscribe";
import { usePageTracking } from "@/hooks/usePageTracking";
import { useScrollTracking } from "@/hooks/useScrollTracking";
import { useTimeTracking } from "@/hooks/useTimeTracking";
import { useOpenPanel } from "@openpanel/nextjs";
import { analyticsEvents } from "@/lib/analytics";

function compareBySort(a: Agent, b: Agent, sort: SortOption): number {
  switch (sort) {
    case "newest":
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    case "popular":
      return (b.stats?.downloads || 0) - (a.stats?.downloads || 0);
    case "trending": {
      const sa = (a.stats?.stars || 0) + new Date(a.createdAt).getTime() / 1e9;
      const sb = (b.stats?.stars || 0) + new Date(b.createdAt).getTime() / 1e9;
      return sb - sa;
    }
    case "alphabetical":
      return a.name.localeCompare(b.name);
    default:
      return 0;
  }
}

function HomeContent() {
  const searchParams = useSearchParams();
  const { track } = useOpenPanel();

  // Analytics tracking
  usePageTracking();
  useScrollTracking();
  useTimeTracking();

  // Initialize state from URL parameters
  const initialTool = (searchParams.get("tool") as AgentTool) || "all";
  const initialType = (searchParams.get("type") as AgentType) || "all";
  const initialQuery = searchParams.get("q") || "";
  const initialSort = (searchParams.get("sort") as SortOption) || "popular";

  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
  const [selectedTool, setSelectedTool] = useState<AgentTool | "all">(initialTool);
  const [selectedType, setSelectedType] = useState<AgentType | "all">(initialType);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [currentSort, setCurrentSort] = useState<SortOption>(initialSort);

  // Sync state with URL params when they change (e.g. navigation)
  useEffect(() => {
    const tool = (searchParams.get("tool") as AgentTool) || "all";
    const type = (searchParams.get("type") as AgentType) || "all";
    const query = searchParams.get("q") || "";
    const sort = (searchParams.get("sort") as SortOption) || "popular";

    // Intentional: sync local filter state when the URL changes via external
    // navigation (back/forward, breadcrumb links), not on every render.
    /* eslint-disable react-hooks/set-state-in-effect */
    setSelectedTool(tool);
    setSelectedType(type);
    setSearchQuery(query);
    setCurrentSort(sort);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [searchParams]);

  // Update URL when filters change (user interaction)
  useEffect(() => {
    const params = new URLSearchParams();

    if (searchQuery) params.set("q", searchQuery);
    if (selectedTool !== "all") params.set("tool", selectedTool);
    if (selectedType !== "all") params.set("type", selectedType);
    if (currentSort !== "popular") params.set("sort", currentSort);

    const newUrl = params.toString() ? `?${params.toString()}` : "/";

    // Only update URL if it's different to avoid loops/redundant updates
    if (
      window.location.search !== `?${params.toString()}` &&
      (window.location.search !== "" || params.toString() !== "")
    ) {
      window.history.replaceState({}, "", newUrl);
    }
  }, [searchQuery, selectedTool, selectedType, currentSort]);

  // Configure Fuse.js for client-side fuzzy search over the catalog
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

  // Filter and sort agents
  const filteredAgents = useMemo(() => {
    let result = agents;

    if (selectedTool !== "all") {
      result = result.filter((agent) => agent.tool === selectedTool);
    }
    if (selectedType !== "all") {
      result = result.filter((agent) => agent.type === selectedType);
    }

    const query = searchQuery.trim();
    if (query) {
      // Search once, then reuse the scores for both filtering and sorting.
      const maxScore = 0.4; // higher Fuse score = weaker match; drop low-relevance hits
      const scoreById = new Map<string, number>();
      for (const res of fuse.search(query)) {
        if ((res.score ?? 1) <= maxScore) scoreById.set(res.item.id, res.score ?? 0);
      }
      return result
        .filter((agent) => scoreById.has(agent.id))
        .sort((a, b) => {
          const sa = scoreById.get(a.id) ?? Infinity;
          const sb = scoreById.get(b.id) ?? Infinity;
          return sa !== sb ? sa - sb : compareBySort(a, b, currentSort);
        });
    }

    return [...result].sort((a, b) => compareBySort(a, b, currentSort));
  }, [searchQuery, selectedTool, selectedType, fuse, currentSort]);

  const isFiltering = searchQuery.trim() !== "" || selectedTool !== "all" || selectedType !== "all";

  // Track search results viewed
  useEffect(() => {
    if (isFiltering) {
      const [eventName, data] = analyticsEvents.searchResultsViewed({
        query: searchQuery,
        tool: selectedTool,
        type: selectedType,
        results_count: filteredAgents.length,
        has_results: filteredAgents.length > 0,
      });

      track(eventName, data);
    }
  }, [searchQuery, selectedTool, selectedType, filteredAgents.length, isFiltering, track]);

  return (
    <div className="min-h-screen pb-20">
      {/* Back to Top Button */}
      <BackToTop />

      {/* Fixed Submit CTA - Bottom Right */}
      <Link
        href="/submit"
        className="fixed bottom-20 sm:bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
      >
        <span>+</span>
        <span>Submit Agent</span>
      </Link>

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "AgentDepot",
            description: "The complete directory of AI coding agents for developers",
            url: "https://agentdepot.dev",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://agentdepot.dev/?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* Centered Hero - Glass & Vercel-Inspired */}
      <section className="pt-2 pb-8 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Centered Header with Glass Effect */}
          <div className="text-center mb-8 space-y-6 relative">
            {/* Ambient Glow Background */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-30 pointer-events-none blur-[100px]">
              <div
                className="absolute top-0 left-0 w-1/2 h-full bg-blue-500/40 rounded-full mix-blend-screen animate-pulse"
                style={{ animationDuration: "4s" }}
              />
              <div
                className="absolute top-0 right-0 w-1/2 h-full bg-purple-500/40 rounded-full mix-blend-screen animate-pulse"
                style={{ animationDuration: "5s", animationDelay: "1s" }}
              />
              <div
                className="absolute bottom-0 left-1/4 w-1/2 h-full bg-orange-500/40 rounded-full mix-blend-screen animate-pulse"
                style={{ animationDuration: "6s", animationDelay: "2s" }}
              />
            </div>

            {/* Main Title with Gradient */}
            <div className="space-y-3 relative z-10">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-br from-white via-white to-gray-400 bg-clip-text text-transparent animate-fade-in leading-tight">
                The Open Source
                <br />
                AI Agent Directory
              </h1>

              {/* Subtitle with Glass Badge */}
              <div className="flex flex-col items-center justify-center gap-6">
                <p className="text-lg md:text-xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto">
                  Copy. Paste. Ship. 70+ drop-in rules and agents for your next project.
                </p>

                {/* Social Proof / Stats Line - Space Neutral */}
                <div
                  className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-xs font-mono text-gray-500 animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/5 border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span>70+ Agents</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/5 border border-white/5">
                    <span className="text-blue-400">⚡️</span>
                    <span>100% Free</span>
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
                resultsCount={filteredAgents.length}
                onClear={() => {
                  setSearchQuery("");
                  setSelectedTool("all");
                  setSelectedType("all");
                }}
              />
              <ShareFiltersButton
                searchQuery={searchQuery}
                selectedTool={selectedTool}
                selectedType={selectedType}
                currentSort={currentSort}
                resultsCount={filteredAgents.length}
              />
              <SortDropdown
                currentSort={currentSort}
                onSortChange={setCurrentSort}
                searchQuery={searchQuery}
                selectedTool={selectedTool}
                resultsCount={filteredAgents.length}
              />
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

          <FloatingSubscribe />
        </div>
      </main>

      {/* Agent Modal */}
      <AgentModal
        agent={selectedAgent}
        isOpen={!!selectedAgent}
        onClose={() => setSelectedAgent(null)}
      />

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-gray-400">Loading...</div>
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  );
}
