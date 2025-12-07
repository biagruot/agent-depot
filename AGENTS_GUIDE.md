# AgentDepot Development Agents - Quick Reference

## 🎯 6 Specialized Agents Created for Your Project

Each agent is an expert in their domain, knows your codebase, and follows your project patterns.

---

## 📋 Agent Directory

| Agent | Role | Use For | Files Managed |
|-------|------|---------|---------------|
| **1. Project Manager** | Status tracking | Task updates, metrics, priorities | PROJECT.md |
| **2. Content Curator** | Agent sourcing | Finding & adding agents | cursor.ts, windsurf.ts, etc. |
| **3. GitHub Sync Manager** | Repo workflow | Public repo, PRs, sync | sync script, CONTRIBUTING.md |
| **4. Marketing Writer** | Content creation | Blog posts, launch materials | blog-posts.ts, landing pages |
| **5. Code Reviewer** | Quality control | Code review, debugging | All code files |
| **6. SEO Optimizer** | Search visibility | Keywords, meta tags, schema | Page metadata, sitemaps |

---

## ⚡ Quick Usage

### Invoke an Agent

Simply mention them in your message:

```
@content-curator Find 10 React Cursor rules and add them to the database
```

### Common Workflows

**Adding Content:**
```
@content-curator I need 15 new agents:
- 5 Cursor rules for Python
- 5 Windsurf rules for DevOps
- 5 MCP servers for data analysis

Test and add them, then update PROJECT.md
```

**Weekly Update:**
```
@project-manager This week we:
- Added 20 new agents (71 → 91)
- Completed GitHub setup
- Built sync script

Update status and move to next phase
```

**Launch Prep:**
```
@marketing-writer Create Product Hunt launch post.
Highlight: 100+ verified agents, multi-tool, open source.
Target developers who use Cursor, Windsurf, or Claude.
```

**Code Review:**
```
@code-reviewer Review the new search autocomplete feature.
Check TypeScript, analytics, mobile responsiveness, and performance.
```

**SEO Work:**
```
@seo-optimizer Optimize /cursor page for "cursor rules directory".
Add meta tags, structured data, and improve on-page SEO.
```

**GitHub Setup:**
```
@github-sync-manager Create the public repo structure with:
- README.md
- CONTRIBUTING.md
- GitHub Actions validation
- Sync script
```

---

## 🎬 Real Example Workflows

### Scenario 1: Content Sprint (Get to 100 Agents)

**Current:** 71 agents
**Goal:** 100 agents for soft launch

```
Step 1: @content-curator
"We're at 71 agents. Get us to 100 by finding:
- 10 more Cursor rules (focus on popular frameworks)
- 8 more Windsurf rules (DevOps, testing)
- 6 more Claude Code agents (productivity, debugging)
- 5 more MCP servers (official Anthropic list + smithery.ai)

Test each one. Add to database. Update PROJECT.md."

Step 2: @project-manager
"Content sprint complete. Update metrics and confirm we're
ready for soft launch."
```

---

### Scenario 2: Launch Week Preparation

**Timeline:** Week 7
**Goal:** All launch materials ready

```
Day 1: @marketing-writer
"Create complete launch package:
1. Product Hunt post + first comment
2. Hacker News Show HN post
3. Twitter thread (7 tweets)
4. Reddit posts for 7 subreddits
Save in /launch-materials/"

Day 2: @seo-optimizer
"Pre-launch SEO audit:
- Optimize all tool pages
- Add structured data
- Verify sitemap
- Check meta tags
Target keywords: cursor rules, windsurf agents, claude code plugins"

Day 3: @code-reviewer
"Final quality check before launch:
- Build passing?
- All analytics working?
- Mobile responsive?
- No console errors?
Generate Lighthouse report."

Day 4: @project-manager
"Launch checklist review. Confirm all materials ready.
Update PROJECT.md: Status → Launch Ready"
```

---

### Scenario 3: Community Contribution Review

**Event:** Someone submitted a PR to agentdepot-agents

```
@github-sync-manager
"PR #23 submitted - new Windsurf rule for Next.js.

Review:
1. Check schema compliance
2. Test the rule in Windsurf
3. Verify no duplicate
4. Check quality

If good: merge, sync to private repo, update count.
If issues: provide helpful feedback."
```

---

## 🔄 Agent Collaboration

Agents can work together on complex tasks!

**Example: Monthly Sprint**

