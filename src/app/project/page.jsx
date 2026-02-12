"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, Plus, ExternalLink } from "lucide-react";
import { PROJECTS } from "../data/data";

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

function ProjectPage() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const categories = ["All Projects", ...new Set(PROJECTS.map((p) => p.category))];

  const filteredProjects =
    activeFilter === "All Projects"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background-dark">
      <main className="flex-grow pt-28 px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col gap-10"
          initial="hidden"
          animate="visible"
        >
          {/* Hero / Intro */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div className="flex flex-col gap-4 max-w-2xl">
              <motion.h1
                variants={itemVariants}
                custom={0}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] text-white"
              >
                Selected <span className="text-primary">Works</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                custom={1}
                className="text-slate-400 text-lg md:text-xl max-w-lg"
              >
                A showcase of digital products, brand identities, and
                interactive experiences crafted with precision.
              </motion.p>
            </div>
            <motion.div variants={itemVariants} custom={2} className="flex gap-4">
              <div className="flex flex-col items-end">
                <span className="text-3xl font-bold text-primary">{PROJECTS.length}</span>
                <span className="text-xs uppercase tracking-wider font-medium text-slate-500">
                  Projects
                </span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col items-end">
                <span className="text-3xl font-bold text-white">5+</span>
                <span className="text-xs uppercase tracking-wider font-medium text-slate-500">
                  Years Exp
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Filters */}
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
                  className={`px-5 py-2 rounded-lg font-medium text-sm transition-all active:scale-95 ${activeFilter === category
                    ? "bg-primary text-background-dark font-bold shadow-[0_0_15px_rgba(8,247,131,0.3)]"
                    : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                    }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Project Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredProjects.map((project, index) => (
                <Link key={project.id} href={`/project/${project.id}`}>
                  <motion.div
                    layout
                    variants={itemVariants}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="group relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-xl bg-neutral-900 border border-white/5"
                  >
                    {/* Image */}
                    <div
                      className="h-full w-full transition-transform duration-700 ease-in-out group-hover:scale-110 bg-cover bg-center"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    />

                    {/* Overlay/Glass */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-70" />

                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                      <div className="mb-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-primary/20 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary border border-primary/20">
                          {project.category}
                        </span>
                        {project.tags?.slice(0, 2).map(tag => (
                          <span key={tag} className="rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] font-medium text-white/70 border border-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="mt-2 text-sm text-slate-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {project.description}
                          </p>
                        </div>
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-2 hover:!bg-primary">
                          <ArrowUpRight size={20} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More */}
          <motion.div
            variants={itemVariants}
            custom={0}
            className="flex justify-center pt-12"
          >
            <button className="relative overflow-hidden rounded-xl bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/10 border border-white/10 hover:border-primary/30 group">
              <span className="relative z-10 flex items-center gap-2">
                Load More Projects
                <ChevronDown size={18} className="transition-transform group-hover:translate-y-1" />
              </span>
            </button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

export default ProjectPage;
