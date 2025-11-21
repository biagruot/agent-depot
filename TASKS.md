# AgentDepot - Master Task List
**Single Source of Truth for all project tasks**

*Last Updated: 2025-11-21*

---

## 📊 **PROJECT STATUS**

**Domain:** `agentdepot.dev`  
**Current Phase:** Post-Hero Redesign → Conversion Optimization  
**Progress:** MVP Complete (~95%) | Conversion Features (~30%)

### Quick Stats
- ✅ **Completed:** 13 major features
- 🚧 **In Progress:** 1 feature (Email service integration)
- 📋 **Backlog:** 20+ features
- 🎯 **Next Priority:** Email integration → Search autocomplete → Social proof

---

## ✅ **COMPLETED FEATURES**

### Phase 0: Core Product (MVP)
- [x] Next.js app with Tailwind CSS
- [x] Glass/Vercel-inspired UI design
- [x] 115+ curated agents across 5 tools
- [x] Agent cards with spotlight effects
- [x] Agent detail pages with markdown support
- [x] Tool-specific filter pages (`/claude`, `/cursor`, etc.)
- [x] Search functionality (Fuse.js)
- [x] Responsive mobile design
- [x] Legal pages (Privacy, Terms)
- [x] SEO foundation (meta tags, sitemap, robots.txt, JSON-LD)

### Phase 0: Conversion Optimization (Recently Completed)
- [x] **Hero Section Redesign**
  - Centered title and subtitle
  - Gradient text effects
  - Glass morphism aesthetic
  - Reduced from ~800px to compact layout
- [x] **Agent Modals** (quick view without page reload)
- [x] **Copy Buttons on Cards** (one-click install command copy)
- [x] **Browse page redirect** (homepage shows all agents)
- [x] **Social proof badge** (top-right corner)
- [x] **Submit CTA** (bottom-right fixed button)

### Phase 1: Viral Mechanics
- [x] **Share Buttons** (Twitter, copy link)
- [x] **Embed Widgets** (`/embed/[id]` for embeddable agent cards)

### Phase 2: Retention
- [x] **Email Signup Form** (in footer)
- [x] **Email API endpoint** (`/api/subscribe` - needs service integration)

### Phase 3: Data & Social Proof
- [x] **Agent Stats** (downloads, stars display)
- [x] **Sort Dropdown** (newest, popular, trending, alphabetical)
- [x] **URL Parameters** (all filters in URL: `?q=`, `?tool=`, `?type=`, `?sort=`)
- [x] **Share Filters Button** (copy current filtered view)
- [x] **Search Autocomplete** (suggestions for agents, authors, tags + keyboard nav)
- [ ] **Social Proof Section** (Removed per user request)
- [x] **Copy Rewrite** (Dev voice: "Ship It", "Weekly Drop", etc.)
- [x] **Submit Page UI Polish** (Glassmorphism, premium inputs, better cards)
- [x] **Mobile UI Optimization** (Responsive hero text, hidden Cmd+K on mobile)
- [x] **Mobile Filter & Layout Fixes** (Horizontal scroll filters, fixed badge overlap)
- [x] **Mobile Sort Alignment & Dropdown Fix** (Justified layout, custom dropdown, header text wrap fix)
- [x] **Navbar Download Counter & GitHub Icon** (Always visible, responsive text)
- [x] **Premium GitHub Star Button** (Pill design, hover effects, trust signal)
- [x] **Navbar Simplification** (Removed Submit button)

---

## 🚧 **IN PROGRESS**

### Task #2.1: Email Service Integration
**Status:** 80% Complete  
**What's done:** UI + API endpoint created  
**What's needed:**
- [ ] Choose email service (Resend recommended, or SendGrid/Mailchimp)
- [ ] Sign up for account
- [ ] Add API key to `.env.local`
- [ ] Update `/api/subscribe/route.ts` with actual integration
- [ ] Test subscription flow
- [ ] Set up welcome email template
- [ ] Plan weekly digest content

**Files:**
- `src/components/EmailSignup.tsx` ✅
- `src/app/api/subscribe/route.ts` ⏳ Needs service connection

**Priority:** HIGH (completes retention loop)

---

## 📋 **HIGH PRIORITY BACKLOG**

### 1. Analytics Event Tracking
**Impact:** High - Data-driven decisions  
**Effort:** 2 hours

**Events to track:**
- [ ] `agent_copy` (agent_id, tool, type)
- [ ] `agent_share` (platform: twitter/link)
- [ ] `email_signup`
- [ ] `modal_open` (agent_id)
- [ ] `filter_applied` (filter type + value)
- [ ] `search_query` (query string)

**Setup:**
- [ ] Choose analytics (Vercel Analytics, PostHog, or Plausible)
- [ ] Add tracking calls to components
- [ ] Set up dashboard
- [ ] Track North Star Metric: **Time to First Copy (TTFC)**

---

### 3. Copy Rewrite - Dev Voice (Task #6.1)
**Impact:** Medium - Better messaging  
**Effort:** 1 hour

