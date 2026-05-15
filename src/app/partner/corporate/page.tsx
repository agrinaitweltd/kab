import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const team = [
  { name: "John Byamukama", role: "Executive Director", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80" },
  { name: "Grace Tumwesigye", role: "Director of Programmes", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&auto=format&fit=crop&q=80" },
  { name: "Robert Kagoro", role: "Finance & Operations", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80" },
  { name: "Patience Akello", role: "Partnerships Manager", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&auto=format&fit=crop&q=80" },
];

export default function CorporatePartnerPage() {
  return (
    <main>
      {/* Hero — two-column */}
      <section className="pt-24 pb-0 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-end min-h-[480px]">
            {/* Left */}
            <FadeIn direction="left">
              <div className="py-16 lg:py-24 pr-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#5A6270] mb-5">
                  Corporate partnerships
                </p>
                <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
                  <span className="text-[#e91e8c]">Connect and</span>
                  <br />
                  <span className="text-[#e91e8c]">collaborate</span>
                </h1>
                <p className="text-base text-[#5A6270] max-w-md leading-relaxed font-medium">
                  Employees and consumers want purpose. They&apos;re drawn to
                  organisations that do good in the world. Partner with us and
                  lead the way.
                </p>
              </div>
            </FadeIn>

            {/* Right — photo with coloured blob shapes */}
            <FadeIn direction="right">
              <div className="relative flex justify-center items-end h-[460px]">
                {/* Decorative blobs */}
                <div className="absolute top-6 right-12 w-28 h-28 bg-[#e91e8c] rounded-full opacity-90" />
                <div className="absolute top-2 right-36 w-20 h-20 bg-[#fbbf24] rounded-full opacity-80" />
                <div className="absolute top-24 right-6 w-16 h-16 bg-[#33c6de] rounded-full opacity-80" />
                <div className="absolute top-14 right-52 w-12 h-12 bg-[#4ade80] rounded-full opacity-70" />
                {/* Person photo */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&auto=format&fit=crop&q=80"
                  alt="Community partnership"
                  className="relative z-10 h-[420px] w-72 object-cover object-top grayscale"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Lead the drive */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                Lead the drive<br />for community
              </h2>
            </FadeIn>
            <FadeIn direction="right">
              <p className="text-[#5A6270] leading-relaxed mb-4">
                The Kabalega Society Foundation connects your business with the
                people and projects working to solve the most pressing challenges
                facing communities across Bunyoro. Working with like-minded
                companies and individuals, your expertise and contributions can
                make a big difference.
              </p>
              <p className="text-[#5A6270] leading-relaxed">
                Without you, we can&apos;t do the work we need to do. Corporate
                partnerships fund scholarships, clean water projects, healthcare
                outreach, and the vocational training that gives young people a
                future.
              </p>
              <div className="mt-8 border-t-2 border-[#33c6de] w-24" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Photos + Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Photos */}
            <FadeIn direction="left">
              <div className="space-y-4">
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&auto=format&fit=crop&q=80"
                    alt="Community programme participants"
                    className="w-full h-52 object-cover grayscale"
                  />
                  <p className="text-xs text-gray-400 mt-1 italic">Credit: KSF / Community Programme</p>
                </div>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=700&auto=format&fit=crop&q=80"
                    alt="Vocational training centre"
                    className="w-full h-52 object-cover grayscale"
                  />
                  <p className="text-xs text-gray-400 mt-1 italic">Credit: KSF / Vocational Skills Centre</p>
                </div>
              </div>
            </FadeIn>

            {/* Benefit bullets */}
            <FadeIn direction="right">
              <div className="space-y-8">
                <div>
                  <h3 className="font-extrabold text-gray-900 mb-3">Take action to improve lives</h3>
                  <ul className="space-y-2 text-sm text-[#5A6270] leading-relaxed list-disc list-inside marker:text-[#e91e8c]">
                    <li>Contribute in a meaningful way to lasting community development.</li>
                    <li>Support education, clean water, and healthcare for thousands of people.</li>
                    <li>Make the world a more equitable place — one village at a time.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 mb-3">Demonstrate your commitment</h3>
                  <ul className="space-y-2 text-sm text-[#5A6270] leading-relaxed list-disc list-inside marker:text-[#e91e8c]">
                    <li>Take meaningful action to protect and improve the wellbeing of your stakeholders.</li>
                    <li>Align your brand with verified, audited social impact and achieve your CSR goals.</li>
                    <li>Enhance employee engagement through volunteering and payroll giving schemes.</li>
                    <li>Receive co-branding, joint communications, and inclusion in our annual impact review.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 mb-3">What we offer partners</h3>
                  <ul className="space-y-2 text-sm text-[#5A6270] leading-relaxed list-disc list-inside marker:text-[#e91e8c]">
                    <li>Detailed annual impact reports showing exactly how funding is deployed.</li>
                    <li>Option to direct funding towards a specific programme area.</li>
                    <li>Named sponsorship of scholarships, boreholes, or training programmes.</li>
                    <li>Access to field visits and direct stories from programme beneficiaries.</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Speak to our team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <div>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
                  Speak to<br />our team
                </h2>
                <p className="text-[#5A6270] leading-relaxed mb-6">
                  The power and potential of the Kabalega Society Foundation comes
                  from its people. We are mission and values driven, and hold
                  ourselves accountable for aligning our actions to our values.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-[#e91e8c] hover:bg-[#c91578] text-white font-bold uppercase tracking-wide px-7 py-3 rounded-full transition-colors duration-200 text-sm"
                >
                  Contact us
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="grid grid-cols-2 gap-6">
                {team.map((member) => (
                  <div key={member.name}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-20 h-20 object-cover grayscale mb-3"
                    />
                    <p className="text-sm font-bold text-gray-900">{member.name}</p>
                    <p className="text-xs text-[#5A6270] mb-1">{member.role}</p>
                    <Link
                      href="/contact"
                      className="text-xs font-semibold text-[#e91e8c] hover:underline"
                    >
                      Contact profile &rarr;
                    </Link>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
