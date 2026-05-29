export interface Collection {
  id: string;
  name: string;
  description: string;
  icon: string; // Lucide icon name or emoji
  gradient: string; // CSS gradient string (linear-gradient)
  agentIds: string[];
  featured?: boolean;
}
