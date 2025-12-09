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
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
            <div className="container mx-auto px-4 py-24 max-w-6xl">
                <div className="text-center mb-20 space-y-6">
                    <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-4">
                        AI Coding Insights
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
                        The Agent Log
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Deep dives into AI coding workflows, agent configurations, and the future of software development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {blogPosts.map((post, index) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group relative flex flex-col p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                            style={{
                                animationDelay: `${index * 50}ms`
                            }}
                        >
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300" />

                            <div className="relative mb-6 space-y-4">
                                <div className="flex items-center gap-3 text-xs font-medium">
                                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-gray-400 border border-white/10">
                                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                                        {post.date}
                                    </span>
                                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-gray-400 border border-white/10">
                                        <Clock className="w-3.5 h-3.5 text-purple-400" />
                                        {post.readTime}
                                    </span>
                                </div>

                                <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
                                    {post.title}
                                </h2>

                                <p className="text-gray-300 leading-relaxed text-[15px]">
                                    {post.excerpt}
                                </p>
                            </div>

                            <div className="relative mt-auto pt-6 flex items-center justify-between border-t border-white/10">
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-300 border border-blue-500/20 font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                    Read <ArrowRight className="w-4 h-4 text-blue-400" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
