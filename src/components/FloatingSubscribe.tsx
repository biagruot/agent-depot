"use client";

import { useState, useEffect } from "react";
import { Mail } from "lucide-react";

export function FloatingSubscribe() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNewsletterVisible, setIsNewsletterVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsNewsletterVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // Trigger when 10% of the newsletter is visible
        );

        const newsletterSection = document.getElementById("newsletter");
        if (newsletterSection) {
            observer.observe(newsletterSection);
        }

        return () => {
            if (newsletterSection) {
                observer.unobserve(newsletterSection);
            }
        };
    }, []);

    const scrollToNewsletter = () => {
        const newsletterSection = document.getElementById("newsletter");
        if (newsletterSection) {
            newsletterSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Show only if scrolled enough AND newsletter is NOT visible
    if (!isScrolled || isNewsletterVisible) return null;

    return (
        <button
            onClick={scrollToNewsletter}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A0A0A] border border-white/10 text-white text-sm font-medium shadow-2xl hover:scale-105 hover:bg-white/5 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
        >
            <Mail className="w-4 h-4 text-gray-400" />
            <span>Subscribe to Updates</span>
        </button>
    );
}
