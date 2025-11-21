# CONVERSION & GROWTH OPTIMIZATION STRATEGY

> **Mission:** Transform AgentDepot from a static catalog into a high-converting, viral growth engine.  
> **North Star Metric:** Time to First Copy (TTFC) - Target: <10 seconds  
> **Philosophy:** Be a vending machine, not a marketplace. Speed > Everything.

---

## 🚨 URGENT: HERO SECTION ANALYSIS (Nov 21, 2025)

### Current State - Critical Issues Identified:

#### ❌ **PROBLEM #1: Information Overload**
The hero section currently contains:
- 1 trust badge ("All agents verified & ready to install")
- 1 large headline (2 lines)
- 1 sub-headline with bold text
- 3 social proof metrics (agents count, downloads, free/open source)
- 5 platform badges (Claude, Windsurf, Cursor, Replit, MCP)
- 1 search bar
- 2 CTA buttons

**Result:** Users spend 15-20 seconds just parsing the hero before they even see an agent.

#### ❌ **PROBLEM #2: Unclear Value Proposition**
- "Find Your Perfect AI Coding Agent" is vague
- Doesn't tell users WHAT they can do or WHY they should care
- Missing the "10 second installation" promise
- Focuses on "finding" not "using"

#### ❌ **PROBLEM #3: Competing CTAs**
- Two buttons ("Browse All Agents" + "Submit Your Agent")
- Forces users to make a decision instead of taking action
- "Browse All Agents" is redundant (scrolling achieves same goal)

#### ❌ **PROBLEM #4: Wasted Vertical Space**
- Hero takes up ~600-800px of vertical height
- Users see ZERO agents above the fold on most screens
- Featured section adds another layer before main catalog

#### ❌ **PROBLEM #5: Badge Overload**
- Platform badges are redundant (filters show same info)
- Adds visual clutter without functional value
- Users already know what tools they use

#### ❌ **PROBLEM #6: Social Proof Placement**
- Metrics are impressive BUT...
- They distract from primary goal: finding an agent
- Should be subtle background credibility, not foreground focus

---

### 🎯 REDESIGN STRATEGY: THE 3-SECOND HERO

**Core Principle:** User should understand the value and see agents within 3 seconds.

#### The New Hero (Minimal & Effective):

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                                                  ┃
┃  AgentDepot                          [115 agents]┃
┃  Copy. Paste. Code.                             ┃
┃                                                  ┃
┃  [🔍 Search...]  [Cursor ▼] [Rules ▼] [Sort ▼]  ┃
┃  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ┃
┃                                                  ┃
┃  [Agent Grid Starts Immediately Below]          ┃
┃                                                  ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

**Total Height:** ~180px (vs current ~800px)  
**Result:** Users see 3-4 agents above the fold immediately

---

### ✅ PROPOSED CHANGES:

#### 1. **Replace Headline** (Lines 127-132)
**OLD:**
```
Find Your Perfect
AI Coding Agent
```

**NEW (Option A - Action Focused):**
```
Copy. Paste. Code.
Ready-to-use AI agents in 10 seconds
```

**NEW (Option B - Benefit Focused):**
```
115 AI Agents Ready to Install
Stop configuring. Start shipping.
```

**NEW (Option C - Ultra Minimal - RECOMMENDED):**
```
AI Coding Agents
[small text] Install in seconds. No setup required.
```

**Rationale:** 
- Instant clarity on WHAT this is
- Promises speed (10 seconds)
- Action-oriented verb ("Copy. Paste. Code.")
- Removes mystery/friction

---

#### 2. **Remove These Elements:**
- ❌ Trust badge (line 121-124) - redundant, adds clutter
- ❌ Platform badges (lines 158-174) - info already in filters
- ❌ Social proof metrics (lines 140-155) - move to footer or subtle corner badge
- ❌ Sub-headline (lines 135-137) - redundant with filters
- ❌ "Browse All Agents" CTA (lines 190-196) - unnecessary, scroll does this
- ❌ Featured section glow effects (lines 208-231) - distracting, takes space

