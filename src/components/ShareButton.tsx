"use client";

import { useState } from "react";
import { Share2, Check, Copy, Twitter, Mail, Code } from "lucide-react";
import { Agent } from "@/types/agent";
import { motion, AnimatePresence } from "framer-motion";
import { useOpenPanel } from "@openpanel/nextjs";

interface ShareButtonProps {
  agent: Agent;
  className?: string;
}

export function ShareButton({ agent, className = "" }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [embedCopied, setEmbedCopied] = useState(false);
  const { track } = useOpenPanel();

  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/agent/${agent.id}`
      : `https://agentdepot.dev/agent/${agent.id}`;
  const embedUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/embed/${agent.id}`
      : `https://agentdepot.dev/embed/${agent.id}`;
  const shareText = `Check out ${agent.name} for ${agent.tool} on @AgentDepot 🔥`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    track("agent_share", {
      platform: "link",
      agent_id: agent.id,
      agent_name: agent.name,
      tool: agent.tool,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyEmbed = () => {
    const embedCode = `<iframe src="${embedUrl}" width="100%" height="250" style="border:none; border-radius: 12px; overflow: hidden;" title="${agent.name} on AgentDepot"></iframe>`;
    navigator.clipboard.writeText(embedCode);
    setEmbedCopied(true);
    track("agent_share", {
      platform: "embed",
      agent_id: agent.id,
      agent_name: agent.name,
      tool: agent.tool,
    });
    setTimeout(() => setEmbedCopied(false), 2000);
  };

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    track("agent_share", {
      platform: "twitter",
      agent_id: agent.id,
      agent_name: agent.name,
      tool: agent.tool,
    });
    window.open(url, "_blank");
  };

  const handleEmailShare = () => {
    const subject = `Check out this AI agent: ${agent.name}`;
    const body = `I found this great AI agent for ${agent.tool}:\n\n${agent.name}\n${agent.description}\n\nCheck it out here: ${shareUrl}`;
    track("agent_share", {
      platform: "email",
      agent_id: agent.id,
      agent_name: agent.name,
      tool: agent.tool,
    });
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors border border-white/5"
      >
        <Share2 className="w-4 h-4" />
        Share
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute right-0 mt-2 w-56 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-xl z-20 overflow-hidden"
            >
              <div className="p-1">
                <button
                  onClick={handleTwitterShare}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left"
                >
                  <Twitter className="w-4 h-4 text-blue-400" />
                  Twitter
                </button>
                <button
                  onClick={handleEmailShare}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left"
                >
                  <Mail className="w-4 h-4 text-gray-400" />
                  Email
                </button>
                <div className="h-px bg-white/5 my-1" />
                <button
                  onClick={handleCopyLink}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400" />
                  )}
                  {copied ? "Copied Link!" : "Copy Link"}
                </button>
                <button
                  onClick={handleCopyEmbed}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left"
                >
                  {embedCopied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Code className="w-4 h-4 text-purple-400" />
                  )}
                  {embedCopied ? "Copied Embed!" : "Copy Embed Code"}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
