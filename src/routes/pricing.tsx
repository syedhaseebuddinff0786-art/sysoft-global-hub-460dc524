import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/SiteChrome";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    sub: "per month",
    desc: "Free tier for startups and small teams exploring the platform.",
    features: ["Community support", "1 workspace", "Public documentation", "Basic modules"],
    cta: "Start free",
  },
  {
    name: "Business",
    price: "$249",
    sub: "per month",
    desc: "For growing organizations running production workloads.",
    features: ["Priority support", "Unlimited workspaces", "99.9% SLA", "Custom integrations", "Advanced modules"],
    cta: "Start trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    sub: "annual contract",
    desc: "Source code, dedicated engineering, and global 24/7 support.",
    features: ["Source code license", "Named engineer", "99.99% SLA", "Regional data residency", "White-glove onboarding"],
    cta: "Contact sales",
  },
];

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — SySoft Systems" },
      { name: "description", content: "Simple, transparent pricing. Start free, scale to Business, or license source code with Enterprise." },
      { property: "og:title", content: "Pricing — SySoft Systems" },
      { property: "og:description", content: "Three tiers: Starter, Business, and Enterprise with source-code licensing." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Pricing"
        title="Simple, transparent pricing."
        description="Start free. Scale to enterprise. Own your source code when you're ready."
      />
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`p-8 rounded-xl border ${t.featured ? "border-brand bg-brand/5 shadow-lg" : "border-border bg-background"} flex flex-col`}
            >
              <div className="font-mono-tech text-xs uppercase tracking-widest text-brand mb-4">{t.name}</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-4xl font-extrabold tracking-tight">{t.price}</span>
                <span className="text-muted-foreground text-sm">{t.sub}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">{t.desc}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="text-sm flex items-center gap-2">
                    <span className="text-brand font-mono-tech">›</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/solutions"
                className={`text-center px-5 py-3 rounded-lg font-semibold text-sm transition-all ${
                  t.featured ? "bg-brand text-primary-foreground hover:opacity-90" : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}