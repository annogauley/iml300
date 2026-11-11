import { motion, useReducedMotion } from "motion/react";

interface Props {
  pointer?: { x: number; y: number };
}

/** Full-viewport fluid aura field driven by the active mood tokens. */
export function PsychedelicBackground({ pointer = { x: 0.5, y: 0.5 } }: Props) {
  const reduced = useReducedMotion();

  const blobs = [
    { size: 62, from: "var(--aura-1)", x: 12, y: 8, dur: 26 },
    { size: 55, from: "var(--aura-2)", x: 58, y: 18, dur: 32 },
    { size: 70, from: "var(--aura-3)", x: 30, y: 52, dur: 38 },
    { size: 44, from: "var(--aura-2)", x: 68, y: 60, dur: 29 },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden aura-field grain" aria-hidden="true">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[90px] opacity-70"
          style={{
            width: `${blob.size}vmax`,
            height: `${blob.size}vmax`,
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            background: `radial-gradient(circle at 40% 40%, ${blob.from}, transparent 70%)`,
            transition: "background 1.4s ease",
          }}
          animate={
            reduced
              ? { x: 0, y: 0, scale: 1 }
              : {
                  x: [0, 40, -30, 0],
                  y: [0, -35, 25, 0],
                  scale: [1, 1.12, 0.94, 1],
                }
          }
          transition={{ duration: blob.dur, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* cursor-reactive light */}
      <motion.div
        className="absolute h-[38vmax] w-[38vmax] rounded-full blur-[110px] opacity-40"
        style={{
          background: "radial-gradient(circle, var(--aura-2), transparent 68%)",
          transition: "background 1.4s ease",
        }}
        animate={{
          left: `calc(${pointer.x * 100}% - 19vmax)`,
          top: `calc(${pointer.y * 100}% - 19vmax)`,
        }}
        transition={{ type: "spring", stiffness: 22, damping: 20 }}
      />

      {/* ripple rings */}
      {!reduced &&
        [0, 1, 2].map((i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute left-1/2 top-1/2 rounded-full border border-foreground/10"
            style={{ width: "40vmax", height: "40vmax", marginLeft: "-20vmax", marginTop: "-20vmax" }}
            animate={{ scale: [0.5, 2.2], opacity: [0.25, 0] }}
            transition={{ duration: 14, repeat: Infinity, delay: i * 4.6, ease: "easeOut" }}
          />
        ))}

      <div className="absolute inset-0 bg-background/35" />
    </div>
  );
}
