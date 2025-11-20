# AgentDepot.directory - Project Task List

**Project:** AgentDepot (AI Coding Agent Directory)
**Current Status:** MVP Phase (Collection Shelf Implemented)
**Created:** 2025-11-20

---

## 📊 Current Progress Summary

### ✅ Completed
- [x] Domain acquired (agentstack.directory)
- [x] Email setup (support@agentstack.directory)
- [x] Next.js project initialized
- [x] Basic UI with Glass Vault aesthetic
- [x] Collection Shelf component (Holofoil cards)
- [x] Basic search and filtering
- [x] Agent card component
- [x] Initial agent data (17 agents across 4 tools)
- [x] Collection data structure (4 curated collections)
- [x] Responsive design foundation

---

## 🎯 Phase 1: MVP Completion (Week 1-2) - HIGH PRIORITY

### A. Core Functionality [CRITICAL]

#### 1. Agent Data Expansion
- [/] **Curate to 100+ verified agents** (Currently: 47/100 - 47%)
  - [/] Claude Code: Add 33 more (Current: 16/50)
    - ✅ Added: debugging-toolkit, full-stack-orchestration, llm-application-dev
    - ✅ Added: security-scanning, database-design, kubernetes-operations
    - ✅ Added: python-development, seo-content-creation
    - ✅ Added: devops-automation-pack, security-pro-pack, fullstack-starter-pack, ai-ml-engineering-pack
    - Need: 22 more Claude agents
  - [/] Windsurf: Add 18 more (Target: 20 total)
    - ✅ Added: windsurf-fullstack-typescript, windsurf-vue-nuxt
    - ✅ Added: windsurf-prisma-postgres, windsurf-testing-vitest
    - Need: 13 more Windsurf agents
  - [x] Cursor: 9 agents (Target: 20 total - Need 11 more)
    - ✅ Added: cursor-react-typescript, cursor-python-fastapi, cursor-shadcn-ui
    - ✅ Added: cursor-vue3, cursor-django, cursor-golang
    - Need: 11 more Cursor rules
  - [x] Replit: 8 agents (Target: 10 total - Need 2 more)
    - ✅ Added: replit-python-data-science, replit-discord-bot
    - ✅ Added: replit-react-vite, replit-nextjs-blog
    - ✅ Added: replit-websocket-chat, replit-rust-cli
    - Need: 2 more Replit agents
  - [ ] Source from:
    - [x] wshobson/agents (GitHub) - ✅ Added 8 agents
    - [x] claude-code-plugins-plus (GitHub) - ✅ Added 4 packs
    - [x] cursor.directory (for Cursor rules) - ✅ Added 6 rules
    - [ ] awesome-windsurf (GitHub) - Need more research
    - [ ] VoltAgent/awesome-claude-code-subagents - To do


#### 2. Individual Agent Pages
- [ ] **Create dynamic agent detail page** (`/agent/[slug]/page.tsx`)
  - [ ] Full description with markdown support
  - [ ] Installation instructions (copy-paste ready)
  - [ ] GitHub link
  - [ ] Author info with links
  - [ ] Video demo embed (if available)
  - [ ] Related agents section
  - [ ] Upvote/favorite functionality (UI only for now)

#### 3. Tool-Specific Pages
- [ ] **Create tool filter pages** (`/[tool]/page.tsx`)
  - [ ] `/claude` - All Claude Code agents
  - [ ] `/windsurf` - All Windsurf agents
  - [ ] `/cursor` - All Cursor agents
  - [ ] `/replit` - All Replit agents
  - [ ] Dynamic filtering based on tool

#### 4. Submission System
- [ ] **Build submission form** (`/submit/page.tsx`)
  - [ ] Form fields:
    - [ ] Agent name
    - [ ] Description
    - [ ] Long description (markdown editor)
    - [ ] GitHub URL
    - [ ] Installation type (git, npm, manual)
    - [ ] Tool compatibility
    - [ ] Category
    - [ ] Tags
    - [ ] Author info (name, GitHub, Twitter)
  - [ ] Form validation
  - [ ] Submit to email (submit@agentstack.directory)
  - [ ] Success/error states
  - [ ] "Thank you" page

