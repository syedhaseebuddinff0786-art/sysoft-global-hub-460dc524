import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/SiteChrome";
import { CATEGORIES, getCategoryBySlug } from "@/data/catalog";

export const Route = createFileRoute("/products/$category")({
  loader: ({ params }) => {
    const category = getCategoryBySlug(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.category;
    const title = c ? `${c.name} — SySoft Systems` : "Product — SySoft Systems";
    const desc = c?.tagline ?? "Enterprise software by SySoft Systems.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "product" },
        { property: "og:url", content: c ? `/products/${c.slug}` : "/products" },
      ],
      links: c ? [{ rel: "canonical", href: `/products/${c.slug}` }] : [],
    };
  },
  notFoundComponent: () => (
    <PageShell>
      <section className="max-w-3xl mx-auto px-6 py-32 text-center">
        <div className="font-mono-tech text-brand text-xs mb-4">[ 404 / NOT_FOUND ]</div>
        <h1 className="text-4xl font-extrabold mb-4">Product category not found</h1>
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
  component: CategoryPage,
});

function CategoryPage() {
  const { category: c } = Route.useLoaderData();
  const related = CATEGORIES.filter(
    (x) => x.slug !== c.slug && x.industries.some((i) => c.industries.includes(i)),
  ).slice(0, 4);

  return (
    <PageShell>
      <section className="border-b border-border bg-accent/30">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="font-mono-tech text-xs text-brand uppercase tracking-widest mb-4">
            [ {c.code} ]
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6 max-w-4xl">
            {c.name}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">{c.tagline}</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/pricing" className="px-6 py-3 bg-brand text-primary-foreground font-bold rounded-md hover:opacity-90 transition-opacity text-sm">
              Request a Demo
            </Link>
            <Link to="/products" className="px-6 py-3 border border-border font-bold rounded-md hover:bg-accent transition-colors text-sm">
              ← All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">{c.description}</p>

          <h3 className="text-xs font-mono-tech uppercase tracking-widest text-brand mb-4">[ Modules ]</h3>
          <div className="grid sm:grid-cols-2 gap-px bg-border border border-border mb-10">
            {c.modules.map((m) => (
              <div key={m} className="bg-background p-4 text-sm font-medium">{m}</div>
            ))}
          </div>
        </div>

        <aside className="space-y-8">
          <div>
            <h3 className="text-xs font-mono-tech uppercase tracking-widest text-brand mb-3">[ Industries ]</h3>
            <div className="flex flex-wrap gap-2">
              {c.industries.map((i) => (
                <span key={i} className="px-3 py-1 border border-border rounded-full text-xs">{i}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-mono-tech uppercase tracking-widest text-brand mb-3">[ Stack ]</h3>
            <div className="flex flex-wrap gap-2">
              {c.technologies.map((t) => (
                <span key={t} className="px-3 py-1 bg-accent rounded-md text-xs font-mono-tech">{t}</span>
              ))}
            </div>
          </div>
          <div className="p-6 border border-border rounded-lg bg-accent/30">
            <div className="font-mono-tech text-[10px] text-brand uppercase tracking-widest mb-2">[ Deployment ]</div>
            <div className="text-sm font-bold mb-2">SaaS · Source Code · Custom</div>
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
                to="/products/$category"
                params={{ category: r.slug }}
                className="bg-background p-6 hover:bg-accent/40 transition-colors group"
              >
                <div className="font-mono-tech text-[10px] text-brand mb-3 uppercase tracking-wider">{r.code}</div>
                <div className="font-bold text-sm group-hover:text-brand">{r.name}</div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </PageShell>
  );
}