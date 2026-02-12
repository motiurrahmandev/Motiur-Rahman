"use client";



import React from 'react';
import { PROCESS_STEPS } from '../data/data';
import { motion } from 'framer-motion';
import { Search, Lightbulb, PenTool, Code } from 'lucide-react';

const Process = () => {
  const IconMap = {
    Search: Search,
    Lightbulb: Lightbulb,
    PenTool: PenTool,
    Code: Code
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-24 bg-black/20 overflow-hidden" id="process">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">Workflow</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">How I bring ideas to life</h2>
        </motion.div>

        <div className="relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10"
          >
            {PROCESS_STEPS.map((step) => {
              const Icon = IconMap[step.icon];
              return (
                <motion.div
                  key={step.id}
                  layoutId={`process-${step.id}`}
                  variants={itemVariants}
                  className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-white/5 transition-colors"
                >
                  <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(8,247,131,0.1)] group-hover:border-primary/50 transition-colors relative z-10 bg-background-dark">
                    {Icon && <Icon className="text-primary" size={32} />}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-white/60">{step.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;