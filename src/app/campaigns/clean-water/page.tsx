import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function CleanWaterCampaignPage() {
  return (
    <main>
      <section className="relative bg-gradient-to-br from-cyan-50 to-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute left-0 top-20 w-[500px] h-28 bg-[#1F3A6D] rounded-r-full opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-[#33c6de] mb-4">Campaigns</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#5A6270] leading-tight mb-6">
              Clean Water <span className="text-[#1F3A6D]">Project</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5A6270] max-w-3xl mx-auto leading-relaxed">
              Help us drill 20 new boreholes and bring clean water to 10,000 more people by the end of 2026.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn direction="left">
              <div>
                <h2 className="text-2xl font-extrabold text-[#1F3A6D] mb-4">About This Campaign</h2>
                <p className="text-[#5A6270] leading-relaxed mb-4">
                  Over 80 boreholes drilled since 2018 have transformed life for more than 40,000 people. Now we want to reach the next 10,000. Each borehole serves approximately 500 people for 20+ years and costs around £4,500 to drill, equip, and commission.
                </p>
                <p className="text-[#5A6270] leading-relaxed mb-6">
                  Every borehole project includes a community water committee, maintenance training, and a hygiene education programme to maximise long-term impact.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { stat: "80+", label: "Boreholes completed" },
                    { stat: "40,000+", label: "People served" },
                    { stat: "£4,500", label: "Cost per borehole" },
                    { stat: "20", label: "New boreholes target" },
                  ].map((item) => (
                    <div key={item.label} className="bg-gray-50 rounded-xl p-4 text-center">
                      <p className="text-2xl font-extrabold text-[#1F3A6D]">{item.stat}</p>
                      <p className="text-xs text-[#5A6270] uppercase tracking-wider mt-1">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-[#1F3A6D] mb-6">Fund Clean Water</h3>
                <div className="space-y-3 mb-6">
                  {[
                    { amount: "£20", label: "Provides water for one person for a year" },
                    { amount: "£100", label: "Funds hygiene training for a village" },
                    { amount: "£500", label: "Covers borehole maintenance for 5 years" },
                    { amount: "£4,500", label: "Drills and commissions one full borehole" },
                  ].map((opt) => (
                    <div key={opt.amount} className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-[#33c6de] cursor-pointer transition-colors">
                      <span className="font-bold text-[#e91e8c] w-16 shrink-0">{opt.amount}</span>
                      <span className="text-sm text-[#5A6270]">{opt.label}</span>
                    </div>
                  ))}
                </div>
                <Link href="/donate" className="block text-center bg-[#e91e8c] hover:bg-[#c91578] text-white font-bold uppercase tracking-wide py-4 rounded-full transition-colors duration-200">
                  Donate Now
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
