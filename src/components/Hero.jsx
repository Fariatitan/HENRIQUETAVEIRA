import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Image } from "@/components/ui/image";
import { WORKS } from "@/data/works";

const HERO_IMAGE = WORKS.find((w) => w.slug === "atelier-mao-e-materia").cover;

function Line({ text }) {
  return (
    <span className="flex justify-between w-full">
      {text.split("").map((ch, i) => (
        <span key={i}>{ch}</span>
      ))}
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section ref={ref} className="relative h-[100svh] overflow-hidden">
      <motion.div style={{ y }} className="absolute -top-[10%] left-0 h-[120%] w-full">
        <Image src={HERO_IMAGE} fittingType="fill" className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white via-white/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 px-6 md:px-10 pb-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#0D0D0D]/70 mb-6"
        >
          Direção Criativa · Moda · Arte Visual
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="text-[12.5vw] text-[#0D0D0D] font-light uppercase tracking-[-0.02em] leading-[0.92]"
        >
          <Line text="HENRIQUE" />
          <Line text="TAVEIRA" />
        </motion.h1>
      </div>
    </section>
  );
}