# Repository Strategy - Private Code, Public Content
**Created:** 2025-11-22
**Decision:** Keep product code private, make agent data public for contributions

---

## 🎯 THE CHALLENGE

**What you want:**
- ✅ Keep UI code, business logic, and proprietary features **PRIVATE**
- ✅ Allow community to contribute agent data **PUBLICLY**
- ✅ Easy synchronization between private and public repos
- ✅ Control over what gets merged into production

**Why this matters:**
- Protects your intellectual property (UI design, components, features)
- Prevents competitors from cloning your exact product
- Still enables community contributions (the core value)
- Maintains quality control

---

## 💡 RECOMMENDED SOLUTION: Separate Public Repo

### Architecture Overview

```
┌─────────────────────────────────────┐
│  agentdepot (PRIVATE)               │
│  - Your main product repo           │
│  - UI components                    │
│  - Business logic                   │
│  - Proprietary features             │
│  - Imports agents from public repo  │
└─────────────────────────────────────┘
              ↓ imports
┌─────────────────────────────────────┐
│  agentdepot-agents (PUBLIC)         │
│  - Agent data files ONLY            │
│  - Community contributions          │
│  - MIT License (open source)        │
│  - Anyone can submit PRs            │
└─────────────────────────────────────┘
```

---

## 🏗️ IMPLEMENTATION OPTIONS

### Option 1: Git Submodule (Recommended for Small Teams)

**How it works:**
- Public repo: `github.com/yourusername/agentdepot-agents`
- Private repo includes public repo as git submodule
- Easy sync with one command

**Setup:**

```bash
# In your private repo
cd /path/to/agent-depot

# Add public repo as submodule
git submodule add https://github.com/yourusername/agentdepot-agents.git src/data/agents

# Now src/data/agents/ is from the public repo
```

**Directory structure:**
```
agent-depot/ (PRIVATE)
├── src/
│   ├── app/                    # Private - Your UI
│   ├── components/             # Private - Your components
│   ├── lib/                    # Private - Your utilities
│   ├── data/
│   │   ├── agents/             # PUBLIC SUBMODULE ←
│   │   │   ├── cursor.ts
│   │   │   ├── windsurf.ts
│   │   │   ├── claude-code.ts
│   │   │   └── index.ts
│   │   └── collections.ts      # Private - Your collections
│   └── types/                  # Private - Your types
├── .gitmodules                 # Submodule config
└── package.json
```

**Workflow:**

1. **Community contributes to public repo:**
   ```bash
   # User forks agentdepot-agents
   # Adds agent to cursor.ts
   # Submits PR to agentdepot-agents
   ```

2. **You review and merge:**
   ```bash
   # Review PR on public repo
   # Test the agent
   # Merge on GitHub
   ```

3. **Update your private repo:**
   ```bash
   # In your private repo
   cd src/data/agents
   git pull origin main
   cd ../../..
   git add src/data/agents
   git commit -m "Update agents from public repo"
   git push
   ```

**Pros:**
- ✅ Simple setup
- ✅ Clear separation (code vs data)
- ✅ Community only sees agent data
- ✅ You control when to sync updates

**Cons:**
- ⚠️ Manual sync required (run git pull in submodule)
- ⚠️ Contributors don't see your full site (can't test locally)
- ⚠️ Slightly more complex git workflow

---

### Option 2: NPM Package (Recommended for Scale)

**How it works:**
- Public repo: `github.com/yourusername/agentdepot-agents`
- Publish as npm package: `@agentdepot/agents`
- Private repo imports as dependency

**Setup:**

**Public repo structure:**
```
agentdepot-agents/ (PUBLIC)
├── agents/
│   ├── cursor.ts
│   ├── windsurf.ts
│   ├── claude-code.ts
│   ├── mcp.ts
│   ├── replit.ts
│   └── index.ts
├── types/
│   └── agent.ts              # Agent type definition
├── package.json
├── tsconfig.json
└── README.md
```

**Public repo package.json:**
```json
{
  "name": "@agentdepot/agents",
  "version": "1.0.0",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "prepublishOnly": "npm run build"
  },
  "publishConfig": {
    "access": "public"
  }
}
```

**Private repo usage:**
```bash
# In your private repo
npm install @agentdepot/agents

# Or use GitHub directly (free, no npm publish needed)
npm install github:yourusername/agentdepot-agents
```

