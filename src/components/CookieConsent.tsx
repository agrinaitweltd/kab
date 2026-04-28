"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [showCookie, setShowCookie] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowCookie(true);
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setShowCookie(false)}
          />

          {/* Cookie Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 lg:bottom-8 lg:right-8 lg:w-96 z-50"
          >
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl">
              {/* Header */}
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                We value your privacy
              </h2>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
                To enhance your browsing experience and provide personalized content, we use cookies. By clicking "Accept," you agree to our use of cookies as outlined in our privacy statement. You can manage your preferences at any time.
              </p>

              {/* Privacy Link */}
              <a
                href="/privacy"
                className="inline-block text-blue-600 hover:text-blue-700 font-semibold text-sm md:text-base mb-6 underline transition-colors"
              >
                Privacy, Cookies & GDPR
              </a>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Accept Button */}
                <button
                  onClick={handleAccept}
                  className="flex-1 bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-800 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95"
                >
                  Accept All Cookies
                </button>

                {/* Reject Button */}
                <button
                  onClick={handleReject}
                  className="flex-1 bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-800 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95"
                >
                  Reject All Cookies
                </button>
              </div>

              {/* Cookie Settings Button */}
              <button
                onClick={handleSettings}
                className="w-full mt-3 border-2 border-gray-300 hover:border-gray-400 text-gray-900 font-semibold py-3 px-6 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 bg-white hover:bg-gray-50"
              >
                Cookie Settings
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
