import { AgeGate } from "@/components/marlboro/AgeGate";
import { Hero } from "@/components/marlboro/Hero";
import { PackShowcase } from "@/components/marlboro/PackShowcase";
import { CigaretteLighterParallax } from "@/components/marlboro/CigaretteLighterParallax";
import { Collection } from "@/components/marlboro/Collection";
import { RedStudy } from "@/components/marlboro/RedStudy";
import { Anatomy } from "@/components/marlboro/Anatomy";
import { Heritage } from "@/components/marlboro/Heritage";
import { SiteFooter } from "@/components/marlboro/SiteFooter";

export function MarlboroSample() {
  return (
    <div className="marlboro-theme grain bg-[#0a0a0a] text-[#eceae6] relative h-full w-full overflow-y-auto overflow-x-hidden select-none">
      <AgeGate />
      <Hero />
      <PackShowcase />
      <CigaretteLighterParallax />
      <Collection />
      <RedStudy />
      <Anatomy />
      <Heritage />
      <SiteFooter />
    </div>
  );
}
