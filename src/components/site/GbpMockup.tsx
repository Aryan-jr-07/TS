import { 
  Star, MapPin, Phone, Clock, Globe, Camera, Search, 
  PhoneCall, Navigation, ExternalLink, ShieldCheck, 
  AlertTriangle, TrendingUp, Sparkles, Check, X 
} from "lucide-react";
import cafeHero from "@/assets/sample-cafe-hero.jpg";
import food from "@/assets/sample-food.jpg";
import room from "@/assets/sample-room.jpg";
import heroRishikesh from "@/assets/hero-rishikesh.jpg";
import landscape from "@/assets/landscape.jpg";
import sampleGallery from "@/assets/sample-gallery.jpg";
import sampleYoga from "@/assets/sample-yoga.jpg";

type BusinessKey = "cafe" | "rafting" | "yoga";

const BUSINESSES = {
  cafe: {
    label: "☕ Café & Stay",
    searchQuery: "best café in Rishikesh with a view",
    unoptimized: {
      name: "Local Café Rishikesh",
      rank: "42",
      badge: "Invisible to 85% of Customers",
      impact: "Result: ~0 Actions / Month",
    },
    optimized: {
      name: "Ganga Leaf · Café & Stay",
      stars: 4.8,
      reviewsCount: 124,
      category: "Café & Guesthouse",
      images: [
        { src: cafeHero, tag: "Atmosphere" },
        { src: food, tag: "Menu" },
        { src: room, tag: "Stay" }
      ],
      address: "Tapovan, near Laxman Jhula, Rishikesh",
      addressDesc: "Verified address & pin locator for Google Maps directions",
      hours: "Open now · Closes 10:00 PM",
      hoursDesc: "Kept updated for holidays & seasonal shifts",
      website: "gangaleaf.in",
      review: {
        author: "Priya Sharma",
        authorMeta: "Local Guide · 12 reviews",
        text: "Best cafe with Laxman Jhula view! Extremely sweet owners, fast Wi-Fi if you work, and the lemon tea is perfect."
      },
      growth: "+180% Actions / Month"
    }
  },
  rafting: {
    label: "🛶 Rafting & Adventure",
    searchQuery: "white water rafting in Shivpuri",
    unoptimized: {
      name: "Rishikesh Rafting Tours",
      rank: "35",
      badge: "Losing Peak Season Traffic",
      impact: "Result: Hard to book, missed calls",
    },
    optimized: {
      name: "Rishi Rafting Adventures",
      stars: 4.9,
      reviewsCount: 248,
      category: "Adventure Sports Agency",
      images: [
        { src: heroRishikesh, tag: "Rafting" },
        { src: landscape, tag: "Camping" },
        { src: sampleGallery, tag: "Safety Gear" }
      ],
      address: "Badrinath Road, Shivpuri, Rishikesh",
      addressDesc: "Exact coordinates for meeting point and camp site location",
      hours: "Open now · Closes 8:00 PM",
      hoursDesc: "Updated dynamically for monsoon/seasonal closure",
      website: "rishirafting.in",
      review: {
        author: "Amit Verma",
        authorMeta: "Local Guide · 34 reviews",
        text: "Incredible white water rafting experience! Professional guides, high-quality gear, and the booking was seamless. Highly recommend their camping pack."
      },
      growth: "+210% Bookings / Month"
    }
  },
  yoga: {
    label: "🧘 Yoga & Wellness",
    searchQuery: "best drop-in yoga classes Tapovan",
    unoptimized: {
      name: "Yoga Classes Rishikesh",
      rank: "51",
      badge: "Lacks Credibility & Reviews",
      impact: "Result: Students go to competitors",
    },
    optimized: {
      name: "Prana Yoga Studio & Retreat",
      stars: 4.8,
      reviewsCount: 96,
      category: "Yoga Studio",
      images: [
        { src: sampleYoga, tag: "Yoga Shala" },
        { src: sampleGallery, tag: "Meditation" },
        { src: landscape, tag: "Mountain View" }
      ],
      address: "High Bank, Tapovan, Rishikesh",
      addressDesc: "Clear map pin for the hidden sanctuary retreat location",
      hours: "Open now · Closes 7:00 PM",
      hoursDesc: "Accurate class slot schedule details listed",
      website: "pranayogarishikesh.in",
      review: {
        author: "Sarah K.",
        authorMeta: "Traveler · 8 reviews",
        text: "Highly recommend the morning flow classes. The teacher explains alignments clearly, and the space feels so peaceful. Very welcoming to beginners!"
      },
      growth: "+150% Directions Requests"
    }
  }
};

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-current" />
      ))}
    </div>
  );
}