#### 5. Search Enhancement
- [ ] **Improve search functionality**
  - [ ] Test Fuse.js performance with 100+ agents
  - [ ] Add search suggestions/autocomplete
  - [ ] Add "No results" state with suggestions
  - [ ] Add recent searches (local storage)

#### 6. Collection Expansion
- [ ] **Add 6 more collections** (Current: 4)
  - [ ] "AI Starter Pack" (beginner-friendly agents)
  - [ ] "Data Science Toolkit"
  - [ ] "Mobile Development Essentials"
  - [ ] "Testing \u0026 QA Masters"
  - [ ] "DevOps Automation"
  - [ ] "Full-Stack Powerhouse"

---

### B. Design \u0026 Polish [HIGH PRIORITY]

#### 7. UI/UX Improvements
- [ ] **Homepage enhancements**
  - [ ] Add "How it works" section
  - [ ] Add "Featured Collections" section header
  - [ ] Add statistics banner ("100+ Agents | 5 Tools | 10 Collections")
  - [ ] Add "Trending This Week" badge on agents
  - [ ] Improve agent card hover states

#### 8. Glass Vault Aesthetic Consistency
- [ ] **Ensure consistent glassmorphism**
  - [ ] Review all components for glass panel usage
  - [ ] Add subtle animations to all interactive elements
  - [ ] Ensure all buttons have hover/active states
  - [ ] Add loading skeleton states

#### 9. Mobile Responsiveness
- [ ] **Test and fix mobile experience**
  - [ ] Test on iPhone (Safari)
  - [ ] Test on Android (Chrome)
  - [ ] Fix Collection Shelf on mobile (currently 4 cols)
  - [ ] Ensure search bar works on mobile
  - [ ] Test navigation on small screens

#### 10. Performance Optimization
- [ ] **Optimize for speed**
  - [ ] Run Lighthouse audit (Target: \u003e90)
  - [ ] Optimize images (use WebP, lazy loading)
  - [ ] Code splitting for agent pages
  - [ ] Minimize bundle size
  - [ ] Add Cache-Control headers

---

### C. Content \u0026 SEO [MEDIUM PRIORITY]

#### 11. SEO Foundation
- [ ] **Meta tags and SEO**
  - [ ] Update homepage meta title/description
  - [ ] Add Open Graph tags (for social sharing)
  - [ ] Add Twitter Card tags
  - [ ] Create sitemap.xml
  - [ ] Create robots.txt
  - [ ] Add JSON-LD structured data (schema.org)

#### 12. Legal Pages
- [ ] **Create legal pages**
  - [ ] Privacy Policy page (`/privacy`)
  - [ ] Terms of Service page (`/terms`)
  - [ ] Attribution page (`/credits`)
  - [ ] Add footer with legal links

#### 13. About \u0026 Help
- [ ] **Create informational pages**
  - [ ] About page (`/about`) - Mission, story
  - [ ] FAQ page (`/faq`)
  - [ ] Contact page (`/contact`)
  - [ ] "How to submit" guide

---

### D. Technical Infrastructure [MEDIUM PRIORITY]

#### 14. Analytics Setup
- [ ] **Install analytics**
  - [ ] Set up Plausible or Umami
  - [ ] Track page views
  - [ ] Track search queries
  - [ ] Track collection clicks
  - [ ] Track agent detail views
  - [ ] Track submission form completions

#### 15. Error Handling
- [ ] **Add error pages**
  - [ ] 404 page (custom)
  - [ ] 500 page (custom)
  - [ ] Error boundary for React errors

#### 16. Git \u0026 Deployment
- [ ] **Set up GitHub repo**
  - [ ] Create public repo (github.com/[you]/agentdepot)
  - [ ] Add README.md with project description
  - [ ] Add CONTRIBUTING.md
  - [ ] Add LICENSE (MIT recommended)
  - [ ] Set up GitHub Actions for CI/CD

---

## 🚀 Phase 2: Quality Features (Month 2-3) - MEDIUM PRIORITY

### E. Enhanced Features

