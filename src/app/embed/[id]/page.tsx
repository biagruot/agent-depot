import { agents } from "@/data/agents";
import { Copy, Check, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EmbedClient } from "./EmbedClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return agents.map((agent) => ({
    id: agent.id,
  }));
}

export default async function EmbedPage({ params }: PageProps) {
  const { id } = await params;
  const agent = agents.find((a) => a.id === id);

  if (!agent) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 flex flex-col justify-center">
      <div className="border border-white/10 rounded-xl bg-[#111] p-4 shadow-2xl">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h1 className="text-lg font-bold text-white flex items-center gap-2">
              {agent.name}
              {agent.verified && (
                <span className="bg-blue-500/10 text-blue-400 text-[10px] px-1.5 py-0.5 rounded-full border border-blue-500/20">
                  Verified
                </span>
              )}
            </h1>
            <p className="text-xs text-gray-400">by {agent.author.name}</p>
          </div>
          <Link 
            href={`https://agentdepot.dev/agent/${agent.id}`} 
            target="_blank"
            className="p-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-sm text-gray-400 line-clamp-2 mb-4">
          {agent.description}
        </p>

        <EmbedClient command={agent.installation.command} />

        <div className="mt-4 flex justify-between items-center border-t border-white/5 pt-3">
          <div className="flex gap-2">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5 uppercase tracking-wider">
              {agent.tool}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5 uppercase tracking-wider">
              {agent.type}
            </span>
          </div>
          <Link 
            href="https://agentdepot.dev" 
            target="_blank"
            className="text-[10px] text-gray-500 hover:text-gray-300 transition-colors font-medium"
          >
            Powered by AgentDepot
          </Link>
        </div>
      </div>
    </div>
  );
}
