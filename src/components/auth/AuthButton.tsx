"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";
import { AuthModal } from "./AuthModal";
import { LogOut, User as UserIcon, Heart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function AuthButton() {
    const [user, setUser] = useState<User | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const supabase = createClient();
    const router = useRouter();

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        };
        getUser();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, [supabase.auth]);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        setShowDropdown(false);
        router.refresh();
    };

    if (!user) {
        return (
            <>
                <button
                    onClick={() => setIsOpen(true)}
                    className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                    Sign In
                </button>
                <AuthModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
            </>
        );
    }

    return (
        <div className="relative">
            <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs ring-2 ring-white/10 hover:ring-white/20 transition-all"
            >
                {user.email?.[0].toUpperCase()}
            </button>

            {showDropdown && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowDropdown(false)}
                    />
                    <div className="absolute right-0 mt-2 w-48 bg-[#0A0A0A] border border-white/10 rounded-xl shadow-xl z-50 py-1 animate-in fade-in zoom-in-95 duration-100">
                        <div className="px-4 py-2 border-b border-white/5">
                            <p className="text-xs text-gray-500 truncate">Signed in as</p>
                            <p className="text-sm text-white truncate">{user.email}</p>
                        </div>

                        <Link
                            href="/favorites"
                            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                            onClick={() => setShowDropdown(false)}
                        >
                            <Heart className="w-4 h-4" />
                            My Favorites
                        </Link>

                        <button
                            onClick={handleSignOut}
                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-white/5 transition-colors text-left"
                        >
                            <LogOut className="w-4 h-4" />
                            Sign Out
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
