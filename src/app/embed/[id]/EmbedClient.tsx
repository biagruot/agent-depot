"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function EmbedClient({ command }: { command?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (command) {
      navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!command) return null;

  return (
    <div className="bg-black/30 rounded-lg p-2 border border-white/5 flex gap-2 items-center group">
      <code className="flex-1 font-mono text-xs text-green-400 truncate px-1">
        {command}
      </code>
      <button
        onClick={handleCopy}
        className="bg-white/10 hover:bg-white/20 text-white p-1.5 rounded-md transition-colors"
        title="Copy command"
      >
        {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
}
