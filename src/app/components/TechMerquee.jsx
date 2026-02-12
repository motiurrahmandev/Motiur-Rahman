import React from 'react';
import { TECH_STACK } from '../data/data';

const TechMarquee = () => {
  return (
    <div className="w-full bg-black/30 border-y border-white/5 py-8 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background-dark to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background-dark to-transparent z-10 pointer-events-none"></div>
      <div className="flex w-[200%] animate-scroll">
        {/* First copy */}
        <div className="flex justify-around w-1/2 items-center text-white/30 text-2xl font-bold gap-16 px-8 whitespace-nowrap">
          {TECH_STACK.map((tech, i) => (
            <span key={`tech-1-${i}`} className="flex items-center gap-2 hover:text-primary transition-colors cursor-default group">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-current text-white/40 group-hover:text-primary transition-colors"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={tech.path} />
              </svg>
              {tech.name}
            </span>
          ))}
        </div>
        {/* Duplicate copy for seamless loop */}
        <div className="flex justify-around w-1/2 items-center text-white/30 text-2xl font-bold gap-16 px-8 whitespace-nowrap">
          {TECH_STACK.map((tech, i) => (
            <span key={`tech-2-${i}`} className="flex items-center gap-2 hover:text-primary transition-colors cursor-default group">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-current text-white/40 group-hover:text-primary transition-colors"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={tech.path} />
              </svg>
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;