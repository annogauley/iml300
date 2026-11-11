import { motion, useReducedMotion } from "motion/react";

/** Abstract, original animated environment that reacts to mood + energy. */
export function MoodVisual({ energy }: { energy: number }) {
  const reduced = useReducedMotion();
  const rings = 7;
  const speed = 18 - (energy / 100) * 12;

  return (
    <div
      className="relative aspect-square w-full overflow-hidden rounded-[2rem] aura-field grain"
      aria-hidden="true"
    >
      {Array.from({ length: rings }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 rounded-full border"
          style={{
            width: `${18 + i * 11}%`,
            height: `${18 + i * 11}%`,
            marginLeft: `-${(18 + i * 11) / 2}%`,
            marginTop: `-${(18 + i * 11) / 2}%`,
            borderColor: i % 2 ? "var(--aura-2)" : "var(--aura-3)",
            opacity: 0.55,
            filter: "blur(0.4px)",
            transition: "border-color 1.4s ease",
          }}
          animate={
            reduced
              ? { scale: 1, rotate: 0 }
              : { scale: [1, 1.08 + energy / 900, 1], rotate: [0, i % 2 ? 18 : -18, 0] }
          }
          transition={{ duration: speed + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <motion.div
        className="absolute left-1/2 top-1/2 h-1/3 w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{
          background: "radial-gradient(circle, var(--aura-1), transparent 70%)",
          transition: "background 1.4s ease",
        }}
        animate={reduced ? { scale: 1 } : { scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: speed / 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
