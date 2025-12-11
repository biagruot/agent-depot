'use client';

import { Suspense } from 'react';
import { usePageTracking } from '@/hooks/usePageTracking';
import { useScrollTracking } from '@/hooks/useScrollTracking';
import { useTimeTracking } from '@/hooks/useTimeTracking';

interface PageTrackerProps {
  tool?: string;
  agentId?: string;
}

function PageTrackerContent({ tool, agentId }: PageTrackerProps) {
  // Track page view with context
  usePageTracking({ 
    tool, 
    agent_id: agentId 
  });

  // Track scroll depth (if agentId is provided, it's included in events)
  useScrollTracking(agentId);

  // Track time on page
  useTimeTracking();

  return null;
}

/**
 * Client component to handle analytics tracking for pages.
 * Handles page views, scroll depth, and time on page.
 * Wrapped in Suspense because usePageTracking uses useSearchParams.
 * 
 * Usage:
 * <PageTracker tool="cursor" agentId="agent-123" />
 */
export function PageTracker(props: PageTrackerProps) {
  return (
    <Suspense fallback={null}>
      <PageTrackerContent {...props} />
    </Suspense>
  );
}
