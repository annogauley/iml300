import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { toast } from "sonner";
import {
  ENERGY_BANDS,
  MOODS,
  RECOMMENDATIONS,
  energyToBand,
  spotifySearchUrl,
  type MoodId,
} from "@/data/tameImpala";
import { MoodVisual } from "@/components/MoodVisual";
import { useOrbit } from "@/hooks/useOrbit";

interface Props {
  mood: MoodId | null;
  onMoodChange: (mood: MoodId | null) => void;
}

export function Experience({ mood, onMoodChange }: Props) {
  const [energy, setEnergy] = useState(50);
  const [revealed, setRevealed] = useState(false);
  const { save, has } = useOrbit();

  const band = energyToBand(energy);
  const song = useMemo(() => (mood ? RECOMMENDATIONS[mood][band] : null), [mood, band]);
  const saved = song ? has(song.id) : false;

  return (
    <section id="experience" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <h2 className="text-center text-4xl sm:text-6xl">Choose your state of mind</h2>
      <p className="mx-auto mt-4 max-w-lg text-center text-sm text-foreground/70">
        Pick the feeling you're carrying right now. The world around you will shift to match it.
      </p>

      <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MOODS.map((m, i) => {
          const active = mood === m.id;
          return (
            <li key={m.id}>
              <motion.button
                type="button"
                aria-pressed={active}
                onClick={() => {
                  onMoodChange(m.id);
                  setRevealed(false);
                }}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.06 }}
                className={`warp-hover glass-panel group relative h-full w-full overflow-hidden rounded-[1.75rem] p-6 text-left ${
                  active ? "ring-2 ring-primary" : ""
                }`}
              >
                <span
                  data-mood={m.id}
                  aria-hidden="true"
                  className="absolute inset-0 opacity-40 blur-xl transition-opacity duration-700 group-hover:opacity-70"
                  style={{
                    background:
                      "radial-gradient(70% 70% at 30% 20%, var(--aura-1), transparent 70%), radial-gradient(60% 60% at 80% 80%, var(--aura-2), transparent 70%)",
                  }}
                />
                <span className="relative block text-2xl font-[family-name:var(--font-display)]">
                  {m.label}
                </span>
                <span className="relative mt-2 block text-sm text-foreground/75">{m.blurb}</span>
              </motion.button>
            </li>
          );
        })}
      </ul>

      <AnimatePresence mode="wait">
        {mood && (
          <motion.div
            key="energy"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="glass-panel mx-auto mt-16 max-w-2xl rounded-[2rem] p-8"
          >
            <h3 className="text-center text-2xl sm:text-3xl">
              What kind of energy are you looking for?
            </h3>
            <label htmlFor="energy" className="sr-only">
              Energy spectrum from Float Away to Lose Yourself
            </label>
            <input
              id="energy"
              type="range"
              min={0}
              max={100}
              step={1}
              value={energy}
              onChange={(e) => setEnergy(Number(e.target.value))}
              aria-valuetext={ENERGY_BANDS.find((b) => b.id === band)?.label}
              className="mt-10 h-3 w-full cursor-grab appearance-none rounded-full active:cursor-grabbing
                [background:linear-gradient(90deg,var(--electric-blue),var(--magenta),var(--burnt-orange))]
                [&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary
                [&::-webkit-slider-thumb]:shadow-[0_0_24px_var(--warm-yellow)]
                [&::-moz-range-thumb]:h-7 [&::-moz-range-thumb]:w-7 [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-primary"
            />
            <div className="mt-3 flex justify-between text-xs uppercase tracking-[0.25em] text-foreground/70">
              <span>Float Away</span>
              <span className="text-primary">{ENERGY_BANDS.find((b) => b.id === band)?.label}</span>
              <span>Lose Yourself</span>
            </div>

            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setRevealed(true)}
                className="warp-hover rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground"
              >
                Reveal my song
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {revealed && song && mood && (
          <motion.article
            key={song.id}
            initial={{ opacity: 0, y: 40, filter: "blur(16px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, filter: "blur(16px)" }}
            transition={{ duration: 1 }}
            className="glass-panel mt-14 grid gap-8 rounded-[2.5rem] p-8 md:grid-cols-[minmax(0,320px)_1fr] md:p-10"
          >
            <MoodVisual energy={energy} />

            <div className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.35em] text-foreground/60">
                For your {MOODS.find((m) => m.id === mood)?.label.toLowerCase()} current
              </p>
              <h3 className="mt-3 text-4xl sm:text-5xl">{song.title}</h3>
              <p className="mt-2 text-foreground/75">
                {song.album} · {song.year}
              </p>
              <p className="mt-5 text-foreground/90">{song.why}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={spotifySearchUrl(song)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="warp-hover rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Listen on Spotify
                </a>
                <button
                  type="button"
                  onClick={() => {
                    const added = save(song, mood);
                    toast[added ? "success" : "message"](
                      added ? `${song.title} added to your Orbit` : `${song.title} is already in your Orbit`,
                    );
                  }}
                  className="warp-hover rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground"
                >
                  {saved ? "In My Orbit" : "Save to My Orbit"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setRevealed(false);
                    onMoodChange(null);
                    document
                      .getElementById("experience")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="warp-hover rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground/80"
                >
                  Try Another Mood
                </button>
              </div>
            </div>
          </motion.article>
        )}
      </AnimatePresence>
    </section>
  );
}
