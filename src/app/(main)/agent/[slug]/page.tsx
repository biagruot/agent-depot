import { agents } from "@/data/agents";
import { Navbar } from "@/components/Navbar";
import { ArrowLeft, Github, Globe, Terminal, Copy, Check, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Metadata } from "next";

// Generate static params for all agents
export async function generateStaticParams() {
  return agents.map((agent) => ({
    slug: agent.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const agent = agents.find((a) => a.id === slug);
  if (!agent) return { title: "Agent Not Found" };
  return {
    title: `${agent.name} for ${agent.tool} | AgentDepot`,
    description: agent.description,
  };
}

export default async function AgentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const agent = agents.find((a) => a.id === slug);

  if (!agent) {
    notFound();
  }

  const toolColors = {
    "claude-code": "text-[#d97757] border-[#d97757]/20 bg-[#d97757]/10",
    windsurf: "text-[#3b82f6] border-[#3b82f6]/20 bg-[#3b82f6]/10",
    cursor: "text-[#a855f7] border-[#a855f7]/20 bg-[#a855f7]/10",
    replit: "text-[#f97316] border-[#f97316]/20 bg-[#f97316]/10",
    mcp: "text-[#22c55e] border-[#22c55e]/20 bg-[#22c55e]/10",
  };

  return (
    <main className="min-h-screen relative pb-20">
      <Navbar />

      <div className="container mx-auto px-4 pt-32 max-w-5xl relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm text-gray-500 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Directory
        </Link>

        <div className="glass-panel rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/50 relative overflow-hidden">
          {/* Background Glow */}
          <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-${agent.tool === 'claude-code' ? 'orange' : agent.tool === 'windsurf' ? 'blue' : agent.tool === 'cursor' ? 'purple' : 'orange'}-500/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3`} />

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12 border-b border-white/5 pb-12 relative">
            <div className="space-y-6 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border uppercase tracking-wider ${toolColors[agent.tool]}`}>
                  {agent.tool}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-400 border border-white/10 uppercase tracking-wider">
                  {agent.category}
                </span>
              </div>
              
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">{agent.name}</h1>
                <p className="text-xl text-gray-400 leading-relaxed">{agent.description}</p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {agent.links?.github && (
                  <Link 
                    href={agent.links.github} 
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    View Source
                  </Link>
                )}
                {agent.links?.website && (
                  <Link 
                    href={agent.links.website} 
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors text-sm font-medium"
                  >
                    <Globe className="w-4 h-4" />
                    Website
                  </Link>
                )}
              </div>
            </div>
            
            {/* Stats / Meta */}
            <div className="flex flex-col gap-4 min-w-[200px]">
               <div className="p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Author</div>
                  <div className="font-medium text-white flex items-center gap-2">
                    {agent.author.name}
                    {agent.verified && <Check className="w-3.5 h-3.5 text-blue-400" />}
                  </div>
               </div>
               <div className="p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Added</div>
                  <div className="font-medium text-white">{agent.createdAt}</div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Installation */}
              <section>
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                  <Terminal className="w-5 h-5 text-gray-400" />
                  Installation
                </h2>
                <div className="bg-[#0A0A0A] rounded-xl border border-white/10 p-5 font-mono text-sm relative group shadow-inner">
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 bg-white/10 rounded-md hover:bg-white/20 text-gray-400 hover:text-white transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  {agent.installation.command ? (
                    <div className="flex items-start gap-3">
                      <span className="text-gray-600 select-none">$</span>
                      <code className="text-green-400 break-all">
                        {agent.installation.command}
                      </code>
                    </div>
                  ) : (
                    <div className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                      {agent.installation.instructions || "See documentation for installation."}
                    </div>
                  )}
                </div>
              </section>

              {/* Description */}
              <section className="prose prose-invert max-w-none prose-p:text-gray-400 prose-headings:text-white prose-a:text-blue-400 prose-code:text-pink-300 prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none">
                <h2 className="text-lg font-semibold mb-4 text-white">About this Agent</h2>
                <ReactMarkdown>
                  {agent.fullDescription || agent.description}
                </ReactMarkdown>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-500">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {agent.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs text-gray-300 border border-white/5 hover:border-white/20 transition-colors cursor-default">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5">
                <h3 className="font-semibold mb-2 text-white">Contribute</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Found a bug or want to improve this agent? Check out the source code.
                </p>
                <Link 
                  href={agent.links?.github || "#"}
                  target="_blank"
                  className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  View on GitHub <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
