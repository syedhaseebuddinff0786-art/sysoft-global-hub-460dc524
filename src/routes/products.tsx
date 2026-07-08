import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell, PageHeader } from "@/components/site/SiteChrome";
import { CATEGORIES, FLAGSHIP_PRODUCTS, INDUSTRIES, TECHNOLOGIES } from "@/data/catalog";
import { LeadDialog } from "@/components/site/LeadDialog";

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
  const [status, setStatus] = useState<string>("All");
  const [deployment, setDeployment] = useState<string>("All");
  const [tab, setTab] = useState<"all" | "flagship" | "catalog">("all");

  const filteredCategories = useMemo(() => {
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

  const filteredFlagship = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FLAGSHIP_PRODUCTS.filter((p) => {
      if (industry !== "All" && !p.industries.includes(industry)) return false;
      if (status !== "All" && p.status !== status) return false;
      if (deployment !== "All" && !p.deployment.includes(deployment)) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.features.some((f) => f.toLowerCase().includes(q))
      );
    });
  }, [query, industry, status, deployment]);

  const showFlagship = tab !== "catalog";
  const showCatalog = tab !== "flagship";
  const totalCount = (showFlagship ? filteredFlagship.length : 0) + (showCatalog ? filteredCategories.length : 0);
  const grandTotal = FLAGSHIP_PRODUCTS.length + CATEGORIES.length;
  const hasFilters = query || industry !== "All" || tech !== "All" || status !== "All" || deployment !== "All";

  const statusStyles: Record<string, string> = {
    Live: "text-emerald-400 border-emerald-400/40 bg-emerald-400/10",
    Beta: "text-amber-300 border-amber-300/40 bg-amber-300/10",
    "Coming Soon": "text-brand border-brand/40 bg-brand/10",
  };

  return (
    <PageShell>
      <PageHeader
        eyebrow="Product Catalog"
        title="400+ business software products, engineered to ship."
        description="Ready-made SaaS platforms, web and mobile applications, and full source-code products for organizations of every size."
      />
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-6 inline-flex rounded-full border border-border bg-card/60 backdrop-blur p-1 text-xs font-mono-tech uppercase tracking-widest">
          {(["all", "flagship", "catalog"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-1.5 rounded-full transition-colors ${tab === t ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
            >
              {t === "all" ? "All" : t === "flagship" ? "Flagship" : "Category Templates"}
            </button>
          ))}
        </div>
        <div className="mb-6 grid gap-3 md:grid-cols-[1fr_auto_auto_auto_auto] items-stretch">
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
            aria-label="Filter by technology (category templates)"
          >
            <option value="All">All Technologies</option>
            {TECHNOLOGIES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="px-4 py-3 bg-background border border-border rounded-md text-sm font-mono-tech uppercase tracking-wider focus:outline-none focus:border-brand"
            aria-label="Filter by status"
          >
            <option value="All">All Statuses</option>
            <option value="Live">Live</option>
            <option value="Beta">Beta</option>
            <option value="Coming Soon">Coming Soon</option>
          </select>
          <select
            value={deployment}
            onChange={(e) => setDeployment(e.target.value)}
            className="px-4 py-3 bg-background border border-border rounded-md text-sm font-mono-tech uppercase tracking-wider focus:outline-none focus:border-brand"
            aria-label="Filter by deployment"
          >
            <option value="All">All Deployment</option>
            <option value="SaaS">SaaS</option>
            <option value="Source Code">Source Code</option>
          </select>
        </div>
        <div className="mb-6 flex items-center justify-between text-xs font-mono-tech uppercase tracking-widest text-muted-foreground">
          <span>[ {String(totalCount).padStart(2, "0")} / {String(grandTotal).padStart(2, "0")} results ]</span>
          {hasFilters && (
            <button
              onClick={() => { setQuery(""); setIndustry("All"); setTech("All"); setStatus("All"); setDeployment("All"); }}
              className="text-brand hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>

        {showFlagship && (
          <div className="mb-14">
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="text-lg font-bold">Flagship Branded Products</h2>
              <span className="text-[10px] font-mono-tech uppercase tracking-widest text-muted-foreground">{filteredFlagship.length} shown</span>
            </div>
            {filteredFlagship.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border border border-border">
                {filteredFlagship.map((p) => (
                  <Link
                    key={p.slug}
                    to="/products/branded/$slug"
                    params={{ slug: p.slug }}
                    className="bg-background p-5 hover:bg-accent/40 transition-colors group block"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="font-mono-tech text-[10px] text-brand uppercase tracking-wider">
                        {p.category}
                      </div>
                      <span className={`font-mono-tech text-[9px] px-2 py-0.5 rounded-full border ${statusStyles[p.status]}`}>
                        {p.status}
                      </span>
                    </div>
                    <h3 className="font-bold mb-1 group-hover:text-brand transition-colors">{p.name}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{p.tagline}</p>
                    <div className="font-mono-tech text-[9px] uppercase tracking-widest text-muted-foreground/80">{p.deployment}</div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-background border border-border p-8 text-center text-sm text-muted-foreground rounded-md">
                No flagship products match those filters.
              </div>
            )}
          </div>
        )}

        {showCatalog && (
          <div>
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="text-lg font-bold">Category Templates</h2>
              <span className="text-[10px] font-mono-tech uppercase tracking-widest text-muted-foreground">{filteredCategories.length} shown</span>
            </div>
            {filteredCategories.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border border border-border">
                {filteredCategories.map((c) => (
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
              </div>
            ) : (
              <div className="bg-background border border-border p-8 text-center text-sm text-muted-foreground rounded-md">
                No category templates match those filters.
              </div>
            )}
          </div>
        )}

        <div className="mt-16 text-center">
          <LeadDialog
            source="products:catalog"
            title="Get a tailored recommendation"
            description="Tell us what you're evaluating and our team will send a shortlist and pricing within one business day."
          >
            <button className="inline-block px-8 py-4 bg-foreground text-background font-bold rounded-lg hover:opacity-90 transition-opacity">
              Talk to sales
            </button>
          </LeadDialog>
        </div>
      </section>
    </PageShell>
  );
}