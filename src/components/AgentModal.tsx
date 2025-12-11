"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import { Agent } from "@/types/agent";
import ReactMarkdown from "react-markdown";
import { ShareButton } from "./ShareButton";
import { useOpenPanel } from "@openpanel/nextjs";
import { InstallationBlock } from "./InstallationBlock";
import { RuleBlock } from "./RuleBlock";

interface AgentModalProps {
  agent: Agent | null;
  isOpen: boolean;
  onClose: () => void;
}

export function AgentModal({ agent, isOpen, onClose }: AgentModalProps) {


  const { track } = useOpenPanel();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Track agent view
      if (agent) {
        track('agent_view', {
          agent_id: agent.id,
          agent_name: agent.name,
          tool: agent.tool,
          type: agent.type
        });
      }
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, agent, track]);



  if (!agent) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl flex flex-col">


              {/* Header */}
              <div className="p-6 border-b border-white/5 flex justify-between items-start sticky top-0 bg-[#1a1a1a]/95 backdrop-blur z-10">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-white">{agent.name}</h2>
                  </div>
                  <p className="text-gray-400">
                    by{' '}
                    {agent.author.url || agent.author.github ? (
                      <a 
                        href={agent.author.url || agent.author.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors border-b border-transparent hover:border-gray-400"
                      >
                        {agent.author.name}
                      </a>
                    ) : (
                      agent.author.name
                    )}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <ShareButton agent={agent} />
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-8">
                {/* Description */}
                <div className="space-y-6">
                  <div className="prose prose-invert max-w-none">
                    <ReactMarkdown>{agent.description}</ReactMarkdown>
                  </div>

                  {agent.fullDescription && (
                    agent.type === 'rule' ? (
                      <RuleBlock content={agent.fullDescription} />
                    ) : (
                      <div className="text-gray-400 whitespace-pre-wrap leading-relaxed pt-4 border-t border-white/5 font-sans">
                        {agent.fullDescription}
                      </div>
                    )
                  )}
                </div>

                {/* Installation */}
                <InstallationBlock installation={agent.installation} />

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {agent.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-400 border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-white/5">
                  {agent.links?.github && (
                    <a
                      href={agent.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => track('agent_link_click', {
                        type: 'github',
                        agent_id: agent.id,
                        url: agent.links?.github
                      })}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      View on GitHub
                    </a>
                  )}
                  {agent.links?.website && (
                    <a
                      href={agent.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => track('agent_link_click', {
                        type: 'website',
                        agent_id: agent.id,
                        url: agent.links?.website
                      })}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
