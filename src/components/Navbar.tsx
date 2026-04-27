"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "WHO WE ARE" },
  { href: "/projects", label: "HOW WE WORK" },
  { href: "/donate", label: "WHAT WE DO" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group z-50 transition-transform duration-300 hover:scale-105">
            <div className="relative w-155 h-89 md:w-16 md:h-16">
              <Image
                src="/logo.png"
                alt="Kabalega Society Foundation"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-bold uppercase tracking-wide transition-all duration-300 ease-out hover:scale-105 ${
                  pathname === link.href ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Search Icon */}
            <button
              className="p-2 hover:bg-gray-100 rounded-md transition-all duration-200 hover:scale-110 active:scale-95"
              aria-label="Search"
            >
              <Search size={20} className="text-gray-900" strokeWidth={2.5} />
            </button>
            
            {/* Mobile menu button - desktop version */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 hover:bg-gray-100 rounded-md transition-all duration-200 hover:scale-110 active:scale-95"
              aria-label="Toggle menu"
            >
              <Menu size={24} className="text-gray-900" strokeWidth={2.5} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              className="p-2 hover:bg-gray-100 rounded-md transition-all duration-200 hover:scale-110 active:scale-95"
              aria-label="Search"
            >
              <Search size={20} className="text-gray-900" strokeWidth={2.5} />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 hover:bg-gray-100 rounded-md transition-all duration-200 hover:scale-110 active:scale-95 z-50"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} className="text-gray-900" strokeWidth={2.5} /> : <Menu size={24} className="text-gray-900" strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ 
                type: "spring", 
                damping: 30, 
                stiffness: 300,
                mass: 0.8
              }}
              className="fixed top-20 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl lg:hidden z-40 overflow-y-auto"
            >
              <div className="p-8 space-y-4">
                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.05,
                        duration: 0.3,
                        ease: "easeOut"
                      }}
                    >
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 text-lg font-bold uppercase tracking-wide transition-all duration-200 rounded-md hover:bg-gray-50 hover:translate-x-1 ${
                          pathname === link.href
                            ? "text-gray-900 bg-gray-50"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
