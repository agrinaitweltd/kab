"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, RefreshCw, Zap, School, Wheat, Users, CheckCircle2, ArrowRight } from "lucide-react";
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
          <Link href="/" className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full transition-all">
            Back to Home <ArrowRight size={16} />
          </Link>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 pt-40 pb-24">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-cyan-400 font-semibold uppercase tracking-widest text-xs mb-4">Make a Difference</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Give the Gift of <span className="text-cyan-400">Opportunity</span>
            </h1>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto leading-relaxed">
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
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= s ? "bg-blue-700 text-white" : "bg-gray-100 text-gray-400"}`}>
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
                              className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 font-semibold transition-all text-sm ${donationType === val ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 text-gray-600 hover:border-blue-300"}`}
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
                              className={`p-3 rounded-xl border-2 font-bold text-sm transition-all ${selectedAmount === amt && !customAmount ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 text-gray-700 hover:border-blue-300"}`}
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
                            className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-gray-900 font-semibold"
                          />
                        </div>
                      </div>

                      {finalAmount && (
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-700">
                          You are donating <strong>£{finalAmount}</strong> {donationType === "monthly" ? "every month" : "once"}. Thank you for your generosity.
                        </div>
                      )}

                      <button
                        onClick={() => setStep(2)}
                        disabled={!finalAmount || finalAmount <= 0}
                        className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold py-4 rounded-xl transition-all text-base hover:shadow-lg"
                      >
                        Continue to Details →
                      </button>
                    </div>
                  )}

                  {step === 2 && (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-700 mb-6">
                        Donating <strong>£{finalAmount}</strong> {donationType === "monthly" ? "monthly" : "once"}.{" "}
                        <button onClick={() => setStep(1)} className="underline font-medium">Change</button>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name *</label>
                          <input required value={formData.firstName} onChange={e => setFormData(p => ({...p, firstName: e.target.value}))} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-gray-900" placeholder="Jane" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name *</label>
                          <input required value={formData.lastName} onChange={e => setFormData(p => ({...p, lastName: e.target.value}))} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-gray-900" placeholder="Smith" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                        <input required type="email" value={formData.email} onChange={e => setFormData(p => ({...p, email: e.target.value}))} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-gray-900" placeholder="jane@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Dedication or Message (optional)</label>
                        <textarea value={formData.message} onChange={e => setFormData(p => ({...p, message: e.target.value}))} rows={3} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-gray-900 resize-none" placeholder="In memory of... / In honour of..." />
                      </div>

                      <p className="text-xs text-gray-400">
                        🔒 This is a demonstration form. In production, this would connect to a secure payment processor (Stripe, PayPal, etc.). Your details are safe.
                      </p>

                      <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-xl transition-all text-base hover:shadow-lg flex items-center justify-center gap-2">
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
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <item.icon size={18} className="text-blue-600" />
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
                <div className="bg-blue-700 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-3">Why Give Monthly?</h3>
                  <p className="text-blue-100 text-sm leading-relaxed mb-4">
                    Monthly giving helps us plan programs, pay school fees on time, and maintain continuity for the families we serve. Even £10/month makes a lasting difference.
                  </p>
                  <button onClick={() => { setDonationType("monthly"); setStep(1); }} className="text-cyan-300 text-sm font-semibold underline hover:text-cyan-200">
                    Switch to monthly giving →
                  </button>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={200}>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">Other Ways to Give</h3>
                  <p className="text-gray-500 text-sm mb-4">Interested in corporate partnerships, legacy giving, or in-kind donations?</p>
                  <Link href="/contact" className="text-blue-700 text-sm font-semibold hover:underline inline-flex items-center gap-1">
                    Contact our team <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
