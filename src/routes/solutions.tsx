import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/SiteChrome";

const solutions = [
  { code: "01", title: "Enterprise SaaS", desc: "Fully-hosted, multi-tenant platforms with 99.99% SLA, regional data residency, and 24/7 priority support." },
  { code: "02", title: "Source Code Licensing", desc: "Own the codebase. Ship your own branded product built on our battle-tested engineering foundations." },
  { code: "03", title: "Custom Development", desc: "Bespoke systems engineered end-to-end by our senior team — from discovery to deployment and beyond." },
  { code: "04", title: "System Integration", desc: "Connect legacy databases, third-party APIs, and existing tooling into a unified operational stack." },
  { code: "05", title: "Cloud Migration", desc: "Zero-downtime migrations to modern, scalable infrastructure with full observability." },
  { code: "06", title: "AI & Automation", desc: "Add predictive analytics, chatbots, and workflow automation to any business process." },
];

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — SySoft Systems" },
      { name: "description", content: "Enterprise SaaS, source-code licensing, custom development, and AI integration for organizations that need to ship." },
      { property: "og:title", content: "Solutions — SySoft Systems" },
      { property: "og:description", content: "Six ways to deploy enterprise software with SySoft Systems." },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Solutions"
        title="Six ways to deploy enterprise software with SySoft."
        description="From hosted SaaS to fully-owned source code — pick the engagement model that fits your organization."
      />
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {solutions.map((s) => (
            <div key={s.code} className="bg-background p-8">
              <div className="font-mono-tech text-brand text-xs mb-4">[ {s.code} ]</div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Link to="/products" className="px-8 py-4 bg-foreground text-background font-bold rounded-lg hover:opacity-90 transition-opacity">
            Browse Products
          </Link>
          <Link to="/pricing" className="px-8 py-4 bg-background border border-border font-bold rounded-lg hover:bg-accent transition-colors">
            View Pricing
          </Link>
        </div>
      </section>
    </PageShell>
  );
}