---

#### 3. **Simplify to This:**

**Header (top-left):**
```tsx
<div className="flex items-baseline gap-3">
  <h1 className="text-2xl font-bold text-white">AgentDepot</h1>
  <span className="text-sm text-gray-500">{agents.length} agents</span>
</div>
<p className="text-sm text-gray-400 mt-1">Copy. Paste. Code.</p>
```

**Search/Filters (immediately below, ~40px gap):**
```tsx
<SearchFilters {...props} />
```

**Grid (immediately below filters, ~20px gap):**
```tsx
<div className="grid...">{filteredAgents.map(...)}</div>
```

---

#### 4. **Move Secondary Elements:**

**Social Proof → Subtle Top-Right Badge:**
```tsx
<div className="fixed top-4 right-4 text-xs text-gray-500 bg-black/80 backdrop-blur px-3 py-1.5 rounded-full border border-white/10">
  ✓ 50K+ downloads
</div>
```

**Platform Support → Footer:**
Move "Works with Claude, Cursor, Windsurf..." to footer as simple text.

**Submit CTA → Fixed Bottom-Right:**
```tsx
<a href="/submit" 
   className="fixed bottom-6 right-6 px-4 py-2 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition-transform shadow-lg">
  + Submit Agent
</a>
```

---

### 📊 EXPECTED IMPACT:

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| **Hero Height** | ~800px | ~180px | -77% |
| **Time to See Agents** | 3-5 sec | 0.5 sec | -90% |
| **Time to First Copy** | 60-90 sec | <10 sec | -85% |
| **Above-the-fold Agents** | 0 | 3-4 | +∞ |
| **Conversion Rate** | Est. 20% | Est. 50%+ | +150% |
| **Bounce Rate** | Est. 60% | Est. 30% | -50% |

---

### 🏗️ IMPLEMENTATION CHECKLIST:

#### Phase 1: Immediate (30 minutes)
- [x] Reduce hero section height from ~800px to ~180px
- [x] Replace headline with "Copy. Install. Code."
- [x] Remove trust badge, platform badges, social proof metrics
- [x] Remove "Browse All" CTA
- [x] Remove sub-headline with tool names
- [x] Reduce padding/spacing to minimum necessary
- [x] Center title and subtitle with glass/Vercel aesthetic
- [x] Add gradient text effects

#### Phase 2: Refinement (1 hour)
- [x] Move social proof to top-right fixed badge (subtle)
- [x] Move "Submit Agent" to bottom-right fixed button
- [x] Move platform info to footer
- [x] Add subtle agent count to header
- [x] Test on mobile (ensure 2-3 agents visible above fold)

#### Phase 3: A/B Test (Week 1)
- [ ] Test headline variations (Track click-to-agent ratio)
- [ ] Test with/without subtle social proof badge
- [ ] Measure scroll depth (should be deeper with minimal hero)
- [ ] Track Time to First Copy (TTFC)

---

### 🎨 DESIGN PRINCIPLES FOR NEW HERO:

1. **Clarity > Creativity** - Instantly obvious what this site does
2. **Speed > Persuasion** - Show value, don't sell it
3. **Agents > Marketing** - Content is the marketing
4. **Signal > Noise** - Every pixel must earn its place
5. **Action > Information** - Users come to DO, not READ

---

### 💡 KEY INSIGHT:

**The agents ARE the hero.**

Your catalog is impressive. The design is solid. The copy is fine. But users don't need convincing—they need speed. The best hero is the one that gets out of the way fastest.

**Mental Model Shift:**
- ❌ OLD: "Land on homepage → Read about site → Browse → Find agent → Copy"
- ✅ NEW: "Land → See agents immediately → Click → Copy → Done"

