import { motion } from "motion/react";
import { ALBUMS } from "@/data/tameImpala";

const HUES: number[] = [200, 320, 20, 90, 275];

export function SonicTimeline() {
  return (
    <section id="timeline" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl sm:text-6xl">Sonic Timeline</h2>
        <p className="mt-4 max-w-xl text-sm text-foreground/70">
          Scroll sideways through the shifting shape of the sound, record by record.
        </p>
      </div>

      <div
        className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8 [scrollbar-width:thin]"
        tabIndex={0}
        role="region"
        aria-label="Album timeline, scroll horizontally"
      >
        {ALBUMS.map((album, i) => {
          const hue = HUES[i % HUES.length] ?? 300;
          return (
          <motion.article
            key={album.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: i * 0.05 }}
            className="warp-hover glass-panel relative w-[80vw] shrink-0 snap-center overflow-hidden rounded-[2rem] p-7 sm:w-[420px]"
          >
            <div className="relative h-40 overflow-hidden rounded-[1.5rem] grain" aria-hidden="true">
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `conic-gradient(from 120deg, oklch(0.6 0.2 ${hue}), oklch(0.4 0.18 ${hue + 60}), oklch(0.75 0.16 ${hue - 50}), oklch(0.6 0.2 ${hue}))`,
                  filter: "blur(14px)",
                }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 60 + i * 8, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-6 rounded-full border border-foreground/25" />
              <div className="absolute inset-12 rounded-full border border-foreground/20" />
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.35em] text-foreground/60">{album.year}</p>
            <h3 className="mt-1 text-3xl">{album.name}</h3>
            <p className="mt-3 text-sm text-foreground/80">{album.identity}</p>
            <ul className="mt-5 space-y-1.5 text-sm text-foreground/70">
              {album.tracks.map((track) => (
                <li key={track} className="flex gap-2">
                  <span aria-hidden="true" className="text-primary">
                    ◦
                  </span>
                  {track}
                </li>
              ))}
            </ul>
          </motion.article>
          );
        })}
      </div>
    </section>
  );
}
