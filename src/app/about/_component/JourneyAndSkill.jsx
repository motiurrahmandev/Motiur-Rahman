"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TECH_STACK } from "../../data/data";
import { GraduationCap, Brain, Wrench } from "lucide-react";

function JourneyAndSkill() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const xRight = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 overflow-hidden">
      {/* Timeline Column */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="w-8 h-8 text-primary" />
          <h3 className="text-2xl font-bold text-white">My Journey</h3>
        </div>
        <div className="relative pl-4 ml-3 space-y-12">
          {/* Animated Timeline Line */}
          <motion.div
            className="absolute left-0 top-0 w-[2px] bg-primary h-full origin-top"
            style={{ scaleY: scrollYProgress }}
          />
          <div className="absolute left-0 top-0 w-[2px] bg-white/10 h-full -z-10" />

          {/* Timeline Item 1 */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute -left-[21px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background-dark group-hover:bg-primary transition-colors shadow-[0_0_10px_rgba(8,247,131,0.5)] z-10" />
            <div className="glass-card p-6 rounded-xl hover:border-primary/30">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h4 className="text-lg font-bold text-white">
                  Senior Developer
                </h4>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                  2022 - Present
                </span>
              </div>
              <h5 className="text-md font-medium text-slate-300 mb-3">
                TechCorp Inc.
              </h5>
              <p className="text-sm text-slate-400 leading-relaxed">
                Leading the frontend team in re-architecting the core product
                dashboard. Implemented a new design system using React and
                Tailwind, improving load times by 40%.
              </p>
            </div>
          </motion.div>
          {/* Timeline Item 2 */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute -left-[21px] top-1.5 h-3 w-3 rounded-full border-2 border-slate-600 bg-background-dark group-hover:border-primary group-hover:bg-primary transition-colors z-10" />
            <div className="glass-card p-6 rounded-xl hover:border-primary/30">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h4 className="text-lg font-bold text-white">UI Designer</h4>
                <span className="text-xs font-bold text-slate-400 bg-white/5 px-2 py-1 rounded border border-white/10">
                  2020 - 2022
                </span>
              </div>
              <h5 className="text-md font-medium text-slate-300 mb-3">
                Studio X
              </h5>
              <p className="text-sm text-slate-400 leading-relaxed">
                Collaborated with cross-functional teams to design intuitive
                user interfaces for mobile and web applications. Created
                high-fidelity prototypes in Figma.
              </p>
            </div>
          </motion.div>
          {/* Timeline Item 3 */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute -left-[21px] top-1.5 h-3 w-3 rounded-full border-2 border-slate-600 bg-background-dark group-hover:border-primary group-hover:bg-primary transition-colors z-10" />
            <div className="glass-card p-6 rounded-xl hover:border-primary/30">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h4 className="text-lg font-bold text-white">
                  Freelance Web Dev
                </h4>
                <span className="text-xs font-bold text-slate-400 bg-white/5 px-2 py-1 rounded border border-white/10">
                  2018 - 2020
                </span>
              </div>
              <h5 className="text-md font-medium text-slate-300 mb-3">
                Self-Employed
              </h5>
              <p className="text-sm text-slate-400 leading-relaxed">
                Delivered custom websites for local businesses. Managed the
                entire lifecycle from concept to deployment using WordPress and
                custom HTML/CSS/JS.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Skills & Tools Column */}
      <div className="flex flex-col gap-12">
        {/* Skills Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Brain className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold text-white">
              Skills & Expertise
            </h3>
          </div>
          <div className="glass-panel p-6 rounded-xl space-y-6">
            {/* Skill 1 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-white">
                  Frontend Development
                </span>
                <span className="text-sm font-bold text-primary">95%</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="bg-primary h-2 rounded-full shadow-[0_0_10px_rgba(8,247,131,0.5)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "95%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
            {/* Skill 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-white">
                  UI/UX Design
                </span>
                <span className="text-sm font-bold text-primary">85%</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="bg-primary h-2 rounded-full shadow-[0_0_10px_rgba(8,247,131,0.5)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
            {/* Skill 3 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-white">
                  Backend (Node.js)
                </span>
                <span className="text-sm font-bold text-primary">70%</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="bg-primary h-2 rounded-full shadow-[0_0_10px_rgba(8,247,131,0.5)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
            {/* Skill 4 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-white">DevOps</span>
                <span className="text-sm font-bold text-primary">60%</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="bg-primary h-2 rounded-full shadow-[0_0_10px_rgba(8,247,131,0.5)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </div>
        </section>
        {/* Tools Grid - Bidirectional Scroll Animation */}
        <section className="overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold text-white">
              Tools & Technologies
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            {/* Moving Left Row */}
            <motion.div
              style={{ x: xLeft }}
              className="flex gap-4 w-max"
            >
              {TECH_STACK.slice(0, 4).map((tech, index) => (
                <div key={index} className="glass-card flex items-center justify-center p-4 rounded-xl gap-3 hover:bg-white/10 group cursor-pointer w-40">
                  <svg className="w-8 h-8 fill-current text-slate-400 group-hover:text-primary transition-colors" viewBox="0 0 24 24">
                    <path d={tech.path} />
                  </svg>
                  <span className="text-sm font-medium text-white">{tech.name}</span>
                </div>
              ))}
              {/* Duplicate for infinite feel (simplified) */}
              {TECH_STACK.slice(0, 4).map((tech, index) => (
                <div key={`dup-${index}`} className="glass-card flex items-center justify-center p-4 rounded-xl gap-3 hover:bg-white/10 group cursor-pointer w-40">
                  <svg className="w-8 h-8 fill-current text-slate-400 group-hover:text-primary transition-colors" viewBox="0 0 24 24">
                    <path d={tech.path} />
                  </svg>
                  <span className="text-sm font-medium text-white">{tech.name}</span>
                </div>
              ))}
            </motion.div>

            {/* Moving Right Row */}
            <motion.div
              style={{ x: xRight }}
              className="flex gap-4 w-max ml-[-100px]" // Initial offset
            >
              {TECH_STACK.slice(4).map((tech, index) => (
                <div key={index} className="glass-card flex items-center justify-center p-4 rounded-xl gap-3 hover:bg-white/10 group cursor-pointer w-40">
                  <svg className="w-8 h-8 fill-current text-slate-400 group-hover:text-primary transition-colors" viewBox="0 0 24 24">
                    <path d={tech.path} />
                  </svg>
                  <span className="text-sm font-medium text-white">{tech.name}</span>
                </div>
              ))}
              {TECH_STACK.slice(4).map((tech, index) => (
                <div key={`dup-${index}`} className="glass-card flex items-center justify-center p-4 rounded-xl gap-3 hover:bg-white/10 group cursor-pointer w-40">
                  <svg className="w-8 h-8 fill-current text-slate-400 group-hover:text-primary transition-colors" viewBox="0 0 24 24">
                    <path d={tech.path} />
                  </svg>
                  <span className="text-sm font-medium text-white">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default JourneyAndSkill;
