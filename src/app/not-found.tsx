import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center space-y-8 max-w-2xl">
                {/* Glitch Effect Background */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-20 pointer-events-none blur-[100px]">
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-red-500/40 rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '3s' }} />
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-500/40 rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                </div>

                {/* 404 Code */}
                <div className="relative">
                    <h1 className="text-[150px] sm:text-[200px] font-bold leading-none bg-gradient-to-br from-white via-gray-300 to-gray-600 bg-clip-text text-transparent select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 text-[150px] sm:text-[200px] font-bold leading-none text-red-500/10 blur-sm select-none">
                        404
                    </div>
                </div>

                {/* Error Message */}
                <div className="space-y-4 relative z-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                        AGENT_NOT_FOUND
                    </h2>
                    <p className="text-lg text-gray-400 max-w-md mx-auto">
                        This page wandered off into the void. Maybe it&apos;s training a new AI model somewhere...
                    </p>
                    <p className="text-sm text-gray-500 font-mono">
                        Error: The requested resource does not exist in our repository.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
                    >
                        <span>←</span>
                        <span>Back to Home</span>
                    </Link>
                    <Link
                        href="/submit"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors border border-white/20"
                    >
                        <span>Submit Agent</span>
                        <span>→</span>
                    </Link>
                </div>

                {/* Helpful Links */}
                <div className="pt-8 border-t border-white/10">
                    <p className="text-sm text-gray-500 mb-4">Quick navigation:</p>
                    <div className="flex flex-wrap gap-3 justify-center text-sm">
                        <Link href="/?tool=cursor" className="text-purple-400 hover:text-purple-300 transition-colors">
                            Cursor Agents
                        </Link>
                        <span className="text-gray-700">•</span>
                        <Link href="/?tool=windsurf" className="text-blue-400 hover:text-blue-300 transition-colors">
                            Windsurf Agents
                        </Link>
                        <span className="text-gray-700">•</span>
                        <Link href="/?tool=claude-code" className="text-orange-400 hover:text-orange-300 transition-colors">
                            Claude Agents
                        </Link>
                        <span className="text-gray-700">•</span>
                        <Link href="/mcp" className="text-green-400 hover:text-green-300 transition-colors">
                            MCP Servers
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
