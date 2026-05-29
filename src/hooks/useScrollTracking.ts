"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useOpenPanel } from "@openpanel/nextjs";
import { analyticsEvents } from "@/lib/analytics";

/**
 * Hook to track scroll depth at 25%, 50%, 75%, and 100%
 * Each threshold is only tracked once per page
 *
 * @param agentId - Optional agent ID if tracking on an agent detail page
 */
export function useScrollTracking(agentId?: string) {
  const pathname = usePathname();
  const { track } = useOpenPanel();
  const tracked = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || window.pageYOffset;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

      // Check each threshold
      const thresholds: Array<25 | 50 | 75 | 100> = [25, 50, 75, 100];

      thresholds.forEach((threshold) => {
        if (scrollPercent >= threshold && !tracked.current.has(threshold)) {
          tracked.current.add(threshold);

          const [eventName, data] = analyticsEvents.scrollDepth({
            page: pathname,
            depth: threshold,
            agent_id: agentId,
          });

          track(eventName, data);
        }
      });
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Check on mount (in case already scrolled)
    handleScroll();

    // Capture the ref so cleanup clears the same Set this effect populated.
    const trackedThresholds = tracked.current;

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Reset tracked thresholds when pathname changes
      trackedThresholds.clear();
    };
  }, [pathname, track, agentId]);
}
