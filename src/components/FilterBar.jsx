import { CATEGORIES } from "@/data/works";
import { cn } from "@/lib/utils";

export default function FilterBar({ active, onChange }) {
  const buttonClass = (id) =>
    cn(
      "whitespace-nowrap text-[11px] uppercase tracking-[0.25em] transition-colors duration-300",
      active === id ? "text-[#0D0D0D]" : "text-[#999] hover:text-black"
    );

  return (
    <div className="md:w-48 shrink-0">
      <nav className="hidden md:flex flex-col gap-5 md:sticky md:top-28">
        {CATEGORIES.map((c) => (
          <button key={c.id} onClick={() => onChange(c.id)} className={cn(buttonClass(c.id), "text-left")}>
            <span className="text-[9px] mr-2 opacity-50">{c.num}</span>
            {c.label}
          </button>
        ))}
      </nav>
      <nav className="md:hidden fixed bottom-5 inset-x-0 z-[60] px-6">
        <div className="flex gap-6 overflow-x-auto rounded-full border border-black/10 bg-white/95 backdrop-blur px-6 py-3">
          {CATEGORIES.map((c) => (
            <button key={c.id} onClick={() => onChange(c.id)} className={buttonClass(c.id)}>
              {c.label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}