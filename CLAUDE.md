# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**AgentDepot** is a premium directory for AI coding agents, plugins, skills, and rules across multiple tools (Claude Code, Windsurf, Cursor, Replit, MCP). Built with Next.js 16, TypeScript, and Tailwind CSS 4, this is a fast, modern web application focused on developer experience and conversion optimization.

**Domain:** agentdepot.dev
**Status:** 98% MVP Complete, Production-Ready

## Repository Structure

This project uses a **dual-repository architecture** with both repos located in the same parent folder for easier development:

```
agentdepot/                          # Parent folder (working directory)
├── agentdepot-core/                 # THIS REPO (Private)
│   ├── src/                         # Next.js application code
│   ├── public/                      # Static assets
│   ├── CLAUDE.md                    # This file
│   ├── MASTER_PLAN.md               # Single source of truth
│   ├── CONTENT_STRATEGY.md          # Content acquisition strategy
│   └── package.json
├── agentdepot-agents/               # Public Repository
│   ├── agents/                      # Agent definition files
│   │   ├── cursor/                  # Cursor-specific agents
│   │   ├── windsurf/                # Windsurf-specific agents
│   │   ├── claude-code/             # Claude Code agents
│   │   └── mcp/                     # MCP servers
│   ├── types/                       # TypeScript type definitions
│   ├── CONTRIBUTING.md              # Community contribution guide
│   └── README.md                    # Public-facing documentation
└── knowledge-base.md                # Original market research
```

### Repository Purposes

**agentdepot-core (Private):**
- The main Next.js web application
- Proprietary business logic and marketing strategies
- Build configuration and deployment settings
- Analytics and monetization code
- All planning documents (MASTER_PLAN.md, CONTENT_STRATEGY.md)

**agentdepot-agents (Public):**
- Community-contributed agent definitions
- Open-source agent database
- Accepts pull requests from the community
- Maintains agent quality standards
- Separate from core app for security and collaboration

### Working with Both Repositories

**When to access each repo:**
- **Core app changes (UI, features, pages):** Work in `agentdepot-core/`
- **Agent data (adding/editing agents):** Work in `agentdepot-agents/`
- **Agent types/schemas:** Coordinate changes across both repos

**Coordination points:**
- Agent type definitions exist in both repos - keep them in sync
- Core app imports agent data from the public repo (or eventually via API)
- Both repos share the same parent folder for easier cross-repo development

**Benefits of this structure:**
- Claude Code can access both repositories simultaneously
- Easier to keep agent data separate from proprietary code
- Community can contribute agents without accessing core business logic
- Maintains security while enabling open collaboration

## ⚠️ CRITICAL: Master Plan Updates

**IMPORTANT:** This project uses `MASTER_PLAN.md` as the single source of truth for all strategic planning, feature tracking, and project status.

### Mandatory Workflow
Whenever you make ANY of the following changes, you MUST update `MASTER_PLAN.md`:

1. **Complete a feature or task** → Mark it as complete in the appropriate phase
2. **Add a new feature** → Add it to the roadmap with owner, timeline, and success criteria
3. **Change project status** → Update the Executive Summary section
4. **Launch or reach a milestone** → Update success metrics and current status
5. **Identify a blocker or risk** → Add to Risk Assessment section
6. **Shift priorities** → Update the Immediate Action Plan
7. **Change timeline or deadlines** → Update phase timelines
8. **Achieve metrics** → Update the Monthly Tracking Dashboard with actual numbers

### How to Update the Master Plan
1. Read the current `MASTER_PLAN.md` to understand context
2. Make your code/content changes
3. Update the relevant section(s) in `MASTER_PLAN.md`
4. Update the "Last Updated" date at the top
5. If significant changes, add to "Recent Changes" section at bottom

### Why This Matters
The Master Plan coordinates work across multiple specialized agents (engineering, marketing, SEO, content, growth). Without updates, teams work with stale information and duplicate effort.

**Think of MASTER_PLAN.md as the product manager's dashboard - keep it current.**

---

## Development Commands

