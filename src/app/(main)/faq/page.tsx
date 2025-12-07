import { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Coding Agents FAQ - Frequently Asked Questions",
  description: "Get answers to common questions about AI coding agents for Cursor, Windsurf, Claude Code, Replit, and MCP servers. Learn how to install, use, and create custom agents.",
  keywords: [
    "AI coding agents FAQ",
    "how to install cursor rules",
    "what is windsurf cascade",
    "claude code plugins guide",
    "cursor vs windsurf comparison",
    "MCP servers explained",
    "AI coding assistant tutorial",
    "custom cursor rules",
    "best AI agents for developers",
    "free AI coding tools",
    "replit templates guide",
    "AI agent installation",
  ],
  openGraph: {
    title: "AI Coding Agents FAQ - Everything You Need to Know",
    description: "Complete guide to AI coding agents, rules, and plugins for Cursor, Windsurf, Claude Code, Replit, and MCP.",
    type: "website",
  },
};

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Getting Started",
    question: "What are AI coding agents?",
    answer: "AI coding agents are intelligent tools that assist developers by automating tasks, generating code, debugging, and providing contextual suggestions. They work within popular development environments like Cursor, Windsurf, Claude Code, and Replit. Think of them as specialized AI assistants that understand your codebase and help you write better code faster. AgentDepot curates over 120 verified agents across all major platforms, making it easy to discover and install the right tools for your workflow.",
  },
  {
    category: "Getting Started",
    question: "How do I install Cursor rules?",
    answer: "Installing Cursor rules is straightforward. First, browse Cursor agents on AgentDepot and click 'Copy Install' on any rule you want. Then, open Cursor and navigate to Settings > Rules > Add Rule. Paste the copied rule content and save. Most Cursor rules are simple text files that configure how the AI assistant behaves. For advanced rules that require npm packages, you'll need to run the installation command in your terminal first. Check out our Cursor collection for the most popular rules like React Best Practices, TypeScript Strict Mode, and Tailwind Optimizer.",
  },
  {
    category: "Getting Started",
    question: "What is Windsurf Cascade and how does it work?",
    answer: "Windsurf Cascade is an AI-powered flow mode that enables multi-step coding workflows with context awareness. Unlike traditional AI assistants that handle one prompt at a time, Cascade remembers your entire conversation history and can execute complex, multi-file changes autonomously. It's particularly powerful for refactoring, feature implementation, and debugging across multiple files. To use Cascade effectively, install Windsurf-specific agents from AgentDepot that are optimized for this workflow, such as the Full-Stack Cascade Agent or the Refactoring Master. Cascade works best when you provide clear, structured instructions about what you want to achieve.",
  },
  {
    category: "Getting Started",
    question: "Are all agents on AgentDepot free to use?",
    answer: "Yes! All agents listed on AgentDepot are completely free and open-source. We believe in democratizing access to AI coding tools. Our directory includes 120+ free agents, rules, plugins, and templates from the community. While the agents themselves are free, some may require you to have a subscription to the underlying platform (like Cursor Pro, Windsurf, or Claude). We clearly mark which platform each agent is designed for, so you can filter and find agents that work with your current setup. Premium or paid agents are always disclosed upfront.",
  },
  {
    category: "Platform Comparison",
    question: "What is the difference between Cursor and Windsurf?",
    answer: "Cursor and Windsurf are both AI-powered code editors, but they differ in approach. Cursor is a fork of VS Code focused on inline AI suggestions, chat-based assistance, and tab completion. It excels at quick code generation and has a simpler learning curve. Windsurf, on the other hand, introduces Cascade mode for complex multi-step workflows and deeper context awareness across your entire codebase. Windsurf is better for large refactoring tasks and architectural changes, while Cursor shines for rapid prototyping and everyday coding. On AgentDepot, you'll find specialized agents for both - browse our Cursor and Windsurf collections to see which ecosystem has the tools you need.",
  },
  {
    category: "Platform Comparison",
    question: "How does Claude Code compare to Cursor and Windsurf?",
    answer: "Claude Code is Anthropic's official CLI tool powered by Claude AI models (Opus, Sonnet). Unlike Cursor and Windsurf which are full IDEs, Claude Code works via terminal commands and integrates into any editor. It's particularly strong at understanding large codebases, following complex instructions, and maintaining context across long conversations. Claude Code plugins extend its capabilities with custom tools, data sources, and automations. Use Claude Code if you prefer terminal-based workflows, need maximum control over AI interactions, or want to use the latest Claude models directly. AgentDepot features Claude Code plugins for tasks like database queries, API testing, and code reviews.",
  },
  {
    category: "Installation & Setup",
    question: "How do I install Claude Code plugins?",
    answer: "Claude Code plugins are typically installed via npm or added as configuration files. First, ensure you have Claude Code installed globally with 'npm install -g claude-code' (or your platform's equivalent). Then, browse Claude Code plugins on AgentDepot and click 'Copy Install'. Most plugins provide an npm command like 'npx claude-code install plugin-name' or instructions to add a configuration file to your project. After installation, restart Claude Code or reload your configuration. Popular plugins include the Database Query Plugin, API Testing Suite, and Code Review Assistant. Check each plugin's documentation for specific setup steps.",
  },
  {
    category: "Installation & Setup",
    question: "What are MCP servers and how do I use them?",
    answer: "MCP (Model Context Protocol) servers are standardized context providers that extend AI capabilities across tools. They allow you to connect external data sources, APIs, and services to your AI coding assistant. For example, an MCP server might provide access to your company's internal documentation, a specific API, or a database schema. To use MCP servers, you'll need a compatible tool like Claude Desktop or Claude Code. Install the MCP server (usually via npm or Docker), configure it in your AI tool's settings, and the AI will automatically have access to that context. AgentDepot's MCP collection includes servers for GitHub, PostgreSQL, Jira, and more.",
  },
  {
    category: "Installation & Setup",
    question: "Can I use multiple agents at the same time?",
    answer: "Yes! Most platforms support running multiple agents simultaneously. In Cursor, you can enable multiple rules that work together. In Windsurf, agents can chain in Cascade mode. For Claude Code, you can load multiple plugins in your configuration file. However, be mindful of conflicts - some agents may have overlapping purposes or contradictory instructions. We recommend starting with 2-3 agents that complement each other (e.g., a TypeScript linter + React best practices + API documentation generator) and gradually adding more. AgentDepot's collections are curated to group compatible agents that work well together.",
  },
  {
    category: "Creating & Contributing",
    question: "How do I create custom Cursor rules?",
    answer: "Creating custom Cursor rules is simple - they're just text files with instructions. Start by identifying a repetitive pattern or coding standard you want to enforce. Write clear, specific instructions like 'Always use TypeScript strict mode' or 'Follow Airbnb React style guide'. Save this as a .cursorrules file in your project root, or add it via Cursor Settings > Rules. Test the rule by asking Cursor to generate code and verify it follows your instructions. For inspiration, check out popular Cursor rules on AgentDepot and adapt them to your needs. Advanced rules can reference external documentation, specify linting preferences, or enforce architectural patterns.",
  },
  {
    category: "Creating & Contributing",
    question: "How can I contribute my agent to AgentDepot?",
    answer: "We love community contributions! To submit your agent, visit our Submit page and fill out the form with your agent's name, description, installation instructions, and GitHub link. Alternatively, open a GitHub issue or email us at submit@agentdepot.dev. Your agent should be relevant to AI coding (Cursor, Windsurf, Claude Code, Replit, or MCP), have clear installation instructions, and include a public repository. We review submissions within 48 hours and provide feedback if anything needs adjustment. All accepted agents are featured in our directory and promoted to our community of 10,000+ developers.",
  },
  {
    category: "Creating & Contributing",
    question: "What makes an agent 'verified' on AgentDepot?",
    answer: "Verified agents have been manually reviewed by our team for quality, security, and usefulness. To earn a verified badge, an agent must: (1) have a public GitHub repository with clear documentation, (2) include working installation instructions that we've tested, (3) have no malicious code or obfuscated scripts, (4) solve a real developer problem, and (5) maintain reasonable code quality standards. We also check that the agent has positive community feedback or notable usage. Verified status is not permanent - we re-review agents when they're updated to ensure continued quality. Look for the verified checkmark when browsing agents on AgentDepot.",
  },
  {
    category: "Use Cases & Best Practices",
    question: "What are the best AI coding agents for beginners?",
    answer: "If you're new to AI coding agents, start with simple, focused tools. For Cursor, try the 'React Component Generator' or 'API Route Builder' - they handle common tasks without overwhelming configuration. For Windsurf beginners, the 'Full-Stack Starter' agent provides helpful guidance for CRUD operations. Claude Code users should start with the 'Code Explanation' plugin to understand existing codebases. For Replit, browse our template collection for 'Next.js Starter' or 'Python Flask Boilerplate'. The key is starting with agents that match your tech stack and have clear, specific use cases. Avoid complex multi-agent setups until you're comfortable with individual tools.",
  },
  {
    category: "Use Cases & Best Practices",
    question: "Which AI agents are best for debugging?",
    answer: "Debugging-focused agents analyze errors, suggest fixes, and trace issues across your codebase. Top picks from AgentDepot include: Cursor's 'Stack Trace Analyzer' which interprets error messages and suggests solutions, Windsurf's 'Bug Hunter Cascade' for multi-file debugging sessions, and Claude Code's 'Error Debugger Plugin' which provides step-by-step troubleshooting. For frontend debugging, try the 'React DevTools Agent' which explains component re-renders and state issues. Backend developers should check out the 'API Error Tracer' for debugging REST and GraphQL endpoints. Combine debugging agents with testing agents for comprehensive error detection.",
  },
  {
    category: "Use Cases & Best Practices",
    question: "Can AI agents help with code reviews?",
    answer: "Absolutely! Code review agents are among the most popular on AgentDepot. They automatically check for bugs, security vulnerabilities, performance issues, and style violations. Cursor's 'Code Review Assistant' provides inline suggestions during development. Windsurf's 'PR Reviewer' generates comprehensive feedback on pull requests. Claude Code's 'Security Scanner' plugin flags common vulnerabilities like SQL injection or XSS risks. For best results, configure your code review agent with your team's coding standards and run it before submitting PRs. These agents don't replace human review but catch common issues faster, letting reviewers focus on architecture and logic.",
  },
  {
    category: "Use Cases & Best Practices",
    question: "What are the best Replit templates for beginners?",
    answer: "Replit templates provide pre-configured environments for learning and building projects. AgentDepot's top beginner templates include: 'Next.js 14 Starter' with TypeScript and Tailwind CSS already configured, 'Python Flask API' with SQLite database setup, 'React Todo App' as a learning project, and 'Node.js Express Server' with authentication boilerplate. Each template includes commented code, README instructions, and example implementations. Templates are ideal if you want to start coding immediately without setup headaches. Browse our Replit collection by project type (web app, API, game, etc.) to find templates matching your learning goals.",
  },
  {
    category: "Technical Questions",
    question: "Do AI coding agents work offline?",
    answer: "Most AI coding agents require internet connectivity because they rely on cloud-based AI models (GPT-4, Claude, etc.). However, some components work offline: Cursor's tab completion can cache suggestions, certain linting rules don't need AI, and MCP servers hosting local data work without internet. If you need offline capabilities, look for agents that use local models (like Code Llama) or rule-based systems that don't require API calls. AgentDepot tags agents that support offline functionality. For sensitive codebases, consider self-hosted solutions or agents that run entirely within your infrastructure.",
  },
  {
    category: "Technical Questions",
    question: "How do I update installed agents?",
    answer: "Update methods vary by platform. For Cursor rules, simply replace the old rule text with updated content from AgentDepot. Windsurf agents update automatically if installed via their marketplace. Claude Code plugins update through npm with 'npm update plugin-name'. MCP servers typically update via their installation method (npm, Docker, etc.). We recommend checking AgentDepot monthly for updates to your installed agents - we display update dates and changelog links when available. Enable notifications on your favorite agents to get alerts when new versions are released. Most updates are backward compatible, but review changelogs for breaking changes.",
  },
  {
    category: "Technical Questions",
    question: "Are AI agents compatible with all programming languages?",
    answer: "AI agents have varying language support. General-purpose agents (like Cursor's 'Code Explainer' or Windsurf's 'Full-Stack Assistant') work with most mainstream languages: JavaScript, Python, TypeScript, Go, Rust, Java, etc. Specialized agents target specific ecosystems - React agents work with JSX/TSX, Python agents understand Django/Flask, etc. Always check an agent's description and tags on AgentDepot for supported languages. The underlying AI models (GPT-4, Claude) generally understand 50+ programming languages, but agent quality varies. Popular languages like JavaScript and Python have the most agent options, while niche languages may have fewer specialized tools.",
  },
  {
    category: "Technical Questions",
    question: "How can I measure the ROI of using AI coding agents?",
    answer: "Track productivity gains by measuring: (1) Time saved on repetitive tasks - if an agent automates boilerplate generation that used to take 30 minutes, that's measurable savings. (2) Bug reduction - compare pre/post-agent bug rates in your issue tracker. (3) Code quality metrics - check test coverage, linting pass rates, and code review cycles before and after adoption. (4) Developer satisfaction - survey your team about reduced context switching and cognitive load. Many teams report 20-40% productivity gains on specific tasks. Start with high-friction areas (API documentation, test writing, debugging) where agents have proven impact. AgentDepot's verified agents include user testimonials with real-world results.",
  },
];

