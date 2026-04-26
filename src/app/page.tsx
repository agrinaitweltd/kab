"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, School, Wheat, Globe, Heart, TrendingUp } from "lucide-react";
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
    href: "/projects#education",
    img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Agriculture & Farming",
    description: "Training smallholder farmers in modern techniques to increase yields, improve food security, and generate sustainable income.",
    icon: Wheat,
    href: "/projects#agriculture",
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Youth Empowerment",
    description: "Skills training, mentorship, and entrepreneurship programs that equip young people with tools to build prosperous lives.",
    icon: Users,
    href: "/projects#youth",
    img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Community Development",
    description: "Infrastructure improvements, clean water access, healthcare outreach, and grassroots community-led development projects.",
    icon: Heart,
    href: "/projects#community",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=80",
  },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-white pt-20 overflow-hidden">
        <div className="absolute top-32 left-0 h-32 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-r-full" style={{ width: "45%" }} />
        <div className="absolute -bottom-32 -right-32 w-[800px] h-[800px] bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8">
                <div className="inline-block relative">
                  <div className="absolute -left-4 top-0 w-24 h-full bg-yellow-400 rounded-r-full -z-10" />
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-blue-700 leading-none relative z-10 pl-6">
                    Unique
                  </h1>
                </div>
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8 max-w-xl">
                We are an independent foundation, with the freedom to inspire change for better health across Bunyoro.
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg">
                Our work supports sustainable development and wider community systems in the Bunyoro region of Uganda.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }} className="flex flex-wrap gap-4">
                <Link href="/donate" className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-100">
                  Donate Now <Heart size={18} />
                </Link>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.4 }} className="relative">
              <div className="absolute -top-12 -right-12 w-[500px] h-[500px] bg-gradient-to-br from-blue-400 to-blue-500 rounded-full -z-10" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format&fit=crop&q=80" alt="Community member" width={600} height={700} className="object-cover w-full h-[600px] grayscale" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full -z-10" style={{ transform: "translateX(30%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="absolute -bottom-16 -left-16 w-[600px] h-[400px] bg-gradient-to-br from-blue-500 to-blue-600 rounded-[200px] -z-10" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format&fit=crop&q=80" alt="Children in Bunyoro" width={600} height={450} className="object-cover w-full grayscale" />
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <div className="mb-6 inline-block relative">
                  <div className="absolute -left-4 top-0 w-20 h-full bg-yellow-400 rounded-r-full -z-10" />
                  <h2 className="text-4xl sm:text-5xl font-black text-blue-700 leading-tight pl-6">
                    Hello.
                  </h2>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
                  We bring together funders and high impact health initiatives to further the mission across Bunyoro.
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  The Kabalega Society Foundation is rooted in the Bunyoro region of Uganda. We exist to break the cycle of poverty through targeted, sustainable interventions in education, agriculture, and community empowerment.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We focus on initiatives that address inequities and the barriers to good development ? including poverty, lack of education, discrimination, and injustice.
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-full transition-all">
                  About us
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label, icon: Icon }, i) => (
              <FadeIn key={label} delay={i * 80}>
                <div className="text-center">
                  <Icon size={32} className="text-blue-600 mx-auto mb-3" />
                  <p className="text-4xl font-black text-gray-900 mb-1">{value}</p>
                  <p className="text-gray-500 text-sm">{label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full -z-10" style={{ transform: "translate(-30%, 30%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <div className="inline-block relative mb-4">
              <div className="absolute -left-4 top-0 w-20 h-full bg-yellow-400 rounded-r-full -z-10" />
              <h2 className="text-4xl sm:text-5xl font-black text-blue-700 leading-tight pl-6">
                We need you...
              </h2>
            </div>
            <p className="text-gray-600 text-xl max-w-3xl">
              Four focused programs designed to create sustainable change across Bunyoro.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, i) => (
              <FadeIn key={program.title} delay={i * 100}>
                <Link href={program.href} className="group block rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  <div className="relative h-44 overflow-hidden">
                    <Image src={program.img} alt={program.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                  </div>
                  <div className="p-5">
                    <div className="inline-flex p-2 rounded-lg mb-3 bg-blue-100 text-blue-600">
                      <program.icon size={18} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-base">{program.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{program.description}</p>
                    <div className="flex items-center gap-1 text-blue-600 text-sm font-semibold group-hover:gap-2 transition-all">
                      Learn more <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-blue-600 to-blue-500 -z-10" style={{ clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="mb-6 inline-block relative">
              <div className="absolute -left-4 top-0 w-20 h-full bg-yellow-400 rounded-r-full -z-10" />
              <h2 className="text-4xl sm:text-5xl font-black text-blue-700 leading-tight pl-6">
                Our vision
              </h2>
            </div>
            <blockquote className="text-gray-700 text-2xl sm:text-3xl font-bold leading-relaxed mb-8">
              A Bunyoro region where health knows no bounds, every child is educated, and every family has the dignity of self-sufficiency.
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Donate", desc: "Your contribution directly funds school fees, farming equipment, and community projects.", cta: "Give Now", href: "/donate" },
              { title: "Partner With Us", desc: "Join us as an organisational partner and connect your mission with ours across Bunyoro.", cta: "Get in Touch", href: "/contact" },
              { title: "Spread the Word", desc: "Share our work with your network and help us reach more donors, volunteers, and partners.", cta: "Learn How", href: "/about" },
            ].map((card, i) => (
              <FadeIn key={card.title} delay={i * 120}>
                <div className="rounded-2xl p-8 h-full flex flex-col bg-white border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-1 mb-6">{card.desc}</p>
                  <Link href={card.href} className="inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105 bg-blue-700 text-white hover:bg-blue-800">
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
