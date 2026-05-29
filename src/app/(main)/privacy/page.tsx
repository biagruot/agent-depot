import { Navbar } from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - AgentDepot",
  description: "Learn how AgentDepot collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen relative pb-32">
      <Navbar />

      <div className="container mx-auto px-4 pt-32 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Privacy Policy</h1>
        <p className="text-gray-400 mb-12">Last updated: December 10, 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              AgentDepot (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates
              agentdepot.dev (the &quot;Site&quot;). This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              By using the Site, you agree to the collection and use of information in accordance
              with this policy.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Information You Provide</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              When you submit an agent through our submission form, we collect:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Agent name and description</li>
              <li>GitHub repository URL</li>
              <li>Your name and contact information</li>
              <li>Social media handles (optional)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">
              Automatically Collected Information
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We automatically collect certain information when you visit our Site:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring website addresses</li>
              <li>IP address (anonymized)</li>
            </ul>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Process and display agent submissions</li>
              <li>Improve and optimize our Site</li>
              <li>Analyze usage patterns and trends</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Send important updates about the service (if you opt-in)</li>
            </ul>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Analytics</h2>
            <p className="text-gray-300 leading-relaxed">
              We use OpenPanel, a privacy-focused analytics tool that collects minimal data and
              respects your privacy. OpenPanel helps us understand how visitors use our Site without
              compromising your privacy or collecting personally identifiable information.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
            <p className="text-gray-300 leading-relaxed">
              Our Site does not use cookies for tracking or advertising purposes. We may use
              essential cookies only for basic site functionality (such as remembering your
              preferences).
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may use third-party services that collect, monitor, and analyze data:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>
                <strong>GitHub:</strong> For repository links and source code hosting
              </li>
              <li>
                <strong>Netlify:</strong> For website hosting and deployment
              </li>
              <li>
                <strong>OpenPanel:</strong> Privacy-focused analytics (no personal data)
              </li>
            </ul>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect
              your personal information. However, no method of transmission over the Internet is
              100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              To exercise these rights, contact us at{" "}
              <a href="mailto:hello@agentdepot.dev" className="text-primary hover:underline">
                hello@agentdepot.dev
              </a>
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Children&apos;s Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Our Site is not intended for children under 13 years of age. We do not knowingly
              collect personal information from children under 13.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the &quot;Last
              updated&quot; date.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>
                Email:{" "}
                <a href="mailto:hello@agentdepot.dev" className="text-primary hover:underline">
                  hello@agentdepot.dev
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a
                  href="https://github.com/biagruot/agentdepot-agents"
                  className="text-primary hover:underline"
                  target="_blank"
                >
                  github.com/biagruot/agentdepot-agents
                </a>
              </li>
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
