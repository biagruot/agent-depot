import { Navbar } from "@/components/Navbar";
import { Github, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SubmitPage() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 max-w-3xl text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
          Submit an Agent
        </h1>
        <p className="text-xl text-gray-400 mb-16 max-w-xl mx-auto leading-relaxed">
          Help the community discover the best AI coding agents. 
          We review every submission to ensure quality and safety.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <Link 
            href="https://github.com/agentdepot/directory/issues/new?template=agent_submission.md"
            target="_blank"
            className="group glass-panel p-8 rounded-3xl hover:border-white/20 transition-all hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col items-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10">
              <Github className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-white">Submit via GitHub</h2>
            <p className="text-gray-400 text-sm mb-6">
              Create an issue with your agent details. Best for developers.
            </p>
            <div className="mt-auto flex items-center text-sm font-medium text-purple-400 group-hover:text-purple-300">
              Open Issue <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link 
            href="mailto:submit@agentdepot.io"
            className="group glass-panel p-8 rounded-3xl hover:border-white/20 transition-all hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col items-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-white">Submit via Email</h2>
            <p className="text-gray-400 text-sm mb-6">
              Send us your agent details directly. We'll handle the rest.
            </p>
            <div className="mt-auto flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300">
              Send Email <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        <div className="p-8 glass-panel rounded-2xl text-left border-l-4 border-l-blue-500">
          <h3 className="font-bold text-white mb-4 text-lg">Submission Guidelines</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
              Agent must be relevant to AI coding (Claude, Windsurf, Cursor, Replit).
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
              Must have a public repository or download link.
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
              Include clear installation instructions.
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
              No malicious code or obfuscated scripts.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
