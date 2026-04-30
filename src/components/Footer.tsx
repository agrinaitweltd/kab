"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe, Mail } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  "THE FOUNDATION": [
    { label: "ABOUT US", href: "/about" },
    { label: "WHAT WE DO", href: "/donate" },
    { label: "CONTACT US", href: "/contact" },
  ],
  "AREAS OF FOCUS": [
    { label: "EDUCATION SUPPORT", href: "/projects#education" },
    { label: "AGRICULTURE & FARMING", href: "/projects#agriculture" },
    { label: "YOUTH EMPOWERMENT", href: "/projects#youth" },
    { label: "COMMUNITY DEVELOPMENT", href: "/projects#community" },
  ],
  "BECOME A PARTNER": [
    { label: "PHILANTHROPIC PARTNERSHIPS", href: "/donate" },
    { label: "CORPORATE PARTNERSHIPS", href: "/contact" },
    { label: "INVESTMENT PARTNERSHIPS", href: "/contact" },
  ],
  "EXPLORE": [
    { label: "GOVERNANCE & REPORTS", href: "/about#leadership" },
    { label: "CAREERS", href: "/contact" },
    { label: "NEWS & RESOURCES", href: "/about" },
    { label: "MEDIA CENTER", href: "/contact" },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const linkHoverVariants = {
  hover: {
    x: 4,
    color: "#1F3A6D",
    transition: { duration: 0.2 },
  },
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-600 border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="col-span-2 sm:col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-4 sm:mb-6 group">
              <motion.div 
                className="relative w-12 h-12 sm:w-16 sm:h-16"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image src="/logo.png" alt="Kabalega Society Foundation" fill className="object-contain" />
              </motion.div>
            </Link>
            <motion.div className="text-xs sm:text-sm space-y-1 sm:space-y-2 text-gray-500">
              <p className="font-semibold text-gray-700 text-sm">Kabalega Society Foundation</p>
              <p>Hoima City, Bunyoro Region</p>
              <p>Western Uganda</p>
              <p className="pt-2 font-medium text-gray-600">+256 700 000 000</p>
              <p className="text-xs">RSIN 8270.16.888</p>
            </motion.div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], categoryIndex) => (
            <motion.div key={title} variants={itemVariants}>
              <h3 className="text-gray-700 font-bold text-xs uppercase tracking-wider mb-3 sm:mb-6">{title}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ delay: linkIndex * 0.05, duration: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Link 
                      href={link.href} 
                      className="text-gray-500 hover:text-[#1F3A6D] transition-colors duration-200 text-xs sm:text-sm uppercase tracking-wide font-medium min-h-11 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{link.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="border-t border-gray-200 pt-6 sm:pt-8"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
            <p className="text-xs sm:text-sm text-gray-600 font-medium">Follow us</p>
            <div className="flex items-center gap-3">
              {[
                { icon: Globe, label: "Website", href: "#" },
                { icon: Mail, label: "Email", href: "mailto:info@kabalegafoundation.org" },
              ].map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 sm:w-9 sm:h-9 flex items-center justify-center text-gray-700 hover:text-white hover:bg-[#1F3A6D] rounded-full transition-all duration-200"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Kabalega Society Foundation. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-6">
              {[
                { label: "Transparency & Independence", href: "/about" },
                { label: "Donation FAQs", href: "/donate" },
                { label: "Privacy Notice", href: "/about" },
                { label: "Terms & Conditions", href: "/about" },
              ].map(({ label, href }) => (
                <motion.div 
                  key={label}
                  whileHover={{ x: 2 }}
                >
                  <Link 
                    href={href} 
                    className="hover:text-[#1F3A6D] transition-colors duration-200 min-h-10 flex items-center"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
