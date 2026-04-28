import Link from "next/link";
import Image from "next/image";
import { Globe, Mail } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-4 sm:mb-6 group">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 transition-transform duration-300 group-hover:scale-105">
                <Image src="/logo.png" alt="Kabalega Society Foundation" fill className="object-contain" />
              </div>
            </Link>
            <div className="text-xs sm:text-sm space-y-1 sm:space-y-2 text-gray-500">
              <p className="font-semibold text-gray-700 text-sm">Kabalega Society Foundation</p>
              <p>Hoima City, Bunyoro Region</p>
              <p>Western Uganda</p>
              <p className="pt-2">+256 700 000 000</p>
              <p>RSIN 8270.16.888</p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-gray-700 font-bold text-xs uppercase tracking-wider mb-3 sm:mb-6">{title}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-gray-500 hover:text-gray-900 transition-colors duration-200 text-xs sm:text-sm uppercase tracking-wide font-medium min-h-11 flex items-center"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-200 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
            <p className="text-xs sm:text-sm text-gray-600 font-medium">Follow us</p>
            <div className="flex items-center gap-4">
              {[
                { icon: Globe, label: "Website", href: "#" },
                { icon: Mail, label: "Email", href: "mailto:info@kabalegafoundation.org" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col gap-4 text-xs sm:text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Kabalega Society Foundation. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-6">
              <Link href="/about" className="hover:text-gray-900 transition-colors min-h-10 flex items-center">Transparency & Independence</Link>
              <Link href="/donate" className="hover:text-gray-900 transition-colors min-h-10 flex items-center">Donation FAQs</Link>
              <Link href="/about" className="hover:text-gray-900 transition-colors min-h-10 flex items-center">Privacy Notice</Link>
              <Link href="/about" className="hover:text-gray-900 transition-colors min-h-10 flex items-center">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
