import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function YouthFocusPage() {
  return (
    <main>
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute left-0 top-20 w-[500px] h-28 bg-[#1F3A6D] rounded-r-full opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-[#33c6de] mb-4">Areas of Focus</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#5A6270] leading-tight mb-6">
              Youth <span className="text-[#1F3A6D]">Empowerment</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5A6270] max-w-3xl mx-auto leading-relaxed">
              Equipping young people with the skills, confidence, and opportunities to build fulfilling and productive lives.
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
                  Youth unemployment in Bunyoro is high. Many young people leave school without marketable skills, and formal employment opportunities are scarce in rural areas. Without a pathway to income, many fall into poverty or migrate to cities unprepared.
                </p>
                <p className="text-[#5A6270] leading-relaxed">
                  Our youth programmes provide vocational training, entrepreneurship education, and mentorship to create real pathways to sustainable livelihoods.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="space-y-6">
                {[
                  { title: "Vocational Skills Centres", desc: "Training in carpentry, tailoring, mechanics, catering, and ICT at four centres across the region." },
                  { title: "Entrepreneurship Programme", desc: "Business skills workshops, seed funding competitions, and mentorship from local business leaders." },
                  { title: "Sports & Arts", desc: "Sports leagues, arts workshops, and cultural programmes that build confidence, teamwork, and community cohesion." },
                  { title: "Mentorship Network", desc: "Young people are matched with professional mentors who guide their career paths and provide real-world experience." },
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
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Invest in Young People</h2>
            <p className="text-white/80 mb-8">Support a young person's journey from unemployment to independence.</p>
            <Link href="/donate" className="inline-block bg-[#e91e8c] hover:bg-[#c91578] text-white font-bold uppercase tracking-wide px-8 py-4 rounded-full transition-colors duration-200">
              Donate Now
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
