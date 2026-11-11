import { motion } from "motion/react";

export function AboutExperience() {
  return (
    <section id="about" className="relative mx-auto max-w-3xl scroll-mt-24 px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="glass-panel rounded-[2rem] p-8 sm:p-12"
      >
        <h2 className="text-4xl sm:text-5xl">About the Experience</h2>
        <p className="mt-6 text-foreground/85">
          Currents of Sound is an unofficial, fan-made interactive experience celebrating the emotional
          and visual world surrounding Tame Impala's music. Every graphic here is original and abstract —
          nothing is taken from official album artwork or logos.
        </p>
        <p className="mt-4 text-foreground/75">
          Recommendations come from a hand-written local dataset of songs and short editorial notes.
          Lyric Echoes are original paraphrases of recurring themes, not reproduced lyrics. Saved songs
          live only in your own browser; there is no account and nothing is sent anywhere.
        </p>
        <p className="mt-4 text-sm text-foreground/60">
          Made by a listener, for listeners. All music rights belong to their respective owners.
        </p>
      </motion.div>
    </section>
  );
}
