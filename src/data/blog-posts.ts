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
  }
];
