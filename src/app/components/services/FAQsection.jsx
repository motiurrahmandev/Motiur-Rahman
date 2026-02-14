"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ_DATA = [
  {
    question: "What is your typical timeline for a project?",
    answer: "A standard brochure website typically takes 2-4 weeks. More complex projects with custom functionality or e-commerce features usually range from 6-12 weeks depending on the scope."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. We offer various maintenance packages that include security updates, content changes, and technical support to ensure your site continues to run smoothly."
  },
  {
    question: "Can you help with branding as well?",
    answer: "Yes, our team includes branding specialists. We can help with logo design, brand guidelines, color palettes, and overall visual identity before we start the development process."
  },
  {
    question: "How do payments work?",
    answer: "We typically require a 50% deposit to secure your slot in our schedule and begin the work. The remaining 50% is due upon project completion and before final launch."
  }
];

const FAQItem = ({ faq, index, isOpen, toggleOpen, itemVariants }) => {
  return (
    <motion.div
      variants={itemVariants}
      className={`glass-panel rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary/40 ring-1 ring-primary/20' : 'hover:border-primary/30'}`}
    >
      <button
        onClick={() => toggleOpen(index)}
        className="w-full flex justify-between items-center p-6 text-left text-white font-medium hover:text-primary transition-colors focus:outline-none"
      >
        {faq.question}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-primary' : 'text-white/60'}`} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-white/60 text-sm leading-relaxed border-t border-white/5 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

function FAQsection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="w-full px-6 lg:px-40 py-20">
      <div className="max-w-[800px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-10 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          {FAQ_DATA.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              toggleOpen={toggleOpen}
              itemVariants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default FAQsection;
