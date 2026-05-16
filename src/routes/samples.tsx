import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BrowserFrame } from "@/components/site/BrowserFrame";
import { SampleWebsite } from "@/components/site/SampleWebsite";
import { GbpMockup } from "@/components/site/GbpMockup";
import { BookingWidget } from "@/components/site/BookingWidget";
import { Heart, Bookmark, MessageCircle, Send, TrendingUp, Users, Eye } from "lucide-react";
import food from "@/assets/sample-food.jpg";
import yoga from "@/assets/sample-yoga.jpg";
import room from "@/assets/sample-room.jpg";
import gallery from "@/assets/sample-gallery.jpg";
import cafe from "@/assets/sample-cafe-hero.jpg";

export const Route = createFileRoute("/samples")({
  head: () => ({
    meta: [
      { title: "Sample Work — TwinStack" },
      { name: "description", content: "See exactly what we build: full sample website, Google Business Profile mockup, booking widget, Instagram grid and analytics dashboard." },
      { property: "og:title", content: "Sample Work — TwinStack" },
      { property: "og:description", content: "Real sample work for a fictional Rishikesh café & guesthouse — every section, every detail." },
    ],
  }),
  component: SamplesPage,
});

function InstagramGrid() {
  const imgs = [cafe, food, yoga, room, gallery, cafe, food, yoga, room];
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-3 border-b border-border p-4">
        <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-500 p-0.5">
          <img src={cafe} alt="" className="h-full w-full rounded-full border-2 border-card object-cover" />
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
        {imgs.map((src, i) => (
          <div key={i} className="relative aspect-square">
            <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
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
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-8 md:pt-24">
        <SectionHeading
          eyebrow="Sample Work"
          title="Mockups built for a fictional Rishikesh café & guesthouse."
          subtitle="We made these to show what's possible. Your project will be unique — but the polish, the speed, and the attention to detail will be the same."
        />
      </section>

      {/* Website */}
      <section id="website" className="mx-auto max-w-6xl px-5 py-12 scroll-mt-20">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">01 · Website</p>
            <h3 className="mt-2 text-2xl font-semibold md:text-3xl">Full sample website</h3>
          </div>
          <p className="hidden text-sm text-muted-foreground md:block">Scroll inside the frame ↓</p>
        </div>
        <BrowserFrame url="gangaleaf.in">
          <SampleWebsite />
        </BrowserFrame>
      </section>

      {/* GBP */}
      <section id="gbp" className="mx-auto max-w-6xl px-5 py-12 scroll-mt-20">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">02 · Google Business Profile</p>
          <h3 className="mt-2 text-2xl font-semibold md:text-3xl">Before & after — same business, very different results.</h3>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">An unoptimised listing barely shows up. A complete one shows on Google Maps the moment someone searches "café in Rishikesh".</p>
        </div>
        <GbpMockup />
      </section>

      {/* Booking */}
      <section id="booking" className="bg-secondary/40 py-16 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-8 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">03 · Booking widget</p>
            <h3 className="mt-2 text-2xl font-semibold md:text-3xl">Customers book in 20 seconds.</h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">Tables, rooms, yoga sessions — all from your website. Try it below.</p>
          </div>
          <BookingWidget />
        </div>
      </section>

      {/* Instagram */}
      <section id="instagram" className="mx-auto max-w-6xl px-5 py-16 scroll-mt-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">04 · Instagram</p>
            <h3 className="mt-2 text-2xl font-semibold md:text-3xl">A profile that looks loved, not abandoned.</h3>
            <p className="mt-3 text-sm text-muted-foreground">Consistent grid, real captions, a posting plan you can actually follow. We set up the look and hand you a calendar.</p>
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
            <p className="text-xs uppercase tracking-[0.2em] text-primary">05 · Analytics</p>
            <h3 className="mt-2 text-2xl font-semibold md:text-3xl">Finally — numbers you can read.</h3>
            <p className="mt-3 text-sm text-muted-foreground">Google Analytics set up cleanly, plus a simple monthly summary email so you know what's working without logging in.</p>
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