### Essential Commands
```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build (must pass with zero errors before deployment)
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Testing Before Deployment
Always run `npm run build` before committing major changes. The build must complete with **zero errors** - this project maintains strict code quality standards for Netlify deployments.

## Architecture & Code Structure

### Tech Stack
- **Framework:** Next.js 16 (App Router, React 19.2)
- **Styling:** Tailwind CSS 4 with custom glassmorphism components
- **Search:** Fuse.js (client-side fuzzy search)
- **Analytics:** OpenPanel (privacy-focused, configured)
- **Email:** Resend (infrastructure ready, not yet connected)
- **Animations:** Framer Motion

### Core Repository Directory Structure

**Note:** This is the structure of the `agentdepot-core` repository (private). See "Repository Structure" section above for the full dual-repo layout.

```
agentdepot-core/
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── (main)/          # Main layout group
│   │   │   ├── page.tsx     # Homepage with search/filters
│   │   │   ├── agent/[slug]/page.tsx  # Agent detail pages
│   │   │   ├── browse/      # Redirects to homepage
│   │   │   ├── mcp/         # MCP-specific page
│   │   │   ├── submit/      # Agent submission form
│   │   │   └── jobs/        # Jobs page
│   │   ├── [tool]/          # Dynamic tool pages (cursor, windsurf, etc.)
│   │   ├── embed/[id]/      # Embeddable agent cards
│   │   ├── api/
│   │   │   └── subscribe/   # Email signup endpoint
│   │   ├── layout.tsx       # Root layout with analytics
│   │   ├── error.tsx        # Error boundary
│   │   └── not-found.tsx    # 404 page
│   ├── components/          # React components
│   │   ├── AgentCard.tsx    # Main agent display card
│   │   ├── AgentModal.tsx   # Quick-view modal
│   │   ├── SearchFilters.tsx # Search + filter UI
│   │   ├── Navbar.tsx       # Top navigation
│   │   └── ... (20+ components)
│   ├── data/
│   │   ├── agents.ts        # 115+ agent definitions (will migrate to agentdepot-agents)
│   │   └── collections.ts   # Curated agent collections
│   ├── lib/
│   │   ├── utils.ts         # Utility functions (cn, formatters)
│   │   └── analytics.ts     # OpenPanel tracking helpers
│   └── types/
│       ├── agent.ts         # Agent type definitions (sync with agentdepot-agents/types)
│       └── collection.ts    # Collection type definitions
├── public/                   # Static assets (logos, images)
├── scripts/                  # Build and utility scripts
├── CLAUDE.md                 # This file
├── MASTER_PLAN.md            # Project roadmap and status
├── CONTENT_STRATEGY.md       # Content acquisition guide
└── package.json
```

### Data Model

**Agent Type Definition** (`src/types/agent.ts`):
```typescript
interface Agent {
  id: string;                    // Unique slug
  name: string;                  // Display name
  description: string;           // Short description (cards)
  fullDescription?: string;      // Markdown (detail pages)
  tool: AgentTool;               // 'cursor' | 'windsurf' | 'claude-code' | 'replit' | 'mcp'
  type: AgentType;               // 'rule' | 'agent' | 'plugin' | 'skill' | 'template'
  category: string;              // 'coding' | 'debugging' | 'testing' | 'data' | 'web' | etc.
  tags: string[];                // Searchable tags
  author: AgentAuthor;           // Name, URL, GitHub
  installation: AgentInstallation; // Type, command, instructions
  verified: boolean;             // Quality badge
  featured?: boolean;            // Homepage featured
  trending?: boolean;            // Trending badge
  stats?: { downloads, stars };  // Social proof
  links?: { github, website, demo };
  createdAt: string;             // ISO date
  updatedAt?: string;
}
```

### Key Design Patterns

1. **Static Data, Dynamic UI**: All agents stored in `src/data/agents.ts` as TypeScript objects - no database. This enables fast builds, version control, and easy contributions.

2. **URL State Management**: All filters (search query, tool, type, sort) are synced to URL params for shareability:
   - `/?q=react&tool=cursor&type=rule&sort=popular`

3. **Client-Side Search**: Fuse.js searches across `name`, `description`, `tags`, and `author.name` with fuzzy matching.

4. **Component Composition**: Heavy use of compound components (e.g., `AgentCard` + `AgentModal` + `ShareButton`).

5. **Analytics First**: Every major user action is tracked via OpenPanel (copy, share, view, filter, search).

## Component Guidelines

### AgentCard Component
The primary UI element for displaying agents. Features:
- Glassmorphism styling with tool-specific hover glow
- Prominent "Copy Install" button (tracks `agent_copy` event)
- Click opens `AgentModal` (tracks `agent_view` event)
- Stats display (downloads/stars)
- Verified/Featured/Trending badges

### SearchFilters Component
Complex component handling:
- Search input with autocomplete (dropdown suggestions)
- Tool filter buttons (logo-based, not text)
- Type filter dropdown
- Sort dropdown (newest, popular, trending, alphabetical)
- Mobile-responsive horizontal scroll

### ShareButton Component
Tracks all share events (`agent_share`) with platform data:
- Twitter share (pre-populated tweet)
- Email share (mailto link)
- Copy link (clipboard API)
- Embed code (copyable iframe)

## Code Quality Standards

### Linting Rules
- **No unused variables or imports** - Build will fail
- **No unescaped HTML entities** - Use `&apos;` `&quot;` etc.
- **Next.js `Link` for all internal links** - Never use `<a>` for same-site
- **TypeScript strict mode** - Avoid `any`, use proper types
- **Consistent formatting** - 2-space indentation

### Common Fixes
```tsx
// ❌ Bad
<a href="/submit">Submit</a>
let unused = 'value';
<p>Don't do this</p>

