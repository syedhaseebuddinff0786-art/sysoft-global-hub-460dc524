import dashboardPreview from "@/assets/dashboard-preview.jpg";
import { SiteNav, SiteFooter } from "@/components/site/SiteChrome";

const categories = [
  { code: "01/ERP", name: "Enterprise Resource", desc: "Operational logistics and planning." },
  { code: "02/CRM", name: "Customer Relations", desc: "Advanced pipeline management." },
  { code: "03/EDU", name: "Academic Suite", desc: "School, college & university management." },
  { code: "04/MED", name: "Healthcare Core", desc: "Hospital, clinic & pharmacy systems." },
  { code: "05/POS", name: "Point of Sale", desc: "High-velocity retail engine." },
  { code: "06/HRM", name: "Human Capital", desc: "Payroll, attendance & talent ops." },
  { code: "07/INV", name: "Warehouse Ops", desc: "Real-time inventory tracking." },
  { code: "08/ACC", name: "Financial Ledger", desc: "Auditable accounting software." },
  { code: "09/PRO", name: "Project Hub", desc: "Agile collaboration at scale." },
  { code: "10/COM", name: "E-commerce Engine", desc: "Multi-channel global selling." },
  { code: "11/AI", name: "Neural Insights", desc: "Business intelligence & ML." },
  { code: "12/LOG", name: "Fleet Dynamics", desc: "Global logistics & transport." },
  { code: "13/HOS", name: "Hospitality Suite", desc: "Hotel, restaurant & booking." },
  { code: "14/REA", name: "Real Estate", desc: "Property & lease management." },
  { code: "15/GOV", name: "Government Cloud", desc: "Public sector & compliance." },
  { code: "16/FIN", name: "Fintech Core", desc: "Banking, microfinance & insurance." },
  { code: "17/LMS", name: "Learning Platform", desc: "Enterprise training & LMS." },
  { code: "18/SEC", name: "Security Ops", desc: "Audits, monitoring & compliance." },
];

const industries = [
  "Healthcare", "Education", "Retail", "Finance", "Manufacturing",
  "Construction", "Hospitality", "Government", "Transportation", "Agriculture",
  "Logistics", "E-commerce", "Real Estate", "Restaurants", "NGOs",
  "Legal", "Insurance", "Energy", "Telecom", "Startups",
];

const techStack = [
  "Laravel", "PHP", "Node.js", "React", "Next.js", "Vue", "Flutter",
  "React Native", "Docker", "MySQL", "PostgreSQL", "Redis", "GraphQL",
  "WebSockets", "AI", "Cloud", "CI/CD", "Linux",
];

const testimonials = [
  {
    quote: "SySoft replaced four legacy systems in our hospital network. Deployment was clean and the support team stayed with us for months.",
    name: "Dr. Layla Farouk",
    role: "CTO, NexusHealth Group",
  },
  {
    quote: "We licensed the source code and shipped our own branded ERP in six weeks. The engineering quality is genuinely enterprise-grade.",
    name: "Marcus Chen",
    role: "VP Engineering, Apex Logistics",
  },
  {
    quote: "Their POS and inventory suite runs 340 of our stores across three countries with zero downtime this quarter.",
    name: "Priya Ramanathan",
    role: "COO, GlobalMart Retail",
  },
];

export function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand/20">
      <SiteNav />
      <main>
        <Hero />
        <TrustBar />
        <CategoryGrid />
        <StatsBand />
        <IndustriesSection />
        <EnterpriseSection />
        <TechStackSection />
        <TestimonialsSection />
        <PricingHighlight />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  );
}

// SiteNav is imported from SiteChrome

