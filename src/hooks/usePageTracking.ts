"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useOpenPanel } from "@openpanel/nextjs";
import { analyticsEvents, getReferrer, getUtmSource, getUtmCampaign } from "@/lib/analytics";

/**
 * Hook to track page views and funnel entry
 * Automatically tracks when pathname changes
 *
 * @param options - Optional tracking parameters
 * @param options.tool - Tool name if on a tool-specific page
 * @param options.agent_id - Agent ID if on an agent detail page
 */
export function usePageTracking(options?: { tool?: string; agent_id?: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { track } = useOpenPanel();

  useEffect(() => {
    // Track page view
    const [eventName, data] = analyticsEvents.pageView({
      page: pathname,
      referrer: getReferrer(),
      tool: options?.tool,
      agent_id: options?.agent_id,
    });

    track(eventName, data);

    // Track funnel entry on homepage
    if (pathname === "/") {
      const [funnelEventName, funnelData] = analyticsEvents.funnelEntry({
        source: getUtmSource(),
        campaign: getUtmCampaign(),
        referrer: getReferrer(),
      });

      track(funnelEventName, funnelData);
    }
  }, [pathname, searchParams, track, options?.tool, options?.agent_id]);
}
