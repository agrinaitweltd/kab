"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, Globe, Briefcase, X, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/FadeIn";

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

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 pt-40 pb-24">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-cyan-400 font-semibold uppercase tracking-widest text-xs mb-4">Get in Touch</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              We Would Love to <span className="text-cyan-400">Hear from You</span>
            </h1>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto leading-relaxed">
              Whether you want to donate, volunteer, partner with us, or simply learn more — our team is here for you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <FadeIn direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Contact Information</h2>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} className="text-blue-700" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-0.5">Our Location</p>
                        <p className="text-gray-500 text-sm leading-relaxed">Hoima City, Bunyoro Region<br />Western Uganda</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail size={20} className="text-blue-700" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-0.5">Email Us</p>
                        <a href="mailto:info@kabalegafoundation.org" className="text-blue-600 hover:underline text-sm">info@kabalegafoundation.org</a><br />
                        <a href="mailto:programs@kabalegafoundation.org" className="text-blue-600 hover:underline text-sm">programs@kabalegafoundation.org</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone size={20} className="text-blue-700" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-0.5">Call Us</p>
                        <p className="text-gray-500 text-sm">+256 700 000 000</p>
                        <p className="text-gray-400 text-xs">Mon–Fri, 8am–5pm EAT</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    {[
                      { icon: Globe, label: "Instagram", color: "hover:bg-pink-500" },
                      { icon: Briefcase, label: "LinkedIn", color: "hover:bg-blue-600" },
                      { icon: X, label: "Twitter", color: "hover:bg-sky-500" },
                      { icon: MessageSquare, label: "Facebook", color: "hover:bg-blue-700" },
                    ].map(({ icon: Icon, label, color }) => (
                      <a
                        key={label}
                        href="#"
                        aria-label={label}
                        className={`w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-200 ${color}`}
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="rounded-2xl overflow-hidden border border-gray-200 bg-blue-50 h-52 flex items-center justify-center">
                  <div className="text-center px-6">
                    <MapPin size={32} className="text-blue-400 mx-auto mb-3" />
                    <p className="text-gray-600 font-medium text-sm">Hoima City, Bunyoro Region</p>
                    <p className="text-gray-400 text-xs mt-1">Western Uganda</p>
                    <a
                      href="https://maps.google.com/?q=Hoima,Uganda"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-blue-600 text-xs font-semibold hover:underline"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Form */}
            <div className="lg:col-span-2">
              <FadeIn direction="right">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={40} className="text-green-600" />
                      </div>
                      <h3 className="text-2xl font-extrabold text-gray-900 mb-3">Message Sent!</h3>
                      <p className="text-gray-500 text-lg mb-6">Thank you for reaching out. We&apos;ll get back to you within 2 business days.</p>
                      <button
                        onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }}
                        className="text-blue-700 font-semibold hover:underline text-sm"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Send Us a Message</h2>
                      <p className="text-gray-500 mb-8 text-sm">Fill in the form below and we&apos;ll respond as soon as possible.</p>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                            <input
                              required
                              value={formData.name}
                              onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-gray-900 transition-colors"
                              placeholder="Your full name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                            <input
                              required
                              type="email"
                              value={formData.email}
                              onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-gray-900 transition-colors"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject *</label>
                          <select
                            required
                            value={formData.subject}
                            onChange={e => setFormData(p => ({ ...p, subject: e.target.value }))}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-gray-900 bg-white transition-colors"
                          >
                            <option value="">Select a subject...</option>
                            <option value="donation">Donation Enquiry</option>
                            <option value="partnership">Partnership Opportunity</option>
                            <option value="volunteer">Volunteer</option>
                            <option value="programs">Program Information</option>
                            <option value="media">Media & Press</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                          <textarea
                            required
                            rows={6}
                            value={formData.message}
                            onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-gray-900 resize-none transition-colors"
                            placeholder="Tell us how we can help, or how you'd like to get involved..."
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-xl transition-all text-base hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                        >
                          {loading ? (
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <><Send size={18} /> Send Message</>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ strip */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: "How is my donation used?", a: "100% of your donation goes directly to our programs — school fees, farming support, youth training, and community projects in Bunyoro." },
              { q: "Can I sponsor a specific child?", a: "Yes. You can direct your donation towards our Education Support Program to sponsor a child through primary or secondary school." },
              { q: "Is my donation tax-deductible?", a: "Tax deductibility depends on your country. Please consult your local tax authority or contact us for documentation." },
              { q: "Can I visit your projects?", a: "Yes, we welcome donor visits to our programs in Bunyoro. Please contact us in advance to arrange a visit." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="text-center mt-10">
            <p className="text-gray-500 text-sm">
              Have more questions?{" "}
              <Link href="/donate" className="text-blue-600 font-semibold hover:underline">
                Donate now
              </Link>{" "}
              or email us at{" "}
              <a href="mailto:info@kabalegafoundation.org" className="text-blue-600 font-semibold hover:underline">
                info@kabalegafoundation.org
              </a>
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
