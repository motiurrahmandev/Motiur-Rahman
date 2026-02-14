"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '@/app/data/data';
import {
  Code,
  Palette,
  Sparkles,
  Smartphone,
  Search,
  Rocket,
  ArrowRight,
  Terminal
} from 'lucide-react';

const iconMap = {
  Code,
  Palette,
  Sparkles,
  Smartphone,
  Search,
  Rocket,
  Terminal
};

function ServicesGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="w-full px-6 lg:px-40 py-20 bg-background-dark/50 border-t border-glass-border relative">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Core Capabilities
          </h2>
          <p className="text-white/60 max-w-lg">
            Comprehensive digital solutions designed to help your business
            thrive in the modern landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon] || Code;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="glass-panel rounded-2xl p-8 flex flex-col gap-6 group transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.03] hover:border-primary/30 relative overflow-hidden"
              >
                {/* Hover Background Glow */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300 transform group-hover:rotate-6 shadow-neon-sm">
                  <IconComponent size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm group-hover:text-white/80 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                <a
                  className="mt-auto flex items-center text-primary text-sm font-bold gap-2 group/link"
                  href="#"
                >
                  Learn More{" "}
                  <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesGrid;