**Import in your code:**
```typescript
// src/data/agents/index.ts (in PRIVATE repo)
export { agents } from '@agentdepot/agents';

// Or GitHub direct:
export { agents } from 'agentdepot-agents';
```

**Workflow:**

1. **Community submits PR to public repo**
2. **You merge and create new release:**
   ```bash
   # In public repo
   npm version patch
   git push --tags
   npm publish
   ```
3. **Update private repo:**
   ```bash
   # In private repo
   npm update @agentdepot/agents
   ```

**Pros:**
- ✅ Clean dependency management
- ✅ Versioning (can pin specific versions)
- ✅ No git submodule complexity
- ✅ Can use GitHub directly (no npm publish needed)

**Cons:**
- ⚠️ Requires npm publish workflow (or use GitHub direct)
- ⚠️ Slightly more setup

---

### Option 3: Hybrid - Separate Repo + Copy Script (Simple & Flexible)

**How it works:**
- Public repo: `github.com/yourusername/agentdepot-agents`
- Simple script copies data to private repo
- No submodules, no npm packages

**Setup:**

**Public repo (simple structure):**
```
agentdepot-agents/ (PUBLIC)
├── agents/
│   ├── cursor.ts
│   ├── windsurf.ts
│   ├── claude-code.ts
│   ├── mcp.ts
│   ├── replit.ts
│   └── index.ts
├── CONTRIBUTING.md
└── README.md
```

**Private repo script:**
```bash
# scripts/sync-agents.sh

#!/bin/bash
# Sync agents from public repo

# Clone/pull public repo
if [ -d "/tmp/agentdepot-agents" ]; then
  cd /tmp/agentdepot-agents
  git pull
else
  cd /tmp
  git clone https://github.com/yourusername/agentdepot-agents.git
fi

# Copy to private repo
cp -r /tmp/agentdepot-agents/agents/* ./src/data/agents/

echo "✅ Agents synced from public repo"
```

**Usage:**
```bash
# When you want to sync latest agents
npm run sync-agents

# Or manually
./scripts/sync-agents.sh
```

**Add to package.json:**
```json
{
  "scripts": {
    "sync-agents": "./scripts/sync-agents.sh"
  }
}
```

**Workflow:**

1. **Community submits PR to public repo**
2. **You merge**
3. **Run sync script:**
   ```bash
   npm run sync-agents
   git add src/data/agents
   git commit -m "Sync agents from public repo"
   git push
   ```

**Pros:**
- ✅ Simplest to understand
- ✅ No git submodules
- ✅ No npm packages
- ✅ Full control over when to sync
- ✅ Can modify after sync if needed

**Cons:**
- ⚠️ Manual sync process
- ⚠️ Could forget to sync

---

## 🎯 MY RECOMMENDATION: Option 3 (Hybrid + Script)

**Why:**
1. **Simplest** - No submodule or npm complexity
2. **Flexible** - Easy to modify or revert
3. **Control** - You decide when to pull updates
4. **Beginner-friendly** - Easy for contributors to understand

### Implementation Plan

#### Step 1: Create Public Repo (Day 1)

```bash
# Create new public repo on GitHub
# Name: agentdepot-agents
# Description: "Community-contributed AI coding agents for AgentDepot.dev"
# License: MIT
# Public visibility

# Clone it locally
cd ~/projects
git clone https://github.com/yourusername/agentdepot-agents.git
cd agentdepot-agents
```

#### Step 2: Set Up Structure

```bash
# Create structure
mkdir -p agents types
touch agents/{cursor,windsurf,claude-code,mcp,replit,index}.ts
touch types/agent.ts
touch CONTRIBUTING.md README.md
```

**agents/cursor.ts:**
```typescript
import { Agent } from '../types/agent';

export const cursorAgents: Agent[] = [
  // Cursor rules here
];
```

**agents/index.ts:**
```typescript
export { cursorAgents } from './cursor';
export { windsurfAgents } from './windsurf';
export { claudeCodeAgents } from './claude-code';
export { mcpAgents } from './mcp';
export { replitAgents } from './replit';

// Combined export
export const agents = [
  ...cursorAgents,
  ...windsurfAgents,
  ...claudeCodeAgents,
  ...mcpAgents,
  ...replitAgents,
];
```

