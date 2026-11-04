"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { motion } from "motion/react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import MagneticButton from "@/components/effects/MagneticButton";
import CortexMark from "@/components/brand/CortexMark";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const footerLinks = {
  company: [
    { href: "/about/", label: "About Us" },
    { href: "/projects/", label: "Projects" },
    { href: "/contact/", label: "Contact" },
  ],
  services: [
    { href: "/services/", label: "AI Development" },
    { href: "/services/", label: "ERP Solutions" },
    { href: "/services/", label: "Flutter Apps" },
    { href: "/services/", label: "Web Applications" },
  ],
};

const socialLinks = [
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/company/cortex-analytics-solutions/",
    label: "LinkedIn",
    external: true,
  },
  {
    icon: Mail,
    href: "mailto:contactcortexanalytics@gmail.com",
    label: "Email",
    external: false,
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/916388673136",
    label: "WhatsApp",
    external: true,
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/cortexanalytics?mdxt=amhmM3RsMDl0OHFm",
    label: "Instagram",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-4 overflow-hidden rounded-t-[3rem] border-t border-white/10 bg-[#0b0610] text-white [&_.text-text-primary]:text-white [&_.text-text-secondary]:text-white/65 [&_.text-text-tertiary]:text-white/45">
      {/* Aurora gradient divider at the top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] blur-sm bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />

      <div className="section-container pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2.5">
              <span className="rounded-lg bg-white p-1"><CortexMark size={32} /></span>
              <div>
                <span className="text-base font-bold text-text-primary">Cortex </span>
                <span className="text-base font-bold text-gradient">Analytics</span>
              </div>
            </Link>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <MagneticButton key={social.label} strength={6}>
                  <a
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    className="block rounded-lg bg-black/[.035] p-2 text-text-tertiary transition-all duration-300 hover:bg-black/5 hover:text-brand-primary-light hover:shadow-[0_0_20px_rgba(137,50,248,0.15)]"
                    aria-label={social.label}
                  >
                    <social.icon size={15} />
                  </a>
                </MagneticButton>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-primary">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block text-xs text-text-secondary transition-all duration-200 hover:translate-x-1 hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-primary">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block text-xs text-text-secondary transition-all duration-200 hover:translate-x-1 hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar with gradient line */}
        <div className="relative mt-8 pb-5 pt-5">
          <div className="absolute top-0 left-0 right-0 section-divider" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-tertiary">
              © {new Date().getFullYear()} Cortex Analytics. All rights reserved.
            </p>
            <p className="text-xs text-text-tertiary">
              Insight. Innovation. Impact.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
