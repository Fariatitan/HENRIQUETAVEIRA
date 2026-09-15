import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 600, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("custom-cursor");
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => {
      const t = e.target.closest?.("[data-cursor]");
      setLabel(t ? t.getAttribute("data-cursor") : null);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  const expanded = Boolean(label);
  return (
    <motion.div style={{ x: sx, y: sy }} className="fixed top-0 left-0 z-[120] pointer-events-none">
      <motion.div
        animate={{
          width: expanded ? 64 : 6,
          height: expanded ? 64 : 6,
          backgroundColor: expanded ? "rgba(255,255,255,0.6)" : "#0D0D0D",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="flex items-center justify-center -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/20 backdrop-blur-[1px]"
      >
        {expanded && (
          <span className="text-[9px] uppercase tracking-[0.2em] text-[#0D0D0D]">{label}</span>
        )}
      </motion.div>
    </motion.div>
  );
}