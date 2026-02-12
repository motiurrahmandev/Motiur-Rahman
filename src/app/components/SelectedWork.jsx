"use client";

import React from 'react';
import { PROJECTS } from '../data/data';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SelectedWork = () => {
  const featuredProjects = PROJECTS.filter(p => p.featured).slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-24 relative overflow-hidden" id="work">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <div className="max-w-2xl">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Selected Portfolio
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Featured <span className="text-primary">Works</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-slate-400 text-lg md:text-xl font-medium max-w-lg leading-relaxed">
              A curated selection of digital products that demonstrate my passion for high-performance and aesthetic engineering.
            </motion.p>
          </div>
          <motion.div variants={itemVariants}>
            <Link href="/project" className="group flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs py-4 px-8 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all hover:bg-white/10">
              Explore All <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`group relative rounded-3xl overflow-hidden glass-panel border border-white/5 hover:border-primary/30 transition-all duration-700 h-[450px] md:h-[500px] ${index === 0 ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              <Link href={`/project/${project.id}`}>
                {/* Background Image Wrapper */}
                <div className="absolute inset-0 z-0 h-full w-full">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-1000 ease-in-out group-hover:scale-105"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/95 via-background-dark/40 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-70" />
                </div>

                {/* Card Content */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-12">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest leading-none">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-[10px] font-black uppercase tracking-widest leading-none">
                        {project.type}
                      </span>
                    </div>

                    <div className="flex items-end justify-between gap-6">
                      <div className="max-w-xl">
                        <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-slate-300 text-base md:text-lg font-medium line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                          {project.description}
                        </p>
                      </div>

                      <div className="w-14 h-14 rounded-2xl bg-primary text-background-dark flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-[0_0_30px_rgba(8,247,131,0.4)]">
                        <ArrowUpRight size={28} strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SelectedWork;
