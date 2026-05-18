import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function EmergencyReliefCampaignPage() {
  return (
    <main>
      <section className="pt-24 pb-0 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-end min-h-[460px]">
            <FadeIn direction="left">
              <div className="py-16 lg:py-24 pr-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#33c6de] mb-4">Campaigns</p>
                <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 text-[#1F3A6D]">Emergency Relief</h1>
                <p className="text-base text-[#5A6270] max-w-md leading-relaxed">
                  When disaster strikes — floods, drought, disease outbreaks — we mobilise rapidly to protect the most vulnerable communities in Bunyoro.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative flex justify-center items-end h-[440px]">
                <div className="absolute bottom-10 left-4 right-4 h-44 bg-[#e91e8c] rounded-full" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/campaign-emergency.png" alt="Community relief" className="relative z-10 h-[400px] w-72 object-cover object-top grayscale" />
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
                <h2 className="text-2xl font-extrabold text-[#1F3A6D] mb-4">Our Emergency Response</h2>
                <p className="text-[#5A6270] leading-relaxed mb-4">
                  Climate change is increasing the frequency of floods, drought, and crop failures in Bunyoro. Our emergency relief fund ensures we can respond quickly — distributing food, water, shelter materials, and medical supplies within 48 hours of a declared emergency.
                </p>
                <p className="text-[#5A6270] leading-relaxed mb-6">
                  Our emergency response is guided by international humanitarian principles and is always community-led — we work with local leaders to identify the most urgent needs.
                </p>
                <div className="space-y-3">
                  {[
                    "Food and nutrition support for displaced families",
                    "Emergency water and sanitation supplies",
                    "Temporary shelter and non-food items",
                    "Psychosocial support and community recovery planning",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-[#5A6270]">
                      <span className="text-[#e91e8c] font-bold mt-0.5 shrink-0">—</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                <div className="bg-red-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full inline-block mb-4">
                  Urgent Appeal
                </div>
                <h3 className="text-xl font-bold text-[#1F3A6D] mb-3">Donate to Emergency Relief</h3>
                <p className="text-sm text-[#5A6270] mb-6 leading-relaxed">
                  Your donation goes directly into our emergency reserve fund, ready to be deployed within hours when communities need it most.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    { amount: "£25", label: "Emergency food pack for one family" },
                    { amount: "£75", label: "Water purification for 50 people" },
                    { amount: "£150", label: "Emergency shelter kit for a family" },
                    { amount: "£500", label: "Full emergency response for a village" },
                  ].map((opt) => (
                    <div key={opt.amount} className="flex items-center gap-3 p-3 rounded-xl border border-red-200 bg-white hover:border-[#e91e8c] cursor-pointer transition-colors">
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
