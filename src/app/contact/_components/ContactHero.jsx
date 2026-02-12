import { motion } from "framer-motion";

function ContactHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-start gap-6 mb-16 px-4"
    >
      <motion.div
        variants={itemVariants}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase"
      >
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        Available for New Projects
      </motion.div>
      <motion.h1
        variants={itemVariants}
        className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50"
      >
        LET'S BUILD <br />
        SOMETHING <span className="text-primary">UNIQUE.</span>
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="text-gray-400 text-lg md:text-xl max-w-2xl font-light"
      >
        I’m currently open to freelance work or full-time opportunities. Drop a
        message and let's discuss your next big idea.
      </motion.p>
    </motion.div>
  );
}

export default ContactHero;
