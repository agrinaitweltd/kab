"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, RefreshCw, Zap, School, Wheat, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const presetAmounts = [10, 25, 50, 100, 250, 500];

const impactItems = [
  { amount: "£10", icon: School, desc: "Covers one month of school materials for a child" },
  { amount: "£25", icon: Wheat, desc: "Provides seeds and tools for one farming family" },
  { amount: "£50", icon: Users, desc: "Sponsors one youth for a vocational skills workshop" },
  { amount: "£100", icon: School, desc: "Pays a full term's school fees for one child" },
  { amount: "£250", icon: Heart, desc: "Funds a community health outreach day" },
  { amount: "£500", icon: Wheat, desc: "Sets up a full agricultural training program for 5 families" },
];

export default function DonatePage() {
  const [donationType, setDonationType] = useState<"monthly" | "once">("once");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const finalAmount = customAmount ? parseFloat(customAmount) : selectedAmount;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20 px-4">
        <FadeIn className="text-center max-w-md">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-green-600" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Thank You!</h1>
          <p className="text-gray-600 text-lg mb-3">
            Your generous donation of <strong>£{finalAmount}</strong> {donationType === "monthly" ? "per month " : ""}will make a real difference in Bunyoro.
          </p>
          <p className="text-gray-500 mb-8">A confirmation will be sent to <strong>{formData.email}</strong>.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="inline-flex items-center gap-2 bg-[#1F3A6D] hover:bg-[#162D56] text-white font-semibold px-8 py-3 rounded-full transition-all">
              Back to Home <ArrowRight size={16} />
            </Link>
          </motion.div>
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
              What we <span className="text-[#1F3A6D]">do</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5A6270] max-w-3xl mx-auto leading-relaxed">
              Every donation directly funds education, farming, and community development programs across Bunyoro, Uganda.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Donation Form + Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  {/* Step indicator */}
                  <div className="flex items-center gap-4 mb-8">
                    {[1, 2].map((s) => (
                      <button key={s} onClick={() => s < step || step === 2 ? setStep(s) : null} className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= s ? "bg-[#1F3A6D] text-white" : "bg-gray-100 text-gray-400"}`}>
                          {step > s ? <CheckCircle2 size={16} /> : s}
                        </div>
                        <span className={`text-sm font-medium hidden sm:block ${step >= s ? "text-gray-900" : "text-gray-400"}`}>
                          {s === 1 ? "Choose Amount" : "Your Details"}
                        </span>
                        {s < 2 && <span className="w-8 h-px bg-gray-200 block" />}
                      </button>
                    ))}
                  </div>

                  {step === 1 && (
                    <div className="space-y-6">
                      {/* Donation type */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Donation Type</label>
                        <div className="grid grid-cols-2 gap-3">
                          {([["once", "One-time", Zap], ["monthly", "Monthly", RefreshCw]] as const).map(([val, label, Icon]) => (
                            <button
                              key={val}
                              onClick={() => setDonationType(val)}
                              className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 font-semibold transition-all text-sm ${donationType === val ? "border-[#1F3A6D] bg-[#1F3A6D]/5 text-[#1F3A6D]" : "border-gray-200 text-gray-600 hover:border-[#1F3A6D]/50"}`}
                            >
                              <Icon size={16} /> {label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Amount preset */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Select Amount</label>
                        <div className="grid grid-cols-3 gap-3">
                          {presetAmounts.map((amt) => (
                            <button
                              key={amt}
                              onClick={() => { setSelectedAmount(amt); setCustomAmount(""); }}
                              className={`p-3 rounded-xl border-2 font-bold text-sm transition-all ${selectedAmount === amt && !customAmount ? "border-[#1F3A6D] bg-[#1F3A6D]/5 text-[#1F3A6D]" : "border-gray-200 text-gray-700 hover:border-[#1F3A6D]/50"}`}
                            >
                              £{amt}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Custom amount */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Or enter custom amount</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">£</span>
                          <input
                            type="number"
                            min="1"
                            placeholder="0.00"
                            value={customAmount}
                            onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                            className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1F3A6D] focus:outline-none text-gray-900 font-semibold"
                          />
                        </div>
                      </div>

                      {finalAmount && (
                        <div className="bg-[#1F3A6D]/5 border border-[#1F3A6D]/10 rounded-xl p-4 text-sm text-[#1F3A6D]">
                          You are donating <strong>£{finalAmount}</strong> {donationType === "monthly" ? "every month" : "once"}. Thank you for your generosity.
                        </div>
                      )}

                      <button
                        onClick={() => setStep(2)}
                        disabled={!finalAmount || finalAmount <= 0}
                        className="w-full bg-[#1F3A6D] hover:bg-[#162D56] disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold py-4 rounded-xl transition-all text-base hover:shadow-lg"
                      >
                        Continue to Details →
                      </button>
                    </div>
                  )}

                  {step === 2 && (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="bg-[#1F3A6D]/5 border border-[#1F3A6D]/10 rounded-xl p-4 text-sm text-[#1F3A6D] mb-6">
                        Donating <strong>£{finalAmount}</strong> {donationType === "monthly" ? "monthly" : "once"}.{" "}
                        <button onClick={() => setStep(1)} className="underline font-medium">Change</button>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name *</label>
                          <input required value={formData.firstName} onChange={e => setFormData(p => ({...p, firstName: e.target.value}))} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1F3A6D] focus:outline-none text-gray-900" placeholder="Jane" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name *</label>
                          <input required value={formData.lastName} onChange={e => setFormData(p => ({...p, lastName: e.target.value}))} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1F3A6D] focus:outline-none text-gray-900" placeholder="Smith" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                        <input required type="email" value={formData.email} onChange={e => setFormData(p => ({...p, email: e.target.value}))} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1F3A6D] focus:outline-none text-gray-900" placeholder="jane@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Dedication or Message (optional)</label>
                        <textarea value={formData.message} onChange={e => setFormData(p => ({...p, message: e.target.value}))} rows={3} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1F3A6D] focus:outline-none text-gray-900 resize-none" placeholder="In memory of... / In honour of..." />
                      </div>

                      <p className="text-xs text-gray-400">
                        🔒 This is a demonstration form. In production, this would connect to a secure payment processor (Stripe, PayPal, etc.). Your details are safe.
                      </p>

                      <button type="submit" className="w-full bg-[#1F3A6D] hover:bg-[#162D56] text-white font-bold py-4 rounded-xl transition-all text-base hover:shadow-lg flex items-center justify-center gap-2">
                        <Heart size={18} /> Complete Donation of £{finalAmount}
                      </button>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>

            {/* Impact sidebar */}
            <div className="space-y-6">
              <FadeIn direction="right">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-5">Your Impact</h3>
                  <div className="space-y-4">
                    {impactItems.map((item) => (
                      <div key={item.amount} className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[#1F3A6D]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <item.icon size={18} className="text-[#1F3A6D]" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">{item.amount}</p>
                          <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={100}>
                <div className="bg-[#1F3A6D] rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-3">Why Give Monthly?</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    Monthly giving helps us plan programs, pay school fees on time, and maintain continuity for the families we serve. Even £10/month makes a lasting difference.
                  </p>
                  <button onClick={() => { setDonationType("monthly"); setStep(1); }} className="text-white/70 text-sm font-semibold underline hover:text-cyan-200">
                    Switch to monthly giving →
                  </button>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={200}>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">Other Ways to Give</h3>
                  <p className="text-gray-500 text-sm mb-4">Interested in corporate partnerships, legacy giving, or in-kind donations?</p>
                  <Link href="/contact" className="text-[#1F3A6D] text-sm font-semibold hover:underline inline-flex items-center gap-1">
                    Contact our team <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