// Group FAQs by category
const groupedFAQs = faqs.reduce((acc, faq) => {
  if (!acc[faq.category]) {
    acc[faq.category] = [];
  }
  acc[faq.category].push(faq);
  return acc;
}, {} as Record<string, FAQItem[]>);

export default function FAQPage() {
  // Generate JSON-LD structured data for SEO
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen pb-20">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      {/* Hero Section */}
      <section className="pt-8 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 space-y-6">
            {/* Ambient Glow Background */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-30 pointer-events-none blur-[100px]">
              <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-500/40 rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-500/40 rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
            </div>

            {/* Main Title */}
            <div className="space-y-3 relative z-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-br from-white via-white to-gray-400 bg-clip-text text-transparent leading-tight">
                AI Coding Agents FAQ
              </h1>

              <p className="text-lg md:text-xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto">
                Everything you need to know about AI agents for Cursor, Windsurf, Claude Code, Replit, and MCP.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-gray-500 pt-4">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
                  <span className="text-blue-400">📚</span>
                  <span>20 Questions Answered</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
                  <span className="text-green-400">✓</span>
                  <span>Updated Weekly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quick Navigation */}
        <div className="mb-12 p-6 glass-panel rounded-2xl border border-white/10">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Navigation</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {Object.keys(groupedFAQs).map((category) => (
              <a
                key={category}
                href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <ChevronDown className="w-4 h-4 -rotate-90 text-blue-400 group-hover:translate-x-1 transition-transform" />
                {category} ({groupedFAQs[category].length})
              </a>
            ))}
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-16">
          {Object.entries(groupedFAQs).map(([category, questions]) => (
            <section key={category} id={category.toLowerCase().replace(/\s+/g, '-')}>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                {category}
              </h2>

              <div className="space-y-6">
                {questions.map((faq, index) => (
                  <div
                    key={index}
                    className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-start gap-3">
                      <span className="text-blue-400 flex-shrink-0 text-xl">Q:</span>
                      <span>{faq.question}</span>
                    </h3>
                    <div className="pl-8 text-gray-400 leading-relaxed">
                      <span className="text-purple-400 font-semibold">A: </span>
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-20 p-8 glass-panel rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/5 to-purple-500/5 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Browse our full directory of 120+ AI coding agents or submit your question.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform shadow-lg"
            >
              Browse All Agents
            </Link>
            <Link
              href="/submit"
              className="px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20"
            >
              Submit an Agent
            </Link>
          </div>
        </div>

        {/* Related Resources */}
        <div className="mt-12 p-6 glass-panel rounded-2xl border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Related Resources</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/cursor"
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 p-3 rounded-lg hover:bg-white/5"
            >
              <span className="text-blue-400">→</span>
              Cursor Agents Collection
            </Link>
            <Link
              href="/windsurf"
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 p-3 rounded-lg hover:bg-white/5"
            >
              <span className="text-cyan-400">→</span>
              Windsurf Agents Collection
            </Link>
            <Link
              href="/claude-code"
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 p-3 rounded-lg hover:bg-white/5"
            >
              <span className="text-purple-400">→</span>
              Claude Code Plugins
            </Link>
            <Link
              href="/mcp"
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 p-3 rounded-lg hover:bg-white/5"
            >
              <span className="text-green-400">→</span>
              MCP Servers Guide
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
