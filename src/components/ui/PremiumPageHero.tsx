"use client";

import type { ComponentType } from "react";
import { motion } from "motion/react";
import {
  BarChart3,
  Blocks,
  Building2,
  CheckCircle2,
  CloudCog,
  Code2,
  HeartHandshake,
  Mail,
  MessageCircleMore,
  MonitorSmartphone,
  PhoneCall,
  Send,
  ShoppingBag,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

type HeroVariant = "about" | "services" | "projects" | "contact";

interface PremiumPageHeroProps {
  title: string;
  subtitle: string;
  variant: HeroVariant;
}

function HeroCopy({ title, subtitle }: Pick<PremiumPageHeroProps, "title" | "subtitle">) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 85, damping: 19 }}
      className="relative z-10"
    >
      <h1 className="max-w-3xl text-[clamp(1.75rem,3vw,3.2rem)] font-medium leading-[1.08] tracking-[-.05em] text-white">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
        {subtitle}
      </p>
    </motion.div>
  );
}

function AboutVisual() {
  const nodes = [
    { icon: Users, label: "Team", position: "left-0 top-[22%]" },
    { icon: Target, label: "Values", position: "right-0 top-[15%]" },
    { icon: HeartHandshake, label: "Impact", position: "bottom-0 left-1/2 -translate-x-1/2" },
  ];

  return (
    <div className="relative mx-auto h-[220px] w-full max-w-[280px] [perspective:900px]">
      <div className="absolute inset-[18%] rounded-full border border-white/15" />
      <div className="absolute inset-[28%] rounded-full border border-[#b56cff]/30" />
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} className="absolute inset-[12%] rounded-full border border-dashed border-white/20" />
      <motion.div animate={{ rotateX: [12, -8, 12], rotateY: [-18, 18, -18], y: [0, -8, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[32%] bg-gradient-to-br from-[#1778ff] via-[#6756f4] to-[#8b74ff] text-white shadow-[inset_12px_12px_24px_rgba(255,255,255,.38),0_26px_54px_rgba(61,91,220,.3)]">
        <Building2 className="size-9" strokeWidth={1.8} />
        <span className="absolute bottom-2 text-[7px] font-semibold uppercase tracking-[.12em] text-white/80">Our Company</span>
      </motion.div>
      {nodes.map((node, index) => {
        const Icon = node.icon;
        return (
          <motion.div key={node.label} animate={{ y: [0, index % 2 ? -6 : 6, 0] }} transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }} className={`absolute ${node.position} z-10 grid min-w-16 place-items-center gap-1 rounded-xl border border-white/80 bg-white/90 px-2.5 py-2 shadow-xl backdrop-blur-xl`}>
            <Icon className="size-4 text-brand-primary" />
            <span className="text-[8px] font-semibold text-text-primary">{node.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

function ServicesVisual() {
  const cards = [
    { icon: Sparkles, title: "AI Solutions", detail: "Automation & insight", className: "left-1 top-2 -rotate-3" },
    { icon: Blocks, title: "ERP Platforms", detail: "Connected operations", className: "right-0 top-[76px] rotate-2" },
    { icon: CloudCog, title: "Cloud Systems", detail: "Scale & reliability", className: "left-5 top-[150px] -rotate-1" },
  ];

  return (
    <div className="relative mx-auto h-[220px] w-full max-w-[310px]">
      <div className="absolute left-[15%] top-[12%] h-[76%] w-[72%] rounded-[40%] bg-[#8c52ff]/25 blur-3xl" />
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <motion.div key={card.title} initial={{ opacity: 0, x: index % 2 ? 24 : -24 }} animate={{ opacity: 1, x: 0, y: [0, -5, 0] }} transition={{ opacity: { delay: index * 0.12 }, x: { delay: index * 0.12 }, y: { duration: 5 + index, repeat: Infinity, ease: "easeInOut" } }} className={`absolute ${card.className} flex w-[78%] items-center gap-3 rounded-2xl border border-white/70 bg-white/90 p-3 shadow-xl backdrop-blur-xl`}>
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#1778ff] to-[#9a3bff] text-white"><Icon className="size-5" /></span>
            <span className="min-w-0 text-left"><strong className="block text-xs text-text-primary">{card.title}</strong><small className="block text-[9px] text-text-tertiary">{card.detail}</small></span>
            <CheckCircle2 className="ml-auto size-4 shrink-0 text-[#7f42f5]" />
          </motion.div>
        );
      })}
    </div>
  );
}

function ProjectsVisual() {
  return (
    <motion.div initial={{ opacity: 0, rotateY: -14, y: 12 }} animate={{ opacity: 1, rotateY: [5, -5, 5], y: [0, -6, 0] }} transition={{ opacity: { duration: 0.5 }, rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }} className="relative mx-auto w-full max-w-[310px] overflow-hidden rounded-2xl border border-white/30 bg-white shadow-2xl">
      <div className="flex h-8 items-center gap-1.5 border-b border-black/[.06] bg-[#f7f4fa] px-3"><span className="size-2 rounded-full bg-[#ff6b6b]" /><span className="size-2 rounded-full bg-[#ffd166]" /><span className="size-2 rounded-full bg-[#58d68d]" /><span className="ml-3 h-2 w-24 rounded-full bg-black/[.07]" /></div>
      <div className="grid grid-cols-[.7fr_1.3fr] gap-2 p-3">
        <div className="space-y-2 rounded-xl bg-[#f5f1fb] p-2"><span className="block h-3 w-12 rounded bg-gradient-to-r from-[#1778ff] to-[#8932f8]" /><span className="block h-2 w-full rounded bg-black/[.07]" /><span className="block h-2 w-3/4 rounded bg-black/[.06]" /><span className="block h-2 w-4/5 rounded bg-black/[.06]" /></div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-gradient-to-br from-[#eaf3ff] to-[#d9e8ff] p-2"><Code2 className="size-4 text-[#1778ff]" /><span className="mt-5 block text-[8px] font-semibold text-[#173b7a]">Web Platforms</span></div>
          <div className="rounded-xl bg-gradient-to-br from-[#f4eaff] to-[#ead7ff] p-2"><MonitorSmartphone className="size-4 text-[#8932f8]" /><span className="mt-5 block text-[8px] font-semibold text-[#542187]">Mobile Apps</span></div>
          <div className="col-span-2 flex items-center justify-between rounded-xl bg-[#faf8fc] p-2"><span><ShoppingBag className="size-4 text-[#a449ef]" /><small className="mt-1 block text-[8px] font-semibold text-text-primary">Digital Commerce</small></span><BarChart3 className="size-10 text-[#6e52d9]" /></div>
        </div>
      </div>
    </motion.div>
  );
}

function ContactVisual() {
  return (
    <div className="relative mx-auto h-[220px] w-full max-w-[310px]">
      <motion.div animate={{ rotateY: [-8, 7, -8], y: [0, -6, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-x-5 top-3 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-2"><span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-[#0ea5e9] to-[#8b5cf6] text-white"><MessageCircleMore className="size-4" /></span><span><strong className="block text-[10px] text-text-primary">Start a conversation</strong><small className="text-[8px] text-text-tertiary">Tell us about your project</small></span></div>
        <div className="mt-4 grid grid-cols-2 gap-2"><span className="h-8 rounded-lg border border-black/[.06] bg-black/[.025] px-2 py-2 text-[8px] text-text-tertiary">Your name</span><span className="h-8 rounded-lg border border-black/[.06] bg-black/[.025] px-2 py-2 text-[8px] text-text-tertiary">Work email</span></div>
        <div className="mt-2 h-12 rounded-lg border border-black/[.06] bg-black/[.025] px-2 py-2 text-[8px] text-text-tertiary">Project details...</div>
        <div className="mt-3 flex justify-end"><span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#1778ff] to-[#8932f8] px-3 py-1.5 text-[8px] font-semibold text-white">Send brief <Send className="size-3" /></span></div>
      </motion.div>
      <motion.div animate={{ x: [0, -5, 0], y: [0, 4, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute left-0 top-[42%] grid size-11 place-items-center rounded-xl border border-white bg-white text-[#1778ff] shadow-xl"><Mail className="size-5" /></motion.div>
      <motion.div animate={{ x: [0, 5, 0], y: [0, -4, 0] }} transition={{ duration: 5.5, repeat: Infinity }} className="absolute right-0 top-[20%] grid size-11 place-items-center rounded-xl border border-white bg-white text-[#8932f8] shadow-xl"><PhoneCall className="size-5" /></motion.div>
    </div>
  );
}

const visuals: Record<HeroVariant, ComponentType> = {
  about: AboutVisual,
  services: ServicesVisual,
  projects: ProjectsVisual,
  contact: ContactVisual,
};

export default function PremiumPageHero({ title, subtitle, variant }: PremiumPageHeroProps) {
  const Visual = visuals[variant];

  return (
    <div className="relative mx-auto mb-10 max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#110817] px-6 py-10 shadow-[0_28px_70px_rgba(35,12,53,.22)] md:px-10 md:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(168,85,247,.34),transparent_32%),radial-gradient(circle_at_10%_80%,rgba(23,120,255,.16),transparent_36%)]" />
      <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr]">
        <HeroCopy title={title} subtitle={subtitle} />
        <Visual />
      </div>
    </div>
  );
}
