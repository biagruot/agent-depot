"use client";

import { Check, Link2 } from "lucide-react";
import { useState } from "react";
import { useOpenPanel } from "@openpanel/nextjs";
import { analyticsEvents } from "@/lib/analytics";

interface ShareFiltersButtonProps {
  searchQuery?: string;
  selectedTool?: string;
  selectedType?: string;
  currentSort?: string;
  resultsCount?: number;
}

export function ShareFiltersButton({
  searchQuery = "",
  selectedTool = "all",
  selectedType = "all",
  currentSort = "popular",
  resultsCount = 0,
}: ShareFiltersButtonProps) {
  const [copied, setCopied] = useState(false);
  const { track } = useOpenPanel();

  const handleShare = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    // Track share filters click
    const [eventName, data] = analyticsEvents.shareFiltersClick({
      query: searchQuery,
      tool: selectedTool,
      type: selectedType,
      sort: currentSort,
      results_count: resultsCount,
      action: "copy_link",
    });

    track(eventName, data);
  };

  return (
    <button
      onClick={handleShare}
      className={`
        flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200
        ${
          copied
            ? "bg-green-500/20 text-green-400 border border-green-500/30"
            : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20"
        }
      `}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Link2 className="w-4 h-4" />
          <span>Share View</span>
        </>
      )}
    </button>
  );
}
