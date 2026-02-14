"use client";

import React, { useEffect, useRef, useState } from 'react';
import { HERO_STATS } from '../data/data';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate, animate } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';

const Counter = ({ from, to }) => {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;
    const controls = animate(from, to, {
      duration: 2,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      },
    });
    return () => controls.stop();
  }, [from, to]);

  return <span ref={nodeRef} />;
};

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;

    mouseX.set(x);
    mouseY.set(y);
  };

  const letters = "Motiur Rahman".split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <section
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
      id="about"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: useMotionTemplate`radial-gradient(circle at ${mouseX.get() * 100}% ${mouseY.get() * 100}%, rgba(6, 214, 112, 0.05) 0%, transparent 40%)`
        }}
      />

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [null, Math.random() * -100],
              x: [null, Math.random() * 50 - 25],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
            }}
          />
        ))}
      </div>

      {/* Floating Blobs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold mb-8 hover:bg-white/10 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          AVAILABLE FOR FREELANCE
        </motion.div>

        {/* Title */}
        <div className="mb-6 perspective-1000">
          <motion.h1 variants={itemVariants} className="font-black leading-none tracking-tighter text-white mix-blend-overlay opacity-90 uppercase flex flex-col items-center cursor-default">
            <div className="flex flex-wrap justify-center overflow-hidden">
              {"Motiur".split("").map((char, i) => (
                <motion.span
                  key={i}
                  whileHover={{ y: -20, color: "#06d670" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-block text-6xl md:text-8xl lg:text-[clamp(80px,10vw,140px)]"
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center overflow-hidden">
              {"Rahman".split("").map((char, i) => (
                <motion.span
                  key={i}
                  whileHover={{ y: -20, color: "#06d670" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-block text-6xl md:text-8xl lg:text-[clamp(100px,12vw,160px)]"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-light text-white/60 max-w-2xl leading-relaxed mb-10">
          I design and build high-converting, modern web experiences using  <span className="text-primary font-medium">WordPress and modern frontend technologies</span>  — helping businesses grow online today and scale for tomorrow.
        </motion.h2>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#work"
            className="bg-primary hover:bg-[#06d670] text-black text-base font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
          >
            View Featured Work
            <ArrowDown size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="glass-panel text-white text-base font-bold px-8 py-4 rounded-xl transition-all border-glow flex items-center justify-center gap-2"
          >
            Download Resume
            <Download size={20} />
          </motion.a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-white/10 pt-8 w-full max-w-4xl"
        >
          {HERO_STATS.map((stat, index) => (
            <div key={index} className="flex flex-col items-center group">
              <span className="text-3xl md:text-4xl font-bold text-white group-hover:text-primary transition-colors flex items-center">
                {/* Only animate number parts if possible, simplified for now: plain counter */}
                {/* Checking if value is purely numeric or has symbols */}
                {stat.value.includes('+') || stat.value.includes('%') ? (
                  <>
                    <Counter from={0} to={parseInt(stat.value)} />
                    {stat.value.replace(/[0-9]/g, '')}
                  </>
                ) : (
                  <Counter from={0} to={parseInt(stat.value)} />
                )}
              </span>
              <span className="text-xs md:text-sm text-white/40 uppercase tracking-widest mt-2 font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;