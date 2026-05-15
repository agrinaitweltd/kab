import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const principles = [
  {
    title: "Independent Governance",
    description:
      "Our Board of Trustees operates independently of any government, donor, or corporate interest. All major decisions are subject to board approval and community consultation.",
  },
  {
    title: "Financial Accountability",
    description:
      "Annual audits are conducted by independent external auditors. Full financial statements are published on our website every year without exception.",
  },
  {
    title: "Programme Reporting",
    description:
      "We publish quarterly progress reports for every active programme, detailing outputs, outcomes, and challenges. No results are embellished or omitted.",
  },
  {
    title: "Donor Stewardship",
    description:
      "Every restricted donation is tracked to its stated purpose. Donors receive detailed disbursement reports showing exactly how their contributions were used.",
  },
  {
    title: "Community Feedback",
    description:
      "We hold bi-annual community forums in every area of operation. Feedback shapes programme design and is documented in our annual impact reviews.",
  },
  {
    title: "Whistleblower Protection",
    description:
      "Staff, volunteers, and community members can report concerns confidentially. All reports are investigated independently and outcomes are disclosed.",
  },
];

export default function TransparencyPage() {
  return (
    <main>
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute left-0 top-20 w-[500px] h-28 bg-[#1F3A6D] rounded-r-full opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-[#33c6de] mb-4">
              The Foundation
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#5A6270] leading-tight mb-6">
              Transparency &{" "}
              <span className="text-[#1F3A6D]">Independence</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5A6270] max-w-3xl mx-auto leading-relaxed">
              We hold ourselves to the highest standards of openness and
              accountability — because trust is the foundation of everything
              we do.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((p) => (
              <FadeIn key={p.title}>
                <div className="border-l-4 border-[#33c6de] pl-6 py-2">
                  <h3 className="text-lg font-bold text-[#1F3A6D] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-[#5A6270] leading-relaxed text-sm">
                    {p.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F3A6D] mb-4">
              Review Our Annual Reports
            </h2>
            <p className="text-[#5A6270] mb-8 leading-relaxed">
              Download our latest audited financial statements, impact reports,
              and governance documents.
            </p>
            <Link
              href="/about/financials"
              className="inline-block border-2 border-[#1F3A6D] text-[#1F3A6D] hover:bg-[#1F3A6D] hover:text-white font-bold uppercase tracking-wide px-8 py-3 rounded-full transition-colors duration-200"
            >
              View Financials
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
