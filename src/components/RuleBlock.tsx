"use client";

import { Check, Copy, FileText } from "lucide-react";
import { useState } from "react";

export function RuleBlock({ content }: { content: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
          <FileText className="w-4 h-4" />
          Rule Content
        </h3>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-white/5 hover:bg-white/10 text-gray-300 transition-colors border border-white/10 group/btn"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-green-400" />
              <span className="text-green-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 group-hover/btn:text-white" />
              <span className="group-hover/btn:text-white">Copy Rule</span>
            </>
          )}
        </button>
      </div>

      <div className="bg-[#0A0A0A] rounded-xl border border-white/10 p-4 font-mono text-sm overflow-x-auto max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent shadow-inner">
        <pre className="text-gray-300 whitespace-pre-wrap leading-relaxed">{content}</pre>
      </div>
    </div>
  );
}
