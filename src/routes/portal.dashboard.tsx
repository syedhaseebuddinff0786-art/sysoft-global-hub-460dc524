import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { PageShell } from "@/components/site/SiteChrome";
import { usePortalUser, clearPortalUser } from "@/lib/portal-auth";

export const Route = createFileRoute("/portal/dashboard")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Customer Portal — SySoft Systems" },
      { name: "description", content: "Your license keys, downloads, and support tickets." },
      { property: "og:title", content: "Customer Portal — SySoft Systems" },
      { property: "og:url", content: "/portal/dashboard" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/portal/dashboard" }],
  }),
  component: DashboardPage,
});

const licenses = [
  { product: "ERP Suite", key: "SYS-ERP-8842-XKQ7-4T29", plan: "Business", seats: 25, renews: "2027-03-12", status: "Active" },
  { product: "CRM Cloud", key: "SYS-CRM-1173-P9QM-B620", plan: "Enterprise", seats: 100, renews: "2026-11-04", status: "Active" },
  { product: "HRMS & Payroll", key: "SYS-HRM-5029-YR33-D115", plan: "Starter", seats: 10, renews: "2026-08-19", status: "Trial" },
];

const downloads = [
  { name: "ERP Suite v14.2 · Source", size: "482 MB", type: "zip", updated: "2026-06-14" },
  { name: "CRM Cloud SDK · v3.8", size: "68 MB", type: "tar.gz", updated: "2026-06-02" },
  { name: "HRMS Mobile · Android AAB", size: "112 MB", type: "aab", updated: "2026-05-21" },
  { name: "HRMS Mobile · iOS IPA", size: "128 MB", type: "ipa", updated: "2026-05-21" },
];

function DashboardPage() {
  const navigate = useNavigate();
  const user = usePortalUser();

  useEffect(() => {
    if (user === null) navigate({ to: "/portal/login", replace: true });
  }, [user, navigate]);

  if (!user) {
    return (
      <PageShell>
        <section className="max-w-3xl mx-auto px-6 py-32 text-center text-sm text-muted-foreground">
          Redirecting to sign in…
        </section>
      </PageShell>
    );
  }

  function signOut() {
    clearPortalUser();
    navigate({ to: "/portal/login", replace: true });
  }

  return (
    <PageShell>
      <section className="border-b border-border bg-accent/30">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="font-mono-tech text-brand text-xs uppercase tracking-widest mb-2">[ Portal / Dashboard ]</div>
            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight">Welcome back, {user.name}.</h1>
            <p className="text-sm text-muted-foreground mt-1">{user.company} · {user.email}</p>
          </div>
          <button
            onClick={signOut}
            className="px-4 py-2 border border-border rounded-md text-sm font-medium hover:bg-background transition-colors"
          >
            Sign out
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-px bg-border border border-border">
        {[
          { label: "Active Licenses", value: "3" },
          { label: "Downloads Available", value: "4" },
          { label: "Open Tickets", value: "0" },
        ].map((s) => (
          <div key={s.label} className="bg-background p-6">
            <div className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground mb-2">{s.label}</div>
            <div className="text-3xl font-extrabold">{s.value}</div>
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-bold mb-4">Licenses</h2>
        <div className="overflow-x-auto border border-border rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-accent/40 text-xs font-mono-tech uppercase tracking-widest text-muted-foreground">
              <tr>
                <th className="text-left p-4">Product</th>
                <th className="text-left p-4">License Key</th>
                <th className="text-left p-4">Plan</th>
                <th className="text-left p-4">Seats</th>
                <th className="text-left p-4">Renews</th>
                <th className="text-left p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {licenses.map((l) => (
                <tr key={l.key} className="border-t border-border">
                  <td className="p-4 font-medium">{l.product}</td>
                  <td className="p-4 font-mono-tech text-xs">{l.key}</td>
                  <td className="p-4">{l.plan}</td>
                  <td className="p-4">{l.seats}</td>
                  <td className="p-4">{l.renews}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-mono-tech ${l.status === "Active" ? "bg-brand/10 text-brand" : "bg-accent"}`}>
                      {l.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-xl font-bold mb-4">Downloads</h2>
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {downloads.map((d) => (
            <div key={d.name} className="bg-background p-6 flex items-center justify-between gap-4">
              <div>
                <div className="font-bold">{d.name}</div>
                <div className="text-xs text-muted-foreground font-mono-tech uppercase tracking-wider mt-1">
                  {d.type} · {d.size} · updated {d.updated}
                </div>
              </div>
              <button
                onClick={() => alert(`Demo download: ${d.name}`)}
                className="px-4 py-2 bg-foreground text-background rounded-md text-sm font-bold hover:opacity-90 transition-opacity shrink-0"
              >
                Download
              </button>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center text-xs text-muted-foreground">
          Need help? <Link to="/docs" className="text-brand hover:underline">Visit docs</Link> or contact your account manager.
        </div>
      </section>
    </PageShell>
  );
}