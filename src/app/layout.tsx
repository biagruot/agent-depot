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
  metadataBase: new URL('https://agentdepot.dev'),
  title: {
    default: "AgentDepot | Every AI Agent, Every Tool, One Place",
    template: "%s | AgentDepot"
  },
  description: "The only premium directory covering Claude Code, Windsurf, Cursor, and Replit. Discover 100+ verified AI coding agents, plugins, and rules in one place.",
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
    "developer productivity"
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
    description: "The only premium directory covering Claude Code, Windsurf, Cursor, and Replit. Discover 100+ verified AI coding agents, plugins, and rules.",
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
    description: "The only premium directory covering Claude Code, Windsurf, Cursor, and Replit. 100% Verified.",
    images: ["/og-image.png"],
    creator: "@agentdepot",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: "your-google-site-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

import { OpenPanelComponent } from "@openpanel/nextjs";

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
        <OpenPanelComponent clientId={process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID!} trackScreenViews={true} />
        {children}
      </body>
    </html>
  );
}
