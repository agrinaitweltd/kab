import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Heart, Globe, Briefcase, X, MessageSquare } from "lucide-react";

const footerLinks = {
  "About": [
    { label: "Our Mission", href: "/about#mission" },
    { label: "Leadership", href: "/about#leadership" },
    { label: "Our Story", href: "/about" },
  ],
  "Programs": [
    { label: "Education Support", href: "/projects#education" },
    { label: "Agriculture & Farming", href: "/projects#agriculture" },
    { label: "Youth Empowerment", href: "/projects#youth" },
    { label: "Community Development", href: "/projects#community" },
  ],
  "Get Involved": [
    { label: "Make a Donation", href: "/donate" },
    { label: "Partner With Us", href: "/contact" },
    { label: "Volunteer", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/10 p-2 group-hover:bg-white/20 transition-colors">
                <Image src="/logo.png" alt="Kabalega Society Foundation" fill className="object-contain" />
              </div>
              <div>
                <p className="font-bold text-white text-base leading-tight">Kabalega Society</p>
                <p className="text-xs text-gray-400 leading-tight">Foundation</p>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              Empowering communities across Bunyoro through education, agriculture, and sustainable development since 2016.
            </p>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-blue-400 flex-shrink-0" />
                <div className="text-gray-400">
                  <p className="font-medium text-gray-300">Hoima City</p>
                  <p>Bunyoro Region, Western Uganda</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">+256 700 000 000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:info@kabalegafoundation.org" className="text-gray-400 hover:text-white transition-colors">
                  info@kabalegafoundation.org
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {[
                { icon: Globe, label: "Website", href: "#" },
                { icon: Briefcase, label: "LinkedIn", href: "#" },
                { icon: X, label: "Twitter", href: "#" },
                { icon: MessageSquare, label: "Facebook", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link href="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/about" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Kabalega Society Foundation. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Made with <Heart size={14} className="text-red-500 fill-current" /> for Bunyoro
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
