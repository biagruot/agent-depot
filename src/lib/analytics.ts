// Analytics utilities for OpenPanel tracking.
// Each factory returns a typed [eventName, data] tuple; in components do:
//   const { track } = useOpenPanel();
//   const [name, data] = analyticsEvents.searchResultsViewed({ ... });
//   track(name, data);

/**
 * Strongly-typed analytics event definitions for user-journey analysis.
 */
export const analyticsEvents = {
  // ============================================
  // PAGE TRACKING
  // ============================================

  pageView: (data: {
    page: string;
    referrer?: string;
    tool?: string;
    agent_id?: string;
  }): ["page_view", typeof data] => {
    return ["page_view", data];
  },

  // ============================================
  // FUNNEL TRACKING
  // ============================================

  funnelEntry: (data: {
    source: string;
    campaign?: string;
    referrer: string;
  }): ["funnel_entry", typeof data] => {
    return ["funnel_entry", data];
  },

  searchResultsViewed: (data: {
    query: string;
    tool: string;
    type: string;
    results_count: number;
    has_results: boolean;
  }): ["search_results_viewed", typeof data] => {
    return ["search_results_viewed", data];
  },

  // ============================================
  // SORT & FILTER TRACKING
  // ============================================

  sortChanged: (data: {
    sort_option: string;
    tool: string;
    query: string;
    results_count: number;
  }): ["sort_changed", typeof data] => {
    return ["sort_changed", data];
  },

  shareFiltersClick: (data: {
    query: string;
    tool: string;
    type: string;
    sort: string;
    results_count: number;
    action: "copy_link" | "share";
  }): ["share_filters_click", typeof data] => {
    return ["share_filters_click", data];
  },

  filtersCleared: (data: {
    had_query: boolean;
    had_tool_filter: boolean;
    had_type_filter: boolean;
    results_count_before: number;
  }): ["filters_cleared", typeof data] => {
    return ["filters_cleared", data];
  },

  // ============================================
  // ENGAGEMENT TRACKING
  // ============================================

  scrollDepth: (data: {
    page: string;
    depth: 25 | 50 | 75 | 100;
    agent_id?: string;
  }): ["scroll_depth", typeof data] => {
    return ["scroll_depth", data];
  },

  timeOnPage: (data: {
    page: string;
    seconds: number;
    engaged: boolean;
  }): ["time_on_page", typeof data] => {
    return ["time_on_page", data];
  },

  agentCardHover: (data: {
    agent_id: string;
    agent_name: string;
    tool: string;
    hover_duration: number;
  }): ["agent_card_hover", typeof data] => {
    return ["agent_card_hover", data];
  },

  // ============================================
  // NAVIGATION TRACKING
  // ============================================

  navigationClick: (data: {
    from: string;
    to: string;
    link_text: string;
    link_type: "tool_page" | "agent_detail" | "footer" | "navbar" | "breadcrumb" | "other";
  }): ["navigation_click", typeof data] => {
    return ["navigation_click", data];
  },

  breadcrumbClick: (data: {
    from: string;
    to: string;
    level: number;
  }): ["breadcrumb_click", typeof data] => {
    return ["breadcrumb_click", data];
  },

  backToTopClick: (data: { scroll_depth: number }): ["back_to_top_click", typeof data] => {
    return ["back_to_top_click", data];
  },

  // ============================================
  // ERROR & NO RESULTS TRACKING
  // ============================================

  noResults: (data: { query: string; tool: string; type: string }): ["no_results", typeof data] => {
    return ["no_results", data];
  },

  agentLoadError: (data: {
    agent_id: string;
    error: string;
  }): ["agent_load_error", typeof data] => {
    return ["agent_load_error", data];
  },

  // ============================================
  // SUBMIT FORM TRACKING
  // ============================================

  submitFormStarted: (data: { agent_name?: string }): ["submit_form_started", typeof data] => {
    return ["submit_form_started", data];
  },

  submitFormCompleted: (data: {
    tool: string;
    type: string;
  }): ["submit_form_completed", typeof data] => {
    return ["submit_form_completed", data];
  },

  submitFormStep: (data: {
    step: number;
    step_name: string;
    time_on_step: number;
  }): ["submit_form_step", typeof data] => {
    return ["submit_form_step", data];
  },

  submitFormField: (data: {
    field: string;
    has_value: boolean;
  }): ["submit_form_field", typeof data] => {
    return ["submit_form_field", data];
  },

  submitFormPreviewToggle: (data: {
    action: "open" | "close";
    step: number;
  }): ["submit_form_preview_toggle", typeof data] => {
    return ["submit_form_preview_toggle", data];
  },

  submitFormAbandoned: (data: {
    last_step: number;
    completion_percentage: number;
    time_spent: number;
  }): ["submit_form_abandoned", typeof data] => {
    return ["submit_form_abandoned", data];
  },

  // ============================================
  // NEWSLETTER TRACKING
  // ============================================

  newsletterViewed: (data: {
    location: "homepage_bottom" | "floating_bar";
  }): ["newsletter_viewed", typeof data] => {
    return ["newsletter_viewed", data];
  },

  newsletterDismissed: (data: {
    times_seen: number;
    location: "floating_bar";
  }): ["newsletter_dismissed", typeof data] => {
    return ["newsletter_dismissed", data];
  },

  // ============================================
  // AUTHENTICATION TRACKING
  // ============================================

  authStarted: (data: {
    method: "email" | "github";
    source: "navbar" | "favorites_prompt" | "submit_page";
  }): ["auth_started", typeof data] => {
    return ["auth_started", data];
  },

  authCompleted: (data: {
    method: "email" | "github";
    is_new_user: boolean;
  }): ["auth_completed", typeof data] => {
    return ["auth_completed", data];
  },

  authLogout: (data: {
    session_duration: number;
    favorites_count: number;
  }): ["auth_logout", typeof data] => {
    return ["auth_logout", data];
  },

  // ============================================
  // CATEGORY TRACKING
  // ============================================

  categoryViewed: (data: {
    category: string;
    tool: string;
    source: "filter" | "agent_card" | "agent_detail";
  }): ["category_viewed", typeof data] => {
    return ["category_viewed", data];
  },
};

/**
 * Safely read the document referrer (returns 'direct' when unavailable).
 */
export const getReferrer = (): string => {
  if (typeof window === "undefined") return "";
  return document.referrer || "direct";
};

/**
 * Read the utm_source query param (defaults to 'direct').
 */
export const getUtmSource = (): string => {
  if (typeof window === "undefined") return "direct";

  const params = new URLSearchParams(window.location.search);
  return params.get("utm_source") || "direct";
};

/**
 * Read the utm_campaign query param (undefined when absent).
 */
export const getUtmCampaign = (): string | undefined => {
  if (typeof window === "undefined") return undefined;

  const params = new URLSearchParams(window.location.search);
  return params.get("utm_campaign") || undefined;
};
