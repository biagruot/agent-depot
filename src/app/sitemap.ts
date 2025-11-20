import { MetadataRoute } from 'next';
import { agents } from '@/data/agents';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://agentdepot.dev';
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/submit`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Tool pages
  const toolPages = ['claude', 'windsurf', 'cursor', 'replit'].map((tool) => ({
    url: `${baseUrl}/${tool}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Agent detail pages
  const agentPages = agents.map((agent) => ({
    url: `${baseUrl}/agent/${agent.id}`,
    lastModified: new Date(agent.createdAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...toolPages, ...agentPages];
}
