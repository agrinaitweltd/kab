import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function EducationCampaignPage() {
  return (
    <main>
      <section className="relative bg-gradient-to-br from-blue-50 to-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute left-0 top-20 w-[500px] h-28 bg-[#1F3A6D] rounded-r-full opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-[#33c6de] mb-4">Campaigns</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#5A6270] leading-tight mb-6">
              Education <span className="text-[#1F3A6D]">Fund</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5A6270] max-w-3xl mx-auto leading-relaxed">
              Every child deserves an education. Help us fund the next 500 scholarships across Bunyoro.
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
                  Our Education Fund provides full and partial bursaries to children who cannot afford school fees. Each scholarship covers tuition, learning materials, uniforms, and meals — removing every financial barrier between a child and their education.
                </p>
                <p className="text-[#5A6270] leading-relaxed mb-6">
                  To date, we have supported over 1,400 scholars. Our 2026 target is to add 500 more. A full annual scholarship costs just £120 — less than £10 a month.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { stat: "1,400+", label: "Active scholars" },
                    { stat: "£120", label: "Annual scholarship cost" },
                    { stat: "87%", label: "Scholar completion rate" },
                    { stat: "500", label: "Target new scholarships" },
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
                <h3 className="text-xl font-bold text-[#1F3A6D] mb-6">Make a Donation</h3>
                <div className="space-y-3 mb-6">
                  {[
                    { amount: "£10", label: "Provides school materials for 1 child" },
                    { amount: "£30", label: "Covers 3 months of meals" },
                    { amount: "£120", label: "Funds a full annual scholarship" },
                    { amount: "£360", label: "Educates a child for 3 years" },
                  ].map((opt) => (
                    <div key={opt.amount} className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-[#33c6de] cursor-pointer transition-colors">
                      <span className="font-bold text-[#e91e8c] w-12">{opt.amount}</span>
                      <span className="text-sm text-[#5A6270]">{opt.label}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/donate"
                  className="block text-center bg-[#e91e8c] hover:bg-[#c91578] text-white font-bold uppercase tracking-wide py-4 rounded-full transition-colors duration-200"
                >
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
