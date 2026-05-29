# CLAUDE.md

Guidance for Claude Code (and other contributors) working in this repository.

## Project overview

**AgentDepot** ([agentdepot.dev](https://agentdepot.dev)) is an open directory of AI coding
tools — agents, rules, plugins, skills, templates, and MCP servers — across Cursor, Windsurf,
Claude Code, Replit, and the Model Context Protocol. It is a statically-generated Next.js app
with client-side search and filtering; there is no runtime database for the catalog.

## Repository layout

This is the **web app**. The catalog data is maintained in a companion public repo,
[`agentdepot-agents`](https://github.com/biagruot/agentdepot-agents), which holds the
agent definitions and the shared `Agent` schema. Both repos are public.

- Contributors add/edit tools in `agentdepot-agents` via pull request.
- `scripts/sync-agents.sh` copies `agents/*.ts` and `types/agent.ts` from that repo into this
  app's `src/data/` and `src/types/`. Run it from the app root with both repos cloned under the
  same parent directory:

  ```bash
  ./scripts/sync-agents.sh --dry-run   # preview
  ./scripts/sync-agents.sh             # copy, then `npm run build` to verify
  ```

## Tech stack

- **Framework:** Next.js 16 (App Router, React 19.2, React Compiler)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4 (custom glassmorphism utilities, dark theme)
- **Search:** Fuse.js (client-side fuzzy search)
- **Auth:** Supabase (GitHub OAuth) — powers the optional "favorites" feature
- **Email:** Resend (newsletter signup)
- **Analytics:** OpenPanel (privacy-focused)
- **Animation:** Framer Motion
- **Hosting:** Netlify

All third-party integrations degrade gracefully when their env vars are absent, so the app
runs locally with no configuration (auth/newsletter simply become no-ops).

## Directory structure

```
src/
├── app/
│   ├── (main)/              # Main layout group
│   │   ├── page.tsx         # Homepage: search + filters
│   │   ├── agent/[slug]/    # Agent detail page
│   │   ├── blog/            # Blog index + [slug]
│   │   ├── mcp/             # MCP landing page
│   │   ├── submit/          # Submission info/form
│   │   ├── favorites/       # User's saved agents (requires auth)
│   │   └── faq, privacy, terms, cookies, browse
│   ├── [tool]/              # Per-tool pages (cursor, windsurf, ...)
│   ├── embed/[id]/          # Embeddable agent card (iframe)
│   ├── api/subscribe/       # Newsletter signup endpoint
│   ├── auth/callback/       # Supabase OAuth callback
│   ├── layout.tsx           # Root layout + analytics provider
│   ├── error.tsx, global-error.tsx, not-found.tsx
│   ├── sitemap.ts, robots.ts
├── components/              # UI components (+ auth/, providers/)
├── hooks/                   # Scroll/time/page tracking hooks
├── lib/
│   ├── analytics.ts         # OpenPanel event helpers
│   ├── resend.ts            # Resend client config
│   ├── utils.ts             # cn() and small helpers
│   └── supabase/            # Browser/server/middleware clients
├── data/                    # Catalog data (synced from agentdepot-agents) + collections, blog
├── types/                   # Agent and Collection types
└── emails/                  # React Email templates
```

## Data model

The `Agent` type lives in `src/types/agent.ts` (kept in sync with the companion repo):

```typescript
interface Agent {
  id: string;                 // unique, URL-safe slug
  name: string;
  description: string;        // short, for cards
  fullDescription?: string;   // markdown, for detail pages
  tool: 'cursor' | 'windsurf' | 'claude-code' | 'replit' | 'mcp';
  type: 'rule' | 'agent' | 'plugin' | 'skill' | 'template';
  category: 'coding' | 'debugging' | 'testing' | 'productivity' | 'data' | 'web' | 'other';
  tags: string[];
  author: { name: string; url?: string; github?: string };
  installation: { type?: ...; command?: string; instructions?: string; url?: string };
  featured?: boolean;
  trending?: boolean;
  links?: { github?: string; website?: string; demo?: string };
  license?: string;
  createdAt: string;          // YYYY-MM-DD
  updatedAt?: string;
}
```

## Key patterns

1. **Static data, dynamic UI** — the catalog is plain TypeScript modules in `src/data/`,
   bundled at build time. No catalog database; this keeps builds fast and contributions
   reviewable as code.
2. **URL as state** — search query and filters (tool/type/sort) are mirrored to URL params so
   results are shareable: `/?q=react&tool=cursor&type=rule&sort=popular`.
3. **Client-side search** — Fuse.js matches across `name`, `description`, `tags`, and
   `author.name`. Fine for the current catalog size; revisit (e.g. a hosted index) past a few
   hundred entries.
4. **Analytics at the edges** — user actions are tracked via OpenPanel
   (`useOpenPanel().track(...)`): copy, view, share, search, filter, signup.

## Styling

Dark theme by default. Glassmorphism cards use a consistent recipe; compose classes with the
`cn()` helper (`src/lib/utils.ts`):

```tsx
className={cn(
  "bg-white/5 backdrop-blur-md border border-white/10 rounded-xl",
  "hover:bg-white/10 hover:border-white/20 transition-all duration-300",
)}
```

Each tool has an accent color (Cursor blue, Windsurf cyan, Claude Code purple, Replit orange,
MCP green) used for hover glows.

## Conventions

- TypeScript strict mode; avoid `any`, prefer real types from the SDKs.
- Use `next/link` for internal navigation (never a raw `<a>` for same-site links).
- Escape HTML entities in JSX (`&apos;`, `&quot;`).
- Run `npm run lint`, `npm run typecheck`, and `npm run build` before committing.

## Common tasks

- **Add/edit a tool:** do it in the `agentdepot-agents` repo, then run `sync-agents.sh`.
- **Add a collection:** edit `src/data/collections.ts` (icon from `lucide-react`).
- **Add a blog post:** append a `BlogPost` to `src/data/blog-posts.ts` (markdown stored as a
  template-literal `content` field).
- **Add a page:** create under `src/app/(main)/<name>/page.tsx` and export `metadata` for SEO.

## Deployment

Netlify. Build command `npm run build`. The production build must pass with zero errors.
Environment variables are documented in `README.md`.
