import Link from "next/link";
import Image from "next/image";

const leadership = [
  {
    name: "Anil Soni",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Valerie Boulet",
    role: "Chief Development Officer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Parul Pandey",
    role: "Chief Strategy Officer",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Susan Quist",
    role: "Head of Partnerships",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80",
  },
];

const board = [
  {
    name: "Prof. Dr. Thomas Zeltner",
    role: "Founder and Chair of the Board",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Bob Carter",
    role: "Board member",
    image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Clare Akamanzi",
    role: "Board member",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Dr. Silvia Gold",
    role: "Board member",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80",
  },
];

const needs = [
  {
    title: "Philanthropists",
    text: "The Kabalega Society Foundation is here to support your vision of a safer, healthier world.",
    href: "/donate",
  },
  {
    title: "Corporate partners",
    text: "The Kabalega Society Foundation connects your business to the programs and people solving urgent regional challenges.",
    href: "/contact",
  },
  {
    title: "Impact investors",
    text: "Think of us as your ally in creating positive change at scale through resilient, long-term systems.",
    href: "/projects",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[var(--who-bg)] text-[var(--who-text)] overflow-x-clip">
      <section className="pt-36 pb-16 px-5 sm:px-8 max-w-6xl mx-auto">
        <div className="who-band who-band-hello mb-10">
          <span>Hello.</span>
        </div>
        <h1 className="who-lead mb-6">
          We bring together funders and high impact health initiatives to further the mission of the World Health Organization (WHO).
        </h1>
        <Link href="/about" className="btn-pink mb-12">
          About us
        </Link>
        <div className="relative pt-10">
          <div className="absolute inset-x-0 bottom-0 h-44 rounded-[56px] bg-[var(--who-pink)]" />
          <Image
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=1000&auto=format&fit=crop&q=80"
            alt="Mother holding child"
            width={900}
            height={650}
            className="relative z-10 w-full max-w-[580px] img-grayscale"
            priority
          />
        </div>
      </section>

      <section className="pb-20 px-5 sm:px-8 max-w-6xl mx-auto">
        <h2 className="who-title mb-6">How do we achieve this?</h2>
        <p className="who-copy mb-5">
          We are here to help communities and partners aid critical development projects across Bunyoro: protecting children from disease, helping women give birth safely, and supporting hospitals with essential medicines.
        </p>
        <p className="who-copy mb-8">
          We also bring together people solving urgent health challenges with those who can fund their work, paving the way for innovation and stronger local systems.
        </p>
        <Link href="/about" className="btn-pink">
          About us
        </Link>
      </section>

      <section className="pb-20 px-5 sm:px-8 max-w-6xl mx-auto">
        <div className="relative pt-5 mb-8">
          <div className="h-28 w-full rounded-full bg-[var(--who-cyan)]" />
          <Image
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=1000&auto=format&fit=crop&q=80"
            alt="Emergency response worker"
            width={420}
            height={500}
            className="img-grayscale absolute right-0 -bottom-10 w-[48%] max-w-[280px]"
          />
        </div>
        <h2 className="who-title mb-5">Health Emergencies Alliance</h2>
        <p className="who-copy mb-5">
          Every humanitarian crisis is also a health crisis. We support frontline teams to prevent, prepare for, and respond to health emergencies wherever they happen.
        </p>
        <p className="who-copy mb-8">
          Timely investment coupled with expert preparations can help provide quality healthcare for people in crisis and save many lives.
        </p>
        <Link href="/projects" className="btn-pink">
          Find out more
        </Link>
      </section>

      <section className="pb-20 px-5 sm:px-8 max-w-6xl mx-auto">
        <div className="who-plus mb-8" />
        <h2 className="who-title mb-5">We raise funds to improve people&apos;s health worldwide</h2>
        <p className="who-copy mb-4">
          Millions of people have little or no chance of good health, simply because of where they were born, live, or work.
        </p>
        <p className="who-copy">
          We are working hard to improve that reality by connecting donors with initiatives that make a real difference to people&apos;s lives.
        </p>
      </section>

      <section className="pb-20 px-5 sm:px-8 max-w-6xl mx-auto">
        <p className="who-copy mb-5">
          We connect donors to doers in order to fund big bets, those initiatives with the greatest potential to improve global health.
        </p>
        <p className="who-copy mb-5">
          We support the WHO and its global network of partners by mobilizing new funding from philanthropists, foundations, businesses, and individuals.
        </p>
        <p className="who-copy mb-8">
          We focus on initiatives that address health inequities and barriers to wellbeing, including poverty, conflict, discrimination, and injustice.
        </p>
        <Link href="/projects" className="btn-pink mb-10">
          Areas of focus
        </Link>
        <div className="grid grid-cols-2 gap-3">
          <Image
            src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?w=800&auto=format&fit=crop&q=80"
            alt="Vaccinator"
            width={360}
            height={320}
            className="w-full img-grayscale"
          />
          <Image
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&auto=format&fit=crop&q=80"
            alt="Healthcare delivery"
            width={360}
            height={320}
            className="w-full img-grayscale mt-10"
          />
        </div>
      </section>

      <section className="pb-20 px-5 sm:px-8 max-w-6xl mx-auto">
        <h2 className="who-title mb-8">Our Leadership Team</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
          {leadership.map((member) => (
            <article key={member.name}>
              <Image
                src={member.image}
                alt={member.name}
                width={380}
                height={380}
                className="w-full aspect-square object-cover img-grayscale"
              />
              <h3 className="mt-3 text-[2rem] leading-[1.05] tracking-[-0.02em] font-extrabold">{member.name}</h3>
              <p className="text-[1.9rem] leading-[1.08] mt-2">{member.role}</p>
              <Link href="/about" className="who-link">
                LinkedIn profile
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20 px-5 sm:px-8 max-w-6xl mx-auto">
        <div className="who-band who-band-rethink mb-8">
          <span>Rethink</span>
        </div>
        <h2 className="who-title mb-5">We disrupt, reimagine and reshape how people and companies contribute to global health.</h2>
        <div className="relative mt-10 pt-8">
          <div className="absolute inset-x-0 bottom-0 h-52 rounded-[56px] bg-[var(--who-pink)]" />
          <Image
            src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1000&auto=format&fit=crop&q=80"
            alt="Public health leader"
            width={900}
            height={700}
            className="relative z-10 w-full max-w-[560px] img-grayscale mx-auto"
          />
        </div>
      </section>

      <section className="pb-20 px-5 sm:px-8 max-w-6xl mx-auto">
        <h2 className="who-title mb-8">Our Board</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
          {board.map((member) => (
            <article key={member.name}>
              <Image
                src={member.image}
                alt={member.name}
                width={380}
                height={380}
                className="w-full aspect-square object-cover img-grayscale"
              />
              <h3 className="mt-3 text-[2rem] leading-[1.05] tracking-[-0.02em] font-extrabold">{member.name}</h3>
              <p className="text-[1.9rem] leading-[1.08] mt-2">{member.role}</p>
              <Link href="/about" className="who-link">
                LinkedIn profile
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20 px-5 sm:px-8 max-w-6xl mx-auto">
        <div className="relative pt-6 mb-8">
          <div className="absolute inset-x-0 bottom-0 h-56 rounded-[56px] bg-[var(--who-pink)]" />
          <Image
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1000&auto=format&fit=crop&q=80"
            alt="Healthcare worker"
            width={900}
            height={680}
            className="relative z-10 w-full max-w-[560px] img-grayscale mx-auto"
          />
        </div>
        <div className="who-plus mb-7" />
        <h2 className="who-title mb-4">Our vision</h2>
        <p className="who-subtitle mb-5">The Kabalega Society Foundation shares a vision of a world where opportunity knows no bounds.</p>
      </section>

      <section className="pb-20 px-5 sm:px-8 max-w-6xl mx-auto">
        <div className="who-plus mb-7" />
        <h2 className="who-title mb-4">Our mission</h2>
        <p className="who-subtitle mb-4">To ignite private funding and cultivate dynamic partnerships, championing health and protecting the vulnerable.</p>
        <p className="who-copy">We bring the right people to the table to help fast-track health and education projects worldwide.</p>
      </section>

      <section className="pb-20 px-5 sm:px-8 max-w-6xl mx-auto">
        <div className="relative h-56 mb-8">
          <div className="absolute left-0 top-0 h-8 w-[70%] rounded-r-full bg-[var(--who-cyan)] -rotate-[38deg] origin-left" />
          <Image
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=900&auto=format&fit=crop&q=80"
            alt="Founder portrait"
            width={540}
            height={480}
            className="img-grayscale absolute right-0 bottom-0 w-[70%] max-w-[360px]"
          />
        </div>
        <blockquote className="who-quote">
          “We have to create a healthier, more equitable future for everyone. By investing in communities and using a flexible, innovative, partnership-driven approach, our goal is to overcome today&apos;s challenges and ensure healthier lives tomorrow.”
        </blockquote>
      </section>

      <section className="pb-20 px-5 sm:px-8 max-w-6xl mx-auto">
        <div className="who-band who-band-hello mb-8">
          <span>Unique</span>
        </div>
        <p className="who-subtitle mb-8">
          We are an independent foundation, with the freedom to inspire change for better health. Our work supports local systems and wider social progress.
        </p>
        <div className="relative pt-8">
          <div className="absolute inset-x-0 bottom-0 h-52 rounded-[56px] bg-[var(--who-pink)]/45" />
          <Image
            src="https://images.unsplash.com/photo-1634704784915-aacf363b021f?w=1000&auto=format&fit=crop&q=80"
            alt="Volunteer smiling"
            width={900}
            height={700}
            className="relative z-10 w-full max-w-[560px] img-grayscale mx-auto"
          />
        </div>
      </section>

      <section className="pb-24 px-5 sm:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="who-question">?</span>
        </div>
        <h2 className="who-title text-[var(--who-pink)] mb-8">We need you...</h2>
        <div className="space-y-10">
          {needs.map((item, index) => (
            <article key={item.title} className={index === 2 ? "opacity-35" : ""}>
              <h3 className="text-[3.1rem] leading-[1] tracking-[-0.02em] font-extrabold mb-3">{item.title}</h3>
              <p className="who-copy mb-5">{item.text}</p>
              <Link href={item.href} className="who-read-more">
                Read more
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
