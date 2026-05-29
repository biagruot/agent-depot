"use client";

import { Agent, AgentTool, AgentType } from "@/types/agent";
import { agents } from "@/data/agents";
import { useMemo, useEffect } from "react";
import Link from "next/link";
import { useOpenPanel } from "@openpanel/nextjs";
import { analyticsEvents } from "@/lib/analytics";

interface NoResultsProps {
  searchQuery: string;
  selectedTool: AgentTool | "all";
  selectedType: AgentType | "all";
  onClearFilters: () => void;
}

export function NoResults({
  searchQuery,
  selectedTool,
  selectedType,
  onClearFilters,
}: NoResultsProps) {
  const { track } = useOpenPanel();

  // Track no results event
  useEffect(() => {
    const [eventName, data] = analyticsEvents.noResults({
      query: searchQuery,
      tool: selectedTool,
      type: selectedType,
    });

    track(eventName, data);
  }, [searchQuery, selectedTool, selectedType, track]);

  // Get smart suggestions based on context
  const suggestions = useMemo(() => {
    const allAgents = agents;
    const results: {
      popularAgents?: Agent[];
      similarTools?: AgentTool[];
      alternativeTypes?: AgentType[];
      relatedTags?: string[];
    } = {};

    // 1. If they searched for a specific tool but it returned no results
    if (selectedTool !== "all") {
      // Suggest other tools
      const availableTools = new Set(allAgents.map((a) => a.tool));
      results.similarTools = Array.from(availableTools).filter(
        (t) => t !== selectedTool,
      ) as AgentTool[];
    }

    // 2. If they filtered by type but got no results
    if (selectedType !== "all") {
      // Suggest other types
      const availableTypes = new Set(allAgents.map((a) => a.type));
      results.alternativeTypes = Array.from(availableTypes).filter(
        (t) => t !== selectedType,
      ) as AgentType[];
    }

    // 3. If they searched for a query
    if (searchQuery.trim()) {
      // Find related tags that might help
      const queryLower = searchQuery.toLowerCase();
      const relatedTags = new Set<string>();

      allAgents.forEach((agent) => {
        const matchesPartially =
          agent.name.toLowerCase().includes(queryLower) ||
          agent.description.toLowerCase().includes(queryLower) ||
          agent.tags.some((tag) => tag.toLowerCase().includes(queryLower));

        if (matchesPartially) {
          agent.tags.forEach((tag) => relatedTags.add(tag));
        }
      });

      results.relatedTags = Array.from(relatedTags).slice(0, 6);
    }

    // 4. Always show popular agents as fallback
    results.popularAgents = allAgents
      .sort((a, b) => (b.stats?.downloads || 0) - (a.stats?.downloads || 0))
      .slice(0, 3);

    return results;
  }, [searchQuery, selectedTool, selectedType]);

  // Determine the primary message based on context
  const getPrimaryMessage = () => {
    if (searchQuery.trim() && selectedTool !== "all" && selectedType !== "all") {
      return {
        title: "Too specific, no matches found",
        subtitle: `Try removing some filters or broadening your search.`,
      };
    }

    if (searchQuery.trim()) {
      return {
        title: `No results for "${searchQuery}"`,
        subtitle: "Try a different search term or check out these suggestions.",
      };
    }

    if (selectedTool !== "all" && selectedType !== "all") {
      return {
        title: `No ${selectedType}s for ${selectedTool}`,
        subtitle: "Try selecting a different type or tool.",
      };
    }

    if (selectedTool !== "all") {
      return {
        title: `No agents found for ${selectedTool}`,
        subtitle: "Try selecting a different tool.",
      };
    }

    if (selectedType !== "all") {
      return {
        title: `No ${selectedType}s found`,
        subtitle: "Try selecting a different type.",
      };
    }

    return {
      title: "No agents found",
      subtitle: "Looks like we're still building this section.",
    };
  };

  const { title, subtitle } = getPrimaryMessage();

  return (
    <div className="text-center py-32 glass-panel rounded-3xl space-y-8">
      {/* Primary Message */}
      <div className="space-y-3">
        <p className="text-2xl text-gray-300 font-semibold">{title}</p>
        <p className="text-gray-500 font-mono text-sm">{subtitle}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          onClick={onClearFilters}
          className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 font-medium text-sm border border-white/10"
        >
          Clear all filters
        </button>
        <Link
          href="/submit"
          className="px-6 py-2.5 bg-white text-black rounded-full transition-all duration-300 font-medium text-sm hover:scale-105"
        >
          Submit an agent
        </Link>
      </div>

      {/* Suggestions */}
      <div className="mt-12 space-y-6">
        {/* Alternative Tools */}
        {suggestions.similarTools && suggestions.similarTools.length > 0 && (
          <div className="space-y-3">
            <p className="text-sm text-gray-400 font-mono">Try other tools:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestions.similarTools.map((tool) => (
                <Link
                  key={tool}
                  href={`/?tool=${tool}`}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors border border-primary/20"
                >
                  {tool.charAt(0).toUpperCase() + tool.slice(1)}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Alternative Types */}
        {suggestions.alternativeTypes && suggestions.alternativeTypes.length > 0 && (
          <div className="space-y-3">
            <p className="text-sm text-gray-400 font-mono">Try other types:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestions.alternativeTypes.map((type) => (
                <Link
                  key={type}
                  href={
                    selectedTool !== "all"
                      ? `/?tool=${selectedTool}&type=${type}`
                      : `/?type=${type}`
                  }
                  className="px-4 py-2 bg-white/5 text-gray-300 rounded-full text-sm font-medium hover:bg-white/10 transition-colors border border-white/10"
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related Tags */}
        {suggestions.relatedTags && suggestions.relatedTags.length > 0 && (
          <div className="space-y-3">
            <p className="text-sm text-gray-400 font-mono">Related tags:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestions.relatedTags.map((tag) => (
                <Link
                  key={tag}
                  href={`/?q=${encodeURIComponent(tag)}`}
                  className="px-3 py-1.5 bg-white/5 text-gray-400 rounded-full text-xs font-medium hover:bg-white/10 hover:text-gray-300 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Popular Agents */}
        {suggestions.popularAgents && suggestions.popularAgents.length > 0 && (
          <div className="space-y-4 mt-8">
            <p className="text-sm text-gray-400 font-mono">Most popular agents:</p>
            <div className="grid gap-3 max-w-2xl mx-auto">
              {suggestions.popularAgents.map((agent) => {
                const typeEmoji =
                  {
                    rule: "📝",
                    agent: "🤖",
                    plugin: "🔌",
                    skill: "📚",
                    template: "📦",
                  }[agent.type] || "📦";

                return (
                  <Link
                    key={agent.id}
                    href={`/?q=${encodeURIComponent(agent.name)}`}
                    className="flex items-center justify-between px-4 py-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{typeEmoji}</span>
                      <div className="text-left">
                        <p className="text-white font-medium text-sm group-hover:text-primary transition-colors">
                          {agent.name}
                        </p>
                        <p className="text-gray-500 text-xs line-clamp-1">{agent.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>⬇️ {agent.stats?.downloads || 0}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Subtle CTA at bottom */}
      <div className="mt-12 pt-8 border-t border-white/5">
        <p className="text-xs text-gray-600 font-mono">
          Can&apos;t find what you&apos;re looking for?{" "}
          <Link href="/submit" className="text-primary hover:underline">
            Build it and share it
          </Link>
        </p>
      </div>
    </div>
  );
}
