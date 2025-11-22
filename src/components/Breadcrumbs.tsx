"use client";

import { ChevronRight, Home } from "lucide-react";
import { AgentTool, AgentType } from "@/types/agent";

interface BreadcrumbsProps {
    searchQuery?: string;
    selectedTool?: AgentTool | 'all';
    selectedType?: AgentType | 'all';
    onNavigate?: (filters: { tool?: AgentTool | 'all'; type?: AgentType | 'all'; query?: string }) => void;
}

export function Breadcrumbs({ searchQuery, selectedTool, selectedType, onNavigate }: BreadcrumbsProps) {
    const hasFilters = searchQuery || (selectedTool && selectedTool !== 'all') || (selectedType && selectedType !== 'all');

    if (!hasFilters) return null;

    const toolLabels: Record<AgentTool, string> = {
        'claude-code': 'Claude',
        'windsurf': 'Windsurf',
        'cursor': 'Cursor',
        'replit': 'Replit',
        'mcp': 'MCP',
    };

    const typeLabels: Record<AgentType, string> = {
        'rule': 'Rules',
        'agent': 'Agents',
        'plugin': 'Plugins',
        'skill': 'Skills',
        'template': 'Templates',
    };

    const breadcrumbs: {
        label: string;
        onClick?: () => void;
        active?: boolean
    }[] = [
            {
                label: 'Home',
                onClick: () => onNavigate?.({ tool: 'all', type: 'all', query: '' })
            }
        ];

    if (selectedTool && selectedTool !== 'all') {
        breadcrumbs.push({
            label: toolLabels[selectedTool],
            onClick: () => onNavigate?.({ tool: selectedTool, type: 'all', query: '' }),
        });
    }

    if (selectedType && selectedType !== 'all') {
        breadcrumbs.push({
            label: typeLabels[selectedType],
            onClick: () => onNavigate?.({
                tool: selectedTool || 'all',
                type: selectedType,
                query: ''
            }),
        });
    }

    if (searchQuery) {
        breadcrumbs.push({
            label: `"${searchQuery}"`,
            active: true
        });
    }

    return (
        <nav className="flex items-center text-sm text-gray-500 mb-4">
            {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center">
                    {index > 0 && (
                        <ChevronRight className="w-4 h-4 mx-1.5 text-gray-600" />
                    )}
                    {index === 0 && (
                        <Home className="w-3.5 h-3.5 mr-1.5" />
                    )}
                    {crumb.onClick && !crumb.active ? (
                        <button
                            onClick={crumb.onClick}
                            className="hover:text-white transition-colors cursor-pointer"
                        >
                            {crumb.label}
                        </button>
                    ) : (
                        <span className={crumb.active ? "text-white font-medium" : ""}>
                            {crumb.label}
                        </span>
                    )}
                </div>
            ))}
        </nav>
    );
}
