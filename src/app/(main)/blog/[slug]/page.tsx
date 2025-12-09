import { blogPosts } from "@/data/blog-posts";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return { title: "Post Not Found" };
    return {
        title: `${post.title} | AgentDepot Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
            <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-12 transition-colors group bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                </Link>

                <article className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <header className="mb-16 space-y-6">
                        <div className="flex flex-wrap gap-2 mb-8">
                            {post.tags.map(tag => (
                                <span key={tag} className="px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30 backdrop-blur-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-white via-gray-100 to-gray-400 bg-clip-text text-transparent leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 pt-6 border-t border-white/10">
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                                <User className="w-4 h-4 text-blue-400" />
                                <span className="font-medium text-gray-300">{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                                <Calendar className="w-4 h-4 text-purple-400" />
                                <span className="font-medium text-gray-300">{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                                <Clock className="w-4 h-4 text-cyan-400" />
                                <span className="font-medium text-gray-300">{post.readTime}</span>
                            </div>
                        </div>
                    </header>

                <div className="prose prose-invert prose-lg max-w-none
                    prose-headings:font-bold prose-headings:tracking-tight
                    prose-h1:text-4xl prose-h1:text-white prose-h1:mb-6 prose-h1:mt-12 prose-h1:leading-tight
                    prose-h2:text-3xl prose-h2:text-white prose-h2:mb-4 prose-h2:mt-10 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-3
                    prose-h3:text-2xl prose-h3:text-gray-100 prose-h3:mb-3 prose-h3:mt-8
                    prose-h4:text-xl prose-h4:text-gray-200 prose-h4:mb-2 prose-h4:mt-6
                    prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-[17px]
                    prose-a:text-blue-400 prose-a:no-underline prose-a:font-medium hover:prose-a:text-blue-300 hover:prose-a:underline prose-a:transition-colors
                    prose-strong:text-white prose-strong:font-semibold
                    prose-em:text-gray-200 prose-em:italic
                    prose-code:text-pink-300 prose-code:bg-white/5 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none prose-code:border prose-code:border-white/10
                    prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-pre:p-6 prose-pre:overflow-x-auto prose-pre:my-6 prose-pre:shadow-lg
                    prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
                    prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
                    prose-li:text-gray-300 prose-li:leading-relaxed prose-li:text-[17px]
                    prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-400 prose-blockquote:my-6 prose-blockquote:py-2
                    prose-hr:border-white/10 prose-hr:my-12
                    prose-table:border-collapse prose-table:w-full prose-table:my-6
                    prose-th:bg-white/5 prose-th:border prose-th:border-white/10 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold prose-th:text-white
                    prose-td:border prose-td:border-white/10 prose-td:px-4 prose-td:py-3 prose-td:text-gray-300
                    prose-img:rounded-xl prose-img:my-8 prose-img:shadow-2xl">
                    <ReactMarkdown>
                        {post.content}
                    </ReactMarkdown>
                    </div>
                </article>

                <div className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 backdrop-blur-sm text-center">
                    <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                        Ready to 10x your coding workflow?
                    </h3>
                    <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                        Browse our directory of 100+ verified agents, rules, and MCP servers to supercharge your AI coding tools.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        Explore Agents
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
