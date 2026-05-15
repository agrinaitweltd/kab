import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const roles = [
  {
    title: "Field Programme Support",
    location: "Hoima, Uganda",
    commitment: "2–12 weeks",
    desc: "Work directly alongside our field teams in education, agriculture, or water programmes. You will support community staff, assist with training delivery, and help document programme outcomes. No specific qualifications required — just commitment and a willingness to learn.",
  },
  {
    title: "Teaching & Tutoring",
    location: "Hoima, Uganda",
    commitment: "4–12 weeks",
    desc: "Assist teachers in primary and secondary schools, deliver literacy and numeracy workshops, or support our adult education programmes. Teaching qualifications are welcome but not mandatory — a passion for education and working with children is what matters most.",
  },
  {
    title: "Skills Training Facilitation",
    location: "Hoima, Uganda",
    commitment: "2–8 weeks",
    desc: "Share your professional expertise at our vocational skills centres. We particularly welcome volunteers with skills in carpentry, tailoring, automotive mechanics, catering, ICT, or business management who can run practical workshops.",
  },
  {
    title: "Communications & Media",
    location: "Remote or In-country",
    commitment: "Flexible",
    desc: "Help us tell our story. Whether through photography, videography, copywriting, social media management, or graphic design — your creative skills can amplify our impact and bring our work to new audiences around the world.",
  },
  {
    title: "Monitoring & Evaluation",
    location: "Remote or In-country",
    commitment: "Flexible",
    desc: "Support our M&E team with data collection design, field surveys, analysis, and impact reporting. Experience in international development, research, or statistics is helpful. This role can be done remotely or combined with an in-country placement.",
  },
  {
    title: "Fundraising & Grant Writing",
    location: "Remote",
    commitment: "Flexible",
    desc: "Help us grow our funding base by researching grant opportunities, writing compelling funding applications, or supporting event-based fundraising. Experience in charity fundraising or bid writing is an asset but not a requirement.",
  },
];

export default function VolunteerPage() {
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
                  Volunteering
                </p>
                <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
                  <span className="text-[#e91e8c]">Give your time,</span>
                  <br />
                  <span className="text-[#e91e8c]">change futures</span>
                </h1>
                <p className="text-base text-[#5A6270] max-w-md leading-relaxed font-medium">
                  Volunteers are at the heart of what we do. Whether you join us
                  in Uganda or contribute remotely, your skills and energy
                  directly benefit the communities we serve.
                </p>
              </div>
            </FadeIn>

            {/* Right — photo with pink pill */}
            <FadeIn direction="right">
              <div className="relative flex justify-center items-end h-[460px]">
                {/* Pink pill background */}
                <div className="absolute bottom-10 left-4 right-4 h-48 bg-[#e91e8c] rounded-full" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=80"
                  alt="Volunteer with community"
                  className="relative z-10 h-[420px] w-72 object-cover object-top grayscale"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why volunteer */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                Make a direct<br />difference
              </h2>
            </FadeIn>
            <FadeIn direction="right">
              <p className="text-[#5A6270] leading-relaxed mb-4">
                Volunteering with the Kabalega Society Foundation puts you at the
                heart of real community development. You will work alongside our
                staff, build relationships with beneficiaries, and see the direct
                impact of your contribution — whether that is a student passing
                their exams, a farmer doubling their yield, or a village receiving
                clean water for the first time.
              </p>
              <p className="text-[#5A6270] leading-relaxed">
                We provide a full induction, in-country support, and regular
                supervision for all in-country volunteers. Remote volunteers
                receive clear briefs, regular check-ins, and full access to our
                communications and resource library.
              </p>
              <div className="mt-8 border-t-2 border-[#33c6de] w-24" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">Current opportunities</h2>
            <p className="text-[#5A6270] mb-10 max-w-xl">
              We welcome volunteers at all experience levels. All roles come with full briefing materials, supervision, and a reference on completion.
            </p>
          </FadeIn>
          <div className="space-y-5">
            {roles.map((role) => (
              <FadeIn key={role.title}>
                <div className="border border-gray-200 bg-white rounded-2xl p-6 hover:border-[#e91e8c] hover:shadow-md transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{role.title}</h3>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wide text-[#5A6270] bg-gray-100 px-3 py-1 rounded-full">
                          {role.location}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wide text-[#5A6270] bg-gray-100 px-3 py-1 rounded-full">
                          {role.commitment}
                        </span>
                      </div>
                      <p className="text-sm text-[#5A6270] leading-relaxed">{role.desc}</p>
                    </div>
                    <Link
                      href="/contact"
                      className="flex-shrink-0 bg-[#e91e8c] hover:bg-[#c91578] text-white font-bold uppercase tracking-wide text-xs px-5 py-2.5 rounded-full transition-colors duration-200"
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

      {/* Speak to us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Ready to<br />get started?
              </h2>
              <p className="text-[#5A6270] leading-relaxed mb-8">
                Send us a message telling us about yourself, your skills, and
                which role interests you most. We will get back to you within
                five working days with next steps.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#e91e8c] hover:bg-[#c91578] text-white font-bold uppercase tracking-wide px-7 py-3 rounded-full transition-colors duration-200 text-sm"
              >
                Contact us
              </Link>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative h-72">
                <div className="absolute inset-0 bg-[#1F3A6D] rounded-2xl" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=700&auto=format&fit=crop&q=80"
                  alt="Volunteers in the field"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-60 grayscale mix-blend-luminosity"
                />
                <div className="absolute inset-0 flex items-end p-8">
                  <p className="text-white font-bold text-xl leading-snug">
                    &ldquo;The experience changed my life as much as I hope it changed theirs.&rdquo;
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
