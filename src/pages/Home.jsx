import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/Hero";
import FilterBar from "@/components/FilterBar";
import WorkCard from "@/components/WorkCard";
import { Image } from "@/components/ui/image";
import { WORKS } from "@/data/works";

const BANNER = WORKS.find((w) => w.slug === "corpo-e-estrutura").cover;

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("todos");

  return (
    <div className="bg-white text-[#0D0D0D] antialiased">
      <SiteHeader />
      <Hero />

      <section className="px-6 md:px-10 py-32 md:py-56">
        <p className="max-w-4xl text-2xl md:text-[2.4vw] font-light leading-[1.4] tracking-[-0.01em]">
          Criação e desenvolvimento de moda contemporânea, intervenções em artes visuais têxteis e
          direção criativa de campanhas e projetos institucionais de impacto.
        </p>
      </section>

      <section>
        <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
          <Image src={BANNER} fittingType="fill" className="h-full w-full object-cover" />
        </div>
      </section>

      <section id="trabalhos" className="px-6 md:px-10 pt-32 md:pt-56 pb-32 md:pb-56">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#555] mb-12 md:mb-16">
          Panorama — obras, coleções e processo
        </p>
        <div className="flex flex-col md:flex-row gap-10 md:gap-14">
          <FilterBar active={activeCategory} onChange={setActiveCategory} />
          <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-20 md:gap-y-40">
            {WORKS.map((work, i) => (
              <WorkCard
                key={work.slug}
                work={work}
                index={i}
                active={activeCategory === "todos" || activeCategory === work.category}
              />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}