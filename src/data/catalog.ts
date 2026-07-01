export type ProductCategory = {
  slug: string;
  code: string;
  name: string;
  tagline: string;
  description: string;
  industries: string[];
  technologies: string[];
  modules: string[];
};

export const INDUSTRIES = [
  "Healthcare", "Education", "Retail", "Finance", "Manufacturing",
  "Construction", "Hospitality", "Government", "Transportation", "Agriculture",
  "Logistics", "E-commerce", "Technology", "Real Estate", "Restaurants",
  "NGOs", "Legal", "Insurance", "Energy", "Telecommunications",
  "Startups", "Small Business", "Medium Business", "Large Enterprise",
] as const;

export const TECHNOLOGIES = [
  "Laravel", "React", "Next.js", "Node.js", "Flutter", "React Native",
  "Python", "Django", "PostgreSQL", "MySQL", "MongoDB", "Redis",
  "Docker", "Kubernetes", "AWS", "Azure", "GCP",
] as const;

export const CATEGORIES: ProductCategory[] = [
  {
    slug: "erp",
    code: "01/ERP",
    name: "Enterprise Resource Planning",
    tagline: "Unified operations for manufacturing, construction, and multi-entity groups.",
    description:
      "Multi-company, multi-currency ERP suite covering finance, procurement, production, inventory, and HR — deployable as SaaS or licensed source code.",
    industries: ["Manufacturing", "Construction", "Large Enterprise", "Logistics"],
    technologies: ["Laravel", "React", "PostgreSQL", "Docker"],
    modules: ["General Ledger", "Procurement", "Production", "Inventory", "Payroll", "BI Dashboards"],
  },
  {
    slug: "crm",
    code: "02/CRM",
    name: "Customer Relationship Management",
    tagline: "Pipeline, sales automation, and customer support in one workspace.",
    description:
      "Lead capture, deal pipelines, marketing automation, ticketing, and omnichannel support — with mobile apps and an open API.",
    industries: ["Technology", "Finance", "Real Estate", "Small Business", "Medium Business"],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    modules: ["Leads", "Pipelines", "Email Sequences", "Tickets", "Reports"],
  },
  {
    slug: "edu",
    code: "03/EDU",
    name: "School / College / University",
    tagline: "Full campus management from admissions to alumni.",
    description:
      "Admissions, LMS, examination, fees, transport, hostel, and parent portals for K-12, higher-ed, and vocational institutions.",
    industries: ["Education", "Government"],
    technologies: ["Laravel", "React", "MySQL", "Flutter"],
    modules: ["Admissions", "Examinations", "Fees", "LMS", "Transport", "Parent Portal"],
  },
  {
    slug: "med",
    code: "04/MED",
    name: "Hospital & Clinic Management",
    tagline: "Patient-first HMS with EMR, pharmacy, and lab integration.",
    description:
      "Appointments, EMR, IPD/OPD, pharmacy, laboratory, radiology, billing, insurance, and telemedicine.",
    industries: ["Healthcare", "Insurance", "Government"],
    technologies: ["Laravel", "React", "PostgreSQL", "Flutter"],
    modules: ["Appointments", "EMR", "Pharmacy", "Laboratory", "Billing", "Telehealth"],
  },
  {
    slug: "pos",
    code: "05/POS",
    name: "Point of Sale",
    tagline: "Multi-branch retail and restaurant POS with offline mode.",
    description:
      "Cloud POS with barcode, kitchen display, table management, promotions, loyalty, and multi-outlet consolidation.",
    industries: ["Retail", "Restaurants", "Hospitality", "E-commerce"],
    technologies: ["React", "Node.js", "MongoDB", "Flutter"],
    modules: ["Sales", "KDS", "Inventory Sync", "Loyalty", "Promotions"],
  },
  {
    slug: "hrm",
    code: "06/HRM",
    name: "HRMS & Payroll",
    tagline: "Attendance, leave, payroll, and performance for growing teams.",
    description:
      "Biometric attendance, geo-fenced check-ins, leave workflows, statutory payroll, appraisals, and self-service portals.",
    industries: ["Small Business", "Medium Business", "Large Enterprise", "Manufacturing"],
    technologies: ["Laravel", "React", "MySQL", "Flutter"],
    modules: ["Attendance", "Leave", "Payroll", "Appraisals", "Recruitment"],
  },
  {
    slug: "inv",
    code: "07/INV",
    name: "Inventory & Warehouse",
    tagline: "Real-time stock and warehouse automation.",
    description:
      "Multi-warehouse inventory, batch/serial tracking, barcode/RFID, cycle counts, and demand forecasting.",
    industries: ["Retail", "Manufacturing", "Logistics", "E-commerce"],
    technologies: ["Node.js", "PostgreSQL", "React"],
    modules: ["Stock", "Transfers", "Barcoding", "Forecasting"],
  },
  {
    slug: "acc",
    code: "08/ACC",
    name: "Accounting & Billing",
    tagline: "Ledger, invoicing, and tax compliance for every jurisdiction.",
    description:
      "GL, AR/AP, invoicing, e-invoicing, GST/VAT, banking, and consolidated reporting.",
    industries: ["Finance", "Small Business", "Medium Business", "Large Enterprise"],
    technologies: ["Laravel", "React", "PostgreSQL"],
    modules: ["Invoicing", "GL", "Tax", "Bank Recon", "Reports"],
  },
  {
    slug: "pro",
    code: "09/PRO",
    name: "Project & Task Management",
    tagline: "Team collaboration at scale — Gantt, Kanban, and workload views.",
    description:
      "Projects, sprints, timesheets, resource planning, budgets, and client portals.",
    industries: ["Technology", "Construction", "Startups"],
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    modules: ["Projects", "Tasks", "Timesheets", "Budgets"],
  },
  {
    slug: "com",
    code: "10/COM",
    name: "E-commerce & Marketplace",
    tagline: "Storefronts, marketplaces, auctions, and subscriptions.",
    description:
      "Headless commerce, multi-vendor marketplaces, subscription billing, and PWA storefronts.",
    industries: ["E-commerce", "Retail", "Startups"],
    technologies: ["Next.js", "Node.js", "MongoDB", "Redis"],
    modules: ["Catalog", "Checkout", "Vendors", "Subscriptions"],
  },
  {
    slug: "ai",
    code: "11/AI",
    name: "AI & Automation",
    tagline: "Predictive analytics and workflow bots for every business process.",
    description:
      "LLM chatbots, document intelligence, RPA, forecasting, and vision-based QA.",
    industries: ["Technology", "Finance", "Healthcare", "Large Enterprise"],
    technologies: ["Python", "Django", "React", "PostgreSQL"],
    modules: ["Chatbots", "OCR", "Forecasting", "RPA"],
  },
  {
    slug: "log",
    code: "12/LOG",
    name: "Fleet & Logistics",
    tagline: "Transport, courier, and last-mile delivery operations.",
    description:
      "Fleet telematics, route optimization, dispatch, POD, and driver mobile apps.",
    industries: ["Logistics", "Transportation", "E-commerce"],
    technologies: ["Node.js", "React", "Flutter", "PostgreSQL"],
    modules: ["Dispatch", "Tracking", "Routing", "Driver App"],
  },
  {
    slug: "hos",
    code: "13/HOS",
    name: "Hotel & Restaurant",
    tagline: "Bookings, PMS, food delivery, and kitchen operations.",
    description:
      "PMS, channel manager, POS, KDS, table reservations, and guest apps.",
    industries: ["Hospitality", "Restaurants"],
    technologies: ["Laravel", "React", "Flutter"],
    modules: ["Reservations", "PMS", "Housekeeping", "POS"],
  },
  {
    slug: "rea",
    code: "14/REA",
    name: "Real Estate & Property",
    tagline: "Leasing, listings, tenant CRM, and facility management.",
    description:
      "Listings, virtual tours, lease contracts, rent collection, and facility ops.",
    industries: ["Real Estate", "Construction"],
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    modules: ["Listings", "Leases", "Tenants", "Maintenance"],
  },
  {
    slug: "gov",
    code: "15/GOV",
    name: "Government & NGO",
    tagline: "Citizen services, grants, and public sector workflows.",
    description:
      "Citizen portals, e-services, grants, case management, and secure identity.",
    industries: ["Government", "NGOs"],
    technologies: ["Laravel", "React", "PostgreSQL", "Docker"],
    modules: ["Citizen Portal", "Cases", "Grants", "Identity"],
  },
  {
    slug: "fin",
    code: "16/FIN",
    name: "Banking & Microfinance",
    tagline: "Core banking, lending, and insurance platforms.",
    description:
      "Core banking, savings, loans, KYC/AML, insurance, and mobile wallets.",
    industries: ["Finance", "Insurance"],
    technologies: ["Laravel", "Node.js", "PostgreSQL", "Kubernetes"],
    modules: ["Core", "Loans", "KYC", "Wallets"],
  },
  {
    slug: "lms",
    code: "17/LMS",
    name: "Learning Management",
    tagline: "Enterprise training, courses, and certification.",
    description:
      "SCORM/xAPI, live classes, assessments, gamification, and certificate issuance.",
    industries: ["Education", "Large Enterprise", "Technology"],
    technologies: ["Next.js", "Node.js", "MongoDB"],
    modules: ["Courses", "Live Classes", "Assessments", "Certificates"],
  },
  {
    slug: "sec",
    code: "18/SEC",
    name: "Security & Compliance",
    tagline: "Audits, monitoring, and access control at enterprise scale.",
    description:
      "SOC-style monitoring, IAM, audit trails, and compliance reporting.",
    industries: ["Finance", "Government", "Large Enterprise", "Technology"],
    technologies: ["Python", "Node.js", "PostgreSQL", "Kubernetes"],
    modules: ["IAM", "Audits", "Alerts", "Reports"],
  },
  {
    slug: "gym",
    code: "19/GYM",
    name: "Gym & Salon",
    tagline: "Memberships, classes, and appointment operations.",
    description:
      "Memberships, classes, staff scheduling, payments, and mobile check-in.",
    industries: ["Hospitality", "Small Business"],
    technologies: ["Laravel", "React", "Flutter"],
    modules: ["Members", "Classes", "Bookings", "Billing"],
  },
  {
    slug: "agr",
    code: "20/AGR",
    name: "Agriculture",
    tagline: "Farm, livestock, and supply chain intelligence.",
    description:
      "Field management, livestock, IoT sensors, and produce traceability.",
    industries: ["Agriculture"],
    technologies: ["Python", "React", "PostgreSQL"],
    modules: ["Farms", "Livestock", "IoT", "Traceability"],
  },
  {
    slug: "leg",
    code: "21/LEG",
    name: "Legal Management",
    tagline: "Case, client, and document workflows for law firms.",
    description:
      "Case files, court calendars, time billing, and document automation.",
    industries: ["Legal"],
    technologies: ["Laravel", "React", "PostgreSQL"],
    modules: ["Cases", "Calendar", "Billing", "Documents"],
  },
  {
    slug: "hel",
    code: "22/HEL",
    name: "Help Desk & Ticketing",
    tagline: "Support operations and SLA tracking.",
    description:
      "Omnichannel ticketing, knowledge base, SLA, and CSAT reporting.",
    industries: ["Technology", "Telecommunications", "Large Enterprise"],
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    modules: ["Tickets", "KB", "SLA", "CSAT"],
  },
  {
    slug: "boo",
    code: "23/BOO",
    name: "Booking & Appointment",
    tagline: "Multi-service scheduling engine for any vertical.",
    description:
      "Resource calendars, online booking, deposits, and reminders.",
    industries: ["Healthcare", "Hospitality", "Small Business"],
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    modules: ["Calendars", "Bookings", "Deposits", "Reminders"],
  },
  {
    slug: "mob",
    code: "24/MOB",
    name: "Mobile Apps",
    tagline: "Cross-platform apps built on Flutter and React Native.",
    description:
      "Companion apps, delivery, driver, field-service, and consumer apps.",
    industries: ["Technology", "Startups", "E-commerce"],
    technologies: ["Flutter", "React Native"],
    modules: ["iOS", "Android", "Push", "Offline Sync"],
  },
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}