import { describe, it, expect } from "vitest";
import { agents } from "@/data/agents";

const TOOLS = ["cursor", "windsurf", "claude-code", "replit", "mcp"];
const TYPES = ["rule", "agent", "plugin", "skill", "template"];
const CATEGORIES = ["coding", "debugging", "testing", "productivity", "data", "web", "other"];

// These guard the integrity of the hand-maintained catalog: a malformed
// contribution (duplicate id, bad enum, missing field) fails CI rather than
// shipping a broken card to production.
describe("agent catalog", () => {
  it("is non-empty", () => {
    expect(agents.length).toBeGreaterThan(0);
  });

  it("has unique ids", () => {
    const ids = agents.map((a) => a.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("uses url-safe kebab-case ids", () => {
    for (const a of agents) {
      expect(a.id).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
  });

  it("has required fields populated", () => {
    for (const a of agents) {
      expect(a.name, a.id).toBeTruthy();
      expect(a.description, a.id).toBeTruthy();
      expect(a.author?.name, a.id).toBeTruthy();
      expect(Array.isArray(a.tags) && a.tags.length > 0, a.id).toBe(true);
      expect(a.createdAt, a.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it("uses valid tool, type, and category values", () => {
    for (const a of agents) {
      expect(TOOLS, a.id).toContain(a.tool);
      expect(TYPES, a.id).toContain(a.type);
      expect(CATEGORIES, a.id).toContain(a.category);
    }
  });
});
