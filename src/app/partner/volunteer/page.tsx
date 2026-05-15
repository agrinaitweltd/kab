import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const roles = [
  { title: "Field Programme Support", location: "Hoima, Uganda", commitment: "2–12 weeks", desc: "Support our field teams in education, agriculture, or water programmes, working directly alongside community staff and beneficiaries." },
  { title: "Teaching & Tutoring", location: "Hoima, Uganda", commitment: "4–12 weeks", desc: "Assist teachers in primary and secondary schools, deliver literacy workshops, or support our adult education programmes." },
  { title: "Skills Training Facilitation", location: "Hoima, Uganda", commitment: "2–8 weeks", desc: "Share your professional skills — in carpentry, tailoring, ICT, business, or health — at our vocational skills centres." },
  { title: "Communications & Media", location: "Remote / In-country", commitment: "Flexible", desc: "Help us tell our story through photography, videography, copywriting, or social media support." },
  { title: "Monitoring & Evaluation", location: "Remote / In-country", commitment: "Flexible", desc: "Support our M&E team with data collection, analysis, and impact reporting for our programmes." },
  { title: "Fundraising Support", location: "Remote", commitment: "Flexible", desc: "Help research grant opportunities, write funding applications, or support event-based fundraising from wherever you are." },
];

export default function VolunteerPage() {
  return (
    <main>
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute left-0 top-20 w-[500px] h-28 bg-[#1F3A6D] rounded-r-full opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-[#33c6de] mb-4">Become a Partner</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#5A6270] leading-tight mb-6">
              <span className="text-[#1F3A6D]">Volunteer</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5A6270] max-w-3xl mx-auto leading-relaxed">
              Give your time, skills, and energy to communities in Bunyoro. Whether in-country or remote, your contribution matters.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F3A6D] mb-10">Current Opportunities</h2>
          </FadeIn>
          <div className="space-y-5">
            {roles.map((role) => (
              <FadeIn key={role.title}>
                <div className="border border-gray-200 rounded-2xl p-6 hover:border-[#33c6de] hover:shadow-md transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#1F3A6D] mb-1">{role.title}</h3>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wide text-[#5A6270] bg-gray-100 px-3 py-1 rounded-full">
                          📍 {role.location}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wide text-[#5A6270] bg-gray-100 px-3 py-1 rounded-full">
                          🕐 {role.commitment}
                        </span>
                      </div>
                      <p className="text-sm text-[#5A6270] leading-relaxed">{role.desc}</p>
                    </div>
                    <Link
                      href="/contact"
                      className="flex-shrink-0 bg-[#1F3A6D] hover:bg-[#162d55] text-white font-bold uppercase tracking-wide text-xs px-5 py-2.5 rounded-full transition-colors duration-200"
                    >
                      Apply
                    </Link>
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
