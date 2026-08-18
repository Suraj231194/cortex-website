"use client";

import { motion } from "motion/react";
import { Crosshair, Lightbulb, ShieldCheck, Sprout } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const values = [
  {
    icon: Crosshair,
    title: "Precision",
    description: "Every solution begins with disciplined engineering. We obsess over the details to build software that is accurate, reliable, and performs flawlessly under real-world demands.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We combine proven engineering principles with emerging technologies to create intelligent solutions that solve today's challenges while preparing businesses for tomorrow.",
  },
  {
    icon: ShieldCheck,
    title: "Ownership",
    description: "We take responsibility beyond delivery. Every project is approached with accountability, transparency, and a commitment to achieving meaningful business outcomes.",
  },
  {
    icon: Sprout,
    title: "Endurance",
    description: "We build with the future in mind. Our systems are designed to scale, adapt, and deliver lasting value as businesses evolve and grow.",
  },
];

function ValueCard({ value }: { value: (typeof values)[number] }) {
  const Icon = value.icon;

  return (
    <article className="glass-card relative flex h-full min-h-64 w-[min(82vw,360px)] shrink-0 flex-col overflow-hidden p-6 shadow-[0_18px_45px_rgba(49,21,87,.08)]">
      <div className="absolute -right-12 -top-12 size-32 rounded-full bg-brand-primary/5 blur-3xl" />
      <div className="mb-5 grid size-12 place-items-center rounded-xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20">
        <Icon className="size-6 text-brand-primary-light" />
      </div>
      <h3 className="text-xl font-semibold text-text-primary">{value.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">{value.description}</p>
    </article>
  );
}

export default function AboutValuesMarquee() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {values.map((value) => <ValueCard key={value.title} value={value} />)}
      </div>
    );
  }

  return (
    <div className="overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
      <motion.div
        className="flex w-max gap-5"
        animate={{ x: ["0%", "calc(-50% - 0.625rem)"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {[...values, ...values].map((value, index) => (
          <ValueCard key={`${value.title}-${index}`} value={value} />
        ))}
      </motion.div>
    </div>
  );
}
