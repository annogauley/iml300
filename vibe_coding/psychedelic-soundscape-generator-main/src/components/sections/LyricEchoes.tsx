import { motion } from "motion/react";
import { LYRIC_ECHOES } from "@/data/tameImpala";

export function LyricEchoes() {
  return (
    <section className="relative mx-auto max-w-4xl px-6 py-32" aria-labelledby="echoes-heading">
      <h2 id="echoes-heading" className="text-center text-4xl sm:text-6xl">
        Lyric Echoes
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-sm text-foreground/70">
        Original paraphrased impressions of recurring themes — they appear, dissolve and reform as you
        move through them.
      </p>

      <div className="mt-24 space-y-40">
        {LYRIC_ECHOES.map((echo, i) => (
          <motion.blockquote
            key={echo.text}
            initial={{ opacity: 0, filter: "blur(18px)", y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }}
            exit={{ opacity: 0, filter: "blur(18px)" }}
            viewport={{ margin: "-30% 0px -30% 0px" }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className={`text-shadowed max-w-2xl text-3xl leading-snug sm:text-5xl ${
              i % 2 ? "ml-auto text-right" : "text-left"
            }`}
          >
            <span className="font-[family-name:var(--font-display)]">{echo.text}</span>
            <footer className="mt-5 text-xs uppercase tracking-[0.35em] text-foreground/60">
              {echo.source}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
