'use client'

import { NAV_LINKS } from "../data/data";
import { Twitter, Github, Linkedin, Dribbble, Terminal, ArrowUp } from "lucide-react";

const Footer = () => {
  const IconMap = {
    Twitter: Twitter,
    Github: Github,
    Linkedin: Linkedin,
    Dribbble: Dribbble
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="bg-[#050807] border-t border-white/5 pt-16 pb-8">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 text-white mb-6">
                <div className="size-8 flex items-center justify-center rounded bg-primary text-black">
                  <Terminal size={24} />
                </div>
                <span className="text-xl font-bold tracking-tight">
                  Portfolio
                </span>
              </div>
              <p className="text-slate-400 text-sm max-w-sm mb-6">
                A digital playground for experiments in UI design, front-end
                development, and user experience. Built with passion and a lot
                of coffee.
              </p>
              <div className="flex gap-4">
                {NAV_LINKS.map((link) => {
                  const Icon = IconMap[link.icon];
                  return (
                    <a
                      key={link.name}
                      className="text-slate-400 hover:text-white transition-colors"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                    >
                      {Icon && <Icon size={20} />}
                    </a>
                  );
                })}
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Explore</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    Design System
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    Resources
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500">
              © 2024 Portfolio. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-green-500" />
              <span className="text-xs text-slate-500">
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </footer>
      {/* Floating Action Button - Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-black shadow-[0_0_20px_rgba(6,249,132,0.4)] hover:scale-110 transition-transform flex items-center justify-center cursor-pointer"
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    </>
  );
};

export default Footer;
