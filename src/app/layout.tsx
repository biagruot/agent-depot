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
  metadataBase: new URL('https://agentstack.directory'),
  title: {
    default: "AgentDepot | The AI Coding Agent Directory",
    template: "%s | AgentDepot"
  },
  description: "Discover, compare, and install the best AI coding agents for Claude Code, Windsurf, Cursor, and Replit. Curated collection of 100+ verified agents, plugins, and rules.",
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
    url: "https://agentstack.directory",
    siteName: "AgentDepot",
    title: "AgentDepot - The AI Coding Agent Directory",
    description: "Discover 100+ verified AI coding agents for Claude, Windsurf, Cursor, and Replit. Find the perfect agent for your development workflow.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AgentDepot - AI Coding Agent Directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentDepot - The AI Coding Agent Directory",
    description: "Discover 100+ verified AI coding agents for Claude, Windsurf, Cursor, and Replit.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Privacy-Focused Analytics - Plausible */}
        {/* Uncomment and add your Plausible domain when ready:
        <script defer data-domain="agentstack.directory" src="https://plausible.io/js/script.js"></script>
        */}
        
        {/* Alternative: Umami Analytics */}
        {/* <script async src="https://analytics.umami.is/script.js" data-website-id="your-website-id"></script> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
