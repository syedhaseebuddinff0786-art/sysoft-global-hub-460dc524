import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/SiteChrome";

const services = [
  { code: "01/DEV", title: "Software Development", desc: "Full-cycle custom software engineering with senior teams." },
  { code: "02/SAAS", title: "SaaS Development", desc: "Multi-tenant, scalable SaaS platforms built to production quality." },
  { code: "03/AI", title: "AI Integration", desc: "Embed LLMs, RAG, and automation into existing systems." },
  { code: "04/ENT", title: "Enterprise Solutions", desc: "Large-scale platforms for regulated and mission-critical use." },
  { code: "05/CLD", title: "Cloud Migration", desc: "Zero-downtime moves to modern cloud infrastructure." },
  { code: "06/API", title: "API Development", desc: "REST and GraphQL APIs with rigorous documentation." },
  { code: "07/CON", title: "Software Consulting", desc: "Strategic architecture and technology advisory." },
  { code: "08/INT", title: "System Integration", desc: "Connect legacy systems with modern platforms." },
  { code: "09/SUP", title: "Technical Support", desc: "24/7 global support with priority tiers." },
  { code: "10/INS", title: "Installation Services", desc: "On-premise and cloud deployment engineering." },
  { code: "11/MIG", title: "Data Migration", desc: "Structured, validated migrations at any scale." },
  { code: "12/CUS", title: "Customization", desc: "Tailor SySoft products to your exact workflows." },
  { code: "13/MNT", title: "Maintenance", desc: "Ongoing patching, updates, and health monitoring." },
  { code: "14/PRF", title: "Performance Tuning", desc: "Optimize latency, throughput, and cost." },
  { code: "15/TRN", title: "Training", desc: "Enablement programs for admins, devs, and end users." },
  { code: "16/SEC", title: "Security Audits", desc: "Pen tests, code reviews, and compliance readiness." },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — SySoft Systems" },
      { name: "description", content: "Custom development, SaaS engineering, AI integration, cloud migration, and 24/7 support from SySoft Systems." },
      { property: "og:title", content: "Services — SySoft Systems" },
      { property: "og:description", content: "Sixteen professional services covering the full software lifecycle." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Services"
        title="Professional services across the entire software lifecycle."
        description="From first architecture whiteboard to 24/7 production support — one team, sixteen services."
      />
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {services.map((s) => (
            <div key={s.code} className="bg-background p-6 hover:bg-accent/40 transition-colors group">
              <div className="font-mono-tech text-[10px] text-brand mb-4 uppercase tracking-wider">
                {s.code}
              </div>
              <h3 className="font-bold mb-2 group-hover:text-brand transition-colors">{s.title}</h3>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}