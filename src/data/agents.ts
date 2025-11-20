import { Agent } from "@/types/agent";

export const agents: Agent[] = [
  // --- Windsurf Agents ---
  {
    id: "windsurf-react-starter",
    name: "React Cascade Starter",
    description: "A comprehensive Windsurf Cascade bundle for rapid React development.",
    fullDescription: `
# React Cascade Starter

This Windsurf Cascade bundle provides a robust starting point for React applications.

## Features
- **Component Structure**: Enforces a clean \`components/\` directory structure.
- **Hook Patterns**: Standardizes custom hooks in \`hooks/\`.
- **State Management**: Guidelines for using Context API vs. external stores.

## Usage
Download the \`.windsurfrules\` file and place it in your project root. Cascade will automatically detect it.
    `,
    tool: "windsurf",
    category: "web",
    tags: ["react", "typescript", "tailwind", "cascade"],
    author: {
      name: "AgentDepot Team",
      url: "https://twitter.com/agentdepot",
    },
    installation: {
      type: "manual",
      instructions: "Create a `.windsurfrules` file in your project root and paste the content.",
    },
    verified: true,
    featured: true,
    createdAt: "2025-11-20",
    links: {
      github: "https://github.com/agentdepot/windsurf-rules",
    }
  },
  {
    id: "windsurf-nextjs-15-rules",
    name: "Next.js 15 Cascade Rules",
    description: "Enforce Server Components and new caching behaviors in Next.js 15.",
    fullDescription: `
# Next.js 15 Cascade Rules

Next.js 15 introduced significant changes to caching and data fetching. This rule set ensures Cascade generates code compliant with these new standards.

## What it does
- **No-Store Default**: Reminds Cascade that \`fetch\` is no longer cached by default.
- **Server Components**: Prioritizes data fetching in Server Components.
- **Async Request APIs**: Ensures correct usage of \`await params\` in dynamic routes.
    `,
    tool: "windsurf",
    category: "coding",
    tags: ["nextjs", "react", "server-components"],
    author: {
      name: "Windsurf Community",
      url: "https://windsurf.com",
    },
    installation: {
      type: "manual",
      instructions: "Copy into `.windsurfrules`.",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-18",
  },
  {
    id: "windsurf-clean-code",
    name: "Clean Code Enforcer",
    description: "Strict formatting and architectural patterns for Windsurf Cascade.",
    tool: "windsurf",
    category: "productivity",
    tags: ["clean-code", "formatting", "architecture"],
    author: {
      name: "CodeCraft",
      url: "https://github.com/codecraft",
    },
    installation: {
      type: "manual",
      instructions: "Add to your global Windsurf settings or project-specific rules.",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-15",
  },

  // --- Claude Skills ---
  {
    id: "claude-code-debugger",
    name: "Deep Debugger",
    description: "An advanced debugging agent for Claude Code that analyzes stack traces and suggests fixes.",
    fullDescription: `
# Deep Debugger for Claude Code

This skill turns Claude into a forensic code analyst. Paste a stack trace, and it will:
1. Identify the root cause.
2. Trace the execution flow.
3. Suggest 3 potential fixes (Quick, Robust, Architectural).

## Best For
- Python tracebacks
- Node.js error logs
- Java stack traces
    `,
    tool: "claude",
    category: "debugging",
    tags: ["python", "javascript", "debugging"],
    author: {
      name: "Anthropic Community",
      url: "https://github.com/anthropic",
    },
    installation: {
      type: "npm",
      command: "npm install -g @claude-skills/debugger",
    },
    verified: true,
    featured: true,
    createdAt: "2025-11-18",
  },
  {
    id: "claude-artifacts-builder",
    name: "Artifacts Builder",
    description: "Specialized skill for generating complex HTML/React artifacts in Claude.",
    tool: "claude",
    category: "web",
    tags: ["react", "html", "ui", "shadcn"],
    author: {
      name: "UI Wizards",
      url: "https://github.com/uiwizards",
    },
    installation: {
      type: "manual",
      instructions: "Paste the `artifacts-skill.md` content into your Claude project instructions.",
    },
    verified: true,
    featured: true,
    createdAt: "2025-11-10",
  },
  {
    id: "claude-tdd-architect",
    name: "TDD Architect",
    description: "Guides Claude to follow Test-Driven Development principles strictly.",
    tool: "claude",
    category: "testing",
    tags: ["tdd", "testing", "best-practices"],
    author: {
      name: "TestMaster",
      url: "https://github.com/testmaster",
    },
    installation: {
      type: "manual",
      instructions: "Import as a project skill in Claude.",
    },
    verified: false,
    featured: false,
    createdAt: "2025-11-12",
  },
  {
    id: "claude-aws-architect",
    name: "AWS Cloud Architect",
    description: "Expert knowledge on AWS CDK, serverless patterns, and cost optimization.",
    tool: "claude",
    category: "other",
    tags: ["aws", "cloud", "cdk", "terraform"],
    author: {
      name: "CloudGurus",
      url: "https://github.com/cloudgurus",
    },
    installation: {
      type: "manual",
      instructions: "Use as a system prompt or project instruction.",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-05",
  },

  // --- Cursor Rules ---
  {
    id: "cursor-nextjs-expert",
    name: "Next.js 15 Expert",
    description: "Cursor rules optimized for Next.js 15 App Router development.",
    tool: "cursor",
    category: "coding",
    tags: ["nextjs", "react", "cursor-rules"],
    author: {
      name: "Vercel Fans",
      url: "https://github.com/vercel-fans",
    },
    installation: {
      type: "manual",
      instructions: "Copy the content into your `.cursorrules` file.",
    },
    verified: true,
    featured: true,
    createdAt: "2025-11-15",
  },
  {
    id: "cursor-tailwind-master",
    name: "Tailwind CSS Master",
    description: "Ensures Cursor generates semantic, organized Tailwind classes.",
    tool: "cursor",
    category: "web",
    tags: ["css", "tailwind", "design"],
    author: {
      name: "CSS Pro",
      url: "https://github.com/csspro",
    },
    installation: {
      type: "manual",
      instructions: "Add to `.cursorrules`.",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-14",
  },
  {
    id: "cursor-supabase",
    name: "Supabase Integration",
    description: "Best practices for Supabase Auth, Database, and Edge Functions.",
    tool: "cursor",
    category: "data",
    tags: ["supabase", "database", "sql"],
    author: {
      name: "SupaFan",
      url: "https://github.com/supafan",
    },
    installation: {
      type: "manual",
      instructions: "Add to `.cursorrules`.",
    },
    verified: false,
    featured: false,
    createdAt: "2025-11-16",
  },

  // --- Replit Agents ---
  {
    id: "replit-flask-api",
    name: "Flask API Generator",
    description: "Replit Agent blueprint for generating production-ready Flask APIs.",
    tool: "replit",
    category: "coding",
    tags: ["python", "flask", "api"],
    author: {
      name: "Replit User",
      url: "https://replit.com/@user",
    },
    installation: {
      type: "manual",
      url: "https://replit.com/template/flask-api-agent",
    },
    verified: false,
    featured: false,
    createdAt: "2025-11-19",
  },
  {
    id: "replit-express-blueprint",
    name: "Node.js Express Blueprint",
    description: "Quick setup for Express.js APIs with best practices.",
    tool: "replit",
    category: "coding",
    tags: ["nodejs", "express", "javascript"],
    author: {
      name: "NodeNinja",
      url: "https://replit.com/@nodeninja",
    },
    installation: {
      type: "manual",
      url: "https://replit.com/template/express-blueprint",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-17",
  }
];
