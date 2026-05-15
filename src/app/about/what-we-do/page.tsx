import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const programs = [
  {
    title: "Education Support",
    description:
      "We fund school fees, provide learning materials, and build classrooms for underprivileged children across Bunyoro — ensuring every child can access quality education.",
    icon: "📚",
  },
  {
    title: "Agricultural Development",
    description:
      "Through hands-on training and resource provision, we help smallholder farmers increase yields, adopt sustainable practices, and achieve food security.",
    icon: "🌾",
  },
  {
    title: "Clean Water Access",
    description:
      "We construct boreholes and rainwater harvesting systems in rural communities, reducing waterborne diseases and saving hours of daily labour.",
    icon: "💧",
  },
  {
    title: "Healthcare Outreach",
    description:
      "Mobile health clinics and community health worker programs deliver essential medical care to remote villages across the region.",
    icon: "🏥",
  },
  {
    title: "Youth Empowerment",
    description:
      "Vocational skills centres and mentorship programs equip young people with the tools to build sustainable livelihoods.",
    icon: "🎯",
  },
  {
    title: "Women's Empowerment",
    description:
      "Savings cooperatives, business training, and advocacy programs help women gain economic independence and community leadership roles.",
    icon: "👩‍💼",
  },
];

export default function WhatWeDoPage() {
  return (
    <main>
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute left-0 top-20 w-[500px] h-28 bg-[#1F3A6D] rounded-r-full opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-[#33c6de] mb-4">
              The Foundation
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#5A6270] leading-tight mb-6">
              What We <span className="text-[#1F3A6D]">Do</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5A6270] max-w-3xl mx-auto leading-relaxed">
              Transforming lives across Bunyoro through targeted programmes in
              education, agriculture, water, health, and youth empowerment.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <FadeIn key={program.title}>
                <div className="bg-gray-50 rounded-2xl p-8 h-full hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <h3 className="text-xl font-bold text-[#1F3A6D] mb-3">
                    {program.title}
                  </h3>
                  <p className="text-[#5A6270] leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1F3A6D] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              Ready to make a difference?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Your support powers every programme we run. Join us today.
            </p>
            <Link
              href="/donate"
              className="inline-block bg-[#e91e8c] hover:bg-[#c91578] text-white font-bold uppercase tracking-wide px-8 py-4 rounded-full transition-colors duration-200"
            >
              Donate Now
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
