import { motion } from "motion/react";

const ITEMS = [
  { id: "experience", label: "Experience" },
  { id: "timeline", label: "Timeline" },
  { id: "orbit", label: "My Orbit" },
  { id: "about", label: "About" },
];

export function FloatingNav({ active }: { active: string }) {
  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      aria-label="Primary"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="fixed inset-x-0 top-4 z-40 flex justify-center px-3"
    >
      <ul className="glass-panel flex items-center gap-1 rounded-full p-1.5 shadow-2xl sm:gap-2">
        {ITEMS.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => go(item.id)}
              aria-current={active === item.id ? "true" : undefined}
              className={`rounded-full px-3 py-2 text-xs tracking-wide transition-all duration-500 sm:px-5 sm:text-sm ${
                active === item.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-foreground/75 hover:bg-foreground/10 hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
