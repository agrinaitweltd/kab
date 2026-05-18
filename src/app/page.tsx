"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const needs = [
  {
    title: "Philanthropists",
    text: "The WHO Foundation is here to support your vision of a safer, healthier world.",
    href: "/donate",
  },
  {
    title: "Corporate partners",
    text: "The WHO Foundation connects your business to the programmes and people solving the world's health challenges.",
    href: "/contact",
  },
  {
    title: "Impact investors",
    text: "Think of us as your ally in creating positive change on a global scale. With your investment, we can create stronger, more sustainable health systems.",
    href: "/projects",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-[#e9f0f3] text-[#4b5563]">
      <section className="mx-auto max-w-[1240px] px-6 pb-20 pt-28 sm:px-10 lg:px-16 lg:pb-28 lg:pt-36">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
          <FadeIn direction="down" className="relative z-10 max-w-[360px] lg:ml-16">
            <div className="relative mb-8 h-[28px] w-[268px] rounded-r-full bg-[#f7c85c] sm:h-[34px] sm:w-[330px]">
              <h1 className="absolute -right-4 -top-7 text-[3.9rem] font-extrabold leading-none tracking-[-0.06em] text-[#ff2da0] sm:text-[5.4rem]">
                Hello.
              </h1>
            </div>

            <p className="max-w-[280px] text-[1.95rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#4a5562] sm:max-w-[330px] sm:text-[2.65rem]">
              We bring together funders and high impact health initiatives to further the mission of the World Health Organization (WHO).
            </p>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="mt-6">
              <Link
                href="/about"
                className="inline-flex rounded-full bg-[#ff2da0] px-4 py-2 text-[0.78rem] font-extrabold tracking-[-0.02em] text-white shadow-[0_10px_24px_rgba(255,45,160,0.24)] transition-colors hover:bg-[#ec1991]"
              >
                About us
              </Link>
            </motion.div>
          </FadeIn>

          <FadeIn direction="left" className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[760px]">
              <div className="absolute bottom-2 left-[11%] right-[5%] h-[90px] rounded-full bg-[#ff2da0] sm:h-[112px] lg:h-[124px]" />
              <div className="relative mx-auto aspect-[1.25/1] w-full max-w-[500px] lg:mr-12 lg:max-w-[540px]">
                <Image
                  src="/hero.png"
                  alt="Mother holding child"
                  fill
                  priority
                  className="object-contain grayscale"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 pb-20 sm:px-10 lg:px-16 lg:pb-28">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn direction="up" className="lg:ml-[180px] lg:max-w-[440px]">
            <h2 className="max-w-[360px] text-[3.25rem] font-extrabold leading-[0.95] tracking-[-0.06em] text-[#4a5562] sm:text-[4.8rem]">
              How do we achieve this?
            </h2>
            <div className="mt-5 max-w-[330px] space-y-4 text-[1rem] leading-[1.7] text-[#5d6773] sm:text-[1.06rem]">
              <p>
                We are here to help the World Health Organization and its partners to aid critical health projects across the world, protecting children from disease, helping women to give birth safely in emergencies, and supplying hospitals with essential medicines.
              </p>
              <p>
                But that&apos;s not all we do. We bring together the people trying to solve the world&apos;s most urgent health challenges with those who are able to fund their work. This funding paves the way for innovations in health technology and more sustainable health systems. All with the single goal of saving more lives, in more places.
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="mt-6">
              <Link
                href="/about"
                className="inline-flex rounded-full bg-[#ff2da0] px-4 py-2 text-[0.78rem] font-extrabold tracking-[-0.02em] text-white shadow-[0_10px_24px_rgba(255,45,160,0.24)] transition-colors hover:bg-[#ec1991]"
              >
                About us
              </Link>
            </motion.div>
          </FadeIn>

          <FadeIn direction="left" className="flex justify-center lg:justify-center">
            <div className="relative mt-4 h-[240px] w-[180px] sm:h-[340px] sm:w-[250px] lg:mt-8 lg:h-[360px] lg:w-[270px]">
              <span className="absolute left-5 top-3 text-[13rem] font-extrabold leading-none tracking-[-0.1em] text-[#1d71d8] sm:text-[18rem] lg:text-[20rem]">
                ?
              </span>
              <span className="absolute left-0 top-0 text-[13rem] font-extrabold leading-none tracking-[-0.1em] text-[#20c4ea] sm:text-[18rem] lg:text-[20rem]">
                ?
              </span>
              <span className="absolute left-3 top-6 text-[13rem] font-extrabold leading-none tracking-[-0.1em] text-[#ff2da0] sm:text-[18rem] lg:text-[20rem]">
                ?
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1600px] px-0 pb-24 pt-8 lg:pb-32">
        <div className="pointer-events-none absolute left-[-12%] top-[10%] h-[120px] w-[78%] origin-left -rotate-[41deg] bg-[#22c1e8] sm:h-[150px] lg:h-[190px]" />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-10 px-6 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-16">
          <FadeIn direction="right" className="relative min-h-[360px] lg:min-h-[760px]">
            <div className="relative h-[360px] w-full sm:h-[480px] lg:absolute lg:bottom-0 lg:left-0 lg:h-[760px] lg:w-[640px]">
              <Image
                src="/home-person.png"
                alt="Founder portrait"
                fill
                className="object-contain object-left-bottom grayscale"
              />
            </div>
          </FadeIn>

          <FadeIn direction="left" className="relative z-10 max-w-[520px] lg:ml-auto lg:mr-6 lg:pt-16">
            <blockquote className="text-[1.7rem] font-extrabold leading-[1.18] tracking-[-0.04em] text-[#4a5562] sm:text-[2.6rem] lg:text-[3.05rem]">
              “We have to create a healthier, more equitable future for everyone. By investing in 8 billion lives and by using a flexible, innovative, partnership-driven approach, our goal is to overcome the health challenges of today and ensure healthy lives tomorrow.”
            </blockquote>
            <p className="mt-3 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#6b7280] sm:text-[0.88rem]">
              Prof. Dr. Thomas Zeltner, Founder and Chair of the Board
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="mt-6">
              <Link
                href="/projects"
                className="inline-flex rounded-full bg-[#ff2da0] px-4 py-2 text-[0.78rem] font-extrabold tracking-[-0.02em] text-white shadow-[0_10px_24px_rgba(255,45,160,0.24)] transition-colors hover:bg-[#ec1991]"
              >
                What we do
              </Link>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 pb-28 sm:px-10 lg:px-16 lg:pb-36">
        <FadeIn direction="up" className="lg:ml-[180px]">
          <h2 className="text-[3.2rem] font-extrabold leading-none tracking-[-0.06em] text-[#ff2da0] sm:text-[4.8rem]">
            We need you...
          </h2>
        </FadeIn>

        <div className="mt-8 grid gap-8 md:grid-cols-3 lg:ml-[180px] lg:max-w-[930px] lg:gap-10">
          {needs.map((item, index) => (
            <FadeIn key={item.title} delay={index * 120} direction="up">
              <article>
                <h3 className="text-[1.55rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#4a5562] sm:text-[2rem]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[250px] text-[0.96rem] leading-[1.65] text-[#5d6773] sm:text-[1rem]">
                  {item.text}
                </p>
                <Link
                  href={item.href}
                  className="mt-6 inline-block border-b border-[#58626f] pb-0.5 text-[0.85rem] font-medium text-[#58626f] transition-colors hover:border-[#ff2da0] hover:text-[#ff2da0]"
                >
                  Read more
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
