import { Navbar } from "@/components/Navbar";
import { Github, Mail } from "lucide-react";
import Link from "next/link";

export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-20 max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-6">Submit an Agent</h1>
        <p className="text-xl text-gray-400 mb-12">
          Help the community discover the best AI coding agents. 
          We review every submission to ensure quality and safety.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Link 
            href="https://github.com/agentdepot/directory/issues/new?template=agent_submission.md"
            target="_blank"
            className="group bg-card-bg border border-card-border p-8 rounded-2xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
              <Github className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold mb-2">Submit via GitHub</h2>
            <p className="text-gray-400 text-sm">
              Create an issue with your agent details. Best for developers.
            </p>
          </Link>

          <Link 
            href="mailto:submit@agentdepot.io"
            className="group bg-card-bg border border-card-border p-8 rounded-2xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
              <Mail className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold mb-2">Submit via Email</h2>
            <p className="text-gray-400 text-sm">
              Send us your agent details directly. We'll handle the rest.
            </p>
          </Link>
        </div>

        <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl text-left">
          <h3 className="font-bold text-blue-400 mb-2">Submission Guidelines</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
            <li>Agent must be relevant to AI coding (Claude, Windsurf, Cursor, Replit).</li>
            <li>Must have a public repository or download link.</li>
            <li>Include clear installation instructions.</li>
            <li>No malicious code or obfuscated scripts.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
