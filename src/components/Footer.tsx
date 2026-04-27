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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <div className="relative w-16 h-16 transition-transform duration-300 group-hover:scale-105">
                <Image src="/logo.png" alt="Kabalega Society Foundation" fill className="object-contain" />
              </div>
            </Link>
            <div className="text-sm space-y-2 text-gray-500">
              <p className="font-semibold text-gray-700">Kabalega Society Foundation</p>
              <p>Hoima City, Bunyoro Region</p>
              <p>Western Uganda</p>
              <p className="pt-2">+256 700 000 000</p>
              <p>RSIN 8270.16.888</p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-gray-700 font-bold text-xs uppercase tracking-wider mb-6">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm uppercase tracking-wide font-medium"
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
        <div className="border-t border-gray-200 pt-8">
          <div className="flex items-center gap-4 mb-6">
            <p className="text-sm text-gray-600 font-medium">Follow us</p>
            <div className="flex items-center gap-3">
              {[
                { icon: Globe, label: "Website", href: "#" },
                { icon: Mail, label: "Email", href: "mailto:info@kabalegafoundation.org" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all duration-200 hover:scale-110"
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Kabalega Society Foundation. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/about" className="hover:text-gray-900 transition-colors">Transparency & Independence</Link>
              <Link href="/donate" className="hover:text-gray-900 transition-colors">Donation FAQs</Link>
              <Link href="/about" className="hover:text-gray-900 transition-colors">Privacy Notice</Link>
              <Link href="/about" className="hover:text-gray-900 transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