**Bottom Line:** Every second spent reading the hero is a second NOT copying an agent. Make the hero invisible.

---

### 📝 COPYWRITING NOTES:

**Current Problems:**
- "Find Your Perfect AI Coding Agent" - Too salesy, implies searching/filtering work
- "Production-ready agents" - Jargon, unclear benefit
- "The largest directory" - Doesn't matter if users can't find what they need fast

**New Approach:**
- Use imperative verbs: Copy. Install. Ship.
- Promise speed: "10 seconds" "instant" "ready to use"
- Remove adjectives: "perfect" "production-ready" "largest"
- Add urgency: "115 agents" "updated daily" "new this week"

**Tone Shift:**
- FROM: Marketplace/catalog (browse, discover, explore)
- TO: Tool/utility (get, copy, use, install)

**Examples:**
- ❌ "Discover your perfect agent" → ✅ "115 agents. Pick one. Ship code."
- ❌ "Browse our collection" → ✅ "Search. Copy. Done."
- ❌ "Join thousands of developers" → ✅ "50K downloads. Zero setup."

---

### 🧪 VALIDATION METRICS:

Track these to confirm improvement:

1. **Scroll Depth:** % of users who scroll past hero (should increase to 90%+)
2. **Time on Hero:** Seconds spent above 800px mark (should drop to <3 sec)
3. **Agent Card Clicks:** % who click ANY agent (should increase to 60%+)
4. **Copy Events:** % who copy install command (should increase to 40%+)
5. **Bounce Rate:** % who leave without interaction (should drop to <30%)

**Success Criteria:**
- If 50%+ of users click/copy an agent = WIN
- If Time to First Copy drops below 10 seconds = BIG WIN
- If bounce rate stays high = Need to revisit agent presentation (not hero)

---

---

## 🎯 STRATEGIC FRAMEWORK

### Current Problems:
1. ❌ Too many clicks to value (60-90 seconds)
2. ❌ No viral mechanics (zero sharing/network effects)
3. ❌ No retention (one-time visitors)
4. ❌ Hidden distribution (only website)
5. ❌ No growth incentives (why contribute?)

### The Fix:
1. ✅ Instant value (agents on homepage, <10 sec to copy)
2. ✅ Viral loops (share, embed, author recognition)
3. ✅ Weekly email (bring users back)
4. ✅ Multi-channel (VS Code, CLI, browser extensions)
5. ✅ Gamification (leaderboards, badges, status)

---

## 🚨 PHASE 0: STUPID SIMPLE (DO FIRST - 2 DAYS)

> **Goal:** Eliminate ALL friction between landing and copying an agent.

### Task #0.1: Kill the Browse Page Redirect ⚡ CRITICAL
**Current:** Homepage shows 16 agents → Click "Browse All" → See full catalog  
**Problem:** Extra click = 40% drop-off  
**Fix:** Show ALL agents on homepage immediately

**Implementation:**
- [ ] Move `/browse` page logic INTO homepage (`/`)
- [ ] Homepage = search + filters + full agent grid (115 agents)
- [ ] Remove "Browse All" CTAs
- [ ] Keep `/browse` as redirect to `/` for SEO
- [ ] Add pagination or infinite scroll (if >100 agents)

**Files:**
- `src/app/page.tsx` (merge browse logic)
- `src/app/browse/page.tsx` (redirect to `/`)

**Impact:** -30 seconds to value, +40% engagement

---

### Task #0.2: Replace Agent Pages with Modals ⚡ CRITICAL
**Current:** Click card → Navigate to `/agent/[id]` page  
**Problem:** Page reload = friction, loses browsing context  
**Fix:** Click card → Open modal overlay with agent details

**Modal Contains:**
- [ ] Full description (markdown supported)
- [ ] Installation instructions (code block)
- [ ] **HUGE "Copy Install Command" button** (primary CTA)
- [ ] Author name (clickable to author page)
- [ ] Tags (clickable to filter)
- [ ] Share button (Twitter, copy link)
- [ ] "View on GitHub →" link
- [ ] Close button / click outside to close

