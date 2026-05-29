import { motion } from "framer-motion";
import { Zap, Database, Shield, Bug, Sparkles, Layers } from "lucide-react";
import { Collection } from "@/types/collection";
import { cn } from "@/lib/utils";

// Map string icon names to Lucide components
const iconMap: Record<string, React.ElementType> = {
  Zap,
  Database,
  Shield,
  Bug,
  Sparkles,
  Layers,
};

interface CollectionShelfProps {
  collections: Collection[];
  selectedCollectionId: string | null;
  onSelectCollection: (id: string | null) => void;
}

export function CollectionShelf({
  collections,
  selectedCollectionId,
  onSelectCollection,
}: CollectionShelfProps) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-6 -mx-4 px-4 snap-x scrollbar-hide">
      {collections.map((collection, index) => {
        const Icon = iconMap[collection.icon] || Sparkles;
        const isSelected = selectedCollectionId === collection.id;

        return (
          <motion.button
            key={collection.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSelectCollection(isSelected ? null : collection.id)}
            className={cn(
              "relative group overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 border min-w-[280px] w-[280px] snap-start",
              isSelected
                ? "border-white/20 shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]"
                : "border-white/5 hover:border-white/10 hover:bg-white/5",
            )}
          >
            {/* Dynamic Gradient Background */}
            <div
              className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-30"
              style={{ background: collection.gradient }}
            />

            {/* Active State Glow */}
            {isSelected && (
              <motion.div
                layoutId="active-glow"
                className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"
                transition={{ duration: 0.2 }}
              />
            )}

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div
                  className={cn(
                    "p-2 rounded-lg bg-white/10 text-white transition-colors",
                    isSelected ? "bg-white/20" : "group-hover:bg-white/15",
                  )}
                >
                  <Icon size={20} />
                </div>
                {collection.featured && (
                  <span className="text-[10px] font-medium uppercase tracking-wider text-white/40 border border-white/10 px-2 py-0.5 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-primary transition-colors">
                {collection.name}
              </h3>

              <p className="text-sm text-gray-400 line-clamp-2 mb-4 flex-grow">
                {collection.description}
              </p>

              <div className="flex items-center text-xs font-medium text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Layers size={12} />
                  {collection.agentIds.length} Agents
                </span>
              </div>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
