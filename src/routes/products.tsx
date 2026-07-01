import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell, PageHeader } from "@/components/site/SiteChrome";
import { CATEGORIES, INDUSTRIES, TECHNOLOGIES } from "@/data/catalog";

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
  const [query, setQuery] = useState("");
  const [industry, setIndustry] = useState<string>("All");
  const [tech, setTech] = useState<string>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CATEGORIES.filter((c) => {
      if (industry !== "All" && !c.industries.includes(industry)) return false;
      if (tech !== "All" && !c.technologies.includes(tech)) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.tagline.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.modules.some((m) => m.toLowerCase().includes(q))
      );
    });
  }, [query, industry, tech]);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Product Catalog"
        title="400+ business software products, engineered to ship."
        description="Ready-made SaaS platforms, web and mobile applications, and full source-code products for organizations of every size."
      />
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-10 grid gap-4 md:grid-cols-[1fr_auto_auto] items-stretch">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, modules, use cases…"
            className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm focus:outline-none focus:border-brand"
            aria-label="Search products"
          />
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="px-4 py-3 bg-background border border-border rounded-md text-sm font-mono-tech uppercase tracking-wider focus:outline-none focus:border-brand"
            aria-label="Filter by industry"
          >
            <option value="All">All Industries</option>
            {INDUSTRIES.map((i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
          <select
            value={tech}
            onChange={(e) => setTech(e.target.value)}
            className="px-4 py-3 bg-background border border-border rounded-md text-sm font-mono-tech uppercase tracking-wider focus:outline-none focus:border-brand"
            aria-label="Filter by technology"
          >
            <option value="All">All Technologies</option>
            {TECHNOLOGIES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="mb-6 flex items-center justify-between text-xs font-mono-tech uppercase tracking-widest text-muted-foreground">
          <span>[ {String(filtered.length).padStart(2, "0")} / {String(CATEGORIES.length).padStart(2, "0")} results ]</span>
          {(query || industry !== "All" || tech !== "All") && (
            <button
              onClick={() => { setQuery(""); setIndustry("All"); setTech("All"); }}
              className="text-brand hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border border border-border">
          {filtered.map((c) => (
            <Link
              key={c.code}
              to="/products/$category"
              params={{ category: c.slug }}
              className="bg-background p-6 hover:bg-accent/40 transition-colors group block"
            >
              <div className="font-mono-tech text-[10px] text-brand mb-4 uppercase tracking-wider">
                {c.code}
              </div>
              <h3 className="font-bold mb-1 group-hover:text-brand transition-colors">{c.name}</h3>
              <p className="text-xs text-muted-foreground">{c.tagline}</p>
            </Link>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full bg-background p-12 text-center text-sm text-muted-foreground">
              No products match those filters.
            </div>
          )}
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