#### 17. Video Demos
- [ ] **Create video content**
  - [ ] Record 5-10 min screencasts for top 20 agents
  - [ ] Upload to YouTube
  - [ ] Embed in agent pages
  - [ ] Create playlist

#### 18. One-Click Install
- [ ] **Installation enhancement**
  - [ ] Add "Copy to clipboard" for terminal commands
  - [ ] Create installation scripts (bash/PowerShell)
  - [ ] Add `.cursorrules` one-click download
  - [ ] Add `.windsurfrules` one-click download

#### 19. Community Features
- [ ] **Add engagement features**
  - [ ] Upvote/downvote system (requires backend)
  - [ ] Save favorites (local storage initially)
  - [ ] Comment system (Disqus or Giscus)
  - [ ] "Agents you might like" recommendations

#### 20. Newsletter
- [ ] **Email newsletter setup**
  - [ ] Choose provider (Mailchimp, ConvertKit, Substack)
  - [ ] Create signup form (homepage popup)
  - [ ] Design newsletter template
  - [ ] Write first newsletter
  - [ ] Set up automated "welcome" email

#### 21. Blog
- [ ] **Start content marketing**
  - [ ] Set up blog (`/blog`)
  - [ ] Write: "How I Built AgentDepot"
  - [ ] Write: "100+ Best AI Coding Agents for 2025"
  - [ ] Write: "The Future of AI Coding Agents"
  - [ ] Cross-post to Dev.to, Medium, Hashnode

---

## 📣 Phase 3: Marketing \u0026 Launch (Week 1-2) - CRITICAL

### F. Pre-Launch Preparation

#### 22. Visual Assets
- [ ] **Create marketing materials**
  - [ ] Logo design (Canva/Figma)
  - [ ] Social media cover images
  - [ ] Screenshot of homepage (high-res)
  - [ ] GIF showing search functionality
  - [ ] Product Hunt preview image

#### 23. Social Media Setup
- [ ] **Set up social accounts**
  - [ ] Twitter/X: @agentdepotdir or @agentdepot
  - [ ] Product Hunt: Create "ship" page
  - [ ] Reddit: Create account with good karma
  - [ ] Dev.to: Create account

#### 24. Launch Content
- [ ] **Write launch materials**
  - [ ] Product Hunt description
  - [ ] Hacker News "Show HN" post
  - [ ] Reddit post (customize per subreddit)
  - [ ] Twitter launch thread (6-7 tweets)
  - [ ] Discord/Slack announcement template

---

### G. Launch Execution

#### 25. Launch Day Strategy
- [ ] **Tuesday launch checklist**
  - [ ] 12:01 AM PST: Post to Product Hunt
  - [ ] 9 AM PST: Post to Hacker News
  - [ ] 9 AM - 5 PM: Stagger Reddit posts (7 subreddits)
    - [ ] r/ClaudeAI
    - [ ] r/Cursor
    - [ ] r/Codeium
    - [ ] r/Replit
    - [ ] r/LocalLLaMA
    - [ ] r/ArtificialIntelligence
    - [ ] r/SideProject
  - [ ] 6 AM: Tweet launch thread
  - [ ] Post in Discord communities:
    - [ ] Anthropic Discord
    - [ ] Cursor Discord
    - [ ] Indie Hackers
    - [ ] Dev.to

#### 26. Launch Day Engagement
- [ ] **Respond to every comment within 1 hour**
- [ ] **Fix bugs immediately**
- [ ] **Tweet milestones** ("Just hit 100 visitors!")
- [ ] **Monitor analytics** (hourly)
- [ ] **Update Product Hunt with ranking**

---

### H. Post-Launch (Week 1-4)

#### 27. Content Marketing
- [ ] **Week 1 blog posts**
  - [ ] "How I Built AgentDepot in a Weekend"
  - [ ] Post on Dev.to
  - [ ] Post on Medium
  - [ ] Post on Hashnode

#### 28. Community Engagement
- [ ] **Reddit power user strategy**
  - [ ] Answer 5-10 questions daily in relevant subreddits
  - [ ] Add helpful value first, mention project second
  - [ ] Build karma and reputation

