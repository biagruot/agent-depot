import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentdepot.dev"),
  title: {
    default: "AgentDepot | Every AI Agent, Every Tool, One Place",
    template: "%s | AgentDepot",
  },
  description:
    "An open directory of AI coding tools for Claude Code, Windsurf, Cursor, Replit, and MCP. Discover 70+ curated agents, plugins, rules, and skills in one place.",
  keywords: [
    "AI agents",
    "coding agents",
    "Claude Code",
    "Claude Code plugins",
    "Windsurf",
    "Windsurf rules",
    "Cursor",
    "Cursor rules",
    "Replit",
    "Replit agents",
    "AI coding assistant",
    "development tools",
    "agent directory",
    "AI tools",
    "code generation",
    "developer productivity",
  ],
  authors: [{ name: "AgentDepot Team" }],
  creator: "AgentDepot",
  publisher: "AgentDepot",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agentdepot.dev",
    siteName: "AgentDepot",
    title: "AgentDepot | Every AI Agent, Every Tool, One Place",
    description:
      "An open directory of AI coding tools for Claude Code, Windsurf, Cursor, Replit, and MCP. 70+ curated agents, plugins, and rules.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AgentDepot - Multi-Tool AI Agent Directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentDepot | Every AI Agent, Every Tool, One Place",
    description:
      "An open directory of AI coding tools for Claude Code, Windsurf, Cursor, Replit, and MCP — 70+ curated tools.",
    images: ["/og-image.png"],
    creator: "@agentdepot",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-site-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

import { OpenPanelComponent } from "@openpanel/nextjs";
import { FavoritesProvider } from "@/components/providers/FavoritesProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Privacy-Focused Analytics - Plausible */}
        {/* Uncomment and add your Plausible domain when ready:
        <script defer data-domain="agentdepot.dev" src="https://plausible.io/js/script.js"></script>
        */}

        {/* Alternative: Umami Analytics */}
        {/* <script async src="https://analytics.umami.is/script.js" data-website-id="your-website-id"></script> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-black text-white selection:bg-blue-500/30`}
      >
        {process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID && (
          <OpenPanelComponent
            clientId={process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID}
            trackScreenViews={true}
          />
        )}
        <FavoritesProvider>{children}</FavoritesProvider>
      </body>
    </html>
  );
}
