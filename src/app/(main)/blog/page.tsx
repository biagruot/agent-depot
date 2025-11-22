import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { Metadata } from "next";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Blog | AgentDepot",
    description: "Guides, tutorials, and insights on AI coding agents, Cursor rules, and developer productivity.",
};

export default function BlogIndexPage() {
    return (
        <div className="container mx-auto px-4 py-24 max-w-5xl">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                    The Agent Log
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Deep dives into AI coding workflows, agent configurations, and the future of software development.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group relative flex flex-col p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                        <div className="mb-6 space-y-4">
                            <div className="flex items-center gap-3 text-xs text-gray-500 font-mono">
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {post.date}
                                </span>
                                <span className="w-1 h-1 rounded-full bg-gray-700" />
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {post.readTime}
                                </span>
                            </div>

                            <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                {post.title}
                            </h2>

                            <p className="text-gray-400 leading-relaxed">
                                {post.excerpt}
                            </p>
                        </div>

                        <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                            <div className="flex gap-2">
                                {post.tags.map(tag => (
                                    <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <span className="text-sm font-medium text-white flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                Read Post <ArrowRight className="w-4 h-4" />
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
