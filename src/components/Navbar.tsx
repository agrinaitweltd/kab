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
          <Link href="/" className="flex items-center gap-3 group z-50">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/logo.png"
                alt="Kabalega Society Foundation"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm md:text-base font-bold text-gray-900 uppercase tracking-tight leading-tight group-hover:opacity-70 transition-opacity">
                KABALEGA SOCIETY<br />
                <span className="font-normal text-xs md:text-sm">FOUNDATIONS</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-wide transition-colors duration-200 ${
                  pathname === link.href ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Search Icon */}
            <button
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Search"
            >
              <Search size={20} className="text-gray-900" />
            </button>
            
            {/* Mobile menu button - desktop version */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              <Menu size={24} className="text-gray-900" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Search"
            >
              <Search size={20} className="text-gray-900" />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors z-50"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} className="text-gray-900" /> : <Menu size={24} className="text-gray-900" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-20 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl lg:hidden z-40 overflow-y-auto"
            >
              <div className="p-8 space-y-4">
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-3 text-lg font-bold uppercase tracking-wide transition-colors ${
                        pathname === link.href
                          ? "text-gray-900"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {link.label}
                    </Link>
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
