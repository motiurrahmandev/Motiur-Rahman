import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

function ProjectGelary({ project }) {
  if (!project) return null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12"
        >
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Visual Showcase
            </h2>
            <p className="text-gray-400 max-w-2xl text-lg">
              Explore the interface design and user experience of {project.title}.
            </p>
          </div>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full border border-glass-border bg-glass-bg flex items-center justify-center text-white hover:bg-white/10 transition-colors shadow-lg"
            >
              <ArrowLeft size={22} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full border border-primary bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors shadow-lg shadow-primary/10"
            >
              <ArrowRight size={22} />
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 + 0.2 }}
              className="group relative aspect-video rounded-xl overflow-hidden glass-panel border border-white/5 cursor-zoom-in"
            >
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                <span className="text-white font-bold bg-black/40 px-4 py-2 rounded-full backdrop-blur-md">View Larger</span>
              </div>
              <div
                className="bg-cover bg-center h-full w-full transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${project.image}')`,
                }}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Full width feature image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 relative rounded-2xl overflow-hidden glass-panel border border-white/10 aspect-[21/9]"
        >
          <div
            className="bg-cover bg-center h-full w-full grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
            style={{
              backgroundImage: `url('${project.image}')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
            <p className="text-white/60 text-sm font-medium italic">
              * High-fidelity dashboard overview and interface components
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectGelary;
