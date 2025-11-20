import { Navbar } from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service - AgentDepot",
  description: "Terms and conditions for using AgentDepot directory.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen relative pb-32">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Terms of Service</h1>
        <p className="text-gray-400 mb-12">Last updated: November 20, 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using AgentDepot ("the Site"), you agree to be bound by these Terms of Service 
              and all applicable laws and regulations. If you do not agree with any of these terms, you are 
              prohibited from using or accessing this Site.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Description of Service</h2>
            <p className="text-gray-300 leading-relaxed">
              AgentDepot is a free, community-driven directory of AI coding agents for tools including 
              Claude Code, Windsurf, Cursor, and Replit. We curate and display agent submissions from 
              the developer community.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              When using our Site, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Provide accurate and truthful information when submitting agents</li>
              <li>Not submit malicious code, viruses, or harmful content</li>
              <li>Respect intellectual property rights of others</li>
              <li>Not attempt to hack, disrupt, or abuse the Site</li>
              <li>Not use automated tools to scrape or harvest data excessively</li>
              <li>Comply with all applicable local, state, and federal laws</li>
            </ul>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Agent Submissions</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              When you submit an agent to AgentDepot:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>You retain all rights to your submitted content</li>
              <li>You grant us a non-exclusive license to display and distribute your submission</li>
              <li>You warrant that you have the right to submit the content</li>
              <li>You acknowledge that we may edit or reject submissions at our discretion</li>
              <li>You understand that we are not responsible for reviewing all submissions for security</li>
            </ul>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Content Guidelines</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Submitted agents must:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Be relevant to AI coding tools (Claude, Windsurf, Cursor, Replit)</li>
              <li>Include clear installation instructions</li>
              <li>Have a public repository or download link</li>
              <li>Not contain malicious code or obfuscated scripts</li>
              <li>Not violate any third-party rights or licenses</li>
            </ul>
          </section>

          <section className="glass-panel rounded-3xl p-8 border-l-4 border-l-red-500">
            <h2 className="text-2xl font-bold text-white mb-4">Disclaimer of Warranties</h2>
            <p className="text-gray-300 leading-relaxed font-semibold mb-4">
              THE SITE AND ALL AGENTS LISTED ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              We make no warranties, expressed or implied, regarding:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>The accuracy, reliability, or completeness of any agent or content</li>
              <li>The security or safety of any listed agent</li>
              <li>The functionality or compatibility of any agent</li>
              <li>The continued availability of the Site or any agent</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              <strong>USE ALL AGENTS AT YOUR OWN RISK.</strong> Always review code before installing or 
              running any agent on your system.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-8 border-l-4 border-l-red-500">
            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, AgentDepot SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Any damages resulting from use of the Site or any listed agent</li>
              <li>Data loss, system damage, or security breaches</li>
              <li>Errors, bugs, or malicious code in any agent</li>
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, revenue, or business opportunities</li>
            </ul>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Links</h2>
            <p className="text-gray-300 leading-relaxed">
              Our Site contains links to third-party websites (GitHub, etc.). We are not responsible for 
              the content, privacy policies, or practices of these third-party sites. Use them at your own risk.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Site design, logo, and original content are owned by AgentDepot and protected by 
              copyright laws. You may not:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Copy, modify, or distribute our original content without permission</li>
              <li>Use our branding or logo without authorization</li>
              <li>Create derivative works based on the Site</li>
            </ul>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to terminate or suspend access to our Site immediately, without prior 
              notice, for any reason, including breach of these Terms.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We may revise these Terms at any time. By continuing to use the Site after changes are posted, 
              you agree to be bound by the revised Terms.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction 
              in which AgentDepot operates, without regard to conflict of law provisions.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have questions about these Terms, please contact us:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>Email: <a href="mailto:legal@agentstack.directory" className="text-primary hover:underline">legal@agentstack.directory</a></li>
              <li>GitHub: <a href="https://github.com/agentdepot/directory" className="text-primary hover:underline" target="_blank">github.com/agentdepot/directory</a></li>
            </ul>
          </section>

          <div className="text-center pt-8">
            <Link href="/" className="text-primary hover:text-white transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
