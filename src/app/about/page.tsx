"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Eye, Users, Calendar, MapPin } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const timeline = [
  { year: "2016", title: "Foundation Established", desc: "Kabalega Society Foundation was founded with a focus on school fee support for children in Hoima District." },
  { year: "2018", title: "Agriculture Program Launch", desc: "We introduced smallholder farmer training programs, reaching over 80 families in the first year." },
  { year: "2020", title: "Youth Empowerment Initiative", desc: "Launched skills training centres offering vocational education to unemployed youth across Bunyoro." },
  { year: "2022", title: "Community Development Expansion", desc: "Expanded operations to 30+ villages, initiating clean water projects and healthcare outreach programs." },
  { year: "2024", title: "Regional Growth", desc: "Reached 45+ villages and supported over 1,200 students. Established key partnerships with international donors." },
  { year: "2026", title: "Looking Forward", desc: "Scaling our programs across the entire Bunyoro region with new digital literacy and women's empowerment initiatives." },
];

const leadership = [
  { name: "Mr. John Byamukama", role: "Executive Director", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80" },
  { name: "Dr. Grace Tumwesigye", role: "Director of Programs", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&auto=format&fit=crop&q=80" },
  { name: "Mr. Robert Kagoro", role: "Finance & Operations", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80" },
  { name: "Ms. Patience Akello", role: "Community Liaison", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&auto=format&fit=crop&q=80" },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-white pt-40 pb-24 overflow-hidden">
        <div className="absolute top-32 left-0 h-32 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-r-full" style={{ width: "40%" }} />
        <div className="absolute -bottom-32 -right-32 w-[700px] h-[700px] bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <FadeIn>
            <div className="mb-6 inline-block relative">
              <div className="absolute -left-4 top-0 w-20 h-full bg-yellow-400 rounded-r-full -z-10" />
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-blue-700 leading-tight pl-6">
                Rethink
              </h1>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6 max-w-3xl">
              We disrupt, reimagine and reshape how people and communities contribute to global health across Bunyoro.
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="space-y-5">
                <p className="text-blue-600 font-semibold uppercase tracking-widest text-xs">Our Story</p>
                <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
                  A Legacy of <span className="text-blue-700">Resilience & Service</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Named after King Kabalega — one of Africa&apos;s greatest warrior kings and a symbol of resistance and dignity — the Kabalega Society Foundation was born out of a deep love for the people of Bunyoro.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We started with a simple conviction: that every child deserves to go to school regardless of their family&apos;s economic circumstances. From that seed, we have grown into a comprehensive development organisation addressing the interconnected challenges of poverty, food insecurity, youth unemployment, and community underdevelopment.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we operate across 45+ villages, supporting over 1,200 students and 300 families with targeted, dignified, and sustainable programs that respect local culture and amplify community-led solutions.
                </p>
                <div className="flex items-center gap-2 text-gray-500 text-sm pt-2">
                  <MapPin size={16} className="text-blue-500" />
                  <span>Headquartered in Hoima, Bunyoro Region, Uganda</span>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-64 h-64 bg-cyan-100 rounded-3xl -z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&auto=format&fit=crop&q=80"
                  alt="Community in Bunyoro"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl object-cover w-full"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900">Mission &amp; Vision</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn direction="left">
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 h-full">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Target size={28} className="text-blue-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed font-medium mb-4">
                  To empower communities across the Bunyoro region through sustainable education, agriculture, and development programs that create lasting, dignified change.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  We focus on initiatives that address the root causes of poverty — not just its symptoms — building capacity from within communities so that progress endures long after our direct involvement ends.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div id="vision" className="bg-blue-700 rounded-2xl p-10 shadow-sm h-full">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Eye size={28} className="text-cyan-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-blue-100 text-lg leading-relaxed font-medium mb-4">
                  A Bunyoro region where every child is educated, every family is food-secure, and every young person has the skills to build a prosperous future.
                </p>
                <p className="text-blue-200 leading-relaxed">
                  We envision communities that are self-sufficient, resilient, and connected — contributing meaningfully to Uganda&apos;s development and serving as a model for grassroots-led transformation across East Africa.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-blue-600 font-semibold uppercase tracking-widest text-xs mb-3">Our Journey</p>
            <h2 className="text-4xl font-extrabold text-gray-900">A Decade of Impact</h2>
          </FadeIn>
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-blue-100 hidden md:block" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <FadeIn key={item.year} delay={i * 80} direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className="flex-1 md:text-right">
                      {i % 2 === 0 ? (
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                          <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      ) : <div />}
                    </div>
                    <div className="flex-shrink-0 z-10">
                      <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center shadow-lg">
                        <div className="text-center">
                          <p className="text-white font-bold text-xs leading-tight">{item.year}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      {i % 2 !== 0 ? (
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                          <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      ) : <div />}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-blue-600 font-semibold uppercase tracking-widest text-xs mb-3">Our People</p>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Dedicated professionals committed to driving change across the Bunyoro region.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((person, i) => (
              <FadeIn key={person.name} delay={i * 100}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-56 overflow-hidden">
                    <Image src={person.img} alt={person.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-1">{person.name}</h3>
                    <p className="text-blue-600 text-sm font-medium">{person.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Join Our Mission</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Be part of the change. Your support helps us reach more children, more families, and more communities across Bunyoro.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/donate" className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-blue-950 font-bold px-8 py-4 rounded-full transition-all hover:scale-105">
                Donate Now <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all hover:bg-white/10">
                Contact Us <Users size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
