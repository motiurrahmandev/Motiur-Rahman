"use client";

import React from 'react';
import { SERVICES } from '../data/data';
import { motion } from 'framer-motion';
import { Palette, Terminal, Wand2, CheckCircle2, Code } from 'lucide-react';

const Services = () => {
  const IconMap = {
    Palette: Palette,
    Terminal: Terminal,
    Wand2: Wand2,
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
    <section className="py-24 relative overflow-hidden" id="services">
      {/* Background Blob */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">What I Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Services & Expertise</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => {
            const Icon = IconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                layoutId={`service-${service.id}`}
                variants={itemVariants}
                className="glass-panel p-10 rounded-2xl service-glow transition-all duration-300 group hover:-translate-y-2 flex flex-col h-full relative overflow-hidden"
              >
                {service.title === 'Web Development' && (
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                )}

                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-colors text-primary relative z-10">
                  {Icon && <Icon size={32} />}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{service.title}</h3>
                <p className="text-white/60 mb-8 leading-relaxed flex-grow relative z-10">{service.description}</p>

                <ul className="space-y-3 relative z-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                      <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;