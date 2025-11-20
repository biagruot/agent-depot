import Link from "next/link";
import { Github } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b border-card-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <span className="font-bold text-xl tracking-tight">AgentDepot</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link 
            href="/submit" 
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Submit Agent
          </Link>
          <Link 
            href="https://github.com/agentdepot/directory" 
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
