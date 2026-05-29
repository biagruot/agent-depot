import { describe, it, expect } from "vitest";
import { cn, formatCompactNumber } from "@/lib/utils";

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
