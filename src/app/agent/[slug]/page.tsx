import { agents } from "@/data/agents";
import { Navbar } from "@/components/Navbar";
import { ArrowLeft, Github, Globe, Terminal, Copy, Check } from "lucide-react";
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

  return (
    <main className="min-h-screen bg-background pb-20">
      <Navbar />

      <div className="container mx-auto px-4 pt-10 max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm text-gray-500 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Directory
        </Link>

        <div className="bg-card-bg border border-card-border rounded-2xl p-8 md:p-10 shadow-2xl shadow-black/50">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8 border-b border-card-border pb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">
                  {agent.tool}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-400 border border-white/10 uppercase tracking-wider">
                  {agent.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-3">{agent.name}</h1>
              <p className="text-xl text-gray-400">{agent.description}</p>
            </div>
            
            <div className="flex gap-3">
              {agent.links?.github && (
                <Link 
                  href={agent.links.github} 
                  target="_blank"
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </Link>
              )}
              {agent.links?.website && (
                <Link 
                  href={agent.links.website} 
                  target="_blank"
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors"
                >
                  <Globe className="w-6 h-6" />
                </Link>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Installation */}
              <section>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-primary" />
                  Installation
                </h2>
                <div className="bg-black/50 rounded-xl border border-card-border p-4 font-mono text-sm relative group">
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    {/* Copy button logic would go here (client component needed for interactivity, keeping simple for server component) */}
                    <button className="p-2 bg-white/10 rounded-md hover:bg-white/20">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  {agent.installation.command ? (
                    <code className="text-green-400">
                      $ {agent.installation.command}
                    </code>
                  ) : (
                    <div className="text-gray-300 whitespace-pre-wrap">
                      {agent.installation.instructions || "See documentation for installation."}
                    </div>
                  )}
                </div>
              </section>

              {/* Description */}
              <section className="prose prose-invert max-w-none prose-p:text-gray-400 prose-headings:text-white prose-a:text-primary">
                <h2 className="text-xl font-semibold mb-4">About this Agent</h2>
                <ReactMarkdown>
                  {agent.fullDescription || agent.description}
                </ReactMarkdown>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-500">Metadata</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Author</span>
                    <span className="text-white font-medium">{agent.author.name}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Added</span>
                    <span className="text-white font-medium">{agent.createdAt}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">License</span>
                    <span className="text-white font-medium">MIT</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Verified</span>
                    <span className="text-green-400 flex items-center gap-1">
                      <Check className="w-3 h-3" /> Yes
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-500">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {agent.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-white/5 rounded-md text-xs text-gray-300 border border-white/5">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
