import { blogPosts } from "@/data/blog-posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | AgentDepot",
    };
  }

  const url = `https://agentdepot.dev/blog/${post.slug}`;
  return {
    title: `${post.title} | AgentDepot Blog`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      siteName: "AgentDepot",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Organization", name: post.author },
            publisher: {
              "@type": "Organization",
              name: "AgentDepot",
              url: "https://agentdepot.dev",
            },
            mainEntityOfPage: `https://agentdepot.dev/blog/${post.slug}`,
            image: "https://agentdepot.dev/og-image.png",
            keywords: post.tags.join(", "),
          }),
        }}
      />
      {/* Back Button */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>

      {/* Article Header */}
      <article className="space-y-8">
        <header className="space-y-6 pb-8 border-b border-white/10">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-300 border border-blue-500/20 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-white via-gray-100 to-gray-400 bg-clip-text text-transparent leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-300 leading-relaxed">{post.excerpt}</p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4 text-blue-400" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-purple-400" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-green-400" />
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              // Headings
              h1: ({ children }) => (
                <h1 className="text-4xl font-bold text-white mb-6 mt-12 first:mt-0">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-3xl font-bold text-white mb-5 mt-10 first:mt-0">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-2xl font-bold text-white mb-4 mt-8">{children}</h3>
              ),
              h4: ({ children }) => (
                <h4 className="text-xl font-bold text-white mb-3 mt-6">{children}</h4>
              ),

              // Paragraphs
              p: ({ children }) => (
                <p className="text-gray-300 leading-relaxed mb-6 text-[17px]">{children}</p>
              ),

              // Links
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/50 hover:decoration-blue-400 transition-colors"
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {children}
                </a>
              ),

              // Lists
              ul: ({ children }) => (
                <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-gray-300">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-gray-300">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-gray-300 leading-relaxed pl-2">{children}</li>
              ),

              // Code blocks
              code: ({ className, children }) => {
                const isInline = !className;
                if (isInline) {
                  return (
                    <code className="px-2 py-1 rounded bg-white/5 border border-white/10 text-blue-300 font-mono text-[15px]">
                      {children}
                    </code>
                  );
                }
                return (
                  <code className="block px-6 py-4 rounded-xl bg-black/40 border border-white/10 text-gray-300 font-mono text-[15px] overflow-x-auto mb-6">
                    {children}
                  </code>
                );
              },
              pre: ({ children }) => <pre className="mb-6 overflow-x-auto">{children}</pre>,

              // Blockquotes
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-6 bg-blue-500/5 rounded-r-lg">
                  <div className="text-gray-300 italic">{children}</div>
                </blockquote>
              ),

              // Strong/Bold
              strong: ({ children }) => (
                <strong className="font-bold text-white">{children}</strong>
              ),

              // Emphasis/Italic
              em: ({ children }) => <em className="italic text-gray-200">{children}</em>,

              // Horizontal Rule
              hr: () => <hr className="my-12 border-t border-white/10" />,

              // Tables
              table: ({ children }) => (
                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse border border-white/10 rounded-lg overflow-hidden">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => <thead className="bg-white/5">{children}</thead>,
              tbody: ({ children }) => <tbody>{children}</tbody>,
              tr: ({ children }) => (
                <tr className="border-b border-white/10 last:border-0">{children}</tr>
              ),
              th: ({ children }) => (
                <th className="px-4 py-3 text-left text-white font-semibold border-r border-white/10 last:border-0">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-4 py-3 text-gray-300 border-r border-white/10 last:border-0">
                  {children}
                </td>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Footer CTA */}
        <footer className="mt-16 pt-8 border-t border-white/10">
          <div className="glass-panel rounded-3xl p-8 text-center space-y-4">
            <h3 className="text-2xl font-bold text-white">Find More AI Agents</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our directory of AI coding agents, rules, and plugins for Cursor, Windsurf,
              Claude Code, and more.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link
                href="/"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200 hover:scale-105"
              >
                Browse Agents
              </Link>
              <Link
                href="/blog"
                className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all duration-200"
              >
                Read More Articles
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
