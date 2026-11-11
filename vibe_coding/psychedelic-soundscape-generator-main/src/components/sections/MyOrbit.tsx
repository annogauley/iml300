import { AnimatePresence, motion } from "motion/react";
import { toast } from "sonner";
import { spotifySearchUrl, MOODS } from "@/data/tameImpala";
import { useOrbit } from "@/hooks/useOrbit";

export function MyOrbit() {
  const { orbit, hydrated, remove } = useOrbit();

  return (
    <section id="orbit" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <h2 className="text-4xl sm:text-6xl">My Orbit</h2>
      <p className="mt-4 max-w-xl text-sm text-foreground/70">
        Songs you've saved, kept in this browser. Nothing to sign up for.
      </p>

      {hydrated && orbit.length === 0 && (
        <div className="glass-panel mt-10 rounded-[2rem] p-10 text-center text-foreground/70">
          Your orbit is empty. Pick a mood above and save whatever lands.
        </div>
      )}

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence initial={false}>
          {orbit.map((entry) => (
            <motion.li
              key={entry.id}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="warp-hover glass-panel relative overflow-hidden rounded-[1.75rem] p-6"
            >
              <span
                data-mood={entry.mood}
                aria-hidden="true"
                className="absolute inset-0 opacity-35 blur-2xl"
                style={{
                  background:
                    "radial-gradient(70% 70% at 20% 20%, var(--aura-1), transparent 70%), radial-gradient(60% 60% at 85% 75%, var(--aura-3), transparent 70%)",
                }}
              />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                  {MOODS.find((m) => m.id === entry.mood)?.label}
                </p>
                <h3 className="mt-2 text-2xl">{entry.title}</h3>
                <p className="mt-1 text-sm text-foreground/70">
                  {entry.album} · {entry.year}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href={spotifySearchUrl(entry)}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
                  >
                    Play on Spotify
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      remove(entry.id);
                      toast.message(`${entry.title} removed from your Orbit`);
                    }}
                    className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground/80 hover:bg-foreground/10"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </section>
  );
}
