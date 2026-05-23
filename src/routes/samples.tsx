import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BrowserFrame } from "@/components/site/BrowserFrame";
import { SampleWebsite } from "@/components/site/SampleWebsite";
import { RaftingSample } from "@/components/site/RaftingSample";
import { GbpMockup } from "@/components/site/GbpMockup";
import { BookingWidget } from "@/components/site/BookingWidget";
import { SERVICES } from "@/components/site/services";
import { Heart, Bookmark, MessageCircle, Send, TrendingUp, Users, Eye, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, openCalendlyPopup, waLink } from "@/lib/contact";
import food from "@/assets/sample-food.jpg";
import yoga from "@/assets/sample-yoga.jpg";
import room from "@/assets/sample-room.jpg";
import gallery from "@/assets/sample-gallery.jpg";
import cafe from "@/assets/sample-cafe-hero.jpg";
import heroRishikesh from "@/assets/hero-rishikesh.jpg";
import smoke from "@/assets/smoke.jpg";
import landscape from "@/assets/landscape.jpg";

const SERVICE_BENEFITS: Record<string, string> = {
  website: "Build trust and get more direct bookings.",
  fix: "Fix drop-offs caused by slow or broken pages.",
  gbp: "Show up when nearby customers search on Google.",
  booking: "Convert interest instantly with fast booking flow.",
  instagram: "Look active and drive more DM inquiries.",
  analytics: "Track what works and improve every month.",
};

const SERVICE_SUMMARIES: Record<string, string> = {
  website: "Modern business website built for conversions.",
  fix: "Speed, mobile and content fixes for existing sites.",
  gbp: "Google listing optimization for local discovery.",
  booking: "Simple booking flow with WhatsApp integrations.",
  instagram: "Profile setup, content direction and consistency.",
  analytics: "Clean tracking and monthly performance insights.",
};

const INSTAGRAM_IMAGES = [cafe, food, yoga, room, gallery, cafe, food, yoga, room];

export const Route = createFileRoute("/samples")({
  head: () => ({
    meta: [
      { title: "Services in Action — TwinStack" },
      { name: "description", content: "See each service in action: website, Google Business Profile, booking widget, Instagram and analytics with clear business benefits." },
      { property: "og:title", content: "Services in Action — TwinStack" },
      { property: "og:description", content: "Visual walkthrough of TwinStack services and the benefit each one brings to your business." },
    ],
  }),
  component: SamplesPage,
});

