import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function AnnualAppealPage() {
  return (
    <main>
      <section className="relative bg-gradient-to-br from-yellow-50 to-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute left-0 top-20 w-[500px] h-28 bg-[#1F3A6D] rounded-r-full opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-[#33c6de] mb-4">Campaigns</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#5A6270] leading-tight mb-6">
              Annual <span className="text-[#1F3A6D]">Appeal 2026</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5A6270] max-w-3xl mx-auto leading-relaxed">
              Our biggest fundraising moment of the year. Help us raise £250,000 to fund our 2026–27 programmes.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-12">
              <div className="flex justify-between text-sm font-semibold text-[#5A6270] mb-2">
                <span>Raised so far: <span className="text-[#1F3A6D] font-bold">£143,800</span></span>
                <span>Goal: <span className="text-[#1F3A6D] font-bold">£250,000</span></span>
              </div>
              <div className="h-5 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#e91e8c] rounded-full" style={{ width: "57.5%" }} />
              </div>
              <p className="text-xs text-[#5A6270] mt-2 text-right">57.5% funded — 214 donors</p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn direction="left">
              <div>
                <h2 className="text-2xl font-extrabold text-[#1F3A6D] mb-4">What Your Money Will Do</h2>
                <div className="space-y-4">
                  {[
                    { icon: "📚", label: "500 new scholarships", amt: "£60,000" },
                    { icon: "💧", label: "10 new boreholes", amt: "£45,000" },
                    { icon: "🌾", label: "200 farmers trained", amt: "£30,000" },
                    { icon: "🏥", label: "2 new clinic routes", amt: "£40,000" },
                    { icon: "💻", label: "3 digital literacy labs", amt: "£36,000" },
                    { icon: "🔧", label: "Programme operations", amt: "£39,000" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-sm font-semibold text-[#4a5266]">{item.label}</span>
                      </div>
                      <span className="text-sm font-bold text-[#1F3A6D]">{item.amt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-[#1F3A6D] mb-6">Make Your Gift</h3>
                <div className="space-y-3 mb-6">
                  {[
                    { amount: "£30", label: "Funds learning materials for 3 children" },
                    { amount: "£120", label: "Provides a full annual scholarship" },
                    { amount: "£450", label: "Trains a farmer for a full season" },
                    { amount: "£1,000", label: "Funds a clinic visit for 100 patients" },
                  ].map((opt) => (
                    <div key={opt.amount} className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-[#33c6de] cursor-pointer transition-colors">
                      <span className="font-bold text-[#e91e8c] w-16 shrink-0">{opt.amount}</span>
                      <span className="text-sm text-[#5A6270]">{opt.label}</span>
                    </div>
                  ))}
                </div>
                <Link href="/donate" className="block text-center bg-[#e91e8c] hover:bg-[#c91578] text-white font-bold uppercase tracking-wide py-4 rounded-full transition-colors duration-200">
                  Donate to the Annual Appeal
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
