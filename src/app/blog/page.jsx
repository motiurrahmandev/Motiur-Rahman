"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, User, ArrowRight, ChevronDown, Calendar, Search } from "lucide-react";
import { BLOG_POSTS } from "../data/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.05,
    },
  }),
};

function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All Posts", ...new Set(BLOG_POSTS.map((p) => p.category))];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = activeFilter === "All Posts" || post.category === activeFilter;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background-dark">
      <main className="flex-grow pt-28 px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col gap-10"
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="flex flex-col gap-4 max-w-2xl">
              <motion.h1
                variants={itemVariants}
                custom={0}
                className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] text-white"
              >
                Journal <span className="text-primary">&</span> Perspectives
              </motion.h1>
              <motion.p
                variants={itemVariants}
                custom={1}
                className="text-slate-400 text-lg md:text-xl max-w-lg"
              >
                Insights, tutorials, and thoughts on the evolving landscape of
                design, technology, and artificial intelligence.
              </motion.p>
            </div>

            {/* Search Input */}
            <motion.div
              variants={itemVariants}
              custom={2}
              className="relative w-full md:w-80 group"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
              />
            </motion.div>
          </motion.div>

          {/* Filters Sticky Bar */}
          <div className=" top-24 z-40 py-4 -mx-4 px-4 bg-background-dark/80 backdrop-blur-md md:static md:bg-transparent md:backdrop-blur-none md:p-0 md:m-0">
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-3 items-center"
            >
              {categories.map((category, idx) => (
                <motion.button
                  key={category}
                  variants={itemVariants}
                  custom={idx}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2 rounded-lg font-bold text-sm transition-all active:scale-95 ${activeFilter === category
                    ? "bg-primary text-background-dark shadow-[0_0_15px_rgba(8,247,131,0.3)]"
                    : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                    }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Blog Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  layout
                  variants={itemVariants}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="h-full"
                >
                  <Link href={`/blog/${post.id}`}>
                    <article
                      className="group flex flex-col h-full glass-panel rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 cursor-pointer"
                    >
                      {/* Image Wrapper */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <div
                          className="h-full w-full bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                          style={{ backgroundImage: `url('${post.image}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-60" />

                        <div className="absolute top-4 left-4">
                          <span className="bg-primary/20 backdrop-blur-md border border-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest leading-none">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-4 p-6 flex-grow">
                        <div className="flex items-center gap-4 text-slate-500 text-xs font-medium">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={12} className="text-primary" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock size={12} className="text-primary" />
                            {post.readingTime}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/20">
                              <User size={12} className="text-primary" />
                            </div>
                            <span className="text-xs font-semibold text-slate-300">
                              {post.author}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-primary text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
                            Read More <ArrowRight size={14} />
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results Fallback */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-slate-400">Try adjusting your search or filters to find what you're looking for.</p>
              <button
                onClick={() => { setActiveFilter("All Posts"); setSearchQuery(""); }}
                className="mt-6 text-primary font-bold uppercase tracking-widest text-sm hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}

          {/* Load More (Visual only for now) */}
          <motion.div
            variants={itemVariants}
            custom={0}
            className="flex justify-center pt-12"
          >
            <button className="relative overflow-hidden rounded-xl bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/10 border border-white/10 hover:border-primary/30 group">
              <span className="relative z-10 flex items-center gap-2">
                Show Older Articles
                <ChevronDown size={18} className="transition-transform group-hover:translate-y-1" />
              </span>
            </button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

export default BlogPage;