#### 29. Influencer Outreach
- [ ] **Micro-influencer collaboration**
  - [ ] Identify 10 developers with 500-5K followers
  - [ ] Reach out with collaboration offer
  - [ ] Offer to feature their "Top 10 Agents" list

---

## 💰 Phase 4: Monetization Setup (Month 6+) - LOW PRIORITY

### I. Revenue Stream #1: Sponsored Listings

#### 30. Sponsored Listing System
- [ ] **Build sponsorship features**
  - [ ] "Featured" badge design
  - [ ] Top placement in search results
  - [ ] Homepage featured spot
  - [ ] Sponsorship tier pricing page
  - [ ] Sponsor application form
  - [ ] Invoice/payment system (Stripe)

---

### J. Revenue Stream #2: Affiliate Revenue

#### 31. Affiliate Program Setup
- [ ] **Set up affiliate links**
  - [ ] Research Cursor affiliate program
  - [ ] Research Claude Code affiliate program
  - [ ] Research Windsurf affiliate program
  - [ ] Add "Powered by" banners with affiliate links
  - [ ] Create resource pages with affiliate links

---

### K. Revenue Stream #3: Display Ads

#### 32. Ad Network Integration
- [ ] **Developer-friendly ads**
  - [ ] Apply to Carbon Ads
  - [ ] Apply to BuySellAds
  - [ ] Apply to Ethical Ads
  - [ ] Add single ad slot (non-intrusive)
  - [ ] Test ad placement for best UX

---

### L. Revenue Stream #4: Premium Tier

#### 33. Premium User Tier
- [ ] **Build premium features**
  - [ ] User authentication (NextAuth.js)
  - [ ] Save unlimited favorites
  - [ ] Advanced search/filters
  - [ ] Early access to new agents
  - [ ] Analytics for tracked installs
  - [ ] Ad-free experience
  - [ ] Payment integration (Stripe)
  - [ ] Premium account dashboard

---

### M. Revenue Stream #5: Creator Tools

#### 34. Analytics Dashboard for Creators
- [ ] **B2B SaaS product**
  - [ ] Download/install statistics
  - [ ] User feedback aggregation
  - [ ] A/B testing for descriptions
  - [ ] Promotion tools
  - [ ] Version tracking
  - [ ] Creator account authentication
  - [ ] Pricing tiers ($30-50/month)

---

## 📈 Phase 5: Growth \u0026 Scale (Month 6-12) - ONGOING

### N. Advanced Features

#### 35. User Accounts
- [ ] **User authentication system**
  - [ ] Sign up / Sign in
  - [ ] Profile page
  - [ ] Save favorite agents
  - [ ] Track installed agents
  - [ ] Personal collections

#### 36. Advanced Search
- [ ] **AI-powered search**
  - [ ] Semantic search (OpenAI embeddings)
  - [ ] "Find agents that do X" natural language
  - [ ] Search suggestions based on behavior

#### 37. API
- [ ] **Public API**
  - [ ] API endpoints for agents
  - [ ] API documentation
  - [ ] Rate limiting
  - [ ] API keys for developers

#### 38. CLI Tool
- [ ] **Command-line interface**
  - [ ] `agentdepot search "debugging"`
  - [ ] `agentdepot install [agent-id]`
  - [ ] Publish to npm

#### 39. VS Code Extension
- [ ] **IDE integration**
  - [ ] Browse agents from VS Code
  - [ ] One-click install from extension
  - [ ] Publish to VS Code Marketplace

---

## 🎨 Design System \u0026 Branding

### O. Brand Identity

#### 40. Visual Identity
- [ ] **Refine branding**
  - [ ] Finalize color palette (current gradients are good)
  - [ ] Create logo variations (light/dark)
  - [ ] Design system documentation
  - [ ] Icon library (Lucide icons already in use)

---

## 📊 Analytics \u0026 Optimization

### P. Data-Driven Improvements

#### 41. A/B Testing
- [ ] **Test variations**
  - [ ] Test different CTAs for "Submit Agent"
  - [ ] Test collection card layouts
  - [ ] Test agent card designs
  - [ ] Test homepage layouts

