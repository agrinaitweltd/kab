import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function IndividualGivingPage() {
  const tiers = [
    { name: "Friend", amount: "£10 / month", perks: ["Quarterly newsletter", "Annual impact report", "Name in annual review"] },
    { name: "Supporter", amount: "£25 / month", perks: ["All Friend benefits", "Personal impact update", "Invitation to annual forum"] },
    { name: "Champion", amount: "£50 / month", perks: ["All Supporter benefits", "Named scholarship fund option", "Direct field updates"] },
    { name: "Guardian", amount: "£100 / month", perks: ["All Champion benefits", "Video call with programme team", "Dedicated relationship manager"] },
  ];

  return (
    <main>
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute left-0 top-20 w-[500px] h-28 bg-[#1F3A6D] rounded-r-full opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-[#33c6de] mb-4">Become a Partner</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#5A6270] leading-tight mb-6">
              Individual <span className="text-[#1F3A6D]">Giving</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5A6270] max-w-3xl mx-auto leading-relaxed">
              Regular monthly giving is the most powerful way to support our work. Choose a level that suits you and make a lasting difference.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier) => (
              <FadeIn key={tier.name}>
                <div className="border border-gray-200 rounded-2xl p-6 hover:border-[#33c6de] hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <h3 className="text-xl font-extrabold text-[#1F3A6D] mb-1">{tier.name}</h3>
                  <p className="text-[#e91e8c] font-bold text-lg mb-4">{tier.amount}</p>
                  <ul className="space-y-2 flex-1">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2 text-sm text-[#5A6270]">
                        <span className="text-[#33c6de] font-bold mt-0.5">✓</span>
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
              <Link href="/donate" className="text-[#1F3A6D] font-semibold hover:underline">
                Donate any amount here.
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
