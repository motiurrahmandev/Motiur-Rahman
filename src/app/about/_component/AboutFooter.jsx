"use client";

import React, { useState, useRef } from "react";

function AboutFooter() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <section
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="glass-panel rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden group border border-primary/20 transition-colors duration-300"
    >
      {/* Mouse following gradient */}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(8,247,131,0.15), transparent 40%)`,
        }}
      />

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-white">
          Ready to start a project?
        </h2>
        <p className="text-slate-300">
          I'm currently available for freelance work and open to full-time
          opportunities. If you have a project that needs some creative touch,
          I'd love to hear about it.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <button className="bg-primary hover:bg-emerald-400 text-background-dark font-bold py-3 px-8 rounded-lg transition-colors shadow-[0_0_20px_rgba(8,247,131,0.3)] hover:shadow-[0_0_30px_rgba(8,247,131,0.5)]">
            Get in Touch
          </button>
          <button className="bg-transparent border border-white/20 hover:border-white/50 text-white font-medium py-3 px-8 rounded-lg transition-colors">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutFooter;
