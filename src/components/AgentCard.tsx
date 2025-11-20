import { Agent } from "@/types/agent";
import { Download, Star, ExternalLink, Terminal, Code, Bug, Zap, Database, Globe } from "lucide-react";
import Link from "next/link";
import { SpotlightCard } from "./SpotlightCard";

const ToolBadge = ({ tool }: { tool: Agent['tool'] }) => {
  const styles = {
    claude: "text-[#d97757] bg-[#d97757]/10 border-[#d97757]/20",
    windsurf: "text-[#3b82f6] bg-[#3b82f6]/10 border-[#3b82f6]/20",
    cursor: "text-[#a855f7] bg-[#a855f7]/10 border-[#a855f7]/20",
    replit: "text-[#f97316] bg-[#f97316]/10 border-[#f97316]/20",
  };

  const labels = {
    claude: "Claude",
    windsurf: "Windsurf",
    cursor: "Cursor",
    replit: "Replit",
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium border uppercase tracking-wider ${styles[tool]}`}>
      {labels[tool]}
    </span>
  );
};

const CategoryIcon = ({ category }: { category: Agent['category'] }) => {
  const icons = {
    coding: Code,
    debugging: Bug,
    testing: Zap,
    productivity: Terminal,
    data: Database,
    web: Globe,
    other: Terminal,
  };
  const Icon = icons[category];
  return <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />;
};

export function AgentCard({ agent }: { agent: Agent }) {
  // Determine spotlight color based on tool
  const spotlightColors = {
    claude: "rgba(217, 119, 87, 0.2)",
    windsurf: "rgba(59, 130, 246, 0.2)",
    cursor: "rgba(168, 85, 247, 0.2)",
    replit: "rgba(249, 115, 22, 0.2)",
  };

  return (
    <Link href={`/agent/${agent.id}`} className="block h-full">
      <SpotlightCard 
        className="h-full flex flex-col p-5 transition-transform duration-300 hover:-translate-y-1"
        spotlightColor={spotlightColors[agent.tool]}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <CategoryIcon category={agent.category} />
            </div>
            <div>
              <h3 className="font-semibold text-base text-gray-100 group-hover:text-white transition-colors">
                {agent.name}
              </h3>
              <p className="text-xs text-gray-500">by {agent.author.name}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <ToolBadge tool={agent.tool} />
            <div className="flex gap-1">
              {agent.verified && (
                <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-green-500/10 text-green-400 border border-green-500/20" title="Verified by AgentDepot">
                  ✓
                </span>
              )}
              {agent.trending && (
                <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20" title="Trending this week">
                  🔥
                </span>
              )}
              {/* Check if created within last 7 days */}
              {new Date(agent.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) && (
                <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20" title="New Arrival">
                  NEW
                </span>
              )}
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-6 flex-grow line-clamp-2 leading-relaxed">
          {agent.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
          <div className="flex items-center gap-4 text-xs text-gray-500 font-mono">
            {agent.stats?.stars && (
              <div className="flex items-center gap-1.5">
                <Star className="w-3 h-3" />
                <span>{agent.stats.stars}</span>
              </div>
            )}
            {agent.stats?.downloads && (
              <div className="flex items-center gap-1.5">
                <Download className="w-3 h-3" />
                <span>{agent.stats.downloads}</span>
              </div>
            )}
          </div>
          
          <div className="text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            Details <ExternalLink className="w-3 h-3" />
          </div>
        </div>
      </SpotlightCard>
    </Link>
  );
}
