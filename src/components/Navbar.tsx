import Link from "next/link";
import { Github, Plus } from "lucide-react";

export function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4">
      <nav className="glass-panel rounded-full px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/50">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-colors">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="font-semibold text-sm tracking-tight text-gray-200 group-hover:text-white transition-colors">
            AgentDepot
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <Link 
            href="/submit" 
            className="text-xs font-medium text-gray-400 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            Submit
          </Link>
          <div className="w-px h-4 bg-white/10 mx-1" />
          <Link 
            href="https://github.com/agentdepot/directory" 
            target="_blank"
            className="text-gray-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all"
          >
            <Github className="w-4 h-4" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
