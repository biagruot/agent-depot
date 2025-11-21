import { SubmitForm } from "@/components/SubmitForm";
import { Github, Mail, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Submit an Agent - AgentDepot",
  description: "Submit your AI coding agent to AgentDepot. Help the community discover the best agents for Claude, Windsurf, Cursor, and Replit.",
};

export default function SubmitPage() {
  return (
    <main className="min-h-screen relative pb-32">
      
      <div className="container mx-auto px-4 pt-32 max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 mb-6">
            <CheckCircle size={14} className="text-green-400" />
            Free & Open to All
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Submit an Agent
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Help the community discover the best AI coding agents. 
            We review every submission to ensure quality and safety.
          </p>
        </div>

        {/* Main Form */}
        <SubmitForm />

        {/* Alternative Methods */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <h2 className="text-2xl font-bold text-center text-white mb-8">Other Submission Methods</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link 
              href="https://github.com/agentdepot/directory/issues/new?template=agent_submission.md"
              target="_blank"
              className="group glass-panel p-8 rounded-3xl hover:border-white/20 transition-all hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col items-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Submit via GitHub</h3>
              <p className="text-gray-400 text-sm mb-6 text-center">
                Create an issue with your agent details. Best for developers.
              </p>
              <div className="mt-auto flex items-center text-sm font-medium text-purple-400 group-hover:text-purple-300">
                Open Issue <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link 
              href="mailto:submit@agentdepot.dev"
              className="group glass-panel p-8 rounded-3xl hover:border-white/20 transition-all hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col items-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Submit via Email</h3>
              <p className="text-gray-400 text-sm mb-6 text-center">
                Send us your agent details directly. We'll handle the rest.
              </p>
              <div className="mt-auto flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300">
                Send Email <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>

        {/* Guidelines */}
        <div className="mt-16">
          <div className="p-8 glass-panel rounded-3xl border-l-4 border-l-blue-500">
            <h3 className="font-bold text-white mb-6 text-xl">Submission Guidelines</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span>Agent must be relevant to AI coding (Claude, Windsurf, Cursor, Replit).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span>Must have a public repository or download link.</span>
                </li>
              </ul>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span>Include clear installation instructions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span>No malicious code or obfuscated scripts.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
