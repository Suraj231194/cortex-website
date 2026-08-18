"use client";

import type { ComponentType, CSSProperties } from "react";
import { motion } from "motion/react";
import { FaAws } from "react-icons/fa6";
import {
  SiDocker,
  SiFirebase,
  SiFlutter,
  SiGithubactions,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import AboutValuesMarquee from "@/components/ui/AboutValuesMarquee";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FloatingParticles from "@/components/effects/FloatingParticles";
import PageTransition from "@/components/effects/PageTransition";
import CortexMark from "@/components/brand/CortexMark";
import PremiumPageHero from "@/components/ui/PremiumPageHero";
import ScrollSection from "@/components/ui/ScrollSection";
import CapabilityOrbit from "@/components/effects/CapabilityOrbit";

type TechIcon = ComponentType<{ className?: string; style?: CSSProperties }>;
type TechStackItem = { name: string; icon: TechIcon; color: string };

const techStack: TechStackItem[] = [
  { name: "React", icon: SiReact, color: "#087EA4" },
  { name: "Next.js", icon: SiNextdotjs, color: "#111111" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Firebase", icon: SiFirebase, color: "#F57C00" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-20 md:pt-24">
        <ScrollSection className="section relative !pt-6 md:!pt-8">
          <FloatingParticles count={8} className="opacity-20" />
          <div className="section-container relative z-10">
            <div className="text-center">
              <PremiumPageHero
                variant="about"
                title="About Company"
                subtitle="Engineering the Systems Behind Ambitious Businesses"
              />
              <ScrollReveal blur>
                <div className="mb-8 flex justify-center">
                  <CortexMark size={160} className="opacity-90 animate-float-gentle" />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-text-secondary">
                  We started with one belief: the right software can make anything run better. Cortex Analytics builds the systems businesses run on — AI applications, ERP platforms, mobile apps, and web experiences — engineered with precision and built to scale. Our tagline, <span className="text-gradient-shimmer font-semibold">Insight. Innovation. Impact.</span>, is the standard we hold every build to: technically excellent, strategically impactful.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </ScrollSection>

        <ScrollSection className="section relative !pt-2">
          <div className="section-container">
            <ScrollReveal blur>
              <article className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-black/[.07] bg-white p-6 shadow-[0_22px_60px_rgba(49,21,87,.09)] md:p-10">
                <div className="mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-brand-secondary to-brand-primary" />
                <h2 className="text-2xl font-semibold tracking-[-.04em] text-text-primary md:text-3xl">Founder Story</h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary">
                  <p>Over the years, I noticed a pattern across businesses of every size. Teams weren&apos;t struggling because they lacked ambition—they were struggling because the systems they depended on weren&apos;t built to support it.</p>
                  <p>Processes were fragmented. Data was scattered. Decisions were slower than they needed to be. Technology had become something businesses worked around instead of something that worked for them.</p>
                  <p>That realization led to the creation of Cortex Analytics.</p>
                  <p>I wanted to build a company where engineering came first—where every solution was designed with precision, built to scale, and focused on solving real business problems rather than adding unnecessary complexity.</p>
                  <p>Today, that philosophy remains unchanged. Every ERP platform, AI solution, mobile application, and web platform we build is driven by one goal: helping businesses operate smarter, move faster, and grow with confidence.</p>
                  <p>Because great software isn&apos;t defined by the number of features it has. It&apos;s defined by the impact it creates.</p>
                </div>
                <p className="mt-7 text-sm font-semibold uppercase tracking-[.15em] text-brand-primary">Founder Cortex Analytics</p>
              </article>
            </ScrollReveal>
          </div>
        </ScrollSection>

        <CapabilityOrbit />

        <ScrollSection revealDirection="left" className="section relative bg-surface/20">
          <div className="section-container relative z-10">
            <SectionHeading title="Our Values" subtitle="The principles that guide every project we deliver." />
            <AboutValuesMarquee />
          </div>
        </ScrollSection>

        <ScrollSection revealDirection="right" className="section relative">
          <FloatingParticles count={6} className="opacity-15" />
          <div className="section-container relative z-10">
            <SectionHeading title="Our Technology Stack" subtitle="We work with modern, battle-tested technologies chosen for performance, scalability, and developer experience." />
            <ScrollReveal blur>
              <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-8">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 150, damping: 18, delay: index * 0.04 }}
                    whileHover={{ scale: 1.08, y: -2, transition: { duration: 0.2 } }}
                    className="group flex min-h-24 cursor-default flex-col items-center justify-center gap-3 rounded-2xl border border-black/[.07] bg-white/75 px-3 py-4 text-center shadow-[0_12px_30px_rgba(26,20,42,.06)] backdrop-blur-md transition-all duration-300 hover:border-black/10 hover:bg-white hover:shadow-[0_18px_42px_rgba(26,20,42,.12)]"
                  >
                    <span className="grid size-11 place-items-center rounded-xl border border-black/[.06] bg-white shadow-lg transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" style={{ boxShadow: `0 10px 24px ${tech.color}26` }}>
                      <tech.icon className="size-6" style={{ color: tech.color }} />
                    </span>
                    <span className="text-xs font-semibold leading-tight text-text-primary sm:text-sm">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </ScrollSection>
      </div>
    </PageTransition>
  );
}
