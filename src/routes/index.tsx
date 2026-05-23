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

function LocalSeoCheckup() {
  const [bizName, setBizName] = useState("");
  const [bizNiche, setBizNiche] = useState("cafe");
  const [isScanning, setIsScanning] = useState(false);
  const [scanIndex, setScanIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const scanMessages = [
    "Searching Google Maps database in Rishikesh...",
    "Validating business name alignment...",
    "Checking website link availability...",
    "Scanning user reviews & rating density...",
    "Estimating mobile load speed performance...",
    "Analyzing competitor keyword rankings..."
  ];

  useEffect(() => {
    let interval: any;
    if (isScanning) {
      interval = setInterval(() => {
        setScanIndex(prev => {
          if (prev >= scanMessages.length - 1) {
            clearInterval(interval);
            setIsScanning(false);
            setShowResults(true);
            return prev;
          }
          return prev + 1;
        });
      }, 700);
    }
    return () => clearInterval(interval);
  }, [isScanning]);

  const handleStartScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bizName.trim()) return;
    setIsScanning(true);
    setScanIndex(0);
    setShowResults(false);
  };

  const getWhatsappFixLink = () => {
    const text = `Hi TwinStack! I ran a Local SEO checkup for my business: "${bizName}" (${bizNiche}). I got a score of 62/100 and would like to fix the issues listed.`;
    return waLink(text);
  };

  return (
    <section className="mx-auto max-w-4xl px-5 py-16 scroll-mt-20">
      <div className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-[var(--shadow-soft)]">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="h-3 w-3" /> Audit Tool
          </span>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Free Local SEO Checkup
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Find out why your business is hidden on Google Maps and how many bookings you are losing to competitors.
          </p>
        </div>

        {!isScanning && !showResults && (
          <form onSubmit={handleStartScan} className="space-y-4 max-w-md mx-auto">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-foreground uppercase tracking-wider">Business Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Ganga view cafe, Rishikesh Adventure..."
                value={bizName}
                onChange={e => setBizName(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-foreground uppercase tracking-wider">Business Niche</label>
              <select
                value={bizNiche}
                onChange={e => setBizNiche(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
              >
                <option value="cafe">Café / Restaurant</option>
                <option value="stay">Hotel / Guesthouse / Homestay</option>
                <option value="yoga">Yoga / Wellness Studio</option>
                <option value="adventure">Rafting / Camping Operator</option>
              </select>
            </div>

            <Button type="submit" className="w-full font-bold py-6 text-sm">
              Scan My Listing <Search className="ml-1 h-4 w-4" />
            </Button>
          </form>
        )}

        {isScanning && (
          <div className="flex flex-col items-center justify-center py-10 space-y-6 text-center max-w-sm mx-auto">
            <Loader2 className="h-10 w-10 text-primary animate-spin" />
            <div className="space-y-2 w-full">
              <p className="font-semibold text-sm text-foreground animate-pulse h-5">
                {scanMessages[scanIndex]}
              </p>
              <div className="w-full bg-secondary/50 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-primary h-full transition-all duration-700" 
                  style={{ width: `${((scanIndex + 1) / scanMessages.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {showResults && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border/80 pb-6">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Report for</p>
                <h4 className="text-xl font-bold text-foreground mt-1">{bizName}</h4>
                <p className="text-xs text-muted-foreground capitalize mt-0.5">{bizNiche} Category · Rishikesh Area</p>
              </div>
              <div className="flex items-center gap-4 bg-secondary/30 border border-border p-4 rounded-2xl">
                <div className="text-center">
                  <span className="text-3xl font-black text-amber-500">62/100</span>
                  <p className="text-[10px] text-muted-foreground font-semibold mt-1">SEO Health Score</p>
                </div>
                <div className="h-10 w-px bg-border" />
                <div>
                  <span className="inline-flex items-center gap-1 rounded bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-500">
                    Needs Attention
                  </span>
                  <p className="text-[10px] text-muted-foreground mt-1 leading-tight max-w-[120px]">
                    Losing ~40% of potential direct bookings
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider">Vulnerabilities Identified</p>
              
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-4 flex gap-3">
                  <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-foreground">Missing Primary Website Link</h5>
                    <p className="text-[10px] text-muted-foreground mt-1">Google Maps profile has no direct website URL. Customers cannot check menus/photos, resulting in booking drop-offs.</p>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-4 flex gap-3">
                  <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-foreground">Low Review Response Rate</h5>
                    <p className="text-[10px] text-muted-foreground mt-1">Under 15% of customer reviews are answered. Google algorithms deprioritize profiles that ignore local review interaction.</p>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-4 flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-foreground">Slow Mobile Page Loading</h5>
                    <p className="text-[10px] text-muted-foreground mt-1">Competitors loaded ~2x faster on mobile. Slow page loads cause 30%+ visitors to click back immediately.</p>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-4 flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-foreground">Listing Verified & Active</h5>
                    <p className="text-[10px] text-muted-foreground mt-1">Your Google listing is verified and matches physical GPS directions in Tapovan. Base parameters are intact.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <Button asChild className="flex-1 bg-[color:var(--whatsapp)] hover:opacity-90 font-bold py-6 text-xs text-white">
                <a href={getWhatsappFixLink()} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-1 h-4 w-4 text-white" /> Fix These Issues on WhatsApp
                </a>
              </Button>
              <Button onClick={() => setShowResults(false)} variant="outline" className="font-semibold py-6 text-xs">
                Scan Another Business
              </Button>
            </div>
          </div>
        )}
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
      <LocalSeoCheckup />
      <WhyUs />
      <ContactTeaser />
    </>
  );
}
