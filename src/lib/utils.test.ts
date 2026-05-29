import { describe, it, expect } from "vitest";
import { cn, formatRelativeTime, formatCompactNumber } from "@/lib/utils";

describe("cn", () => {
  it("joins class names", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("drops falsy / conditional values", () => {
    expect(cn("a", false && "b", undefined, "c")).toBe("a c");
  });

  it("resolves conflicting tailwind classes (last wins)", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });
});

describe("formatCompactNumber", () => {
  it("formats thousands compactly", () => {
    expect(formatCompactNumber(1500)).toBe("1.5K");
  });

  it("formats millions compactly", () => {
    expect(formatCompactNumber(2_000_000)).toBe("2M");
  });

  it("leaves small numbers unchanged", () => {
    expect(formatCompactNumber(42)).toBe("42");
  });
});

describe("formatRelativeTime", () => {
  const secondsAgo = (s: number) => new Date(Date.now() - s * 1000).toISOString();

  it("returns 'just now' for very recent times", () => {
    expect(formatRelativeTime(secondsAgo(5))).toBe("just now");
  });

  it("returns minutes", () => {
    expect(formatRelativeTime(secondsAgo(120))).toBe("2m ago");
  });

  it("returns hours", () => {
    expect(formatRelativeTime(secondsAgo(3 * 3600))).toBe("3h ago");
  });

  it("returns days", () => {
    expect(formatRelativeTime(secondsAgo(5 * 86400))).toBe("5d ago");
  });
});
