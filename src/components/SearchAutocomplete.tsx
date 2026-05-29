"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Search, Command, X, User, Tag, Bot } from "lucide-react";
import { agents } from "@/data/agents";
interface SearchAutocompleteProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  placeholder?: string;
}

type SuggestionType = "agent" | "author" | "tag";

interface Suggestion {
  id: string;
  type: SuggestionType;
  label: string;
  subLabel?: string;
  value: string; // The value to set when selected
}

export function SearchAutocomplete({
  searchQuery,
  setSearchQuery,
  placeholder = "Search agents, rules, plugins...",
}: SearchAutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Extract unique authors and tags
  const uniqueAuthors = useMemo(() => {
    const authors = new Set<string>();
    agents.forEach((agent) => authors.add(agent.author.name));
    return Array.from(authors);
  }, []);

  const uniqueTags = useMemo(() => {
    const tags = new Set<string>();
    agents.forEach((agent) => agent.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags);
  }, []);

  // Generate suggestions based on query
  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    const results: Suggestion[] = [];

    // 1. Match Agents (Limit 3)
    const matchedAgents = agents
      .filter((agent) => agent.name.toLowerCase().includes(query))
      .slice(0, 3)
      .map((agent) => ({
        id: `agent-${agent.id}`,
        type: "agent" as const,
        label: agent.name,
        subLabel: `by ${agent.author.name}`,
        value: agent.name,
      }));
    results.push(...matchedAgents);

    // 2. Match Authors (Limit 2)
    const matchedAuthors = uniqueAuthors
      .filter((author) => author.toLowerCase().includes(query))
      .slice(0, 2)
      .map((author) => ({
        id: `author-${author}`,
        type: "author" as const,
        label: author,
        value: author,
      }));
    results.push(...matchedAuthors);

    // 3. Match Tags (Limit 3)
    const matchedTags = uniqueTags
      .filter((tag) => tag.toLowerCase().includes(query))
      .slice(0, 3)
      .map((tag) => ({
        id: `tag-${tag}`,
        type: "tag" as const,
        label: tag,
        value: tag,
      }));
    results.push(...matchedTags);

    return results;
  }, [searchQuery, uniqueAuthors, uniqueTags]);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleGlobalKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0) {
        handleSelect(suggestions[selectedIndex]);
      } else {
        // If no suggestion selected, just close (default search behavior handles the query)
        setIsOpen(false);
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const handleSelect = (suggestion: Suggestion) => {
    setSearchQuery(suggestion.value);
    setIsOpen(false);
    setSelectedIndex(-1);

    // Optional: If it's an agent, we could navigate directly, but for now let's just filter
    // If you wanted to navigate: router.push(`/agent/${suggestion.id.replace('agent-', '')}`);
  };

  // Highlight matching text
  const HighlightedText = ({ text, highlight }: { text: string; highlight: string }) => {
    if (!highlight.trim()) return <span>{text}</span>;

    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="text-white font-semibold">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          ),
        )}
      </span>
    );
  };

  return (
    <div ref={containerRef} className="relative max-w-2xl mx-auto group z-50">
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-purple-500/20 to-orange-500/20 rounded-2xl opacity-50 group-hover:opacity-100 blur transition duration-500" />

      {/* Input Container */}
      <div className="relative bg-[#0A0A0A] rounded-xl border border-white/10 flex items-center p-2 shadow-2xl">
        <div className="p-3 text-gray-500">
          <Search className="w-5 h-5" />
        </div>
        <input
          ref={inputRef}
          type="text"
          className="flex-1 bg-transparent border-none text-lg text-white placeholder-gray-500 focus:ring-0 px-2 py-1 focus:outline-none min-w-0"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsOpen(true);
            setSelectedIndex(-1);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />

        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery("");
              setIsOpen(false);
              inputRef.current?.focus();
            }}
            className="p-2 text-gray-500 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 ml-2 shrink-0">
          <Command className="w-3 h-3 text-gray-400" />
          <span className="text-xs text-gray-400 font-mono">K</span>
        </div>
      </div>

      {/* Autocomplete Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-100">
          <div className="py-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={suggestion.id}
                onClick={() => handleSelect(suggestion)}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`w-full px-4 py-3 flex items-center gap-3 text-left transition-colors ${
                  index === selectedIndex ? "bg-white/10" : "hover:bg-white/5"
                }`}
              >
                {/* Icon based on type */}
                <div
                  className={`p-2 rounded-lg ${
                    suggestion.type === "agent"
                      ? "bg-blue-500/10 text-blue-400"
                      : suggestion.type === "author"
                        ? "bg-purple-500/10 text-purple-400"
                        : "bg-orange-500/10 text-orange-400"
                  }`}
                >
                  {suggestion.type === "agent" && <Bot className="w-4 h-4" />}
                  {suggestion.type === "author" && <User className="w-4 h-4" />}
                  {suggestion.type === "tag" && <Tag className="w-4 h-4" />}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-gray-300 truncate">
                    <HighlightedText text={suggestion.label} highlight={searchQuery} />
                  </div>
                  {suggestion.subLabel && (
                    <div className="text-xs text-gray-500 truncate">{suggestion.subLabel}</div>
                  )}
                </div>

                {/* Type Label */}
                <div className="text-xs text-gray-600 uppercase font-mono tracking-wider">
                  {suggestion.type}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
