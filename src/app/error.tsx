"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-2xl">
        {/* Glitch Effect Background */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-20 pointer-events-none blur-[100px]">
          <div
            className="absolute top-0 left-0 w-1/2 h-full bg-red-500/40 rounded-full mix-blend-screen animate-pulse"
            style={{ animationDuration: "2s" }}
          />
          <div
            className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/40 rounded-full mix-blend-screen animate-pulse"
            style={{ animationDuration: "3s", animationDelay: "0.5s" }}
          />
        </div>

        {/* Error Icon */}
        <div className="relative">
          <div className="text-8xl mb-4">⚠️</div>
        </div>

        {/* Error Message */}
        <div className="space-y-4 relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Something Broke</h1>
          <p className="text-lg text-gray-400 max-w-md mx-auto">
            Our code threw an exception. We&apos;re on it.
          </p>

          {/* Error Details (Development Mode) */}
          {process.env.NODE_ENV === "development" && (
            <details className="mt-6 text-left">
              <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-400 font-mono">
                Show error details (dev mode)
              </summary>
              <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-sm text-red-400 font-mono break-all">{error.message}</p>
                {error.digest && (
                  <p className="text-xs text-gray-500 mt-2 font-mono">Digest: {error.digest}</p>
                )}
              </div>
            </details>
          )}

          <p className="text-sm text-gray-500 font-mono">
            Error: Unhandled exception in component tree.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
          >
            <span>🔄</span>
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors border border-white/20"
          >
            <span>←</span>
            <span>Go Home</span>
          </Link>
        </div>

        {/* Support Info */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-sm text-gray-500">
            If this keeps happening, please{" "}
            <a
              href="https://github.com/biagruot/agentdepot-agents/agentdepot/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              report the issue
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