**Tone Guide:**
- Talk like a dev to devs
- No corporate speak
- Be direct, honest
- Show personality

**Examples:**
- ❌ "Submit your AI coding agent to AgentDepot"  
- ✅ "Built something cool? Share it."

**Pages to update:**
- [ ] `/submit` page
- [ ] Error messages
- [ ] Success toasts
- [ ] About page (if exists)

---

### 4. Default Sort to "Popular" (Task #3.2)
**Impact:** Low - Better first impression  
**Effort:** 5 minutes

**Change:**
- Current default: "Newest"
- New default: "Most Popular" (by downloads)

**File:**
- `src/app/(main)/page.tsx` (line 22)

---

### 5. Analytics Event Tracking
**Impact:** High - Data-driven decisions  
**Effort:** 2 hours

**Events to track:**
- [ ] `agent_copy` (agent_id, tool, type)
- [ ] `agent_share` (platform: twitter/link)
- [ ] `email_signup`
- [ ] `modal_open` (agent_id)
- [ ] `filter_applied` (filter type + value)
- [ ] `search_query` (query string)

**Setup:**
- [ ] Choose analytics (Vercel Analytics, PostHog, or Plausible)
- [ ] Add tracking calls to components
- [ ] Set up dashboard
- [ ] Track North Star Metric: **Time to First Copy (TTFC)**

---

## 🎯 **MEDIUM PRIORITY**

### 6. Navigation Improvements
- [ ] Add breadcrumbs for filtered views: `Home > Cursor > Rules`
- [ ] "Clear all filters" button when multiple active
- [ ] "Back to top" floating button (appears after scrolling)

### 7. Search Enhancements
- [ ] "No results" state with suggestions
- [ ] Recent searches (localStorage)
- [ ] Search performance optimization for 100+ agents

### 8. Agent Collections Expansion
Current: 6 collections  
Target: 10 collections

**New collections to create:**
- [ ] "AI Starter Pack" (beginner-friendly)
- [ ] "Data Science Toolkit"
- [ ] "Testing & QA Masters"
- [ ] "DevOps Automation"

### 9. Performance Optimization
- [ ] Run Lighthouse audit (target: >90)
- [ ] Optimize images (WebP, lazy loading)
- [ ] Code splitting for agent pages
- [ ] Minimize bundle size

### 10. Error Pages
- [ ] Custom 404 page
- [ ] Custom 500 page
- [ ] Error boundary for React errors

---

## 🚀 **GROWTH & DISTRIBUTION (High Impact, Long Term)**

### Task #4.1: VS Code Extension
**Impact:** HUGE - Own the developer's environment  
**Effort:** 1-2 days

**Features:**
- [ ] Command Palette: `Cmd+Shift+P` → "AgentDepot: Search"
- [ ] Sidebar view with featured/trending agents
- [ ] One-click install from VS Code
- [ ] "View on Web" action to open full details
- [ ] Smart context detection (Cursor vs Windsurf project)

**Distribution:**
- Publish to VS Code Marketplace
- Will drive passive traffic to website

---

### Task #4.2: CLI Tool
**Impact:** HIGH - HN/Twitter viral potential  
**Effort:** 1 day

**Commands:**
```bash
npx agentdepot search "react"
npx agentdepot install cursor-react-typescript
npx agentdepot list --tool=cursor
npx agentdepot trending
```

**Distribution:**
- Publish to npm
- Add to README
- Post on Hacker News

---

### Task #4.3: Browser Extension
**Impact:** MEDIUM - Passive usage  
**Effort:** 2-3 days

**Features:**
- [ ] Quick search from toolbar
- [ ] Copy agents without opening site
- [ ] "Save to favorites" from any page
- [ ] Chrome Web Store + Firefox Add-ons

---

### Task #4.4: Raycast Extension
**Impact:** MEDIUM - Power users  
**Effort:** 1-2 days

**Features:**
- [ ] Cmd+K → "agent" → search
- [ ] Preview agent in Raycast
- [ ] Copy to clipboard
- [ ] Submit to Raycast Store

---

## 🤝 **PARTNERSHIPS (High Impact)**

### Task #5.1: Partner with Windsurf (Codeium)
- [ ] Research team contacts (LinkedIn, Twitter)
- [ ] Craft pitch email
- [ ] Ask for: Link from docs, social shout-out, newsletter mention
- [ ] Offer: Drive submissions, quality management, promote Windsurf

**Impact:** 10X traffic spike, instant credibility

### Task #5.2: Partner with Cursor (Anysphere)
- [ ] Similar approach
- [ ] Note: cursor.directory exists (competition)
- [ ] Differentiation: Multi-tool coverage
- [ ] Pitch: "We're the Zapier of agent directories"

### Task #5.3: Partner with Replit
- [ ] Emphasize: No one has done this for Replit yet
- [ ] First-mover advantage
- [ ] Offer: Dedicated Replit section

---

