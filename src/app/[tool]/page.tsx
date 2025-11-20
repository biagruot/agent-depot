import { agents } from "@/data/agents";
import { AgentCard } from "@/components/AgentCard";
import { Navbar } from "@/components/Navbar";
import { SearchFilters } from "@/components/SearchFilters";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const VALID_TOOLS = ["claude", "windsurf", "cursor", "replit"] as const;
type Tool = typeof VALID_TOOLS[number];

interface ToolPageProps {
  params: Promise<{
    tool: string;
  }>;
}

export async function generateStaticParams() {
  return VALID_TOOLS.map((tool) => ({
    tool,
  }));
}

export async function generateMetadata({ params }: ToolPageProps) {
  const { tool } = await params;
  
  if (!VALID_TOOLS.includes(tool as Tool)) {
    return {
      title: "Tool Not Found - AgentDepot",
    };
  }

  const toolNames: Record<Tool, string> = {
    claude: "Claude Code",
    windsurf: "Windsurf",
    cursor: "Cursor",
    replit: "Replit",
  };

  return {
    title: `${toolNames[tool as Tool]} Agents - AgentDepot`,
    description: `Discover and browse verified AI coding agents for ${toolNames[tool as Tool]}. Curated collection of plugins, rules, and extensions.`,
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { tool } = await params;

  if (!VALID_TOOLS.includes(tool as Tool)) {
    notFound();
  }

  const toolAgents = agents.filter((agent) => agent.tool === tool);
  const verifiedCount = toolAgents.filter((a) => a.verified).length;
  const featuredCount = toolAgents.filter((a) => a.featured).length;

  const toolInfo: Record<Tool, { name: string; gradient: string; description: string }> = {
    claude: {
      name: "Claude Code",
      gradient: "from-orange-600 to-red-600",
      description: "Powerful plugins and agents for Anthropic's Claude Code. Build, debug, and deploy with AI assistance.",
    },
    windsurf: {
      name: "Windsurf",
      gradient: "from-blue-600 to-cyan-600",
      description: "Agentic IDE rules and configurations for Windsurf by Codeium. Intelligent code generation and workflows.",
    },
    cursor: {
      name: "Cursor",
      gradient: "from-purple-600 to-pink-600",
      description: "Cursor rules and integrations for the AI-first code editor. Customize your AI coding experience.",
    },
    replit: {
      name: "Replit",
      gradient: "from-orange-600 to-yellow-600",
      description: "Templates and extensions for Replit. Build and deploy directly from your browser.",
    },
  };

  const currentTool = toolInfo[tool as Tool];

  return (
    <main className="min-h-screen relative">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to all agents
          </Link>

          <div className="max-w-4xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {toolAgents.length} Agents Available
            </div>
            
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r ${currentTool.gradient} bg-clip-text text-transparent`}>
              {currentTool.name} Agents
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl">
              {currentTool.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-white">{toolAgents.length}</span>
                <span className="text-gray-500 text-sm">Total Agents</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-green-400">{verifiedCount}</span>
                <span className="text-gray-500 text-sm">Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-yellow-400">{featuredCount}</span>
                <span className="text-gray-500 text-sm">Featured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-4 px-4 pb-32">
        <div className="container mx-auto max-w-7xl">
          {toolAgents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[280px]">
              {toolAgents.map((agent) => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>
          ) : (
            <div className="text-center py-32 glass-panel rounded-3xl">
              <p className="text-xl text-gray-400">No agents found for {currentTool.name}.</p>
              <Link 
                href="/"
                className="mt-4 inline-block text-primary hover:text-white transition-colors"
              >
                Browse all agents
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 mt-auto bg-black/20 backdrop-blur-lg">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2025 AgentDepot. Built for the AI coding community.
          </p>
        </div>
      </footer>
    </main>
  );
}
