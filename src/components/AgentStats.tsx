import { Download, Star } from "lucide-react";
import { formatCompactNumber } from "@/lib/utils";

interface AgentStatsProps {
  downloads?: number;
  stars?: number;
  className?: string;
}

export function AgentStats({ downloads, stars, className = "" }: AgentStatsProps) {
  if (!downloads && !stars) return null;

  return (
    <div className={`flex items-center gap-3 text-xs text-gray-500 ${className}`}>
      {downloads && (
        <div className="flex items-center gap-1" title={`${downloads} downloads`}>
          <Download className="w-3 h-3" />
          <span>{formatCompactNumber(downloads)}</span>
        </div>
      )}
      {stars && (
        <div className="flex items-center gap-1" title={`${stars} stars`}>
          <Star className="w-3 h-3" />
          <span>{formatCompactNumber(stars)}</span>
        </div>
      )}
    </div>
  );
}
