import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/components/site/services";
import { ServiceCard } from "@/components/site/ServiceCard";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — TwinStack" },
      { name: "description", content: "Websites, Google Business Profiles, online booking, Instagram setup and analytics for Rishikesh businesses." },
      { property: "og:title", content: "Services — TwinStack" },
      { property: "og:description", content: "Six focused digital services for local Rishikesh cafés, hotels, yoga studios and shops." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-10 md:pt-24">
        <SectionHeading
          eyebrow="Our Services"
          title="What we can build for you."
          subtitle="Six things we do really well — each priced as a one-time project. Tap any card to see a real sample of the work."
        />
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(s => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="rounded-2xl border border-border bg-secondary/40 p-8 text-center">
          <p className="text-lg font-medium text-foreground">Not sure what you need?</p>
          <p className="mt-1 text-sm text-muted-foreground">We'll come visit your business, look at what's missing, and recommend the smallest thing that'll move the needle.</p>
          <Button asChild className="mt-5">
            <Link to="/contact">Book a free visit <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
