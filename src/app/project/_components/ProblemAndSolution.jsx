import { motion } from "framer-motion";
import { AlertTriangle, XCircle, Lightbulb, CheckCircle } from "lucide-react";

function ProblemAndSolution({ project }) {
  if (!project) return null;

  const challenge = project.challenge || {
    title: "Project Hurdles",
    description: "Every great project comes with unique challenges that require creative problem-solving and technical expertise.",
    points: ["Performance optimization", "Scalability requirements"]
  };

  const solution = project.solution || {
    title: "Strategic Resolution",
    description: "We implemented a robust architecture and clean design patterns to ensure the project met all its core objectives.",
    points: ["Modular architecture", "Optimized user experience"]
  };

  return (
    <section className="py-20 bg-background-dark/50 border-y border-glass-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            The Challenge & Solution
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg mx-auto md:mx-0">
            We identified key friction points in the user journey and
            implemented a streamlined architecture to solve them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problem Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel p-8 rounded-xl border-l-4 border-l-red-500/50 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <AlertTriangle className="w-[120px] h-[120px] text-red-500" />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 text-red-400 mb-4">
                <XCircle size={18} />
                <span className="font-bold uppercase tracking-wider text-sm">
                  The Problem
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {challenge.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {challenge.description}
              </p>
              <ul className="space-y-2 text-gray-500 text-sm">
                {challenge.points?.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-panel p-8 rounded-xl border-l-4 border-l-primary relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Lightbulb className="w-[120px] h-[120px] text-primary" />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 text-primary mb-4">
                <CheckCircle size={18} />
                <span className="font-bold uppercase tracking-wider text-sm">
                  The Solution
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {solution.description}
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                {solution.points?.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-white">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ProblemAndSolution;
