import { Metadata } from "next";
import { PageTracker } from "@/components/PageTracker";

export const metadata: Metadata = {
  title: "MCP Servers | AgentDepot",
  description: "Discover Model Context Protocol (MCP) servers for Claude and other AI tools.",
};

export default function MCPPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageTracker tool="mcp" />
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold text-white">Model Context Protocol (MCP) Servers</h1>
        <p className="text-xl text-gray-400">
          Extend your AI&apos;s capabilities with standard context servers.
        </p>

        <div className="p-12 glass-panel rounded-3xl mt-12 border border-dashed border-white/20">
          <p className="text-2xl text-gray-500">Coming Soon</p>
          <p className="text-gray-400 mt-2">We are curating the best MCP servers for you.</p>
        </div>
      </div>
    </div>
  );
}
