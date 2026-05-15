import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function YouthFocusPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-0 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-end min-h-[460px]">
            <FadeIn direction="left">
              <div className="py-16 lg:py-24 pr-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#33c6de] mb-4">Areas of Focus</p>
                <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 text-[#1F3A6D]">Youth Empowerment</h1>
                <p className="text-base text-[#5A6270] max-w-md leading-relaxed">
                  Equipping young people with the skills, confidence, and opportunities to build fulfilling and productive lives.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative flex justify-center items-end h-[440px]">
                <div className="absolute bottom-10 left-4 right-4 h-44 bg-[#33c6de] rounded-full" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&auto=format&fit=crop&q=80" alt="Young person" className="relative z-10 h-[400px] w-72 object-cover object-top grayscale" />
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