// ✅ Good
<Link href="/submit">Submit</Link>
// Remove unused variables entirely
<p>Don&apos;t do this</p>
```

## Analytics Events

All events tracked via OpenPanel (`src/lib/analytics.ts`):

```typescript
track('agent_copy', { agent_id, agent_name, tool, type })
track('agent_view', { agent_id, agent_name, tool, type })
track('agent_share', { platform, agent_id, agent_name, tool })
track('agent_link_click', { type, agent_id, url })
track('email_signup', { email })
track('filter_tool_change', { tool })
track('filter_type_change', { type, tool })
track('search_query', { query })
```

## Styling System

### Tailwind Utilities
The project uses Tailwind CSS 4 with custom utilities:
- `cn()` helper for conditional classes (from `src/lib/utils.ts`)
- Dark mode by default (`className="dark"` on `<html>`)
- Custom CSS variables in `globals.css`

### Glassmorphism Pattern
```tsx
// Standard glass card
className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl"

// Interactive glass with hover
className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10
           hover:border-white/20 transition-all duration-300"
```

### Tool-Specific Colors
- Cursor: Blue (`#3b82f6`)
- Windsurf: Cyan (`#06b6d4`)
- Claude Code: Purple (`#8b5cf6`)
- Replit: Orange (`#f97316`)
- MCP: Green (`#10b981`)

Applied via:
```tsx
{tool === 'cursor' && 'hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]'}
```

## Common Development Tasks

### Adding a New Agent

**Current approach (temporary):**
1. Open `agentdepot-core/src/data/agents.ts`
2. Add new object to `agents` array following the `Agent` type
3. Ensure `id` is unique and URL-safe
4. Test with `npm run build`

**Future approach (when migration complete):**
1. Add agent definition to `agentdepot-agents/agents/[tool]/agent-name.json`
2. Follow the schema in `agentdepot-agents/types/`
3. Submit PR to the public repo
4. Core app will sync agent data automatically

### Adding a New Collection
1. Open `agentdepot-core/src/data/collections.ts`
2. Add new `Collection` object with `agentIds` array
3. Choose an icon from `lucide-react`
4. Create gradient using tool colors

### Creating a New Page
1. Create in `agentdepot-core/src/app/(main)/[name]/page.tsx` for main layout
2. Use `export const metadata: Metadata = {...}` for SEO
3. Always include proper TypeScript types
4. Test mobile responsiveness

### Modifying Search Behavior
Search config in `agentdepot-core/src/components/SearchFilters.tsx`:
```typescript
const fuse = new Fuse(agents, {
  keys: ['name', 'description', 'tags', 'author.name'],
  threshold: 0.3, // Lower = stricter matching
  minMatchCharLength: 2
});
```

### Working Across Both Repositories

**Scenario 1: Updating Agent Type Definitions**
1. Update type in `agentdepot-core/src/types/agent.ts` first
2. Copy changes to `agentdepot-agents/types/agent.ts`
3. Test builds in both repos
4. Commit to both repos (separate commits)

**Scenario 2: Migrating Agents to Public Repo**
1. Export agent from `agentdepot-core/src/data/agents.ts`
2. Create corresponding file in `agentdepot-agents/agents/[tool]/`
3. Update import path in core app
4. Test that agent displays correctly
5. Commit to both repos

**Scenario 3: Adding a New Tool Category**
1. Add tool type to both `agentdepot-core/src/types/agent.ts` and `agentdepot-agents/types/agent.ts`
2. Create folder in `agentdepot-agents/agents/[new-tool]/`
3. Update tool filters in `agentdepot-core/src/components/SearchFilters.tsx`
4. Add tool logo to `agentdepot-core/public/logos/`
5. Test across both repos

