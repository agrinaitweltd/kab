"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, School, Wheat, Globe, Heart, TrendingUp, ChevronDown } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

const stats = [
  { value: "1,200+", label: "Students Supported", icon: School },
  { value: "45+", label: "Villages Reached", icon: Globe },
  { value: "300+", label: "Families Empowered", icon: Users },
  { value: "8+", label: "Years of Impact", icon: TrendingUp },
];

const programs = [
  {
    title: "School Fees Program",
    description: "We pay school fees for underprivileged children across Bunyoro, keeping them in school and building a foundation for their futures.",
    icon: School,
    color: "bg-blue-50 border-blue-100",
    iconColor: "text-blue-600 bg-blue-100",
    href: "/projects#education",
    img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Agriculture & Farming",
    description: "Training smallholder farmers in modern techniques to increase yields, improve food security, and generate sustainable income.",
    icon: Wheat,
    color: "bg-green-50 border-green-100",
    iconColor: "text-green-600 bg-green-100",
    href: "/projects#agriculture",
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Youth Empowerment",
    description: "Skills training, mentorship, and entrepreneurship programs that equip young people with tools to build prosperous lives.",
    icon: Users,
    color: "bg-purple-50 border-purple-100",
    iconColor: "text-purple-600 bg-purple-100",
    href: "/projects#youth",
    img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Community Development",
    description: "Infrastructure improvements, clean water access, healthcare outreach, and grassroots community-led development projects.",
    icon: Heart,
    color: "bg-rose-50 border-rose-100",
    iconColor: "text-rose-600 bg-rose-100",
    href: "/projects#community",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=80",
  },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 pt-20">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 bg-blue-700/50 border border-blue-500/40 text-blue-200 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                Bunyoro Region, Uganda
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Empowering <span className="text-cyan-400">Communities</span> Across Bunyoro
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="text-blue-100 text-lg leading-relaxed mb-10 max-w-lg">
                We bring education, sustainable agriculture, and opportunity to the people of the Bunyoro region � building stronger communities, one family at a time.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="flex flex-wrap gap-4">
                <Link href="/donate" className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-blue-950 font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-cyan-400/30 hover:scale-105 active:scale-100">
                  Donate Now <Heart size={18} />
                </Link>
                <Link href="/about" className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:bg-white/10">
                  Learn More <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label, icon: Icon }, i) => (
                <motion.div key={label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors">
                  <Icon size={28} className="text-cyan-400 mb-3" />
                  <p className="text-3xl font-extrabold text-white mb-1">{value}</p>
                  <p className="text-blue-200 text-sm">{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-100 rounded-3xl -z-10" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format&fit=crop&q=80" alt="Children in Bunyoro" width={600} height={450} className="object-cover w-full" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-700 text-white rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-extrabold">8+</p>
                  <p className="text-sm text-blue-200">Years of Service</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <p className="text-blue-600 font-semibold uppercase tracking-widest text-xs mb-3">Who We Are</p>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">A Foundation Built on <span className="text-blue-700">Community Trust</span></h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-5">The Kabalega Society Foundation is a non-profit organisation rooted in the Bunyoro region of Uganda. We exist to break the cycle of poverty through targeted, sustainable interventions in education, agriculture, and community empowerment.</p>
                <p className="text-gray-600 leading-relaxed mb-8">Named after the legendary King Kabalega of Bunyoro, we carry a legacy of resilience and pride � channelling it into programs that create lasting change for the most vulnerable members of our communities.</p>
                <Link href="/about" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-4 transition-all duration-200 group">
                  Our full story <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-blue-600 font-semibold uppercase tracking-widest text-xs mb-3">What We Do</p>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Core Programs</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Four pillars of impact designed to create sustainable change across generations.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, i) => (
              <FadeIn key={program.title} delay={i * 100}>
                <Link href={program.href} className={`group block rounded-2xl border overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${program.color}`}>
                  <div className="relative h-44 overflow-hidden">
                    <Image src={program.img} alt={program.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className={`inline-flex p-2 rounded-lg mb-3 ${program.iconColor}`}><program.icon size={18} /></div>
                    <h3 className="font-bold text-gray-900 mb-2 text-base">{program.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{program.description}</p>
                    <div className="flex items-center gap-1 mt-4 text-blue-600 text-sm font-semibold group-hover:gap-2 transition-all">Learn more <ArrowRight size={14} /></div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-24 bg-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="text-cyan-300 text-6xl font-serif mb-4">&ldquo;</div>
            <blockquote className="text-white text-2xl sm:text-3xl font-light leading-relaxed mb-8">Every child in Bunyoro deserves a chance at education. Every family deserves the dignity of self-sufficiency. We are here to make that happen.</blockquote>
            <p className="text-blue-200 font-semibold">� Founder, Kabalega Society Foundation</p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Donate", desc: "Your contribution directly funds school fees, farming equipment, and community projects.", cta: "Give Now", href: "/donate", style: "bg-blue-700 text-white", ctaStyle: "bg-white text-blue-700 hover:bg-blue-50" },
              { title: "Partner With Us", desc: "Join us as an organisational partner and connect your mission with ours across Bunyoro.", cta: "Get in Touch", href: "/contact", style: "bg-gray-900 text-white", ctaStyle: "bg-white text-gray-900 hover:bg-gray-100" },
              { title: "Spread the Word", desc: "Share our work with your network and help us reach more donors, volunteers, and partners.", cta: "Learn How", href: "/about", style: "bg-cyan-500 text-white", ctaStyle: "bg-white text-cyan-700 hover:bg-cyan-50" },
            ].map((card, i) => (
              <FadeIn key={card.title} delay={i * 120}>
                <div className={`rounded-2xl p-8 h-full flex flex-col ${card.style}`}>
                  <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="opacity-80 leading-relaxed flex-1 mb-6">{card.desc}</p>
                  <Link href={card.href} className={`inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105 ${card.ctaStyle}`}>
                    {card.cta} <ArrowRight size={16} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
