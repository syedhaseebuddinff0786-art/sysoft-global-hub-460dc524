import { Link } from "@tanstack/react-router";

const navLinks = [
  { to: "/products", label: "Products" },
  { to: "/solutions", label: "Solutions" },
  { to: "/industries", label: "Industries" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/docs", label: "Docs" },
] as const;

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="font-mono-tech font-bold text-lg tracking-tighter">
            SYSOFT<span className="text-brand">_</span>SYSTEMS
          </Link>
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="hover:text-brand transition-colors"
                activeProps={{ className: "text-brand" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/portal/login" className="hidden sm:inline text-sm font-medium hover:text-brand transition-colors">
            Login
          </Link>
          <Link
            to="/pricing"
            className="bg-brand text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  const cols: { title: string; links: { label: string; to?: string; href?: string }[] }[] = [
    {
      title: "Products",
      links: [
        { label: "All Products", to: "/products" },
        { label: "SaaS Platforms", to: "/products" },
        { label: "Source Code Shop", to: "/products" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "By Solution", to: "/solutions" },
        { label: "By Industry", to: "/industries" },
        { label: "Services", to: "/services" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", to: "/docs" },
        { label: "Pricing", to: "/pricing" },
        { label: "API Reference", to: "/docs" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Partners", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
  ];
  return (
    <footer className="border-t border-border bg-background pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-12 mb-16">
          <div className="col-span-2">
            <div className="font-mono-tech font-bold text-xl tracking-tighter mb-6">
              SYSOFT<span className="text-brand">_</span>SYSTEMS
            </div>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed max-w-xs">
              Syed Software Systems — a global leader in enterprise software.
              Engineering the digital infrastructure of modern industry since 2012.
            </p>
            <div className="flex gap-3">
              {["X", "Li", "Gh"].map((s) => (
                <div
                  key={s}
                  className="size-8 border border-border rounded flex items-center justify-center text-xs font-mono-tech text-muted-foreground"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-6">{c.title}</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {c.links.map((l) => (
                  <li key={l.label}>
                    {l.to ? (
                      <Link to={l.to} className="hover:text-brand transition-colors">
                        {l.label}
                      </Link>
                    ) : (
                      <a href={l.href} className="hover:text-brand transition-colors">
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-mono-tech text-muted-foreground uppercase">
            © 2026 Syed Software Systems. All rights reserved. System Status: Optimal.
          </div>
          <div className="flex gap-6 text-[10px] font-mono-tech text-muted-foreground uppercase">
            <a href="#" className="hover:text-brand">Privacy</a>
            <a href="#" className="hover:text-brand">Terms</a>
            <a href="#" className="hover:text-brand">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-border bg-accent/30">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="font-mono-tech text-xs text-brand uppercase tracking-widest mb-4">
          [ {eyebrow} ]
        </div>
        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-balance leading-[1.05] mb-6 max-w-3xl">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl text-pretty">{description}</p>
      </div>
    </section>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand/20">
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}