## Deployment

**Platform:** Netlify
**Build Command:** `npm run build`
**Publish Directory:** `.next`

### Pre-Deployment Checklist
1. Run `npm run build` locally - must complete with **zero errors**
2. Test responsive design (mobile, tablet, desktop)
3. Verify all internal links work
4. Check analytics events fire correctly
5. Ensure no console errors in browser

### Environment Variables
```bash
NEXT_PUBLIC_OPENPANEL_CLIENT_ID=your_client_id  # Analytics
RESEND_API_KEY=your_key                          # Email (optional)
```

## Performance Considerations

- **Static Generation**: All pages pre-rendered at build time
- **No Runtime Database**: All data bundled in build
- **Client-Side Search**: Fast for <500 agents, consider Algolia at scale
- **Image Optimization**: Use Next.js `Image` component for logos
- **Code Splitting**: Next.js automatic, no manual intervention needed

## Future Development Notes

### High Priority (from MASTER_PLAN.md)
1. **LAUNCH** - Execute launch within 72 hours (Product Hunt, Hacker News, Reddit)
2. **CLI Tool** - `npx agentdepot search "react"` (Month 2 priority)
3. **VS Code Extension** - Searchable agent directory in editor (Month 2 priority)
4. **Email Service Connection** - Currently infrastructure ready, needs Resend API key

**See MASTER_PLAN.md for complete roadmap, timelines, and success metrics.**

### Architecture Decisions
- **Why no database?** Static data = faster builds, easier contributions via Git, free hosting
- **Why Fuse.js?** Good enough for 100-500 agents, no backend needed
- **Why OpenPanel?** Privacy-focused, GDPR compliant, no cookie banner required
- **Why Next.js 16?** Latest features (React 19, improved caching, Turbopack)

## Marketing & Distribution

This project is designed for viral growth through multiple channels:
- **Website** (primary)
- **CLI Tool** (planned - highest growth lever)
- **VS Code Extension** (planned)
- **Embed Widgets** (implemented - `/embed/[id]`)
- **Social Sharing** (Twitter, email, links)

**See `MASTER_PLAN.md` for complete marketing roadmap and execution strategy.**

## Troubleshooting

### Build Fails
- Check for unescaped HTML entities (`'` → `&apos;`)
- Remove unused imports/variables
- Verify all `Link` components have proper `href`

### Search Not Working
- Verify Fuse.js threshold (lower = stricter)
- Check agent data has searchable fields populated
- Ensure URL params sync correctly

### Analytics Not Tracking
- Verify `NEXT_PUBLIC_OPENPANEL_CLIENT_ID` is set
- Check browser console for errors
- Ensure `track()` calls have correct event names

## Contributing

When adding features:
1. Follow existing patterns (check similar components first)
2. Maintain TypeScript strict mode compliance
3. Add analytics tracking for new user actions
4. Test mobile responsiveness
5. **Update MASTER_PLAN.md with completed tasks and status changes** ⚠️
6. Update this CLAUDE.md if architecture changes

**Remember:** MASTER_PLAN.md is the single source of truth. Always update it when completing tasks, changing status, or shifting priorities.

## Contact & Support

For questions about this codebase, refer to:

**Core Repository (agentdepot-core):**
- **`MASTER_PLAN.md`** - **PRIMARY: Single source of truth for all planning, status, and priorities**
- **`CONTENT_STRATEGY.md`** - **CRITICAL: How to acquire real agents (current blocker)**
- `CLAUDE.md` (this file) - Technical architecture and development guide
- `agentstack-knowledge-base.md` - Historical: Original market research (archived)
- `TASKS.md` - Archived: Superseded by MASTER_PLAN.md
- `MARKETING_PLAN.md` - Archived: Integrated into MASTER_PLAN.md

**Public Repository (agentdepot-agents):**
- `README.md` - Public-facing documentation and setup instructions
- `CONTRIBUTING.md` - Guidelines for community contributions
- `types/` - TypeScript definitions (must sync with core)

**Parent Folder:**
- `knowledge-base.md` - Original market research and project genesis

**Priority Order:**
1. **CONTENT_STRATEGY.md** (core) - Start here if working on content acquisition
2. **MASTER_PLAN.md** (core) - Overall roadmap and status
3. **CLAUDE.md** (core) - Technical implementation details
4. **CONTRIBUTING.md** (agents) - Community contribution workflow
