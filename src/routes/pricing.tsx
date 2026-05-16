import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { waLink } from "@/lib/contact";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — TwinStack" },
      { name: "description", content: "Simple project-based pricing for Rishikesh businesses. Basic, Standard and Full Package — no retainers." },
      { property: "og:title", content: "Pricing — TwinStack" },
      { property: "og:description", content: "Three honest tiers. One-time fee. You own everything." },
    ],
  }),
  component: PricingPage,
});

const TIERS = [
  {
    name: "Basic",
    tagline: "Get found online.",
    features: [
      "Single-page website (5 sections)",
      "Mobile-friendly & fast",
      "Contact form + WhatsApp button",
      "Domain & hosting setup",
    ],
    featured: false,
  },
  {
    name: "Standard",
    tagline: "Most cafés & studios pick this.",
    features: [
      "Multi-page website (up to 6 pages)",
      "Photo gallery + menu/services",
      "Google Business Profile setup",
      "Basic Analytics setup",
      "Instagram bio + 9-post template",
    ],
    featured: true,
  },
  {
    name: "Full Package",
    tagline: "Everything end-to-end.",
    features: [
      "Custom website (unlimited pages)",
      "Booking widget (tables/rooms/sessions)",
      "Google Business + reviews strategy",
      "Instagram setup + 30-day plan",
      "Analytics + monthly snapshot email",
      "1 month free tweaks",
    ],
    featured: false,
  },
];

function PricingPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-8 md:pt-24">
        <SectionHeading
          eyebrow="Pricing"
          title="Honest, one-time project pricing."
          subtitle="We keep prices off the page because every business is different — but we promise to be straight with you in person. No retainers, no surprise invoices."
          align="center"
        />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          {TIERS.map(t => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                t.featured
                  ? "border-primary bg-card shadow-[var(--shadow-lift)] md:-translate-y-2"
                  : "border-border bg-card shadow-[var(--shadow-soft)]"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most picked
                </span>
              )}
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t.name}</p>
              <p className="mt-2 text-base text-muted-foreground">{t.tagline}</p>
              <div className="my-6 h-px bg-border" />
              <ul className="space-y-3 text-sm">
                {t.features.map(f => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-7" variant={t.featured ? "default" : "outline"}>
                <a href={waLink(`Hi! I'm interested in the ${t.name} package.`)} target="_blank" rel="noreferrer">
                  Let's talk <MessageCircle className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-10 text-center text-sm text-muted-foreground">
        Domain & hosting costs (~₹1,500/yr) are paid directly to the provider in your name — we don't mark them up.
      </section>
    </>
  );
}
