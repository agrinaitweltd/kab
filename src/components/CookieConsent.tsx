"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Settings, X } from "lucide-react";

export default function CookieConsent() {
  const [showCookie, setShowCookie] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Show after 1.5 seconds
      const timer = setTimeout(() => setShowCookie(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowCookie(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowCookie(false);
  };

  const handleSettings = () => {
    localStorage.setItem("cookieConsent", "settings");
    setShowCookie(false);
  };

  if (!mounted || !showCookie) return null;

  return (
    <AnimatePresence>
      {showCookie && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={() => setShowCookie(false)}
          />

          {/* Cookie Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ 
              type: "spring",
              damping: 30,
              stiffness: 300,
              mass: 0.8,
            }}
            className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 lg:bottom-8 lg:right-8 lg:w-[420px] z-50"
          >
            <motion.div 
              className="glass rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20"
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur(10px)" }}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setShowCookie(false)}
                className="absolute top-4 right-4 p-1 hover:bg-white/10 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close"
              >
                <X size={20} className="text-gray-600" />
              </motion.button>

              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <CheckCircle size={24} className="text-[#1F3A6D] flex-shrink-0" />
                </motion.div>
                <h2 className="text-lg md:text-xl font-bold text-gray-900">
                  We value your privacy
                </h2>
              </div>

              {/* Description */}
              <motion.p 
                className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                We use cookies to enhance your browsing experience, provide personalized content, and analyze site performance. Your privacy is important to us.
              </motion.p>

              {/* Privacy Link */}
              <motion.a
                href="/privacy"
                className="inline-block text-[#1F3A6D] hover:text-[#2D4F8A] font-semibold text-sm md:text-base mb-6 transition-colors"
                whileHover={{ x: 4 }}
              >
                Learn about our privacy policy →
              </motion.a>

              {/* Buttons */}
              <div className="space-y-3">
                <motion.button
                  onClick={handleAccept}
                  className="w-full bg-gradient-to-r from-[#1F3A6D] to-[#2D4F8A] hover:from-[#162D56] hover:to-[#1F3A6D] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Accept All Cookies
                </motion.button>

                <div className="flex gap-3">
                  <motion.button
                    onClick={handleReject}
                    className="flex-1 bg-white hover:bg-gray-50 border-2 border-gray-300 hover:border-gray-400 text-gray-900 font-semibold py-3 px-4 rounded-xl transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Reject
                  </motion.button>

                  <motion.button
                    onClick={handleSettings}
                    className="flex-1 bg-gray-50 hover:bg-gray-100 border-2 border-gray-300 hover:border-gray-400 text-gray-900 font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Settings size={16} />
                    <span className="hidden sm:inline">Settings</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