**types/agent.ts:**
```typescript
// Copy from your private repo
export type AgentTool = 'cursor' | 'windsurf' | 'claude-code' | 'replit' | 'mcp';
export type AgentType = 'rule' | 'agent' | 'plugin' | 'skill' | 'template';

export interface Agent {
  id: string;
  name: string;
  description: string;
  fullDescription?: string;
  tool: AgentTool;
  type: AgentType;
  category: 'coding' | 'debugging' | 'testing' | 'productivity' | 'data' | 'web' | 'other';
  tags: string[];
  author: {
    name: string;
    url?: string;
    github?: string;
  };
  installation: {
    type?: 'manual' | 'npm' | 'brew' | 'curl' | 'extension' | 'other';
    manual?: string;
    command?: string;
    url?: string;
    instructions?: string;
  };
  verified: boolean;
  featured?: boolean;
  trending?: boolean;
  stats?: {
    downloads?: number;
    stars?: number;
  };
  links?: {
    github?: string;
    website?: string;
    demo?: string;
  };
  createdAt: string;
  updatedAt?: string;
}
```

**README.md:**
```markdown
# AgentDepot Agents

Community-contributed AI coding agents for [AgentDepot.dev](https://agentdepot.dev)

## 🎯 What is this?

This is the **open-source agent database** for AgentDepot. Anyone can contribute!

We curate AI coding agents, plugins, and tools for:
- 🟢 **Cursor** - Rules and workflows
- 🔵 **Windsurf** - Rules and MCP servers
- 🟣 **Claude Code** - Agents and skills
- 🟠 **Replit** - Templates and extensions
- 💚 **MCP** - Model Context Protocol servers

## 🚀 How to Contribute

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed instructions.

**Quick steps:**
1. Fork this repo
2. Add your agent to the appropriate file (e.g., `agents/cursor.ts`)
3. Follow the schema in `types/agent.ts`
4. Submit a Pull Request
5. We'll review and merge!

## 📦 Using This Data

**For developers:**
```typescript
import { agents, cursorAgents } from 'agentdepot-agents';

// All agents
console.log(agents);

// Just Cursor rules
console.log(cursorAgents);
```

**For users:**
Visit [agentdepot.dev](https://agentdepot.dev) to browse with a beautiful UI!

## 📄 License

MIT - Free to use, modify, and distribute with attribution
```

**CONTRIBUTING.md:**
```markdown
# Contributing to AgentDepot Agents

Thank you for contributing! 🎉

## 🎯 What We Accept

We accept **real, working** AI coding agents, plugins, and tools for:
- Cursor (rules, workflows)
- Windsurf (rules, MCP servers)
- Claude Code (agents, skills, plugins)
- Replit (templates, extensions)
- MCP (servers)

## 📝 How to Add an Agent

### 1. Find the Right File

- Cursor → `agents/cursor.ts`
- Windsurf → `agents/windsurf.ts`
- Claude Code → `agents/claude-code.ts`
- Replit → `agents/replit.ts`
- MCP → `agents/mcp.ts`

### 2. Add Your Agent

Follow this template:

```typescript
{
  id: "unique-kebab-case-id",
  name: "Your Agent Name",
  description: "One-line description (max 150 chars)",
  fullDescription: `
# Full Markdown Description

Detailed explanation of what this agent does...

## Features
- Feature 1
- Feature 2

## Usage
How to use it...
  `,
  tool: "cursor", // cursor | windsurf | claude-code | replit | mcp
  type: "rule",   // rule | agent | plugin | skill | template
  category: "web", // coding | debugging | testing | productivity | data | web | other
  tags: ["react", "typescript"], // Relevant tags for search
  author: {
    name: "Your Name",
    github: "https://github.com/yourusername",
    url: "https://yourwebsite.com", // optional
  },
  installation: {
    type: "manual", // manual | npm | brew | curl | extension
    instructions: "Copy to .cursorrules in your project root",
    command: "npm install ...", // if applicable
  },
  links: {
    github: "https://github.com/you/your-agent", // optional
    website: "https://...", // optional
    demo: "https://youtube.com/...", // optional
  },
  verified: false, // We'll set to true after testing
  createdAt: "2025-11-22", // Today's date (YYYY-MM-DD)
}
```

### 3. Quality Requirements

✅ **Must be real** - No mock/placeholder data
✅ **Must work** - We test every submission
✅ **Proper attribution** - Credit original author if adapting
✅ **Clear instructions** - Anyone should be able to install
✅ **Unique** - Search existing agents first

❌ **We reject:**
- Spam or low-effort submissions
- Duplicates of existing agents
- Broken or untested agents
- Malicious code

### 4. Submit PR

1. Fork this repository
2. Create a branch: `git checkout -b add-my-agent`
3. Add your agent to the appropriate file
4. Test: Make sure TypeScript compiles
5. Commit: `git commit -m "Add [Agent Name] for [Tool]"`
6. Push: `git push origin add-my-agent`
7. Open Pull Request on GitHub

## 🔍 Review Process

1. **Automated checks** - TypeScript validation, schema validation
2. **Manual testing** - We install and test your agent
3. **Approval** - If it works, we mark `verified: true` and merge
4. **Go live** - Appears on agentdepot.dev within 24 hours

**Typical review time: 24-48 hours**

## ❓ Questions?

- Open an issue on this repo
- Email: submit@agentdepot.dev
- Visit: [agentdepot.dev](https://agentdepot.dev)

Thank you for making AgentDepot better! 🙏
```

