import { Agent } from "@/types/agent";
import { Download, Star, ExternalLink, Terminal, Code, Bug, Zap, Database, Globe } from "lucide-react";
import Link from "next/link";

const ToolBadge = ({ tool }: { tool: Agent['tool'] }) => {
  const colors = {
    claude: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    windsurf: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    cursor: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    replit: "bg-red-500/10 text-red-500 border-red-500/20",
  };

  const labels = {
    claude: "Claude Code",
    windsurf: "Windsurf",
    cursor: "Cursor",
    replit: "Replit",
  };

  return (
    <span className={`px-2 py-1 rounded-md text-xs font-medium border ${colors[tool]}`}>
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
  return <Icon className="w-4 h-4 text-gray-400" />;
};

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <div className="group bg-card-bg border border-card-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-card-border/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
            <CategoryIcon category={agent.category} />
          </div>
          <div>
            <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
              {agent.name}
            </h3>
            <p className="text-xs text-gray-500 mt-1">by {agent.author.name}</p>
          </div>
        </div>
        <ToolBadge tool={agent.tool} />
      </div>

      <p className="text-sm text-gray-400 mb-6 flex-grow line-clamp-2">
        {agent.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-card-border mt-auto">
        <div className="flex items-center gap-4 text-xs text-gray-500">
          {agent.stats?.stars && (
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3" />
              <span>{agent.stats.stars}</span>
            </div>
          )}
          {agent.stats?.downloads && (
            <div className="flex items-center gap-1">
              <Download className="w-3 h-3" />
              <span>{agent.stats.downloads}</span>
            </div>
          )}
        </div>
        
        <Link 
          href={`/agent/${agent.id}`}
          className="text-xs font-medium bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md transition-colors flex items-center gap-2"
        >
          View Details
          <ExternalLink className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
