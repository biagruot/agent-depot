import { SubmitForm } from "@/components/SubmitForm";
import { Github, Mail, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { PageTracker } from "@/components/PageTracker";

export const metadata = {
  title: "Submit an Agent - AgentDepot",
  description:
    "Submit your AI coding agent to AgentDepot. Help the community discover the best agents for Claude, Windsurf, Cursor, and Replit.",
};

export default function SubmitPage() {
  return (
    <main className="min-h-screen relative pb-32">
      <PageTracker />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-sm text-purple-300 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Join 70+ agents in the directory
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-br from-white via-white to-gray-400 bg-clip-text text-transparent animate-fade-in leading-tight">
              Ship It.
            </h1>

            <p className="text-lg md:text-xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto">
              Don&apos;t let your agent gather dust. Share it with 10k+ devs and grow your
              community.
            </p>
          </div>

          {/* Quick stats */}
          <div className="flex items-center justify-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24h</div>
              <div className="text-xs text-gray-500">Review Time</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Free</div>
              <div className="text-xs text-gray-500">Forever</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">10k+</div>
              <div className="text-xs text-gray-500">Monthly Visitors</div>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <SubmitForm />

        {/* Alternative Methods */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <h2 className="text-2xl font-bold text-center text-white mb-8">
            Other Submission Methods
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link
              href="https://github.com/biagruot/agentdepot-agents/issues/new?template=agent_submission.yml"
              target="_blank"
              className="group glass-panel p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col items-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-purple-500/30 shadow-lg">
                <Github className="w-8 h-8 text-white group-hover:text-purple-400 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">The Git Way</h3>
              <p className="text-gray-400 text-sm mb-6 text-center">
                Push to GitHub. Open an issue, we&apos;ll merge it.
              </p>
              <div className="mt-auto flex items-center text-sm font-medium text-purple-400 group-hover:text-purple-300">
                Open Issue{" "}
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="mailto:hello@agentdepot.dev"
              className="group glass-panel p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col items-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-blue-500/30 shadow-lg">
                <Mail className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Email Us</h3>
              <p className="text-gray-400 text-sm mb-6 text-center">
                Old school? That works too. Send us the details.
              </p>
              <div className="mt-auto flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300">
                Send Email{" "}
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>

        {/* Guidelines */}
        <div className="mt-16">
          <div className="p-8 glass-panel rounded-3xl border border-white/10 bg-blue-500/5">
            <h3 className="font-bold text-white mb-6 text-xl flex items-center gap-2">
              <div className="w-1.5 h-6 bg-blue-500 rounded-full" />
              Submission Guidelines
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>
                    Agent must be relevant to AI coding (Claude, Windsurf, Cursor, Replit).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>Must have a public repository or download link.</span>
                </li>
              </ul>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>Include clear installation instructions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>No malicious code or obfuscated scripts.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
