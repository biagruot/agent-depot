"use client";

import { Agent } from "@/types/agent";
import Link from "next/link";
import { SpotlightCard } from "./SpotlightCard";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { AgentStats } from "./AgentStats";

const ToolBadge = ({ tool }: { tool: Agent['tool'] }) => {
  const styles = {
    'claude-code': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    'windsurf': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'cursor': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    'replit': 'bg-orange-600/10 text-orange-500 border-orange-600/20',
    'mcp': 'bg-green-500/10 text-green-400 border-green-500/20',
  };

  const labels = {
    'claude-code': 'Claude',
    'windsurf': 'Windsurf',
    'cursor': 'Cursor',
    'replit': 'Replit',
    'mcp': 'MCP',
  };

  return (
    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border uppercase tracking-wider ${styles[tool]}`}>
      {labels[tool]}
    </span>
  );
};

const TypeIcon = ({ type }: { type: Agent['type'] }) => {
  const icons = {
    rule: "📝",
    agent: "🤖",
    plugin: "🔌",
    skill: "📚",
    template: "📦",
  };

  return <span className="text-sm" title={type}>{icons[type]}</span>;
};

export function AgentCard({ agent, onClick }: { agent: Agent; onClick?: (agent: Agent) => void }) {
  const [copied, setCopied] = useState(false);

  // Determine spotlight color based on tool
  const spotlightColors = {
    "claude-code": "rgba(217, 119, 87, 0.2)",
    windsurf: "rgba(59, 130, 246, 0.2)",
    cursor: "rgba(168, 85, 247, 0.2)",
    replit: "rgba(249, 115, 22, 0.2)",
    mcp: "rgba(34, 197, 94, 0.2)",
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent opening modal/link
    e.stopPropagation();
    if (agent.installation.command) {
      navigator.clipboard.writeText(agent.installation.command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick(agent);
    }
  };

  return (
    <Link href={`/agent/${agent.id}`} className="block h-full" onClick={handleClick}>
      <SpotlightCard 
        className="h-full flex flex-col p-3 transition-transform duration-300 hover:-translate-y-1 justify-between relative group"
        spotlightColor={spotlightColors[agent.tool]}
      >
        {/* Tool Badge - Top Right */}
        <div className="absolute top-3 right-2">
          <ToolBadge tool={agent.tool} />
        </div>

        {/* Header with Type Icon */}
        <div className="mb-3 pr-24">
          <div className="flex items-start gap-2 mb-1">
            <span className="flex-shrink-0 w-5 flex items-center justify-center">
              <TypeIcon type={agent.type} />
            </span>
            <h3 className="font-semibold text-lg text-gray-100 group-hover:text-white transition-colors line-clamp-2 flex-1">
              {agent.name}
            </h3>
          </div>
          <p className="text-xs text-gray-500 pl-7">by {agent.author.name}</p>
        </div>

        {/* Description - aligned with title text */}
        <p className="text-sm text-gray-400 line-clamp-2 overflow-hidden mb-4 h-[40px] leading-relaxed pl-7">
          {agent.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full border border-white/5">
                {agent.type}
              </span>
              <AgentStats downloads={agent.stats?.downloads} stars={agent.stats?.stars} />
            </div>
            
            {/* Copy Button (Visible on Hover) */}
            {agent.installation.command && (
              <button
                onClick={handleCopy}
                className={`
                  flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200
                  ${copied 
                    ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                    : "bg-white text-black hover:bg-gray-200 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
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
  );
}
