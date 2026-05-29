"use client";

import { Agent } from "@/types/agent";
import Link from "next/link";
import { SpotlightCard } from "./SpotlightCard";
import { Check, Copy, Heart } from "lucide-react";
import { useState } from "react";
import { useOpenPanel } from "@openpanel/nextjs";
import { useFavorites } from "@/components/providers/FavoritesProvider";
import { AuthModal } from "./auth/AuthModal";

const ToolBadge = ({ tool }: { tool: Agent["tool"] }) => {
  const styles = {
    "claude-code": "bg-orange-500/10 text-orange-400 border-orange-500/20",
    windsurf: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    cursor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    replit: "bg-orange-600/10 text-orange-500 border-orange-600/20",
    mcp: "bg-green-500/10 text-green-400 border-green-500/20",
  };

  const labels = {
    "claude-code": "Claude",
    windsurf: "Windsurf",
    cursor: "Cursor",
    replit: "Replit",
    mcp: "MCP",
  };

  return (
    <span
      className={`px-2 py-0.5 rounded-full text-[10px] font-medium border uppercase tracking-wider ${styles[tool]}`}
    >
      {labels[tool]}
    </span>
  );
};

const TypeIcon = ({ type }: { type: Agent["type"] }) => {
  const icons = {
    rule: "📝",
    agent: "🤖",
    plugin: "🔌",
    skill: "📚",
    template: "📦",
  };

  return (
    <span className="text-sm" title={type}>
      {icons[type]}
    </span>
  );
};

export function AgentCard({ agent, onClick }: { agent: Agent; onClick?: (agent: Agent) => void }) {
  const [copied, setCopied] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { favorites, toggleFavorite, user } = useFavorites();
  const isFavorited = favorites.includes(agent.id);

  // Determine spotlight color based on tool
  const spotlightColors = {
    "claude-code": "rgba(217, 119, 87, 0.2)",
    windsurf: "rgba(59, 130, 246, 0.2)",
    cursor: "rgba(168, 85, 247, 0.2)",
    replit: "rgba(249, 115, 22, 0.2)",
    mcp: "rgba(34, 197, 94, 0.2)",
  };

  const borderColors = {
    "claude-code": "group-hover:border-orange-500/50",
    windsurf: "group-hover:border-blue-500/50",
    cursor: "group-hover:border-purple-500/50",
    replit: "group-hover:border-orange-600/50",
    mcp: "group-hover:border-green-500/50",
  };

  const { track } = useOpenPanel();

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent opening modal/link
    e.stopPropagation();
    if (agent.installation.command) {
      navigator.clipboard.writeText(agent.installation.command);
      setCopied(true);

      // Track copy event
      track("agent_copy", {
        agent_id: agent.id,
        agent_name: agent.name,
        tool: agent.tool,
        type: agent.type,
      });

      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleFavorite = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }

    await toggleFavorite(agent.id);
    track("agent_favorite", {
      agent_id: agent.id,
      action: isFavorited ? "remove" : "add",
    });
  };

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick(agent);
    }
  };

  return (
    <>
      <Link href={`/agent/${agent.id}`} className="block h-full" onClick={handleClick}>
        <SpotlightCard
          className={`h-full flex flex-col p-5 transition-all duration-300 hover:-translate-y-1 justify-between relative group border border-white/10 ${borderColors[agent.tool]}`}
          spotlightColor={spotlightColors[agent.tool]}
        >
          {/* Top Row: Tool Badge (Left) & Favorite (Right) */}
          <div className="flex justify-between items-start mb-4">
            <ToolBadge tool={agent.tool} />

            <button
              onClick={handleFavorite}
              aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
              className={`p-1.5 -mr-1.5 -mt-1.5 rounded-full transition-colors z-20 ${
                isFavorited
                  ? "text-pink-500 bg-pink-500/10"
                  : "text-gray-500 hover:text-pink-400 hover:bg-white/10"
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorited ? "fill-current" : ""}`} />
            </button>
          </div>

          {/* Main Content */}
          <div className="mb-4">
            <h3 className="font-bold text-lg text-gray-100 group-hover:text-white transition-colors line-clamp-1 mb-2 leading-tight">
              {agent.name}
            </h3>
            <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed h-[40px]">
              {agent.description}
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/5">
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <TypeIcon type={agent.type} />
                <span className="capitalize">{agent.type}</span>
              </span>
              {(agent.stats?.downloads || 0) > 0 && (
                <span className="flex items-center gap-1">
                  <span>⬇</span>
                  {agent.stats?.downloads?.toLocaleString()}
                </span>
              )}
            </div>

            {/* Copy Button */}
            {agent.installation.command && (
              <button
                onClick={handleCopy}
                className={`
                    flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 border z-20
                    ${
                      copied
                        ? "bg-green-500/10 text-green-400 border-green-500/20"
                        : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20"
                    }
                  `}
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            )}
          </div>
        </SpotlightCard>
      </Link>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}
