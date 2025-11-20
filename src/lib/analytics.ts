// Analytics utility for tracking events
// Designed to work with privacy-focused analytics like Plausible or Umami

declare global {
  interface Window {
    plausible?: (event: string, options?: { props: Record<string, string | number> }) => void;
    umami?: {
      track: (event: string, data?: Record<string, string | number>) => void;
    };
  }
}

export const analytics = {
  // Track page views (automatically handled by Plausible/Umami script)
  pageView: (url: string) => {
    if (typeof window === 'undefined') return;
    
    // Page views are automatically tracked by analytics scripts
    // This is here for potential custom tracking needs
    console.log('[Analytics] Page view:', url);
  },

  // Track custom events
  event: (eventName: string, props?: Record<string, string | number>) => {
    if (typeof window === 'undefined') return;

    // Plausible
    if (window.plausible) {
      window.plausible(eventName, { props: props || {} });
    }

    // Umami
    if (window.umami) {
      window.umami.track(eventName, props);
    }

    // Development logging
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics] Event:', eventName, props);
    }
  },

  // Pre-defined event tracking methods
  searchQuery: (query: string) => {
    analytics.event('search', { query });
  },

  collectionClick: (collectionId: string, collectionName: string) => {
    analytics.event('collection_click', {
      collection_id: collectionId,
      collection_name: collectionName,
    });
  },

  agentView: (agentId: string, agentName: string, tool: string) => {
    analytics.event('agent_view', {
      agent_id: agentId,
      agent_name: agentName,
      tool,
    });
  },

  toolFilter: (tool: string) => {
    analytics.event('tool_filter', { tool });
  },

  submitFormStart: () => {
    analytics.event('submit_form_start');
  },

  submitFormComplete: () => {
    analytics.event('submit_form_complete');
  },

  externalLink: (url: string, label: string) => {
    analytics.event('external_link', {
      url,
      label,
    });
  },
};

// For easier imports
export const trackSearch = analytics.searchQuery;
export const trackCollectionClick = analytics.collectionClick;
export const trackAgentView = analytics.agentView;
export const trackToolFilter = analytics.toolFilter;
export const trackSubmitForm = analytics.submitFormStart;
export const trackSubmitComplete = analytics.submitFormComplete;
export const trackExternalLink = analytics.externalLink;
