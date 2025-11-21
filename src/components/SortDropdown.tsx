import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

export type SortOption = 'newest' | 'popular' | 'trending' | 'alphabetical';

interface SortDropdownProps {
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export function SortDropdown({ currentSort, onSortChange }: SortDropdownProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500 hidden sm:inline">Sort by:</span>
      <select
        value={currentSort}
        onChange={(e) => onSortChange(e.target.value as SortOption)}
        className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 hover:bg-white/10 transition-colors cursor-pointer appearance-none"
      >
        <option value="newest">Newest</option>
        <option value="popular">Most Popular</option>
        <option value="trending">Trending</option>
        <option value="alphabetical">Alphabetical</option>
      </select>
    </div>
  );
}
