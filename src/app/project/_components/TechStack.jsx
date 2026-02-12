import { motion } from "framer-motion";
import {
  Code,
  Layout,
  Terminal,
  Database,
  Palette,
  BarChart3,
  Cpu,
  Zap,
  Globe,
  Layers
} from "lucide-react";

const iconMap = {
  "React.js": <Code className="w-9 h-9 text-blue-400" />,
  "Tailwind CSS": <Layout className="w-9 h-9 text-white" />,
  "Node.js": <Terminal className="w-9 h-9 text-green-500" />,
  "Firebase": <Database className="w-9 h-9 text-yellow-400" />,
  "Figma": <Palette className="w-9 h-9 text-purple-400" />,
  "D3.js": <BarChart3 className="w-9 h-9 text-orange-400" />,
  "Next.js": <Zap className="w-9 h-9 text-white" />,
  "PostgreSQL": <Database className="w-9 h-9 text-blue-500" />,
  "MQTT": <Cpu className="w-9 h-9 text-primary" />,
  "default": <Layers className="w-9 h-9 text-gray-400" />
};

function TechStack({ project }) {
  if (!project) return null;

  const stack = project.tags || [];

  return (
    <section className="py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xl font-bold text-white mb-8 border-l-4 border-primary pl-4"
        >
          Tech Stack & Tools
        </motion.h3>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {stack.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel hover:bg-white/5 transition-colors p-6 rounded-xl flex flex-col items-center justify-center gap-3 text-center group border border-white/5 hover:border-primary/20"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {iconMap[item] || iconMap.default}
              </div>
              <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
