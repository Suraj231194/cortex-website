"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";
import StatCounter from "@/components/ui/StatCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AuroraBackground from "@/components/effects/AuroraBackground";
import FloatingGeometry from "@/components/effects/FloatingGeometry";
import FloatingParticles from "@/components/effects/FloatingParticles";
import MagneticButton from "@/components/effects/MagneticButton";
import PageTransition from "@/components/effects/PageTransition";
// import Scroll3DScene from "@/components/effects/Scroll3DScene";
import { getFeaturedProjects } from "@/content/projects";
import { reviews } from "@/content/reviews";
import { stats } from "@/content/stats";
import TechnologyUniverse from "@/components/effects/TechnologyUniverse";
import TiltCard from "@/components/effects/TiltCard";
import ScrollSection from "@/components/ui/ScrollSection";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <PageTransition>
      {/* ─── HERO SECTION ─── */}
      <section className="relative isolate flex min-h-[65svh] flex-col justify-center overflow-hidden bg-white pb-8 pt-24 md:pb-10 md:pt-28">
        {/* Animated background layers */}
        <div className="absolute inset-0 bg-grid" />
        <AuroraBackground />
        <FloatingGeometry />
        <FloatingParticles count={15} />

        <div className="section-container relative z-10 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.1,
            }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#8932f8]/20 bg-[#f6efff] px-3 py-1.5 shadow-sm backdrop-blur-sm animate-badge-float"
          >
            <Sparkles className="w-4 h-4 text-brand-accent" />
            <span className="text-sm text-text-secondary">
              A technology studio for businesses built to move fast
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              delay: 0.2,
            }}
            className="mx-auto max-w-[1000px] text-[clamp(2rem,4.4vw,3.5rem)] font-medium leading-[1.08] tracking-[-.045em]"
          >
            Engineering the Systems Behind{" "}
            <span className="text-gradient-shimmer">Ambitious Businesses</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              delay: 0.4,
            }}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg"
          >
            We design and build the systems that sit at the center of a business
            — software engineered with the precision to scale and the range to
            adapt.
          </motion.p>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-black/15 pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-brand-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* <Scroll3DScene /> */}

      {/* ─── STATS SECTION ─── */}
      <ScrollSection className="section relative m-4 overflow-clip rounded-[clamp(2rem,4vw,4.5rem)] border border-black/[.075] bg-[#f6f1fb] !py-[5.4rem] max-md:m-2.5 max-md:rounded-[2rem] max-md:!py-[2.7rem]">
        {/* Gradient dividers */}
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="absolute bottom-0 left-0 right-0 section-divider" />
        <div className="absolute inset-0 bg-surface/30" />

        <div className="section-container relative z-10">
          <div className="grid grid-cols-2 gap-[1.8rem] md:grid-cols-4 md:gap-[2.7rem]">
            {stats.map((stat, i) => (
              <TiltCard key={stat.label} maxTilt={5} spotlightSize={135} className="h-full">
                <div className="h-full rounded-[.9rem] border border-white/65 bg-white/45 p-[1.125rem] shadow-[0_14px_34px_rgba(74,34,120,.08),inset_0_1px_rgba(255,255,255,.9)] backdrop-blur-sm [transform:translateZ(13px)]">
                  <StatCounter stat={stat} index={i} />
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* ─── FEATURED PROJECTS ─── */}
      <ScrollSection className="section relative m-4 overflow-clip rounded-[clamp(2rem,4vw,4.5rem)] border border-black/[.075] bg-white max-md:m-2.5 max-md:rounded-[2rem]">
        <FloatingParticles count={8} className="opacity-30" />
        <div className="section-container relative z-10">
          <SectionHeading
            title="Featured Projects"
            subtitle="Real-world solutions we've built for businesses across healthcare, manufacturing, fashion, and more."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.slice(0, 3).map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
          <ScrollReveal className="text-center mt-12">
            <MagneticButton>
              <Link
                href="/projects/"
                className="btn-secondary inline-flex items-center gap-2"
              >
                View All Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </ScrollSection>

      {/* ─── SERVICES SECTION ─── */}
      <TechnologyUniverse />

      {/* ─── TESTIMONIALS SECTION ─── */}
      <ScrollSection revealDirection="right" className="section relative m-4 overflow-clip rounded-[clamp(2rem,4vw,4.5rem)] border border-black/[.075] bg-white max-md:m-2.5 max-md:rounded-[2rem]">
        <div className="section-container relative z-10">
          <SectionHeading
            title="Featured Client Stories"
            subtitle="What our partners say about working with Cortex Analytics."
          />
        </div>
        <TestimonialsCarousel reviews={reviews} />
      </ScrollSection>

      {/* ─── CTA SECTION (Commented Out) ─── */}
    </PageTransition>
  );
}
