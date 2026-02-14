"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

function PricingTable() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="w-full px-6 lg:px-40 py-20 bg-background-dark/50 border-y border-glass-border">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60"
          >
            Choose the plan that best fits your project needs.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Web Design Plan */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="glass-panel rounded-2xl p-8 flex flex-col hover:bg-white/[0.02] transition-colors duration-300"
          >
            <h3 className="text-lg font-medium text-white/80 mb-2">Web Design</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-3xl font-bold text-white">$1,499</span>
              <span className="text-white/40 text-sm">/ project</span>
            </div>
            <p className="text-white/60 text-sm mb-8">
              Focus on aesthetics and user experience with custom UI/UX design.
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-white/80">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Custom UI/UX Design
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Responsive Prototypes
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Brand Color Palette
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Figma Source Files
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg border border-primary/30 text-primary font-bold hover:bg-primary hover:text-background-dark transition-all duration-300">
              Get Started
            </button>
          </motion.div>

          {/* Frontend Development Plan (Most Popular) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5, scale: 1.06 }}
            className="relative glass-panel rounded-2xl p-8 flex flex-col border-primary/50 shadow-neon transform scale-105 z-10 bg-[#15201b]"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-green-400 text-background-dark text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-lg font-medium text-white mb-2">
              Frontend Dev
            </h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-white">$2,999</span>
              <span className="text-white/40 text-sm">/ project</span>
            </div>
            <p className="text-white/60 text-sm mb-8">
              High-performance React/Next.js development with sleek animations.
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Next.js / React App
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Tailwind CSS Styling
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Framer Motion Animations
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                API Integration
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                SEO Optimization
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg bg-primary text-background-dark font-bold hover:shadow-neon hover:scale-[1.02] transition-all duration-300">
              Book a Call
            </button>
          </motion.div>

          {/* WordPress Development Plan */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="glass-panel rounded-2xl p-8 flex flex-col hover:bg-white/[0.02] transition-colors duration-300"
          >
            <h3 className="text-lg font-medium text-white/80 mb-2">
              WordPress Dev
            </h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-3xl font-bold text-white">$1,999</span>
              <span className="text-white/40 text-sm">/ project</span>
            </div>
            <p className="text-white/60 text-sm mb-8">
              Custom WordPress solutions with easy-to-manage content systems.
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-white/80">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Custom Theme Design
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                E-commerce Integration
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Custom Plugin Setup
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Speed & Security Audit
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg border border-primary/30 text-primary font-bold hover:bg-primary hover:text-background-dark transition-all duration-300">
              Get Quote
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PricingTable;