## 💡 **NICE-TO-HAVE FEATURES**

### Community Features
- [ ] Author pages (`/author/[username]`)
- [ ] Leaderboard (`/leaderboard`)
- [ ] Author badges (Top Contributor, Verified, Trending)
- [ ] Save to favorites (localStorage)
- [ ] "My Favorites" page
- [ ] Export favorites (JSON, markdown, CSV)

### Content & Retention
- [ ] RSS feed (`/rss.xml`)
- [ ] Browser push notifications (opt-in)
- [ ] Blog system (`/blog`)
- [ ] Newsletter automated sequences
- [ ] Video demos for top agents

### Advanced Features
- [ ] User authentication (NextAuth.js)
- [ ] Upvote/downvote system
- [ ] Comment system (Giscus)
- [ ] "Agents you might like" recommendations
- [ ] AI-powered semantic search
- [ ] Public API with documentation

---

## 📅 **TIMELINE & ROADMAP**

### This Week (Nov 21-27)
**Focus:** Complete high-impact conversion features

- [ ] Connect email service (30 min) - HIGH PRIORITY
- [ ] Add search autocomplete (2 hrs)
- [ ] Add social proof section (1 hr)
- [ ] Rewrite copy in dev voice (1 hr)
- [ ] Set up analytics tracking (2 hrs)

**Goal:** Ready for next marketing push

---

### Next 2 Weeks (Nov 28 - Dec 11)
**Focus:** Distribution channels

- [ ] Build CLI tool (1 day)
- [ ] Start VS Code extension (2 days)
- [ ] Partner outreach (ongoing)
- [ ] Content marketing (blog posts)

**Goal:** 3 distribution channels live

---

### Month 2-3 (Dec - Jan)
**Focus:** Community & retention

- [ ] Launch weekly email digest
- [ ] Add author pages
- [ ] Build favorites system
- [ ] Create more collections
- [ ] Blog content strategy

**Goal:** 10% email signup rate, 40% weekly retention

---

### Month 6+ (Feb onwards)
**Focus:** Monetization & scale

- [ ] Premium tier (ad-free, advanced features)
- [ ] Sponsored listings
- [ ] Affiliate programs
- [ ] Analytics dashboard for creators

**Goal:** $2K-6K MRR

---

## 🎯 **SUCCESS METRICS**

### North Star Metric
**Time to First Copy (TTFC)** - Target: <10 seconds ✅ ACHIEVED

### Current Metrics to Track
- Homepage → Copy conversion rate (target: 60%)
- Agent modal open rate (target: 40%)
- Share click rate (target: 5%)
- Email signup rate (target: 10%)
- Bounce rate (target: <40%)

### Growth Targets

**Month 1:**
- 5,000 total visitors
- 500 email subscribers
- 115+ agents in directory

**Month 6:**
- 10,000 monthly visitors
- 200+ agents
- 5+ tools covered
- First revenue ($500+)

**Year 1:**
- 50,000 monthly visitors
- $2,000-6,000 MRR
- Top 3 in Google for "AI coding agents directory"

---

## 🔧 **TECHNICAL DEBT**

### Code Quality
- [ ] Add unit tests (Vitest/Jest)
- [ ] Add E2E tests (Playwright)
- [ ] Test search functionality
- [ ] Test filtering
- [ ] Test submission form

### Documentation
- [ ] Update README with setup instructions
- [ ] Add code comments
- [ ] Create CONTRIBUTING.md
- [ ] API documentation (when API is built)

### GitHub
- [ ] Make repo public (if private)
- [ ] Add LICENSE (MIT recommended)
- [ ] Set up GitHub Actions for CI/CD
- [ ] Create issue templates

---

## 📝 **NOTES**

### Design Principles
1. **Speed > Everything** - <10 sec to copy
2. **Viral by Default** - Every action = share opportunity
3. **Data-Driven** - Stats, proof, trust signals
4. **Multi-Channel** - Website, VS Code, CLI, email
5. **Community** - Authors, leaderboards, recognition

### Success = When:
- User lands → Copies agent in <10 sec ✅
- User shares → Friend visits → New user
- Author submits → Gets status → Submits more
- Weekly email → User returns → Copies agent
- Partner links → Traffic spike → More submissions

---

## 🚨 **BLOCKERS & RISKS**

### Current Blockers
- ❌ Email service not connected (blocks retention strategy)
- ⚠️ No analytics tracking (can't measure success)
- ⚠️ No distribution channels yet (only website traffic)

### Mitigations
- **Email:** Use Resend (easiest integration)
- **Analytics:** Use Vercel Analytics (built-in)
- **Distribution:** Start with CLI (fastest to build)

---

## **NEXT 3 ACTIONS**

1. **Connect email service to /api/subscribe** (30 min) ⚡
2. **Add search autocomplete** (2 hours) ⚡
3. **Set up analytics tracking** (2 hours) ⚡

---

*This is the single source of truth for all AgentDepot tasks.*  
*Update this file as tasks are completed or priorities change.*
