import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Instagram, Mail, MapPin, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CONTACT, openCalendlyPopup, waLink } from "@/lib/contact";
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
  const [businessName, setBusinessName] = useState("");
  const [msg, setMsg] = useState("");
  const composed = [
    "Hi TwinStack!",
    `Name: ${name || "-"}`,
    `Business: ${businessName || "-"}`,
    `Requirement: ${msg || "-"}`,
  ].join("\n");

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

        <div className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground">
            <Instagram className="h-5 w-5" />
          </div>
          <p className="mt-4 font-semibold">Instagram</p>
          <div className="mt-2.5 space-y-2">
            <a href="https://instagram.com/aryanjngde" target="_blank" rel="noreferrer"
              className="flex items-center justify-between rounded-xl bg-secondary/50 px-3.5 py-2.5 text-xs font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-all">
              <span>@aryanjngde</span>
              <span className="text-[10px] text-muted-foreground font-normal">Tech & Dev</span>
            </a>
            <a href="https://instagram.com/aryan_jr007" target="_blank" rel="noreferrer"
              className="flex items-center justify-between rounded-xl bg-secondary/50 px-3.5 py-2.5 text-xs font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-all">
              <span>@aryan_jr007</span>
              <span className="text-[10px] text-muted-foreground font-normal">Travel & Life</span>
            </a>
          </div>
        </div>

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
          <Input placeholder="Business name (optional)" value={businessName} onChange={e => setBusinessName(e.target.value)} />
          <Textarea
            placeholder="What kind of business? What would you like to fix or build?"
            rows={5}
            value={msg}
            onChange={e => setMsg(e.target.value)}
          />
          <div className="grid gap-2 sm:grid-cols-2">
            <Button asChild className="w-full bg-[color:var(--whatsapp)] hover:opacity-90">
              <a href={waLink(composed)} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-1 h-4 w-4" /> Send via WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <a href={CONTACT.calendly} onClick={openCalendlyPopup}>
                <CalendarCheck className="mr-1 h-4 w-4" /> Book a Meeting
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
