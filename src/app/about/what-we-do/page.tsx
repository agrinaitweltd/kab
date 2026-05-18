import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const programs = [
  {
    title: "Education Support",
    description:
      "We fund school fees, provide learning materials, and build classrooms for underprivileged children across Bunyoro. Since 2016 we have supported over 1,400 scholars and built more than 60 classrooms, keeping children in school and giving them a pathway to a better future.",
    color: "#1F3A6D",
  },
  {
    title: "Agricultural Development",
    description:
      "Through farmer training schools, improved seed access, and cooperative development, we help smallholder farmers increase yields by up to 40%. Sustainable practices build long-term resilience against climate shocks and ensure food security for thousands of families.",
    color: "#33c6de",
  },
  {
    title: "Clean Water Access",
    description:
      "Over 80 boreholes and numerous rainwater harvesting systems now serve more than 40,000 people across Bunyoro. Each project includes a community water committee trained in maintenance and a full hygiene education programme to maximise long-term impact.",
    color: "#e91e8c",
  },
  {
    title: "Healthcare Outreach",
    description:
      "Monthly mobile health clinics reach over 20 villages, delivering consultations, vaccinations, antenatal care, and medications to communities hours from the nearest health facility. Our community health worker programme provides year-round frontline support between visits.",
    color: "#1F3A6D",
  },
  {
    title: "Youth Empowerment",
    description:
      "Four vocational skills centres across the region offer training in carpentry, tailoring, mechanics, ICT, and catering. Entrepreneurship workshops, seed funding competitions, and a mentorship network give young people the confidence and tools to build independent livelihoods.",
    color: "#33c6de",
  },
  {
    title: "Women's Empowerment",
    description:
      "Over 80 village savings and loan associations support more than 2,000 women to access credit and build financial assets. Business training, legal rights education, and leadership development programmes help women step into economic independence and community leadership.",
    color: "#e91e8c",
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
                  <div className="w-10 h-1 rounded-full mb-5" style={{ backgroundColor: program.color }} />
                  <h3 className="text-xl font-bold text-[#1F3A6D] mb-3">
                    {program.title}
                  </h3>
                  <p className="text-[#5A6270] leading-relaxed text-sm">
                    {program.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="py-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-3 h-56 sm:h-72">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/what-education.png" alt="Students in class" className="w-full h-full object-cover grayscale" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/what-clean-water.png" alt="Community member" className="w-full h-full object-cover grayscale" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/what-agriculture.png" alt="Farmers working" className="w-full h-full object-cover grayscale" />
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
