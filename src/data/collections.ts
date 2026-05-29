import { Collection } from "@/types/collection";

export const collections: Collection[] = [
  {
    id: "nextjs-power-pack",
    name: "Next.js Power Pack",
    description: "Essential rules and agents for modern Next.js 15 development.",
    icon: "Zap",
    gradient:
      "linear-gradient(135deg, rgba(59,130,246,0.35), rgba(147,51,234,0.35), rgba(34,211,238,0.4))",
    agentIds: ["windsurf-nextjs-15-rules", "cursor-nextjs-expert", "fullstack-starter-pack"],
    featured: true,
  },
  {
    id: "backend-blueprints",
    name: "Backend Blueprints",
    description: "Production-ready API templates for Flask, Express, and Supabase.",
    icon: "Database",
    gradient:
      "linear-gradient(140deg, rgba(245,158,11,0.35), rgba(249,115,22,0.35), rgba(236,72,153,0.4))",
    agentIds: [
      "replit-flask-api",
      "replit-express-blueprint",
      "cursor-supabase",
      "cursor-python-fastapi",
      "python-development",
    ],
    featured: true,
  },
  {
    id: "clean-code-guardians",
    name: "Clean Code Guardians",
    description: "Automated linters, formatters, and TDD architects to keep your codebase healthy.",
    icon: "Shield",
    gradient:
      "linear-gradient(140deg, rgba(16,185,129,0.35), rgba(74,222,128,0.3), rgba(190,242,100,0.35))",
    agentIds: [
      "windsurf-clean-code",
      "cursor-tailwind-master",
      "claude-tdd-architect",
      "security-scanning",
    ],
    featured: true,
  },
  {
    id: "debugging-masters",
    name: "Debugging Masters",
    description: "AI agents specialized in finding and fixing complex bugs.",
    icon: "Bug",
    gradient:
      "linear-gradient(135deg, rgba(244,63,94,0.4), rgba(239,68,68,0.32), rgba(249,115,22,0.35))",
    agentIds: ["claude-code-debugger", "debugging-toolkit"],
    featured: true,
  },
  {
    id: "fullstack-toolbox",
    name: "Full-Stack Toolbox",
    description: "Everything you need for end-to-end full-stack development.",
    icon: "Layers",
    gradient:
      "linear-gradient(135deg, rgba(139,92,246,0.35), rgba(168,85,247,0.35), rgba(192,132,252,0.4))",
    agentIds: [
      "full-stack-orchestration",
      "fullstack-starter-pack",
      "windsurf-fullstack-typescript",
      "cursor-react-typescript",
    ],
    featured: true,
  },
  {
    id: "devops-automation",
    name: "DevOps Automation",
    description: "Complete automation for CI/CD, Docker, Kubernetes, and Terraform workflows.",
    icon: "Sparkles",
    gradient:
      "linear-gradient(140deg, rgba(14,165,233,0.35), rgba(6,182,212,0.35), rgba(20,184,166,0.4))",
    agentIds: ["devops-automation-pack", "kubernetes-operations"],
    featured: true,
  },
  {
    id: "windsurf-power-pack",
    name: "Windsurf Power Pack",
    description:
      "The essential collection for Windsurf IDE users. Rules for React, Next.js, and clean code.",
    icon: "Zap",
    gradient:
      "linear-gradient(135deg, rgba(59,130,246,0.4), rgba(37,99,235,0.35), rgba(29,78,216,0.4))",
    agentIds: [
      "windsurf-react-starter",
      "windsurf-nextjs-15-rules",
      "windsurf-clean-code",
      "windsurf-fullstack-typescript",
      "windsurf-prisma-postgres",
    ],
    featured: true,
  },
  {
    id: "replit-starter-pack",
    name: "Replit Starter Pack",
    description: "Launch your next idea instantly with these production-ready Replit templates.",
    icon: "Rocket",
    gradient:
      "linear-gradient(135deg, rgba(249,115,22,0.4), rgba(234,88,12,0.35), rgba(194,65,12,0.4))",
    agentIds: [
      "replit-python-data-science",
      "replit-discord-bot",
      "replit-react-vite",
      "replit-nextjs-blog",
      "replit-flask-api",
    ],
    featured: true,
  },
];
