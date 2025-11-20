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

  // --- Additional Claude Code Agents (from wshobson/agents) ---
  {
    id: "debugging-toolkit",
    name: "Debugging Toolkit",
    description: "Interactive debugging and developer experience optimization for Claude Code.",
    tool: "claude",
    category: "debugging",
    tags: ["debugging", "dx", "troubleshooting"],
    author: {
      name: "wshobson",
      url: "https://github.com/wshobson",
    },
    installation: {
      type: "manual",
      command: "/plugin install debugging-toolkit",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-15",
    links: {
      github: "https://github.com/wshobson/agents",
    }
  },
  {
    id: "full-stack-orchestration",
    name: "Full-Stack Orchestration",
    description: "End-to-end feature orchestration across frontend, backend, and database layers.",
    tool: "claude",
    category: "coding",
    tags: ["fullstack", "orchestration", "automation"],
    author: {
      name: "wshobson",
      url: "https://github.com/wshobson",
    },
    installation: {
      type: "manual",
      command: "/plugin install full-stack-orchestration",
    },
    verified: true,
    featured: true,
    createdAt: "2025-11-14",
    links: {
      github: "https://github.com/wshobson/agents",
    }
  },
  {
    id: "llm-application-dev",
    name: "LLM Application Development",
    description: "Expert guidance for building LLM applications with prompt engineering best practices.",
    tool: "claude",
    category: "other",
    tags: ["llm", "ai", "prompt-engineering"],
    author: {
      name: "wshobson",
      url: "https://github.com/wshobson",
    },
    installation: {
      type: "manual",
      command: "/plugin install llm-application-dev",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-12",
    links: {
      github: "https://github.com/wshobson/agents",
    }
  },
  {
    id: "security-scanning",
    name: "Security Scanning Agent",
    description: "SAST analysis and vulnerability scanning for your codebase.",
    tool: "claude",
    category: "other",
    tags: ["security", "sast", "vulnerabilities"],
    author: {
      name: "wshobson",
      url: "https://github.com/wshobson",
    },
    installation: {
      type: "manual",
      command: "/plugin install security-scanning",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-10",
    links: {
      github: "https://github.com/wshobson/agents",
    }
  },
  {
    id: "database-design",
    name: "Database Design Expert",
    description: "Database architecture and schema design with best practices.",
    tool: "claude",
    category: "data",
    tags: ["database", "sql", "schema"],
    author: {
      name: "wshobson",
      url: "https://github.com/wshobson",
    },
    installation: {
      type: "manual",
      command: "/plugin install database-design",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-08",
    links: {
      github: "https://github.com/wshobson/agents",
    }
  },
  {
    id: "kubernetes-operations",
    name: "Kubernetes Operations",
    description: "K8s manifests, GitOps workflows, and cluster management automation.",
    tool: "claude",
    category: "other",
    tags: ["kubernetes", "k8s", "devops", "gitops"],
    author: {
      name: "wshobson",
      url: "https://github.com/wshobson",
    },
    installation: {
      type: "manual",
      command: "/plugin install kubernetes-operations",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-05",
    links: {
      github: "https://github.com/wshobson/agents",
    }
  },
  {
    id: "python-development",
    name: "Python Development Expert",
    description: "Python 3.12+ development with Django/FastAPI expertise.",
    tool: "claude",
    category: "coding",
    tags: ["python", "django", "fastapi"],
    author: {
      name: "wshobson",
      url: "https://github.com/wshobson",
    },
    installation: {
      type: "manual",
      command: "/plugin install python-development",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-03",
    links: {
      github: "https://github.com/wshobson/agents",
    }
  },
  {
    id: "seo-content-creation",
    name: "SEO Content Creator",
    description: "SEO content writing, keyword research, and content planning.",
    tool: "claude",
    category: "other",
    tags: ["seo", "content", "marketing"],
    author: {
      name: "wshobson",
      url: "https://github.com/wshobson",
    },
    installation: {
      type: "manual",
      command: "/plugin install seo-content-creation",
    },
    verified: false,
    featured: false,
    createdAt: "2025-11-01",
    links: {
      github: "https://github.com/wshobson/agents",
    }
  },

  // --- Additional Cursor Rules ---
  {
    id: "cursor-react-typescript",
    name: "React + TypeScript Pro",
    description: "Comprehensive Cursor rules for React with TypeScript, emphasizing hooks and functional patterns.",
    tool: "cursor",
    category: "web",
    tags: ["react", "typescript", "hooks"],
    author: {
      name: "Cursor Community",
      url: "https://cursor.directory",
    },
    installation: {
      type: "manual",
      instructions: "Add to your `.cursorrules` file.",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-18",
    links: {
      website: "https://cursor.directory",
    }
  },
  {
    id: "cursor-python-fastapi",
    name: "Python FastAPI Expert",
    description: "Cursor rules optimized for FastAPI development with async patterns and Pydantic.",
    tool: "cursor",
    category: "coding",
    tags: ["python", "fastapi", "async"],
    author: {
      name: "Cursor Community",
      url: "https://cursor.directory",
    },
    installation: {
      type: "manual",
      instructions: "Add to your `.cursorrules` file.",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-16",
    links: {
      website: "https://cursor.directory",
    }
  },
  {
    id: "cursor-shadcn-ui",
    name: "Shadcn UI Builder",
    description: "Cursor rules for building UIs with Shadcn, Radix, and Tailwind CSS.",
    tool: "cursor",
    category: "web",
    tags: ["ui", "shadcn", "tailwind", "radix"],
    author: {
      name: "Cursor Community",
      url: "https://cursor.directory",
    },
    installation: {
      type: "manual",
      instructions: "Add to your `.cursorrules` file.",
    },
    verified: true,
    featured: true,
    createdAt: "2025-11-14",
    links: {
      website: "https://cursor.directory",
    }
  },
  {
    id: "cursor-vue3",
    name: "Vue 3 Composition API",
    description: "Modern Vue 3 development with Composition API, Pinia, and TypeScript.",
    tool: "cursor",
    category: "web",
    tags: ["vue", "vue3", "composition-api", "pinia"],
    author: {
      name: "Cursor Community",
      url: "https://cursor.directory",
    },
    installation: {
      type: "manual",
      instructions: "Add to your `.cursorrules` file.",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-12",
    links: {
      website: "https://cursor.directory",
    }
  },
  {
    id: "cursor-django",
    name: "Django Full-Stack",
    description: "Django development with DRF, Celery, and PostgreSQL best practices.",
    tool: "cursor",
    category: "coding",
    tags: ["python", "django", "drf", "postgresql"],
    author: {
      name: "Cursor Community",
      url: "https://cursor.directory",
    },
    installation: {
      type: "manual",
      instructions: "Add to your `.cursorrules` file.",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-10",
    links: {
      website: "https://cursor.directory",
    }
  },
  {
    id: "cursor-golang",
    name: "Go Development Rules",
    description: "Golang development with idiomatic patterns, error handling, and concurrency.",
    tool: "cursor",
    category: "coding",
    tags: ["golang", "go", "concurrency"],
    author: {
      name: "Cursor Community",
      url: "https://cursor.directory",
    },
    installation: {
      type: "manual",
      instructions: "Add to your `.cursorrules` file.",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-08",
    links: {
      website: "https://cursor.directory",
    }
  },

  // --- Additional Windsurf Rules ---
  {
    id: "windsurf-fullstack-typescript",
    name: "Full-Stack TypeScript",
    description: "Complete TypeScript stack with Node.js backend and React frontend rules.",
    tool: "windsurf",
    category: "coding",
    tags: ["typescript", "fullstack", "node", "react"],
    author: {
      name: "Windsurf Community",
      url: "https://github.com/awesome-windsurf",
    },
    installation: {
      type: "manual",
      instructions: "Create a `.windsurfrules` file and add the content.",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-17",
  },
  {
    id: "windsurf-vue-nuxt",
    name: "Vue + Nuxt 3 Rules",
    description: "Windsurf rules for Vue 3 and Nuxt 3 development with best practices.",
    tool: "windsurf",
    category: "web",
    tags: ["vue", "nuxt", "ssr"],
    author: {
      name: "Windsurf Community",
      url: "https://github.com/awesome-windsurf",
    },
    installation: {
      type: "manual",
      instructions: "Create a `.windsurfrules` file and add the content.",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-15",
  },
  {
    id: "windsurf-prisma-postgres",
    name: "Prisma + PostgreSQL",
    description: "Database-first development with Prisma ORM and PostgreSQL.",
    tool: "windsurf",
    category: "data",
    tags: ["prisma", "postgresql", "orm"],
    author: {
      name: "Windsurf Community",
      url: "https://github.com/awesome-windsurf",
    },
    installation: {
      type: "manual",
      instructions: "Create a `.windsurfrules` file and add the content.",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-13",
  },
  {
    id: "windsurf-testing-vitest",
    name: "Testing with Vitest",
    description: "Modern testing setup with Vitest, React Testing Library, and Playwright.",
    tool: "windsurf",
    category: "testing",
    tags: ["testing", "vitest", "playwright"],
    author: {
      name: "Windsurf Community",
      url: "https://github.com/awesome-windsurf",
    },
    installation: {
      type: "manual",
      instructions: "Create a `.windsurfrules` file and add the content.",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-11",
  },

  // --- Additional Replit Agents ---
  {
    id: "replit-python-data-science",
    name: "Python Data Science Kit",
    description: "Replit agent for data science with pandas, numpy, and matplotlib.",
    tool: "replit",
    category: "data",
    tags: ["python", "data-science", "pandas"],
    author: {
      name: "Replit Community",
      url: "https://replit.com",
    },
    installation: {
      type: "manual",
      url: "https://replit.com/template/python-data-science",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-18",
  },
  {
    id: "replit-discord-bot",
    name: "Discord Bot Builder",
    description: "Quick Discord bot setup with discord.py and Replit database.",
    tool: "replit",
    category: "coding",
    tags: ["python", "discord", "bot"],
    author: {
      name: "Replit Community",
      url: "https://replit.com",
    },
    installation: {
      type: "manual",
      url: "https://replit.com/template/discord-bot",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-16",
  },
  {
    id: "replit-react-vite",
    name: "React + Vite Starter",
    description: "Lightning-fast React development with Vite on Replit.",
    tool: "replit",
    category: "web",
    tags: ["react", "vite", "frontend"],
    author: {
      name: "Replit Team",
      url: "https://replit.com",
    },
    installation: {
      type: "manual",
      url: "https://replit.com/template/react-vite",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-14",
  },
  {
    id: "replit-nextjs-blog",
    name: "Next.js Blog Template",
    description: "Pre-configured Next.js blog with MDX and Tailwind CSS.",
    tool: "replit",
    category: "web",
    tags: ["nextjs", "blog", "mdx"],
    author: {
      name: "Replit Team",
      url: "https://replit.com",
    },
    installation: {
      type: "manual",
      url: "https://replit.com/template/nextjs-blog",
    },
    verified: true,
    featured: false,
    createdAt: "2025-11-12",
  },
  {
    id: "replit-websocket-chat",
    name: "WebSocket Chat App",
    description: "Real-time chat application with WebSocket and Node.js.",
    tool: "replit",
    category: "coding",
    tags: ["websocket", "nodejs", "realtime"],
    author: {
      name: "Replit Community",
      url: "https://replit.com",
    },
    installation: {
      type: "manual",
      url: "https://replit.com/template/websocket-chat",
    },
    verified: false,
    featured: false,
    createdAt: "2025-11-10",
  },
  {
    id: "replit-rust-cli",
    name: "Rust CLI Builder",
    description: "Build command-line tools with Rust on Replit.",
    tool: "replit",
    category: "coding",
    tags: ["rust", "cli", "systems"],
    author: {
      name: "Replit Community",
      url: "https://replit.com",
    },
    installation: {
      type: "manual",
      url: "https://replit.com/template/rust-cli",
    },
    verified: false,
    featured: false,
    createdAt: "2025-11-08",
  },

  // --- More Claude Code Plugins (from claude-code-plugins-plus) ---
  {
    id: "devops-automation-pack",
    name: "DevOps Automation Pack",
    description: "Complete DevOps suite with Git, CI/CD, Docker, Kubernetes, and Terraform automation.",
    fullDescription: `
# DevOps Automation Pack

25 plugins for complete DevOps automation:
- Git workflow automation (5 commands)
- CI/CD pipeline design (5 commands, 1 agent)
- Docker containerization (3 commands, 1 agent)
- Kubernetes management (3 commands, 1 agent)
- Terraform infrastructure as code (3 commands, 1 agent)
- Deployment automation (1 command, 1 agent)

Total: 20 commands, 5 agents
    `,
    tool: "claude",
    category: "other",
    tags: ["devops", "ci-cd", "docker", "kubernetes", "terraform"],
    author: {
      name: "jeremylongshore",
      url: "https://github.com/jeremylongshore",
    },
    installation: {
      type: "manual",
      command: "/plugin install devops-automation-pack@claude-code-plugins-plus",
    },
    verified: true,
    featured: true,
    createdAt: "2025-11-19",
    links: {
      github: "https://github.com/jeremylongshore/claude-code-plugins-plus",
    }
  },
  {
    id: "security-pro-pack",
    name: "Security Pro Pack",
    description: "Professional security toolkit with OWASP auditing, compliance checking, and vulnerability scanning.",
    fullDescription: `
# Security Pro Pack

10 plugins for comprehensive security:
- OWASP auditing and penetration testing
- HIPAA, PCI DSS, GDPR, SOC 2 compliance
- Cryptography audit and key management
- Threat modeling and container scanning
- API security and infrastructure hardening

Total: 5 commands, 5 agents
    `,
    tool: "claude",
    category: "other",
    tags: ["security", "owasp", "compliance", "pentesting"],
    author: {
      name: "jeremylongshore",
      url: "https://github.com/jeremylongshore",
    },
    installation: {
      type: "manual",
      command: "/plugin install security-pro-pack@claude-code-plugins-plus",
    },
    verified: true,
    featured: true,
    createdAt: "2025-11-19",
    links: {
      github: "https://github.com/jeremylongshore/claude-code-plugins-plus",
    }
  },
  {
    id: "fullstack-starter-pack",
    name: "Fullstack Starter Pack",
    description: "Complete fullstack development toolkit with React, Express/FastAPI, PostgreSQL, and authentication.",
    fullDescription: `
# Fullstack Starter Pack

15 plugins for rapid fullstack development:
- React components and UI/UX design (2 commands, 2 agents)
- Express/FastAPI scaffolding (2 commands, 2 agents)
- PostgreSQL schemas and Prisma ORM (2 commands, 1 agent)
- Authentication setup and config (3 commands, 1 agent)

Perfect for: Bootcamp grads, junior developers, rapid prototyping
Total: 9 commands, 6 agents
    `,
    tool: "claude",
    category: "web",
    tags: ["fullstack", "react", "express", "postgresql", "prisma"],
    author: {
      name: "jeremylongshore",
      url: "https://github.com/jeremylongshore",
    },
    installation: {
      type: "manual",
      command: "/plugin install fullstack-starter-pack@claude-code-plugins-plus",
    },
    verified: true,
    featured: true,
    createdAt: "2025-11-19",
    links: {
      github: "https://github.com/jeremylongshore/claude-code-plugins-plus",
    }
  },
  {
    id: "ai-ml-engineering-pack",
    name: "AI/ML Engineering Pack",
    description: "Professional AI/ML toolkit with prompt engineering, LLM integration, RAG systems, and AI safety.",
    fullDescription: `
# AI/ML Engineering Pack

12 plugins for AI/ML development:
- Prompt optimization and A/B testing (1 command, 2 agents)
- Multi-provider LLM integration (1 command, 2 agents)
- RAG system design with vector databases (1 command, 2 agents)
- AI safety guardrails and fine-tuning (1 command, 2 agents)

Achieve 30-50% cost reduction through prompt optimization.
Supports: Pinecone, Weaviate, Anthropic, OpenAI
Total: 4 commands, 8 agents
    `,
    tool: "claude",
    category: "other",
    tags: ["ai", "ml", "llm", "rag", "prompt-engineering"],
    author: {
      name: "jeremylongshore",
      url: "https://github.com/jeremylongshore",
    },
    installation: {
      type: "manual",
      command: "/plugin install ai-ml-engineering-pack@claude-code-plugins-plus",
    },
    verified: true,
    featured: true,
    createdAt: "2025-11-19",
    links: {
      github: "https://github.com/jeremylongshore/claude-code-plugins-plus",
    }
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
