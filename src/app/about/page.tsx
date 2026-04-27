"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Eye, Users, Calendar } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const timeline = [
  { year: "2016", title: "Foundation Established", desc: "Launched with a focus on school fee support for underprivileged children in Hoima District." },
  { year: "2018", title: "Agriculture Program", desc: "Introduced smallholder farmer training, reaching over 80 families in the first year." },
  { year: "2020", title: "Youth Empowerment", desc: "Launched vocational skills centres offering education to unemployed youth across Bunyoro." },
  { year: "2022", title: "Regional Expansion", desc: "Expanded to 30+ villages with clean water projects and healthcare outreach programs." },
  { year: "2024", title: "Major Milestone", desc: "Reached 45+ villages, supported 1,200+ students, established international partnerships." },
  { year: "2026", title: "Looking Ahead", desc: "Scaling programs with digital literacy and women''s empowerment initiatives." },
];

const leadership = [
  { name: "Mr. John Byamukama", role: "Executive Director", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80" },
  { name: "Dr. Grace Tumwesigye", role: "Director of Programs", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&auto=format&fit=crop&q=80" },
  { name: "Mr. Robert Kagoro", role: "Finance & Operations", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80" },
  { name: "Ms. Patience Akello", role: "Community Liaison", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&auto=format&fit=crop&q=80" },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute left-0 top-20 w-[600px] h-32 bg-[#FFB800] rounded-r-full" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-[#5A6270] leading-tight mb-6">
              About <span className="text-[#FF2E7E]">us</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5A6270] max-w-3xl mx-auto leading-relaxed">
              A community-driven foundation working to create lasting change through education, agriculture, and empowerment across the Bunyoro region.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&auto=format&fit=crop&q=80"
                    alt="Community in Bunyoro"
                    fill
                    className="object-cover img-grayscale"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <span className="text-[#FF2E7E] font-semibold text-sm uppercase tracking-wider">Our Story</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5A6270] mt-3 mb-6">
                  A Legacy of Resilience & Service
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    Named after King Kabalega�one of Africa''s greatest warrior kings and a symbol of resistance and dignity�the Kabalega Society Foundation was born out of a deep love for the people of Bunyoro.
                  </p>
                  <p>
                    We started with a simple conviction: that every child deserves to go to school regardless of their family''s economic circumstances. From that seed, we have grown into a comprehensive development organisation addressing poverty, food insecurity, youth unemployment, and community underdevelopment.
                  </p>
                  <p>
                    Today, we operate across <strong>45+ villages</strong>, supporting over <strong>1,200 students</strong> and <strong>300 families</strong> with targeted, dignified, and sustainable programs that respect local culture and amplify community-led solutions.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5A6270]">Mission & Vision</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn direction="left">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-200 h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-pink-100 rounded-2xl mb-6">
                  <Target size={28} className="text-[#FF2E7E]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A6270] mb-4">Our Mission</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To empower the people of Bunyoro through sustainable development programs in education, agriculture, and community building�creating pathways out of poverty and into prosperity.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-200 h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-cyan-100 rounded-2xl mb-6">
                  <Eye size={28} className="text-[#00D4FF]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A6270] mb-4">Our Vision</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A Bunyoro region where every child is educated, every family has the dignity of self-sufficiency, and communities thrive through collective action and sustainable development.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-[#FF2E7E] font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5A6270] mt-3">A Decade of Impact</h2>
          </FadeIn>

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <FadeIn key={item.year} delay={i * 100}>
                <div className="flex gap-6 md:gap-8 group">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FF2E7E] text-white rounded-2xl flex items-center justify-center font-bold text-lg md:text-xl group-hover:scale-110 transition-transform">
                      {item.year}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-pink-300 to-transparent mt-4" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl md:text-2xl font-bold text-[#5A6270] mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-[#FF2E7E] font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5A6270] mt-3 mb-4">Leadership</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to transforming lives across Bunyoro
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((person, i) => (
              <FadeIn key={person.name} delay={i * 100}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative aspect-square">
                    <Image
                      src={person.img}
                      alt={person.name}
                      fill
                      className="object-cover img-grayscale"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-bold text-lg text-[#5A6270] mb-1">{person.name}</h3>
                    <p className="text-[#FF2E7E] text-sm font-medium">{person.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#FF2E7E] to-[#E0266F] relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djEwaC0xMFYxNmgxMHpNMTQgNDZ2MTBoMTBWNDZIMTR6TTM2IDM2djEwaC0xMFYzNmgxMHpNNTYgMzZ2MTBoMTBWMzZINTZ6Ii8+PC9nPjwvZz48L3N2Zz4')` }} />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether through donations, volunteering, or partnerships�your support helps us transform lives across Bunyoro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-600 font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-100"
              >
                Support Our Work
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-lg border-2 border-white/20 transition-all duration-200"
              >
                Get in Touch
                <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