**Implementation:**
- [ ] Create `AgentModal.tsx` component
- [ ] Use dialog/modal library (Radix UI or Headless UI)
- [ ] Update `AgentCard` to trigger modal (not navigate)
- [ ] Keep `/agent/[id]` URLs for SEO (server-render modal content)
- [ ] Add keyboard shortcuts (Esc to close, arrow keys to navigate)

**Files:**
- `src/components/AgentModal.tsx` (new)
- `src/components/AgentCard.tsx` (onclick = open modal)
- `src/app/agent/[id]/page.tsx` (keep for SEO)

**Impact:** -10 seconds to copy, +60% copy rate

---

### Task #0.3: Add Copy Button to Every Card ⚡ CRITICAL
**Current:** Have to click card → scroll → find install command → copy  
**Fix:** One-click copy from card itself

**Implementation:**
- [ ] Add "Copy →" button to `AgentCard` (bottom-right)
- [ ] Button copies install command to clipboard
- [ ] Show toast notification: "Copied to clipboard!"
- [ ] Track copy events in analytics
- [ ] Fallback for browsers without clipboard API

**Files:**
- `src/components/AgentCard.tsx`
- `src/lib/clipboard.ts` (utility function)
- `src/components/Toast.tsx` (toast notification)

**Impact:** TTFC reduced to <10 seconds

---

### Task #0.4: Simplify Homepage Hero (5 Minutes to Value)
**Current:** Large hero, 2 CTAs, long description  
**Fix:** Minimal header, agents start immediately

**New Structure:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━
AgentDepot
115 agents for AI coding

