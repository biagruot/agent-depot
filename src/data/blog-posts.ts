export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Markdown content
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-install-cursor-agents",
    title: "How to Install Cursor Agents & Rules",
    excerpt: "A complete guide to supercharging your Cursor editor with custom AI rules and agents.",
    author: "AgentDepot Team",
    date: "2025-11-22",
    readTime: "5 min read",
    tags: ["Cursor", "Tutorial", "Productivity"],
    content: `
# How to Install Cursor Agents & Rules

Cursor is an AI-first code editor that's taking the developer world by storm. One of its most powerful features is the ability to define custom "rules" or "agents" that guide the AI's behavior.

In this guide, we'll walk you through how to find, install, and use these agents to boost your productivity.

## What are Cursor Rules?

Cursor rules are essentially instructions that tell the AI how to behave, what context to consider, and what coding standards to follow. They are stored in a \`.cursorrules\` file in your project root.

## Step 1: Find an Agent

First, browse [AgentDepot](https://agentdepot.dev) to find a rule that fits your needs. For example, if you're working with Next.js, look for the "Next.js Expert" agent.

## Step 2: Copy the Rule

Click the "Copy" button on the agent card. This will copy the rule content to your clipboard.

## Step 3: Create .cursorrules

1. Open your project in Cursor.
2. Create a new file named \`.cursorrules\` in the root directory.
3. Paste the copied content into this file.

## Step 4: Start Coding!

Now, when you use Cursor's AI features (Cmd+K or Cmd+L), it will automatically respect the rules you've defined.

## Conclusion

Using custom rules is the best way to tailor Cursor to your specific workflow. Check back on AgentDepot for new rules added daily!
    `
  },
  {
    slug: "windsurf-vs-cursor-2025",
    title: "Windsurf vs Cursor: Which AI Editor is Right for You?",
    excerpt: "We compare the two leading AI-native code editors to help you decide which one to use in 2025.",
    author: "AgentDepot Team",
    date: "2025-11-23",
    readTime: "8 min read",
    tags: ["Windsurf", "Cursor", "Comparison"],
    content: `
# Windsurf vs Cursor: The 2025 Showdown

The battle for the best AI code editor is heating up. In one corner, we have **Cursor**, the reigning champion built on VS Code. In the other, **Windsurf**, the new challenger from Codeium.

## The Contenders

### Cursor
Cursor has defined the category of "AI-native" editors. Its "Cmd+K" to edit and "Cmd+L" to chat are now industry standards.

**Pros:**
- Mature ecosystem
- Huge library of rules (see AgentDepot)
- deeply integrated into the editor

### Windsurf
Windsurf introduces the concept of "Flows", allowing the AI to take multi-step actions across your codebase.

**Pros:**
- "Flow" state is incredibly powerful
- Context awareness is top-notch
- Fast and fluid UI

## Which Should You Choose?

If you want stability and a massive community, go with **Cursor**. If you want to experience the bleeding edge of agentic coding, give **Windsurf** a try.

Both are supported on AgentDepot, so you can find agents for either platform!
    `
  },
  {
    slug: "what-are-mcp-servers",
    title: "What are MCP Servers? A Complete Guide to Model Context Protocol",
    excerpt: "Everything you need to know about MCP servers, how they work, and why they're revolutionizing AI agent development.",
    author: "AgentDepot Team",
    date: "2025-12-01",
    readTime: "10 min read",
    tags: ["MCP", "Tutorial", "AI Agents"],
    content: `
# What are MCP Servers? A Complete Guide

If you're working with AI coding tools like Claude Code or building AI agents, you've probably heard about **MCP servers**. But what exactly are they, and why should you care?

## What is MCP?

**MCP** stands for **Model Context Protocol**. It's an open standard created by Anthropic that allows AI models to securely connect to external data sources and tools.

Think of MCP as a universal adapter that lets your AI assistant talk to:
- Your file system
- Databases
- APIs
- Web services
- Development tools

## How Do MCP Servers Work?

An MCP server is a lightweight program that exposes specific capabilities to AI models. When you install an MCP server, you're giving your AI assistant new "skills".

For example:
- A **GitHub MCP server** lets Claude read your repositories and create pull requests
- A **Database MCP server** allows querying your SQL database
- A **Web MCP server** enables real-time web searches

## Installing MCP Servers

### For Claude Code

1. Browse [AgentDepot's MCP directory](https://agentdepot.dev/mcp)
2. Find an MCP server you need
3. Copy the install command
4. Run it in your terminal

\`\`\`bash
npx @anthropic-ai/mcp install github
\`\`\`

### Configuration

MCP servers are configured in your Claude Code settings:

\`\`\`json
{
  "mcp": {
    "github": {
      "token": "your-github-token"
    }
  }
}
\`\`\`

## Popular MCP Servers

### 1. File System MCP
Gives Claude secure access to read and write files in your project.

### 2. GitHub MCP
Enables repository management, PR creation, and issue tracking.

### 3. Database MCP
Query PostgreSQL, MySQL, or SQLite databases directly from Claude.

### 4. Browser MCP
Let Claude navigate web pages and extract data.

## Why MCP Matters

Before MCP, every AI tool had to build custom integrations for every service. MCP creates a **universal standard** so:
- Developers build integrations once
- AI tools work with any MCP server
- Users get consistent experiences

## Building Your Own MCP Server

Want to create a custom MCP server? Check out the [MCP SDK documentation](https://modelcontextprotocol.io) to get started.

## Conclusion

MCP servers are the future of AI agent capabilities. By installing the right MCP servers, you can turn Claude Code into a powerhouse that connects to your entire development workflow.

Browse our [MCP directory](https://agentdepot.dev/mcp) to find servers for your stack!
    `
  },
  {
    slug: "best-claude-code-agents-2025",
    title: "10 Best Claude Code Agents for Developers in 2025",
    excerpt: "Supercharge your coding workflow with these must-have Claude Code agents for React, TypeScript, Python, and more.",
    author: "AgentDepot Team",
    date: "2025-12-02",
    readTime: "7 min read",
    tags: ["Claude Code", "Productivity", "Best Of"],
    content: `
# 10 Best Claude Code Agents for Developers in 2025

Claude Code has exploded in popularity, and with it, a rich ecosystem of agents and MCP servers. Here are the **10 essential agents** every developer should install.

## 1. Next.js 15 Expert

**What it does:** Guides Claude to follow Next.js 15 best practices with App Router, Server Components, and Turbopack.

**Why you need it:** If you're building with Next.js, this agent ensures your code follows the latest patterns and avoids common pitfalls.

[Install from AgentDepot](https://agentdepot.dev/agent/nextjs-expert)

## 2. TypeScript Strict Mode Enforcer

**What it does:** Enforces strict TypeScript rules and helps write type-safe code.

**Why you need it:** Say goodbye to \`any\` types and runtime errors. This agent won't let you ship unsafe code.

## 3. React Performance Optimizer

**What it does:** Identifies performance bottlenecks and suggests optimizations like \`useMemo\`, \`useCallback\`, and code splitting.

**Why you need it:** React apps get slow fast. This agent keeps your components lean and fast.

## 4. Tailwind CSS Assistant

**What it does:** Helps you write beautiful, responsive Tailwind CSS without checking the docs.

**Why you need it:** Stop Googling "tailwind center div" and let this agent handle your styling.

## 5. Python Django Expert

**What it does:** Provides Django best practices, ORM optimization, and security hardening.

**Why you need it:** Django has a lot of conventions. This agent knows them all.

## 6. API Security Auditor

**What it does:** Scans your code for common security vulnerabilities like SQL injection, XSS, and exposed secrets.

**Why you need it:** Security isn't optional. This agent catches vulnerabilities before they ship.

## 7. Test Generator Pro

**What it does:** Automatically writes unit tests and integration tests for your functions.

**Why you need it:** Testing is tedious. Let AI handle the boilerplate while you focus on edge cases.

## 8. Git Commit Message Writer

**What it does:** Generates meaningful, conventional commit messages based on your changes.

**Why you need it:** No more "fix stuff" commits. This agent writes proper commit history.

## 9. Documentation Writer

**What it does:** Creates clear, comprehensive documentation from your code.

**Why you need it:** Good docs are hard. This agent makes them easy.

## 10. Debugging Assistant

**What it does:** Helps diagnose errors, suggests fixes, and explains what went wrong.

**Why you need it:** Debugging is half the job. This agent is like having a senior dev on call.

## How to Install These Agents

1. Visit [AgentDepot](https://agentdepot.dev)
2. Search for the agent you want
3. Click "Copy Install"
4. Follow the instructions for Claude Code

## Wrapping Up

These 10 agents will transform how you code with Claude. Start with 2-3 that match your stack, then explore more as you get comfortable.

Happy coding!
    `
  },
  {
    slug: "cursor-rules-for-react-developers",
    title: "10 Must-Have Cursor Rules for React Developers",
    excerpt: "Level up your React development in Cursor with these battle-tested rules for components, hooks, and performance.",
    author: "AgentDepot Team",
    date: "2025-12-03",
    readTime: "6 min read",
    tags: ["Cursor", "React", "Best Practices"],
    content: `
# 10 Must-Have Cursor Rules for React Developers

If you're using Cursor to build React apps, you need custom rules. Here are **10 rules** that will make your React code cleaner, faster, and more maintainable.

## 1. React 19 + TypeScript Strict

Enforce React 19 patterns with strict TypeScript.

\`\`\`
You are a React 19 expert using TypeScript in strict mode.
Always use function components with proper TypeScript types.
Never use 'any' - use proper type inference or explicit types.
Prefer const over let, and avoid var entirely.
\`\`\`

## 2. Component Structure Enforcer

Keep your components organized and predictable.

\`\`\`
When creating React components:
1. Props interface first
2. Component definition
3. Helper functions below
4. Styles at the bottom
Use named exports, not default exports.
\`\`\`

## 3. Hooks Best Practices

Prevent common hook mistakes.

\`\`\`
When using React hooks:
- Always include all dependencies in useEffect
- Use useMemo for expensive computations
- Use useCallback for function props
- Never call hooks conditionally
\`\`\`

## 4. Performance-First Development

Write fast React code from the start.

\`\`\`
For React performance:
- Use React.memo() for expensive components
- Implement code splitting with React.lazy()
- Avoid inline function definitions in JSX
- Use key props correctly in lists
\`\`\`

## 5. Tailwind CSS Integration

Combine Cursor with Tailwind efficiently.

\`\`\`
When writing styles:
- Use Tailwind utility classes
- Follow mobile-first responsive design
- Use cn() helper for conditional classes
- Avoid inline styles unless absolutely necessary
\`\`\`

## 6. State Management Patterns

Keep state clean and predictable.

\`\`\`
For state management:
- Use useState for local state
- Use useReducer for complex state logic
- Use Context for theme, auth, or global UI state
- Consider Zustand for app-wide state
\`\`\`

## 7. Form Handling Expert

Build better forms faster.

\`\`\`
For forms:
- Use React Hook Form for complex forms
- Implement proper validation
- Show errors near inputs
- Disable submit during async operations
\`\`\`

## 8. API Integration Best Practices

Handle async data like a pro.

\`\`\`
When fetching data:
- Use React Query or SWR for server state
- Show loading states
- Handle errors gracefully
- Implement retry logic
- Show empty states
\`\`\`

## 9. Accessibility Enforcer

Make your apps usable by everyone.

\`\`\`
For accessibility:
- Use semantic HTML elements
- Add ARIA labels where needed
- Ensure keyboard navigation works
- Test with screen readers
- Maintain color contrast ratios
\`\`\`

## 10. Testing Culture

Write testable code from day one.

\`\`\`
When writing components:
- Write code that's easy to test
- Use data-testid for test selectors
- Keep business logic separate from UI
- Write tests alongside component code
\`\`\`

## How to Use These Rules

### Option 1: All-in-One

Create a \`.cursorrules\` file with all 10 rules combined.

### Option 2: Project-Specific

Pick the 3-5 rules most relevant to your current project.

### Option 3: Pre-Made Rules

Find these rules ready-to-use on [AgentDepot](https://agentdepot.dev/cursor).

## Conclusion

These rules codify years of React best practices into Cursor. Your AI pair programmer will now write React code the way you want it.

Browse more [Cursor rules on AgentDepot](https://agentdepot.dev/cursor) and ship better React apps faster!
    `
  },
  {
    slug: "ai-coding-agents-beginners-guide",
    title: "Getting Started with AI Coding Agents: A Beginner's Guide",
    excerpt: "New to AI coding assistants? Learn what agents are, which tools to use, and how to boost your productivity 10x.",
    author: "AgentDepot Team",
    date: "2025-12-04",
    readTime: "12 min read",
    tags: ["Tutorial", "Beginners", "AI Agents"],
    content: `
# Getting Started with AI Coding Agents: A Beginner's Guide

AI coding assistants are everywhere. GitHub Copilot, ChatGPT, Claude... but there's a **new level** of AI-powered development: **AI Agents**.

Let's break down what they are and how to start using them today.

## What are AI Coding Agents?

An **AI coding agent** is an assistant with specific instructions, context, and capabilities tailored for a particular task.

Think of it like this:
- **Basic AI:** "Write me a React component"
- **AI Agent:** "Write me a React component following our team's style guide, using TypeScript strict mode, Tailwind CSS, and our custom hooks pattern"

## Why Use Agents Instead of Raw AI?

### Consistency
Agents ensure every piece of code follows the same patterns.

### Speed
You don't need to explain your preferences every time.

### Quality
Agents encode best practices so you don't ship bugs.

### Context
They understand your stack, your patterns, your rules.

## Popular AI Coding Tools

### 1. Cursor
The most popular AI-native code editor. Uses "rules" (agents) stored in \`.cursorrules\` files.

**Best for:** Developers who want a VS Code-like experience with powerful AI.

### 2. Windsurf
The new challenger with "Flow" mode - AI that can take multi-step actions across your codebase.

**Best for:** Developers who want AI to handle complex refactors autonomously.

### 3. Claude Code
Anthropic's official CLI that brings Claude directly to your terminal.

**Best for:** Developers who prefer terminal-based workflows and MCP servers.

### 4. Replit
Browser-based IDE with AI built in. Great for learning and prototyping.

**Best for:** Beginners, educators, and rapid prototyping.

## How to Install Your First Agent

### Step 1: Choose Your Tool
Pick one of the tools above. We recommend **Cursor** for beginners.

### Step 2: Find an Agent
Go to [AgentDepot](https://agentdepot.dev) and browse agents for your tool.

### Step 3: Install It
For Cursor:
1. Copy the rule from AgentDepot
2. Create \`.cursorrules\` in your project root
3. Paste the rule
4. Start coding!

For Claude Code:
1. Find an MCP server or agent
2. Run \`npx @anthropic-ai/mcp install [server-name]\`
3. Configure in settings
4. Start using it!

## Your First Project with Agents

Let's build a simple to-do app using AI agents.

### Step 1: Install a React Agent
Search "React" on AgentDepot and install a React best practices agent.

### Step 2: Start Building
Open your AI assistant (Cmd+K in Cursor) and say:
> "Create a to-do app with add, delete, and mark complete functionality"

### Step 3: Watch the Magic
The agent will generate code following the rules you installed.

### Step 4: Iterate
Make changes by describing what you want. The agent maintains consistency.

## Common Mistakes to Avoid

### 1. Installing Too Many Agents at Once
Start with 1-2 agents. Add more as you get comfortable.

### 2. Not Reading What the Agent Does
Skim the agent description so you know what to expect.

### 3. Trusting AI Blindly
Always review generated code. AI is a tool, not a replacement for thinking.

### 4. Ignoring Agent Conflicts
Some agents contradict each other. If you see weird behavior, try removing agents one by one.

## Advanced: Creating Your Own Agents

Once you're comfortable, you can write custom agents for your team's patterns.

Example custom agent:
\`\`\`
You are an expert in our company's Next.js codebase.
We use:
- Next.js 15 App Router
- TypeScript strict mode
- Tailwind CSS with our custom design tokens
- tRPC for API calls
- Prisma for database access

When generating code:
1. Follow our file structure: features/[feature-name]/
2. Use our custom hooks from @/hooks
3. Implement error boundaries
4. Add loading states
5. Write tests alongside code
\`\`\`

Save this as \`.cursorrules\` and now your AI knows your entire stack!

## Next Steps

1. **Install your first agent** from [AgentDepot](https://agentdepot.dev)
2. **Build something small** to get comfortable
3. **Join communities** (Discord, Reddit) to learn from others
4. **Experiment** with different agents and tools

## Conclusion

AI coding agents are the future of software development. They don't replace developers - they make us **10x faster** at the boring parts so we can focus on the creative parts.

Start with one agent today. Your future self will thank you.

[Explore agents on AgentDepot →](https://agentdepot.dev)
    `
  },
  {
    slug: "custom-windsurf-flows-guide",
    title: "How to Create Custom Windsurf Flows: A Complete Guide",
    excerpt: "Master Windsurf's Flow mode and learn how to create multi-step AI workflows that handle complex coding tasks autonomously.",
    author: "AgentDepot Team",
    date: "2025-12-05",
    readTime: "9 min read",
    tags: ["Windsurf", "Tutorial", "Advanced"],
    content: `
# How to Create Custom Windsurf Flows: A Complete Guide

Windsurf's **Flow mode** is a game-changer. It lets AI handle complex, multi-step tasks across your entire codebase. Here's how to harness its full power.

## What are Windsurf Flows?

A **Flow** is Windsurf's term for a multi-step AI workflow. Unlike simple prompts, Flows can:
- Edit multiple files
- Run commands
- Make decisions based on results
- Ask for clarification when needed
- Roll back if something goes wrong

Think of Flows as **autonomous AI workflows** that handle complex tasks end-to-end.

## Flow Mode vs. Standard Mode

### Standard Mode (Cmd+K)
- Single edit or generation
- Quick fixes
- One file at a time

### Flow Mode (Cmd+Shift+K)
- Multi-step operations
- Cross-file refactors
- Complex features
- Decision-making

## Example Flows

### Flow 1: Add Authentication to App

**Prompt:**
> "Add authentication using NextAuth with Google provider. Create the API route, add session provider to layout, create a login page, and protect the dashboard route."

**What Windsurf Does:**
1. Installs \`next-auth\`
2. Creates \`/api/auth/[...nextauth]/route.ts\`
3. Wraps app in \`SessionProvider\`
4. Creates \`/login\` page
5. Adds auth middleware to \`/dashboard\`
6. Tests the implementation

### Flow 2: Migrate from REST to tRPC

**Prompt:**
> "Migrate all API routes to tRPC. Create tRPC router, convert each endpoint, update all client-side fetch calls to use tRPC client."

**What Windsurf Does:**
1. Installs tRPC
2. Creates router structure
3. Converts each API route
4. Updates all client calls
5. Removes old API routes
6. Tests each endpoint

### Flow 3: Implement Dark Mode

**Prompt:**
> "Add dark mode using next-themes. Create theme provider, add theme toggle component, update all components to support dark mode, persist theme preference."

**What Windsurf Does:**
1. Installs \`next-themes\`
2. Creates \`ThemeProvider\`
3. Builds toggle component
4. Updates CSS variables
5. Tests theme switching

## Creating Effective Flow Prompts

### 1. Be Specific About the End Goal

❌ Bad: "Improve the app"
✅ Good: "Add form validation with Zod, show inline errors, and prevent submission if invalid"

### 2. Mention All Related Files

❌ Bad: "Add a feature"
✅ Good: "Add feature to UserProfile component, update the API route, and add tests"

### 3. Specify Your Stack

❌ Bad: "Add authentication"
✅ Good: "Add authentication using NextAuth with Prisma adapter and PostgreSQL"

### 4. Set Constraints

✅ "Implement this without installing new dependencies"
✅ "Use our existing design system components"
✅ "Keep backward compatibility with the old API"

## Advanced Flow Patterns

### Pattern 1: Conditional Flows

\`\`\`
If we don't have a database schema yet, create one.
Then seed it with test data.
Finally, create API endpoints to query it.
\`\`\`

### Pattern 2: Exploratory Flows

\`\`\`
Analyze our current error handling approach.
Identify inconsistencies.
Propose a standardized pattern.
Implement it across all API routes.
\`\`\`

### Pattern 3: Refactor Flows

\`\`\`
Find all instances where we're duplicating the auth check logic.
Create a reusable middleware.
Replace all duplicated code with the middleware.
Test that nothing broke.
\`\`\`

## Windsurf Flow Rules

You can create custom "rules" for Flows, similar to Cursor rules.

Create a \`.windsurfrules\` file:

\`\`\`
When implementing features:
1. Write TypeScript with strict mode
2. Add error handling to all async operations
3. Create tests for new functionality
4. Update relevant documentation
5. Run the build before marking complete

For API routes:
- Use tRPC
- Implement rate limiting
- Add input validation with Zod
- Log all errors to our monitoring service

For UI components:
- Use Tailwind CSS
- Ensure mobile responsiveness
- Add loading and error states
- Implement accessibility features
\`\`\`

## Troubleshooting Flows

### Flow Gets Stuck
Press \`Escape\` to cancel and try a simpler prompt.

### Wrong Direction
Use "Stop" and provide clarification:
> "Stop. Don't modify the API, only update the client."

### Needs More Context
Windsurf will ask questions. Answer them to guide the Flow.

### Flow Failed
Review the error, then say:
> "Try again, but this time [your modification]"

## Best Practices

### 1. Start Small
Test Flows on small tasks before tackling big refactors.

### 2. Review Changes
Always review what the Flow did before committing.

### 3. Use Version Control
Commit before running complex Flows so you can roll back.

### 4. Provide Context
The more context in your prompt, the better the result.

### 5. Iterate
Flows can be refined. If it didn't do exactly what you wanted, clarify and run again.

## Conclusion

Windsurf Flows are the closest thing we have to **autonomous AI development**. They handle the tedious multi-step tasks so you can focus on architecture and product decisions.

Master Flows, and you'll code 10x faster.

Find more [Windsurf rules on AgentDepot →](https://agentdepot.dev/windsurf)
    `
  },
  {
    slug: "ai-agents-vs-cursor-rules",
    title: "AI Agents vs Cursor Rules: What's the Difference?",
    excerpt: "Confused about agents, rules, prompts, and MCP servers? We break down the terminology and show you what to use when.",
    author: "AgentDepot Team",
    date: "2025-12-06",
    readTime: "6 min read",
    tags: ["Education", "Cursor", "AI Agents"],
    content: `
# AI Agents vs Cursor Rules: What's the Difference?

The AI coding world is full of confusing terms: **agents**, **rules**, **prompts**, **MCP servers**, **skills**... what does it all mean?

Let's clear it up.

## The Terminology

### 1. AI Agent (General Term)
An AI system with **specific instructions and capabilities** to accomplish tasks autonomously.

**Example:** "A coding agent that writes Python following PEP 8 standards"

### 2. Cursor Rules
Cursor's term for instructions stored in a \`.cursorrules\` file.

**Example:**
\`\`\`
You are an expert in TypeScript and React.
Write functional components with proper types.
Use Tailwind for styling.
\`\`\`

### 3. Windsurf Cascades/Flows
Windsurf's term for AI workflows.
- **Cascade:** A predefined rule/instruction
- **Flow:** An autonomous multi-step task

### 4. MCP Servers
**Model Context Protocol** servers - programs that give AI access to external tools and data.

**Example:** A GitHub MCP server lets Claude create pull requests.

### 5. Claude Code Agents
Instructions/configurations for Claude when used via the CLI.

### 6. Skills/Plugins
Tool-specific extensions (e.g., Replit skills).

## The Confusion

All of these are forms of **"AI agents"** in the broad sense, but each tool uses different terminology.

Let's map it out:

| Tool | Their Term | What It Really Is |
|------|-----------|------------------|
| Cursor | Rules | Instructions in \`.cursorrules\` |
| Windsurf | Cascades | Instructions in \`.windsurfrules\` |
| Claude Code | Agents/MCP | Instructions + capability extensions |
| Replit | Skills | Predefined coding assistants |

## When to Use Each

### Use Cursor Rules When:
- You want AI to follow specific coding standards
- You're working in a single project
- You need consistency across your codebase

### Use Windsurf Cascades/Flows When:
- You need multi-step autonomous workflows
- You want AI to make decisions across files
- You're doing complex refactors

### Use MCP Servers When:
- You need AI to access external tools (GitHub, databases, APIs)
- You want capabilities beyond code generation
- You're using Claude Code CLI

### Use Generic Agents When:
- You want instructions that work across multiple tools
- You're documenting team standards
- You need something portable

## The Real Question: What Should You Install?

Forget the terminology. Here's what matters:

### For Project-Specific Patterns:
Install a **rule/cascade** that matches your stack.

Example: "Next.js 15 + Tailwind + TypeScript Strict"

### For Tool Capabilities:
Install **MCP servers** to give AI new powers.

Example: GitHub MCP lets AI create PRs, Postgres MCP lets AI query your database.

### For Team Standards:
Create a **custom rule** encoding your team's conventions.

Example: Your company's component structure, naming conventions, testing requirements.

## Can You Use Multiple at Once?

**Yes!** In fact, you should.

Example setup for a Next.js project:
- **Cursor Rule:** Next.js + React + TypeScript best practices
- **MCP Servers:** GitHub (for PRs), File System (for reading), Postgres (for DB queries)
- **Custom Team Rule:** Your company's specific patterns

They all work together.

## The Hierarchy

When there are conflicts:

1. **Custom team rules** (most specific)
2. **Project-specific rules** (stack/framework rules)
3. **General best practices** (language/tool rules)
4. **MCP servers** (capabilities, no conflicts)

## Finding the Right Agents

This is why [AgentDepot](https://agentdepot.dev) exists!

We organize agents by:
- **Tool** (Cursor, Windsurf, Claude Code, etc.)
- **Type** (Rule, Agent, MCP Server, Plugin)
- **Category** (Coding, Testing, DevOps, etc.)
- **Stack** (React, Python, Django, etc.)

No more confusion about what to install where.

## Conclusion

Here's the TL;DR:

- **"AI Agents"** is the umbrella term for all of this
- Each tool calls them something different
- They all serve the same purpose: giving AI specific instructions and capabilities
- You can (and should) use multiple types together
- [AgentDepot](https://agentdepot.dev) has them all organized for you

Stop worrying about terminology. Start installing agents and shipping faster.

[Browse agents by tool →](https://agentdepot.dev)
    `
  },
  {
    slug: "productivity-hacks-ai-coding-2025",
    title: "7 AI Coding Productivity Hacks That Will Change How You Ship",
    excerpt: "Stop using AI as a fancy autocomplete. Here are advanced techniques that will 10x your development speed.",
    author: "AgentDepot Team",
    date: "2025-12-07",
    readTime: "8 min read",
    tags: ["Productivity", "Tips", "Advanced"],
    content: `
# 7 AI Coding Productivity Hacks That Will Change How You Ship

Most developers use AI coding assistants like expensive autocomplete. They're leaving **90% of the value on the table**.

Here are **7 advanced techniques** that will actually 10x your productivity.

## 1. The "Context Dump" Technique

**The Problem:** AI doesn't know your project structure, conventions, or existing patterns.

**The Hack:**
Create a \`CONTEXT.md\` file in your project root with:
- Your tech stack
- File structure
- Naming conventions
- Key design decisions
- Common patterns

Reference it in your rules:
\`\`\`
Before suggesting code, read CONTEXT.md to understand our project structure and conventions.
\`\`\`

**Result:** AI suggestions that actually fit your codebase.

## 2. The "Negative Instruction" Pattern

**The Problem:** AI keeps suggesting things you don't want.

**The Hack:**
Be explicit about what NOT to do:
\`\`\`
NEVER:
- Use 'any' type in TypeScript
- Create files in /components/misc
- Add console.log in production code
- Skip error handling
\`\`\`

**Result:** AI avoids your pet peeves automatically.

## 3. The "Task Chain" Method

**The Problem:** Complex tasks overwhelm AI, producing low-quality results.

**The Hack:**
Break big tasks into a numbered sequence:
\`\`\`
Task 1: Create the TypeScript interface for User
Task 2: Create the Prisma schema for User
Task 3: Create API endpoints for CRUD operations
Task 4: Add error handling to each endpoint
Task 5: Write tests for each endpoint
\`\`\`

Run them one at a time, reviewing each before moving on.

**Result:** High-quality, reviewable code instead of a messy dump.

## 4. The "Example-First" Approach

**The Problem:** AI misunderstands what you want.

**The Hack:**
Show, don't tell:
\`\`\`
Create a new Button component similar to this existing one:

[paste example code]

But make it support a 'variant' prop for primary/secondary styles.
\`\`\`

**Result:** AI matches your existing patterns perfectly.

## 5. The "Constraint Framework"

**The Problem:** AI over-engineers simple tasks.

**The Hack:**
Add constraints to every prompt:
\`\`\`
Build a login form with:
- ONLY email and password fields
- NO social login buttons
- NO password reset (we'll add later)
- ONLY client-side validation for now
\`\`\`

**Result:** Simple, focused code instead of bloated over-engineering.

## 6. The "Test-First" Loop

**The Problem:** AI-generated code often has subtle bugs.

**The Hack:**
Reverse the workflow:
1. Write the test first (or have AI write it)
2. Run the test (it should fail)
3. Have AI implement the feature
4. Run the test again
5. Iterate until it passes

**Result:** Correct code from the start, not just "looks right" code.

## 7. The "Diff Review" Habit

**The Problem:** Blindly accepting AI changes leads to technical debt.

**The Hack:**
After every AI edit:
1. Open the diff view
2. Review line by line
3. Ask AI to explain any confusing changes
4. Reject parts that don't make sense

Treat AI like a junior developer's pull request.

**Result:** You maintain code quality and learn from AI suggestions.

## Bonus: The "Agent Stack" System

Combine multiple agents for maximum power:

**Layer 1:** Language/framework best practices
**Layer 2:** Your team's coding standards
**Layer 3:** Project-specific context
**Layer 4:** MCP servers for capabilities

Example stack for a Next.js app:
\`\`\`
- Next.js 15 Best Practices agent
- Your company's React rules
- Project CONTEXT.md
- GitHub MCP + Postgres MCP
\`\`\`

## The Meta-Hack: Iteration

The secret to all of these?

**Don't expect perfection on the first try.**

- Ask for code
- Review it
- Give feedback
- Iterate

AI is a **conversation**, not a vending machine.

## Common Mistakes to Avoid

### ❌ Treating AI Like Google
AI isn't a search engine. Give it context and have a conversation.

### ❌ Accepting Everything Blindly
You're the senior developer. AI is the junior. Review everything.

### ❌ Vague Prompts
"Make it better" gets you nowhere. Be specific.

### ❌ Ignoring Errors
If AI-generated code has errors, don't just re-run. Understand WHY it failed.

## Putting It All Together

Here's a real workflow combining all these hacks:

1. **Set up context** (CONTEXT.md + custom rules)
2. **Break down the task** (numbered steps)
3. **Add constraints** (what NOT to do, scope limits)
4. **Provide examples** (show similar existing code)
5. **Generate tests first** (AI writes the test)
6. **Implement** (AI writes the code)
7. **Review diffs** (line by line)
8. **Iterate** (give feedback, improve)

## Conclusion

AI coding tools are powerful, but **only if you use them right**.

These 7 hacks turn AI from a fancy autocomplete into a true force multiplier.

Try one today. Master all seven, and you'll ship **10x faster** with **better quality**.

Find the [best agents for your stack on AgentDepot →](https://agentdepot.dev)
    `
  },
  {
    slug: "complete-guide-replit-templates",
    title: "Replit Templates: The Complete Guide to Instant Development Environments",
    excerpt: "Learn how Replit templates can get you from idea to running code in 30 seconds. Perfect for prototyping, education, and rapid development.",
    author: "AgentDepot Team",
    date: "2025-12-08",
    readTime: "7 min read",
    tags: ["Replit", "Templates", "Beginners"],
    content: `
# Replit Templates: The Complete Guide

Want to start coding **immediately** without setting up Node, Python, databases, or dependencies? Replit templates are your answer.

## What are Replit Templates?

A **Replit template** is a pre-configured development environment that runs entirely in your browser. Click a link, and you're coding in seconds.

No more:
- "Works on my machine" problems
- Dependency hell
- Environment setup
- Installation headaches

## Why Use Replit Templates?

### 1. Speed
From idea to running code in **30 seconds**.

### 2. Perfect for Learning
Students can start coding without installing anything.

### 3. Great for Prototyping
Test ideas quickly without committing to a full project setup.

### 4. Collaboration
Share a link, and your team is in the same environment instantly.

### 5. AI-Powered
Replit has built-in AI assistance for code generation and debugging.

## Popular Replit Templates

### 1. Next.js Starter
Full Next.js 14 setup with App Router, TypeScript, and Tailwind CSS.

**Use case:** Build and deploy a React app in minutes.

### 2. Python Flask API
Complete Flask backend with SQLite, auth, and API routes.

**Use case:** Build a REST API for a hackathon project.

### 3. Discord Bot
Pre-configured Discord bot with examples.

**Use case:** Learn bot development without setup hassle.

### 4. Full-Stack PERN
PostgreSQL + Express + React + Node.js all configured.

**Use case:** Build a production-ready full-stack app.

### 5. HTML/CSS/JS Playground
Simple 3-file starter for web fundamentals.

**Use case:** Teaching or quick UI experiments.

## How to Use a Replit Template

### Step 1: Find a Template
Browse [AgentDepot's Replit collection](https://agentdepot.dev/replit) or search Replit directly.

### Step 2: Fork It
Click "Use Template" or "Fork" to create your own copy.

### Step 3: Start Coding
The environment is ready. Edit files and see changes live.

### Step 4: Deploy (Optional)
Replit can host your project with one click.

## Creating Your Own Template

### 1. Build Your Project
Create a working project in Replit.

### 2. Add a README
Explain what your template does and how to use it.

### 3. Configure .replit File
\`\`\`toml
run = "npm start"
language = "nodejs"

[nix]
channel = "stable-22_11"
\`\`\`

### 4. Publish
Click "Publish" and mark it as a template.

### 5. Share
Share the template link or submit it to AgentDepot!

## Replit vs Traditional Setup

| Feature | Replit | Traditional |
|---------|--------|-------------|
| Setup time | 30 seconds | 30 minutes |
| Requires installation | No | Yes |
| Works on any device | Yes | No (Chromebooks, tablets, etc.) |
| Collaboration | Built-in | Complex (Git, VS Code Live Share, etc.) |
| Hosting | One-click | Manual deployment |
| AI assistance | Built-in | Install extensions |

## Best Use Cases

### ✅ Perfect For:
- Learning and education
- Quick prototypes
- Hackathons
- Code interviews
- Sharing reproducible examples
- Client demos

### ❌ Not Ideal For:
- Large production apps (use local dev)
- Monorepos (performance issues)
- Projects requiring specific system tools
- Heavy computational tasks

## Advanced Replit Features

### Secrets Management
Store API keys securely in Replit's Secrets tab.

### Database
Get a free PostgreSQL or Firebase database.

### Custom Domains
Point your own domain to your Replit project.

### Always-On
Keep your project running 24/7 (paid feature).

### Multiplayer
Multiple people can code simultaneously, Google Docs style.

## Replit + AI Coding

Replit's AI (called "Ghostwriter") can:
- Generate code from prompts
- Explain existing code
- Debug errors
- Suggest improvements
- Write tests

Combine this with templates for **instant AI-powered development**.

## Common Issues & Solutions

### Issue: Slow Performance
**Solution:** Replit can lag with large projects. Use for smaller projects or prototypes.

### Issue: Free Tier Limits
**Solution:** Upgrade to Replit Core for more resources and always-on projects.

### Issue: Template Outdated
**Solution:** Check when it was last updated. Fork it and update dependencies yourself.

### Issue: Missing Dependencies
**Solution:** Install them via the shell: \`npm install [package]\`

## Contributing Templates to AgentDepot

We're always looking for great templates!

**Requirements:**
- Works out of the box (no configuration needed)
- Clear README with instructions
- Up-to-date dependencies
- Useful for developers

**Submit:** Visit [agentdepot.dev/submit](https://agentdepot.dev/submit)

## Conclusion

Replit templates remove the friction between "idea" and "running code".

Whether you're teaching, learning, prototyping, or building, templates get you started in seconds instead of hours.

[Browse Replit templates on AgentDepot →](https://agentdepot.dev/replit)
    `
  },
  {
    slug: "security-best-practices-ai-agents",
    title: "Security Best Practices for AI Coding Agents: What You Need to Know",
    excerpt: "AI agents can access your code, run commands, and modify files. Here's how to use them safely without compromising your projects or data.",
    author: "AgentDepot Team",
    date: "2025-12-09",
    readTime: "10 min read",
    tags: ["Security", "Best Practices", "Important"],
    content: `
# Security Best Practices for AI Coding Agents

AI coding agents are powerful - they read your code, run commands, and make changes. But with great power comes great responsibility.

Here's how to use AI agents **safely** without compromising your projects or data.

## The Security Risks

### 1. Code Exposure
AI agents send your code to cloud services for processing.

**Risk:** Proprietary code, secrets, or sensitive data could be exposed.

### 2. Malicious Agents
Not all agents are trustworthy. Malicious ones could inject backdoors or steal data.

**Risk:** Installing a bad agent could compromise your entire project.

### 3. Accidental Command Execution
AI can run terminal commands. What if it runs \`rm -rf /\`?

**Risk:** Data loss or system damage from AI mistakes.

### 4. Dependency Vulnerabilities
Agents that install packages could introduce security vulnerabilities.

**Risk:** Supply chain attacks via malicious dependencies.

## Security Best Practices

### 1. Review Before Installing

**❌ Don't:** Install agents blindly
**✅ Do:** Review the agent's code/instructions before using

For Cursor rules:
\`\`\`bash
# Read the .cursorrules file completely
# Look for suspicious patterns:
# - Requests to send data externally
# - Commands that modify system files
# - Obfuscated or encoded text
\`\`\`

For MCP servers:
\`\`\`bash
# Check the npm package or GitHub repo
# Read the code (especially network requests)
# Check for known vulnerabilities
npm audit
\`\`\`

### 2. Never Commit Secrets

**❌ Don't:** Put API keys in your .cursorrules or code
**✅ Do:** Use environment variables

Bad:
\`\`\`typescript
const API_KEY = "sk-1234567890abcdef"
\`\`\`

Good:
\`\`\`typescript
const API_KEY = process.env.OPENAI_API_KEY
\`\`\`

### 3. Use .gitignore

Exclude sensitive files from AI access:

\`\`\`gitignore
.env
.env.local
*.key
*.pem
secrets/
config/private/
\`\`\`

### 4. Limit Agent Permissions

For MCP servers, only grant necessary permissions:

\`\`\`json
{
  "github": {
    "permissions": ["read:repo"],  // Not "admin:all"
    "token": "limited-scope-token"
  }
}
\`\`\`

### 5. Sandbox Testing Environments

Test new agents in isolated environments first:

\`\`\`bash
# Create a test project
mkdir test-agent && cd test-agent
# Copy the agent/rule
# Test thoroughly
# Only then use in real projects
\`\`\`

### 6. Review AI-Generated Code

**Treat AI like a junior developer's PR:**
- Review every line
- Look for security issues
- Don't trust blindly

Common issues to watch for:
- SQL injection vulnerabilities
- XSS vulnerabilities
- Hardcoded credentials
- Insecure authentication
- Missing input validation

### 7. Keep Dependencies Updated

AI might suggest outdated packages with known vulnerabilities.

\`\`\`bash
# Check for vulnerabilities
npm audit

# Update dependencies
npm update

# Check package age
npx npm-check-updates
\`\`\`

### 8. Use Private Repos

For proprietary projects:
- Use private GitHub repos
- Don't paste sensitive code in AI chats
- Consider self-hosted AI solutions for sensitive work

### 9. Monitor Agent Activity

Keep track of what AI is doing:
- Review git diffs before committing
- Monitor network requests (use tools like Wireshark if paranoid)
- Check for unexpected file changes

### 10. Verify Agent Sources

**Only install agents from trusted sources:**

✅ **Trusted:**
- Official tool documentation
- Verified GitHub repos with many stars
- AgentDepot (we test all submissions)
- Well-known developers

❌ **Suspicious:**
- Random Discord/Reddit links
- Repos with no stars or activity
- Obfuscated code
- No clear author attribution

## Red Flags to Watch For

### 🚩 Obfuscated Code
If you can't easily read what an agent does, don't use it.

### 🚩 Network Requests
Agents shouldn't make unexpected network calls.

### 🚩 File System Access
Be wary of agents that read/write files outside your project.

### 🚩 Credential Requests
Legitimate agents don't ask for passwords in plain text.

### 🚩 No Source Code
If you can't see the source, you can't trust it.

## AgentDepot's Security Standards

We take security seriously. Every agent on AgentDepot:

1. **Is manually reviewed** by our team
2. **Has source code available** (GitHub or inline)
3. **Is tested** in a sandboxed environment
4. **Has clear attribution** to the original author
5. **Can be reported** if issues are found

If you find a security issue with any agent, email us immediately: **hello@agentdepot.dev**

## Company/Enterprise Considerations

### Policy Recommendations

1. **Whitelist approved agents** - Only allow tested agents
2. **Require review** - PRs must be reviewed, even if AI-generated
3. **Disable in sensitive repos** - Turn off AI for repos with secrets
4. **Self-host if needed** - Use local LLMs for top-secret projects
5. **Audit trail** - Log all AI interactions for compliance

### Tools to Consider

- **GitHub Copilot for Business** (enterprise controls)
- **Self-hosted Cursor** (if available)
- **Private Claude API** (Anthropic enterprise)
- **Local LLMs** (Ollama, LM Studio)

## What If You're Compromised?

If you suspect an agent has done something malicious:

1. **Stop using it immediately**
2. **Review recent commits** for suspicious changes
3. **Rotate all credentials** (API keys, passwords, tokens)
4. **Scan for vulnerabilities** (\`npm audit\`, \`pip-audit\`)
5. **Report it** to AgentDepot and the community
6. **Notify your team** if it's a work project

## The Balance

Security doesn't mean paranoia. AI agents are safe **if you follow best practices**.

**Be cautious but not fearful:**
- Review what you install
- Use trusted sources
- Monitor changes
- Keep secrets secret

## Conclusion

AI coding agents are incredibly powerful tools. Used responsibly, they're safe and transformative.

Follow these practices:
✅ Review before installing
✅ Never commit secrets
✅ Review AI-generated code
✅ Use trusted sources (like AgentDepot)
✅ Monitor for suspicious activity

Code smarter, not more dangerously.

[Find vetted agents on AgentDepot →](https://agentdepot.dev)
    `
  },
  {
    slug: "python-ai-agents-complete-guide",
    title: "Best AI Agents for Python Developers: Complete 2025 Guide",
    excerpt: "From Django to FastAPI, data science to automation, here are the must-have AI agents every Python developer should install.",
    author: "AgentDepot Team",
    date: "2025-12-10",
    readTime: "9 min read",
    tags: ["Python", "Best Of", "Django"],
    content: `
# Best AI Agents for Python Developers: Complete 2025 Guide

Python developers have unique needs - from web frameworks to data science, automation to AI/ML. Here are the **best AI agents** tailored for Python workflows.

## Why Python Needs Custom Agents

Python is versatile, which means generic AI often gets it wrong:
- Suggests Django when you need FastAPI
- Uses pandas when NumPy is better
- Ignores PEP 8 and type hints
- Misses Python 3.12+ features

**Custom agents solve this.**

## Best Agents by Use Case

### 1. Web Development

#### Django Expert
Enforces Django best practices, ORM optimization, and security.

**What it does:**
- Uses class-based views correctly
- Implements proper middleware
- Follows Django project structure
- Adds security hardening (CSRF, XSS protection)

**Install from:** [AgentDepot Django collection](https://agentdepot.dev)

#### FastAPI Pro
Modern async Python API development.

**What it does:**
- Uses proper type hints and Pydantic models
- Implements async/await correctly
- Adds proper error handling
- Includes OpenAPI documentation

### 2. Data Science & ML

#### Pandas Performance Optimizer
Writes efficient pandas code that doesn't kill your RAM.

**What it does:**
- Uses vectorized operations instead of loops
- Suggests appropriate dtypes
- Implements chunking for large datasets
- Avoids common anti-patterns

#### NumPy Expert
Scientific computing with proper NumPy usage.

**What it does:**
- Uses broadcasting correctly
- Suggests efficient array operations
- Implements proper indexing
- Avoids copying when slicing

#### Scikit-learn Guide
Machine learning with best practices.

**What it does:**
- Proper train/test splits
- Pipeline usage
- Hyperparameter tuning patterns
- Model evaluation metrics

### 3. Code Quality

#### PEP 8 Enforcer
Ensures your Python follows official style guidelines.

**What it does:**
- Enforces proper naming conventions
- Manages imports correctly
- Sets appropriate line lengths
- Uses f-strings over .format()

**Example rule:**
\`\`\`
Always follow PEP 8:
- snake_case for functions/variables
- PascalCase for classes
- UPPER_CASE for constants
- 4-space indentation
- Max 88 characters per line (Black standard)
\`\`\`

#### Type Hint Master
Adds proper type hints (Python 3.10+ syntax).

**What it does:**
- Uses modern type syntax (\`list[str]\` not \`List[str]\`)
- Adds return type hints
- Uses TypedDict for structured dicts
- Implements proper Optional/Union usage

\`\`\`python
# What this agent generates:
def process_users(
    users: list[dict[str, str | int]],
    active_only: bool = False
) -> list[str]:
    """Process user data and return names."""
    return [u["name"] for u in users if not active_only or u.get("active")]
\`\`\`

### 4. Testing

#### Pytest Pro
Write comprehensive tests automatically.

**What it does:**
- Creates fixtures properly
- Uses parametrize for multiple test cases
- Implements proper mocking
- Adds docstrings to tests

\`\`\`python
# AI-generated test with this agent:
import pytest
from myapp.services import UserService

@pytest.fixture
def user_service():
    """Fixture for UserService with mocked database."""
    return UserService(db=MockDatabase())

@pytest.mark.parametrize("username,expected", [
    ("john", True),
    ("", False),
    ("x" * 100, False),
])
def test_validate_username(user_service, username, expected):
    """Test username validation with various inputs."""
    assert user_service.validate(username) == expected
\`\`\`

### 5. Async Python

#### Asyncio Expert
Proper async/await patterns.

**What it does:**
- Uses asyncio correctly
- Avoids blocking the event loop
- Implements proper error handling in async code
- Uses async context managers

**Example pattern:**
\`\`\`python
async def fetch_data(session: aiohttp.ClientSession, url: str) -> dict:
    """Fetch data from URL with proper error handling."""
    try:
        async with session.get(url) as response:
            response.raise_for_status()
            return await response.json()
    except aiohttp.ClientError as e:
        logger.error(f"Failed to fetch {url}: {e}")
        raise
\`\`\`

### 6. DevOps & Automation

#### Python CLI Builder
Create professional CLI tools with argparse/Click/Typer.

**What it does:**
- Proper argument parsing
- Help text generation
- Error handling
- Progress bars for long operations

#### Docker Python Expert
Containerize Python apps correctly.

**What it does:**
- Multi-stage builds
- Proper base images (slim, alpine)
- Security best practices
- Caching optimization

\`\`\`dockerfile
# AI-generated Dockerfile with this agent:
FROM python:3.12-slim as builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

FROM python:3.12-slim
WORKDIR /app
COPY --from=builder /usr/local/lib/python3.12/site-packages /usr/local/lib/python3.12/site-packages
COPY . .
RUN useradd -m appuser && chown -R appuser:appuser /app
USER appuser
CMD ["python", "main.py"]
\`\`\`

## Installing Python Agents

### For Cursor

1. Browse [AgentDepot's Python collection](https://agentdepot.dev)
2. Copy the rule you want
3. Create \`.cursorrules\` in your project root
4. Paste the rule
5. Start coding!

### For Claude Code

\`\`\`bash
# Install MCP server for Python tools
npx @anthropic-ai/mcp install python-tools

# Configure in settings
\`\`\`

## Combining Multiple Agents

Example \`.cursorrules\` for a Django project:

\`\`\`
You are an expert Python developer specializing in Django.

Language & Style:
- Python 3.12+
- Type hints everywhere
- Follow PEP 8 (Black formatting, 88 char lines)
- Use f-strings, not .format()

Django Specifics:
- Use class-based views (not function views)
- Implement proper permissions and authentication
- Follow Django project structure
- Use Django ORM efficiently (select_related, prefetch_related)
- Add security middleware

Testing:
- Write tests with pytest-django
- Use fixtures for test data
- Test happy path and edge cases
- Aim for 80%+ coverage

Never:
- Use \`any\` type
- Skip type hints
- Write code without tests
- Ignore security (CSRF, SQL injection, XSS)
\`\`\`

## Python-Specific Tips

### Tip 1: Specify Python Version
\`\`\`
Use Python 3.12 features including:
- PEP 695 type parameter syntax
- PEP 701 f-string improvements
- Enhanced error messages
\`\`\`

### Tip 2: Mention Your Stack
\`\`\`
Tech stack:
- Django 5.0
- PostgreSQL
- Redis for caching
- Celery for async tasks
- pytest for testing
\`\`\`

### Tip 3: Define Performance Goals
\`\`\`
Optimize for:
- Database queries (minimize N+1)
- Memory usage (use generators for large datasets)
- Response time (< 200ms for API endpoints)
\`\`\`

## Common Python Pitfalls (That Agents Fix)

### ❌ Mutable Default Arguments
\`\`\`python
# Bad (AI without agents might do this)
def append_to(element, list=[]):
    list.append(element)
    return list

# Good (Python agent fixes this)
def append_to(element, list=None):
    if list is None:
        list = []
    list.append(element)
    return list
\`\`\`

### ❌ Late Binding Closures
\`\`\`python
# Bad
functions = [lambda: i for i in range(3)]

# Good (agent knows this pattern)
functions = [lambda i=i: i for i in range(3)]
\`\`\`

### ❌ Inefficient String Concatenation
\`\`\`python
# Bad
result = ""
for item in items:
    result += str(item)

# Good
result = "".join(str(item) for item in items)
\`\`\`

## Conclusion

Python AI agents transform how you code:
- ✅ Enforce best practices automatically
- ✅ Avoid common pitfalls
- ✅ Write tests alongside code
- ✅ Maintain consistent style
- ✅ Ship production-ready code faster

Start with 2-3 agents that match your current project, then explore more.

[Browse Python agents on AgentDepot →](https://agentdepot.dev)
    `
  }
];
