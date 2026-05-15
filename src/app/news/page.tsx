import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const articles = [
  {
    date: "10 May 2026",
    category: "Education",
    title: "200 New Scholarships Awarded for the 2026 Academic Year",
    excerpt:
      "The Kabalega Society Foundation has awarded 200 new scholarships to students across Hoima, Kikuube, and Kagadi districts, bringing our total active scholars to over 1,400.",
  },
  {
    date: "22 April 2026",
    category: "Agriculture",
    title: "Bumper Harvest Season for Participating Farmers",
    excerpt:
      "Farmers enrolled in our Sustainable Agriculture Programme reported a 40% increase in yields this season, thanks to improved seed varieties and soil management training.",
  },
  {
    date: "15 March 2026",
    category: "Clean Water",
    title: "15 New Boreholes Completed Across Bunyoro",
    excerpt:
      "Our latest clean water project has brought safe drinking water to an estimated 8,500 people in previously unserved communities.",
  },
  {
    date: "28 February 2026",
    category: "Partnerships",
    title: "Foundation Signs MoU with Hoima City Council",
    excerpt:
      "A new Memorandum of Understanding paves the way for collaborative urban youth empowerment programmes in Hoima City.",
  },
  {
    date: "12 January 2026",
    category: "Annual Report",
    title: "2025 Annual Impact Report Now Available",
    excerpt:
      "Our full 2025 Annual Impact Report has been published, documenting outcomes across all programme areas and our audited financial accounts.",
  },
  {
    date: "5 December 2025",
    category: "Events",
    title: "Foundation Hosts Annual Community Dialogue Forum",
    excerpt:
      "Over 400 community members, local leaders, and partners attended our annual dialogue forum to shape the foundation's 2026 strategy.",
  },
];

const categoryColors: Record<string, string> = {
  Education: "bg-blue-100 text-blue-700",
  Agriculture: "bg-green-100 text-green-700",
  "Clean Water": "bg-cyan-100 text-cyan-700",
  Partnerships: "bg-purple-100 text-purple-700",
  "Annual Report": "bg-yellow-100 text-yellow-700",
  Events: "bg-pink-100 text-pink-700",
};

export default function NewsPage() {
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
              News &amp; <span className="text-[#1F3A6D]">Resources</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5A6270] max-w-3xl mx-auto leading-relaxed">
              Stay up to date with our latest stories, reports, and updates from
              across the Bunyoro region.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <FadeIn key={article.title}>
                <article className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full ${
                          categoryColors[article.category] ||
                          "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-400">{article.date}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#1F3A6D] mb-3 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-[#5A6270] leading-relaxed flex-1">
                      {article.excerpt}
                    </p>
                    <Link
                      href="#"
                      className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-[#33c6de] hover:text-[#1F3A6D] transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
