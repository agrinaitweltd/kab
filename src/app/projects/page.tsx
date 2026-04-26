"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, School, Wheat, Users, Heart, BookOpen, Tractor, Lightbulb, Home } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const projects = [
  {
    id: "education",
    icon: School,
    tag: "Education",
    title: "School Fees Support Program",
    subtitle: "Keeping children in class, one term at a time",
    description: "Every year, thousands of children in Bunyoro are forced to drop out of school because their families cannot afford tuition fees. Our School Fees Support Program directly pays school fees for identified underprivileged children from primary through secondary school.",
    impact: ["1,200+ students sponsored annually", "92% school retention rate among beneficiaries", "Covering 60+ schools across Bunyoro", "Priority given to orphans and girls"],
    progress: 78,
    progressLabel: "Annual target reached",
    img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop&q=80",
    color: "blue",
    stats: [{ label: "Students Supported", value: "1,200+" }, { label: "Schools Covered", value: "60+" }, { label: "Retention Rate", value: "92%" }],
  },
  {
    id: "agriculture",
    icon: Wheat,
    tag: "Agriculture",
    title: "Agriculture & Farming Initiative",
    subtitle: "Feeding families, building livelihoods",
    description: "Bunyoro has some of the most fertile land in East Africa, yet many smallholder farmers struggle due to outdated techniques, limited inputs, and poor market access. Our Agriculture Initiative provides training, tools, and market linkages to transform subsistence farmers into sustainable producers.",
    impact: ["300+ farming families trained", "Modern techniques: crop rotation, irrigation, organic farming", "Seed banks and cooperative market systems", "Average income increase of 60% among participants"],
    progress: 65,
    progressLabel: "Families reached of 500 target",
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop&q=80",
    color: "green",
    stats: [{ label: "Families Trained", value: "300+" }, { label: "Income Increase", value: "60%" }, { label: "Crops Supported", value: "12" }],
  },
  {
    id: "youth",
    icon: Users,
    tag: "Youth",
    title: "Youth Skills & Empowerment Program",
    subtitle: "Building the next generation of Bunyoro leaders",
    description: "Youth unemployment is one of the most pressing challenges facing Bunyoro. Our Youth Empowerment Program offers vocational training, entrepreneurship education, mentorship, and startup grants to give young people the practical skills and confidence to build their own futures.",
    impact: ["500+ youth trained in vocational skills", "Courses: tailoring, carpentry, IT, agribusiness", "Mentorship from local business leaders", "Startup seed grants for top graduates"],
    progress: 55,
    progressLabel: "Programme capacity filled",
    img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&auto=format&fit=crop&q=80",
    color: "purple",
    stats: [{ label: "Youth Trained", value: "500+" }, { label: "Skills Tracks", value: "8" }, { label: "Employment Rate", value: "74%" }],
  },
  {
    id: "community",
    icon: Heart,
    tag: "Community",
    title: "Community Development Projects",
    subtitle: "Building infrastructure for a better tomorrow",
    description: "Strong communities need more than individual support — they need infrastructure, services, and systems that work for everyone. Our Community Development Projects fund clean water access, healthcare outreach, women's groups, and village-level infrastructure improvements across Bunyoro.",
    impact: ["45+ villages with active programs", "Clean water access for 5,000+ people", "Monthly healthcare outreach clinics", "Women's savings and credit groups"],
    progress: 60,
    progressLabel: "Villages reached of 75 target",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80",
    color: "rose",
    stats: [{ label: "Villages Reached", value: "45+" }, { label: "Water Beneficiaries", value: "5,000+" }, { label: "Women's Groups", value: "22" }],
  },
];