export function GbpMockup() {
  return (
    <div className="w-full space-y-16">
      {(Object.keys(BUSINESSES) as BusinessKey[]).map((key) => {
        const data = BUSINESSES[key];
        return (
          <div key={key} className="space-y-6">
            {/* Business Title & Google Search Bar Mockup */}
            <div className="rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between">
                <div className="flex items-center gap-3 flex-1 max-w-lg bg-secondary/80 px-4 py-2.5 rounded-full border border-border">
                  <Search className="h-4 w-4 text-muted-foreground shrink-0" />
                  <input 
                    type="text" 
                    value={data.searchQuery} 
                    readOnly 
                    className="bg-transparent text-sm text-foreground focus:outline-none w-full font-medium"
                  />
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary">
                    <Sparkles className="h-3.5 w-3.5 text-primary" /> {data.label} Simulator
                  </span>
                </div>
              </div>
            </div>

            {/* Main Grid for this business */}
            <div className="grid gap-8 lg:grid-cols-2">
              {/* UNOPTIMISED CARD */}
              <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card/60 p-6 transition-all hover:shadow-[var(--shadow-soft)]">
                {/* Warning Badge */}
                <div className="absolute top-0 right-0 m-4 rounded-full bg-destructive/15 px-3 py-1 text-xs font-semibold text-destructive flex items-center gap-1">
                  <AlertTriangle className="h-3.5 w-3.5" /> {data.unoptimized.badge}
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-muted-foreground/60 uppercase">Search Rank #{data.unoptimized.rank}</span>
                    <h4 className="mt-1 text-xl font-bold text-muted-foreground/70 flex items-center gap-2">
                      {data.unoptimized.name}
                    </h4>
                    <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                      <div className="flex gap-0.5 text-muted-foreground/30">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-3 w-3" />
                        ))}
                      </div>
                      <span>No ratings or reviews yet</span>
                    </div>
                  </div>

                  {/* Simulated Map Snippet (Dull/Empty) */}
                  <div className="relative h-32 rounded-xl bg-secondary/40 border border-dashed border-border/80 overflow-hidden flex items-center justify-center">
                    <div className="text-center space-y-1.5 p-4 text-muted-foreground">
                      <Camera className="mx-auto h-5 w-5 text-muted-foreground/40" />
                      <p className="text-xs font-medium">No business photos uploaded</p>
                      <p className="text-[10px] text-muted-foreground/60">Searchers bounce in 2 seconds</p>
                    </div>
                  </div>

                  {/* Bad Details */}
                  <div className="space-y-3.5 border-t border-border/60 pt-5 text-xs text-muted-foreground font-[Poppins]">
                    <div className="flex items-start gap-2.5">
                      <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground/85">Missing Location Details</p>
                        <p className="text-muted-foreground/75">Customers can't find directions on Google Maps</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground/85">No Hours Listed</p>
                        <p className="text-muted-foreground/75">Marked as "Hours might differ" or closed</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground/85">No Website or Booking Link</p>
                        <p className="text-muted-foreground/75">High booking drop-off (cannot book online)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-border/40 pt-5 flex items-center justify-between text-xs">
                  <span className="font-semibold text-destructive/80">{data.unoptimized.impact}</span>
                  <span className="rounded-full bg-destructive/10 px-2.5 py-1 font-semibold text-destructive uppercase tracking-wider text-[9px]">
                    Unoptimised
                  </span>
                </div>
              </div>

              {/* OPTIMISED CARD */}
              <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-primary/20 bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-lift)] ring-2 ring-primary/5">
                {/* Search Rank Badge */}
                <div className="absolute top-0 right-0 m-4 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5" /> Search Rank #1
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-primary uppercase">Perfect Profile Setup</span>
                    <h4 className="mt-1 text-xl font-bold text-foreground flex items-center gap-2">
                      {data.optimized.name}
                    </h4>
                    <div className="mt-2 flex items-center gap-2 text-xs">
                      <Stars />
                      <span className="font-bold text-foreground">{data.optimized.stars}</span>
                      <span className="text-muted-foreground">({data.optimized.reviewsCount} active reviews)</span>
                      <span className="text-muted-foreground/60">·</span>
                      <span className="text-primary font-medium">{data.optimized.category}</span>
                    </div>
                  </div>

                  {/* Media Gallery Grid */}
                  <div className="grid h-32 grid-cols-3 gap-1 overflow-hidden rounded-xl">
                    {data.optimized.images.map((img, idx) => (
                      <div key={idx} className="relative group/img overflow-hidden">
                        <img src={img.src} alt={img.tag} className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-110" />
                        <div className="absolute bottom-1.5 left-1.5 rounded bg-black/60 px-1 py-0.5 text-[8px] text-white">{img.tag}</div>
                      </div>
                    ))}
                  </div>

                  {/* Perfect Details */}
                  <div className="space-y-3.5 border-t border-border/60 pt-5 text-xs text-muted-foreground font-[Poppins]">
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">{data.optimized.address}</p>
                        <p className="text-muted-foreground/75">{data.optimized.addressDesc}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground flex items-center gap-2">
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">Open now</span> · {data.optimized.hours.split(" · ")[1]}
                        </p>
                        <p className="text-muted-foreground/75">{data.optimized.hoursDesc}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">Direct Website Link & Booking Platform</p>
                        <p className="text-primary hover:underline flex items-center gap-1 font-medium cursor-pointer">
                          {data.optimized.website} <ExternalLink className="h-3 w-3" />
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions Bar */}
                  <div className="grid grid-cols-3 gap-2 border-t border-border/40 pt-4">
                    <button className="flex items-center justify-center gap-1.5 rounded-lg border border-border py-2 text-xs font-semibold text-foreground hover:bg-secondary/60 transition-colors">
                      <PhoneCall className="h-3.5 w-3.5 text-primary" /> Call
                    </button>
                    <button className="flex items-center justify-center gap-1.5 rounded-lg border border-border py-2 text-xs font-semibold text-foreground hover:bg-secondary/60 transition-colors">
                      <Navigation className="h-3.5 w-3.5 text-primary" /> Directions
                    </button>
                    <button className="flex items-center justify-center gap-1.5 rounded-lg bg-primary py-2 text-xs font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
                      <Globe className="h-3.5 w-3.5" /> Website
                    </button>
                  </div>

                  {/* Featured Review */}
                  <div className="rounded-2xl bg-secondary/40 p-4 border border-border/60">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center font-bold text-[10px] text-primary">
                          {data.optimized.review.author.split(" ").map(w => w[0]).join("")}
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-foreground">{data.optimized.review.author}</p>
                          <p className="text-[9px] text-muted-foreground">{data.optimized.review.authorMeta}</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5 text-amber-500">
                        {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-2.5 w-2.5 fill-current" />)}
                      </div>
                    </div>
                    <p className="text-xs italic text-foreground/80 font-medium">"{data.optimized.review.text}"</p>
                  </div>
                </div>

                <div className="mt-8 border-t border-border/40 pt-5 flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-bold">
                    <TrendingUp className="h-4 w-4" /> {data.optimized.growth}
                  </span>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider text-[9px]">
                    Optimised
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
