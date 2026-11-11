import { motion } from "motion/react";

export function Hero({ onEnter }: { onEnter: () => void }) {
  return (
    <header className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-xs uppercase tracking-[0.5em] text-foreground/70 sm:text-sm"
      >
        Currents of Sound
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.94, filter: "blur(14px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.6, ease: [0.2, 0.8, 0.2, 1] }}
        className="text-shadowed mt-6 text-6xl leading-[0.95] sm:text-8xl lg:text-[9rem]"
      >
        Let It Happen
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.5 }}
        className="text-shadowed mt-8 max-w-xl text-balance text-base text-foreground/85 sm:text-lg"
      >
        Find the Tame Impala song that matches your current state of mind.
      </motion.p>

      <motion.button
        type="button"
        onClick={onEnter}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.9 }}
        whileHover={{ scale: 1.05, rotate: -0.6 }}
        whileTap={{ scale: 0.97 }}
        className="warp-hover mt-12 rounded-full bg-primary px-10 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary-foreground shadow-2xl"
      >
        Enter the Mind
      </motion.button>

      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 12, 0], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 h-10 w-[1px] bg-foreground/50"
      />
    </header>
  );
}
