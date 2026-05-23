import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, MessageCircle, Calculator, Sparkles, ChevronRight, HelpCircle } from "lucide-react";
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

const BUSINESS_BASES = [
  { id: "cafe", name: "Café / Restaurant", price: 4999, description: "Includes dynamic digital menu, about section and direct WhatsApp ordering." },
  { id: "yoga", name: "Yoga & Wellness Studio", price: 5499, description: "Includes session timetable, trainer profiles and registration flow." },
  { id: "stay", name: "Hotel / Homestay / Camp", price: 6999, description: "Includes photo galleries, room/tent pricing grid and booking links." },
  { id: "adventure", name: "Adventure & Tour Operator", price: 7499, description: "Includes rafting/trekking packages, safety badges and itineraries." }
];

const ADDONS = [
  { id: "gbp", name: "Google Business (GBP) Setup & SEO", price: 2500, description: "Get listed in Local 3-Pack search results so customers find you on Maps." },
  { id: "booking", name: "Custom WhatsApp Booking Integration", price: 3000, description: "Interactive calendar widget for booking directly through WhatsApp." },
  { id: "instagram", name: "Instagram Makeover & Templates", price: 2500, description: "9 content templates, high-res highlight covers and profile audit." },
  { id: "analytics", name: "SEO Dashboard & Analytics Tracker", price: 1500, description: "Track your website visitors, search keywords and monthly summary emails." },
  { id: "languages", name: "Hindi + English Dual Language Support", price: 2000, description: "Allow customers to switch seamlessly between Hindi and English." },
  { id: "hosting", name: "Domain & Setup Assistance", price: 1500, description: "Domain registration and hosting setup in your name (excludes provider fee)." }
];

function PricingPage() {
  const [selectedBase, setSelectedBase] = useState("cafe");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["gbp"]);

  const baseDetails = BUSINESS_BASES.find(b => b.id === selectedBase) || BUSINESS_BASES[0];
  
  const handleToggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = ADDONS.find(a => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const totalEstimate = baseDetails.price + addonsTotal;

  // Build WhatsApp pre-filled text
  const composeCalculatorText = () => {
    const selectedAddonNames = selectedAddons
      .map(id => {
        const addon = ADDONS.find(a => a.id === id);
        return addon ? `  - ${addon.name} (₹${addon.price})` : "";
      })
      .filter(Boolean)
      .join("\n");

    const message = [
      `Hi TwinStack! I built a custom quote estimation for my business:`,
      `*Business Type*: ${baseDetails.name} (Base: ₹${baseDetails.price})`,
      selectedAddonNames ? `*Add-ons selected*:\n${selectedAddonNames}` : "*No Add-ons selected*",
      `*Estimated Total*: ₹${totalEstimate}`,
      `Let's discuss my project!`
    ].join("\n");

    return waLink(message);
  };

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-8 md:pt-24">
        <SectionHeading
          eyebrow="Pricing"
          title="Honest, one-time project pricing."
          subtitle="We believe in simple, transparent rates with zero retainers or surprise invoices. Pick a standard package or calculate your custom quote below."
          align="center"
        />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-6">
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
              <Button asChild className="mt-7 font-semibold" variant={t.featured ? "default" : "outline"}>
                <a href={waLink(`Hi! I'm interested in the ${t.name} package.`)} target="_blank" rel="noreferrer">
                  Let's talk <MessageCircle className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Calculator Section */}
      <section className="mx-auto max-w-6xl px-5 py-16 scroll-mt-20">
        <div className="border-t border-border pt-16">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Calculator className="h-3.5 w-3.5" /> Quote Builder
            </span>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Calculate your custom quote.
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
              Select your business niche and toggles. No agency markups, pay only for what you need.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-start">
            {/* Left: Options */}
            <div className="space-y-8">
              {/* Niche Selector */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">1. Select Your Business Type</label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {BUSINESS_BASES.map(b => (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBase(b.id)}
                      className={`flex flex-col text-left rounded-xl border p-4 transition-all hover:bg-secondary/40 ${
                        selectedBase === b.id
                          ? "border-primary bg-primary/5 ring-1 ring-primary"
                          : "border-border bg-card"
                      }`}
                    >
                      <span className="font-semibold text-sm text-foreground">{b.name}</span>
                      <span className="text-[10px] text-muted-foreground mt-1 leading-normal">{b.description}</span>
                      <span className="font-semibold text-xs text-primary mt-3">₹{b.price.toLocaleString()} Base</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-ons Checklist */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">2. Add Extra Features</label>
                <div className="space-y-2">
                  {ADDONS.map(a => {
                    const isChecked = selectedAddons.includes(a.id);
                    return (
                      <div
                        key={a.id}
                        onClick={() => handleToggleAddon(a.id)}
                        className={`flex items-start gap-4 rounded-xl border p-4 cursor-pointer transition-all hover:bg-secondary/40 ${
                          isChecked
                            ? "border-primary bg-primary/5 ring-1 ring-primary"
                            : "border-border bg-card"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}} // handled by parent div click
                          className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary shrink-0"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <span className="text-xs font-semibold text-foreground leading-none">{a.name}</span>
                            <span className="text-xs font-bold text-primary leading-none ml-2">+₹{a.price.toLocaleString()}</span>
                          </div>
                          <p className="text-[10px] text-muted-foreground mt-1.5 leading-normal">{a.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Sticky Summary Card */}
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-lift)] space-y-6">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Sparkles className="h-4 w-4" />
                </span>
                <span className="font-bold text-sm text-foreground">Custom Quote Estimate</span>
              </div>

              <div className="space-y-3 text-xs border-y border-border/80 py-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{baseDetails.name} Base</span>
                  <span className="font-medium text-foreground">₹{baseDetails.price.toLocaleString()}</span>
                </div>
                {selectedAddons.map(id => {
                  const addon = ADDONS.find(a => a.id === id);
                  if (!addon) return null;
                  return (
                    <div key={id} className="flex justify-between">
                      <span className="text-muted-foreground">{addon.name}</span>
                      <span className="font-medium text-foreground">+₹{addon.price.toLocaleString()}</span>
                    </div>
                  );
                })}
                {selectedAddons.length === 0 && (
                  <div className="text-center text-muted-foreground text-[11px] py-1">
                    No extra features selected
                  </div>
                )}
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-sm font-semibold text-foreground">Total Estimate</span>
                <div className="text-right">
                  <span className="text-2xl font-black text-foreground">₹{totalEstimate.toLocaleString()}</span>
                  <p className="text-[10px] text-muted-foreground">One-time payment</p>
                </div>
              </div>

              <Button asChild className="w-full bg-[color:var(--whatsapp)] hover:opacity-90 font-bold py-5 text-xs text-white">
                <a href={composeCalculatorText()} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-1 h-4 w-4 text-white" /> Get Quote on WhatsApp
                </a>
              </Button>

              <div className="text-center text-[10px] text-muted-foreground space-y-1">
                <p>⚡ Setup is fully owned by you once completed.</p>
                <p>₹ Domain/hosting (~₹1,500/year) paid directly at cost.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-6 text-center text-xs text-muted-foreground">
        Have questions about individual add-ons? Let's grab a cup of chai in Rishikesh to talk about it!
      </section>
    </>
  );
}
