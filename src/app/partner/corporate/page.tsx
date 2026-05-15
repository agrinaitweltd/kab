import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const benefits = [
  { icon: "🤝", title: "Brand Association", desc: "Associate your brand with a trusted, impactful organisation improving lives across East Africa." },
  { icon: "📊", title: "Impact Reporting", desc: "Detailed annual impact reports showing exactly how your partnership funding is deployed." },
  { icon: "🌍", title: "CSR Credentials", desc: "Strengthen your corporate social responsibility credentials with verified, audited outcomes." },
  { icon: "📣", title: "Co-branding", desc: "Joint communications, social media features, and inclusion in our annual review publication." },
  { icon: "🎯", title: "Programme Alignment", desc: "Opportunity to direct funding towards a specific programme area that aligns with your values." },
  { icon: "👥", title: "Employee Engagement", desc: "Volunteer days, fundraising events, and payroll giving schemes for your employees." },
];

export default function CorporatePartnerPage() {
  return (
    <main>
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute left-0 top-20 w-[500px] h-28 bg-[#1F3A6D] rounded-r-full opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-[#33c6de] mb-4">Become a Partner</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#5A6270] leading-tight mb-6">
              Corporate <span className="text-[#1F3A6D]">Partnerships</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5A6270] max-w-3xl mx-auto leading-relaxed">
              Partner with the Kabalega Society Foundation to drive meaningful social impact while building your brand and engaging your people.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F3A6D] mb-10 text-center">Why Partner With Us?</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <FadeIn key={b.title}>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl mb-3">{b.icon}</div>
                  <h3 className="font-bold text-[#1F3A6D] mb-2">{b.title}</h3>
                  <p className="text-sm text-[#5A6270] leading-relaxed">{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F3A6D] mb-4">Start a Conversation</h2>
            <p className="text-[#5A6270] mb-8">
              We welcome partnerships of all sizes. Get in touch to discuss how your organisation can make a difference.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#1F3A6D] hover:bg-[#162d55] text-white font-bold uppercase tracking-wide px-8 py-4 rounded-full transition-colors duration-200"
            >
              Contact Us
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
