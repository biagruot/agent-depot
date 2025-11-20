import { Collection } from "@/types/collection";

export const collections: Collection[] = [
  {
    id: "nextjs-power-pack",
    name: "Next.js Power Pack",
    description: "Essential rules and agents for modern Next.js 15 development.",
    icon: "Zap",
    gradient: "linear-gradient(135deg, rgba(59,130,246,0.35), rgba(147,51,234,0.35), rgba(34,211,238,0.4))",
    agentIds: ["windsurf-nextjs-15-rules", "cursor-nextjs-expert"],
    featured: true,
  },
  {
    id: "backend-blueprints",
    name: "Backend Blueprints",
    description: "Production-ready API templates for Flask, Express, and Supabase.",
    icon: "Database",
    gradient: "linear-gradient(140deg, rgba(245,158,11,0.35), rgba(249,115,22,0.35), rgba(236,72,153,0.4))",
    agentIds: ["replit-flask-api", "replit-express-blueprint", "cursor-supabase"],
    featured: true,
  },
  {
    id: "clean-code-guardians",
    name: "Clean Code Guardians",
    description: "Automated linters, formatters, and TDD architects to keep your codebase healthy.",
    icon: "Shield",
    gradient: "linear-gradient(140deg, rgba(16,185,129,0.35), rgba(74,222,128,0.3), rgba(190,242,100,0.35))",
    agentIds: ["windsurf-clean-code", "cursor-tailwind-master", "claude-tdd-architect"],
    featured: true,
  },
  {
    id: "debugging-masters",
    name: "Debugging Masters",
    description: "AI agents specialized in finding and fixing complex bugs.",
    icon: "Bug",
    gradient: "linear-gradient(135deg, rgba(244,63,94,0.4), rgba(239,68,68,0.32), rgba(249,115,22,0.35))",
    agentIds: ["claude-code-debugger"],
    featured: true,
  }
];
