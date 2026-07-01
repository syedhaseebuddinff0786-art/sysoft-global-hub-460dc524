import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/SiteChrome";

const categories = [
  { code: "01/ERP", name: "Enterprise Resource Planning", desc: "Manufacturing, construction, and multi-entity operations." },
  { code: "02/CRM", name: "Customer Relationship", desc: "Pipeline, sales automation, and support." },
  { code: "03/EDU", name: "School / College / University", desc: "Full campus management suites." },
  { code: "04/MED", name: "Hospital & Clinic", desc: "Patient records, appointments, pharmacy." },
  { code: "05/POS", name: "Point of Sale", desc: "Retail, restaurant, and multi-branch POS." },
  { code: "06/HRM", name: "HRMS & Payroll", desc: "Attendance, leave, payroll, and performance." },
  { code: "07/INV", name: "Inventory & Warehouse", desc: "Real-time stock and warehouse automation." },
  { code: "08/ACC", name: "Accounting & Billing", desc: "Ledger, invoicing, tax compliance." },
  { code: "09/PRO", name: "Project & Task", desc: "Team collaboration at scale." },
  { code: "10/COM", name: "E-commerce & Marketplace", desc: "Storefronts, auctions, subscriptions." },
  { code: "11/AI", name: "AI & Automation", desc: "Predictive analytics and workflow bots." },
  { code: "12/LOG", name: "Fleet & Logistics", desc: "Transport, courier, and delivery ops." },
  { code: "13/HOS", name: "Hotel & Restaurant", desc: "Bookings, food delivery, kitchen ops." },
  { code: "14/REA", name: "Real Estate & Property", desc: "Leasing, listings, and CRM." },
  { code: "15/GOV", name: "Government & NGO", desc: "Public sector platforms." },
  { code: "16/FIN", name: "Banking & Microfinance", desc: "Core banking, insurance, lending." },
  { code: "17/LMS", name: "Learning Management", desc: "Enterprise training and certification." },
  { code: "18/SEC", name: "Security & Compliance", desc: "Audits, monitoring, access control." },
  { code: "19/GYM", name: "Gym & Salon", desc: "Memberships and appointment ops." },
  { code: "20/AGR", name: "Agriculture", desc: "Farm, livestock, and supply chain." },
  { code: "21/LEG", name: "Legal Management", desc: "Case, client, and document workflows." },
  { code: "22/HEL", name: "Help Desk & Tickets", desc: "Support operations and SLA tracking." },
  { code: "23/BOO", name: "Booking & Appointment", desc: "Multi-service scheduling engine." },
  { code: "24/MOB", name: "Mobile Apps", desc: "Flutter & React Native suites." },
];

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — SySoft Systems" },
      { name: "description", content: "Explore 400+ ready-made business software products, SaaS platforms, and source-code solutions across every industry." },
      { property: "og:title", content: "Products — SySoft Systems" },
      { property: "og:description", content: "400+ enterprise software products across ERP, CRM, healthcare, education, POS, HRMS, AI, and more." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Product Catalog"
        title="400+ business software products, engineered to ship."
        description="Ready-made SaaS platforms, web and mobile applications, and full source-code products for organizations of every size."
      />
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border border border-border">
          {categories.map((c) => (
            <div key={c.code} className="bg-background p-6 hover:bg-accent/40 transition-colors group">
              <div className="font-mono-tech text-[10px] text-brand mb-4 uppercase tracking-wider">
                {c.code}
              </div>
              <h3 className="font-bold mb-1 group-hover:text-brand transition-colors">{c.name}</h3>
              <p className="text-xs text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            to="/pricing"
            className="inline-block px-8 py-4 bg-foreground text-background font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            See Pricing
          </Link>
        </div>
      </section>
    </PageShell>
  );
}