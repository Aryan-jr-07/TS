import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, MessageCircle, MapPin, Languages, Clock, Wallet, Heart, CalendarCheck, Sparkles, Search, Loader2, AlertTriangle, CheckCircle2, XCircle, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CONTACT, openCalendlyPopup, waLink } from "@/lib/contact";
import heroImg from "@/assets/hero-rishikesh.jpg";
import galleryImg from "@/assets/sample-gallery.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TwinStack — We help Rishikesh businesses grow online" },
      { name: "description", content: "Websites, Google listings, bookings, Instagram and analytics for local Rishikesh cafés, hotels and yoga studios. Fast turnaround, no agency fees." },
      { property: "og:title", content: "TwinStack — We help Rishikesh businesses grow online" },
      { property: "og:description", content: "Local digital services for Rishikesh businesses. From websites to Google listings — we handle everything digital." },
    ],
  }),
  component: Home,
});

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Rishikesh river view" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background/0" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Based in Rishikesh · Open this summer
        </div>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl text-white">
          More bookings, better brand, less digital stress.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg text-white">
          We help Rishikesh businesses look premium online and convert views into customers.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={CONTACT.calendly} onClick={openCalendlyPopup}>
              Book a free meeting <CalendarCheck className="ml-1 h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-[color:var(--whatsapp)] text-[color:var(--whatsapp)] hover:bg-[color:var(--whatsapp)]/5 hover:text-[color:var(--whatsapp)]">
            <a href={waLink()} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-1 h-4 w-4" /> Chat on WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost" className="text-white">
            <Link to="/samples">Explore services <ArrowRight className="ml-1 h-4 w-4 text-white" /></Link>
          </Button>
        </div>

        <div className="mt-14 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            ["3–5 days", "for a full website"],
            ["0", "agency retainers"],
            ["100%", "yours to keep"],
            ["हिंदी + EN", "we speak both"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="text-2xl font-semibold text-foreground text-white">{k}</p>
              <p className="text-xs text-muted-foreground text-white">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title="Two CS students spending the summer in Rishikesh."
            subtitle="We grew up loving this town — its cafés, its riverside guesthouses, its yoga studios and adventure camps. Most have amazing experiences to offer, but their digital presence is stuck in 2014. We're here to fix that."
          />
          <div className="mt-6 flex flex-wrap gap-2">
            {["CS Students", "Real People", "Summer in Rishikesh", "No Agency Fluff"].map(t => (
              <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{t}</span>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src={galleryImg} alt="Rishikesh street and local business area" className="h-72 w-full rounded-2xl object-cover shadow-[var(--shadow-soft)] md:h-80" loading="lazy" decoding="async" />
          <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/30 bg-black/45 p-4 backdrop-blur-sm">
            <p className="text-sm leading-relaxed text-white/90">
              "We're not an agency. There's just two of us, working out of a café in Tapovan with our laptops. We meet you in person, build what you need in a few days, hand over everything, and stay around if you need tweaks."
            </p>
            <p className="mt-3 text-sm font-medium text-white">— TwinStack</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const WHY = [
  { icon: MapPin, title: "Local & in person", text: "We meet you face to face. No call centres, no time zones." },
  { icon: Wallet, title: "No agency fees", text: "One-time project pricing. No retainers, no surprise invoices." },
  { icon: Clock, title: "Fast turnaround", text: "Full website live in 3–5 days. Most fixes in 24 hours." },
  { icon: Heart, title: "You own everything", text: "Your domain, your code, your accounts. We hand over the keys." },
  { icon: Languages, title: "हिंदी aur English", text: "Comfortable in both. We talk like neighbours, not vendors." },
];

function WhyUs() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="Why Us" title="Local. Honest. Fast." align="center" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {WHY.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <Icon className="h-5 w-5 text-primary" />
            <p className="mt-4 font-semibold text-foreground">{title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TrustSection() {
  const companies = ["IIT Roorkee", "Allen Digital", "Newton School of Technology", "pakhsa.in"];
  return (
    <section className="mx-auto max-w-6xl px-5 py-8 md:py-12">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-7 shadow-[var(--shadow-soft)] md:px-10">
        <img src={heroImg} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.08]" loading="lazy" decoding="async" />
        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary">
              <Sparkles className="h-4 w-4" /> Trusted Experience
            </p>
            <p className="mt-2 text-lg font-semibold text-foreground">Worked with teams from:</p>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {companies.map((company) => (
              <span key={company} className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-10">
      <div className="overflow-hidden rounded-3xl bg-primary px-8 py-14 text-primary-foreground md:px-14">
        <div className="grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] opacity-80">Let's talk</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              Quick 15-min call. No pressure.
            </h2>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <a href={CONTACT.calendly} onClick={openCalendlyPopup}>
                <CalendarCheck className="mr-1 h-4 w-4" /> Book on Calendly
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <a href={waLink()} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-1 h-4 w-4" /> WhatsApp Us
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
              <Link to="/contact">All contact options <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface AuditedBusiness {
  name: string;
  domain: string;
  niche: string;
  nicheEmoji: string;
  flawedScore: number;
  flawedIssues: string[];
  optimizedScore: number;
  optimizedSolutions: string[];
}

const AUDITED_BUSINESSES: AuditedBusiness[] = [
  {
    name: "Secret Garden Cafe",
    domain: "secretgardencaferishikesh.com",
    niche: "Café & Restaurant",
    nicheEmoji: "☕",
    flawedScore: 64,
    flawedIssues: [
      "Mobile load speed: 4.8 seconds (causes 40%+ bounce rate)",
      "Uncompressed food and cafe images (heavy JPEG formats)",
      "Missing Google Local Schema markup (hidden from Maps)",
      "Broken or outdated digital menu PDF links"
    ],
    optimizedScore: 98,
    optimizedSolutions: [
      "Ultra-fast mobile load: 0.8s (static generation)",
      "WebP compressed images with modern lazy loading",
      "Full JSON-LD structured schema indexed by Google Map crawlers",
      "Interactive digital menus with seamless search engine indexing"
    ]
  },
  {
    name: "Rafting Rishikesh Adventure",
    domain: "riverraftingrishikesh.com",
    niche: "Adventure Tours & Operator",
    nicheEmoji: "🚣",
    flawedScore: 48,
    flawedIssues: [
      "No H1 semantic tag on home page (hurts primary keyword rank)",
      "Unresponsive booking table layout (unusable on mobile screens)",
      "Zero alt tags on activity images (invisible in Google Images)",
      "Unsecure HTTP setup missing SSL certification"
    ],
    optimizedScore: 95,
    optimizedSolutions: [
      "Perfect semantic heading structure & key SEO terms layout",
      "Responsive, mobile-friendly booking CTA and buttons",
      "Descriptive, keyword-rich image alt tags for local searches",
      "Secure HTTPS config with free auto-renewing SSL out-of-the-box"
    ]
  },
  {
    name: "Tapovan Yoga Shala",
    domain: "rishikeshyogaassociation.com",
    niche: "Yoga & Wellness Center",
    nicheEmoji: "🧘",
    flawedScore: 59,
    flawedIssues: [
      "Slow initial server response (TTFB over 1.8 seconds)",
      "Dynamic class timetable schedule slows down page load",
      "Duplicate pages & missing canonical URL tags",
      "Low Core Web Vitals score (fails mobile search ranking)"
    ],
    optimizedScore: 97,
    optimizedSolutions: [
      "Static edge delivery network (TTFB under 0.1 seconds)",
      "Optimized, fast-rendering static class timeline grid",
      "Properly configured canonical headers for clean indexing",
      "Perfect 100/100 Lighthouse performance and Core Web Vitals"
    ]
  }
];

function ScoreBar({ score, color, animate }: { score: number; color: "red" | "emerald"; animate: boolean }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (animate) {
      setWidth(0);
      const t = setTimeout(() => setWidth(score), 80);
      return () => clearTimeout(t);
    }
  }, [score, animate]);
  return (
    <div className="w-full h-3.5 rounded-full bg-secondary overflow-hidden border border-border">
      <div
        className={`h-full rounded-full transition-all duration-700 ease-out ${
          color === "red"
            ? "bg-gradient-to-r from-red-600 to-red-400"
            : "bg-gradient-to-r from-emerald-600 to-emerald-400"
        }`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

function LocalSeoShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);
  const activeBiz = AUDITED_BUSINESSES[activeTab];
  const gain = activeBiz.optimizedScore - activeBiz.flawedScore;

  const handleTab = (idx: number) => {
    setActiveTab(idx);
    setAnimateKey(k => k + 1);
  };

  const getWhatsappFixLink = () => {
    const text = `Hi TwinStack! I saw your SEO audit for "${activeBiz.name}" and I'd love to get a free checkup for my own business website in Rishikesh.`;
    return waLink(text);
  };

  return (
    <section className="mx-auto max-w-5xl px-5 py-16 scroll-mt-20">
      {/* Attention hook above the card */}
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4">
          <Sparkles className="h-3 w-3" /> Real Rishikesh Business Audits
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl leading-tight">
          Your competitors are <span className="text-primary">already ranking.</span>
          <br />
          <span className="text-muted-foreground font-medium text-2xl md:text-3xl">Is your website holding you back?</span>
        </h2>
        <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
          We audited real Rishikesh businesses. Every single one had critical SEO issues costing them daily bookings and visibility. See the gap — and how we close it.
        </p>
      </div>

      <div className="rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] overflow-hidden">

        {/* Business selector tabs */}
        <div className="flex border-b border-border">
          {AUDITED_BUSINESSES.map((biz, idx) => (
            <button
              key={biz.name}
              onClick={() => handleTab(idx)}
              className={`flex-1 px-3 py-4 text-xs font-semibold transition-all border-b-2 ${
                activeTab === idx
                  ? "border-primary text-primary bg-primary/5"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/30"
              }`}
            >
              <span className="block text-base mb-0.5">{biz.nicheEmoji}</span>
              <span className="hidden sm:block">{biz.name}</span>
              <span className="block sm:hidden text-[10px] leading-tight">{biz.niche}</span>
            </button>
          ))}
        </div>

        {/* Score impact banner */}
        <div className="px-6 py-6 md:px-10 bg-gradient-to-r from-red-500/10 via-background to-emerald-500/10 border-b-2 border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground font-mono">{activeBiz.nicheEmoji} {activeBiz.niche} · {activeBiz.domain}</p>
            <p className="mt-1 text-lg font-extrabold text-foreground">{activeBiz.name}</p>
          </div>
          <div className="flex items-center gap-5 shrink-0">
            <div className="text-center bg-red-500/10 border border-red-500/30 rounded-2xl px-5 py-3">
              <p className="text-4xl font-black text-red-500">{activeBiz.flawedScore}%</p>
              <p className="text-[10px] text-red-400 font-bold uppercase tracking-wider mt-0.5">Current Score</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-1.5 shadow-lg">
                <TrendingUp className="h-3.5 w-3.5 text-white" />
                <span className="text-sm font-black text-white">+{gain}%</span>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="text-center bg-emerald-500/10 border border-emerald-500/30 rounded-2xl px-5 py-3">
              <p className="text-4xl font-black text-emerald-500">{activeBiz.optimizedScore}%</p>
              <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-wider mt-0.5">With TwinStack</p>
            </div>
          </div>
        </div>

        {/* Side-by-side paired issues and fixes */}
        <div className="p-6 md:p-10">
          {/* Column headers */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-2.5">
              <XCircle className="h-4 w-4 text-red-500 shrink-0" />
              <span className="text-xs font-bold uppercase tracking-widest text-red-500">What's broken now</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-4 py-2.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-500">How we fix it</span>
            </div>
          </div>

          <div className="space-y-3">
            {activeBiz.flawedIssues.map((issue, i) => (
              <div key={i} className="grid grid-cols-2 gap-3">
                <div className="flex gap-3 items-start rounded-xl border border-red-500/40 bg-red-500/8 px-4 py-3.5">
                  <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-foreground leading-snug font-medium">{issue}</span>
                </div>
                <div className="flex gap-3 items-start rounded-xl border border-emerald-500/40 bg-emerald-500/8 px-4 py-3.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-foreground leading-snug font-medium">{activeBiz.optimizedSolutions[i]}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Score bars */}
          <div className="mt-8 space-y-4 rounded-2xl border border-border bg-secondary/30 p-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">SEO Score Comparison</p>
            <div className="flex items-center gap-4">
              <span className="w-32 text-xs text-right text-red-500 font-bold shrink-0">Before: {activeBiz.flawedScore}%</span>
              <ScoreBar key={`red-${animateKey}`} score={activeBiz.flawedScore} color="red" animate={true} />
            </div>
            <div className="flex items-center gap-4">
              <span className="w-32 text-xs text-right text-emerald-500 font-bold shrink-0">After: {activeBiz.optimizedScore}%</span>
              <ScoreBar key={`green-${animateKey}`} score={activeBiz.optimizedScore} color="emerald" animate={true} />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="px-6 pb-8 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-5 border-t border-border pt-6">
          <div>
            <p className="text-sm font-bold text-foreground">Is your website making these same mistakes?</p>
            <p className="text-xs text-muted-foreground mt-0.5">Get a free audit — we'll show you exactly where you're losing customers.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Button asChild className="bg-[color:var(--whatsapp)] hover:opacity-90 font-bold text-xs text-white px-5">
              <a href={getWhatsappFixLink()} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-1.5 h-4 w-4" /> Free Audit on WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" className="font-bold text-xs px-5">
              <a href={CONTACT.calendly} onClick={openCalendlyPopup}>
                <CalendarCheck className="mr-1.5 h-4 w-4 text-primary" /> Book a Call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <TrustSection />
      <LocalSeoShowcase />
      <WhyUs />
      <ContactTeaser />
    </>
  );
}
