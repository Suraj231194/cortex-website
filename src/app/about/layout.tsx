import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "About Company";
const description = "Learn how Cortex Analytics engineers precise, scalable systems behind ambitious businesses.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: { title, description },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
