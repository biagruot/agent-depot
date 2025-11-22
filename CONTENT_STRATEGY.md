# AgentDepot Content Acquisition Strategy
**Created:** 2025-11-22
**Status:** CRITICAL - Product Cannot Launch Without Real Content
**Priority:** P0 - BLOCKING LAUNCH

---

## 🚨 CRITICAL REALITY CHECK

### Current Situation
- **Total Agents:** 46 (ALL MOCK DATA with "mock-" prefix)
- **Real Agents:** 0
- **Product Status:** NOT READY TO LAUNCH
- **Marketing Readiness:** Irrelevant until we have real content

### The Core Problem
**We built a beautiful directory with ZERO real listings.** This is like building a restaurant with no food, a store with no products, or a library with empty shelves.

**Previous timeline was based on FALSE assumption of 115+ real agents.**

---

## 📊 COMPETITOR CONTENT ANALYSIS

### 1. cursor.directory (The Gold Standard)

**Content Strategy:**
- **GitHub-Based:** Open source repository with community PRs
- **Repository:** [cursor.directory GitHub](https://github.com/pontusab/cursor.directory)
- **Data Structure:** JSON/TypeScript files in `/src/data/` directory
- **Submission:** Anyone can submit via Pull Request
- **Quality Control:** Manual review by maintainers before merge
- **Scale:** Reached thousands of rules through community contributions

**How They Did It:**
1. Seeded initial 20-30 quality rules manually
2. Announced on Product Hunt / Hacker News
3. Community started contributing via PRs
4. Maintainers review and merge quality submissions
5. Network effect: More rules → More users → More contributors

**Key Success Factors:**
- ✅ Low friction (GitHub PR = familiar to developers)
- ✅ Transparent (everyone sees what's submitted)
- ✅ Quality control (manual review before merge)
- ✅ Community ownership (contributors feel invested)
- ✅ Version controlled (Git history, rollback capability)

**Repository Structure:**
```
cursor.directory/
├── src/
│   └── data/
│       └── rules/
│           ├── react.ts
│           ├── nextjs.ts
│           ├── python.ts
│           └── ... (hundreds of files)
└── CONTRIBUTING.md
```

---

### 2. SkillsMP.com (Automated Aggregation)

**Content Strategy:**
- **Automated Scraping:** Crawls GitHub for Claude Code skills
- **Search Patterns:** `claude-code-skill-*`, `@claudeai/skill-*`
- **AI-Powered:** Uses LLM to categorize and tag
- **Scale:** 11,321 skills (automated = high quantity, lower quality)

**Pros:**
- ✅ Massive scale quickly
- ✅ Always up-to-date
- ✅ No manual work

**Cons:**
- ❌ Quality inconsistent
- ❌ Many broken/outdated entries
- ❌ No manual verification
- ❌ Spam/duplicate issues

---

### 3. claudecodeplugin.com (Manual Curation)

**Content Strategy:**
- **Manually Curated:** Team tests every plugin
- **Quality Over Quantity:** 50+ verified plugins
- **Trust Badge:** "Tested and Working" guarantee
- **Submission:** Web form → Manual review → Published

**Pros:**
- ✅ High quality, every entry tested
- ✅ Trust signal for users
- ✅ Clean, curated experience

**Cons:**
- ❌ Slow growth (manual bottleneck)
- ❌ Small scale (50 vs 11K)
- ❌ Team dependency

---

## 🎯 RECOMMENDED STRATEGY: HYBRID APPROACH

### Phase 0: Manual Seed (Week 1-2) - Foundation
**Goal:** 50 real, verified, high-quality agents across all tools

#### Immediate Actions (This Week)

**Step 1: Source Hunting (3 days)**

Search and collect from:

**For Cursor:**
- ✅ cursor.directory official repo (can we scrape/adapt?)
- ✅ GitHub: Search `filename:.cursorrules`
- ✅ Reddit: r/Cursor for user-shared rules
- ✅ Twitter: Search "cursor rules" with code snippets
- ✅ Cursor Discord: #share-your-rules channel

**For Windsurf:**
- ✅ GitHub: Search `windsurf rules`, `windsurf cascade`
- ✅ awesome-windsurf GitHub repo
- ✅ Codeium Discord: Windsurf channel
- ✅ Reddit: r/Codeium
- ✅ Twitter: @codeiumdev mentions

**For Claude Code:**
- ✅ GitHub: Search `claude-code-skill-*`, `claude-code-agent-*`
- ✅ claude-code-plugins-plus GitHub repo
- ✅ VoltAgent/awesome-claude-code-subagents
- ✅ wshobson/agents repo
- ✅ Anthropic Discord: #plugins channel

**For Replit:**
- ✅ Replit official templates
- ✅ Replit community bounties
- ✅ GitHub: Search `replit template`
- ✅ Replit Discord

**For MCP:**
- ✅ Official MCP servers list (Anthropic docs)
- ✅ GitHub: Search `mcp-server-*`
- ✅ smithery.ai MCP directory
- ✅ glama.ai MCP marketplace

**Target Initial Seed:**
- 15 Cursor rules (easiest - cursor.directory exists)
- 10 Windsurf rules (market gap - high priority)
- 10 Claude Code agents/skills
- 10 MCP servers (official list)
- 5 Replit templates (official + community)
**Total: 50 real agents**

**Step 2: Manual Curation & Verification (2 days)**

For EACH agent:
1. **Test it personally** - Actually install and verify it works
2. **Document installation** - Write clear, step-by-step instructions
3. **Extract metadata:**
   - Name, description, tags
   - Author (with GitHub/website attribution)
   - Category, tool, type
   - Installation command/instructions
4. **Add to agents.ts** - Follow existing schema
5. **Take screenshot** - For future video demos (optional)

**Quality Checklist:**
- [ ] Actually tested and working (not just found)
- [ ] Clear installation instructions
- [ ] Proper attribution to original author
- [ ] Unique (not duplicate of another entry)
- [ ] High quality (not spam/low effort)

**Step 3: Data Entry (2 days)**

Convert 50 sourced agents into our schema:

```typescript
{
  id: "cursor-react-typescript-pro", // real ID, no "mock-"
  name: "React + TypeScript Professional",
  description: "Production-ready React with TypeScript best practices",
  fullDescription: `[Full markdown from source]`,
  tool: "cursor",
  type: "rule",
  category: "web",
  tags: ["react", "typescript", "best-practices"],
  author: {
    name: "John Doe", // REAL author
    github: "https://github.com/johndoe",
  },
  installation: {
    type: "manual",
    instructions: "Copy to .cursorrules in your project root",
  },
  links: {
    github: "https://github.com/johndoe/cursor-rules",
  },
  verified: true,
  createdAt: "2025-11-22",
}
```

**Important:**
- Remove ALL "mock-" prefixed agents
- Use real author attribution
- Link to original sources
- Mark all as `verified: true` (you tested them)

---

### Phase 1: GitHub-Based Submissions (Week 3+) - Scale

**Implementation:** Open source like cursor.directory

#### Repository Setup

**Step 1: Make agents.ts Contribution-Friendly**

Current structure works, but add:

```typescript
// src/data/agents/cursor.ts
export const cursorAgents: Agent[] = [
  // All cursor agents here
];

// src/data/agents/windsurf.ts
export const windsurfAgents: Agent[] = [
  // All windsurf agents here
];

// src/data/agents/index.ts
export const agents = [
  ...cursorAgents,
  ...windsurfAgents,
  ...claudeCodeAgents,
  ...replitAgents,
  ...mcpAgents,
];
```

**Benefits:**
- Easier for contributors (find the right file)
- Cleaner PRs (change one tool file, not massive agents.ts)
- Reduce merge conflicts
- Better organization

**Step 2: Create CONTRIBUTING.md**

```markdown
# Contributing to AgentDepot

## Adding a New Agent

1. **Find the Right File:**
   - Cursor rules → `src/data/agents/cursor.ts`
   - Windsurf rules → `src/data/agents/windsurf.ts`
   - Claude Code → `src/data/agents/claude-code.ts`
   - Replit → `src/data/agents/replit.ts`
   - MCP → `src/data/agents/mcp.ts`

2. **Add Your Agent:**
   ```typescript
   {
     id: "unique-kebab-case-id",
     name: "Your Agent Name",
     description: "Brief one-line description",
     fullDescription: `
   # Full Markdown Description

   Detailed explanation...
     `,
     tool: "cursor", // cursor | windsurf | claude-code | replit | mcp
     type: "rule",   // rule | agent | plugin | skill | template
     category: "web", // coding | debugging | testing | productivity | data | web | other
     tags: ["react", "typescript"],
     author: {
       name: "Your Name",
       github: "https://github.com/yourusername",
       url: "https://yourwebsite.com", // optional
     },
     installation: {
       type: "manual", // manual | npm | brew | curl | extension | other
       instructions: "Step by step...",
       command: "npm install ...", // if type is npm/brew/curl
     },
     links: {
       github: "https://github.com/repo", // optional
       website: "https://...", // optional
       demo: "https://youtube.com/...", // optional
     },
     verified: false, // We'll verify before merging
     createdAt: "2025-11-22", // Today's date
   }
   ```

3. **Quality Requirements:**
   - ✅ Must be a real, working agent (not placeholder)
   - ✅ Clear installation instructions
   - ✅ Proper attribution (if adapting someone else's work)
   - ✅ No spam or low-effort submissions
   - ✅ Unique (search existing agents first)

4. **Submit PR:**
   - Fork the repository
   - Add your agent to the appropriate file
   - Run `npm run build` to verify (must pass)
   - Submit Pull Request
   - Wait for review (we test every submission!)

## Review Process

1. **Automated Checks:**
   - TypeScript validation
   - Build success
   - No duplicate IDs
   - Schema validation

2. **Manual Review:**
   - We test the agent ourselves
   - Verify installation instructions work
   - Check quality and uniqueness
   - Mark as `verified: true` before merge

**Typical review time: 24-48 hours**

## Questions?

Open an issue or email: submit@agentdepot.dev
```

**Step 3: Automate Validation**

Add GitHub Action for PR validation:

```yaml
# .github/workflows/validate-pr.yml
name: Validate Agent Submission

on:
  pull_request:
    paths:
      - 'src/data/agents/**'

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run build
      - name: Check for duplicate IDs
        run: node scripts/check-duplicates.js
      - name: Validate schema
        run: node scripts/validate-schema.js
```

**Step 4: Create Validation Scripts**

```javascript
// scripts/check-duplicates.js
// Check for duplicate agent IDs

// scripts/validate-schema.js
// Ensure all agents match the Agent type
```

---

### Phase 2: Web Form Submissions (Month 2) - Lower Barrier

**For Non-Technical Users**

#### Implementation

**Step 1: Enhanced Submit Page**

Current submit page exists at `/submit`, enhance it:

```typescript
// src/app/(main)/submit/page.tsx

// Add form fields:
- Agent Name
- Tool (dropdown: Cursor, Windsurf, Claude Code, Replit, MCP)
- Type (dropdown: Rule, Agent, Plugin, Skill, Template)
- Category (dropdown)
- Description (textarea)
- Full Description (markdown editor)
- Installation Instructions (textarea)
- Installation Command (if applicable)
- Your Name
- Your GitHub/Website
- Source Link (GitHub, website, etc.)
```

**Step 2: Submission Workflow**

When user submits:

1. **Create GitHub Issue Automatically**
   - Use GitHub API to create issue
   - Template: "New Agent Submission: [Name]"
   - Body: All form data formatted
   - Label: "submission", "needs-review"

2. **Email Notification**
   - Send to submit@agentdepot.dev
   - Include all submission details
   - Link to GitHub issue

3. **Thank You Page**
   - "Thanks! We'll review within 48 hours"
   - Link to GitHub issue for tracking
   - Encourage them to star the repo

**Step 3: Review Process**

Team member:
1. Reviews GitHub issue
2. Tests the agent manually
3. If approved:
   - Adds to appropriate agents file
   - Marks `verified: true`
   - Creates PR
   - Merges
   - Closes issue with "Merged! Live at agentdepot.dev"
4. If rejected:
   - Comments why
   - Closes issue with explanation
   - Offers to help improve

---

## 🚀 IMMEDIATE ACTION PLAN (Week 1)

### Day 1-2: Seed Cursor Agents (Target: 15)
**Why Cursor first?** cursor.directory already has them - easiest to source

**Sources:**
1. cursor.directory GitHub (with attribution)
2. Top trending Cursor rules on Twitter
3. Cursor Discord #share-your-rules

**Process:**
1. Find 15 best Cursor rules
2. Test each one personally
3. Add to new `src/data/agents/cursor.ts`
4. Remove mock Cursor agents
5. Verify build passes

**Deliverable:** 15 real, working Cursor rules

---

### Day 3-4: Seed Windsurf + Claude Code (Target: 20)
**Why Windsurf?** Market gap - high differentiation

**Windsurf (10 agents):**
1. awesome-windsurf GitHub
2. Codeium Discord
3. Twitter: "windsurf rules", "windsurf cascade"
4. Reddit r/Codeium

**Claude Code (10 agents):**
1. claude-code-plugins-plus GitHub
2. VoltAgent/awesome-claude-code-subagents
3. Anthropic Discord #plugins
4. SkillsMP.com (manually verify each)

**Process:**
1. Source from above
2. Test personally
3. Add to `src/data/agents/windsurf.ts` and `claude-code.ts`
4. Remove mock agents
5. Verify build

**Deliverable:** 10 Windsurf + 10 Claude Code agents

---

### Day 5-6: Seed MCP + Replit (Target: 15)
**MCP (10 servers):**
1. Official MCP servers list (Anthropic docs)
2. smithery.ai MCP directory
3. GitHub: `mcp-server-*`

**Replit (5 templates):**
1. Replit official templates
2. Replit community showcase
3. Replit bounties

**Process:**
1. Source and test
2. Add to `src/data/agents/mcp.ts` and `replit.ts`
3. Remove ALL remaining mock agents
4. Verify build

**Deliverable:** 10 MCP + 5 Replit + ZERO mock agents

---

### Day 7: Cleanup & Launch Prep

**Tasks:**
1. **Remove ALL mock data:**
   ```bash
   # Verify no mock agents remain
   grep -r "mock-" src/data/agents/
   # Should return: nothing
   ```

2. **Split agents.ts into tool files:**
   ```
   src/data/agents/
   ├── cursor.ts       (15 agents)
   ├── windsurf.ts     (10 agents)
   ├── claude-code.ts  (10 agents)
   ├── mcp.ts          (10 agents)
   ├── replit.ts       (5 agents)
   └── index.ts        (exports all)
   ```

3. **Create CONTRIBUTING.md** (see above)

4. **Update README.md:**
   - Change status to "50+ real, verified agents"
   - Add "Community Contributions Welcome"
   - Link to CONTRIBUTING.md

5. **Verify Quality:**
   - Every agent tested personally
   - Clear installation instructions
   - Proper attribution
   - No broken links

6. **Final Build:**
   ```bash
   npm run build
   # Must pass with ZERO errors
   ```

**Deliverable:** 50 real agents, ready to launch

---

## 📊 CONTENT GROWTH TARGETS

### Month 1: Manual Seed + GitHub Contributions
- Week 1: 50 agents (manual seed)
- Week 2: 75 agents (+25 from early community PRs)
- Week 3: 100 agents (+25 from launch momentum)
- Week 4: 125 agents (+25 steady growth)

**Goal:** 100-125 real, verified agents by end of Month 1

### Month 2: Accelerated Growth
- Add web form submissions
- Partnership with tool communities
- Feature top contributors
- Weekly "Agent of the Week" spotlight

**Goal:** 200+ agents

### Month 3: Network Effects
- Community self-sustaining
- 10+ PRs per week
- Top contributors badge
- Automated checks reduce review time

**Goal:** 300+ agents

---

## 🎯 QUALITY CONTROL FRAMEWORK

### Verification Checklist (Before Setting verified: true)

**For Rules (Cursor, Windsurf):**
- [ ] Tested in actual project
- [ ] Instructions work as written
- [ ] No errors or warnings
- [ ] Improves coding experience
- [ ] Proper attribution to original author

**For Agents/Skills (Claude Code):**
- [ ] Installed successfully
- [ ] Tested with real use case
- [ ] No errors during execution
- [ ] Documentation is clear
- [ ] Original author credited

**For Plugins/Servers (MCP):**
- [ ] Installed via documented method
- [ ] Connected successfully
- [ ] Tested core functionality
- [ ] No security concerns
- [ ] Official or community-vetted

**For Templates (Replit):**
- [ ] Template loads successfully
- [ ] All dependencies install
- [ ] Runs without errors
- [ ] Well-documented
- [ ] Useful starting point

### Rejection Criteria

We will **NOT accept:**
- ❌ Spam or low-effort submissions
- ❌ Duplicate of existing agent
- ❌ Doesn't work as described
- ❌ Malicious code or security concerns
- ❌ Plagiarized without attribution
- ❌ No clear value/use case

---

## 🔄 COMMUNITY ENGAGEMENT STRATEGY

### Incentivize Contributions

**Recognition:**
- Top Contributors page
- Monthly spotlight
- "Verified Creator" badge
- Featured in newsletter

**Gamification:**
- Contributor leaderboard
- Badges: First PR, 5 Agents, 10 Agents, etc.
- "Agent of the Month" winner gets prize ($50-100)

**Partnership:**
- Reach out to top GitHub creators
- Offer: "We'll feature your agent prominently"
- Ask: "Can we include it with attribution?"
- Many will say yes (free exposure)

### Community Channels

**GitHub:**
- Main submission channel
- All PRs public and tracked
- Community can see what's being added

**Discord (Month 2):**
- #agent-showcase channel
- #submit-agent for help
- #feedback for suggestions

**Newsletter:**
- Weekly: "5 New Agents This Week"
- Spotlight top contributor
- Thank community

---

## 📝 REVISED MASTER PLAN IMPACT

### Old Timeline (WRONG):
- **Phase 0 (Days 1-2):** Launch prep
- **Phase 1 (Day 3):** Launch
- Based on: 115+ agents already exist ❌ FALSE

### New Timeline (CORRECT):
- **Phase 0 (Week 1):** Manual seed 50 real agents 🎯
- **Phase 1 (Week 2):** GitHub setup + CONTRIBUTING.md
- **Phase 2 (Week 3):** Soft launch (50-75 agents)
- **Phase 3 (Month 2):** Full launch (100+ agents)

**Launch delayed by 2-3 weeks minimum, but with REAL content.**

---

## ✅ SUCCESS CRITERIA

### Minimum Viable Launch
- ✅ 50+ real, verified agents
- ✅ All 5 tools represented
- ✅ Zero mock data
- ✅ GitHub contribution workflow ready
- ✅ Every agent personally tested

### Month 1 Success
- ✅ 100+ real agents
- ✅ 10+ community PR contributions
- ✅ CONTRIBUTING.md published
- ✅ Automated PR validation

### Month 3 Success
- ✅ 300+ agents
- ✅ Self-sustaining community
- ✅ Web form submissions live
- ✅ Top 3 in category

---

## 🚨 CRITICAL DEPENDENCIES

**CANNOT LAUNCH UNTIL:**
1. ✅ 50+ real agents added (min: 10 per tool)
2. ✅ ALL mock data removed
3. ✅ Every agent personally tested and verified
4. ✅ Proper attribution to original authors
5. ✅ Build passes with zero errors

**This is NON-NEGOTIABLE.** A directory with fake data is worse than no product.

---

## 📞 NEXT STEPS (Start TODAY)

### Immediate Actions (Next 4 Hours)

1. **Start Cursor Sourcing:**
   - Go to cursor.directory GitHub
   - Clone and review their top 15 rules
   - Copy with attribution
   - Test each one

2. **Create Tool-Specific Files:**
   ```bash
   cd src/data/agents/
   touch cursor.ts windsurf.ts claude-code.ts mcp.ts replit.ts
   ```

3. **Set Up Workspace:**
   - Create `/content-research/` folder
   - Subfolders for each tool
   - Start dumping found agents

4. **GitHub Research:**
   - Search: `filename:.cursorrules`
   - Search: `windsurf rules`
   - Search: `claude-code-skill`
   - Search: `mcp-server`
   - Bookmark best results

### End of Day Goal
- ✅ 5-10 real Cursor agents sourced and tested
- ✅ List of 20-30 candidates for other tools
- ✅ New file structure created

---

**This is the REAL work. Marketing can wait. Let's build the foundation first.** 🏗️

---

**Document Status:** ACTIVE - This is now Priority #1
**Owner:** Product Manager + Content Lead
**Next Review:** After 50 real agents added
**Last Updated:** 2025-11-22
