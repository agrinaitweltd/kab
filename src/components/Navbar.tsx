"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "WHO WE ARE" },
  { href: "/projects", label: "HOW WE WORK" },
  { href: "/donate", label: "WHAT WE DO" },
  { href: "/contact", label: "CONTACT" },
];

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
  hover: {
    x: 8,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const throttledHandleScroll = () => {
      handleScroll();
    };
    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#e4eaee]/95 backdrop-blur-md shadow-lg" 
          : "bg-[#e4eaee]"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
          {/* Logo */}
          <Link 
            href="/" 
            className="group z-50 transition-transform duration-300 hover:scale-105 active:scale-95 flex-shrink-0"
          >
            <motion.div 
              className="relative w-32 h-12 sm:w-40 sm:h-16 md:w-48 md:h-20 lg:w-56 lg:h-24"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/logo.png"
                alt="Kabalega Society Foundation"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`relative text-xs xl:text-sm font-bold uppercase tracking-wider px-3 py-2 rounded-md transition-all duration-300 ${
                    pathname === link.href 
                      ? "text-[#2e354b] bg-white/40" 
                      : "text-[#4a5266] hover:text-[#2e354b] hover:bg-white/30"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 hover:bg-white/60 rounded-md transition-all duration-200 active:scale-90 z-50"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 90 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} className="text-[#4a5266]" strokeWidth={2.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} className="text-[#4a5266]" strokeWidth={2.5} />
                </motion.div>
              )}
            </motion.button>
          </div>
        </div>
      </nav>
      <motion.div 
        className="h-0.5 bg-gradient-to-r from-[#33c6de] via-[#33c6de] to-transparent"
        layoutId="divider"
      />

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed inset-0 bg-black/10 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ 
                type: "spring", 
                damping: 25,
                stiffness: 400,
                mass: 0.5,
              }}
              className="absolute top-full left-0 right-0 bg-[#e4eaee]/98 backdrop-blur-md shadow-lg lg:hidden z-40 overflow-hidden border-b border-white/20"
            >
              <div className="p-4 sm:p-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    custom={index}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block px-4 py-3 sm:py-4 text-base sm:text-lg font-bold uppercase tracking-wide transition-all duration-200 rounded-lg hover:bg-white/50 ${
                        pathname === link.href
                          ? "text-[#2f364a] bg-white/60"
                          : "text-[#4a5266] hover:text-[#2f364a]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
