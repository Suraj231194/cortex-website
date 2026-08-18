export interface Project {
  slug: string;
  title: string;
  category: "erp" | "web" | "mobile" | "ecommerce";
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  duration: string;
  thumbnail: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  highlights?: { value: string; label: string }[];
  highlightsTitle?: string;
  capabilities?: string[];
  capabilitiesTitle?: string;
}

export const projects: Project[] = [
  {
    slug: "autoivd-erp",
    title: "AutoIVD — Pharmaceutical ERP System",
    category: "erp",
    description:
      "A custom end-to-end ERP system automating batch records (BMR/BPR), inventory, and compliance documentation — driving ₹10 Cr+ in sales growth.",
    problem:
      "The client had no digital presence and relied on manual, fragmented processes to run operations, manage manufacturing batch records, and handle inventory compliance — facing high off-the-shelf enterprise software costs.",
    solution:
      "Built a complete custom ERP application with role-based dashboards, dynamic BMR/BPR template management, real-time inventory tracking, and automated PDF compliance reports at a fraction of enterprise vendor costs.",
    technologies: ["PHP", "MySQL", "Tailwind CSS", "JavaScript", "Chart.js", "DOMPDF"],
    duration: "6 months",
    thumbnail: "/projects/erp-thumb.png",
    featured: true,
    highlightsTitle: "Solution Highlights",
    highlights: [
      { value: "₹10 Cr+", label: "Sales Growth Impact" },
      { value: "BMR/BPR", label: "Digital Batch Record Workflows" },
      { value: "Role-Based", label: "Department & User Access" },
      { value: "Audit-Ready", label: "Compliance Documentation" },
    ],
    capabilitiesTitle: "ERP Platform Capabilities",
    capabilities: [
      "Configurable BMR and BPR templates for pharmaceutical production workflows",
      "Role-based dashboards tailored to manufacturing, inventory, quality, and administration teams",
      "Batch-level material issue, consumption, reconciliation, and production record management",
      "Real-time inventory visibility across raw materials, packaging materials, and finished goods",
      "Structured audit trails for operational changes and compliance review",
      "Automated PDF generation for controlled batch and compliance documentation",
      "Centralized master data for products, materials, users, and manufacturing configurations",
      "Configurable interface theming for organization and user preferences",
    ],
  },
  {
    slug: "biogenix-platform",
    title: "Biogenix — Connected Digital Ecosystem & Commerce Platform",
    category: "ecommerce",
    description:
      "A complete digital ecosystem for Biogenix spanning diagnostics commerce, AutoIVD ERP operations, and Optimus CGM patient monitoring — driving ₹10 Cr+ in sales growth.",
    problem:
      "Biogenix operated with limited digital infrastructure, relying heavily on manual, fragmented processes for managing operations, diagnostics, documentation, and patient monitoring. The business needed a cost-effective way to establish a complete digital foundation without high enterprise software costs.",
    solution:
      "Worked closely with Biogenix to design and develop an interconnected digital ecosystem comprising three core products: AutoIVD ERP (batch records & compliance), Biogenix Website (diagnostics ecommerce & automation), and Optimus CGM App & Portal (patient monitoring & care team management).",
    technologies: ["Laravel 12", "PHP 8.2", "Tailwind CSS v4", "Vite", "MySQL", "Laravel Fortify", "DOMPDF"],
    duration: "4 months",
    thumbnail: "/projects/biogenix-thumb.png",
    featured: true,
    liveUrl: "https://biogenix.in/",
    highlights: [
      { value: "₹10 Cr+", label: "Sales Impact Contributed" },
      { value: "3 Products", label: "Connected Ecosystem" },
      { value: "500+", label: "Products & Instruments" },
      { value: "650+", label: "Distributor Partners" },
      { value: "10,000+", label: "Labs & Hospitals Served" },
      { value: "50M+", label: "Annual Test Kits Produced" },
    ],
    capabilities: [
      "Interconnected ecosystem spanning AutoIVD ERP, Biogenix Commerce, and Optimus CGM App",
      "Replaced paper-based processes with digital and automated operational workflows",
      "Centralized digital records making compliance and audit processes faster and organized",
      "Searchable diagnostics catalog spanning nine core product categories with GST-aware checkout",
      "Branded quotation PDF generation and Proforma Invoice requests for B2B/B2C procurement",
      "Nationwide authorized distributor search with regional support access",
      "Long-term technology partnership supporting multiple products across operational requirements",
      "English and Hindi platform navigation for broader customer accessibility",
    ],
  },
  {
    slug: "apparel-ecommerce",
    title: "Apparel E-Commerce — Contemporary Women’s Fashion Brand",
    category: "ecommerce",
    description:
      "A complete digital storefront for a contemporary women’s fashion brand featuring organized catalogues for suit sets, kurtas, dresses, co-ord sets, and tops with dedicated collection showcases.",
    problem:
      "The client, a contemporary women’s fashion brand focusing on fabric quality, craftsmanship, comfort, and sustainable fashion, expanded its product range and needed a stronger digital storefront to present its collections effectively and provide customers with a smooth online shopping experience.",
    solution:
      "Designed and developed a complete e-commerce website creating a digital storefront tailored to its fashion identity. Features an organized product catalogue, dedicated collection showcases (Reva, Sapna, New Arrivals, Bestsellers), seamless search and checkout, and integrated customer care policies.",
    technologies: ["Wix", "Wix E-Commerce", "Product Catalogue", "Online Store", "Responsive Web Design"],
    duration: "2 months",
    thumbnail: "/projects/apparel-thumb.png",
    featured: true,
    highlightsTitle: "E-Commerce Highlights",
    highlights: [
      { value: "Storefront", label: "Dedicated E-Commerce Store" },
      { value: "Collections", label: "Reva & Sapna Showcases" },
      { value: "Catalogue", label: "Organized Product Categories" },
      { value: "Policies", label: "Integrated Care & Returns" },
    ],
    capabilitiesTitle: "Storefront Capabilities",
    capabilities: [
      "Structured online storefront allowing customers to browse and purchase products directly",
      "Organized product catalogue covering suit sets, kurtas, dresses, co-ord sets, and tops",
      "Dedicated collection showcases for featured lines like Reva and Sapna, new arrivals, and bestsellers",
      "Integrated search, product browsing, and shopping experience on one platform",
      "Brand presentation reflecting simplicity, elegance, comfort, craftsmanship, and sustainable fashion",
      "Integrated essential e-commerce information including shipping, returns, exchange, and product-care policies",
    ],
  },
  {
    slug: "optimus-cgm-app",
    title: "Optimus CGM — Continuous Glucose Monitoring App",
    category: "mobile",
    description:
      "A Flutter application for continuous glucose monitoring with role-based workspaces for patients, doctors, and admins — featuring real-time glucose charts, AI coaching, sensor integration, and health tracking.",
    problem:
      "Healthcare providers needed a cross-platform mobile solution for continuous glucose monitoring that supports multiple user roles, real-time data visualization, and native CGM sensor SDK integration.",
    solution:
      "Built a comprehensive Flutter app with role-based login (Customer/Doctor/Admin), real-time glucose dashboards with interactive charts, meal impact logging, AI-style coaching summaries, native CGM SDK bridge, push notifications via Firebase, and offline-first caching.",
    technologies: ["Flutter", "Dart", "Firebase", "Laravel API", "Railway", "CGM SDK", "Provider"],
    duration: "5 months",
    thumbnail: "/projects/cgm-app-thumb.png",
    featured: true,
    highlightsTitle: "Application Highlights",
    highlights: [
      { value: "3 Roles", label: "Patient, Doctor & Admin Workspaces" },
      { value: "Real-Time", label: "Glucose Monitoring & Charts" },
      { value: "Offline-First", label: "Resilient Reading Access" },
      { value: "Cross-Platform", label: "Unified Mobile Experience" },
    ],
    capabilitiesTitle: "Mobile Platform Capabilities",
    capabilities: [
      "Role-based onboarding and workspaces for patients, doctors, and administrators",
      "Real-time glucose dashboards with interactive trend and range visualizations",
      "Meal, activity, and health-event logging for contextual glucose analysis",
      "AI-style coaching summaries that translate glucose patterns into clear guidance",
      "Native CGM sensor SDK bridge for device discovery, pairing, and reading synchronization",
      "Firebase-powered notifications for readings, reminders, and important events",
      "Offline-first caching so recent glucose information remains available without connectivity",
      "Secure API integration with the broader Optimus CGM healthcare platform",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
