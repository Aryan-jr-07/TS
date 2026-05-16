import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "./services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-xl" aria-hidden>{service.emoji}</span>
      </div>
      <h3 className="mt-5 text-lg font-semibold leading-snug text-foreground">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>
      <Link
        to="/samples"
        hash={service.sampleAnchor.replace("#", "")}
        className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary transition group-hover:gap-2"
      >
        See Sample <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
