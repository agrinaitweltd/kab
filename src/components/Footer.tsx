import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Globe, Briefcase, X, MessageSquare } from "lucide-react";

const footerLinks = {
  "The Foundation": [
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/about#mission" },
    { label: "Leadership", href: "/about#leadership" },
    { label: "Contact Us", href: "/contact" },
  ],
  "Areas of Focus": [
    { label: "Health Emergencies", href: "/projects#education" },
    { label: "Education Support", href: "/projects#education" },
    { label: "Agriculture & Farming", href: "/projects#agriculture" },
    { label: "Youth Empowerment", href: "/projects#youth" },
    { label: "Community Development", href: "/projects#community" },
  ],
  "Become a Partner": [
    { label: "Philanthropic Partnerships", href: "/donate" },
    { label: "Corporate Partnerships", href: "/donate" },
    { label: "Investment Partnerships", href: "/donate" },
  ],
  "Explore": [
    { label: "Governance & Reports", href: "/about" },
    { label: "News & Resources", href: "/about" },
    { label: "Media Center", href: "/contact" },
    { label: "Careers", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-blue-50 p-2">
                <Image src="/logo.png" alt="Kabalega Society Foundation" fill className="object-contain" />
              </div>
            </Link>
            <p className="font-bold text-blue-700 text-lg mb-1">Kabalega Society Foundation</p>
            <div className="space-y-3 text-sm text-gray-600 mt-6">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Kabalega Society Foundation</p>
                  <p>Hoima City, Bunyoro Region</p>
                  <p>Western Uganda</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-blue-600 flex-shrink-0" />
                <span>+256-700-000-000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-600 flex-shrink-0" />
                <span className="text-xs">info@kabalegafoundation.org</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-gray-900 font-bold text-sm uppercase tracking-wider mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-600 hover:text-blue-700 transition-colors duration-200">
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
          <p className="text-gray-900 font-medium mb-4">Follow us</p>
          <div className="flex items-center gap-3">
            {[
              { icon: Globe, label: "Instagram" },
              { icon: Briefcase, label: "LinkedIn" },
              { icon: X, label: "X" },
            ].map(({ icon: Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="w-9 h-9 rounded-full bg-gray-900 hover:bg-gray-700 flex items-center justify-center text-white transition-colors duration-200">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Kabalega Society Foundation. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {["Transparency & Independence", "Gift Acceptance FAQs", "Donation FAQs", "Privacy Notice", "Terms & Conditions", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-xs text-gray-500 hover:text-gray-700 transition-colors whitespace-nowrap">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
