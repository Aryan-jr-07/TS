import bike from "@/assets/sample-bike.png";
import car from "@/assets/sample-car.png";
import scooty from "@/assets/sample-scooty.png";
import { MapPin, Phone, Shield, Star, Award, Sparkles, MessageCircle, Calendar } from "lucide-react";

export function VehicleSample() {
  return (
    <div className="bg-slate-900 text-slate-100 font-[Poppins]">
      {/* Mini Nav */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="flex items-center gap-2 font-bold tracking-tight text-white">
          <span className="text-primary-foreground bg-primary rounded px-1.5 py-0.5 text-[10px]">⚡</span> Rishikesh Wheels
        </div>
        <nav className="hidden md:flex gap-6 text-xs text-slate-400 font-medium">
          <span className="hover:text-white cursor-pointer transition-colors">Scooters</span>
          <span className="hover:text-white cursor-pointer transition-colors">Bikes</span>
          <span className="hover:text-white cursor-pointer transition-colors">Cars</span>
          <span className="hover:text-white cursor-pointer transition-colors">Location</span>
        </nav>
        <button className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
          Rent Now
        </button>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-slate-950 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3 w-3" /> Rishikesh's #1 Rated Rental
            </div>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Explore Rishikesh on Your Own Terms.
            </h3>
            <p className="text-sm text-slate-400 max-w-lg leading-relaxed">
              No hidden fees, fully insured vehicles, and free helmet/gear. From nimble scooters for Tapovan traffic to rugged 4x4s for mountain expeditions.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-95 transition-opacity">
                Book a Ride
              </button>
              <button className="rounded-full border border-slate-800 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors">
                View Fleet
              </button>
            </div>
          </div>
          <div className="relative group rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <img src={bike} alt="Royal Enfield Himalayan" className="h-72 w-full object-cover sm:h-96" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 font-medium">Featured Ride</p>
                <p className="text-sm font-bold text-white">Royal Enfield Himalayan 450</p>
              </div>
              <span className="text-sm font-extrabold text-primary">₹1,200/day</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-y border-slate-800 bg-slate-950 px-6 py-8">
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
              <Shield className="h-5 w-5" />
            </div>
            <p className="text-xs font-semibold text-white mt-2">100% Insured</p>
            <p className="text-[10px] text-slate-400">Ride with peace of mind</p>
          </div>
          <div className="space-y-1">
            <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
              <Star className="h-5 w-5" />
            </div>
            <p className="text-xs font-semibold text-white mt-2">4.9/5 Star Rating</p>
            <p className="text-[10px] text-slate-400">Over 1,200+ verified riders</p>
          </div>
          <div className="space-y-1">
            <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
              <Award className="h-5 w-5" />
            </div>
            <p className="text-xs font-semibold text-white mt-2">Zero Security Deposit</p>
            <p className="text-[10px] text-slate-400">For verified tourists</p>
          </div>
          <div className="space-y-1">
            <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
              <Calendar className="h-5 w-5" />
            </div>
            <p className="text-xs font-semibold text-white mt-2">24/7 Support</p>
            <p className="text-[10px] text-slate-400">Roadside helpline assistance</p>
          </div>
        </div>
      </div>

      {/* Fleet Showcase */}
      <section className="px-6 py-16 bg-slate-900">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="text-center">
            <h4 className="text-2xl md:text-3xl font-black text-white">Choose Your Adventure Wheels</h4>
            <p className="text-sm text-slate-400 mt-2">Maintained daily by certified mechanics. GPS mount & USB charger pre-installed.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Vehicle 1 - Scooty */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden flex flex-col justify-between group">
              <div className="relative aspect-video overflow-hidden">
                <img src={scooty} alt="Scooter Rental" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute top-3 right-3 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-primary">Scooter</span>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-base text-white">Premium Scooters</h5>
                    <p className="text-xs text-slate-400 mt-1">Activa 6G, Ntorq 125, Vespa</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-400">Starting from</p>
                    <p className="font-extrabold text-primary text-sm">₹450/day</p>
                  </div>
                </div>
                <div className="text-xs text-slate-300 space-y-1.5 border-t border-slate-800/80 pt-4">
                  <p>✓ Free double helmets included</p>
                  <p>✓ Perfect for Tapovan & Laxman Jhula traffic</p>
                </div>
                <button className="w-full rounded-xl bg-slate-800 hover:bg-primary hover:text-primary-foreground py-2.5 text-xs font-semibold text-white transition-all">
                  Check Scooty Availability
                </button>
              </div>
            </div>

            {/* Vehicle 2 - Bike */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden flex flex-col justify-between group">
              <div className="relative aspect-video overflow-hidden">
                <img src={bike} alt="Motorcycle Rental" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute top-3 right-3 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-primary">Motorcycle</span>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-base text-white">Adventure Bikes</h5>
                    <p className="text-xs text-slate-400 mt-1">Himalayan 450, Classic 350, Hunter</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-400">Starting from</p>
                    <p className="font-extrabold text-primary text-sm">₹900/day</p>
                  </div>
                </div>
                <div className="text-xs text-slate-300 space-y-1.5 border-t border-slate-800/80 pt-4">
                  <p>✓ Crash guards & mobile mounts loaded</p>
                  <p>✓ Great for Neer Waterfall & Shivpuri runs</p>
                </div>
                <button className="w-full rounded-xl bg-slate-800 hover:bg-primary hover:text-primary-foreground py-2.5 text-xs font-semibold text-white transition-all">
                  Check Bike Availability
                </button>
              </div>
            </div>

            {/* Vehicle 3 - Car */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden flex flex-col justify-between group">
              <div className="relative aspect-video overflow-hidden">
                <img src={car} alt="SUV Rental" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute top-3 right-3 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-primary">SUV / Sedan</span>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-base text-white">Adventure SUVs & Cars</h5>
                    <p className="text-xs text-slate-400 mt-1">Mahindra Thar 4x4, Swift, Innova</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-400">Starting from</p>
                    <p className="font-extrabold text-primary text-sm">₹2,500/day</p>
                  </div>
                </div>
                <div className="text-xs text-slate-300 space-y-1.5 border-t border-slate-800/80 pt-4">
                  <p>✓ Sanitized interiors & full tank options</p>
                  <p>✓ All India permits & off-road ready</p>
                </div>
                <button className="w-full rounded-xl bg-slate-800 hover:bg-primary hover:text-primary-foreground py-2.5 text-xs font-semibold text-white transition-all">
                  Check Car Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact details */}
      <div className="bg-slate-950 px-6 py-8 text-center text-[11px] text-slate-400 border-t border-slate-800">
        <p className="font-semibold text-white mb-2">📍 Rishikesh Wheels Office</p>
        <p>Badrinath Road, Tapovan, near Laxman Jhula, Rishikesh, Uttarakhand</p>
        <p className="mt-2 flex justify-center items-center gap-1"><Phone className="h-3 w-3" /> +91 99887 76655 · open 6:00 AM – 11:00 PM</p>
      </div>

      {/* Floating WA button */}
      <div className="relative">
        <div className="pointer-events-none absolute -top-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg">
          <MessageCircle className="h-5 w-5" />
        </div>
      </div>
      <div className="h-8" />
    </div>
  );
}
