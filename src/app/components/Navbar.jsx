"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed w-full top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="glass-nav rounded-full px-2 sm:px-4 py-2 backdrop-blur-sm flex items-center justify-between gap-4 sm:gap-8 shadow-2xl w-full max-w-6xl border border-white/10"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0 ml-2">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center text-black shadow-[0_0_15px_rgba(8,247,131,0.4)]"
          >
            <Terminal size={16} className="sm:w-5 sm:h-5" />
          </motion.div>
          <span className="font-bold text-base sm:text-lg tracking-tight group-hover:text-primary transition-colors">
            JD
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div
          className="hidden lg:flex items-center gap-1"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {NAV_LINKS.map((link, index) => {
            const isActive = pathname === link.href;
            const isHovered = hoveredIndex === index;

            return (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${isActive || isHovered ? "text-primary" : "text-white/70"
                  }`}
              >
                <span className="relative z-10">{link.name}</span>
                {(isHovered || isActive) && (
                  <motion.div
                    layoutId="navbar-link-bg"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden sm:flex bg-primary hover:bg-[#06d670] text-black text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 rounded-full transition-colors items-center gap-2 flex-shrink-0 shadow-[0_0_20px_rgba(8,247,131,0.2)]"
        >
          Let's Talk
          <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-20 left-0 right-0 z-40 lg:hidden"
          >
            <div className="mx-3 sm:mx-4 glass-nav rounded-2xl backdrop-blur-sm shadow-2xl overflow-hidden border border-white/10">
              <div className="flex flex-col gap-2 p-4">
                {/* Mobile Menu Header/Close */}
                <div className="flex items-center justify-between px-2 pb-2 border-b border-white/5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/40">Navigation</span>
                  <button
                    onClick={closeMenu}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between text-sm font-medium text-white/70 hover:text-primary transition-colors px-4 py-3 rounded-lg hover:bg-white/10"
                    >
                      {link.name}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA Button */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="bg-primary hover:bg-[#06d670] text-black text-sm font-bold px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2 shadow-[0_0_15px_rgba(8,247,131,0.2)]"
                >
                  Let's Talk
                  <ArrowUpRight size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-md lg:hidden"
            onClick={closeMenu}
            style={{ top: "0", zIndex: 30 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