const colorMap: Record<string, { bar: string; tag: string; icon: string; border: string }> = {
  blue: { bar: "bg-blue-600", tag: "bg-blue-100 text-blue-700", icon: "bg-blue-100 text-blue-600", border: "border-blue-200" },
  green: { bar: "bg-green-600", tag: "bg-green-100 text-green-700", icon: "bg-green-100 text-green-600", border: "border-green-200" },
  purple: { bar: "bg-purple-600", tag: "bg-purple-100 text-purple-700", icon: "bg-purple-100 text-purple-600", border: "border-purple-200" },
  rose: { bar: "bg-rose-600", tag: "bg-rose-100 text-rose-700", icon: "bg-rose-100 text-rose-600", border: "border-rose-200" },
};

export default function ProjectsPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 pt-40 pb-24">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-cyan-400 font-semibold uppercase tracking-widest text-xs mb-4">Our Work</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Programs <span className="text-cyan-400">Making a Difference</span>
            </h1>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto leading-relaxed">
              Four focused programs, one unified mission — to build stronger, more self-sufficient communities across the Bunyoro region.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="bg-white border-b border-gray-100 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-0 scrollbar-hide">
            {[
              { id: "education", label: "Education", icon: BookOpen },
              { id: "agriculture", label: "Agriculture", icon: Tractor },
              { id: "youth", label: "Youth", icon: Lightbulb },
              { id: "community", label: "Community", icon: Home },
            ].map(({ id, label, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex items-center gap-2 px-6 py-4 text-sm font-medium text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-colors whitespace-nowrap border-b-2 border-transparent hover:border-blue-600"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <div className="py-8 bg-gray-50">
        {projects.map((project, idx) => {
          const colors = colorMap[project.color];
          const isEven = idx % 2 === 0;
          return (
            <section key={project.id} id={project.id} className="py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}>
                  {/* Image */}
                  <FadeIn direction={isEven ? "left" : "right"} className={!isEven ? "lg:col-start-2" : ""}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={700}
                        height={500}
                        className="object-cover w-full h-80 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      {/* Stats overlay */}
                      <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                        {project.stats.map((s) => (
                          <div key={s.label} className="bg-white/90 backdrop-blur rounded-xl px-3 py-2 text-center flex-1 min-w-0">
                            <p className="font-extrabold text-gray-900 text-sm">{s.value}</p>
                            <p className="text-gray-500 text-xs truncate">{s.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeIn>

                  {/* Content */}
                  <FadeIn direction={isEven ? "right" : "left"} className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${colors.tag}`}>
                          <project.icon size={12} />
                          {project.tag}
                        </span>
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2 leading-tight">{project.title}</h2>
                      <p className="text-blue-600 font-medium mb-5">{project.subtitle}</p>
                      <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

                      {/* Impact list */}
                      <ul className="space-y-2 mb-7">
                        {project.impact.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-gray-600 text-sm">
                            <span className={`mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center ${colors.icon}`}>
                              <span className="w-1.5 h-1.5 rounded-full bg-current" />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Progress bar */}
                      <div className="mb-7">
                        <div className="flex justify-between text-xs text-gray-500 mb-2">
                          <span className="font-medium">{project.progressLabel}</span>
                          <span className="font-bold text-gray-700">{project.progress}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ${colors.bar}`}
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>

                      <Link
                        href="/donate"
                        className={`inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full transition-all hover:scale-105 hover:shadow-lg ${
                          project.color === "blue" ? "bg-blue-700 text-white hover:bg-blue-800" :
                          project.color === "green" ? "bg-green-700 text-white hover:bg-green-800" :
                          project.color === "purple" ? "bg-purple-700 text-white hover:bg-purple-800" :
                          "bg-rose-600 text-white hover:bg-rose-700"
                        }`}
                      >
                        Support This Program <ArrowRight size={16} />
                      </Link>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Donate CTA */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Every Contribution Counts</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Whether you give £10 or £10,000, your donation directly funds these programs and changes lives in Bunyoro.</p>
            <Link href="/donate" className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-blue-950 font-bold px-10 py-4 rounded-full transition-all hover:scale-105 hover:shadow-xl">
              Donate Now <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
