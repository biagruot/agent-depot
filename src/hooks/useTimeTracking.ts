"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useOpenPanel } from "@openpanel/nextjs";
import { analyticsEvents } from "@/lib/analytics";

/**
 * Tracks time spent on a page. Records on unmount / pathname change.
 * Users are considered "engaged" past 30 seconds.
 */
export function useTimeTracking() {
  const pathname = usePathname();
  const { track } = useOpenPanel();
  const startTime = useRef(0);

  useEffect(() => {
    startTime.current = Date.now();

    // Track time on page when the component unmounts or the pathname changes.
    return () => {
      const timeSpent = Math.floor((Date.now() - startTime.current) / 1000);

      // Only track if the user spent at least 1 second (avoid immediate bounces).
      if (timeSpent >= 1) {
        const [eventName, data] = analyticsEvents.timeOnPage({
          page: pathname,
          seconds: timeSpent,
          engaged: timeSpent > 30,
        });

        track(eventName, data);
      }
    };
  }, [pathname, track]);
}
