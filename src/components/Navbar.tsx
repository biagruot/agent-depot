"use client";

import Link from "next/link";
import { Github, Download } from "lucide-react";
import { agents } from "@/data/agents";

export function Navbar() {

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform">
            <span className="font-bold text-white text-lg">A</span>
          </div>
          {/* <span className="font-bold text-lg tracking-tight text-white">AgentDepot</span> */}
        </Link>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Downloads Counter */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-400 hover:bg-white/10 transition-colors cursor-default whitespace-nowrap">
            <Download className="w-3.5 h-3.5" />
            <span>{agents.reduce((acc, a) => acc + (a.stats?.downloads || 0), 0).toLocaleString()}</span>
            <span className="hidden sm:inline">downloads</span>
          </div>


          <a
            href="https://github.com/agentdepot/directory"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-gray-300 group-hover:text-white hidden lg:inline">Star on GitHub</span>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white lg:hidden">Star</span>
            </div>

            {/* Separator */}
            <div className="w-px h-4 bg-white/10 mx-1" />

            {/* Star Count */}
            <div className="flex items-center gap-1 text-xs font-mono text-gray-400 group-hover:text-yellow-400 transition-colors">
              <span className="font-bold">142</span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}
