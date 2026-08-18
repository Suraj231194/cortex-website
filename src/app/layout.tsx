import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MouseGlow from "@/components/effects/MouseGlow";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cortex Analytics — Engineering Ambitious Business Systems",
    template: "%s | Cortex Analytics",
  },
  description:
    "Cortex Analytics engineers precise, scalable software systems for ambitious businesses across healthcare, manufacturing, commerce, and beyond.",
  keywords: [
    "AI Development",
    "ERP Solutions",
    "Flutter Apps",
    "Web Development",
    "Software Consulting",
    "Cortex Analytics",
  ],
  authors: [{ name: "Cortex Analytics" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Cortex Analytics",
    title: "Cortex Analytics — Engineering Ambitious Business Systems",
    description:
      "Precise, scalable software systems engineered for ambitious businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cortex Analytics — Engineering Ambitious Business Systems",
    description:
      "Precise, scalable software systems engineered for ambitious businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo-mark.png",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-text-primary font-sans">
        <MouseGlow />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