#### Step 3: Create Sync Script in Private Repo

**In your private repo:**

```bash
# Create scripts folder
mkdir -p scripts
touch scripts/sync-agents.sh
chmod +x scripts/sync-agents.sh
```

**scripts/sync-agents.sh:**
```bash
#!/bin/bash

echo "🔄 Syncing agents from public repo..."

# Configuration
PUBLIC_REPO="https://github.com/yourusername/agentdepot-agents.git"
TEMP_DIR="/tmp/agentdepot-agents"
TARGET_DIR="./src/data/agents"

# Clone or update public repo
if [ -d "$TEMP_DIR" ]; then
  echo "📥 Pulling latest changes..."
  cd "$TEMP_DIR"
  git pull origin main
else
  echo "📥 Cloning public repo..."
  git clone "$PUBLIC_REPO" "$TEMP_DIR"
fi

# Copy agent files to private repo
echo "📋 Copying agent files..."
cp -r "$TEMP_DIR/agents/"* "$TARGET_DIR/"
cp "$TEMP_DIR/types/agent.ts" "./src/types/"

echo "✅ Sync complete!"
echo ""
echo "📊 Changed files:"
git status --short

echo ""
echo "💡 Next steps:"
echo "  1. Review changes: git diff"
echo "  2. Test build: npm run build"
echo "  3. Commit: git add . && git commit -m 'Sync agents from public repo'"
echo "  4. Push: git push"
```

**Add to package.json:**
```json
{
  "scripts": {
    "sync-agents": "./scripts/sync-agents.sh"
  }
}
```

#### Step 4: Migrate Existing Data

```bash
# In your private repo
# Copy current agent files to public repo structure
cp src/data/agents.ts /path/to/agentdepot-agents/agents/

# Split into tool-specific files
# (manually or with a script)

# Push to public repo
cd /path/to/agentdepot-agents
git add .
git commit -m "Initial agent data"
git push

# Test sync script
cd /path/to/agent-depot
npm run sync-agents
```

---

## 🔄 DAILY WORKFLOW

### For You (Maintainer)

**When community submits PR to public repo:**

1. **Review on GitHub:**
   - Check code quality
   - Test the agent locally
   - Verify it works as described

2. **Merge PR:**
   ```bash
   # On GitHub, click "Merge Pull Request"
   ```

3. **Sync to private repo:**
   ```bash
   cd /path/to/agent-depot
   npm run sync-agents
   npm run build  # Verify build passes
   git add .
   git commit -m "Sync agents: Added [Agent Name]"
   git push
   ```

4. **Deploy:**
   ```bash
   # Netlify auto-deploys on push
   # Or manually: npm run build && netlify deploy
   ```

**Agent goes live on agentdepot.dev! 🎉**

### For Contributors

1. Fork `agentdepot-agents`
2. Add agent to appropriate file
3. Submit PR
4. Wait for review
5. See their agent live on agentdepot.dev!

**They never see your private code.**

---

## 🔒 SECURITY CONSIDERATIONS

### What's Public
- ✅ Agent data (names, descriptions, install instructions)
- ✅ Agent schema/types
- ✅ CONTRIBUTING.md
- ✅ README.md

### What's Private
- 🔒 Your UI components
- 🔒 Business logic
- 🔒 Analytics implementation
- 🔒 Collections curation logic
- 🔒 Marketing strategies
- 🔒 Future features
- 🔒 `.env` variables
- 🔒 Deployment configs

### Risk Mitigation

**Risk:** Someone clones public repo and builds competing site
**Mitigation:**
- They only get raw data, not your UI/UX
- Your glassmorphism design is proprietary
- Your collections are curated (subjective, not raw data)
- Network effect: Your site already has users

