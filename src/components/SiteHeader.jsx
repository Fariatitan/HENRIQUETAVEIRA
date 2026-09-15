import { useState } from "react";
import { Link } from "react-router-dom";
import MenuOverlay from "@/components/MenuOverlay";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-[80] flex items-center justify-between px-6 md:px-10 py-6 text-white mix-blend-difference pointer-events-none">
        <Link to="/" className="pointer-events-auto text-[11px] uppercase tracking-[0.35em]">
          Henrique Taveira
        </Link>
        <button
          onClick={() => setMenuOpen(true)}
          className="pointer-events-auto text-[11px] uppercase tracking-[0.35em]"
        >
          Menu
        </button>
      </header>
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}