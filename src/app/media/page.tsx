import FadeIn from "@/components/FadeIn";

const mediaItems = [
  {
    type: "Press Release",
    date: "10 May 2026",
    title: "Kabalega Foundation Announces 2026 Scholarship Programme",
    description: "Official press release announcing the award of 200 new scholarships for the 2026–27 academic year.",
  },
  {
    type: "Video",
    date: "1 April 2026",
    title: "Community Stories: Voices from the Field",
    description: "A short documentary featuring beneficiaries from our agriculture and education programmes sharing their stories.",
  },
  {
    type: "Press Release",
    date: "15 March 2026",
    title: "15 New Boreholes Bring Clean Water to 8,500 People",
    description: "Press release detailing the completion of our latest clean water infrastructure project across Bunyoro.",
  },
  {
    type: "Photo Gallery",
    date: "28 February 2026",
    title: "2026 Annual Community Dialogue Forum",
    description: "A photo gallery capturing highlights from our annual stakeholder engagement forum held in Hoima.",
  },
  {
    type: "Report",
    date: "15 January 2026",
    title: "2025 Annual Impact Report",
    description: "Full downloadable PDF of our 2025 Annual Impact Report with programme outcomes and audited financials.",
  },
  {
    type: "Media Coverage",
    date: "10 December 2025",
    title: "New Vision: Foundation Reaches 1,400 Scholarship Students",
    description: "Coverage from New Vision Uganda on our education programme milestone.",
  },
];

const typeBadge: Record<string, string> = {
  "Press Release": "bg-blue-100 text-blue-700",
  Video: "bg-purple-100 text-purple-700",
  "Photo Gallery": "bg-pink-100 text-pink-700",
  Report: "bg-yellow-100 text-yellow-700",
  "Media Coverage": "bg-green-100 text-green-700",
};

export default function MediaCenterPage() {
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
              Media <span className="text-[#1F3A6D]">Centre</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5A6270] max-w-3xl mx-auto leading-relaxed">
              Press releases, videos, photo galleries, and media coverage of
              the Kabalega Society Foundation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaItems.map((item) => (
              <FadeIn key={item.title}>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full ${
                        typeBadge[item.type] || "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {item.type}
                    </span>
                    <span className="text-xs text-gray-400">{item.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#1F3A6D] mb-3 leading-snug flex-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5A6270] leading-relaxed">
                    {item.description}
                  </p>
                  <button className="mt-4 text-xs font-bold uppercase tracking-wider text-[#33c6de] hover:text-[#1F3A6D] transition-colors text-left">
                    Download / View →
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold text-[#1F3A6D] mb-4">
              Media Enquiries
            </h2>
            <p className="text-[#5A6270] mb-2">
              For press enquiries, interview requests, or high-resolution imagery, please contact:
            </p>
            <p className="font-semibold text-[#1F3A6D]">media@kabalegafoundation.org</p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
