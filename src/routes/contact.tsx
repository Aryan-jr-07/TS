import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Instagram, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CONTACT, waLink } from "@/lib/contact";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TwinStack" },
      { name: "description", content: "WhatsApp, Instagram or email us. Let's grab a chai in Rishikesh and talk about your business." },
      { property: "og:title", content: "Contact — TwinStack" },
      { property: "og:description", content: "Interested? Let's grab a chai and talk." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const composed = `Hi TwinStack! I'm ${name || "[name]"}. ${msg}`;

  return (
    <section className="mx-auto max-w-6xl px-5 pt-16 pb-24 md:pt-24">
      <SectionHeading
        eyebrow="Get in touch"
        title="Interested? Let's grab a chai and talk."
        subtitle="WhatsApp is fastest. If you'd rather, drop us a DM on Instagram or send an email. We reply same day."
        align="center"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <a href={waLink()} target="_blank" rel="noreferrer"
          className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--whatsapp)]/15 text-[color:var(--whatsapp)]">
            <MessageCircle className="h-5 w-5" />
          </div>
          <p className="mt-4 font-semibold">WhatsApp</p>
          <p className="text-sm text-muted-foreground">{CONTACT.whatsappDisplay}</p>
          <p className="mt-3 text-xs font-medium text-primary group-hover:underline">Open chat →</p>
        </a>

        <a href={`https://instagram.com/${CONTACT.instagram}`} target="_blank" rel="noreferrer"
          className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground">
            <Instagram className="h-5 w-5" />
          </div>
          <p className="mt-4 font-semibold">Instagram</p>
          <p className="text-sm text-muted-foreground">@{CONTACT.instagram}</p>
          <p className="mt-3 text-xs font-medium text-primary group-hover:underline">DM us →</p>
        </a>

        <a href={`mailto:${CONTACT.email}`}
          className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
            <Mail className="h-5 w-5" />
          </div>
          <p className="mt-4 font-semibold">Email</p>
          <p className="text-sm text-muted-foreground">{CONTACT.email}</p>
          <p className="mt-3 text-xs font-medium text-primary group-hover:underline">Write to us →</p>
        </a>
      </div>

      <div className="mt-10 grid gap-8 rounded-3xl border border-border bg-secondary/40 p-8 md:grid-cols-[1fr_1.2fr] md:p-12">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Or write below</p>
          <h3 className="mt-2 text-2xl font-semibold">Tell us about your business.</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            What you run, where you're based, and what you'd like to fix or build. We'll open WhatsApp with your message ready to send.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> Based in Tapovan, Rishikesh
          </div>
        </div>
        <div className="space-y-3 rounded-2xl bg-card p-6 shadow-[var(--shadow-soft)]">
          <Input placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
          <Input placeholder="Business name (optional)" />
          <Textarea
            placeholder="What kind of business? What would you like to fix or build?"
            rows={5}
            value={msg}
            onChange={e => setMsg(e.target.value)}
          />
          <Button asChild className="w-full bg-[color:var(--whatsapp)] hover:opacity-90">
            <a href={waLink(composed)} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-1 h-4 w-4" /> Send via WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
