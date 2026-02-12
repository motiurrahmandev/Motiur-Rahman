import { motion } from "framer-motion";
import Link from "next/link";
import { Rocket, Code, ArrowLeft } from "lucide-react";

function Hero({ project }) {
  if (!project) return null;

  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col gap-6 pt-4"
          >
            {/* Back Button */}
            <Link
              href="/project"
              className="group flex items-center gap-2 text-slate-400 hover:text-primary transition-colors mb-2 w-fit"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              <span className="text-xs font-bold uppercase tracking-widest">Back to Projects</span>
            </Link>

            <div className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass-bg px-3 py-1 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">
                Case Study • {new Date().getFullYear()}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              {project.title} <span className="text-primary">{project.type?.split(' ').pop() || 'V1'}</span>
            </h1>

            <p className="text-lg text-gray-400 font-normal leading-relaxed max-w-lg">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="neon-glow flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-bold text-background-dark transition-all"
              >
                <Rocket size={20} />
                Live Preview
              </motion.button>
              <motion.button
                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.98 }}
                className="flex h-12 items-center justify-center gap-2 rounded-lg border border-glass-border bg-glass-bg px-6 text-base font-bold text-white transition-all shadow-lg shadow-black/20"
              >
                <Code size={20} />
                View Code
              </motion.button>
            </div>

            {/* Roles / Timeline Grid */}
            <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-glass-border">
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">
                  Category
                </h3>
                <p className="text-white font-semibold">{project.category}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">
                  Type
                </h3>
                <p className="text-white font-semibold">{project.type}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">
                  Tech Stack
                </h3>
                <p className="text-white font-semibold">{project.tags?.slice(0, 2).join(', ')}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">
                  Platform
                </h3>
                <p className="text-white font-semibold">Web & Mobile</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 relative group perspective-1000"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
            <div className="relative glass-panel rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
              <div className="absolute top-0 left-0 w-full h-8 bg-black/40 flex items-center gap-2 px-4 border-b border-white/5 z-20">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div
                className="bg-cover bg-center h-[400px] md:h-[500px] w-full pt-8 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                style={{ backgroundImage: `url('${project.image}')` }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
