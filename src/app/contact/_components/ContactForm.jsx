import { motion } from "framer-motion";
import { Send } from "lucide-react";

function ContactForm() {
  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.form
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6 relative z-10"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <label
            className="text-xs font-bold text-gray-400 uppercase tracking-widest"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="glass-panel w-full rounded-xl px-4 py-3.5 bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium"
            id="name"
            placeholder="John Doe"
            type="text"
          />
        </motion.div>
        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <label
            className="text-xs font-bold text-gray-400 uppercase tracking-widest"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="glass-panel w-full rounded-xl px-4 py-3.5 bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium"
            id="email"
            placeholder="john@example.com"
            type="email"
          />
        </motion.div>
      </div>
      <motion.div variants={itemVariants} className="flex flex-col gap-2">
        <label
          className="text-xs font-bold text-gray-400 uppercase tracking-widest"
          htmlFor="subject"
        >
          Subject / Budget
        </label>
        <select
          className="glass-panel w-full rounded-xl px-4 py-3.5 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium appearance-none cursor-pointer"
          id="subject"
        >
          <option className="bg-[#1b2721] text-gray-300">
            General Inquiry
          </option>
          <option className="bg-[#1b2721] text-gray-300">
            Project Proposal ($1k - $5k)
          </option>
          <option className="bg-[#1b2721] text-gray-300">
            Project Proposal ($5k - $10k)
          </option>
          <option className="bg-[#1b2721] text-gray-300">
            Project Proposal ($10k+)
          </option>
        </select>
      </motion.div>
      <motion.div variants={itemVariants} className="flex flex-col gap-2">
        <label
          className="text-xs font-bold text-gray-400 uppercase tracking-widest"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="glass-panel w-full rounded-xl px-4 py-3.5 bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium resize-none"
          id="message"
          placeholder="Tell me about your project..."
          rows={5}
        />
      </motion.div>
      <motion.div variants={itemVariants} className="pt-2">
        <button
          className="w-full md:w-auto bg-primary hover:bg-primary/90 text-background-dark font-black py-4 px-10 rounded-xl shadow-[0_0_20px_rgba(8,247,131,0.2)] hover:shadow-[0_0_30px_rgba(8,247,131,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95"
          type="submit"
        >
          <span className="uppercase tracking-[0.2em] text-xs">SEND MESSAGE</span>
          <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </motion.div>
    </motion.form>
  );
}

export default ContactForm;
