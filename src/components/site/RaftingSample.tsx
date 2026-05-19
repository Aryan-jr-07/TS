import { useState } from 'react';
import { MapPin, Phone, Mail, ArrowRight, Anchor, Menu, CheckCircle } from 'lucide-react';

export function RaftingSample() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#F8FAFC] text-[#1E293B] font-[Outfit] relative h-full w-full overflow-y-auto overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur shadow-sm py-4">
        <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-extrabold text-[#082F49]">
            <Anchor className="text-[#ea580c]" size={28} />
            <span>Rishi<span className="font-light">Rafting</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-semibold text-[1.1rem]">
            <a href="#" className="text-[#082F49] hover:text-[#ea580c] transition">Home</a>
            <a href="#" className="text-[#082F49] hover:text-[#ea580c] transition">Packages</a>
            <a href="#" className="text-[#082F49] hover:text-[#ea580c] transition">About</a>
            <button className="bg-[#ea580c] hover:bg-[#c2410c] text-white px-5 py-2 rounded-lg font-semibold uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-[0_4px_0_#c2410c] active:translate-y-0.5 active:shadow-[0_2px_0_#c2410c]">
              Book Now
            </button>
          </div>
          <button className="md:hidden text-[#082F49]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center text-center px-5 h-[600px] overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 z-0">
          <source src="/vidro/raf_videoo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#082F49]/70 to-[#082F49]/40 z-10"></div>
        <div className="relative z-20 max-w-3xl text-white">
          <div className="inline-block bg-[#ea580c] text-white px-4 py-2 rounded-full font-semibold text-sm mb-6 tracking-wider shadow-lg">
            🔥 Flat 50% Off Early Bird Offer
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-xl">
            Conquer the <br/><span className="text-[#FDE047]">Ganges Rapids</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 opacity-90">
            Experience the ultimate thrill of river rafting in Rishikesh. Packages starting at just <span className="font-semibold text-[#FDE047]">₹300 per person</span>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#ea580c] hover:bg-[#c2410c] text-white px-8 py-3.5 rounded-lg font-semibold uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-[0_4px_0_#c2410c] flex items-center justify-center gap-2">
              Explore Packages <ArrowRight size={20}/>
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#082F49] text-white px-8 py-3.5 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
              <Phone size={20}/> Call +91-9876543210
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 bg-[#082F49] text-white py-10 px-5 gap-y-8">
        <div className="text-center md:border-r border-white/10 last:border-0">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#ea580c] mb-2">10k+</h2>
          <p className="font-semibold opacity-80">Happy Adventurers</p>
        </div>
        <div className="text-center md:border-r border-white/10 last:border-0">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#ea580c] mb-2">4.9/5</h2>
          <p className="font-semibold opacity-80">Average Rating</p>
        </div>
        <div className="text-center md:border-r border-white/10 last:border-0">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#ea580c] mb-2">15+</h2>
          <p className="font-semibold opacity-80">Years Experience</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#ea580c] mb-2">100%</h2>
          <p className="font-semibold opacity-80">Safety Record</p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-5 bg-[#F8FAFC]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-[#082F49] mb-4">Our Premium Packages</h2>
          <p className="text-lg text-[#64748B]">Choose your adventure level and create unforgettable memories.</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Package 1 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:-translate-y-2 hover:shadow-[-8px_8px_0_#082F49] hover:border-[#082F49] transition-all duration-300 group">
            <div className="relative h-60 overflow-hidden">
              <img src="/images/hero_rafting.png" alt="River Rafting" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute top-4 right-4 bg-[#ea580c] text-white px-3 py-1 rounded-lg font-semibold text-sm">Popular</div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#082F49] mb-4">River Rafting (16km)</h3>
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#E2E8F0]">
                <span className="line-through text-[#64748B] text-xl">₹600</span>
                <span className="text-4xl font-extrabold text-[#0E7490]">₹300<span className="text-base font-normal text-[#64748B]">/pp</span></span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-lg"><CheckCircle size={20} className="text-[#10B981]"/> Grade II & III Rapids</li>
                <li className="flex items-center gap-3 text-lg"><CheckCircle size={20} className="text-[#10B981]"/> Certified River Guide</li>
                <li className="flex items-center gap-3 text-lg"><CheckCircle size={20} className="text-[#10B981]"/> Life Jacket & Helmet</li>
                <li className="flex items-center gap-3 text-lg"><CheckCircle size={20} className="text-[#10B981]"/> Cliff Jumping Included</li>
              </ul>
              <button className="w-full bg-white text-[#082F49] border-2 border-[#082F49] py-3.5 rounded-lg font-bold text-lg transition-colors hover:bg-[#082F49] hover:text-white">
                Reserve Spot
              </button>
            </div>
          </div>

          {/* Package 2 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:-translate-y-2 hover:shadow-[-8px_8px_0_#082F49] hover:border-[#082F49] transition-all duration-300 group">
            <div className="relative h-60 overflow-hidden">
              <img src="/images/camping_site.png" alt="Riverside Camping" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#082F49] mb-4">Luxury Riverside Camp</h3>
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#E2E8F0]">
                <span className="line-through text-[#64748B] text-xl">₹2000</span>
                <span className="text-4xl font-extrabold text-[#0E7490]">₹1000<span className="text-base font-normal text-[#64748B]">/pp</span></span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-lg"><CheckCircle size={20} className="text-[#10B981]"/> 1 Night / 2 Days Stay</li>
                <li className="flex items-center gap-3 text-lg"><CheckCircle size={20} className="text-[#10B981]"/> 3 Buffet Meals (Veg/Non-Veg)</li>
                <li className="flex items-center gap-3 text-lg"><CheckCircle size={20} className="text-[#10B981]"/> Evening Snacks & Bonfire</li>
                <li className="flex items-center gap-3 text-lg"><CheckCircle size={20} className="text-[#10B981]"/> Live Music & Games</li>
              </ul>
              <button className="w-full bg-white text-[#082F49] border-2 border-[#082F49] py-3.5 rounded-lg font-bold text-lg transition-colors hover:bg-[#082F49] hover:text-white">
                Reserve Spot
              </button>
            </div>
          </div>

          {/* Package 3 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:-translate-y-2 hover:shadow-[-8px_8px_0_#082F49] hover:border-[#082F49] transition-all duration-300 group">
            <div className="relative h-60 overflow-hidden">
              <img src="/images/adventure_sports.png" alt="Bungee Jumping" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#082F49] mb-4">Combo: Raft & Bungee</h3>
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#E2E8F0]">
                <span className="line-through text-[#64748B] text-xl">₹6000</span>
                <span className="text-4xl font-extrabold text-[#0E7490]">₹3000<span className="text-base font-normal text-[#64748B]">/pp</span></span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-lg"><CheckCircle size={20} className="text-[#10B981]"/> 16km River Rafting</li>
                <li className="flex items-center gap-3 text-lg"><CheckCircle size={20} className="text-[#10B981]"/> 83m Bungee Jump</li>
                <li className="flex items-center gap-3 text-lg"><CheckCircle size={20} className="text-[#10B981]"/> Jump Video Included</li>
                <li className="flex items-center gap-3 text-lg"><CheckCircle size={20} className="text-[#10B981]"/> AC Transport to Zone</li>
              </ul>
              <button className="w-full bg-white text-[#082F49] border-2 border-[#082F49] py-3.5 rounded-lg font-bold text-lg transition-colors hover:bg-[#082F49] hover:text-white">
                Reserve Spot
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#082F49] text-white pt-20 pb-6 px-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-2xl font-extrabold mb-4">
              <Anchor className="text-white" size={28} />
              <span>Rishi<span className="font-light">Rafting</span></span>
            </div>
            <p className="opacity-70 max-w-sm mt-4">The premier river rafting and camping service in Rishikesh. Unmatched safety, unbeatable prices.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a href="#" className="block opacity-70 hover:text-[#ea580c] hover:opacity-100 transition-colors">Home</a>
              <a href="#" className="block opacity-70 hover:text-[#ea580c] hover:opacity-100 transition-colors">Packages</a>
              <a href="#" className="block opacity-70 hover:text-[#ea580c] hover:opacity-100 transition-colors">About Us</a>
              <a href="#" className="block opacity-70 hover:text-[#ea580c] hover:opacity-100 transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4 opacity-70">
              <p className="flex items-center gap-3"><Phone size={18}/> +91-9876543210</p>
              <p className="flex items-center gap-3"><Mail size={18}/> hello@rishirafting.in</p>
              <p className="flex items-center gap-3 leading-snug"><MapPin size={18} className="shrink-0"/> Tapovan, Rishikesh, Uttarakhand</p>
            </div>
          </div>
        </div>
        <div className="text-center pt-6 border-t border-white/10 opacity-60 text-sm">
          <p>&copy; {new Date().getFullYear()} RishiRafting. All rights reserved. Designed for Adventurers.</p>
        </div>
      </footer>
    </div>
  );
}
