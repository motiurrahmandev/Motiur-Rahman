"use client";

import { motion } from "framer-motion";
import { Hand, MapPin, Mail, Globe } from "lucide-react";

function Bio() {
  const imageVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const contentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      <motion.div
        className="lg:col-span-5 relative group"
        variants={imageVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Abstract frame decoration */}
        <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl translate-x-3 translate-y-3 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden glass-card p-2">
          <div
            className="w-full h-full bg-cover bg-center rounded-xl"
            data-alt="Portrait of a smiling professional male developer in a modern setting"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJallmOJTKC6WbYtjzovwsnzJRVR_UOneA6orUk6biuaRt7GxpCdGjdTiohqYD7eC2mGcrtrglQIWdssHu_p4Bw7UhgZxjKwIgIIgrrLQJdsVYARu6RJnha5_0-C7EROnTf3_YDve-I1_eyyCGGKMRxpXxEJyzSyaWAtQ9QJPYLS-uzrAx4IgiJLhrJzylekRvIejl0wba3QrJgHHOctqVf1XXTyU4KIKf-xIpuYVWdxBiETIa-GGPDtNiZcezH_H9VtN0Yz8aREZz')",
            }}
          />
          {/* Floating badge */}
          <div className="absolute bottom-6 right-6 glass-panel px-4 py-2 rounded-lg flex items-center gap-2 border border-white/10 shadow-xl">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Open to work
            </span>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="lg:col-span-7 flex flex-col gap-6"
        variants={contentVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariant} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
          <Hand className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium text-primary uppercase tracking-wide">
            Hello, I'm John
          </span>
        </motion.div>
        <motion.h2 variants={itemVariant} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
          Designing the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
            future
          </span>
          ,<br />
          one pixel at a time.
        </motion.h2>
        <motion.div variants={itemVariant} className="glass-panel p-6 rounded-xl border border-white/5 space-y-4">
          <p className="text-slate-300 text-lg leading-relaxed">
            I am a multidisciplinary developer and designer based in San
            Francisco with a passion for building seamless digital experiences.
            My work bridges the gap between functional engineering and aesthetic
            design.
          </p>
          <p className="text-slate-400 leading-relaxed">
            With over 5 years of experience in the tech industry, I've helped
            startups and established companies launch products that users love.
            I believe in clean code, accessible interfaces, and user-centric
            problem solving.
          </p>
        </motion.div>
        <motion.div variants={itemVariant} className="flex flex-wrap gap-4 pt-2">
          <div className="flex items-center gap-3 glass-card px-4 py-3 rounded-lg">
            <MapPin className="w-5 h-5 text-primary" />
            <div className="flex flex-col">
              <span className="text-xs text-slate-400">Location</span>
              <span className="text-sm font-semibold text-white">
                San Francisco, CA
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 glass-card px-4 py-3 rounded-lg">
            <Mail className="w-5 h-5 text-primary" />
            <div className="flex flex-col">
              <span className="text-xs text-slate-400">Email</span>
              <span className="text-sm font-semibold text-white">
                hello@johndoe.dev
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 glass-card px-4 py-3 rounded-lg">
            <Globe className="w-5 h-5 text-primary" />
            <div className="flex flex-col">
              <span className="text-xs text-slate-400">Website</span>
              <span className="text-sm font-semibold text-white">
                johndoe.dev
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Bio;
