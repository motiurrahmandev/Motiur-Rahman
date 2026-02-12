"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Bio from './_component/Bio';
import AboutFooter from './_component/AboutFooter';
import JourneyAndSkill from './_component/JourneyAndSkill';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] // Custom ease curve for smooth motion
    }
  }
};

function AboutPage() {
  return (
    <motion.div
      className='flex-grow w-full max-w-7xl mx-auto px-6 py-24 flex flex-col gap-20'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Bio />
      </motion.div>

      <motion.div variants={itemVariants}>
        <JourneyAndSkill />
      </motion.div>

      <motion.div variants={itemVariants}>
        <AboutFooter />
      </motion.div>
    </motion.div>
  );
}

export default AboutPage;