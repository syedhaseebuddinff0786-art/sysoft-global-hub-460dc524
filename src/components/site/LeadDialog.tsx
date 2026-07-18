import { useState, type ReactNode } from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { COUNTRIES, FLAGSHIP_PRODUCTS } from "@/data/catalog";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  country: z.string().trim().max(80).optional().or(z.literal("")),
  product_interest: z.string().trim().max(160).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export function LeadDialog({
  children,
  source,
  defaultProduct,
  title = "Talk to our enterprise team",
  description = "Share a few details and a solutions engineer will reach out within one business day.",
}: {
  children: ReactNode;
  source: string;
  defaultProduct?: string;
  title?: string;
  description?: string;
}) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      country: String(fd.get("country") ?? ""),
      product_interest: String(fd.get("product_interest") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = leadSchema.safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("leads").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company || null,
      phone: parsed.data.phone || null,
      country: parsed.data.country || null,
      product_interest: parsed.data.product_interest || null,
      message: parsed.data.message || null,
      source,
    });
    setSubmitting(false);
    if (error) {
      toast.error("Could not submit — please try again.");
      return;
    }
    toast.success("Thanks — our team will be in touch shortly.");
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <div className="font-mono-tech text-[10px] text-brand uppercase tracking-widest mb-2">[ Enterprise Inquiry ]</div>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid gap-3 pt-2">
          <div className="grid sm:grid-cols-2 gap-3">
            <input name="name" required maxLength={120} placeholder="Full name" className="px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:border-brand" />
            <input name="email" type="email" required maxLength={255} placeholder="Work email" className="px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:border-brand" />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <input name="company" maxLength={160} placeholder="Company" className="px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:border-brand" />
            <input name="phone" maxLength={40} placeholder="Phone (optional)" className="px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:border-brand" />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <select name="country" defaultValue="" className="px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:border-brand">
              <option value="">Country / region</option>
              {COUNTRIES.map((c) => (
                <option key={c.code} value={c.name}>{c.flag} {c.name}</option>
              ))}
              <option value="Other">Other</option>
            </select>
            <select name="product_interest" defaultValue={defaultProduct ?? ""} className="px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:border-brand">
              <option value="">Product of interest</option>
              {FLAGSHIP_PRODUCTS.map((p) => (
                <option key={p.slug} value={p.name}>{p.name} — {p.category}</option>
              ))}
              <option value="Custom / Multiple">Custom / Multiple</option>
            </select>
          </div>
          <textarea name="message" maxLength={2000} rows={4} placeholder="Tell us about your use case, team size, and timeline." className="px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:border-brand resize-none" />
          <div className="flex items-center justify-between pt-2">
            <p className="text-[10px] font-mono-tech uppercase tracking-widest text-muted-foreground">
              Routed directly to the SySoft CRM.
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="px-5 py-2.5 bg-gradient-cta text-primary-foreground text-sm font-semibold rounded-full shadow-[0_0_24px_-4px_oklch(0.7_0.2_260/60%)] hover:opacity-95 transition-opacity disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Submit inquiry →"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}