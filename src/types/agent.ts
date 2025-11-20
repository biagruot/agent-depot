export type AgentTool = 'claude' | 'windsurf' | 'cursor' | 'replit';

export interface AgentAuthor {
  name: string;
  url: string;
  avatar?: string;
}

export interface AgentInstallation {
  type: 'git' | 'npm' | 'manual' | 'extension';
  command?: string;
  url?: string;
  instructions?: string;
}

export interface Agent {
  id: string;
  name: string;
  description: string;
  fullDescription?: string; // Markdown supported
  tool: AgentTool;
  category: 'coding' | 'debugging' | 'testing' | 'productivity' | 'data' | 'web' | 'other';
  tags: string[];
  author: AgentAuthor;
  installation: AgentInstallation;
  verified: boolean;
  featured: boolean;
  trending?: boolean;
  stats?: {
    downloads?: number;
    stars?: number;
  };
  links?: {
    github?: string;
    website?: string;
    demo?: string; // Video URL
  };
  createdAt: string;
}
