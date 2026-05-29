"use client";

import { EmailSignup } from "./EmailSignup";

export function NewsletterSection() {
  return (
    <section id="newsletter" className="py-24 border-t border-white/5 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-5xl mx-auto">
          <div className="text-center md:text-left space-y-2 max-w-md">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Don&apos;t miss the next big thing.
            </h2>
            <p className="text-gray-400">
              Join 5,000+ developers getting the latest AI agents delivered weekly.
            </p>
          </div>

          <div className="w-full max-w-md">
            <EmailSignup />
          </div>
        </div>
      </div>
    </section>
  );
}
