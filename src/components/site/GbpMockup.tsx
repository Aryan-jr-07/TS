import { Star, MapPin, Phone, Clock, Globe, Camera } from "lucide-react";
import cafeHero from "@/assets/sample-cafe-hero.jpg";
import food from "@/assets/sample-food.jpg";
import room from "@/assets/sample-room.jpg";

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5 text-[#fbbc04]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5" fill={i < n ? "#fbbc04" : "none"} />
      ))}
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-white shadow-[var(--shadow-soft)] font-[Poppins]">
      {children}
    </div>
  );
}

export function GbpMockup() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Empty */}
      <Card>
        <div className="grid h-40 place-items-center bg-secondary text-muted-foreground text-xs">
          <div className="flex flex-col items-center gap-2">
            <Camera className="h-5 w-5" />
            No photos yet
          </div>
        </div>
        <div className="space-y-3 p-5">
          <div>
            <p className="text-base font-semibold text-foreground">Local Café Rishikesh</p>
            <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
              <Stars n={0} />
              <span>No reviews</span>
            </div>
          </div>
          <div className="space-y-2 text-xs text-muted-foreground">
            <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Address not set</p>
            <p className="flex items-center gap-2"><Clock className="h-3.5 w-3.5" /> Hours not set</p>
            <p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> No phone listed</p>
            <p className="flex items-center gap-2"><Globe className="h-3.5 w-3.5" /> No website</p>
          </div>
          <span className="inline-block rounded-full bg-destructive/10 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-destructive">
            Unoptimised
          </span>
        </div>
      </Card>

      {/* Optimised */}
      <Card>
        <div className="grid h-40 grid-cols-3 gap-0.5">
          <img src={cafeHero} alt="" className="h-full w-full object-cover" loading="lazy" />
          <img src={food} alt="" className="h-full w-full object-cover" loading="lazy" />
          <img src={room} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="space-y-3 p-5">
          <div>
            <p className="text-base font-semibold text-foreground">Ganga Leaf · Café & Stay</p>
            <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
              <Stars n={5} />
              <span className="font-medium text-foreground">4.8</span>
              <span>(124)</span>
              <span>·</span>
              <span>Café · Guesthouse</span>
            </div>
          </div>
          <div className="space-y-2 text-xs text-muted-foreground">
            <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Tapovan, near Laxman Jhula, Rishikesh</p>
            <p className="flex items-center gap-2"><Clock className="h-3.5 w-3.5" /><span className="text-[color:var(--whatsapp)] font-medium">Open</span> · Closes 10pm</p>
            <p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> +91 98765 43210</p>
            <p className="flex items-center gap-2"><Globe className="h-3.5 w-3.5" /> gangaleaf.in</p>
          </div>
          <div className="rounded-md bg-secondary/60 p-3 text-xs">
            <p className="font-medium text-foreground">"Best chai with a view in Rishikesh. Sweet owners, cozy rooms."</p>
            <p className="mt-1 text-muted-foreground">— Priya M., 2 weeks ago</p>
          </div>
          <span className="inline-block rounded-full bg-primary/10 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-primary">
            Optimised
          </span>
        </div>
      </Card>
    </div>
  );
}