**Risk:** Malicious code in agent submission
**Mitigation:**
- Manual review every PR
- Test agents before merging
- Code review for suspicious patterns
- Set `verified: false` until tested

**Risk:** Spam/low-quality submissions
**Mitigation:**
- Clear quality guidelines in CONTRIBUTING.md
- Reject PRs that don't meet standards
- Community moderation

---

## 📊 BENEFITS OF THIS APPROACH

### For You
- ✅ Keep proprietary code private
- ✅ Enable community contributions
- ✅ Control over what gets merged
- ✅ Own the relationship with contributors
- ✅ Flexibility to modify data before deployment

### For Community
- ✅ Easy to contribute (just edit a TypeScript file)
- ✅ Transparent process (see all submissions)
- ✅ Recognition (GitHub profile shows contributions)
- ✅ Familiar workflow (standard GitHub PR process)

### For Your Product
- ✅ Faster content growth (community-driven)
- ✅ Network effects (more agents → more users → more contributors)
- ✅ Lower maintenance burden (community helps maintain data)
- ✅ Trust signal (open source data = transparent)

---

## 🚀 IMPLEMENTATION TIMELINE

### Day 1: Setup Public Repo
- [ ] Create `agentdepot-agents` repo on GitHub (public)
- [ ] Add structure (agents/, types/, README, CONTRIBUTING)
- [ ] Migrate first 50 real agents you collected
- [ ] Test build

### Day 2: Setup Sync
- [ ] Create sync script in private repo
- [ ] Test sync process
- [ ] Add to package.json
- [ ] Document workflow

### Day 3: Go Live
- [ ] Make public repo announcement
- [ ] Update README.md in private repo
- [ ] Update agentdepot.dev with "Submit Agent" link to public repo
- [ ] Tweet about open source agent database

**Total time: 1 day of setup**

---

## ✅ CHECKLIST

### Public Repo Setup
- [ ] Create GitHub repo (public)
- [ ] Add folder structure
- [ ] Copy agent type definitions
- [ ] Write README.md
- [ ] Write CONTRIBUTING.md
- [ ] Add MIT License
- [ ] Migrate first 50 agents
- [ ] Push to GitHub

### Private Repo Setup
- [ ] Create sync script
- [ ] Add to package.json
- [ ] Test sync process
- [ ] Update .gitignore (ignore synced files or commit them)
- [ ] Document workflow in CLAUDE.md

### Testing
- [ ] Submit test PR to public repo
- [ ] Review and merge
- [ ] Run sync script
- [ ] Verify build passes
- [ ] Check agents appear on local dev site
- [ ] Deploy and verify on production

---

## 📝 ALTERNATIVE: GitHub Actions Auto-Sync (Advanced)

If you want **automatic sync** instead of manual:

**In private repo, add `.github/workflows/sync-agents.yml`:**

```yaml
name: Sync Agents from Public Repo

on:
  schedule:
    - cron: '0 */6 * * *'  # Every 6 hours
  workflow_dispatch:  # Manual trigger

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Clone public repo
        run: |
          git clone https://github.com/yourusername/agentdepot-agents.git /tmp/agents

      - name: Copy files
        run: |
          cp -r /tmp/agents/agents/* ./src/data/agents/
          cp /tmp/agents/types/agent.ts ./src/types/

      - name: Check for changes
        id: changes
        run: |
          git diff --quiet || echo "changed=true" >> $GITHUB_OUTPUT

      - name: Commit and push
        if: steps.changes.outputs.changed == 'true'
        run: |
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
          git add .
          git commit -m "Auto-sync agents from public repo"
          git push
```

**Benefits:**
- ✅ Automatic sync every 6 hours
- ✅ No manual work
- ✅ Always up to date

**Cons:**
- ⚠️ Less control over timing
- ⚠️ Could deploy untested changes

**Recommendation:** Start with manual sync, add auto-sync later if needed.

---

## 🎯 FINAL RECOMMENDATION

**Use Option 3: Hybrid + Script**

**Setup time:** 1 day
**Complexity:** Low
**Flexibility:** High
**Community-friendly:** Yes

This gives you:
- Private product code
- Public agent data
- Full control
- Simple workflow

**Next steps:** Create the public repo and sync script TODAY.

---

**Document Status:** ACTIVE
**Owner:** Product Manager + Engineering Lead
**Next Review:** After public repo is live
**Last Updated:** 2025-11-22
