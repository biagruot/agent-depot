import { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description: "Get answers to common questions about Cursor Rules, Windsurf Cascade, Claude Plugins & Skills, Replit Templates, and MCP Servers. Learn how to install and create custom AI tools.",
  keywords: [
    "AI coding agents FAQ",
    "Cursor Rules",
    ".cursorrules",
    "Windsurf Cascade",
    "Claude Plugins",
    "Claude Skills",
    "Replit Templates",
    "MCP Servers",
    "AI coding tools",
    "AgentDepot FAQ",
  ],
  openGraph: {
    title: "FAQ - Frequently Asked Questions",
    description: "Complete guide to Cursor Rules, Claude Plugins, Replit Templates, and MCP Servers.",
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
    question: "What are AI coding agents, rules, and plugins?",
    answer: "While 'AI Agent' is the general term, each platform uses specific tools. **Cursor** uses 'Rules' (defined in .cursorrules files) to guide the AI. **Claude** utilizes 'Plugins' and 'Skills' to extend capabilities. **Windsurf** relies on 'Flows' and 'Cascade' context. **Replit** offers 'Templates' for quickstarts, and **MCP** (Model Context Protocol) connects 'Servers' to provide data tools. AgentDepot curates over 120 verified resources across all these platforms.",
  },
  {
    category: "Getting Started",
    question: "How do I install Cursor Rules (.cursorrules)?",
    answer: "Cursor Rules are text-based instructions that customize your AI interactions. Browse our Cursor collection, find a rule you like (e.g., 'React Best Practices'), and click 'Copy Install'. Then, in Cursor, go to Settings > Rules > Add Rule (or create a `.cursorrules` file in your root directory) and paste the content. These rules are essentially prompt instructions that guide the AI's behavior within your project context.",
  },
  {
    category: "Getting Started",
    question: "What is Windsurf Cascade?",
    answer: "Windsurf Cascade is an AI flow state that maintains context across your entire project. Unlike standard chat, Cascade understands your file structure and can perform complex, multi-step refactoring. You can install Windsurf-specific flows or prompts from AgentDepot to optimize Cascade for tasks like debugging or feature implementation.",
  },
  {
    category: "Getting Started",
    question: "Are the resources on AgentDepot free?",
    answer: "Yes, most content on AgentDepot—including Cursor Rules, Replit Templates, and MCP Servers—is free and open-source. However, using the underlying AI models (like GPT-4 or Claude 3.5) within these tools usually requires a subscription to the respective platform (Cursor Pro, Windsurf, or Claude Pro). We clearly indicate if a specific tool requires a paid API key or subscription.",
  },
  {
    category: "Platform Comparison",
    question: "Cursor Rules vs. standard AI chat: What's the difference?",
    answer: "Standard AI chat gives generic answers. Cursor Rules inject specific context and guidelines into every interaction. For example, a 'Next.js Rule' ensures the AI only suggests App Router code, preventing outdated Page Router suggestions. This makes Cursor significantly more accurate for your specific codebase.",
  },
  {
    category: "Platform Comparison",
    question: "What are Claude Plugins and Skills?",
    answer: "Claude Plugins (often used with Claude Code CLI) and Skills allow the AI to perform actions beyond text generation, like running terminal commands, querying databases, or managing files. They turn Claude from a chatbot into a capable coding assistant. AgentDepot lists popular plugins for testing, database management, and code review.",
  },
  {
    category: "Platform Comparison",
    question: "What are MCP Servers?",
    answer: "The Model Context Protocol (MCP) connects AI assistants to your data. An 'MCP Server' is a bridge that lets tools like Claude Desktop talk to external systems like GitHub, Slack, or PostgreSQL. Installing an MCP Server gives your AI direct access to those resources.",
  },
  {
    category: "Installation & Setup",
    question: "How do I install a Replit Template?",
    answer: "Replit Templates are full development environments. On AgentDepot, find a template (e.g., 'Python Flask Starter') and click the link to open it in Replit. You can then 'Fork' the template to create your own copy with all dependencies pre-installed.",
  },
  {
    category: "Installation & Setup",
    question: "Can I use multiple Rules or Plugins at once?",
    answer: "Yes! You can combine multiple Cursor Rules (e.g., one for TypeScript and one for testing). Similarly, you can enable multiple Claude Plugins or MCP Servers. Just ensure they don't have conflicting instructions—start with a focused set and expand as needed (e.g., a linter rule and a documentation plugin).",
  },
  {
    category: "Creating & Contributing",
    question: "How do I create a custom Cursor Rule?",
    answer: "Simply create a `.cursorrules` file in the root of your project. Write detailed instructions in plain English (e.g., 'Always use a specific naming convention', 'Prefer functional components'). You can refer to examples on AgentDepot for structure and formatting tips.",
  },
  {
    category: "Creating & Contributing",
    question: "How can I share my tools on AgentDepot?",
    answer: "We welcome contributions! Whether you've written a great Cursor Rule, built a Replit Template, or developed an MCP Server, you can submit it via our 'Submit' page. We review all submissions to ensure they are safe and useful for the community. For verified status, ensure you have a public repository and clear documentation.",
  },
  {
    category: "Use Cases & Best Practices",
    question: "Best automated workflows for beginners?",
    answer: "For **Cursor**, try the 'React Expert' rule to help with frontend code. For **Replit**, grab a 'Node.js Starter' template. For **Claude**, the 'Code Explainer' plugin is great for learning. Start small—installing too many extensions at once can be overwhelming.",
  },
  {
    category: "Technical Questions",
    question: "Do these tools work offline?",
    answer: "Most AI features (Cursor's generation, Claude's answers) require internet access to reach the LLMs. However, local rules and linting configurations work offline. Some local LLMs (via tools like Ollama) can be connected to these platforms for offline use if supported. AgentDepot tags agents that support offline functionality.",
  },
  {
    category: "Technical Questions",
    question: "How do I update an MCP Server or Plugin?",
    answer: "Updates depend on the installation method. For npm-based tools, run `npm update -g <package-name>`. For Cursor Rules, you simply update the text in your `.cursorrules` file. AgentDepot lists version information so you can check if a newer version of a tool is available.",
  },
  {
    category: "Troubleshooting",
    question: "My Cursor Rule isn't working. What should I check?",
    answer: "First, verify your `.cursorrules` file is in the root directory of your project. Check for syntax errors—rules should be plain text instructions, not code. Restart Cursor after adding the rule. If issues persist, try with a simple rule first (e.g., 'Always use TypeScript') to confirm rules are being read. Make sure you're using the latest version of Cursor.",
  },
  {
    category: "Troubleshooting",
    question: "An MCP Server won't connect. How do I fix it?",
    answer: "Common fixes: 1) Verify the server is installed correctly (`npm list -g <server-name>`). 2) Check your Claude Desktop configuration file (usually at `~/Library/Application Support/Claude/` on Mac). 3) Restart Claude Desktop after configuration changes. 4) Check the server's GitHub repository for specific setup requirements. 5) Look for port conflicts if the server uses a specific port.",
  },
  {
    category: "Troubleshooting",
    question: "I can't find a specific agent. How do I search effectively?",
    answer: "Use our search bar with specific keywords (e.g., 'react typescript' instead of just 'react'). Use the tool filters (Cursor, Windsurf, etc.) to narrow results. Try the category filters (Web, Coding, Data). Check the tags on similar agents for alternative search terms. If you still can't find it, email us at hello@agentdepot.dev with details about what you're looking for.",
  },
  {
    category: "Troubleshooting",
    question: "An agent has a bug or security issue. How do I report it?",
    answer: "Email us immediately at hello@agentdepot.dev with: 1) The agent name and URL, 2) Description of the issue, 3) Steps to reproduce (if applicable), 4) Impact/severity. For security issues, we respond within 48 hours and remove problematic agents immediately. You can also report via the agent's GitHub repository if available.",
  },
  {
    category: "Submitting & Contributing",
    question: "How do I submit my agent to AgentDepot?",
    answer: "Visit our Submit page (/submit) and choose one of three methods: 1) **GitHub PR** (recommended): Fork our agentdepot-agents repository, add your agent to the appropriate file (cursor.ts, mcp.ts, etc.), and submit a PR. 2) **GitHub Issue**: Open an 'Agent Submission' issue with details. 3) **Email**: Send agent details to hello@agentdepot.dev. Include: agent name, description, tool type, installation instructions, GitHub URL (if applicable), and your contact info.",
  },
  {
    category: "Submitting & Contributing",
    question: "What are the requirements for agent approval?",
    answer: "We review all submissions within 24-48 hours. Requirements: 1) **Works correctly** - we test each agent, 2) **Clear documentation** - installation instructions must be detailed, 3) **Safe** - no malicious code or obfuscated scripts, 4) **Original or properly attributed** - respect licenses and give credit, 5) **Relevant** - must be for AI coding tools (Cursor, Windsurf, Claude, MCP, Replit). High-quality submissions with public GitHub repos are prioritized.",
  },
  {
    category: "Submitting & Contributing",
    question: "Can I update or remove my submitted agent?",
    answer: "Yes! For updates: submit a new PR to the agentdepot-agents repository or email us at hello@agentdepot.dev with the changes. For removal: email us with the agent name and reason for removal. We'll process updates within 24-48 hours. You retain all rights to your submissions.",
  },
  {
    category: "Contact & Support",
    question: "How do I contact AgentDepot support?",
    answer: "Email us at hello@agentdepot.dev for all inquiries: agent submissions, bug reports, feature requests, partnership opportunities, or general questions. We respond within 24-48 hours during business days. For urgent security issues, mark your email subject with [URGENT].",
  },
  {
    category: "Contact & Support",
    question: "Where can I report copyright infringement?",
    answer: "If you believe content on AgentDepot infringes your copyright, send a DMCA takedown notice to hello@agentdepot.dev. Include: 1) Identification of your copyrighted work, 2) URL of the infringing content, 3) Your contact information, 4) A statement that you have a good faith belief the use is unauthorized, 5) Your physical or electronic signature. We respond to valid DMCA notices within 48-72 hours.",
  },
  {
    category: "Contact & Support",
    question: "Do you have a Discord or community forum?",
    answer: "We're currently focused on building the core directory. A Discord community or forum may be launched in the future based on user demand. For now, connect with us via email (hello@agentdepot.dev) or through our GitHub repository for discussions and contributions.",
  }
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
                FAQ - Frequently Asked Questions
              </h1>

              <p className="text-lg md:text-xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto">
                Everything you need to know about Cursor Rules, Windsurf Cascade, Claude Plugins & Skills, Replit Templates, and MCP Servers.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-gray-500 pt-4">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
                  <span className="text-blue-400">📚</span>
                  <span>23 Questions Answered</span>
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
            Can&apos;t find what you&apos;re looking for? Browse our full directory of 70+ verified rules, plugins, and templates or submit your question.
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
