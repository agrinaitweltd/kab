"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type SubItem = { label: string; href: string };
type NavItem = {
  label: string;
  megaMenu?: boolean;
  items: SubItem[];
};

const navItems: NavItem[] = [
  {
    label: "THE FOUNDATION",
    items: [
      { label: "ABOUT US", href: "/about" },
      { label: "WHAT WE DO", href: "/about/what-we-do" },
      { label: "OUR TEAM", href: "/about/team" },
      { label: "TRANSPARENCY", href: "/about/transparency" },
      { label: "FINANCIALS", href: "/about/financials" },
      { label: "NEWS & RESOURCES", href: "/news" },
      { label: "MEDIA CENTER", href: "/media" },
    ],
  },
  {
    label: "AREAS OF FOCUS",
    megaMenu: true,
    items: [
      { label: "EDUCATION", href: "/focus/education" },
      { label: "AGRICULTURE", href: "/focus/agriculture" },
      { label: "CLEAN WATER", href: "/focus/clean-water" },
      { label: "HEALTHCARE", href: "/focus/healthcare" },
      { label: "YOUTH EMPOWERMENT", href: "/focus/youth" },
      { label: "WOMEN'S EMPOWERMENT", href: "/focus/women" },
      { label: "DIGITAL LITERACY", href: "/focus/digital-literacy" },
    ],
  },
  {
    label: "BECOME A PARTNER",
    items: [
      { label: "INDIVIDUAL GIVING", href: "/partner/individual" },
      { label: "CORPORATE PARTNERSHIPS", href: "/partner/corporate" },
      { label: "VOLUNTEER", href: "/partner/volunteer" },
    ],
  },
  {
    label: "CAMPAIGNS",
    items: [
      { label: "EDUCATION FUND", href: "/campaigns/education" },
      { label: "HEALTHCARE INITIATIVE", href: "/campaigns/healthcare" },
      { label: "CLEAN WATER PROJECT", href: "/campaigns/clean-water" },
      { label: "EMERGENCY RELIEF", href: "/campaigns/emergency" },
      { label: "ANNUAL APPEAL", href: "/campaigns/annual" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const onEnter = (label: string) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setActiveDropdown(label);
  };

  const onLeave = () => {
    leaveTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const toggleMobile = (label: string) =>
    setMobileOpen((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative w-44 h-14 sm:w-56 sm:h-16">
              <Image
                src="/logo.png"
                alt="Kabalega Society Foundation"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => onEnter(item.label)}
                onMouseLeave={onLeave}
              >
                <button
                  className={`flex items-center gap-1 px-3 xl:px-4 py-2 text-[11px] xl:text-xs font-semibold uppercase tracking-wider transition-colors duration-150 ${
                    activeDropdown === item.label
                      ? "text-[#1F3A6D]"
                      : "text-[#4a5266] hover:text-[#1F3A6D]"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className={`absolute top-full bg-white shadow-xl border border-gray-100 z-50 ${
                        item.megaMenu
                          ? "left-1/2 -translate-x-1/2 w-[680px]"
                          : "left-0 w-60"
                      }`}
                      onMouseEnter={() => onEnter(item.label)}
                      onMouseLeave={onLeave}
                    >
                      {item.megaMenu ? (
                        <div className="grid grid-cols-3 gap-x-4 p-6">
                          {item.items.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block py-2 px-1 text-[11px] font-semibold uppercase tracking-wider text-[#1F3A6D] hover:text-[#33c6de] transition-colors duration-150"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="py-2">
                          {item.items.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-[#4a5266] hover:text-[#1F3A6D] hover:bg-gray-50 transition-colors duration-150"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right: Search + Donate */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-[#4a5266] hover:text-[#1F3A6D] transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link
              href="/donate"
              className="bg-[#e91e8c] hover:bg-[#c91578] text-white font-bold uppercase tracking-wide text-sm px-6 py-2.5 rounded-full transition-colors duration-200"
            >
              Donate
            </Link>
          </div>

          {/* Mobile: Donate + Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              href="/donate"
              className="bg-[#e91e8c] hover:bg-[#c91578] text-white font-bold uppercase text-xs px-4 py-2 rounded-full transition-colors duration-200"
            >
              Donate
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-[#4a5266] hover:text-[#1F3A6D] transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Search bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-gray-100 bg-white overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <input
                autoFocus
                type="text"
                placeholder="Search..."
                className="w-full border-b border-gray-300 focus:border-[#1F3A6D] outline-none py-2 text-sm text-gray-700 bg-transparent"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-3 divide-y divide-gray-100">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => toggleMobile(item.label)}
                    className="w-full flex items-center justify-between px-2 py-3 text-[11px] font-bold uppercase tracking-wider text-[#4a5266] hover:text-[#1F3A6D] transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${
                        mobileOpen.includes(item.label) ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileOpen.includes(item.label) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-3 border-l-2 border-[#33c6de] ml-2 mb-2"
                      >
                        {item.items.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setMenuOpen(false)}
                            className="block px-3 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-[#4a5266] hover:text-[#1F3A6D] transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

