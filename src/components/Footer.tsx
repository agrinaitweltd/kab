import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Globe, Briefcase, X, MessageSquare } from "lucide-react";

const footerLinks = {
  "The Foundation": [
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/about#mission" },
    { label: "Our Vision", href: "/about#vision" },
    { label: "Leadership", href: "/about#leadership" },
  ],
  "Our Programs": [
    { label: "Education Support", href: "/projects#education" },
    { label: "Agriculture & Farming", href: "/projects#agriculture" },
    { label: "Youth Empowerment", href: "/projects#youth" },
    { label: "Community Development", href: "/projects#community" },
  ],
  "Get Involved": [
    { label: "Donate Now", href: "/donate" },
    { label: "Become a Partner", href: "/donate#partners" },
    { label: "Volunteer", href: "/contact" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white p-1">
                <Image
                  src="/logo.png"
                  alt="Kabalega Society Foundation"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-bold text-white text-base leading-tight">Kabalega Society</p>
                <p className="text-xs text-gray-400 leading-tight">Foundation</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering communities across the Bunyoro region of Uganda through education,
              agriculture, and sustainable development.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin size={14} className="mt-0.5 text-blue-400 flex-shrink-0" />
                <span>Bunyoro Region, Uganda</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={14} className="text-blue-400 flex-shrink-0" />
                <span>info@kabalegatfoundation.org</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={14} className="text-blue-400 flex-shrink-0" />
                <span>+256 700 000 000</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {[
              { icon: Globe, label: "Website" },
              { icon: Briefcase, label: "LinkedIn" },
              { icon: X, label: "Twitter/X" },
              { icon: MessageSquare, label: "Facebook" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Kabalega Society Foundation. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
