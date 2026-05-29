import { Navbar } from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Cookie Policy - AgentDepot",
  description: "Learn about how AgentDepot uses cookies and similar technologies.",
  openGraph: {
    title: "Cookie Policy - AgentDepot",
    description: "Learn about how AgentDepot uses cookies and similar technologies.",
    url: "https://agentdepot.dev/cookies",
    siteName: "AgentDepot",
    images: [
      {
        url: "https://agentdepot.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "AgentDepot Cookie Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy - AgentDepot",
    description: "Learn about how AgentDepot uses cookies and similar technologies.",
    images: ["https://agentdepot.dev/og-image.png"],
  },
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen relative pb-32">
      <Navbar />

      <div className="container mx-auto px-4 pt-32 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Cookie Policy</h1>
        <p className="text-gray-400 mb-12">Last updated: December 10, 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              This Cookie Policy explains how AgentDepot (&quot;we&quot;, &quot;our&quot;, or
              &quot;us&quot;) uses cookies and similar technologies when you visit agentdepot.dev
              (the &quot;Site&quot;).
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              By using our Site, you consent to the use of cookies as described in this policy.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
            <p className="text-gray-300 leading-relaxed">
              Cookies are small text files that are placed on your device when you visit a website.
              They are widely used to make websites work more efficiently and provide information to
              website owners.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              AgentDepot uses minimal cookies to provide you with a better experience:
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Essential Cookies</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              These cookies are necessary for the Site to function properly. They enable core
              features such as:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Remembering your search preferences</li>
              <li>Maintaining your selected filters during your session</li>
              <li>Ensuring security and preventing abuse</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Analytics Cookies</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use privacy-focused analytics tools (OpenPanel) that respect your privacy:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>No personally identifiable information is collected</li>
              <li>Data is anonymized and aggregated</li>
              <li>Helps us understand how visitors use our Site</li>
              <li>Allows us to improve the user experience</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">What We Don&apos;t Use</h3>
            <p className="text-gray-300 leading-relaxed mb-4">AgentDepot does NOT use:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Advertising or tracking cookies</li>
              <li>Third-party advertising networks</li>
              <li>Social media tracking pixels (except for share functionality when you click)</li>
              <li>Cross-site tracking mechanisms</li>
            </ul>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Some third-party services we use may set their own cookies:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>
                <strong>GitHub:</strong> When you visit GitHub links from our Site
              </li>
              <li>
                <strong>OpenPanel:</strong> For privacy-focused analytics tracking
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              These third-party cookies are governed by their respective privacy policies.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Browser Controls</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Most web browsers allow you to control cookies through their settings:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>
                <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site
                data
              </li>
              <li>
                <strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data
              </li>
              <li>
                <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
              </li>
              <li>
                <strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site
                data
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Disabling Cookies</h3>
            <p className="text-gray-300 leading-relaxed">
              You can disable cookies entirely through your browser settings. Please note that
              disabling cookies may affect the functionality of our Site and your ability to use
              certain features.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Local Storage</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              In addition to cookies, we may use browser local storage to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Save your filter preferences</li>
              <li>Remember your theme settings (if applicable)</li>
              <li>Cache frequently accessed data for better performance</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Local storage data remains on your device and is not transmitted to our servers.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices
              or for other operational, legal, or regulatory reasons. We will notify you of any
              changes by posting the new Cookie Policy on this page and updating the &quot;Last
              updated&quot; date.
            </p>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have questions about our Cookie Policy, please contact us:
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
