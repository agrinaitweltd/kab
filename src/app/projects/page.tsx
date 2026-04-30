"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, School, Wheat, Users, Heart, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const projects = [
  {
    id: "education",
    icon: School,
    title: "School Fees Support Program",
    subtitle: "Keeping children in class, one term at a time",
    description: "Every year, thousands of children in Bunyoro are forced to drop out of school because their families cannot afford tuition fees. Our School Fees Support Program directly pays school fees for identified underprivileged children from primary through secondary school.",
    impact: ["1,200+ students sponsored annually", "92% school retention rate among beneficiaries", "Covering 60+ schools across Bunyoro", "Priority given to orphans and girls"],
    img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop&q=80",
    stats: [{ label: "Students", value: "1,200+" }, { label: "Schools", value: "60+" }, { label: "Retention", value: "92%" }],
  },
  {
    id: "agriculture",
    icon: Wheat,
    title: "Agriculture & Farming Initiative",
    subtitle: "Feeding families, building livelihoods",
    description: "Bunyoro has some of the most fertile land in East Africa, yet many smallholder farmers struggle due to outdated techniques and limited inputs. Our Agriculture Initiative provides training, tools, and market linkages to transform subsistence farmers into sustainable producers.",
    impact: ["300+ farming families trained", "Modern techniques: crop rotation, irrigation, organic farming", "Seed banks and cooperative market systems", "Average income increase of 60% among participants"],
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop&q=80",
    stats: [{ label: "Families", value: "300+" }, { label: "Income +", value: "60%" }, { label: "Crops", value: "12" }],
  },
  {
    id: "youth",
    icon: Users,
    title: "Youth Skills & Empowerment",
    subtitle: "Building the next generation of leaders",
    description: "Youth unemployment is one of the most pressing challenges facing Bunyoro. Our Youth Empowerment Program offers vocational training, entrepreneurship education, mentorship, and startup grants to give young people the practical skills to build successful futures.",
    impact: ["500+ youth trained in vocational skills", "Courses: tailoring, carpentry, IT, agribusiness", "Mentorship from local business leaders", "Startup seed grants for top graduates"],
    img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&auto=format&fit=crop&q=80",
    stats: [{ label: "Youth", value: "500+" }, { label: "Skills", value: "8" }, { label: "Employed", value: "74%" }],
  },
  {
    id: "community",
    icon: Heart,
    title: "Community Development Projects",
    subtitle: "Building infrastructure for tomorrow",
    description: "Strong communities need more than individual support—they need infrastructure, services, and systems that work for everyone. Our Community Development Projects fund clean water access, healthcare outreach, women''s groups, and village-level infrastructure improvements.",
    impact: ["45+ villages with active programs", "Clean water access for 5,000+ people", "Monthly healthcare outreach clinics", "Women''s savings and credit groups"],
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80",
    stats: [{ label: "Villages", value: "45+" }, { label: "People", value: "5,000+" }, { label: "Groups", value: "22" }],
  },
];

export default function ProjectsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute left-0 top-20 w-[600px] h-32 bg-[#1F3A6D] rounded-r-full" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-[#5A6270] leading-tight mb-6">
              How we <span className="text-[#1F3A6D]">work</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5A6270] max-w-3xl mx-auto leading-relaxed">
              Four focused initiatives designed to break the cycle of poverty and build stronger, more self-sufficient communities across Bunyoro.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Programs */}
      {projects.map((project, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <section
            key={project.id}
            id={project.id}
            className={`py-20 md:py-32 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}>
                {/* Image */}
                <FadeIn
                  direction={isEven ? "left" : "right"}
                  className={!isEven ? "lg:col-start-2" : ""}
                >
                  <div className="relative group">
                    <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    
                    {/* Stats Overlay */}
                    <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                      {project.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="bg-white rounded-xl p-4 shadow-lg text-center border border-gray-100"
                        >
                          <p className="text-2xl md:text-3xl font-bold text-[#1F3A6D]">{stat.value}</p>
                          <p className="text-xs text-gray-600 mt-1">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>

                {/* Content */}
                <FadeIn
                  direction={isEven ? "right" : "left"}
                  className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}
                >
                  <div className="lg:pt-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-[#1F3A6D]/10 rounded-2xl mb-6">
                      <project.icon size={28} className="text-[#1F3A6D]" />
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h2>
                    <p className="text-lg md:text-xl text-[#1F3A6D] font-medium mb-6">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Impact List */}
                    <div className="space-y-3 mb-8">
                      {project.impact.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#1F3A6D]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-blue-600" />
                          </div>
                          <p className="text-gray-600 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href="/donate"
                        className="inline-flex items-center gap-2 bg-[#1F3A6D] hover:bg-[#162D56] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg active:scale-100"
                      >
                        Support This Program
                        <ArrowRight size={18} />
                      </Link>
                    </motion.div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1F3A6D] to-[#162D56] relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-40" 
          style={{ backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djEwaC0xMFYxNmgxMHpNMTQgNDZ2MTBoMTBWNDZIMTR6TTM2IDM2djEwaC0xMFYzNmgxMHpNNTYgMzZ2MTBoMTBWMzZINTZ6Ii8+PC9nPjwvZz48L3N2Zz4')` }}
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse" as const,
          }}
        />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Your support helps us provide education, skills training, and sustainable livelihoods to families across Bunyoro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#1F3A6D] font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-xl"
                >
                  Make a Donation
                  <Heart size={18} className="fill-current" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-lg border-2 border-white/20 transition-all duration-200"
                >
                  Partner With Us
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
