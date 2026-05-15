import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function CleanWaterFocusPage() {
  return (
    <main>
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute left-0 top-20 w-[500px] h-28 bg-[#1F3A6D] rounded-r-full opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-[#33c6de] mb-4">Areas of Focus</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#5A6270] leading-tight mb-6">
              Clean <span className="text-[#1F3A6D]">Water</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5A6270] max-w-3xl mx-auto leading-relaxed">
              Bringing safe, accessible water to rural communities across Bunyoro — reducing disease, saving time, and restoring dignity.
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
                  Millions of people in rural Uganda lack access to safe drinking water. Women and children walk hours each day to collect water from unsafe sources, missing school and work while risking waterborne diseases like cholera and typhoid.
                </p>
                <p className="text-[#5A6270] leading-relaxed">
                  Since 2018, the foundation has drilled boreholes, installed water tanks, and trained community water management committees in over 35 villages.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="space-y-6">
                {[
                  { title: "Borehole Drilling", desc: "Over 80 boreholes drilled in underserved communities, providing clean groundwater to more than 40,000 people." },
                  { title: "Rainwater Harvesting", desc: "Rainwater collection systems installed at schools and health centres, providing a reliable dry-season water source." },
                  { title: "Water Safety Training", desc: "Community hygiene and sanitation education delivered to households alongside each water infrastructure project." },
                  { title: "Community Water Committees", desc: "Elected committees trained in maintenance, fee collection, and borehole management to ensure long-term sustainability." },
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
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Fund a Borehole</h2>
            <p className="text-white/80 mb-8">One borehole can serve 500+ people for 20+ years. Help us drill the next one.</p>
            <Link href="/campaigns/clean-water" className="inline-block bg-[#e91e8c] hover:bg-[#c91578] text-white font-bold uppercase tracking-wide px-8 py-4 rounded-full transition-colors duration-200">
              Donate to Clean Water
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
