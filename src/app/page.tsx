"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Plus, Heart, Users, School } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* Hero Section - "Education Empowerment Alliance" style */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute left-0 top-20 w-96 h-96 blob-cyan opacity-70" />
        <div className="absolute right-0 bottom-0 w-[800px] h-[500px] bg-[#1F3A6D] rounded-tl-[300px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Image with blob */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute left-0 top-0 w-80 h-80 blob-cyan -z-10" />
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format&fit=crop&q=80"
                  alt="Student in Bunyoro"
                  width={600}
                  height={600}
                  className="img-grayscale rounded-full w-full max-w-md mx-auto"
                  priority
                />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 1,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="order-1 lg:order-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#5A6270] leading-[1.1] mb-6">
                Education Empowerment
                <span className="block mt-2 text-[#5A6270]">Alliance</span>
              </h1>
              
              <p className="text-lg md:text-xl text-[#5A6270] leading-relaxed mb-6 max-w-xl">
                Every child deserves an education. We support communities across Bunyoro to ensure quality education for underprivileged children.
              </p>
              
              <p className="text-base md:text-lg text-[#5A6270] leading-relaxed mb-8 max-w-xl">
                Timely investment coupled with expert support can help provide quality education, reduce poverty, and transform many lives.
              </p>
              
              <Link
                href="/projects"
                className="btn-pink"
              >
                Find out more
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hello Section */}
      <section className="relative bg-white py-20 md:py-32 overflow-hidden">
        <div className="absolute left-0 top-0 w-[600px] h-32 bg-[#1F3A6D] rounded-r-full" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Content */}
            <FadeIn direction="left">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#1F3A6D] leading-[1.1] mb-8">
                Hello.
              </h2>
              
              <p className="text-xl md:text-2xl text-[#5A6270] font-semibold leading-relaxed mb-6">
                We bring together funders and high impact education initiatives to further the mission of community development.
              </p>
              
              <Link
                href="/about"
                className="btn-pink"
              >
                About us
              </Link>
            </FadeIn>

            {/* Right - Image with blob */}
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute right-0 bottom-0 w-[600px] h-[400px] bg-[#1F3A6D] rounded-tl-[300px] -z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80"
                  alt="Mother and child"
                  width={600}
                  height={700}
                  className="img-grayscale relative z-10"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* We inspire change Section */}
      <section className="relative bg-gray-50 py-20 md:py-32 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <FadeIn>
              <div className="flex items-center gap-8 mb-8">
                <div className="flex-shrink-0">
                  <div className="relative w-24 h-24 md:w-32 md:h-32">
                    <Plus className="absolute inset-0 w-full h-full text-[#1F3A6D]" strokeWidth={4} />
                    <div className="absolute inset-8 bg-[#1F3A6D] rounded-full" />
                    <div className="absolute inset-12 bg-[#1F3A6D]" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
                  </div>
                </div>
                
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#5A6270] leading-[1.1]">
                  We inspire change
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-[#5A6270] leading-relaxed max-w-3xl">
                We lead conversations about achieving greater, more equitable development. We challenge and inspire businesses, individuals, and communities to contribute to thriving communities.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How we work Section */}
      <section className="relative bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Content */}
            <FadeIn direction="left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#5A6270] leading-[1.1] mb-8">
                How we work
              </h2>
              
              <p className="text-lg md:text-xl text-[#5A6270] leading-relaxed mb-6">
                We connect donors to communities in order to fund the "big bets", those initiatives with the greatest potential to improve lives across Bunyoro.
              </p>
              
              <p className="text-lg text-[#5A6270] leading-relaxed mb-6">
                As a foundation, we support communities and their development partners by mobilizing new funding from diverse sources – including philanthropists, foundations, businesses, and individuals – to drive innovation and transform the development ecosystem.
              </p>
              
              <p className="text-lg text-[#5A6270] leading-relaxed mb-8">
                We focus on initiatives that address inequities and the barriers to prosperity – including poverty, lack of education, discrimination, and injustice.
              </p>
              
              <Link
                href="/about"
                className="btn-pink"
              >
                About us
              </Link>
            </FadeIn>

            {/* Right - Images Grid */}
            <FadeIn direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&auto=format&fit=crop&q=80"
                      alt="Community member"
                      fill
                      className="object-cover img-grayscale"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&auto=format&fit=crop&q=80"
                      alt="Healthcare worker"
                      fill
                      className="object-cover img-grayscale"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Rethink Section */}
      <section className="relative bg-white py-20 md:py-32 overflow-hidden">
        <div className="absolute left-0 top-0 w-[600px] h-32 bg-[#1F3A6D] rounded-r-full" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Content */}
            <FadeIn direction="left">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#1F3A6D] leading-[1.1] mb-8">
                Rethink
              </h2>
              
              <p className="text-xl md:text-2xl text-[#5A6270] font-semibold leading-relaxed mb-8">
                We disrupt, reimagine and reshape how people and communities contribute to sustainable development.
              </p>
            </FadeIn>

            {/* Right - Image with blob */}
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute right-0 bottom-0 w-[600px] h-[400px] bg-[#1F3A6D] rounded-tl-[300px] -z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&auto=format&fit=crop&q=80"
                  alt="Community leader"
                  width={600}
                  height={700}
                  className="img-grayscale relative z-10"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="relative bg-gray-50 py-20 md:py-32 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Vision */}
            <FadeIn>
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <Plus className="w-20 h-20 text-[#1F3A6D]" strokeWidth={3} />
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-[#5A6270] leading-[1.1] mt-2">
                  Our vision
                </h2>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-[#5A6270] leading-tight mb-4">
                The Kabalega Society Foundation shares a vision of communities where development knows no bounds.
              </h3>
              
              <p className="text-lg text-[#5A6270] leading-relaxed">
                But the truth is that we live in an unequal world. Access to education and opportunities is a lottery, based on where we are born, grow, and live, and a whole range of social factors.
              </p>
            </FadeIn>

            {/* Mission */}
            <FadeIn delay={200}>
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <Plus className="w-20 h-20 text-[#1F3A6D]" strokeWidth={3} />
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-[#5A6270] leading-[1.1] mt-2">
                  Our mission
                </h2>
              </div>
              
              <p className="text-xl md:text-2xl font-bold text-[#5A6270] leading-tight mb-6">
                To ignite private funding and cultivate dynamic partnerships, driving sustainable development, championing education, and protecting the vulnerable.
              </p>
              
              <p className="text-lg text-[#5A6270] leading-relaxed">
                We express that mission by simply asking everyone to "Share the Future".
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Unique Section */}
      <section className="relative bg-white py-20 md:py-32 overflow-hidden">
        <div className="absolute left-0 top-0 w-[600px] h-32 bg-[#1F3A6D] rounded-r-full" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Content */}
            <FadeIn direction="left">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#1F3A6D] leading-[1.1] mb-8">
                Unique
              </h2>
              
              <p className="text-xl md:text-2xl text-[#5A6270] font-semibold leading-relaxed mb-8">
                We are an independent foundation, with the freedom to inspire change for better futures. Our work supports communities across Bunyoro and wider development systems.
              </p>
            </FadeIn>

            {/* Right - Image with blob */}
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute right-0 bottom-0 w-[600px] h-[400px] bg-[#1F3A6D] rounded-tl-[300px] -z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80"
                  alt="Community volunteer"
                  width={600}
                  height={700}
                  className="img-grayscale relative z-10"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 md:py-32 overflow-hidden">
        <div className="absolute left-0 top-0 w-[500px] h-[500px] blob-cyan opacity-20 -z-10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Image */}
            <FadeIn direction="left">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=80"
                  alt="Founder"
                  width={600}
                  height={700}
                  className="img-grayscale"
                />
              </div>
            </FadeIn>

            {/* Right - Quote */}
            <FadeIn direction="right">
              <blockquote>
                <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#5A6270] leading-tight mb-8">
                  "We have to create a healthier, more equitable future for everyone. By investing in communities and by using a flexible, innovative, partnership-driven approach, our goal is to overcome the challenges of today and ensure thriving communities tomorrow."
                </p>
                <footer>
                  <p className="text-lg font-semibold text-[#5A6270] mb-2">
                    John Byamukama, <span className="font-normal">Founder and Executive Director</span>
                  </p>
                  <Link href="/about" className="btn-pink mt-4">
                    What we do
                  </Link>
                </footer>
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* We need you Section */}
      <section className="relative bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#1F3A6D] leading-[1.1] mb-16 text-center lg:text-left">
              We need you...
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Philanthropists */}
            <FadeIn delay={100}>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A6270] mb-4">
                  Philanthropists
                </h3>
                <p className="text-lg text-[#5A6270] leading-relaxed mb-6">
                  The Kabalega Society Foundation is here to support your vision of safer, healthier communities.
                </p>
                <Link href="/donate" className="text-[#5A6270] font-semibold underline hover:text-[#1F3A6D] transition-colors">
                  Read more
                </Link>
              </div>
            </FadeIn>

            {/* Corporate partners */}
            <FadeIn delay={200}>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A6270] mb-4">
                  Corporate partners
                </h3>
                <p className="text-lg text-[#5A6270] leading-relaxed mb-6">
                  The Kabalega Society Foundation connects your business to the programs and people creating positive change.
                </p>
                <Link href="/contact" className="text-[#5A6270] font-semibold underline hover:text-[#1F3A6D] transition-colors">
                  Read more
                </Link>
              </div>
            </FadeIn>

            {/* Impact investors */}
            <FadeIn delay={300}>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A6270] mb-4">
                  Impact investors
                </h3>
                <p className="text-lg text-[#5A6270] leading-relaxed mb-6">
                  Think of us as your ally in creating positive change on a regional scale. With your investment, we can create stronger, more sustainable communities.
                </p>
                <Link href="/contact" className="text-[#5A6270] font-semibold underline hover:text-[#1F3A6D] transition-colors">
                  Read more
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-[#1F3A6D] to-[#162D56] py-20 md:py-32 overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 blob-yellow opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              How do we achieve this?
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6 max-w-4xl mx-auto">
              We are here to help communities and their partners to aid critical development projects across Bunyoro – protecting children through education; helping families achieve prosperity; and supporting communities with essential resources.
            </p>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-12 max-w-4xl mx-auto">
              But that's not all we do. We bring together the people trying to solve the region's most urgent challenges with those who are able to fund their work. This funding paves the way for innovations in education, agriculture and more sustainable community systems. All with the single goal of transforming more lives, in more places.
            </p>
            
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#1F3A6D] font-bold px-10 py-5 rounded-full text-lg transition-all duration-200 hover:shadow-2xl hover:scale-105"
            >
              About us
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
