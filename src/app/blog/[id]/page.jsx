"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
    ArrowLeft,
    ArrowRight,
    Calendar,
    Clock,
    User,
    Share2,
    MessageCircle,
    ThumbsUp,
    ChevronRight
} from 'lucide-react';
import { BLOG_POSTS } from '../../data/data';

function BlogDetailPage() {
    const { id } = useParams();
    const post = BLOG_POSTS.find((p) => p.id === parseInt(id)) || BLOG_POSTS[0];

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    if (!post) return null;

    return (
        <div className="bg-background-dark min-h-screen pb-20">
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
                style={{ scaleX }}
            />

            {/* Hero Header */}
            <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-4 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumbs & Back */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <Link
                            href="/blog"
                            className="group flex items-center gap-2 text-slate-400 hover:text-primary transition-colors pr-4 border-r border-white/10"
                        >
                            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                            <span className="text-xs font-bold uppercase tracking-widest">Journal</span>
                        </Link>
                        <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                            <span>Home</span>
                            <ChevronRight size={12} />
                            <span>Blog</span>
                            <ChevronRight size={12} />
                            <span className="text-slate-300">{post.category}</span>
                        </div>
                    </motion.div>

                    {/* Title & Meta */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6">
                            {post.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 py-8 border-y border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                    <User size={18} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-0.5">Author</p>
                                    <p className="text-sm font-bold text-white">{post.author}</p>
                                </div>
                            </div>

                            <div className="w-px h-8 bg-white/5 hidden sm:block" />

                            <div className="flex items-center gap-3 text-slate-400">
                                <Calendar size={18} className="text-primary" />
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-0.5">Published</p>
                                    <p className="text-sm font-bold text-slate-200">{post.date}</p>
                                </div>
                            </div>

                            <div className="w-px h-8 bg-white/5 hidden sm:block" />

                            <div className="flex items-center gap-3 text-slate-400">
                                <Clock size={18} className="text-primary" />
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-0.5">Read Time</p>
                                    <p className="text-sm font-bold text-slate-200">{post.readingTime}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="max-w-5xl mx-auto px-4 mb-16"
            >
                <div className="aspect-[21/9] rounded-3xl overflow-hidden glass-panel border border-white/10 relative shadow-2xl">
                    <div
                        className="w-full h-full bg-cover bg-center grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
                        style={{ backgroundImage: `url('${post.image}')` }}
                    />
                </div>
            </motion.div>

            {/* Content Section */}
            <section className="px-4 relative">
                <div className="max-w-3xl mx-auto">
                    {/* Post Content */}
                    <div className="prose prose-invert prose-primary max-w-none prose-p:text-slate-400 prose-p:text-lg prose-p:leading-relaxed prose-headings:text-white prose-headings:font-black prose-strong:text-white">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="text-xl text-white font-medium leading-relaxed mb-8"
                        >
                            {post.excerpt}
                        </motion.p>

                        <div className="text-slate-400 text-lg leading-relaxed space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                {post.content}
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </motion.p>

                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="text-3xl font-black text-white mt-12 mb-6"
                            >
                                Key Insights
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                            >
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="bg-white/5 border-l-4 border-primary p-8 rounded-r-2xl my-10 italic text-white text-xl shadow-2xl shadow-primary/5"
                            >
                                "Modern web development is no longer about just writing code; it's about composing intelligent systems that adapt to user needs in real-time."
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                            >
                                Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
                            </motion.p>
                        </div>
                    </div>

                    {/* Social Interaction Bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-16 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-6"
                    >
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 group text-slate-400 hover:text-primary transition-colors px-4 py-2 bg-white/5 rounded-full border border-white/5">
                                <ThumbsUp size={18} className="group-active:scale-125 transition-transform" />
                                <span className="text-sm font-bold uppercase tracking-widest">Helpful</span>
                            </button>
                            <button className="flex items-center gap-2 group text-slate-400 hover:text-white transition-colors px-4 py-2 bg-white/5 rounded-full border border-white/5">
                                <MessageCircle size={18} />
                                <span className="text-sm font-bold uppercase tracking-widest">Comment</span>
                            </button>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-[10px] uppercase font-black text-slate-500 tracking-widest">Share this post:</span>
                            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-white/10 transition-all border border-white/5">
                                <Share2 size={18} />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Sidebar (Desktop Only) */}
                <aside className="hidden xl:block absolute top-0 right-[calc(50%+500px)] w-20 sticky top-40 h-fit">
                    {/* Sidebar content could go here, like share buttons */}
                </aside>
            </section>

            {/* Related Posts Section */}
            <section className="max-w-7xl mx-auto px-4 mt-20 pt-20 border-t border-white/5">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            Related <span className="text-primary">Articles</span>
                        </h2>
                        <p className="text-slate-400 max-w-md">
                            Expand your knowledge with more insights and perspectives from our journal.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="group flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm"
                    >
                        View All Posts
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {BLOG_POSTS
                        .filter(p => p.id !== post.id)
                        .sort((a, b) => {
                            if (a.category === post.category && b.category !== post.category) return -1;
                            if (a.category !== post.category && b.category === post.category) return 1;
                            return 0;
                        })
                        .slice(0, 3)
                        .map((relatedPost, index) => (
                            <motion.div
                                key={relatedPost.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link href={`/blog/${relatedPost.id}`}>
                                    <article className="group glass-panel rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500">
                                        <div className="relative aspect-[16/10] overflow-hidden">
                                            <div
                                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                                style={{ backgroundImage: `url('${relatedPost.image}')` }}
                                            />
                                            <div className="absolute inset-0 bg-background-dark/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <div className="p-6">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">
                                                {relatedPost.category}
                                            </span>
                                            <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors line-clamp-2 mb-4">
                                                {relatedPost.title}
                                            </h3>
                                            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                                <span>{relatedPost.date}</span>
                                                <span className="flex items-center gap-1">
                                                    <ArrowRight size={12} />
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                </div>
            </section>
        </div>
    );
}

export default BlogDetailPage;
