import ContactOverlay, { openContact } from "@/components/ContactOverlay";
import { CONTACT } from "@/data/works";

export default function SiteFooter() {
  return (
    <footer className="px-6 md:px-10 pt-32 md:pt-48 pb-10">
      <p className="text-[11px] uppercase tracking-[0.3em] text-[#555] mb-8">06 / Contato &amp; Parcerias</p>
      <button onClick={openContact} className="group block text-left w-full">
        <span className="block text-[11vw] md:text-[7vw] leading-[0.95] font-light uppercase tracking-[-0.02em] group-hover:text-neutral-400 transition-colors duration-500">
          Iniciar Diálogo
        </span>
      </button>
      <div className="mt-16 flex flex-col md:flex-row md:items-end justify-between gap-6 text-[11px] uppercase tracking-[0.25em] text-[#555]">
        <span>© 2026 Henrique Taveira</span>
        <div className="flex gap-8">
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
            WhatsApp
          </a>
          <a href={`mailto:${CONTACT.email}`} className="hover:text-black transition-colors">
            E-mail
          </a>
        </div>
        <span>{CONTACT.location}</span>
      </div>
      <ContactOverlay />
    </footer>
  );
}