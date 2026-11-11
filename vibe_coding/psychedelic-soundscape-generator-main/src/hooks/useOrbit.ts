import { useCallback, useEffect, useState } from "react";
import type { MoodId, Song } from "@/data/tameImpala";

export interface OrbitEntry extends Song {
  mood: MoodId;
  savedAt: number;
}

const KEY = "currents-of-sound.orbit";

function read(): OrbitEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as OrbitEntry[]) : [];
  } catch {
    return [];
  }
}

export function useOrbit() {
  const [orbit, setOrbit] = useState<OrbitEntry[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setOrbit(read());
    setHydrated(true);
    const sync = () => setOrbit(read());
    window.addEventListener("orbit-updated", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("orbit-updated", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const persist = useCallback((next: OrbitEntry[]) => {
    setOrbit(next);
    try {
      window.localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* storage unavailable */
    }
    window.dispatchEvent(new Event("orbit-updated"));
  }, []);

  const save = useCallback(
    (song: Song, mood: MoodId) => {
      const current = read();
      if (current.some((entry) => entry.id === song.id)) return false;
      persist([{ ...song, mood, savedAt: Date.now() }, ...current]);
      return true;
    },
    [persist],
  );

  const remove = useCallback(
    (id: string) => persist(read().filter((entry) => entry.id !== id)),
    [persist],
  );

  const has = useCallback((id: string) => orbit.some((entry) => entry.id === id), [orbit]);

  return { orbit, hydrated, save, remove, has };
}
