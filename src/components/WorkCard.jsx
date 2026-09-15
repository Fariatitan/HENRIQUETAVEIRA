import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

const SPAN = { feature: "md:col-span-7", small: "md:col-span-5" };

export default function WorkCard({ work, index, active }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-6%" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={cn(SPAN[work.scale], index % 2 === 1 && "md:mt-40")}
    >
      <Link
        to={`/trabalho/${work.slug}`}
        data-cursor="Ver"
        className={cn(
          "group block transition-opacity duration-500",
          !active && "opacity-[0.05] pointer-events-none"
        )}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-[#F7F7F7] shadow-[0_30px_60px_-35px_rgba(0,0,0,0.25)]">
          <Image
            src={work.cover}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
        <div className="flex items-baseline justify-between mt-4">
          <span className="text-[11px] uppercase tracking-[0.2em]">{work.title}</span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#555]">{work.year}</span>
        </div>
        <span className="block mt-1 text-[10px] uppercase tracking-[0.2em] text-[#999]">
          {work.categoryLabel}
        </span>
      </Link>
    </motion.article>
  );
}