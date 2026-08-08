export interface Review {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar?: string;
}

export const reviews: Review[] = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Chief Medical Officer",
    company: "Optimus Health",
    quote:
      "Cortex Analytics delivered a CGM platform that exceeded our expectations. The real-time glucose monitoring, AI coaching, and seamless sensor integration have transformed how we serve our patients.",
    rating: 5,
  },
  {
    name: "Rajesh Kapoor",
    role: "Managing Director",
    company: "AutoIVD Pharmaceuticals",
    quote:
      "The ERP system they built streamlined our entire manufacturing workflow. Batch records, inventory, compliance — everything in one place. Operations are now fully digital and automated.",
    rating: 5,
  },
  {
    name: "Atharv",
    role: "Leadership & Strategy",
    company: "Biogenix Diagnostics",
    quote:
      "Cortex Analytics became our long-term partner, building our entire digital ecosystem from scratch across AutoIVD ERP, Biogenix, and Optimus CGM — driving ₹10 Cr+ in sales growth.",
    rating: 5,
  },
  {
    name: "Operations Director",
    role: "Compliance & Operations",
    company: "Label SR Packaging",
    quote:
      "They designed a custom digital solution for our labeling and compliance workflows at a fraction of enterprise pricing — eliminating paper processes and making audits faster and stress-free.",
    rating: 5,
  },
];
