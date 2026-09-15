import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CONTACT } from "@/data/works";

export function openContact() {
  window.dispatchEvent(new CustomEvent("ht:open-contact"));
}

export default function ContactOverlay() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("ht:open-contact", handler);
    return () => window.removeEventListener("ht:open-contact", handler);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[95] bg-white flex flex-col"
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 md:top-10 md:right-10 text-[11px] uppercase tracking-[0.35em]"
          >
            Fechar
          </button>
          <div className="flex-1 flex flex-col items-start justify-center px-6 md:px-24 gap-10">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#555]">
              Propostas, parcerias e encomendas
            </p>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer" className="group">
              <span className="block text-5xl md:text-7xl font-light tracking-[-0.02em] group-hover:text-neutral-400 transition-colors duration-300">
                WhatsApp
              </span>
              <span className="block mt-3 text-[11px] uppercase tracking-[0.25em] text-[#555]">
                {CONTACT.whatsappLabel}
              </span>
            </a>
            <a href={`mailto:${CONTACT.email}`} className="group">
              <span className="block text-5xl md:text-7xl font-light tracking-[-0.02em] group-hover:text-neutral-400 transition-colors duration-300">
                E-mail
              </span>
              <span className="block mt-3 text-[11px] uppercase tracking-[0.25em] text-[#555]">
                {CONTACT.email}
              </span>
            </a>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#555]">
              {CONTACT.location} — atendimento remoto para todo o Brasil e exterior
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}