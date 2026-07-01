import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { PageShell } from "@/components/site/SiteChrome";
import { setPortalUser, getPortalUser } from "@/lib/portal-auth";

export const Route = createFileRoute("/portal/login")({
  head: () => ({
    meta: [
      { title: "Customer Portal Login — SySoft Systems" },
      { name: "description", content: "Sign in to the SySoft Systems customer portal to manage licenses, downloads, and support." },
      { property: "og:title", content: "Customer Portal Login — SySoft Systems" },
      { property: "og:description", content: "Access your SySoft license keys, downloads, and support tickets." },
      { property: "og:url", content: "/portal/login" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/portal/login" }],
  }),
  component: LoginPage,
});

const schema = z.object({
  email: z.string().trim().email({ message: "Enter a valid email" }).max(200),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }).max(200),
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (getPortalUser()) navigate({ to: "/portal/dashboard", replace: true });
  }, [navigate]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const parsed = schema.safeParse({ email, password });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const local = parsed.data.email.split("@")[0].replace(/[._-]/g, " ");
      setPortalUser({
        email: parsed.data.email,
        name: local.charAt(0).toUpperCase() + local.slice(1),
        company: "Demo Organization",
        loggedInAt: new Date().toISOString(),
      });
      navigate({ to: "/portal/dashboard", replace: true });
    }, 400);
  }

  return (
    <PageShell>
      <section className="max-w-md mx-auto px-6 py-24">
        <div className="font-mono-tech text-brand text-xs uppercase tracking-widest mb-4">[ Customer Portal ]</div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">Sign in to your account</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Manage license keys, downloads, and support tickets. Demo mode is enabled — any valid email works.
        </p>
        <form onSubmit={onSubmit} className="space-y-4" noValidate>
          <div>
            <label className="block text-xs font-mono-tech uppercase tracking-widest text-muted-foreground mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              maxLength={200}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm focus:outline-none focus:border-brand"
            />
          </div>
          <div>
            <label className="block text-xs font-mono-tech uppercase tracking-widest text-muted-foreground mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              maxLength={200}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm focus:outline-none focus:border-brand"
            />
          </div>
          {error && <div className="text-sm text-red-500" role="alert">{error}</div>}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-brand text-primary-foreground font-bold rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
        <div className="mt-8 pt-6 border-t border-border text-xs text-muted-foreground text-center">
          Need an account?{" "}
          <Link to="/pricing" className="text-brand hover:underline">Contact sales</Link>
        </div>
      </section>
    </PageShell>
  );
}