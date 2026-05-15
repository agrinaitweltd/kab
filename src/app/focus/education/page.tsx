import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function EducationFocusPage() {
  return (
    <main>
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute left-0 top-20 w-[500px] h-28 bg-[#1F3A6D] rounded-r-full opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-[#33c6de] mb-4">Areas of Focus</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#5A6270] leading-tight mb-6">
              <span className="text-[#1F3A6D]">Education</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5A6270] max-w-3xl mx-auto leading-relaxed">
              Ensuring every child in Bunyoro can access quality education — from primary school through vocational training.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl font-extrabold text-[#1F3A6D] mb-6">The Challenge</h2>
                <p className="text-[#5A6270] leading-relaxed mb-4">
                  In Uganda's Bunyoro sub-region, many children are unable to attend or complete school due to the cost of school fees, lack of learning materials, and insufficient classroom infrastructure. Girls are disproportionately affected, often leaving school early to support household duties.
                </p>
                <p className="text-[#5A6270] leading-relaxed">
                  The foundation works directly with schools, local government, and families to dismantle the barriers that prevent children from reaching their potential.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="space-y-6">
                {[
                  { title: "Scholarship Programme", desc: "Full and partial bursaries covering tuition, meals, and materials for over 1,400 active students across Hoima, Kikuube, and Kagadi districts." },
                  { title: "Classroom Construction", desc: "We have built and renovated over 60 classrooms since 2016, reducing overcrowding and creating safe learning environments." },
                  { title: "Teacher Training", desc: "Professional development workshops for over 200 local teachers on child-centred teaching methods and inclusive education." },
                  { title: "Girls' Education Initiative", desc: "Dedicated mentorship, sanitary supplies, and community engagement programmes to keep girls in school." },
                ].map((item) => (
                  <div key={item.title} className="border-l-4 border-[#33c6de] pl-5">
                    <h3 className="font-bold text-[#1F3A6D] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#5A6270] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1F3A6D] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Support Education in Bunyoro</h2>
            <p className="text-white/80 mb-8">Your donation funds a scholarship and changes a child's life.</p>
            <Link href="/campaigns/education" className="inline-block bg-[#e91e8c] hover:bg-[#c91578] text-white font-bold uppercase tracking-wide px-8 py-4 rounded-full transition-colors duration-200">
              Donate to Education Fund
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
