import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/SiteChrome";

const sections = [
  {
    title: "Getting Started",
    docs: ["Introduction", "Quick start", "System requirements", "Installation guide", "Configuration"],
  },
  {
    title: "Developer",
    docs: ["API reference", "Authentication", "Webhooks", "SDKs", "Rate limits"],
  },
  {
    title: "Operations",
    docs: ["Deployment", "Scaling", "Monitoring", "Backups", "Disaster recovery"],
  },
  {
    title: "Security",
    docs: ["Best practices", "Roles & permissions", "Data residency", "Audit logs", "Compliance"],
  },
  {
    title: "Guides",
    docs: ["Migration guides", "Customization", "Integrations", "Troubleshooting", "FAQs"],
  },
  {
    title: "Release",
    docs: ["Changelog", "Release notes", "Roadmap", "Version history", "Deprecations"],
  },
];

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Documentation — SySoft Systems" },
      { name: "description", content: "Installation, API reference, security, and operations documentation for every SySoft Systems product." },
      { property: "og:title", content: "Documentation — SySoft Systems" },
      { property: "og:description", content: "The complete SySoft Systems documentation center." },
      { property: "og:url", content: "/docs" },
    ],
    links: [{ rel: "canonical", href: "/docs" }],
  }),
  component: DocsPage,
});

function DocsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Documentation"
        title="Everything you need to build, deploy, and operate."
        description="Installation, APIs, operations, security, and migration guides — searchable and versioned."
      />
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {sections.map((s) => (
            <div key={s.title} className="bg-background p-8">
              <div className="font-mono-tech text-brand text-xs uppercase tracking-widest mb-4">
                [ {s.title} ]
              </div>
              <ul className="space-y-3">
                {s.docs.map((d) => (
                  <li key={d}>
                    <a href="#" className="text-sm font-medium hover:text-brand transition-colors flex items-center gap-2">
                      <span className="text-brand font-mono-tech text-xs">›</span> {d}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}