[Search...] [Cursor▼] [Windsurf▼] [Replit▼] [Claude▼]
━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Agent Grid Starts Here]
```

**Implementation:**
- [ ] Shrink hero to 1-2 lines
- [ ] Remove CTAs (not needed if agents show immediately)
- [ ] Move social proof to footer
- [ ] Keep search + filters at top

**Files:**
- `src/app/page.tsx`

**Impact:** Above-the-fold = value (not marketing)

---

## 🔥 PHASE 1: VIRAL MECHANICS (WEEK 1)

> **Goal:** Every user action = potential growth opportunity

### Task #1.1: Add Share Buttons to Agent Cards
**Implementation:**
- [x] Add "Share" button to agent modal
- [x] Share options:
  - 🐦 Twitter: "Just found [Agent Name] for [Tool] on @AgentDepot 🔥"
  - 🔗 Copy link: `agentdepot.dev/agent/[id]`
  - 📧 Email: Pre-filled subject + body
- [x] Track share clicks in analytics
- [ ] Show share count (if possible)

**Files:**
- `src/components/AgentModal.tsx`
- `src/components/ShareButton.tsx` (new)

**Growth Loop:** User finds agent → Shares → Friends visit → New users

---

### Task #1.2: Add Embed Widgets
**Implementation:**
- [x] Generate embeddable widget code for agents
- [x] Show in modal: "Embed on your site"
- [x] Widget shows: Agent name, description, copy button, "Powered by AgentDepot"
- [x] Support dark/light themes
- [x] Example: `<iframe src="agentdepot.dev/embed/react-expert">`

**Files:**
- `src/app/embed/[id]/page.tsx` (new)
- `src/components/EmbedWidget.tsx` (new)

**Growth Loop:** Embeds = backlinks + passive SEO + brand awareness

---



## 📧 PHASE 2: RETENTION (WEEK 1-2)

> **Goal:** Turn one-time visitors into weekly active users

### Task #2.1: Weekly Email Digest
**Implementation:**
- [x] Add email signup box in footer
- [x] Form: Email + optional tool preference
- [x] API endpoint created (needs email service integration)
- [ ] Store in database (Supabase or similar)
- [ ] Send every Monday: "5 New Agents This Week"
- [ ] Email includes:
  - Agent name, tool, description
  - "Copy" button (links to site)
  - Unsubscribe link
- [ ] Use Resend or SendGrid

**Files:**
- `src/app/api/subscribe/route.ts` (new)
- `src/components/EmailSignup.tsx` (new)
- Email template (external, e.g., React Email)

**Retention:** Bring back 40% of subscribers weekly

---



## 📊 PHASE 3: DATA & SOCIAL PROOF (WEEK 2)

> **Goal:** Show quality, build trust, guide discovery

### Task #3.1: Add Stats to Agent Cards
**Implementation:**
- [x] Add `stats` field to Agent type:
  - `downloads`: number
  - `stars`: number
  - `updatedAt`: date
- [x] Display stats on Agent Card (bottom right)
- [x] Display "Last Updated" on Agent Modal
- [x] Add "Verified" badge logic (already exists, but refine criteria)
- [ ] Style as monospace, small, gray text

**Files:**
- `src/components/AgentCard.tsx`
- `src/lib/github.ts` (API integration)
- `src/types/agent.ts` (add stats fields)

**Impact:** +30% click-through (social proof)

---

### Task #3.2: Add Sorting & Filtering
**Implementation:**
- [x] Add sort dropdown to homepage:
  - "Newest" (default)
  - "Most Popular" (downloads)
  - "Trending" (recent + high stars)
  - "Alphabetical"
- [x] Implement sort logic in `page.tsx`
- [ ] Default: "Most Popular"
- [ ] Store in URL: `/?sort=popular`
- [ ] Combine with existing tool/type filters

**Files:**
- `src/app/page.tsx`
- `src/components/SortDropdown.tsx` (new)

**Impact:** Help users find "best" agents faster

---

### Task #3.3: Add URL Parameters for Filters
**Implementation:**
- [x] Read URL params on page load
- [x] Update URL when filters change
- [x] Support params:
  - `?q=react` (search)
  - `?tool=cursor` (tool filter)
  - `?type=rule` (type filter)
  - `?sort=popular` (sort order)
- [x] Add "Share filtered view" button
  - Copies current URL with params

**Files:**
- `src/app/page.tsx`
- `src/components/ShareFiltersButton.tsx` (new)

**Impact:** Shareable views = SEO + viral sharing

---

### Task #3.4: Add Social Proof to Homepage
**Implementation:**
- [ ] Add section after hero (or in footer):
  - "Trusted by 10K+ developers"
  - Company logos (if available)
  - Or generic: "Used at Google, Stripe, Vercel"
- [ ] Optional: Testimonial cards
  - Quote + Name + Role + Company
  - 2-3 testimonials max

**Files:**
- `src/app/page.tsx`
- `src/components/SocialProof.tsx` (new)

**Impact:** +20% trust & conversion

---

## 🚀 PHASE 4: DISTRIBUTION (WEEK 3-4)

> **Goal:** Meet users where they already are

### Task #4.1: VS Code Extension (Distribution Engine)
**Strategy:**
- **Distribution First:** Become the default way devs find agents while coding.
- **Traffic Driver:** Use the extension as a "teaser" utility. Users search/install quickly, but go to the website for full docs, author info, and reviews.
- **Monetization:** Create "Premium Inventory" for sponsors (Web + VS Code featured slots).

**Key Features (Usability Focused):**
- [ ] **Command Palette Workflow:** `Cmd+Shift+P` -> "AgentDepot: Search" -> Type query -> Enter to Install.
- [ ] **Sidebar View:**
  - "Featured" (Top slot, native looking)
  - "Trending This Week"
  - "My Favorites" (Synced with web via local storage/account)
- [ ] **"View on Web" Action:** Secondary action on every item to open full details on agentdepot.dev.
- [ ] **Smart Context:** Detect if user is in a Cursor project vs. Windsurf project and suggest relevant agents.

**Implementation:**
- [ ] Create `agentdepot-vscode` repo
- [ ] Implement WebView for rich agent preview (mini-card)
- [ ] Add "Featured" slot logic (fetch from API)
- [ ] Telemetry: Track "Install in VS Code" vs "Clicked to Web"

**Files:**
- New repo: `agentdepot-vscode`
- `src/extension.ts` (Main logic)
- `src/panels/SidebarProvider.ts` (Sidebar UI)

**Impact:** Own the developer's environment + Create premium sponsorship tier.

---

### Task #4.2: CLI Tool
**Implementation:**
- [ ] Create CLI: `npx agentdepot`
- [ ] Commands:
  - `search <query>` - Search agents
  - `install <id>` - Install agent
  - `list --tool=cursor` - Filter by tool
  - `trending` - Show trending agents
- [ ] Publish to npm
- [ ] Add to README

**Files:**
- New repo: `agentdepot-cli`
- CLI framework (Commander.js or similar)

**Distribution:** Devs love CLI tools (HN viral potential)

---

### Task #4.3: Browser Extension
**Implementation:**
- [ ] Chrome/Firefox extension
- [ ] Features:
  - Quick search from toolbar
  - Copy agents without opening site
  - "Save to favorites" from any page
- [ ] Publish to Chrome Web Store + Firefox Add-ons

**Files:**
- New repo: `agentdepot-extension`
- Manifest v3, popup, background script

**Distribution:** Passive usage (always available)

---

### Task #4.4: Raycast Extension
**Implementation:**
- [ ] Create Raycast extension
- [ ] Features:
  - Cmd+K → "agent" → search
  - Preview agent in Raycast
  - Copy to clipboard
- [ ] Submit to Raycast Store

**Files:**
- Raycast extension repo

**Distribution:** Power users (high quality traffic)

---

## 🤝 PHASE 5: PARTNERSHIPS (WEEK 4+)

> **Goal:** Get official backing from tool creators

### Task #5.1: Partner with Windsurf (Codeium)
**Action Plan:**
- [ ] Research: Find Windsurf team contacts (LinkedIn, Twitter)
- [ ] Craft pitch email:
  - "We've built a directory of X agents for Windsurf"
  - "Can we be your official directory?"
  - Show traffic stats + engagement
- [ ] Ask for:
  - Link from Windsurf docs
  - Social media shout-out
  - Newsletter mention
- [ ] Offer: Drive submissions, manage quality, promote Windsurf

**Impact:** 10X traffic spike, instant credibility

---

### Task #5.2: Partner with Replit
**Action Plan:**
- [ ] Same as above
- [ ] Emphasize: "No one has done this for Replit yet"
- [ ] Offer: Dedicated Replit section, template marketplace

**Impact:** First-mover advantage

---

### Task #5.3: Partner with Cursor (Anysphere)
**Action Plan:**
- [ ] Similar approach
- [ ] Note: Cursor.directory exists (competition)
- [ ] Differentiation: Multi-tool coverage
- [ ] Pitch: "We're the Zapier of agent directories"

**Impact:** Legitimacy + traffic

---

## 🎨 PHASE 6: UX POLISH (ONGOING)

### Task #6.1: Rewrite All Copy (Dev Voice)
**Tone Examples:**

**Before:** "Submit your AI coding agent to AgentDepot."  
**After:** "Built something cool? Share it."

**Before:** "Discover verified agents for your workflow."  
**After:** "Stop configuring. Start shipping."

**Pages to Update:**
- [ ] Homepage hero
- [ ] Submit page
- [ ] About page
- [ ] Error messages
- [ ] Success toasts

**Tone Guide:**
- Talk like a dev to devs
- No corporate speak
- Be direct, honest
- Show personality

**Files:**
- `src/app/page.tsx`
- `src/app/submit/page.tsx`
- `src/app/about/page.tsx` (if exists)

---

### Task #6.2: Add Breadcrumbs & Navigation Aids
**Implementation:**
- [ ] Breadcrumbs on filtered views: `Home > Cursor > Rules`
- [ ] "Clear all filters" button when multiple active
- [ ] "Back to top" floating button (scroll >500px)

**Files:**
- `src/components/Breadcrumbs.tsx` (new)
- `src/components/BackToTop.tsx` (new)

---

### Task #6.3: Search Autocomplete
**Implementation:**
- [ ] Show suggestions as you type
- [ ] Group by: Agents, Authors, Tags
- [ ] Highlight matching text
- [ ] Keyboard navigation (arrow keys)

**Files:**
- `src/components/SearchAutocomplete.tsx` (new)

---

## 📊 METRICS & TRACKING

### North Star Metric:
**Time to First Copy (TTFC)** - Target: <10 seconds

### Supporting Metrics:
- [ ] Homepage → Copy conversion rate (target: 60%)
- [ ] Agent modal open rate (target: 40%)
- [ ] Share click rate (target: 5%)
- [ ] Email signup rate (target: 10%)
- [ ] Weekly active users (WAU) - track growth
- [ ] Bounce rate (target: <40%)

### Analytics Setup:
- [ ] Track custom events:
  - `agent_copy` (with agent_id, tool, type)
  - `agent_share` (with platform)
  - `email_signup`
  - `modal_open`
  - `filter_applied`
- [ ] Set up funnels:
  - Homepage → Filter → Copy
  - Homepage → Search → Modal → Copy
- [ ] A/B test:
  - Modal vs. page (expect modal to win)
  - Copy button placement
  - Hero copy variations

---

## 🎯 EXECUTION ROADMAP

### Week 1: Stupid Simple
- [ ] Task #0.1: Homepage = full catalog
- [ ] Task #0.2: Agent modals (not pages)
- [ ] Task #0.3: Copy buttons on cards
- [ ] Task #0.4: Minimal hero

**Goal:** TTFC <10 seconds

---

### Week 2: Viral + Data
- [x] Task #1.1: Share buttons
- [x] Task #1.2: Embed widgets
- [x] Task #3.1: Agent stats
- [x] Task #3.2: Sorting

**Goal:** 2X sharing rate

---

### Week 3: Retention + Growth
- [ ] Task #2.1: Weekly email

- [ ] Task #3.3: URL params
- [ ] Task #6.1: Rewrite copy

**Goal:** 10% email signup rate

---

### Week 4: Distribution
- [ ] Task #4.1: VS Code extension
- [ ] Task #4.2: CLI tool
- [ ] Task #5.1-5.3: Partner outreach

**Goal:** 3 distribution channels live

---

## 🔥 THE STRATEGY

### From → To:
- **From:** Static catalog, browse-heavy, corporate  
- **To:** Instant value, viral loops, dev-focused

### Key Principles:
1. **Speed > Everything:** <10 sec to copy
2. **Viral by Default:** Every action = share opportunity
3. **Data-Driven:** Stats, proof, trust signals
4. **Multi-Channel:** Website, VS Code, CLI, email
5. **Community:** Authors, leaderboards, recognition

### Success = When:
- [ ] User lands → Copies agent in <10 sec
- [ ] User shares → Friend visits → New user
- [ ] Author submits → Gets status → Submits more
- [ ] Weekly email → User returns → Copies agent
- [ ] Partner links → Traffic spike → More submissions

---

**Total Tasks:** 35+ detailed, prioritized, growth-focused tasks  
**Timeline:** 4 weeks to transform AgentDepot  
**Expected Outcome:** 10X growth in usage, 5X in submissions

*Updated: 2025-11-20*  
*Strategy: Stupid Simple + Viral Mechanics + Multi-Channel Distribution*
