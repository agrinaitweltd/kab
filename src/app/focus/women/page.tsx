import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function WomenFocusPage() {
  return (
    <main>
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute left-0 top-20 w-[500px] h-28 bg-[#1F3A6D] rounded-r-full opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-[#33c6de] mb-4">Areas of Focus</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#5A6270] leading-tight mb-6">
              Women&apos;s <span className="text-[#1F3A6D]">Empowerment</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5A6270] max-w-3xl mx-auto leading-relaxed">
              Supporting women to achieve economic independence, community leadership, and equal opportunity across Bunyoro.
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
                  Women in rural Bunyoro face significant barriers to economic participation: limited access to credit, land ownership rights, and leadership opportunities. Gender-based inequality is both a cause and consequence of persistent poverty.
                </p>
                <p className="text-[#5A6270] leading-relaxed">
                  Our women's empowerment programmes address economic, social, and systemic barriers, helping women build secure futures for themselves and their families.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="space-y-6">
                {[
                  { title: "Village Savings Groups (VSLAs)", desc: "Over 80 savings and loan associations supporting more than 2,000 women to access credit and build financial assets." },
                  { title: "Business Skills Training", desc: "Practical workshops in bookkeeping, marketing, and enterprise development tailored for women entrepreneurs." },
                  { title: "Legal Rights Education", desc: "Community sessions on land rights, inheritance law, and gender-based violence prevention and response." },
                  { title: "Leadership Development", desc: "Training and mentorship for women seeking leadership roles in local government, cooperatives, and community organisations." },
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
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Empower Women in Bunyoro</h2>
            <p className="text-white/80 mb-8">When women thrive, whole communities thrive. Join us in making that happen.</p>
            <Link href="/donate" className="inline-block bg-[#e91e8c] hover:bg-[#c91578] text-white font-bold uppercase tracking-wide px-8 py-4 rounded-full transition-colors duration-200">
              Donate Now
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
