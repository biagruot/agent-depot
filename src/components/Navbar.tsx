"use client";

import Link from "next/link";
import { Github } from "lucide-react";
import { AuthButton } from "./auth/AuthButton";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/browse", label: "Browse" },
    { href: "/blog", label: "Blog" },
    { href: "/mcp", label: "MCP" },
    { href: "/faq", label: "FAQ" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-black/40 backdrop-blur-xl backdrop-saturate-150">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Left: Logo + Nav Links */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href="/" className="group">
              <span className="font-bold text-lg text-white group-hover:text-white/90 transition-colors">
                AgentDepot
              </span>
            </Link>

            {/* Navigation Links - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200
                    ${isActive(link.href)
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                    }
                  `}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <div className="absolute inset-0 bg-white/[0.06] rounded-lg -z-10" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            {/* Auth Button */}
            <AuthButton />

            {/* GitHub Button */}
            <a
              href="https://github.com/agentdepot/directory"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-200 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative flex items-center gap-2">
                <Github className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-xs font-medium text-gray-400 group-hover:text-white hidden lg:inline transition-colors">
                  Star us
                </span>

                {/* Star Count */}
                <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/[0.08]">
                  <span className="text-xs font-mono font-semibold text-gray-300 group-hover:text-yellow-400 transition-colors">
                    142
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Mobile Navigation - Bottom Border Menu */}
        <div className="md:hidden flex items-center gap-4 pb-2 border-t border-white/[0.05] pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                text-xs font-medium transition-colors
                ${isActive(link.href)
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

