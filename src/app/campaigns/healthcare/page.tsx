import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function HealthcareCampaignPage() {
  return (
    <main>
      <section className="pt-24 pb-0 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-end min-h-[460px]">
            <FadeIn direction="left">
              <div className="py-16 lg:py-24 pr-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#33c6de] mb-4">Campaigns</p>
                <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 text-[#1F3A6D]">Healthcare Initiative</h1>
                <p className="text-base text-[#5A6270] max-w-md leading-relaxed">
                  Bringing essential health services to 10,000 more people across Bunyoro.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative flex justify-center items-end h-[440px]">
                <div className="absolute bottom-10 left-4 right-4 h-44 bg-[#33c6de] rounded-full" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&auto=format&fit=crop&q=80" alt="Healthcare worker" className="relative z-10 h-[400px] w-72 object-cover object-top grayscale" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn direction="left">
              <div>
                <h2 className="text-2xl font-extrabold text-[#1F3A6D] mb-4">About This Campaign</h2>
                <p className="text-[#5A6270] leading-relaxed mb-4">
                  Our mobile health clinics reach over 20 villages every month, delivering consultations, vaccinations, antenatal care, and medications. But thousands more remain out of reach. This campaign will fund two new clinic routes and train 30 additional community health workers.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { stat: "20+", label: "Villages served monthly" },
                    { stat: "8,000+", label: "Consultations per year" },
                    { stat: "30", label: "New CHWs to train" },
                    { stat: "10,000", label: "New people targeted" },
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
                <h3 className="text-xl font-bold text-[#1F3A6D] mb-6">Support Healthcare</h3>
                <div className="space-y-3 mb-6">
                  {[
                    { amount: "£15", label: "Provides malaria prevention for a family" },
                    { amount: "£50", label: "Supplies a health worker for a month" },
                    { amount: "£200", label: "Funds one mobile clinic visit" },
                    { amount: "£500", label: "Trains one community health worker" },
                  ].map((opt) => (
                    <div key={opt.amount} className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-[#33c6de] cursor-pointer transition-colors">
                      <span className="font-bold text-[#e91e8c] w-12">{opt.amount}</span>
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
