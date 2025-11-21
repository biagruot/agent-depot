# Nice to Have Features

These features have been moved from the main conversion tasks list as they are considered "nice to have" or potentially difficult to implement in the short term.

---

### Task #1.3: Create Author Pages & Leaderboard
**Implementation:**
- [ ] Author page: `/author/[username]`
  - Shows all agents by this author
  - Total downloads/stars
  - Bio (from GitHub)
  - Avatar
  - Social links
- [ ] Leaderboard: `/leaderboard`
  - Top 10 contributors this month
  - Show: Name, # agents, total downloads
  - Clickable to author pages
- [ ] Add badges to author profiles:
  - 🏆 Top Contributor (10+ agents)
  - ⭐ Verified (GitHub verified)
  - 🔥 Trending (agent went viral)

**Files:**
- `src/app/author/[username]/page.tsx` (new)
- `src/app/leaderboard/page.tsx` (new)
- `src/components/AuthorCard.tsx` (new)

**Growth Loop:** Status → More submissions → More content → More users

---

### Task #1.4: Add "Save to Favorites" Feature
**Implementation:**
- [ ] Heart icon on agent cards
- [ ] Save to localStorage (no login required)
- [ ] "My Favorites" page: `/favorites`
- [ ] Share favorites: Generate shareable link
  - `/favorites/abc123` → Shows curated collection
- [ ] Export favorites (JSON, markdown, CSV)

**Files:**
- `src/app/favorites/page.tsx` (new)
- `src/lib/favorites.ts` (localStorage logic)
- `src/app/favorites/[shareId]/page.tsx` (shareable link)

**Growth Loop:** Share favorites = curated lists = SEO + social sharing

---

### Task #2.2: RSS Feed for New Agents
**Implementation:**
- [ ] Generate RSS feed: `/rss.xml`
- [ ] Include: Latest 20 agents
- [ ] Show in footer: "Subscribe via RSS"
- [ ] Update feed automatically when new agents added

**Files:**
- `src/app/rss.xml/route.ts` (new)

**Retention:** Power users subscribe, check weekly

---

### Task #2.3: Browser Push Notifications (Optional)
**Implementation:**
- [ ] Ask for notification permission (non-intrusive)
- [ ] Send weekly: "5 new agents added"
- [ ] Only for opted-in users
- [ ] Use service workers

**Files:**
- `src/app/sw.ts` (service worker)
- `src/lib/notifications.ts`

**Retention:** Re-engage users without email

---
