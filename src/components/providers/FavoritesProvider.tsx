"use client";

import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import type { AuthChangeEvent, Session, User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";

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
  const supabase = useMemo(() => createClient(), []);

  const fetchFavorites = useCallback(
    async (userId: string) => {
      const { data, error } = await supabase
        .from("favorites")
        .select("agent_id")
        .eq("user_id", userId);

      if (!error && data) {
        setFavorites((data as { agent_id: string }[]).map((f) => f.agent_id));
      }
      setIsLoading(false);
    },
    [supabase],
  );

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      if (user) {
        fetchFavorites(user.id);
      } else {
        setIsLoading(false);
      }
    };
    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event: AuthChangeEvent, session: Session | null) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchFavorites(session.user.id);
      } else {
        setFavorites([]);
        setIsLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [supabase, fetchFavorites]);

  const toggleFavorite = useCallback(
    async (agentId: string) => {
      if (!user) return false;

      const isFavorited = favorites.includes(agentId);

      // Optimistic update
      setFavorites((prev) =>
        isFavorited ? prev.filter((id) => id !== agentId) : [...prev, agentId],
      );

      const { error } = isFavorited
        ? await supabase.from("favorites").delete().eq("user_id", user.id).eq("agent_id", agentId)
        : await supabase.from("favorites").insert({ user_id: user.id, agent_id: agentId });

      if (error) {
        // Roll back the optimistic update if the write failed.
        setFavorites((prev) =>
          isFavorited ? [...prev, agentId] : prev.filter((id) => id !== agentId),
        );
        return false;
      }

      return true;
    },
    [favorites, user, supabase],
  );

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
