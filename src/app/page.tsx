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
    description: "Paying school fees for underprivileged children across Bunyoro, ensuring every child has access to quality education.",
    icon: School,
    href: "/projects#education",
    img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Agriculture & Farming",
    description: "Training smallholder farmers in modern techniques to increase yields and create sustainable income streams.",
    icon: Wheat,
    href: "/projects#agriculture",
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Youth Empowerment",
    description: "Skills training and mentorship programs equipping young people with tools to build successful futures.",
    icon: Users,
    href: "/projects#youth",
    img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Community Development",
    description: "Infrastructure improvements, clean water access, healthcare outreach, and community-led development.",
    icon: Heart,
    href: "/projects#community",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=80",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxZTQwYWYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2djEwaC0xMFYxNmgxMHpNMTQgNDZ2MTBoMTBWNDZIMTR6TTM2IDM2djEwaC0xMFYzNmgxMHpNNTYgMzZ2MTBoMTBWMzZINTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                Serving Bunyoro Since 2016
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
                Building Futures in
                <span className="text-blue-600 block mt-2">Bunyoro, Uganda</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                We empower communities through education, agriculture, and sustainable development-creating lasting change for over 1,200 students and 300 families.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-100"
                >
                  Support Our Mission
                  <Heart size={18} className="fill-current" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-lg border-2 border-gray-200 transition-all duration-200"
                >
                  Explore Programs
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-full h-full bg-blue-200 rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format&fit=crop&q=80"
                  alt="Community in Bunyoro"
                  width={700}
                  height={600}
                  className="object-cover w-full h-[400px] md:h-[500px]"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map(({ value, label, icon: Icon }, i) => (
              <FadeIn key={label} delay={i * 100}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-3">
                    <Icon size={24} className="text-blue-600" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{value}</p>
                  <p className="text-gray-600 text-sm md:text-base">{label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format&fit=crop&q=80"
                    alt="Children in Bunyoro"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-full opacity-10 -z-10" />
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Breaking the Cycle of Poverty
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The Kabalega Society Foundation is rooted in the Bunyoro region of Uganda. We exist to break the cycle of poverty through targeted, sustainable interventions in education, agriculture, and community empowerment.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Named after King Kabalega-a symbol of resistance and dignity-we honor his legacy by fighting for the futures of underprivileged children and families across Bunyoro.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group"
                >
                  Learn About Our Story
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Core Programs
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Four focused initiatives designed to create sustainable, community-led change
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {programs.map((program, i) => (
              <FadeIn key={program.title} delay={i * 100}>
                <Link
                  href={program.href}
                  className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={program.img}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg">
                        <program.icon size={20} className="text-blue-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djEwaC0xMFYxNmgxMHpNMTQgNDZ2MTBoMTBWNDZIMTR6TTM2IDM2djEwaC0xMFYzNmgxMHpNNTYgMzZ2MTBoMTBWMzZINTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Every Child Deserves a Chance
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Your support helps us provide education, skills training, and sustainable livelihoods to families across Bunyoro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-600 font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-100"
              >
                Make a Donation
                <Heart size={18} className="fill-current" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-lg border-2 border-white/20 transition-all duration-200"
              >
                Get Involved
                <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
