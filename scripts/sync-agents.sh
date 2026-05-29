#!/bin/bash

# AgentDepot - Agent data sync script
# Copies agent data from the companion agentdepot-agents repo into this app's src/data

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CORE_DIR="$(dirname "$SCRIPT_DIR")"
PUBLIC_DIR="$(dirname "$CORE_DIR")/agentdepot-agents"
DRY_RUN=false

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --dry-run)
      DRY_RUN=true
      shift
      ;;
    --help)
      echo "Usage: $0 [OPTIONS]"
      echo ""
      echo "Options:"
      echo "  --dry-run    Show what would be synced without making changes"
      echo "  --help       Show this help message"
      echo ""
      echo "This script copies agent data from the companion agentdepot-agents repo into src/data."
      exit 0
      ;;
    *)
      echo -e "${RED}Error: Unknown option $1${NC}"
      echo "Use --help for usage information"
      exit 1
      ;;
  esac
done

# Print header
echo ""
echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   AgentDepot Agent Sync Script        ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}"
echo ""

if [ "$DRY_RUN" = true ]; then
  echo -e "${YELLOW}🔍 DRY RUN MODE - No changes will be made${NC}"
  echo ""
fi

# Verify directories exist
echo -e "${BLUE}📁 Verifying directories...${NC}"

if [ ! -d "$PUBLIC_DIR" ]; then
  echo -e "${RED}❌ Error: Public repo not found at $PUBLIC_DIR${NC}"
  echo -e "${YELLOW}💡 Make sure agentdepot-agents is cloned in the same parent directory${NC}"
  exit 1
fi

if [ ! -d "$CORE_DIR/src/data" ]; then
  echo -e "${RED}❌ Error: Core repo data directory not found at $CORE_DIR/src/data${NC}"
  exit 1
fi

echo -e "${GREEN}✓ Public repo: $PUBLIC_DIR${NC}"
echo -e "${GREEN}✓ Core repo: $CORE_DIR${NC}"
echo ""

# Sync agent files
echo -e "${BLUE}🔄 Syncing agent files...${NC}"

AGENT_FILES=(
  "cursor.ts"
  "windsurf.ts"
  "claude-code.ts"
  "mcp.ts"
  "replit.ts"
)

SYNC_COUNT=0
ERROR_COUNT=0

for file in "${AGENT_FILES[@]}"; do
  SOURCE="$PUBLIC_DIR/agents/$file"
  DEST="$CORE_DIR/src/data/$file"

  if [ ! -f "$SOURCE" ]; then
    echo -e "${YELLOW}⚠️  Warning: $file not found in public repo, skipping${NC}"
    continue
  fi

  if [ "$DRY_RUN" = true ]; then
    echo -e "${YELLOW}   Would sync: $file${NC}"
    SYNC_COUNT=$((SYNC_COUNT + 1))
  else
    if cp "$SOURCE" "$DEST"; then
      echo -e "${GREEN}✓ Synced: $file${NC}"
      SYNC_COUNT=$((SYNC_COUNT + 1))
    else
      echo -e "${RED}✗ Failed: $file${NC}"
      ERROR_COUNT=$((ERROR_COUNT + 1))
    fi
  fi
done

echo ""

# Sync type definitions
echo -e "${BLUE}🔄 Syncing type definitions...${NC}"

TYPE_SOURCE="$PUBLIC_DIR/types/agent.ts"
TYPE_DEST="$CORE_DIR/src/types/agent.ts"

if [ -f "$TYPE_SOURCE" ]; then
  if [ "$DRY_RUN" = true ]; then
    echo -e "${YELLOW}   Would sync: types/agent.ts${NC}"
  else
    if cp "$TYPE_SOURCE" "$TYPE_DEST"; then
      echo -e "${GREEN}✓ Synced: types/agent.ts${NC}"
    else
      echo -e "${RED}✗ Failed: types/agent.ts${NC}"
      ERROR_COUNT=$((ERROR_COUNT + 1))
    fi
  fi
else
  echo -e "${YELLOW}⚠️  Warning: agent.ts type definition not found, skipping${NC}"
fi

echo ""

# Summary
echo -e "${BLUE}═══════════════════════════════════════${NC}"
echo -e "${BLUE}Summary:${NC}"
echo -e "${GREEN}✓ Synced: $SYNC_COUNT files${NC}"

if [ $ERROR_COUNT -gt 0 ]; then
  echo -e "${RED}✗ Failed: $ERROR_COUNT files${NC}"
fi

if [ "$DRY_RUN" = true ]; then
  echo ""
  echo -e "${YELLOW}This was a dry run. Run without --dry-run to apply changes.${NC}"
fi

echo ""

# Git status hint
if [ "$DRY_RUN" = false ] && [ $SYNC_COUNT -gt 0 ]; then
  echo -e "${BLUE}💡 Next steps:${NC}"
  echo -e "   1. Review changes: ${YELLOW}git status${NC}"
  echo -e "   2. Test the build: ${YELLOW}npm run build${NC}"
  echo -e "   3. Commit changes: ${YELLOW}git add . && git commit -m \"Sync agents from public repo\"${NC}"
  echo ""
fi

# Exit with error if any syncs failed
if [ $ERROR_COUNT -gt 0 ]; then
  exit 1
fi

exit 0