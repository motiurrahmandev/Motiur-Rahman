"use client";

import React from 'react';
import { TESTIMONIALS } from '../data/data';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  // Duplicate testimonials to ensure enough content for scrolling
  // 3 sets is usually safe
  const scrollContent = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-24 overflow-hidden bg-black/10">
      <div className="container mx-auto px-4 sm:px-6 mb-12">
        <h2 className="text-4xl font-bold text-white text-center">Client Words</h2>
      </div>

      <div className="relative w-full overflow-hidden group">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background-dark to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background-dark to-transparent z-20 pointer-events-none"></div>

        <div
          className="flex py-2 gap-6 w-max animate-scroll hover:[animation-play-state:paused]"
        >
          {scrollContent.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="glass-panel p-8 rounded-2xl flex-shrink-0 w-[350px] md:w-[450px] relative border-glow hover:bg-white/5 transition-all duration-300 hover:rotate-1"
            >
              <Quote className="text-primary/20 absolute top-6 right-6" size={48} />
              <p className="text-white/80 text-lg leading-relaxed mb-8 relative z-10">"{t.quote.replace(/"/g, '')}"</p>

              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full bg-cover bg-center bg-gray-600"
                  style={{ backgroundImage: `url('${t.image}')` }}
                ></div>
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-primary text-sm">{t.role} @ {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;