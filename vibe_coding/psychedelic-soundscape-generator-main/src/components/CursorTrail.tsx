import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

export function CursorTrail() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 120, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 18, mass: 0.4 });

  useEffect(() => {
    if (reduced) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [reduced, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-50 h-40 w-40 rounded-full blur-3xl opacity-50 mix-blend-screen"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, var(--aura-2), transparent 65%)",
        }}
      />
    </>
  );
}
