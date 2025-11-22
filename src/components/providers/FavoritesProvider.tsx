"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";

interface FavoritesContextType {
    favorites: string[];
    toggleFavorite: (agentId: string) => Promise<boolean>;
    isLoading: boolean;
    user: User | null;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
    const [favorites, setFavorites] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);
    const supabase = createClient();

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
            if (user) {
                fetchFavorites(user.id);
            } else {
                setIsLoading(false);
            }
        };
        getUser();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
            setUser(session?.user ?? null);
            if (session?.user) {
                fetchFavorites(session.user.id);
            } else {
                setFavorites([]);
                setIsLoading(false);
            }
        });

        return () => subscription.unsubscribe();
    }, [supabase.auth]);

    const fetchFavorites = async (userId: string) => {
        const { data, error } = await supabase
            .from("favorites")
            .select("agent_id")
            .eq("user_id", userId);

        if (!error && data) {
            setFavorites(data.map((f: any) => f.agent_id));
        }
        setIsLoading(false);
    };

    const toggleFavorite = useCallback(async (agentId: string) => {
        if (!user) return false;

        // Optimistic update
        const isFavorited = favorites.includes(agentId);
        setFavorites((prev) =>
            isFavorited ? prev.filter((id) => id !== agentId) : [...prev, agentId]
        );

        if (isFavorited) {
            await supabase
                .from("favorites")
                .delete()
                .eq("user_id", user.id)
                .eq("agent_id", agentId);
        } else {
            await supabase
                .from("favorites")
                .insert({ user_id: user.id, agent_id: agentId });
        }

        return true;
    }, [favorites, user, supabase]);

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isLoading, user }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    const context = useContext(FavoritesContext);
    if (context === undefined) {
        throw new Error("useFavorites must be used within a FavoritesProvider");
    }
    return context;
}
