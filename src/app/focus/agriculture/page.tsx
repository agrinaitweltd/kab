import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function AgricultureFocusPage() {
  return (
    <main>
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute left-0 top-20 w-[500px] h-28 bg-[#1F3A6D] rounded-r-full opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-[#33c6de] mb-4">Areas of Focus</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#5A6270] leading-tight mb-6">
              <span className="text-[#1F3A6D]">Agriculture</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5A6270] max-w-3xl mx-auto leading-relaxed">
              Empowering smallholder farmers with training, resources, and market access to achieve food security and sustainable livelihoods.
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
                  Most families in Bunyoro depend on subsistence farming, yet outdated practices, poor soil management, and limited market access keep yields low and incomes precarious. Climate variability has made this even more challenging in recent years.
                </p>
                <p className="text-[#5A6270] leading-relaxed">
                  Our agriculture programme equips farmers with the knowledge and tools to increase productivity sustainably while building resilience to climate shocks.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="space-y-6">
                {[
                  { title: "Farmer Training Schools", desc: "Practical training in soil health, crop rotation, pest management, and climate-smart agriculture across 30+ villages." },
                  { title: "Improved Seed & Input Access", desc: "Subsidised access to high-yield seed varieties, organic fertilisers, and irrigation tools for enrolled farmers." },
                  { title: "Cooperative Development", desc: "Supporting the formation of farmer cooperatives to improve collective bargaining, bulk purchasing, and market access." },
                  { title: "Post-Harvest Support", desc: "Grain storage facilities and processing training to reduce post-harvest losses and increase market value." },
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
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Support Farming Families</h2>
            <p className="text-white/80 mb-8">Help us equip more farmers with the tools to feed their families and grow their futures.</p>
            <Link href="/donate" className="inline-block bg-[#e91e8c] hover:bg-[#c91578] text-white font-bold uppercase tracking-wide px-8 py-4 rounded-full transition-colors duration-200">
              Donate Now
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
