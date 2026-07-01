import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/SiteChrome";

const industries = [
  "Healthcare", "Education", "Retail", "Finance", "Manufacturing",
  "Construction", "Hospitality", "Government", "Transportation", "Agriculture",
  "Logistics", "E-commerce", "Technology", "Real Estate", "Restaurants",
  "NGOs", "Legal", "Insurance", "Energy", "Telecommunications",
  "Startups", "Small Business", "Medium Business", "Large Enterprise",
];

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — SySoft Systems" },
      { name: "description", content: "Purpose-built software for healthcare, education, retail, finance, manufacturing, government, and 15+ other industries." },
      { property: "og:title", content: "Industries — SySoft Systems" },
      { property: "og:description", content: "SySoft ships specialized software calibrated to every industry vertical." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Industries"
        title="Purpose-built for every sector."
        description="Whether you run a hospital, a school district, a logistics fleet, or a government agency — SySoft ships a stack calibrated to your workflows."
      />
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-border border border-border">
          {industries.map((i, idx) => (
            <div key={i} className="bg-background p-6 hover:bg-accent/40 transition-colors">
              <div className="font-mono-tech text-[10px] text-brand mb-3 uppercase tracking-wider">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="text-sm font-bold">{i}</div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Link to="/products" className="px-8 py-4 bg-foreground text-background font-bold rounded-lg hover:opacity-90 transition-opacity">
            Browse Products
          </Link>
          <Link to="/solutions" className="px-8 py-4 bg-background border border-border font-bold rounded-lg hover:bg-accent transition-colors">
            View Solutions
          </Link>
        </div>
      </section>
    </PageShell>
  );
}