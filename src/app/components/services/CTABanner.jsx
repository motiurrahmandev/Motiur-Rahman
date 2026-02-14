"use client";

import React from 'react';
import { motion } from 'framer-motion';

function CTABanner() {
  return (
    <section className="w-full px-6 lg:px-40 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[1200px] mx-auto relative rounded-3xl overflow-hidden p-12 lg:p-20 text-center border border-primary/20 bg-gradient-to-b from-[#1b2721] to-[#111815]"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Start?</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            Let's collaborate to build something extraordinary. Transform your digital presence with our expert team today.
          </p>
          <button className="bg-primary text-background-dark font-bold h-14 px-10 rounded-xl text-lg hover:shadow-neon hover:scale-105 transition-all duration-300">
            Get a Free Consultation
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default CTABanner;