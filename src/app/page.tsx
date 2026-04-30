"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import FadeIn from "@/components/FadeIn";

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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function HomePage() {
  return (
    <main className="bg-[var(--who-bg)] text-[var(--who-text)] overflow-x-clip">
      <motion.section 
        className="pt-36 pb-16 px-5 sm:px-8 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="who-band who-band-hello mb-10">
          <span>Hello.</span>
        </motion.div>
        <motion.h1 variants={itemVariants} className="who-lead mb-6">
          We bring together funders and high impact health initiatives to further the mission of the World Health Organization (WHO).
        </motion.h1>
        <motion.div variants={itemVariants}>
          <Link href="/about" className="btn-pink mb-12">
            About us
          </Link>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className="relative pt-10"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute inset-x-0 bottom-0 h-44 rounded-[56px] bg-[var(--who-pink)]" 
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7, ease: "easeOut" as const }}
            whileHover={{ scale: 1.02 }}
            className="relative z-10 w-full max-w-[580px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=1000&auto=format&fit=crop&q=80"
              alt="Mother holding child"
              width={900}
              height={650}
              className="img-grayscale"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.section>

      <FadeIn>
        <section className="pb-20 px-5 sm:px-8 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="who-title mb-6">How do we achieve this?</h2>
              <p className="who-copy mb-5">
                We are here to help the World Health Organization and its partners aid critical health projects across the Bunyoro: protecting children from disease, helping women give birth safely, and supporting hospitals with essential medicines.
              </p>
              <p className="who-copy mb-8">
                But that's not all we do. We bring together the people trying to solve the world's most urgent health challenges with those who can fund their work. This funding paves the way for innovations in health technology and more sustainable health systems, helping to make the world a better place, in more places.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/about" className="btn-pink">
                  About us
                </Link>
              </motion.div>
            </div>
            <motion.div 
              className="hidden lg:block relative w-48 h-48 flex-shrink-0"
              initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
              whileHover={{ rotate: 5, scale: 1.1 }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Question mark shape */}
                <defs>
                  <linearGradient id="questionGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'var(--who-cyan)', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'var(--who-blue)', stopOpacity: 1 }} />
                  </linearGradient>
                  <linearGradient id="questionGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: 'var(--who-pink)', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'var(--who-blue)', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                {/* Top curve of question mark */}
                <path d="M 60 50 Q 60 20, 90 20 Q 120 20, 120 50 Q 120 70, 100 85 L 100 110" 
                      fill="none" 
                      stroke="url(#questionGrad1)" 
                      strokeWidth="24" 
                      strokeLinecap="round"/>
                {/* Dot of question mark */}
                <circle cx="100" cy="145" r="15" fill="url(#questionGrad2)"/>
              </svg>
            </motion.div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="pb-20 px-5 sm:px-8 max-w-6xl mx-auto">
          <div className="relative pt-5 mb-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-28 w-full rounded-full bg-[var(--who-cyan)]" 
            />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="absolute right-0 -bottom-10 w-[48%] max-w-[280px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=1000&auto=format&fit=crop&q=80"
                alt="Emergency response worker"
                width={420}
                height={500}
                className="img-grayscale"
              />
            </motion.div>
          </div>
          <h2 className="who-title mb-5">Health Emergencies Alliance</h2>
          <p className="who-copy mb-5">
            Every humanitarian crisis is also a health crisis. We support frontline teams to prevent, prepare for, and respond to health emergencies wherever they happen.
          </p>
          <p className="who-copy mb-8">
            Timely investment coupled with expert preparations can help provide quality healthcare for people in crisis and save many lives.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/projects" className="btn-pink">
              Find out more
            </Link>
          </motion.div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="pb-20 px-5 sm:px-8 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="who-plus mb-8" 
          />
          <h2 className="who-title mb-5">We raise funds to improve people&apos;s health worldwide</h2>
          <p className="who-copy mb-4">
            Millions of people have little or no chance of good health, simply because of where they were born, live, or work.
          </p>
          <p className="who-copy">
            We are working hard to improve that reality by connecting donors with initiatives that make a real difference to people&apos;s lives.
          </p>
        </section>
      </FadeIn>

      <FadeIn>
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
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/projects" className="btn-pink mb-10">
              Areas of focus
            </Link>
          </motion.div>
          <motion.div 
            className="grid grid-cols-2 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?w=800&auto=format&fit=crop&q=80"
                alt="Vaccinator"
                width={360}
                height={320}
                className="w-full img-grayscale"
              />
            </motion.div>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mt-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&auto=format&fit=crop&q=80"
                alt="Healthcare delivery"
                width={360}
                height={320}
                className="w-full img-grayscale"
              />
            </motion.div>
          </motion.div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="pb-20 px-5 sm:px-8 max-w-6xl mx-auto">
          <h2 className="who-title mb-8">Our Leadership Team</h2>
          <motion.div 
            className="grid grid-cols-2 gap-x-4 gap-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {leadership.map((member) => (
              <motion.article 
                key={member.name}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={380}
                    height={380}
                    className="w-full aspect-square object-cover img-grayscale"
                  />
                </motion.div>
                <h3 className="mt-3 text-[2rem] leading-[1.05] tracking-[-0.02em] font-extrabold">{member.name}</h3>
                <p className="text-[1.9rem] leading-[1.08] mt-2">{member.role}</p>
                <Link href="/about" className="who-link">
                  LinkedIn profile
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="pb-20 px-5 sm:px-8 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="who-band who-band-rethink mb-8"
          >
            <span>Rethink</span>
          </motion.div>
          <h2 className="who-title mb-5">We disrupt, reimagine and reshape how people and companies contribute to global health.</h2>
          <motion.div 
            className="relative mt-10 pt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              variants={itemVariants}
              className="absolute inset-x-0 bottom-0 h-52 rounded-[56px] bg-[var(--who-pink)]" 
            />
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative z-10 w-full max-w-[560px] img-grayscale mx-auto"
            >
              <Image
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1000&auto=format&fit=crop&q=80"
                alt="Public health leader"
                width={900}
                height={700}
                className="w-full"
              />
            </motion.div>
          </motion.div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="pb-20 px-5 sm:px-8 max-w-6xl mx-auto">
          <h2 className="who-title mb-8">Our Board</h2>
          <motion.div 
            className="grid grid-cols-2 gap-x-4 gap-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {board.map((member) => (
              <motion.article 
                key={member.name}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={380}
                    height={380}
                    className="w-full aspect-square object-cover img-grayscale"
                  />
                </motion.div>
                <h3 className="mt-3 text-[2rem] leading-[1.05] tracking-[-0.02em] font-extrabold">{member.name}</h3>
                <p className="text-[1.9rem] leading-[1.08] mt-2">{member.role}</p>
                <Link href="/about" className="who-link">
                  LinkedIn profile
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="pb-20 px-5 sm:px-8 max-w-6xl mx-auto">
          <motion.div 
            className="relative pt-6 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              variants={itemVariants}
              className="absolute inset-x-0 bottom-0 h-56 rounded-[56px] bg-[var(--who-pink)]" 
            />
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative z-10 w-full max-w-[560px] img-grayscale mx-auto"
            >
              <Image
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1000&auto=format&fit=crop&q=80"
                alt="Healthcare worker"
                width={900}
                height={680}
                className="w-full"
              />
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="who-plus mb-7" 
          />
          <h2 className="who-title mb-4">Our vision</h2>
          <p className="who-subtitle mb-5">The Kabalega Society Foundation shares a vision of a world where opportunity knows no bounds.</p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="pb-20 px-5 sm:px-8 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="who-plus mb-7" 
          />
          <h2 className="who-title mb-4">Our mission</h2>
          <p className="who-subtitle mb-4">To ignite private funding and cultivate dynamic partnerships, championing health and protecting the vulnerable.</p>
          <p className="who-copy">We bring the right people to the table to help fast-track health and education projects worldwide.</p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="pb-20 px-5 sm:px-8 max-w-6xl mx-auto">
          <motion.div 
            className="relative h-56 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              variants={itemVariants}
              className="absolute left-0 top-0 h-8 w-[70%] rounded-r-full bg-[var(--who-cyan)] -rotate-[38deg] origin-left" 
            />
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="img-grayscale absolute right-0 bottom-0 w-[70%] max-w-[360px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=900&auto=format&fit=crop&q=80"
                alt="Founder portrait"
                width={540}
                height={480}
                className="w-full"
              />
            </motion.div>
          </motion.div>
          <motion.blockquote 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="who-quote"
          >
            "We have to create a healthier, more equitable future for everyone. By investing in communities and using a flexible, innovative, partnership-driven approach, our goal is to overcome today&apos;s challenges and ensure healthier lives tomorrow."
          </motion.blockquote>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="pb-20 px-5 sm:px-8 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="who-band who-band-hello mb-8"
          >
            <span>Unique</span>
          </motion.div>
          <p className="who-subtitle mb-8">
            We are an independent foundation, with the freedom to inspire change for better health. Our work supports local systems and wider social progress.
          </p>
          <motion.div 
            className="relative pt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              variants={itemVariants}
              className="absolute inset-x-0 bottom-0 h-52 rounded-[56px] bg-[var(--who-pink)]/45" 
            />
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative z-10 w-full max-w-[560px] img-grayscale mx-auto"
            >
              <Image
                src="https://images.unsplash.com/photo-1634704784915-aacf363b021f?w=1000&auto=format&fit=crop&q=80"
                alt="Volunteer smiling"
                width={900}
                height={700}
                className="w-full"
              />
            </motion.div>
          </motion.div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="pb-24 px-5 sm:px-8 max-w-6xl mx-auto">
          <h2 className="who-title text-[var(--who-pink)] mb-12 text-center lg:text-left">We need you...</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {needs.map((item, index) => (
              <motion.article 
                key={item.title} 
                className={index === 2 ? "opacity-35" : ""}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-[2.2rem] sm:text-[2.5rem] leading-[1.1] tracking-[-0.02em] font-extrabold mb-4">{item.title}</h3>
                <p className="text-[1.6rem] sm:text-[1.8rem] leading-[1.4] text-[var(--who-text)] mb-5">{item.text}</p>
                <motion.div whileHover={{ x: 4 }}>
                  <Link href={item.href} className="who-read-more">
                    Read more
                  </Link>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </section>
      </FadeIn>
    </main>
  );
}