function InstagramGrid() {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-3 border-b border-border p-4">
        <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-500 p-0.5">
          <img src={cafe} alt="Ganga Leaf profile" className="h-full w-full rounded-full border-2 border-card object-cover" loading="lazy" decoding="async" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold">gangaleaf</p>
          <p className="text-xs text-muted-foreground">Café & Stay · Tapovan, Rishikesh</p>
        </div>
        <button className="rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">Follow</button>
      </div>
      <div className="flex justify-around border-b border-border py-3 text-center text-xs">
        <div><p className="font-semibold text-base">126</p><p className="text-muted-foreground">Posts</p></div>
        <div><p className="font-semibold text-base">4.2k</p><p className="text-muted-foreground">Followers</p></div>
        <div><p className="font-semibold text-base">312</p><p className="text-muted-foreground">Following</p></div>
      </div>
      <div className="grid grid-cols-3 gap-0.5">
        {INSTAGRAM_IMAGES.map((src, i) => (
          <div key={i} className="relative aspect-square">
            <img src={src} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/0 text-xs font-semibold text-white opacity-0 transition hover:bg-black/40 hover:opacity-100">
              <span className="flex items-center gap-1"><Heart className="h-3 w-3" fill="white" /> 240</span>
              <span className="flex items-center gap-1"><MessageCircle className="h-3 w-3" fill="white" /> 18</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-border p-3 text-muted-foreground">
        <div className="flex gap-3"><Heart className="h-5 w-5" /><MessageCircle className="h-5 w-5" /><Send className="h-5 w-5" /></div>
        <Bookmark className="h-5 w-5" />
      </div>
    </div>
  );
}

function AnalyticsCard() {
  const bars = [30, 45, 38, 60, 52, 70, 85, 75, 90, 82, 95, 88];
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Last 30 days</p>
          <p className="mt-1 text-lg font-semibold">Visitors overview</p>
        </div>
        <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">+42%</span>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4">
        {[
          { icon: Users, label: "Visitors", value: "2,148" },
          { icon: Eye, label: "Page views", value: "5,902" },
          { icon: TrendingUp, label: "Bookings", value: "84" },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="rounded-lg bg-secondary/60 p-3">
            <Icon className="h-4 w-4 text-primary" />
            <p className="mt-2 text-lg font-semibold">{value}</p>
            <p className="text-xs text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex h-32 items-end gap-1.5">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-t-md bg-primary/80" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="mt-3 flex justify-between text-[10px] text-muted-foreground">
        <span>Apr 16</span><span>Apr 30</span><span>May 15</span>
      </div>
    </div>
  );
}

function SamplesPage() {
  const [activeSite, setActiveSite] = useState<"rafting" | "cafe">("rafting");
  
  return (
    <>
      {/* Website */}
      <section id="website" className="mx-auto max-w-6xl px-5 pt-16 pb-12 md:pt-24 scroll-mt-20">
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">01 · Service Part: Website</p>
            <h3 className="mt-2 text-2xl font-semibold md:text-3xl">Full sample website</h3>
            <p className="mt-2 text-sm text-muted-foreground">Benefit: Build trust quickly and turn visitors into direct bookings.</p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex flex-wrap rounded-lg bg-secondary/50 p-1 gap-1">
              <button
                onClick={() => setActiveSite("rafting")}
                className={`rounded-md px-4 py-1.5 text-sm font-medium transition-all ${
                  activeSite === "rafting" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Adventure Demo
              </button>
              <button
                onClick={() => setActiveSite("cafe")}
                className={`rounded-md px-4 py-1.5 text-sm font-medium transition-all ${
                  activeSite === "cafe" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Café Demo
              </button>
            </div>
            <p className="text-sm text-muted-foreground">Scroll inside the frame ↓</p>
          </div>
        </div>
        
        {activeSite === "rafting" ? (
          <BrowserFrame url="rishirafting.in">
            <RaftingSample />
          </BrowserFrame>
        ) : (
          <BrowserFrame url="gangaleaf.in">
            <SampleWebsite />
          </BrowserFrame>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8">
        <SectionHeading
          eyebrow="Services"
          title="Services in action."
          subtitle="Each section shows what we build and the benefit you get."
        />
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                to="/samples"
                hash={service.sampleAnchor}
                className="group rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-secondary px-2 py-1 text-xs font-semibold text-foreground">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-4 text-base font-semibold text-foreground">{service.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{SERVICE_SUMMARIES[service.slug]}</p>
                <p className="mt-3 text-sm font-medium text-foreground">{SERVICE_BENEFITS[service.slug]}</p>
              </Link>
            );
          })}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <a href={CONTACT.calendly} onClick={openCalendlyPopup}>
              <CalendarCheck className="mr-1 h-4 w-4" /> Book a free consult
            </a>
          </Button>
          <Button asChild variant="outline" className="border-[color:var(--whatsapp)] text-[color:var(--whatsapp)] hover:bg-[color:var(--whatsapp)]/5 hover:text-[color:var(--whatsapp)]">
            <a href={waLink()} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-1 h-4 w-4" /> Chat on WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* GBP */}
      <section id="gbp" className="mx-auto max-w-6xl px-5 py-16 scroll-mt-20">
        <div className="grid gap-8 lg:grid-cols-3 lg:items-start mb-10">
          <div className="lg:col-span-2 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              02 · Google Business Profile (GBP)
            </span>
            <h3 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Before & after — same business, very different results.
            </h3>
            <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
              An unoptimized listing is practically invisible online. An optimized listing secures prime real estate in the Local 3-Pack, placing your brand directly in front of active searchers exactly when they want to buy.
            </p>
          </div>
          <div className="rounded-2xl bg-secondary/40 p-6 border border-border/80 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground">Immediate Business Benefits</p>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                Dominates regional search keywords
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                Drives direct phone calls & maps directions
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                Converts cold traffic via review credibility
              </li>
            </ul>
          </div>
        </div>
        <GbpMockup />
      </section>

      {/* Booking */}
      <section id="booking" className="bg-secondary/40 py-16 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-8 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">03 · Service Part: Booking</p>
            <h3 className="mt-2 text-2xl font-semibold md:text-3xl">Customers book in 20 seconds.</h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">Tables, rooms, yoga sessions — all from your website. Try it below.</p>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">Benefit: Fewer missed calls, faster confirmations, more conversions.</p>
          </div>
          <BookingWidget />
        </div>
      </section>

      {/* Instagram */}
      <section id="instagram" className="mx-auto max-w-6xl px-5 py-16 scroll-mt-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">04 · Service Part: Instagram</p>
            <h3 className="mt-2 text-2xl font-semibold md:text-3xl">A profile that looks loved, not abandoned.</h3>
            <p className="mt-3 text-sm text-muted-foreground">Consistent grid, real captions, a posting plan you can actually follow. We set up the look and hand you a calendar.</p>
            <p className="mt-2 text-sm text-muted-foreground">Benefit: Better first impression and more DM inquiries.</p>
            <ul className="mt-5 space-y-2 text-sm">
              <li>· Bio + highlights rewrite</li>
              <li>· 9-post content batch + templates</li>
              <li>· Hashtag & location strategy</li>
              <li>· 30-day posting calendar</li>
            </ul>
          </div>
          <InstagramGrid />
        </div>
      </section>

      {/* Analytics */}
      <section id="analytics" className="mx-auto max-w-6xl px-5 py-16 scroll-mt-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <AnalyticsCard />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">05 · Service Part: Analytics</p>
            <h3 className="mt-2 text-2xl font-semibold md:text-3xl">Finally — numbers you can read.</h3>
            <p className="mt-3 text-sm text-muted-foreground">Google Analytics set up cleanly, plus a simple monthly summary email so you know what's working without logging in.</p>
            <p className="mt-2 text-sm text-muted-foreground">Benefit: Spend on what works, cut what doesn't.</p>
            <ul className="mt-5 space-y-2 text-sm">
              <li>· Visitors, sources, bookings tracking</li>
              <li>· Simple monthly snapshot</li>
              <li>· No dashboards you'll never open</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
