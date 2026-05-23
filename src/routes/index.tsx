import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowRight, MessageCircle, MapPin, Languages, Clock, Wallet, Heart, CalendarCheck, Sparkles, Search, Loader2, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
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
    domain: "rishikeshraftingadventures.in",
    niche: "Adventure Tours & Operator",
    flawedScore: 58,
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
    domain: "tapovanyogashala.org",
    niche: "Yoga & Wellness Center",
    flawedScore: 61,
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

function LocalSeoShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const activeBiz = AUDITED_BUSINESSES[activeTab];

  const getWhatsappFixLink = () => {
    const text = `Hi TwinStack! I looked at the SEO audit showcase for "${activeBiz.name}". I'd like to check the SEO score of my own Rishikesh business website and see how you can fix it.`;
    return waLink(text);
  };

  return (
    <section className="mx-auto max-w-5xl px-5 py-16 scroll-mt-20">
      <div className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-[var(--shadow-soft)]">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="h-3 w-3" /> SEO Audit Showcase
          </span>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Rishikesh SEO Performance
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            See how typical local websites fail Google's latest search requirements, and how TwinStack upgrades them to an absolute A+ rank.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-border/80 pb-6">
          {AUDITED_BUSINESSES.map((biz, idx) => (
            <button
              key={biz.name}
              onClick={() => setActiveTab(idx)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold border transition-all ${
                activeTab === idx
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-secondary/40 text-muted-foreground border-border hover:bg-secondary/60 hover:text-foreground"
              }`}
            >
              {biz.name}
            </button>
          ))}
        </div>

        {/* Comparative Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Column - Current Issues */}
          <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.02] p-5 md:p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-flex items-center gap-1 rounded bg-red-500/10 px-2 py-0.5 text-[10px] font-semibold text-red-500">
                  Current Website
                </span>
                <p className="text-xs text-muted-foreground mt-1.5 font-mono">{activeBiz.domain}</p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black text-red-500">{activeBiz.flawedScore}%</span>
                <p className="text-[10px] text-muted-foreground mt-0.5 font-semibold">On-Page Score</p>
              </div>
            </div>

            <div className="border-t border-red-500/10 pt-4 space-y-3">
              <p className="text-xs font-bold text-foreground uppercase tracking-wider">SEO Flaws & Bottlenecks</p>
              <ul className="space-y-2.5">
                {activeBiz.flawedIssues.map((issue, idx) => (
                  <li key={idx} className="flex gap-2.5 text-xs text-muted-foreground items-start">
                    <XCircle className="h-4.5 w-4.5 text-red-500 shrink-0 mt-0.5" />
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - TwinStack Solution */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.02] p-5 md:p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-500">
                  TwinStack Optimized
                </span>
                <p className="text-xs text-muted-foreground mt-1.5 font-semibold text-emerald-600 dark:text-emerald-400">100% Owned Solution</p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black text-emerald-500">{activeBiz.optimizedScore}%</span>
                <p className="text-[10px] text-muted-foreground mt-0.5 font-semibold">SEO Score</p>
              </div>
            </div>

            <div className="border-t border-emerald-500/10 pt-4 space-y-3">
              <p className="text-xs font-bold text-foreground uppercase tracking-wider">TwinStack Solutions</p>
              <ul className="space-y-2.5">
                {activeBiz.optimizedSolutions.map((solution, idx) => (
                  <li key={idx} className="flex gap-2.5 text-xs text-muted-foreground items-start">
                    <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left sm:max-w-md">
            <h4 className="text-sm font-bold text-foreground">Want a custom SEO checkup for your business?</h4>
            <p className="text-xs text-muted-foreground mt-1">We can run a live search audit on your brand name right now to find out where you're losing traffic.</p>
          </div>
          <Button asChild className="w-full sm:w-auto bg-[color:var(--whatsapp)] hover:opacity-90 font-bold py-6 text-xs text-white px-6">
            <a href={getWhatsappFixLink()} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-1.5 h-4.5 w-4.5 text-white" /> Scan My Business Website
            </a>
          </Button>
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
