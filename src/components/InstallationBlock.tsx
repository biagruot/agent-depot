"use client";

import { Copy, Check, ExternalLink, Terminal } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { AgentInstallation } from "@/types/agent";

export function InstallationBlock({ installation }: { installation: AgentInstallation }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (installation.command) {
      navigator.clipboard.writeText(installation.command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section>
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
            <Terminal className="w-5 h-5 text-gray-400" />
            Installation
            {installation.type && (
                <span className="text-xs font-normal text-gray-500 bg-white/5 px-2 py-0.5 rounded-full ml-2 border border-white/5 uppercase">
                {installation.type}
                </span>
            )}
        </h2>
        <div className="bg-[#0A0A0A] rounded-xl border border-white/10 p-5 font-mono text-sm relative group shadow-inner space-y-4">
            {installation.command && (
                <div className="relative">
                     <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                            onClick={handleCopy}
                            className="p-2 bg-white/10 rounded-md hover:bg-white/20 text-gray-400 hover:text-white transition-colors"
                            title="Copy command"
                        >
                            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                        </button>
                     </div>
                    <div className="flex items-start gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                        <span className="text-gray-600 select-none shrink-0">$</span>
                        <code className="text-green-400 break-all">
                            {installation.command}
                        </code>
                    </div>
                </div>
            )}

            {installation.url && (
                <div className="flex items-center gap-3">
                    <Link href={installation.url} target="_blank" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors">
                         <ExternalLink className="w-4 h-4" />
                         Visit Installation Page
                    </Link>
                </div>
            )}

            {(installation.manual || installation.instructions) && (
                <div className={`text-gray-300 whitespace-pre-wrap leading-relaxed font-sans ${(installation.command || installation.url) ? 'border-t border-white/10 pt-4' : ''}`}>
                    {installation.manual || installation.instructions}
                </div>
            )}
            
            {!installation.command && !installation.url && !installation.manual && !installation.instructions && (
                 <div className="text-gray-500 italic">No specific installation instructions provided.</div>
            )}
        </div>
    </section>
  );
}
