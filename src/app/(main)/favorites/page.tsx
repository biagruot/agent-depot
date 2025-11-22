"use client";

import { useFavorites } from "@/components/providers/FavoritesProvider";
import { agents } from "@/data/agents";
import { AgentCard } from "@/components/AgentCard";
import { AgentModal } from "@/components/AgentModal";
import { useState } from "react";
import { Heart, Loader2 } from "lucide-react";
import { AuthModal } from "@/components/auth/AuthModal";

export default function FavoritesPage() {
    const { favorites, isLoading, user } = useFavorites();
    const [selectedAgent, setSelectedAgent] = useState<any>(null);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const favoritedAgents = agents.filter((agent) => favorites.includes(agent.id));

    if (isLoading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-gray-500" />
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8 text-gray-400" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-4">View Your Favorites</h1>
                <p className="text-gray-400 max-w-md mb-8">
                    Sign in to save and access your favorite agents across devices.
                </p>
                <button
                    onClick={() => setIsAuthModalOpen(true)}
                    className="px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors"
                >
                    Sign In
                </button>
                <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12 max-w-7xl">
            <div className="flex items-center gap-3 mb-8">
                <Heart className="w-6 h-6 text-pink-500 fill-current" />
                <h1 className="text-2xl font-bold text-white">My Favorites</h1>
                <span className="px-2 py-0.5 rounded-full bg-white/10 text-sm text-gray-400">
                    {favoritedAgents.length}
                </span>
            </div>

            {favoritedAgents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[200px]">
                    {favoritedAgents.map((agent) => (
                        <div key={agent.id}>
                            <AgentCard agent={agent} onClick={setSelectedAgent} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-24 border border-dashed border-white/10 rounded-3xl bg-white/5">
                    <p className="text-gray-400 mb-4">You haven't favorited any agents yet.</p>
                    <a href="/" className="text-blue-400 hover:text-blue-300 hover:underline">
                        Browse Agents
                    </a>
                </div>
            )}

            <AgentModal
                agent={selectedAgent}
                isOpen={!!selectedAgent}
                onClose={() => setSelectedAgent(null)}
            />
        </div>
    );
}
