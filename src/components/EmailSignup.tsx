"use client";

import { useState } from "react";
import { Check, Mail } from "lucide-react";
import { useOpenPanel } from "@openpanel/nextjs";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const { track } = useOpenPanel();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Thanks! You're on the list 🎉");
        track('email_signup', { email });
        setEmail("");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again?");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-white mb-2">
          Weekly Drop.
        </h3>
        <p className="text-sm text-gray-400">
          No spam. Just high-signal agents.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            disabled={status === "loading" || status === "success"}
            className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className={`
            px-6 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap
            ${status === "success"
              ? "bg-green-500/20 text-green-400 border border-green-500/30"
              : "bg-white text-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            }
          `}
        >
          {status === "loading" ? (
            <>
              <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              <span>Subscribing...</span>
            </>
          ) : status === "success" ? (
            <>
              <Check className="w-4 h-4" />
              <span>Subscribed!</span>
            </>
          ) : (
            <>
              <Mail className="w-4 h-4" />
              <span>Join</span>
            </>
          )}
        </button>
      </form>

      {message && (
        <p className={`text-sm mt-3 text-center ${status === "error" ? "text-red-400" : "text-green-400"}`}>
          {message}
        </p>
      )}
    </div>
  );
}
