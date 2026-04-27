"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, Send, CheckCircle2, MessageSquare, HelpCircle } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const faqs = [
  { q: "How can I volunteer with the foundation?", a: "We welcome volunteers from all backgrounds. Contact us via email or phone to discuss current opportunities based on your skills and availability." },
  { q: "Can I visit your projects in Bunyoro?", a: "Yes! We organize site visits for donors and partners. Please contact us at least 2 weeks in advance to arrange a visit." },
  { q: "Do you accept in-kind donations?", a: "Yes, we accept educational materials, agricultural equipment, and medical supplies. Contact us to discuss specific items and logistics." },
  { q: "How can my company partner with the foundation?", a: "We offer corporate partnership opportunities including project sponsorship, employee volunteering, and matching gift programs. Email us to learn more." },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20 px-4">
        <FadeIn className="text-center max-w-lg">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Message Received!</h1>
          <p className="text-gray-600 text-lg mb-8">
            Thank you for reaching out, <strong>{formData.name}</strong>. We''ll respond to <strong>{formData.email}</strong> within 24-48 hours.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 bg-[#1F3A6D] hover:bg-[#162D56] text-white font-semibold px-8 py-4 rounded-lg transition-all hover:shadow-lg">
            Back to Home
          </Link>
        </FadeIn>
      </div>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute left-0 top-20 w-[600px] h-32 bg-[#1F3A6D] rounded-r-full" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-[#5A6270] leading-tight mb-6">
              Contact <span className="text-[#1F3A6D]">us</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5A6270] max-w-3xl mx-auto leading-relaxed">
              Whether you want to donate, volunteer, partner with us, or simply learn more—our team is here for you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                  <p className="text-gray-600 mb-8">Fill out the form below and we''ll get back to you as soon as possible.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                      <input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1F3A6D] focus:outline-none text-gray-900"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1F3A6D] focus:outline-none text-gray-900"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                      <input
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1F3A6D] focus:outline-none text-gray-900"
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                      <textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1F3A6D] focus:outline-none text-gray-900 resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#1F3A6D] hover:bg-[#162D56] disabled:bg-gray-300 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      {loading ? "Sending..." : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </FadeIn>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <FadeIn direction="right">
                <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#1F3A6D]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} className="text-[#1F3A6D]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Our Location</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Hoima City<br />
                          Bunyoro Region<br />
                          Western Uganda
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#1F3A6D]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone size={20} className="text-[#1F3A6D]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Call Us</p>
                        <p className="text-gray-600 text-sm">+256 700 000 000</p>
                        <p className="text-gray-400 text-xs mt-1">Mon–Fri, 8am–5pm EAT</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#1F3A6D]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail size={20} className="text-[#1F3A6D]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Email Us</p>
                        <a
                          href="mailto:info@kabalegafoundation.org"
                          className="text-[#1F3A6D] hover:underline text-sm block"
                        >
                          info@kabalegafoundation.org
                        </a>
                        <a
                          href="mailto:programs@kabalegafoundation.org"
                          className="text-[#1F3A6D] hover:underline text-sm block mt-1"
                        >
                          programs@kabalegafoundation.org
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={100}>
                <div className="bg-[#1F3A6D] rounded-2xl p-6 md:p-8 text-white">
                  <h3 className="text-xl font-bold mb-3">Want to Visit?</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    We welcome site visits from donors, partners, and volunteers. Contact us to schedule a visit to see our programs in action.
                  </p>
                  <Link
                    href="/about"
                    className="text-white font-semibold text-sm underline hover:text-white/80"
                  >
                    Learn more about our work ?
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1F3A6D]/10 text-[#1F3A6D] rounded-full text-sm font-semibold mb-4">
              <HelpCircle size={16} />
              Common Questions
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 50}>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={250}>
            <div className="mt-10 text-center">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <a
                href="mailto:info@kabalegafoundation.org"
                className="inline-flex items-center gap-2 bg-[#1F3A6D] hover:bg-[#162D56] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg"
              >
                <Mail size={18} />
                Email Us Directly
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
