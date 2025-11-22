  #!/bin/bash
  echo "🔄 Syncing agents..."

  PUBLIC_REPO="https://github.com/biagruot/agentdepot-agents.git"
  TEMP="/tmp/agentdepot-agents"

  # Clone or pull
  if [ -d "$TEMP" ]; then
    cd "$TEMP" && git pull
  else
    git clone "$PUBLIC_REPO" "$TEMP"
  fi

  # Copy to private repo
  cp -r "$TEMP/agents/"* "./src/data/agents/"

  echo "✅ Done! Review changes with: git diff"