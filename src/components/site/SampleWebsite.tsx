import cafeHero from "@/assets/sample-cafe-hero.jpg";
import food from "@/assets/sample-food.jpg";
import yoga from "@/assets/sample-yoga.jpg";
import room from "@/assets/sample-room.jpg";
import gallery from "@/assets/sample-gallery.jpg";
import { MapPin, Phone, Instagram, MessageCircle } from "lucide-react";

export function SampleWebsite() {
  return (
    <div className="bg-[#fbf8f2] text-[#2a2417] font-[Poppins]">
      {/* mini nav */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#e7e0cf]">
        <div className="font-semibold tracking-tight">Ganga Leaf <span className="text-[#7a6a3e]">· Café & Stay</span></div>
        <nav className="hidden md:flex gap-5 text-xs text-[#5e5640]">
          <span>Menu</span><span>Stay</span><span>Gallery</span><span>Visit</span>
        </nav>
        <button className="rounded-full bg-[#2d5a3d] px-3 py-1.5 text-xs font-medium text-white">Book Table</button>
      </div>

      {/* hero */}
      <div className="relative">
        <img src={cafeHero} alt="" className="h-72 w-full object-cover md:h-96" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 text-white">
          <p className="text-xs uppercase tracking-[0.25em] opacity-90">Tapovan · Rishikesh</p>
          <h3 className="mt-2 text-3xl md:text-5xl font-semibold leading-tight max-w-xl">
            Slow mornings, mountain views, real chai.
          </h3>
          <div className="mt-4 flex gap-2">
            <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#2a2417]">View Menu</button>
            <button className="rounded-full border border-white/70 px-4 py-2 text-sm font-medium">Book a Room</button>
          </div>
        </div>
      </div>

      {/* about */}
      <section className="px-6 py-10 md:py-14 max-w-3xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[#7a6a3e]">Our Story</p>
        <h4 className="mt-2 text-2xl md:text-3xl font-semibold">A quiet café and four-room guesthouse above the Ganga.</h4>
        <p className="mt-3 text-sm leading-relaxed text-[#5e5640]">
          Run by a small family since 2018. Fresh sourdough, slow-cooked thalis, and a porch that looks straight at the river.
        </p>
      </section>

      {/* menu/services */}
      <section className="bg-[#f3eedd] px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-end justify-between">
            <h4 className="text-xl font-semibold">Today's Menu</h4>
            <span className="text-xs text-[#7a6a3e]">Updated daily</span>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              ["Masala Chai", "Cardamom, ginger, full milk", "₹60"],
              ["Sourdough Avocado", "Stoneground bread, lime, chilli", "₹240"],
              ["House Thali", "5 items, changes daily", "₹320"],
              ["Banana Pancakes", "Local honey, seasonal fruit", "₹220"],
            ].map(([n, d, p]) => (
              <div key={n} className="flex items-start justify-between rounded-xl bg-white/80 p-4">
                <div>
                  <p className="font-medium">{n}</p>
                  <p className="text-xs text-[#7a6a3e]">{d}</p>
                </div>
                <p className="font-semibold">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* gallery */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h4 className="text-xl font-semibold">Gallery</h4>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[food, yoga, room, gallery].map((src, i) => (
              <img key={i} src={src} alt="" loading="lazy" className="aspect-square w-full rounded-xl object-cover" />
            ))}
          </div>
        </div>
      </section>

      {/* contact */}
      <section className="bg-[#2d5a3d] px-6 py-12 text-white">
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <div>
            <h4 className="text-2xl font-semibold">Come say hi.</h4>
            <p className="mt-2 text-sm text-white/80">Open every day · 7am – 10pm</p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Tapovan, near Laxman Jhula, Rishikesh</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</li>
              <li className="flex items-center gap-2"><Instagram className="h-4 w-4" /> @gangaleaf</li>
            </ul>
          </div>
          <form className="space-y-2 rounded-xl bg-white/10 p-4">
            <input placeholder="Your name" className="w-full rounded-md bg-white/95 px-3 py-2 text-sm text-[#2a2417] outline-none" />
            <input placeholder="Phone or email" className="w-full rounded-md bg-white/95 px-3 py-2 text-sm text-[#2a2417] outline-none" />
            <textarea placeholder="Message" rows={3} className="w-full rounded-md bg-white/95 px-3 py-2 text-sm text-[#2a2417] outline-none" />
            <button type="button" className="w-full rounded-md bg-[#e8b84a] px-3 py-2 text-sm font-medium text-[#2a2417]">Send</button>
          </form>
        </div>
        <div className="mx-auto mt-8 max-w-4xl rounded-xl border border-white/20 bg-white/5 p-3 text-center text-xs">
          📍 Embedded Google Map · Tapovan, Rishikesh
        </div>
      </section>

      {/* floating wa */}
      <div className="relative">
        <div className="pointer-events-none absolute -top-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg">
          <MessageCircle className="h-5 w-5" />
        </div>
      </div>
      <div className="h-8" />
    </div>
  );
}
