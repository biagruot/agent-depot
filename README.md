# AgentDepot

**The only premium directory covering every AI coding tool in one place.**

🌐 **Live Site:** [agentdepot.dev](https://agentdepot.dev)
📊 **Status:** Pre-Launch (Product Ready, Marketing Pending)
🎯 **Mission:** Help developers discover, compare, and install the best AI coding agents

---

## What is AgentDepot?

AgentDepot is a curated directory of 115+ verified AI coding agents, plugins, skills, and rules across multiple tools:

- 🟣 **Claude Code** - Agents and skills
- 🔵 **Windsurf** - Rules and MCP servers
- 🟢 **Cursor** - Rules and workflows
- 🟠 **Replit** - Templates and extensions
- 💚 **MCP** - Model Context Protocol servers

### Why AgentDepot?

✅ **Multi-Tool Coverage** - Only directory covering all major AI coding tools
✅ **100% Verified** - Every agent manually tested and verified
✅ **Premium UX** - Glassmorphism design, smooth animations, mobile-optimized
✅ **Smart Search** - Fuzzy search with autocomplete across all agents
✅ **Curated Collections** - Hand-picked bundles for different workflows

---

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file:

```bash
# ===========================================
# Required: Authentication (Supabase)
# ===========================================
# Get from: https://supabase.com/dashboard/project/_/settings/api
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# ===========================================
# Required: Analytics (OpenPanel)
# ===========================================
# Get from: https://openpanel.dev/dashboard
NEXT_PUBLIC_OPENPANEL_CLIENT_ID=your_client_id

# ===========================================
# Required: Newsletter Service (Resend)
# ===========================================
# Get from: https://resend.com/api-keys
RESEND_API_KEY=re_your_api_key

# Get from: https://resend.com/audiences
RESEND_AUDIENCE_ID=your-audience-id

# Optional: Custom "from" email (must be verified in Resend)
# Default uses Resend sandbox: "AgentDepot <onboarding@resend.dev>"
# RESEND_FROM_EMAIL=AgentDepot <hello@agentdepot.dev>
```

#### Setting up Resend for Newsletter

1. **Create account** at [resend.com](https://resend.com)
2. **Generate API key** at [resend.com/api-keys](https://resend.com/api-keys)
3. **Create Audience** at [resend.com/audiences](https://resend.com/audiences)
   - Name: "AgentDepot Newsletter"
   - Copy the Audience ID
4. **(Production)** Verify your domain at [resend.com/domains](https://resend.com/domains)
   - Required for custom "from" addresses

---

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19.2)
- **Styling:** Tailwind CSS 4 with custom glassmorphism
- **Search:** Fuse.js (client-side fuzzy search)
- **Analytics:** OpenPanel (privacy-focused)
- **Animations:** Framer Motion
- **Deployment:** Netlify

---

## Project Documentation

### For Developers
📄 **[CLAUDE.md](./CLAUDE.md)** - Technical architecture, code patterns, development guidelines

### For Product/Strategy
📊 **[MASTER_PLAN.md](./MASTER_PLAN.md)** - **START HERE** - Complete roadmap, status, metrics, and execution plan

---

## Project Structure

```
agent-depot/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   ├── data/            # Agent and collection data (115+ agents)
│   ├── lib/             # Utility functions
│   └── types/           # TypeScript type definitions
├── public/              # Static assets
├── CLAUDE.md            # Technical documentation
├── MASTER_PLAN.md       # Strategic roadmap (single source of truth)
└── README.md            # This file
```

---

## Key Features

### For Users
- 🔍 **Advanced Search** - Find agents by name, description, tags, or author
- 🎯 **Smart Filters** - Filter by tool, type, category, or sort by popularity
- 📋 **Quick Copy** - One-click copy of install commands
- 📤 **Share** - Share agents via Twitter, email, link, or embed code
- 📱 **Mobile-First** - Fully responsive design
- 🔔 **Email Updates** - Subscribe to weekly new agent roundups

### For Developers
- ✅ **100% TypeScript** - Full type safety
- 🎨 **Tailwind CSS 4** - Utility-first styling
- 📊 **Analytics Built-in** - OpenPanel tracking for all key events
- 🚀 **Static Generation** - Lightning-fast page loads
- 🔧 **Zero Config** - Deploy to Netlify with one click

---

## Contributing

### Adding an Agent

1. Open `src/data/agents.ts`
2. Add your agent following the `Agent` type definition
3. Ensure all required fields are filled
4. Test locally with `npm run dev`
5. Submit a pull request

### Adding a Collection

1. Open `src/data/collections.ts`
2. Add your collection with `agentIds` array
3. Choose an icon from `lucide-react`
4. Create a gradient using tool colors

### Code Guidelines

- Follow TypeScript strict mode
- No unused variables or imports
- Use Next.js `Link` for internal navigation
- Add analytics tracking for new user actions
- Test mobile responsiveness
- **Always update MASTER_PLAN.md when completing tasks** ⚠️

---

## Deployment

### Netlify (Recommended)

1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Add environment variables
5. Deploy!

### Vercel (Alternative)

```bash
npm install -g vercel
vercel --prod
```

---

## Current Status

**Product:** ✅ 98% Complete, Production-Ready
**Launch:** ❌ Not launched yet (coming soon!)
**Agents:** 115+ verified across 5 tools
**Collections:** 8 curated bundles

**See [MASTER_PLAN.md](./MASTER_PLAN.md) for complete roadmap and launch timeline.**

---

## Roadmap

### Phase 1: Launch (Week 1)
- Product Hunt submission
- Hacker News launch
- Reddit marketing
- Target: 1,000 visitors, 100 signups

### Phase 2: Growth (Month 1)
- SEO content strategy
- Partnership outreach
- Newsletter launch
- Target: 10,000 monthly visitors

### Phase 3: Distribution (Month 2)
- CLI tool (`npx agentdepot`)
- VS Code extension
- Browser extension
- Target: 25,000 monthly visitors

### Phase 4: Monetization (Month 3)
- Sponsored listings
- Affiliate programs
- Premium features
- Target: $500+ monthly revenue

**Full details in [MASTER_PLAN.md](./MASTER_PLAN.md)**

---

## Analytics & Metrics

We track 8 key user events:
- `agent_copy` - Install command copied
- `agent_view` - Agent detail viewed
- `agent_share` - Agent shared
- `agent_link_click` - External link clicked
- `email_signup` - Newsletter subscription
- `filter_tool_change` - Tool filter selected
- `filter_type_change` - Type filter selected
- `search_query` - Search performed

All analytics are privacy-focused (OpenPanel, GDPR compliant).

---

## License

[Add your license here - MIT recommended for open source]

---

## Support

- 🐛 **Bug Reports:** [GitHub Issues]
- 💡 **Feature Requests:** [GitHub Issues]
- 📧 **Contact:** hello@agentdepot.dev

---

## Acknowledgments

Built with inspiration from:
- **cursor.directory** - Proof that simple directories can reach 250K users
- **Anthropic's decentralized approach** - Community marketplaces over centralized control
- The amazing AI coding community

---

**Ready to launch? See [MASTER_PLAN.md](./MASTER_PLAN.md) for the complete execution strategy.**

Built with ❤️ for the AI coding community
