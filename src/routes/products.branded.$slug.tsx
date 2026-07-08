import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/SiteChrome";
import { FLAGSHIP_PRODUCTS, getFlagshipBySlug, type FlagshipProduct } from "@/data/catalog";
import { LeadDialog } from "@/components/site/LeadDialog";

const statusStyles: Record<string, string> = {
  Live: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  Beta: "text-amber-300 border-amber-300/30 bg-amber-300/10",
  "Coming Soon": "text-brand border-brand/30 bg-brand/10",
};

export const Route = createFileRoute("/products/branded/$slug")({
  loader: ({ params }) => {
    const product = getFlagshipBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    const title = p ? `${p.name} — ${p.category} · SySoft Systems` : "Product — SySoft Systems";
    const desc = p?.description ?? p?.tagline ?? "Enterprise software by SySoft Systems.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "product" },
        { property: "og:url", content: p ? `/products/branded/${p.slug}` : "/products" },
      ],
      links: p ? [{ rel: "canonical", href: `/products/branded/${p.slug}` }] : [],
    };
  },
  notFoundComponent: () => (
    <PageShell>
      <section className="max-w-3xl mx-auto px-6 py-32 text-center">
        <div className="font-mono-tech text-brand text-xs mb-4">[ 404 / NOT_FOUND ]</div>
        <h1 className="text-4xl font-extrabold mb-4">Product not found</h1>
        <Link to="/products" className="text-brand hover:underline">← Back to all products</Link>
      </section>
    </PageShell>
  ),
  errorComponent: ({ error }) => (
    <PageShell>
      <section className="max-w-3xl mx-auto px-6 py-32">
        <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
        <p className="text-sm text-muted-foreground">{String(error)}</p>
      </section>
    </PageShell>
  ),
  component: BrandedProductPage,
});

function BrandedProductPage() {
  const { product: p } = Route.useLoaderData() as { product: FlagshipProduct };
  const related = FLAGSHIP_PRODUCTS.filter(
    (x) => x.slug !== p.slug && (x.category === p.category || x.industries.some((i) => p.industries.includes(i))),
  ).slice(0, 4);

  return (
    <PageShell>
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-brand/20 blur-[140px]" />
        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono-tech text-[10px] uppercase tracking-widest text-brand">[ Flagship · {p.category} ]</span>
            <span className={`font-mono-tech text-[10px] px-2 py-0.5 rounded-full border ${statusStyles[p.status]}`}>{p.status}</span>
            <span className="font-mono-tech text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground">{p.deployment}</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-4 text-gradient max-w-3xl">
            {p.name}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">{p.tagline}</p>
          <div className="flex flex-wrap gap-3">
            <LeadDialog
              source={`product:${p.slug}`}
              defaultProduct={p.name}
              title={`Request a ${p.name} demo`}
              description="A solutions engineer will set up a tailored walkthrough within one business day."
            >
              <button className="px-6 py-3 bg-gradient-cta text-primary-foreground font-semibold rounded-full shadow-[0_0_24px_-4px_oklch(0.7_0.2_260/60%)] text-sm">
                Request a demo →
              </button>
            </LeadDialog>
            <Link to="/products" className="px-6 py-3 border border-border font-semibold rounded-full text-sm hover:bg-accent transition-colors">
              ← All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">{p.description}</p>

          <h3 className="text-xs font-mono-tech uppercase tracking-widest text-brand mb-4">[ Highlights ]</h3>
          <div className="grid sm:grid-cols-2 gap-px bg-border border border-border mb-10">
            {p.features.map((m) => (
              <div key={m} className="bg-background p-4 text-sm font-medium">{m}</div>
            ))}
          </div>
        </div>

        <aside className="space-y-8">
          <div>
            <h3 className="text-xs font-mono-tech uppercase tracking-widest text-brand mb-3">[ Target Industries ]</h3>
            <div className="flex flex-wrap gap-2">
              {p.industries.map((i) => (
                <span key={i} className="px-3 py-1 border border-border rounded-full text-xs">{i}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-mono-tech uppercase tracking-widest text-brand mb-3">[ Status ]</h3>
            <span className={`inline-block font-mono-tech text-[11px] px-3 py-1 rounded-full border ${statusStyles[p.status]}`}>{p.status}</span>
          </div>
          <div className="p-6 border border-border rounded-lg bg-accent/30">
            <div className="font-mono-tech text-[10px] text-brand uppercase tracking-widest mb-2">[ Deployment ]</div>
            <div className="text-sm font-bold mb-2">{p.deployment}</div>
            <p className="text-xs text-muted-foreground">Available as hosted SaaS, licensed source code, or a fully-custom engagement.</p>
          </div>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/products/branded/$slug"
                params={{ slug: r.slug }}
                className="bg-background p-6 hover:bg-accent/40 transition-colors group"
              >
                <div className="font-mono-tech text-[10px] text-brand mb-3 uppercase tracking-wider">{r.category}</div>
                <div className="font-bold text-sm group-hover:text-brand">{r.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{r.tagline}</div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </PageShell>
  );
}