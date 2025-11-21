import { Agent } from "@/types/agent";

export const agents: Agent[] = [
  {
    id: "mock-cursor-react",
    name: "React Expert",
    description: "A highly optimized Cursor rule for modern React development with TypeScript and Tailwind.",
    fullDescription: `
# React Expert Rule

This rule transforms Cursor into a senior React engineer.

## Features
- **Strict TypeScript**: Enforces strict type safety.
- **Tailwind Best Practices**: Suggests utility classes over custom CSS.
- **Component Patterns**: Promotes composition and reusable hooks.

## Usage
Copy the rules into your \`.cursorrules\` file.
    `,
    tool: "cursor",
    type: "rule",
    category: "web",
    tags: ["react", "typescript", "tailwind"],
    author: {
      name: "AgentDepot",
      url: "https://agentdepot.dev",
    },
    installation: {
      type: "manual",
      instructions: "Copy the content to .cursorrules",
    },
    verified: true,
    featured: true,
    trending: true,
    createdAt: "2025-11-20",
    updatedAt: "2025-11-21",
    stats: {
      downloads: 12050,
      stars: 842,
    },
  },
  {
    id: "mock-windsurf-python",
    name: "Python Data Science",
    description: "Windsurf Cascade flow for data analysis with Pandas and PyTorch.",
    fullDescription: `
# Python Data Science Flow

Optimized for Jupyter notebooks and Python scripts.

## Capabilities
- **Data Cleaning**: Auto-suggests pandas cleaning operations.
- **Visualization**: Generates matplotlib/seaborn plots.
    `,
    tool: "windsurf",
    type: "rule",
    category: "data",
    tags: ["python", "datascience", "pandas"],
    author: {
      name: "AgentDepot",
      url: "https://agentdepot.dev",
    },
    installation: {
      type: "manual",
      instructions: "Import into Windsurf Cascade.",
    },
    verified: true,
    featured: true,
    createdAt: "2025-11-19",
    stats: {
      downloads: 5400,
      stars: 320,
    },
  },
  {
    id: "mock-mcp-postgres",
    name: "Postgres Connector",
    description: "Connect your LLM directly to your PostgreSQL database for query generation.",
    fullDescription: `
# Postgres Connector

Safe and secure database access for your AI.

## Features
- **Schema Inspection**: Understands your table structure.
- **Safe Queries**: Read-only mode by default.
    `,
    tool: "mcp",
    type: "plugin",
    category: "data",
    tags: ["database", "sql", "postgres"],
    author: {
      name: "AgentDepot",
      url: "https://agentdepot.dev",
    },
    installation: {
      type: "npm",
      command: "npx -y @agentdepot/mcp-postgres",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-18",
    stats: {
      downloads: 8900,
      stars: 1200,
    },
  },
  {
    id: "mock-cursor-nextjs",
    name: "Next.js Architect",
    description: "Specialized rules for Next.js App Router, Server Actions, and SEO.",
    fullDescription: `
# Next.js Architect

Build scalable Next.js applications.

## Focus Areas
- **App Router**: Correct file structure and routing.
- **Server Actions**: Secure data mutations.
    `,
    tool: "cursor",
    type: "rule",
    category: "web",
    tags: ["nextjs", "react", "fullstack"],
    author: {
      name: "AgentDepot",
      url: "https://agentdepot.dev",
    },
    installation: {
      type: "manual",
      instructions: "Copy to .cursorrules",
    },
    verified: true,
    featured: true,
    createdAt: "2025-11-15",
    stats: {
      downloads: 15000,
      stars: 2100,
    },
  },
  {
    id: "mock-claude-researcher",
    name: "Deep Researcher",
    description: "A Claude Code skill for performing deep web research and summarization.",
    fullDescription: `
# Deep Researcher

Automate your research workflows.

## How it works
1. Give a topic.
2. Agent searches multiple sources.
3. Compiles a summary report.
    `,
    tool: "claude-code",
    type: "skill",
    category: "productivity",
    tags: ["research", "writing", "summary"],
    author: {
      name: "AgentDepot",
      url: "https://agentdepot.dev",
    },
    installation: {
      type: "manual",
      instructions: "Enable in Claude Desktop.",
    },
    verified: false,
    featured: false,
    createdAt: "2025-11-10",
    stats: {
      downloads: 3200,
      stars: 150,
    },
  },
  {
    id: "mock-replit-ghostwriter",
    name: "Ghostwriter Pro",
    description: "Advanced configuration for Replit Ghostwriter to enhance code completion.",
    fullDescription: `
# Ghostwriter Pro

Supercharge your Replit experience.
    `,
    tool: "replit",
    type: "template",
    category: "coding",
    tags: ["replit", "completion"],
    author: {
      name: "AgentDepot",
      url: "https://agentdepot.dev",
    },
    installation: {
      type: "other",
      url: "https://replit.com/@agentdepot/ghostwriter-pro",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-05",
    stats: {
      downloads: 1200,
      stars: 80,
    },
  },
  {
    id: "mock-mcp-github",
    name: "GitHub Manager",
    description: "Manage issues, PRs, and repos directly from your chat interface.",
    fullDescription: `
# GitHub Manager

Your AI project manager.
    `,
    tool: "mcp",
    type: "plugin",
    category: "productivity",
    tags: ["github", "git", "workflow"],
    author: {
      name: "AgentDepot",
      url: "https://agentdepot.dev",
    },
    installation: {
      type: "npm",
      command: "npx -y @agentdepot/mcp-github",
    },
    verified: true,
    featured: true,
    createdAt: "2025-11-01",
    stats: {
      downloads: 22000,
      stars: 3500,
    },
  },
  {
    id: "mock-cursor-security",
    name: "Security Sentinel",
    description: "Automated security checks and vulnerability scanning for your code.",
    fullDescription: `
# Security Sentinel

Keep your code safe.
    `,
    tool: "cursor",
    type: "rule",
    category: "other",
    tags: ["security", "audit", "safety"],
    author: {
      name: "AgentDepot",
      url: "https://agentdepot.dev",
    },
    installation: {
      type: "manual",
      instructions: "Add to .cursorrules",
    },
    verified: true,
    featured: false,
    createdAt: "2025-10-28",
    stats: {
      downloads: 4100,
      stars: 290,
    },
  }
];