function Hero() {
  return (
    <section className="relative pt-16 sm:pt-24 pb-20 border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/5 border border-brand/10 text-brand text-xs font-mono-tech font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
            </span>
            v4.0 Enterprise Suite Now Available
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-balance leading-[0.95] mb-8">
            Building the Future of{" "}
            <span className="text-muted-foreground">Business Software.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-10 text-pretty">
            From ERP to AI-driven CRM, Syed Software Systems provides the technical
            foundation for the world's most ambitious organizations across 140+ countries.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#products" className="px-8 py-4 bg-foreground text-background font-bold rounded-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Deploy Enterprise Suite
            </a>
            <a href="#docs" className="px-8 py-4 bg-background border border-border font-bold rounded-lg hover:bg-accent transition-all">
              View Documentation
            </a>
          </div>
        </div>

        <div className="relative animate-up [animation-delay:200ms]">
          <div className="relative z-10 bg-card rounded-xl shadow-2xl border border-border p-2">
            <img
              src={dashboardPreview}
              alt="SySoft enterprise analytics dashboard preview"
              width={1280}
              height={960}
              className="w-full aspect-[4/3] object-cover rounded-lg"
            />
          </div>
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand/10 rounded-full blur-3xl -z-0" />
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-brand-muted rounded-full blur-3xl -z-0" />
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const logos = ["GLOBAL_FLOW", "TECH_CORP", "NEXUS_SYSTEMS", "APEX_LOGIC", "VERT_INFRA", "SYNERGY_BANK"];
  return (
    <div className="border-b border-border bg-accent/30 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] font-mono-tech uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Trusted by 5,000+ global enterprises
        </p>
        <div className="flex flex-wrap items-center justify-between gap-8 opacity-40">
          {logos.map((l) => (
            <span key={l} className="text-lg sm:text-xl font-bold font-mono-tech">{l}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CategoryGrid() {
  return (
    <section id="products" className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-16">
        <div>
          <div className="font-mono-tech text-xs text-brand uppercase tracking-widest mb-3">
            [ Product Ecosystem ]
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            The SySoft Ecosystem
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Browse our directory of 400+ specialized software modules — ready to deploy or license as source code.
          </p>
        </div>
        <a href="#all" className="text-brand font-semibold hover:underline shrink-0">
          Browse All Products →
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border border border-border">
        {categories.map((c) => (
          <div
            key={c.code}
            className="bg-background p-6 hover:bg-accent/40 transition-colors cursor-pointer group"
          >
            <div className="font-mono-tech text-[10px] text-brand mb-4 uppercase tracking-wider">
              {c.code}
            </div>
            <h3 className="font-bold mb-1 group-hover:text-brand transition-colors">
              {c.name}
            </h3>
            <p className="text-xs text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function StatsBand() {
  const stats = [
    { label: "NETWORK_NODES", value: "140+", sub: "Countries Served" },
    { label: "ACTIVE_LICENSES", value: "12.5M", sub: "Enterprise Users" },
    { label: "REPOSITORY_SIZE", value: "400+", sub: "Ready-to-Deploy Products" },
    { label: "UPTIME_SLA", value: "99.99%", sub: "Global Availability" },
  ];
  return (
    <section className="bg-surface-dark text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-mono-tech text-brand text-xs sm:text-sm mb-4">[ {s.label} ]</div>
              <div className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">{s.value}</div>
              <div className="text-white/60 text-sm">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section id="industries" className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
        <div>
          <div className="font-mono-tech text-xs text-brand uppercase tracking-widest mb-3">
            [ Industries ]
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Purpose-built for every sector.
          </h2>
          <p className="text-muted-foreground">
            Whether you run a hospital, a school district, a logistics fleet, or a
            government agency — SySoft ships a software stack calibrated to your workflows.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-border border border-border">
          {industries.map((i) => (
            <div key={i} className="bg-background px-4 py-5 text-sm font-medium hover:bg-accent/40 transition-colors">
              {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnterpriseSection() {
  const items = [
    {
      code: "01",
      title: "Enterprise SaaS",
      desc: "Fully-hosted, multi-tenant platforms with 99.99% SLA, regional data residency, and 24/7 priority support.",
    },
    {
      code: "02",
      title: "Source Code Licensing",
      desc: "Own the codebase. Ship your own branded product built on our battle-tested engineering foundations.",
    },
    {
      code: "03",
      title: "Custom Development",
      desc: "Bespoke systems engineered end-to-end by our senior team — from discovery to deployment and beyond.",
    },
  ];
  return (
    <section id="solutions" className="border-y border-border bg-accent/30">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl mb-16">
          <div className="font-mono-tech text-xs text-brand uppercase tracking-widest mb-3">
            [ Solutions ]
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
            Three ways to work with SySoft.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {items.map((i) => (
            <div key={i.code} className="bg-background p-8">
              <div className="font-mono-tech text-brand text-xs mb-4">[ {i.code} ]</div>
              <h3 className="text-xl font-bold mb-3">{i.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="font-mono-tech text-xs text-brand uppercase tracking-widest mb-3">
          [ Technology ]
        </div>
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
          Engineered on a modern, proven stack.
        </h2>
        <p className="text-muted-foreground">
          Every product ships on infrastructure trusted by hyperscale operators.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {techStack.map((t) => (
          <span key={t} className="font-mono-tech text-sm px-4 py-2 border border-border rounded-full bg-background hover:border-brand hover:text-brand transition-colors">
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="border-y border-border bg-surface-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl mb-16">
          <div className="font-mono-tech text-xs text-brand uppercase tracking-widest mb-3">
            [ Customers ]
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
            Deployed by teams who ship at scale.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <figure key={t.name} className="border border-white/10 bg-white/5 p-8 rounded-lg flex flex-col justify-between">
              <blockquote className="text-white/90 leading-relaxed text-[15px] mb-8">
                "{t.quote}"
              </blockquote>
              <figcaption>
                <div className="font-bold">{t.name}</div>
                <div className="text-white/50 text-sm">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingHighlight() {
  const tiers = [
    {
      name: "Starter",
      price: "$0",
      sub: "per month",
      desc: "Free tier for startups and small teams exploring the platform.",
      features: ["Community support", "1 workspace", "Public documentation"],
      cta: "Start free",
    },
    {
      name: "Business",
      price: "$249",
      sub: "per month",
      desc: "For growing organizations running production workloads.",
      features: ["Priority support", "Unlimited workspaces", "99.9% SLA", "Custom integrations"],
      cta: "Start trial",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      sub: "annual contract",
      desc: "Source code, dedicated engineering, and global 24/7 support.",
      features: ["Source code license", "Named engineer", "99.99% SLA", "Regional data residency"],
      cta: "Contact sales",
    },
  ];
  return (
    <section id="pricing" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="font-mono-tech text-xs text-brand uppercase tracking-widest mb-3">
          [ Pricing ]
        </div>
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
          Simple, transparent pricing.
        </h2>
        <p className="text-muted-foreground">
          Start free. Scale to enterprise. Own your source code.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`p-8 rounded-xl border ${t.featured ? "border-brand bg-brand/5 shadow-lg" : "border-border bg-background"} flex flex-col`}
          >
            <div className="font-mono-tech text-xs uppercase tracking-widest text-brand mb-4">
              {t.name}
            </div>
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
            <a
              href="#contact"
              className={`text-center px-5 py-3 rounded-lg font-semibold text-sm transition-all ${
                t.featured
                  ? "bg-brand text-primary-foreground hover:opacity-90"
                  : "bg-foreground text-background hover:opacity-90"
              }`}
            >
              {t.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="border border-border rounded-2xl p-10 sm:p-16 bg-accent/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative max-w-3xl">
          <div className="font-mono-tech text-xs text-brand uppercase tracking-widest mb-3">
            [ Ready to deploy ]
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight mb-6">
            Bring enterprise software to your organization.
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
            Talk to our solutions team. Get a tailored recommendation, a live demo,
            and a deployment timeline within one business day.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-4 bg-foreground text-background font-bold rounded-lg hover:opacity-90 transition-opacity">
              Talk to Sales
            </a>
            <a href="#docs" className="px-8 py-4 bg-background border border-border font-bold rounded-lg hover:bg-accent transition-colors">
              Read Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// SiteFooter is imported from SiteChrome