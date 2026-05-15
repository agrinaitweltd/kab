import FadeIn from "@/components/FadeIn";

const reports = [
  {
    year: "2025",
    income: "UGX 847,000,000",
    expenditure: "UGX 791,000,000",
    programmes: "UGX 698,000,000",
    admin: "UGX 93,000,000",
    status: "Audited",
  },
  {
    year: "2024",
    income: "UGX 712,000,000",
    expenditure: "UGX 669,000,000",
    programmes: "UGX 592,000,000",
    admin: "UGX 77,000,000",
    status: "Audited",
  },
  {
    year: "2023",
    income: "UGX 580,000,000",
    expenditure: "UGX 544,000,000",
    programmes: "UGX 479,000,000",
    admin: "UGX 65,000,000",
    status: "Audited",
  },
  {
    year: "2022",
    income: "UGX 413,000,000",
    expenditure: "UGX 388,000,000",
    programmes: "UGX 340,000,000",
    admin: "UGX 48,000,000",
    status: "Audited",
  },
];

const allocation = [
  { label: "Education Programmes", pct: 38, color: "#1F3A6D" },
  { label: "Agriculture & Food Security", pct: 22, color: "#33c6de" },
  { label: "Clean Water Projects", pct: 18, color: "#e91e8c" },
  { label: "Healthcare Outreach", pct: 12, color: "#f59e0b" },
  { label: "Administration & Operations", pct: 10, color: "#6b7280" },
];

export default function FinancialsPage() {
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
              Our <span className="text-[#1F3A6D]">Financials</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5A6270] max-w-3xl mx-auto leading-relaxed">
              We publish full audited accounts every year. Over 87% of all
              income goes directly to programme delivery.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F3A6D] mb-10">
              Annual Financial Summary
            </h2>
          </FadeIn>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#1F3A6D] text-white">
                <tr>
                  {["Year", "Total Income", "Total Expenditure", "Programmes", "Admin", "Status"].map(
                    (h) => (
                      <th
                        key={h}
                        className="text-left px-6 py-4 font-semibold uppercase tracking-wider text-xs"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {reports.map((r, i) => (
                  <tr
                    key={r.year}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 font-bold text-[#1F3A6D]">
                      {r.year}
                    </td>
                    <td className="px-6 py-4 text-[#5A6270]">{r.income}</td>
                    <td className="px-6 py-4 text-[#5A6270]">{r.expenditure}</td>
                    <td className="px-6 py-4 text-[#5A6270]">{r.programmes}</td>
                    <td className="px-6 py-4 text-[#5A6270]">{r.admin}</td>
                    <td className="px-6 py-4">
                      <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                        {r.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F3A6D] mb-10">
              How We Allocate Funds (2025)
            </h2>
          </FadeIn>
          <div className="space-y-5 max-w-2xl">
            {allocation.map((a) => (
              <FadeIn key={a.label}>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold text-[#4a5266]">
                      {a.label}
                    </span>
                    <span className="text-sm font-bold text-[#1F3A6D]">
                      {a.pct}%
                    </span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${a.pct}%`, backgroundColor: a.color }}
                    />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
