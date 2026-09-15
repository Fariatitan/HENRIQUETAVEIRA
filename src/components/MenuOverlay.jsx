import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { openContact } from "@/components/ContactOverlay";
import { CONTACT } from "@/data/works";

const LINKS = [
  { label: "Trabalhos", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Contato", contact: true },
];

export default function MenuOverlay({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[90] bg-white flex flex-col"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 md:top-10 md:right-10 text-[11px] uppercase tracking-[0.35em]"
          >
            Fechar
          </button>
          <nav className="flex-1 flex flex-col items-center justify-center gap-4 md:gap-8">
            {LINKS.map((l) =>
              l.to ? (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={onClose}
                  className="text-5xl md:text-8xl font-light uppercase tracking-[-0.02em] leading-none hover:text-neutral-400 transition-colors duration-300"
                >
                  {l.label}
                </Link>
              ) : (
                <button
                  key={l.label}
                  onClick={() => {
                    onClose();
                    openContact();
                  }}
                  className="text-5xl md:text-8xl font-light uppercase tracking-[-0.02em] leading-none hover:text-neutral-400 transition-colors duration-300"
                >
                  {l.label}
                </button>
              )
            )}
          </nav>
          <div className="absolute bottom-8 inset-x-0 flex justify-center text-[11px] uppercase tracking-[0.25em] text-[#555]">
            {CONTACT.location}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}