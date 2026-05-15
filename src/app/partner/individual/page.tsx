import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const tiers = [
  {
    name: "Friend",
    amount: "£10 / month",
    perks: [
      "Quarterly newsletter with programme updates",
      "Annual impact report",
      "Name listed in our annual review",
    ],
  },
  {
    name: "Supporter",
    amount: "£25 / month",
    perks: [
      "All Friend benefits",
      "Personal impact update from the field",
      "Invitation to our annual community forum",
    ],
  },
  {
    name: "Champion",
    amount: "£50 / month",
    perks: [
      "All Supporter benefits",
      "Option to name a scholarship fund",
      "Direct field updates from programme teams",
      "Certificate of recognition",
    ],
  },
  {
    name: "Guardian",
    amount: "£100 / month",
    perks: [
      "All Champion benefits",
      "Video call with our programme team",
      "Dedicated relationship manager",
      "Named borehole or classroom option",
    ],
  },
];

export default function IndividualGivingPage() {
  return (
    <main>
      {/* Hero — two column */}
      <section className="pt-24 pb-0 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-end min-h-[480px]">
            {/* Left */}
            <FadeIn direction="left">
              <div className="py-16 lg:py-24 pr-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#5A6270] mb-5">
                  Individual giving
                </p>
                <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
                  <span className="text-[#e91e8c]">Give regularly,</span>
                  <br />
                  <span className="text-[#e91e8c]">change lives</span>
                </h1>
                <p className="text-base text-[#5A6270] max-w-md leading-relaxed font-medium">
                  Regular giving is the most powerful way to support our work.
                  A predictable income allows us to plan programmes, hire staff,
                  and reach more communities across Bunyoro.
                </p>
              </div>
            </FadeIn>

            {/* Right — photo with pink pill */}
            <FadeIn direction="right">
              <div className="relative flex justify-center items-end h-[460px]">
                {/* Pink pill background */}
                <div className="absolute bottom-10 left-4 right-4 h-48 bg-[#e91e8c] rounded-full" />
                {/* Person photo — grayscale */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&auto=format&fit=crop&q=80"
                  alt="Community member"
                  className="relative z-10 h-[420px] w-72 object-cover object-top grayscale"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why give regularly */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                Your giving,<br />their future
              </h2>
            </FadeIn>
            <FadeIn direction="right">
              <p className="text-[#5A6270] leading-relaxed mb-4">
                Every pound you give each month goes directly into the field. It
                funds school fees so a child stays in education, drills a borehole
                so a family has clean water, and trains a farmer so a household has
                food security. No single gift is too small — together, regular
                donors power everything we do.
              </p>
              <p className="text-[#5A6270] leading-relaxed">
                We are fully transparent about how funds are used. Every regular
                donor receives a personal impact update showing exactly what their
                giving has made possible over the past year.
              </p>
              <div className="mt-8 border-t-2 border-[#33c6de] w-24" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Giving tiers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">Choose your giving level</h2>
            <p className="text-[#5A6270] mb-10 max-w-xl">
              All levels receive regular updates from the field and a full annual impact report. Upgrade or cancel at any time.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier) => (
              <FadeIn key={tier.name}>
                <div className="border border-gray-200 bg-white rounded-2xl p-6 hover:border-[#e91e8c] hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <h3 className="text-xl font-extrabold text-gray-900 mb-1">{tier.name}</h3>
                  <p className="text-[#e91e8c] font-bold text-lg mb-5">{tier.amount}</p>
                  <ul className="space-y-2.5 flex-1">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2 text-sm text-[#5A6270]">
                        <span className="text-[#e91e8c] font-bold mt-0.5 shrink-0">—</span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/donate"
                    className="mt-6 block text-center bg-[#1F3A6D] hover:bg-[#162d55] text-white font-bold uppercase tracking-wide text-sm px-4 py-3 rounded-full transition-colors duration-200"
                  >
                    Give as a {tier.name}
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p className="text-center text-[#5A6270] mt-10 text-sm">
              Prefer a one-off gift?{" "}
              <Link href="/donate" className="text-[#e91e8c] font-semibold hover:underline">
                Donate any amount here.
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Impact numbers */}
      <section className="py-20 bg-[#1F3A6D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl font-extrabold mb-12 text-center">What regular donors have helped us achieve</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { stat: "1,400+", label: "Students supported with scholarships" },
              { stat: "80+", label: "Boreholes providing clean water" },
              { stat: "45+", label: "Villages reached by our programmes" },
              { stat: "2,000+", label: "Women in savings groups" },
            ].map((item) => (
              <FadeIn key={item.label}>
                <div>
                  <p className="text-4xl font-extrabold text-[#e91e8c] mb-2">{item.stat}</p>
                  <p className="text-white/70 text-sm leading-relaxed">{item.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
