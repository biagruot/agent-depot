import { Agent } from "@/types/agent";
import { cursorAgents } from "./cursor";
import { claudeCodeAgents } from "./claude-code";
import { windsurfAgents } from "./windsurf";
import { replitAgents } from "./replit";
import { mcpAgents } from "./mcp";

export const agents: Agent[] = [
  ...cursorAgents,
  ...claudeCodeAgents,
  ...windsurfAgents,
  ...replitAgents,
  ...mcpAgents,
];
