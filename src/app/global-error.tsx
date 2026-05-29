"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global error boundary caught:", error);
  }, [error]);

  return (
    <html>
      <body className="bg-black text-white min-h-screen">
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center space-y-8 max-w-2xl">
            {/* Critical Error Background */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-30 pointer-events-none blur-[100px]">
              <div
                className="absolute top-0 left-0 w-full h-full bg-red-600/50 rounded-full mix-blend-screen animate-pulse"
                style={{ animationDuration: "1.5s" }}
              />
            </div>

            {/* Critical Error Icon */}
            <div className="relative">
              <div className="text-8xl mb-4">🚨</div>
            </div>

            {/* Error Message */}
            <div className="space-y-4 relative z-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">Critical Error</h1>
              <p className="text-lg text-gray-400 max-w-md mx-auto">
                Something went seriously wrong. The application encountered a fatal error.
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
                    {error.stack && (
                      <pre className="text-xs text-gray-600 mt-3 overflow-auto max-h-40">
                        {error.stack}
                      </pre>
                    )}
                  </div>
                </details>
              )}

              <p className="text-sm text-gray-500 font-mono">
                Error: Fatal exception - Application restart required.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
              >
                <span>🔄</span>
                <span>Restart Application</span>
              </button>
              <button
                onClick={() => {
                  window.location.href = "/";
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors border border-white/20"
              >
                <span>←</span>
                <span>Go Home</span>
              </button>
            </div>

            {/* Support Info */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-gray-500">
                This is a critical error that should be reported.
                <br />
                Please refresh the page or contact support if the issue persists.
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