#### 42. User Feedback
- [ ] **Collect feedback**
  - [ ] Add feedback widget (e.g., Canny)
  - [ ] User surveys (after 1 month)
  - [ ] Feature request voting

---

## 🔧 Technical Debt \u0026 Maintenance

### Q. Code Quality

#### 43. Testing
- [ ] **Add automated tests**
  - [ ] Unit tests (Vitest or Jest)
  - [ ] E2E tests (Playwright)
  - [ ] Test search functionality
  - [ ] Test filtering
  - [ ] Test submission form

#### 44. Documentation
- [ ] **Improve developer docs**
  - [ ] Update README with setup instructions
  - [ ] Add code comments
  - [ ] API documentation (if applicable)

---

## 🚨 Critical Risks \u0026 Mitigations

### R. Risk Management

#### 45. Naming Collision Fix
- [ ] **CRITICAL: Address "AgentStack" name conflict**
  - [x] Renamed to "AgentDepot" in code
  - [ ] Update domain strategy (keep agentstack.directory or buy agentdepot.com?)
  - [ ] Update all branding references
  - [ ] Update social media handles if needed

#### 46. Backup \u0026 Security
- [ ] **Data protection**
  - [ ] Set up automated backups (GitHub is primary source)
  - [ ] Add honeypot fields to submission form (spam prevention)
  - [ ] Add rate limiting to API endpoints
  - [ ] HTTPS everywhere (Vercel handles this)

---

## 📅 Timeline Summary

### Week 1 (NOW - Launch Prep)
**Focus:** Complete MVP, curate 100 agents, prepare launch

- Complete tasks #1-16 (MVP Completion)
- Complete tasks #22-24 (Marketing prep)
- Test everything

### Week 2 (Launch Week)
**Focus:** Execute launch, engage community

- Complete task #25-26 (Launch execution)
- Monitor analytics hourly
- Respond to all feedback
- Fix bugs immediately

### Month 2-3
**Focus:** Quality features, content marketing

- Complete tasks #17-21 (Enhanced features)
- Complete tasks #27-29 (Post-launch)
- Weekly blog posts
- Newsletter growth

### Month 6+
**Focus:** Monetization, premium features

- Complete tasks #30-34 (Revenue streams)
- Launch premium tier
- Sponsor outreach

### Year 2+
**Focus:** Scale, advanced features

- Complete tasks #35-39 (Advanced features)
- API and CLI tools
- VS Code extension

---

## 🎯 Success Metrics

### MVP Launch (Week 1)
- [ ] 1,000 visitors Week 1
- [ ] Product Hunt: Top 10 of the day
- [ ] 50+ GitHub stars
- [ ] 100 email subscribers

### Month 1
- [ ] 5,000 total visitors
- [ ] 100+ agents in directory
- [ ] 500 email subscribers

### Month 6
- [ ] 10,000 monthly visitors
- [ ] 200+ agents
- [ ] 5+ tools covered
- [ ] 20+ collections
- [ ] First revenue ($500+)

### Year 1
- [ ] 50,000 monthly visitors
- [ ] $2,000-6,000 monthly revenue
- [ ] Top 3 in Google for "AI coding agents directory"

---

## 🔥 Immediate Next Steps (This Week)

### Priority 1 (Do First)
1. [ ] Curate 50 more agents (get to 67 total)
2. [ ] Create agent detail page template
3. [ ] Test mobile responsiveness
4. [ ] Add privacy policy and terms
5. [ ] Set up analytics

### Priority 2 (Do Next)
6. [ ] Create submission form
7. [ ] Add 6 more collections
8. [ ] Set up GitHub repo (make public)
9. [ ] Write launch posts
10. [ ] Create visual assets

### Priority 3 (Before Launch)
11. [ ] Run Lighthouse audit
12. [ ] Test on multiple devices
13. [ ] Create Product Hunt listing
14. [ ] Set up social media accounts
15. [ ] Do final QA pass

---

**Total Tasks:** 46 major task groups
**Estimated Completion:** MVP (1-2 weeks), Full Feature Set (6-12 months)

---

*Created: 2025-11-20*
*Last Updated: 2025-11-20*
*Next Review: After MVP Launch*
