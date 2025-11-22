"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when scrolled down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-lg border border-white/20 hover:border-white/30 transition-all shadow-lg hover:shadow-xl group"
                    aria-label="Back to top"
                >
                    <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
