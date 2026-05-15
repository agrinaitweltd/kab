import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function HealthcareFocusPage() {
  return (
    <main>
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute left-0 top-20 w-[500px] h-28 bg-[#1F3A6D] rounded-r-full opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-[#33c6de] mb-4">Areas of Focus</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#5A6270] leading-tight mb-6">
              <span className="text-[#1F3A6D]">Healthcare</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5A6270] max-w-3xl mx-auto leading-relaxed">
              Delivering essential health services to remote communities through mobile clinics, community health workers, and preventive care campaigns.
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
                  Rural communities in Bunyoro often lack access to even basic healthcare. Health facilities are understaffed, undersupplied, and too distant for many families to reach affordably. Preventable diseases — malaria, malnutrition, and maternal complications — remain major killers.
                </p>
                <p className="text-[#5A6270] leading-relaxed">
                  Our healthcare outreach programme brings preventive and curative care directly to communities, reducing barriers of distance and cost.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="space-y-6">
                {[
                  { title: "Mobile Health Clinics", desc: "Monthly mobile clinics deliver consultations, vaccinations, antenatal care, and medications to 20+ villages." },
                  { title: "Community Health Workers", desc: "Trained village health workers provide frontline care, health education, and referrals between clinic visits." },
                  { title: "Malaria Prevention", desc: "Insecticide-treated bed net distribution and indoor residual spraying across programme communities." },
                  { title: "Maternal & Child Health", desc: "Antenatal and postnatal support programmes targeting improved birth outcomes and reduced infant mortality." },
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
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Support Healthcare Outreach</h2>
            <p className="text-white/80 mb-8">Help fund our next mobile clinic visit and bring care to those who need it most.</p>
            <Link href="/donate" className="inline-block bg-[#e91e8c] hover:bg-[#c91578] text-white font-bold uppercase tracking-wide px-8 py-4 rounded-full transition-colors duration-200">
              Donate Now
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
