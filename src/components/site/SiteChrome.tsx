import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { X, Menu } from "lucide-react";
import sysoftLogo from "@/assets/sysoft-logo.ico.asset.json";

const navLinks = [
  { to: "/products", label: "Products" },
  { to: "/solutions", label: "Solutions" },
  { to: "/industries", label: "Industries" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/docs", label: "Docs" },
] as const;

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="sticky top-4 z-50 px-4">
      <nav className="max-w-6xl mx-auto rounded-full border border-border bg-card/70 backdrop-blur-xl shadow-[0_8px_40px_-12px_oklch(0_0_0/60%)] pl-4 pr-2 h-14 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2.5 font-mono-tech font-semibold text-sm tracking-tight group">
            <img src={sysoftLogo.url} alt="SySoft Systems logo" className="size-6 rounded-full transition-transform duration-300 group-hover:scale-110" />
            <span className="hidden sm:inline">SYSOFT<span className="text-brand">_</span>SYSTEMS</span>
          </Link>
          <div className="hidden lg:flex items-center gap-1 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative px-3 py-1.5 rounded-full hover:text-foreground hover:bg-white/5 transition-all duration-300"
                activeProps={{ className: "text-foreground bg-white/5" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/portal/login" className="hidden sm:inline px-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
            Sign in
          </Link>
          <Link
            to="/pricing"
            className="relative bg-gradient-cta text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-[0_0_24px_-4px_oklch(0.7_0.2_260/60%)] hover:opacity-95 transition-all duration-300 inline-flex items-center gap-1.5 overflow-hidden group"
          >
            <span className="relative z-10">Get started</span>
            <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
            <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden size-9 flex items-center justify-center rounded-full border border-border bg-card/80 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-x-4 top-20 z-40 rounded-2xl border border-border bg-card/95 backdrop-blur-xl shadow-2xl p-6"
          style={{
            animation: "content-up 0.3s cubic-bezier(0.19, 1, 0.22, 1) both",
          }}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
                style={{
                  animation: `content-left 0.3s cubic-bezier(0.19, 1, 0.22, 1) ${0.05 + i * 0.04}s both`,
                }}
              >
                {l.label}
              </Link>
            ))}
            <hr className="border-border my-2" />
            <Link
              to="/portal/login"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
              style={{ animation: `content-left 0.3s cubic-bezier(0.19, 1, 0.22, 1) 0.3s both` }}
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </div>
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
            <div className="flex items-center gap-2 font-mono-tech font-bold text-xl tracking-tighter mb-6 group">
              <img src={sysoftLogo.url} alt="SySoft Systems logo" className="size-8 transition-transform duration-300 group-hover:scale-110" />
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
                  className="size-8 border border-border rounded flex items-center justify-center text-xs font-mono-tech text-muted-foreground hover:border-brand hover:text-brand hover:bg-brand/5 transition-all duration-300 cursor-pointer"
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
                      <Link to={l.to} className="hover:text-brand transition-colors duration-300">
                        {l.label}
                      </Link>
                    ) : (
                      <a href={l.href} className="hover:text-brand transition-colors duration-300">
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
            <a href="#" className="hover:text-brand transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-brand transition-colors duration-300">Terms</a>
            <a href="#" className="hover:text-brand transition-colors duration-300">Security</a>
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
    <section className="relative border-b border-border overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-[20%] size-64 rounded-full bg-brand/8 blur-[100px] animate-float-slow" />
        <div className="absolute -bottom-20 right-[20%] size-80 rounded-full bg-[oklch(0.6_0.2_280)]/8 blur-[120px] animate-float" style={{ animationDelay: "-2s" }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 backdrop-blur text-xs font-mono-tech text-muted-foreground mb-6">
          <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_theme(colors.emerald.400)]" />
          {eyebrow}
        </div>
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-balance leading-[1.02] mb-6 max-w-4xl mx-auto text-gradient">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{description}</p>
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
