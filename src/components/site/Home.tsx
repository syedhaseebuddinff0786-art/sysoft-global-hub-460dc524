import dashboardPreview from "@/assets/dashboard-preview.jpg";
import { SiteNav, SiteFooter } from "@/components/site/SiteChrome";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

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

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });
  return (
    <div
      ref={ref}
      className={`${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.8s cubic-bezier(0.19, 1, 0.22, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function StaggerChildren({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });
  return (
    <div ref={ref} className={className}>
      {isVisible ? children : <div className="invisible">{children}</div>}
    </div>
  );
}

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

function Hero() {
  return (
    <section className="relative pt-16 sm:pt-24 pb-20 border-b border-border overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] size-72 rounded-full bg-brand/10 blur-[100px] animate-float-slow" />
        <div className="absolute top-40 right-[15%] size-96 rounded-full bg-[oklch(0.6_0.2_280)]/10 blur-[120px] animate-float" style={{ animationDelay: "-2s" }} />
        <div className="absolute bottom-20 left-[40%] size-64 rounded-full bg-[oklch(0.5_0.18_200)]/10 blur-[100px] animate-float-slow" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-10 left-[30%] size-32 rounded-full bg-brand/5 blur-[80px] animate-pulse-glow" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <div className="animate-up">
          <a href="#products" className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 backdrop-blur text-xs font-mono-tech text-muted-foreground mb-8 hover:text-foreground transition-colors group">
            <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_theme(colors.emerald.400)]" />
            The Official Enterprise Platform of SySoft
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
          </a>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight text-balance leading-[0.98] mb-8 text-gradient-animated">
            Building the Future of Business Software
          </h1>
          <p className="font-mono-tech text-sm sm:text-base text-brand mb-6 animate-pulse-glow" style={{ animationDuration: "2s" }}>
            &gt; One ecosystem. Many specialized suites._
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            SySoft Systems engineers ERP, CRM, AI, and vertical SaaS platforms — the
            technical foundation trusted by the world's most ambitious organizations
            across 140+ countries.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#products" className="group relative px-6 py-3 bg-gradient-cta text-primary-foreground font-medium rounded-full shadow-[0_0_40px_-8px_oklch(0.7_0.2_260/70%)] hover:opacity-95 transition-all duration-300 inline-flex items-center gap-2 overflow-hidden">
              <span className="relative z-10">Explore Products</span>
              <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
              <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </a>
            <a href="#docs" className="px-6 py-3 border border-border bg-card/60 backdrop-blur font-medium rounded-full hover:bg-white/5 transition-all duration-300 hover:border-brand/50 hover:shadow-[0_0_30px_-8px_oklch(0.7_0.2_260/30%)]">
              Discover the Ecosystem
            </a>
          </div>
        </div>

        <div className="relative animate-up [animation-delay:200ms] mt-20 group">
          <div className="absolute inset-x-0 -top-16 h-64 bg-[radial-gradient(ellipse_at_center,oklch(0.7_0.2_260/40%),transparent_70%)] -z-10 group-hover:opacity-80 transition-opacity duration-700" />
          <div className="relative bg-card/60 backdrop-blur rounded-2xl shadow-2xl border border-border p-2 transition-all duration-500 group-hover:border-brand/30 group-hover:shadow-[0_0_60px_-12px_oklch(0.7_0.2_260/35%)]">
            <div className="shimmer-overlay rounded-xl">
              <img
                src={dashboardPreview}
                alt="SySoft enterprise analytics dashboard preview"
                width={1280}
                height={960}
                className="w-full aspect-[16/10] object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const logos = ["GLOBAL_FLOW", "TECH_CORP", "NEXUS_SYSTEMS", "APEX_LOGIC", "VERT_INFRA", "SYNERGY_BANK"];
  return (
    <RevealSection>
      <div className="border-b border-border bg-accent/30 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-mono-tech uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Trusted by 5,000+ global enterprises
          </p>
          <div className="flex flex-wrap items-center justify-between gap-8 opacity-40">
            {logos.map((l, i) => (
              <span
                key={l}
                className="text-lg sm:text-xl font-bold font-mono-tech transition-all duration-500 hover:opacity-70 hover:text-brand"
                style={{
                  opacity: 0,
                  animation: `content-up 0.6s cubic-bezier(0.19, 1, 0.22, 1) ${0.2 + i * 0.1}s forwards`,
                }}
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

function CategoryGrid() {
  return (
    <RevealSection>
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
          <a href="#all" className="text-brand font-semibold hover:underline shrink-0 group">
            Browse All Products
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1"> →</span>
          </a>
        </div>

        <StaggerChildren>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border border border-border">
            {categories.map((c, i) => (
              <div
                key={c.code}
                className="bg-background p-6 card-hover cursor-pointer group"
                style={{
                  animation: `content-up 0.5s cubic-bezier(0.19, 1, 0.22, 1) ${i * 0.04}s both`,
                }}
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
        </StaggerChildren>
      </section>
    </RevealSection>
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
    <RevealSection>
      <section className="bg-surface-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.7_0.2_260/8%),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 text-center">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="transition-all duration-500 hover:scale-105"
                style={{
                  animation: `scale-in 0.6s cubic-bezier(0.19, 1, 0.22, 1) ${0.1 + i * 0.15}s both`,
                }}
              >
                <div className="font-mono-tech text-brand text-xs sm:text-sm mb-4">[ {s.label} ]</div>
                <div className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">{s.value}</div>
                <div className="text-white/60 text-sm">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealSection>
  );
}

function IndustriesSection() {
  return (
    <RevealSection>
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
          <StaggerChildren>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-border border border-border">
              {industries.map((i, idx) => (
                <div
                  key={i}
                  className="bg-background px-4 py-5 text-sm font-medium card-hover"
                  style={{
                    animation: `content-up 0.4s cubic-bezier(0.19, 1, 0.22, 1) ${idx * 0.03}s both`,
                  }}
                >
                  {i}
                </div>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>
    </RevealSection>
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
    <RevealSection>
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
          <StaggerChildren>
            <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
              {items.map((i, idx) => (
                <div
                  key={i.code}
                  className="bg-background p-8 card-hover"
                  style={{
                    animation: `content-up 0.5s cubic-bezier(0.19, 1, 0.22, 1) ${idx * 0.1}s both`,
                  }}
                >
                  <div className="font-mono-tech text-brand text-xs mb-4">[ {i.code} ]</div>
                  <h3 className="text-xl font-bold mb-3">{i.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
                </div>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>
    </RevealSection>
  );
}

function TechStackSection() {
  return (
    <RevealSection>
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
        <StaggerChildren>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((t, i) => (
              <span
                key={t}
                className="font-mono-tech text-sm px-4 py-2 border border-border rounded-full bg-background hover:border-brand hover:text-brand transition-all duration-300 hover:shadow-[0_0_20px_-4px_oklch(0.7_0.2_260/20%)] hover:-translate-y-0.5 cursor-default"
                style={{
                  animation: `scale-in 0.4s cubic-bezier(0.19, 1, 0.22, 1) ${i * 0.03}s both`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </StaggerChildren>
      </section>
    </RevealSection>
  );
}

function TestimonialsSection() {
  return (
    <RevealSection>
      <section className="border-y border-border bg-surface-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.6_0.2_260/6%),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl mb-16">
            <div className="font-mono-tech text-xs text-brand uppercase tracking-widest mb-3">
              [ Customers ]
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
              Deployed by teams who ship at scale.
            </h2>
          </div>
          <StaggerChildren>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <figure
                  key={t.name}
                  className="border border-white/10 bg-white/5 p-8 rounded-lg flex flex-col justify-between card-hover hover:bg-white/[0.07] hover:border-white/20"
                  style={{
                    animation: `content-up 0.6s cubic-bezier(0.19, 1, 0.22, 1) ${i * 0.15}s both`,
                  }}
                >
                  <blockquote className="text-white/90 leading-relaxed text-[15px] mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-white/50 text-sm">{t.role}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>
    </RevealSection>
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
    <RevealSection>
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
        <StaggerChildren>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t, idx) => (
              <div
                key={t.name}
                className={`p-8 rounded-xl border transition-all duration-500 flex flex-col ${
                  t.featured
                    ? "border-brand bg-brand/5 shadow-lg hover:shadow-[0_0_50px_-12px_oklch(0.7_0.2_260/40%)] hover:border-brand/80 hover:-translate-y-1"
                    : "border-border bg-background hover:border-brand/30 hover:shadow-[0_0_40px_-12px_oklch(0.7_0.2_260/15%)] hover:-translate-y-1"
                }`}
                style={{
                  animation: `content-up 0.6s cubic-bezier(0.19, 1, 0.22, 1) ${idx * 0.12}s both`,
                }}
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
                  className={`text-center px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-300 relative overflow-hidden group ${
                    t.featured
                      ? "bg-gradient-cta text-primary-foreground hover:opacity-90"
                      : "bg-foreground text-background hover:opacity-90"
                  }`}
                >
                  <span className="relative z-10">{t.cta}</span>
                  <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </a>
              </div>
            ))}
          </div>
        </StaggerChildren>
      </section>
    </RevealSection>
  );
}

function CTASection() {
  return (
    <RevealSection>
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="border border-border rounded-2xl p-10 sm:p-16 bg-accent/30 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute -top-20 -right-20 size-64 rounded-full bg-brand/5 blur-[100px] transition-all duration-700 group-hover:bg-brand/10 group-hover:scale-110" />
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
              <a href="#contact" className="group relative px-8 py-4 bg-foreground text-background font-bold rounded-lg hover:opacity-90 transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Talk to Sales</span>
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </a>
              <a href="#docs" className="px-8 py-4 bg-background border border-border font-bold rounded-lg hover:bg-accent transition-all duration-300 hover:border-brand/50 hover:shadow-[0_0_30px_-8px_oklch(0.7_0.2_260/20%)]">
                Read Documentation
              </a>
            </div>
          </div>
        </div>
      </section>
    </RevealSection>
  );
}
