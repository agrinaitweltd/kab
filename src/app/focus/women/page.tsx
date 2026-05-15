import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function WomenFocusPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-0 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-end min-h-[460px]">
            <FadeIn direction="left">
              <div className="py-16 lg:py-24 pr-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#33c6de] mb-4">Areas of Focus</p>
                <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 text-[#1F3A6D]">Women&apos;s Empowerment</h1>
                <p className="text-base text-[#5A6270] max-w-md leading-relaxed">
                  Supporting women to achieve economic independence, community leadership, and equal opportunity across Bunyoro.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative flex justify-center items-end h-[440px]">
                <div className="absolute bottom-10 left-4 right-4 h-44 bg-[#e91e8c] rounded-full" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop&q=80" alt="Woman community leader" className="relative z-10 h-[400px] w-72 object-cover object-top grayscale" />
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
