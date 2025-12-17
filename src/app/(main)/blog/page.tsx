import Link from "next/link";
import { blogPosts, BlogPost } from "@/data/blog-posts";
import { ArrowRight, Calendar, Clock, Sparkles, ChevronRight, User } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blog | AgentDepot",
    description: "Guides, tutorials, and insights on AI coding agents, Cursor rules, and developer productivity.",
};

export default function BlogIndexPage() {
    // Sort posts by date (newest first)
    const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const featuredPost = sortedPosts[0];
    const recentPosts = sortedPosts.slice(1);

    return (
        <div className="min-h-screen pb-20">
            {/* Header Section */}
            <div className="relative pt-24 pb-12 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />
                <div className="container mx-auto px-4 text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
                        <Sparkles className="w-4 h-4" />
                        <span>AgentDepot Engineering Blog</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        Master the Art of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI Coding</span>
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Deep dives into Cursor rules, MCP servers, and the future of agentic development.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl space-y-16">
                {/* Featured Post */}
                {featuredPost && (
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-yellow-400" />
                            Latest Article
                        </h2>
                        <Link
                            href={`/blog/${featuredPost.slug}`}
                            className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl overflow-hidden"
                        >
                            {/* Decorative Background for Featured */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent opacity-50" />

                            <div className="relative flex flex-col justify-center space-y-6">
                                <div className="space-y-4">
                                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                                        <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
                                            {featuredPost.tags[0]}
                                        </span>
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-4 h-4" />
                                            {featuredPost.date}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-4 h-4" />
                                            {featuredPost.readTime}
                                        </div>
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight group-hover:text-blue-200 transition-colors">
                                        {featuredPost.title}
                                    </h3>
                                    <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                                        {featuredPost.excerpt}
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 pt-4">
                                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                                        AD
                                    </div>
                                    <div className="flex flex-col text-sm">
                                        <span className="text-white font-medium">{featuredPost.author}</span>
                                        <span className="text-gray-500">Editor in Chief</span>
                                    </div>
                                </div>
                            </div>

                            {/* visual placeholder for featured since we have no images */}
                            <div className="relative hidden lg:flex items-center justify-center min-h-[300px] rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-transparent blur-3xl" />
                                <div className="text-center p-8 relative z-10">
                                    <h4 className="text-2xl font-bold text-white/20 uppercase tracking-[0.2em]">
                                        {featuredPost.tags[0]}
                                    </h4>
                                </div>
                            </div>
                        </Link>
                    </section>
                )}

                {/* Recent Posts Grid */}
                <section>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-white">Recent Articles</h2>
                        {/* <Link href="/blog/archive" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                            View Archive <ChevronRight className="w-4 h-4" />
                        </Link> */}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {recentPosts.map((post, index) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group flex flex-col h-full bg-[#0A0A0A] border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                            >
                                {/* Card Pattern Header */}
                                <div className={`h-48 w-full relative overflow-hidden bg-gradient-to-br ${getGradient(index)}`}>
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:20px_20px]" />
                                    <div className="absolute bottom-4 left-4">
                                        <span className="px-3 py-1 text-xs font-semibold bg-black/50 backdrop-blur-md rounded-full text-white border border-white/10">
                                            {post.tags[0]}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex-1 p-6 flex flex-col space-y-4">
                                    <div className="text-xs text-gray-500 flex items-center gap-3">
                                        <span className="flex items-center gap-1">
                                             <Calendar className="w-3.5 h-3.5" />
                                             {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                             <Clock className="w-3.5 h-3.5" />
                                             {post.readTime}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-white transition-colors">
                                        Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

function getGradient(index: number) {
    const gradients = [
        "from-blue-900/40 to-slate-900/40",
        "from-purple-900/40 to-indigo-900/40", 
        "from-emerald-900/40 to-teal-900/40",
        "from-orange-900/40 to-red-900/40",
        "from-pink-900/40 to-rose-900/40",
        "from-cyan-900/40 to-blue-900/40",
    ];
    return gradients[index % gradients.length];
}
