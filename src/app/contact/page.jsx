"use client";

import { motion, AnimatePresence } from "framer-motion";
import ContactHero from "./_components/ContactHero";
import ContactInfo from "./_components/ContactInfo";

function ContactPage() {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex-grow py-32 flex flex-col items-center justify-center px-4 md:px-8 lg:py-24"
      >
        <div className="w-full max-w-7xl">
          <ContactHero />
          <ContactInfo />
        </div>
      </motion.main>
    </AnimatePresence>
  );
}

export default ContactPage;
