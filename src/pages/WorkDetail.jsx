import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Image } from "@/components/ui/image";
import { getWorkBySlug } from "@/data/works";

function DrawerRow({ term, children }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-[0.25em] text-[#555]">{term}</dt>
      <dd className="mt-2 text-[16px] leading-[1.7] text-neutral-800">{children}</dd>
    </div>
  );
}

export default function WorkDetail() {
  const { slug } = useParams();
  const work = getWorkBySlug(slug);
  const [drawer, setDrawer] = useState(false);

  if (!work) {
    return (
      <div className="min-h-screen bg-white text-[#0D0D0D]">
        <SiteHeader />
        <div className="px-6 md:px-10 pt-40 pb-32">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#555] mb-6">Obra não encontrada</p>
          <Link to="/" className="text-2xl font-light tracking-tight border-b border-black/30 pb-1">
            Voltar ao panorama
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-[#0D0D0D] antialiased">
      <SiteHeader />
      <main className="px-6 md:px-10 pt-32 md:pt-44 pb-24">
        <Link
          to="/"
          className="text-[11px] uppercase tracking-[0.3em] text-[#555] hover:text-black transition-colors"
        >
          ← Panorama
        </Link>
        <p className="mt-12 text-[11px] uppercase tracking-[0.3em] text-[#555]">{work.categoryLabel}</p>
        <h1 className="mt-4 text-[9vw] md:text-[6vw] font-light uppercase tracking-[-0.02em] leading-[0.95]">
          {work.title}
        </h1>
        <button
          onClick={() => setDrawer(true)}
          className="mt-10 text-[11px] uppercase tracking-[0.3em] border-b border-black/30 pb-1 hover:border-black transition-colors"
        >
          Ficha Técnica
        </button>

        <div className="mt-16 md:mt-28 space-y-20 md:space-y-36">
          {work.images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className={i % 2 === 0 ? "w-full" : "w-full md:w-2/3"}
            >
              <div
                className={
                  i % 2 === 0
                    ? "relative aspect-[4/5] md:aspect-[16/10] overflow-hidden bg-[#F7F7F7]"
                    : "relative aspect-[4/5] overflow-hidden bg-[#F7F7F7]"
                }
              >
                <Image src={src} className="h-full w-full object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <SiteFooter />

      <AnimatePresence>
        {drawer && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 h-full w-full md:w-[440px] z-[96] bg-white border-l border-black/10 p-8 md:p-12 overflow-y-auto"
          >
            <button
              onClick={() => setDrawer(false)}
              className="text-[11px] uppercase tracking-[0.35em]"
            >
              Fechar
            </button>
            <h2 className="mt-14 text-xl font-light uppercase tracking-[-0.01em]">Ficha Técnica</h2>
            <dl className="mt-10 space-y-8">
              <DrawerRow term="Ano">{work.year}</DrawerRow>
              <DrawerRow term="Categoria">{work.categoryLabel}</DrawerRow>
              <DrawerRow term="Materiais">{work.materials}</DrawerRow>
              <DrawerRow term="Breve conceitual">{work.description}</DrawerRow>
            </dl>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}