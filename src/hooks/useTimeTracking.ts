'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useOpenPanel } from '@openpanel/nextjs';
import { analyticsEvents } from '@/lib/analytics';

/**
 * Hook to track time spent on a page
 * Tracks when user leaves the page (navigates away or closes tab)
 * Considers users "engaged" if they spend more than 30 seconds
 */
export function useTimeTracking() {
  const pathname = usePathname();
  const { track } = useOpenPanel();
  const startTime = useRef(Date.now());

  useEffect(() => {
    // Reset start time when pathname changes
    startTime.current = Date.now();

    // Track time on page when component unmounts or pathname changes
    return () => {
      const timeSpent = Math.floor((Date.now() - startTime.current) / 1000);

      // Only track if user spent at least 1 second (avoid immediate bounces)
      if (timeSpent >= 1) {
        const [eventName, data] = analyticsEvents.timeOnPage({
          page: pathname,
          seconds: timeSpent,
          engaged: timeSpent > 30, // More than 30 seconds = engaged
        });

        track(eventName, data);
      }
    };
  }, [pathname, track]);
}
