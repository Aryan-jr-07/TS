import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, MapPin, Languages, Clock, Wallet, Heart, CalendarCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CONTACT, waLink } from "@/lib/contact";
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
            <a href={CONTACT.calendly} target="_blank" rel="noreferrer">
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
              <a href={CONTACT.calendly} target="_blank" rel="noreferrer">
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

function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <TrustSection />
      <WhyUs />
      <ContactTeaser />
    </>
  );
}
