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

export type Country = { code: string; name: string; flag: string };

export const COUNTRIES: Country[] = [
  { code: "AF", name: "Afghanistan", flag: "🇦🇫" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "EG", name: "Egypt", flag: "🇪🇬" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "IQ", name: "Iraq", flag: "🇮🇶" },
  { code: "JO", name: "Jordan", flag: "🇯🇴" },
  { code: "PS", name: "Palestine", flag: "🇵🇸" },
  { code: "ES", name: "Spain", flag: "🇪🇸" },
  { code: "SY", name: "Syria", flag: "🇸🇾" },
  { code: "TR", name: "Turkey", flag: "🇹🇷" },
  { code: "AE", name: "UAE", flag: "🇦🇪" },
  { code: "US", name: "United States", flag: "🇺🇸" },
];

export type FlagshipProduct = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  status: "Live" | "Beta" | "Coming Soon";
  deployment: "SaaS" | "Source Code" | "SaaS · Source Code";
  description: string;
  industries: string[];
  features: string[];
};

export const FLAGSHIP_PRODUCTS: FlagshipProduct[] = [
  { slug: "cartnex", name: "CartNex", category: "E-commerce", tagline: "Headless commerce & marketplaces.", status: "Live", deployment: "SaaS · Source Code",
    description: "Headless, multi-vendor commerce platform with PWA storefronts, subscriptions, and marketplace payouts. Ships as SaaS or licensed source.",
    industries: ["E-commerce", "Retail", "Startups"], features: ["Multi-vendor marketplace", "Headless storefront APIs", "Subscriptions & recurring billing", "PWA & mobile apps"] },
  { slug: "medicore-erp", name: "MediCore ERP", category: "Healthcare", tagline: "Hospital & clinic operations suite.", status: "Live", deployment: "SaaS · Source Code",
    description: "End-to-end hospital ERP covering EMR, OPD/IPD, pharmacy, laboratory, radiology, insurance, and telemedicine.",
    industries: ["Healthcare", "Insurance"], features: ["EMR & clinical notes", "OPD / IPD workflow", "Pharmacy & lab", "Insurance & TPA billing"] },
  { slug: "dinehub", name: "DineHub", category: "Restaurants", tagline: "Restaurant POS & kitchen workflow.", status: "Live", deployment: "SaaS",
    description: "Full-service restaurant POS with table plans, kitchen display, promotions, and multi-outlet consolidation.",
    industries: ["Restaurants", "Hospitality"], features: ["Table & floor plan", "KDS", "Loyalty & promos", "Multi-outlet reports"] },
  { slug: "menusnap", name: "MenuSnap", category: "Restaurants", tagline: "Digital menus & instant ordering.", status: "Live", deployment: "SaaS",
    description: "QR-based digital menu and instant-ordering system for dine-in, takeaway, and delivery.",
    industries: ["Restaurants", "Hospitality"], features: ["QR menus", "Contactless ordering", "Payments", "Kitchen routing"] },
  { slug: "edunova", name: "EduNova", category: "Education", tagline: "Campus, LMS & examination cloud.", status: "Live", deployment: "SaaS · Source Code",
    description: "Complete campus cloud — admissions, LMS, exams, fees, transport, hostel, and parent portals.",
    industries: ["Education", "Government"], features: ["Admissions", "LMS", "Examinations", "Fees & transport"] },
  { slug: "orderlyx", name: "OrderlyX", category: "Logistics", tagline: "Order & fulfillment orchestration.", status: "Live", deployment: "SaaS",
    description: "Order orchestration and fulfillment platform with warehouse routing, POD, and courier integrations.",
    industries: ["Logistics", "E-commerce", "Retail"], features: ["OMS", "Warehouse routing", "Courier hub", "Proof of delivery"] },
  { slug: "examara", name: "Examara", category: "Education", tagline: "Online exams & proctoring.", status: "Live", deployment: "SaaS",
    description: "Online examination and remote-proctoring platform with question banks, secure browser, and analytics.",
    industries: ["Education", "Large Enterprise"], features: ["Question banks", "Remote proctoring", "Secure browser", "Analytics"] },
  { slug: "scholaro", name: "Scholaro", category: "Education", tagline: "Student information system.", status: "Live", deployment: "SaaS · Source Code",
    description: "Student information system for K-12 and higher-ed, from enrollment to alumni.",
    industries: ["Education"], features: ["Enrollment", "Academics", "Attendance", "Alumni"] },
  { slug: "foodorax", name: "FoodoraX", category: "Food Delivery", tagline: "Multi-vendor food delivery stack.", status: "Live", deployment: "SaaS · Source Code",
    description: "Multi-vendor food delivery marketplace with customer, vendor, and driver apps.",
    industries: ["Restaurants", "E-commerce", "Startups"], features: ["Vendor app", "Driver app", "Live tracking", "Payouts"] },
  { slug: "shopwave", name: "ShopWave", category: "Retail", tagline: "Retail chain & franchise ops.", status: "Live", deployment: "SaaS · Source Code",
    description: "Chain-retail operations with franchise consolidation, inventory sync, and financial reporting.",
    industries: ["Retail", "E-commerce"], features: ["Chain reporting", "Franchise ops", "Inventory sync", "Loyalty"] },
  { slug: "gateflow", name: "GateFlow", category: "Access Control", tagline: "Entry, visitor & gate automation.", status: "Live", deployment: "SaaS",
    description: "Entry, visitor, and gate-automation system with ANPR, biometrics, and audit trails.",
    industries: ["Manufacturing", "Real Estate", "Government"], features: ["Visitor management", "ANPR / biometrics", "Audit trail", "Multi-site"] },
  { slug: "store-flow", name: "Store Flow", category: "Retail", tagline: "Store operations & inventory.", status: "Live", deployment: "SaaS",
    description: "Single-store operations, inventory, and daily-close workflow for independent retailers.",
    industries: ["Retail", "Small Business"], features: ["Daily close", "Inventory", "Cash & shift", "Receipts"] },
  { slug: "gatesync", name: "GateSync", category: "Access Control", tagline: "Multi-site access synchronization.", status: "Beta", deployment: "SaaS",
    description: "Multi-site access synchronization with centralized policies, offline fallback, and SSO.",
    industries: ["Large Enterprise", "Manufacturing", "Government"], features: ["Central policy", "Offline fallback", "SSO", "Federated sites"] },
  { slug: "tiffin-ox", name: "Tiffin ox", category: "Food Delivery", tagline: "Subscription tiffin & meal plans.", status: "Live", deployment: "SaaS",
    description: "Tiffin and meal-plan subscription platform with route-based delivery and pause/resume.",
    industries: ["Restaurants", "Small Business"], features: ["Meal plans", "Route delivery", "Pause / resume", "Customer app"] },
  { slug: "hostel-flow", name: "Hostel Flow", category: "Hospitality", tagline: "Hostel management & bookings.", status: "Live", deployment: "SaaS",
    description: "Hostel management and booking system with room allocation, mess, and fee cycles.",
    industries: ["Hospitality", "Education"], features: ["Bookings", "Room allocation", "Mess", "Fees"] },
  { slug: "vendrix-pos", name: "Vendrix POS", category: "Retail", tagline: "Multi-outlet point of sale.", status: "Live", deployment: "SaaS · Source Code",
    description: "Multi-outlet POS with offline sync, barcode, KDS, and consolidated reporting.",
    industries: ["Retail", "Restaurants"], features: ["Offline sync", "Barcode / KDS", "Multi-outlet", "Reports"] },
  { slug: "mealforge", name: "MealForge", category: "Restaurants", tagline: "Cloud kitchen production suite.", status: "Beta", deployment: "SaaS",
    description: "Cloud-kitchen production suite for multi-brand kitchens with recipe, batch, and delivery routing.",
    industries: ["Restaurants", "Logistics"], features: ["Recipe engine", "Batch production", "Multi-brand", "Delivery routing"] },
];

export function getFlagshipBySlug(slug: string): FlagshipProduct | undefined {
  return FLAGSHIP_PRODUCTS.find((p) => p.slug === slug);
}

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