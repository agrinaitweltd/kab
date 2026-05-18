import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function EducationFocusPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-0 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-end min-h-[460px]">
            <FadeIn direction="left">
              <div className="py-16 lg:py-24 pr-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#33c6de] mb-4">Areas of Focus</p>
                <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 text-[#1F3A6D]">Education</h1>
                <p className="text-base text-[#5A6270] max-w-md leading-relaxed">
                  Ensuring every child in Bunyoro can access quality education — from primary school through vocational training.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative flex justify-center items-end h-[440px]">
                <div className="absolute bottom-10 left-4 right-4 h-44 bg-[#e91e8c] rounded-full" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/focus-education.png" alt="Students learning" className="relative z-10 h-[400px] w-72 object-cover object-top grayscale" />
              </div>
            </FadeIn>
          </div>
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
