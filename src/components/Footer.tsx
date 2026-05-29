import Link from "next/link";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/40 backdrop-blur-xl pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <Link href="/" className="group">
              <span className="text-xl font-bold text-white group-hover:text-white/90 transition-colors">
                AgentDepot
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              An open directory of AI coding tools. Discover, install, and ship faster with curated
              rules for Cursor, Windsurf, and Claude.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/biagruot/agentdepot-agents"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our GitHub"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Tools Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Browse by Tool
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/?tool=cursor"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Cursor Rules
                </Link>
              </li>
              <li>
                <Link
                  href="/?tool=windsurf"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Windsurf Agents
                </Link>
              </li>
              <li>
                <Link
                  href="/?tool=claude-code"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Claude Code Plugins
                </Link>
              </li>
              <li>
                <Link
                  href="/?tool=replit"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Replit Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/?tool=mcp"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  MCP Servers
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Searches (SEO) */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Popular</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/?q=react&tool=cursor"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Cursor React Rules
                </Link>
              </li>
              <li>
                <Link
                  href="/?q=python&tool=windsurf"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Windsurf Python Agents
                </Link>
              </li>
              <li>
                <Link
                  href="/?q=nextjs"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Next.js Agents
                </Link>
              </li>
              <li>
                <Link
                  href="/?type=rule"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Coding Rules
                </Link>
              </li>
              <li>
                <Link
                  href="/?type=mcp"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Best MCP Servers
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/submit"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Submit Agent
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/biagruot/agentdepot-agents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} AgentDepot. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <span>Built by developers, for developers.</span>
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
