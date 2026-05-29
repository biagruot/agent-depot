import { describe, it, expect } from "vitest";
import { analyticsEvents } from "@/lib/analytics";

describe("analyticsEvents", () => {
  it("returns a [name, data] tuple for search results", () => {
    const payload = {
      query: "react",
      tool: "cursor",
      type: "rule",
      results_count: 3,
      has_results: true,
    };
    const [name, data] = analyticsEvents.searchResultsViewed(payload);
    expect(name).toBe("search_results_viewed");
    expect(data).toEqual(payload);
  });

  it("names the submit-completed event correctly", () => {
    const [name, data] = analyticsEvents.submitFormCompleted({ tool: "mcp", type: "plugin" });
    expect(name).toBe("submit_form_completed");
    expect(data.tool).toBe("mcp");
  });

  it("passes engagement data through unchanged", () => {
    const [name, data] = analyticsEvents.timeOnPage({ page: "/", seconds: 42, engaged: true });
    expect(name).toBe("time_on_page");
    expect(data.seconds).toBe(42);
  });
});