```
@project-manager "Start Month 2 sprint planning"
  ↓
@content-curator "Add 25 more agents this month"
  ↓
@github-sync-manager "Enable community PRs"
  ↓
@marketing-writer "Publish 8 blog posts"
  ↓
@seo-optimizer "Target 5 new keywords"
  ↓
@project-manager "Update metrics and status"
```

---

## 📊 Success Metrics per Agent

| Agent | Week 2 Target | Month 1 Target | Month 2 Target |
|-------|--------------|----------------|----------------|
| Project Manager | PROJECT.md current | Status updates 2x/week | Full transparency |
| Content Curator | 75 agents | 100 agents | 150 agents |
| GitHub Sync Manager | Public repo live | 10 community PRs | 50 PRs |
| Marketing Writer | Launch materials | 12 blog posts | 24 blog posts |
| Code Reviewer | Zero build errors | Lighthouse 90+ | Performance optimal |
| SEO Optimizer | Pages indexed | Page 1 for 3 keywords | Page 1 for 10 keywords |

---

## 💡 Pro Tips

### 1. Be Specific
❌ "Add some agents"
✅ "Add 5 Cursor rules for React with TypeScript"

### 2. Provide Context
❌ "Write a blog post"
✅ "Write a blog post targeting 'cursor rules directory' keyword, 1000 words, for developers"

### 3. Chain Agents
```
@content-curator → @project-manager
"Add 10 agents, then update PROJECT.md"
```

### 4. Review Output
Agents are smart but always verify their work, especially for:
- Code changes (build still passes?)
- Content (matches brand voice?)
- Metrics (numbers accurate?)

### 5. Update Agent Files
As project evolves, keep agent instructions current:
- New patterns? Update code-reviewer.md
- New sources? Update content-curator.md
- New priorities? Update project-manager.md

---

## 🚀 Your Current Priority Agents

**Right Now (Week 2):**
1. **@github-sync-manager** - Set up public repo
2. **@content-curator** - Get to 100 agents
3. **@project-manager** - Track status

**Next Week (Week 3):**
4. **@marketing-writer** - Create launch materials
5. **@seo-optimizer** - Optimize pages

**Always:**
6. **@code-reviewer** - Maintain quality

---

## 📁 File Locations

All agents are in:
```
.claude/agents/
├── README.md                    # Full documentation
├── project-manager.md           # Status tracking
├── content-curator.md           # Agent sourcing
├── github-sync-manager.md       # Repo workflow
├── marketing-writer.md          # Content creation
├── code-reviewer.md             # Quality control
└── seo-optimizer.md             # SEO optimization
```

---

## 🎓 Getting Started

**First time using agents?**

1. **Start simple:** Try one agent at a time
2. **Read their docs:** Each has examples and patterns
3. **Give feedback:** Be specific about what you want
4. **Iterate:** Agents learn from your preferences

**First Task Recommendation:**
```
@content-curator I want to understand how you work.
Show me how to find and add 3 high-quality Cursor rules.
Walk me through your process.
```

---

## 🔥 Power User Moves

### Parallel Execution
```
@content-curator Find 10 agents [run in background]
@marketing-writer Write blog post [run in background]
@seo-optimizer Optimize /cursor [run in background]

[All three work simultaneously!]
```

### Weekly Automation
```
Every Monday:
@project-manager "Weekly status update. Review completed tasks,
update metrics, set this week's priorities."
```

### Quality Gates
```
Before every deploy:
@code-reviewer "Pre-deploy check. Build, lint, Lighthouse, mobile test."
```

---

## ❓ Troubleshooting

**Agent not responding?**
- Check you used @ mention
- Verify agent file exists
- Try simpler request first

**Wrong output?**
- Be more specific in request
- Provide examples of what you want
- Review agent's documentation

**Want to modify an agent?**
- Edit the .md file in .claude/agents/
- Add your patterns/preferences
- Test with new conversation

---

## 📈 Track Your Progress

**Agents Help You:**
- ✅ Maintain single source of truth (PROJECT.md)
- ✅ Add content faster (Content Curator)
- ✅ Launch with confidence (Marketing Writer)
- ✅ Rank in search (SEO Optimizer)
- ✅ Keep code quality high (Code Reviewer)
- ✅ Scale community contributions (GitHub Sync)

**Your job:** Guide them with clear instructions
**Their job:** Execute with expertise and consistency

---

**Next Step:** Try your first agent! Start with:
```
@project-manager Show me the current project status and this week's priorities.
```

---

**Created:** 2025-12-07
**Location:** `.claude/agents/`
**Documentation:** See `.claude/agents/README.md` for full details
