"use client";
import { useState, useRef, useEffect } from "react";
import { ArrowUpDown, Check } from "lucide-react";

export type SortOption = 'newest' | 'popular' | 'trending' | 'alphabetical';

interface SortDropdownProps {
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const sortLabels: Record<SortOption, string> = {
  newest: "Newest",
  popular: "Most Popular",
  trending: "Trending",
  alphabetical: "Alphabetical"
};

export function SortDropdown({ currentSort, onSortChange }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-2 relative" ref={dropdownRef}>
      <span className="text-sm text-gray-500 hidden sm:inline">Sort by:</span>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-all min-w-[140px] justify-between"
      >
        <span>{sortLabels[currentSort]}</span>
        <ArrowUpDown className="w-3.5 h-3.5 text-gray-500" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-[#0A0A0A] border border-white/10 rounded-xl shadow-xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-100">
          <div className="p-1">
            {(Object.keys(sortLabels) as SortOption[]).map((option) => (
              <button
                key={option}
                onClick={() => {
                  onSortChange(option);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors ${
                  currentSort === option
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
                }`}
              >
                <span>{sortLabels[option]}</span>
                {currentSort === option && <Check className="w-3.5 h-3.5 text-blue-400" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
