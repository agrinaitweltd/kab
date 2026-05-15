import FadeIn from "@/components/FadeIn";

const team = [
  {
    name: "Mr. John Byamukama",
    role: "Executive Director",
    bio: "John has led the foundation since its inception in 2016, driving strategy and building partnerships across the Bunyoro region and internationally.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
  },
  {
    name: "Dr. Grace Tumwesigye",
    role: "Director of Programs",
    bio: "Grace oversees all field programmes, ensuring quality delivery and measuring community impact across education, health, and agriculture initiatives.",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&auto=format&fit=crop&q=80",
  },
  {
    name: "Mr. Robert Kagoro",
    role: "Finance & Operations",
    bio: "Robert manages financial stewardship and operational efficiency, maintaining the highest standards of accountability to donors and communities.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
  },
  {
    name: "Ms. Patience Akello",
    role: "Community Liaison",
    bio: "Patience bridges the foundation and the communities we serve, ensuring programmes remain community-led and culturally sensitive.",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&auto=format&fit=crop&q=80",
  },
  {
    name: "Mr. David Mwesiga",
    role: "Agriculture Programme Lead",
    bio: "David brings 15 years of agronomy experience and leads our farmer training and sustainable agriculture initiatives across 30+ villages.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
  },
  {
    name: "Ms. Sarah Nakirya",
    role: "Education Programme Lead",
    bio: "Sarah coordinates school partnerships, scholarship programmes, and classroom construction projects to ensure access to quality education.",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop&q=80",
  },
];

export default function TeamPage() {
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
              Our <span className="text-[#1F3A6D]">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5A6270] max-w-3xl mx-auto leading-relaxed">
              Dedicated professionals and community advocates working together
              to create lasting change across Bunyoro.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member) => (
              <FadeIn key={member.name}>
                <div className="text-center group">
                  <div className="relative w-36 h-36 mx-auto mb-5 rounded-full overflow-hidden shadow-lg ring-4 ring-gray-100 group-hover:ring-[#33c6de] transition-all duration-300">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#1F3A6D] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#33c6de] mb-3">
                    {member.role}
                  </p>
                  <p className="text-[#5A6270] text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
