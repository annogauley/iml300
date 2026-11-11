import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { MoodId } from "@/data/tameImpala";
import { PsychedelicBackground } from "@/components/PsychedelicBackground";
import { CursorTrail } from "@/components/CursorTrail";
import { FloatingNav } from "@/components/FloatingNav";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { SonicTimeline } from "@/components/sections/SonicTimeline";
import { MyOrbit } from "@/components/sections/MyOrbit";
import { LyricEchoes } from "@/components/sections/LyricEchoes";
import { AboutExperience } from "@/components/sections/AboutExperience";

const TITLE = "Currents of Sound — A Tame Impala Mood Experience";
const DESCRIPTION =
  "An unofficial psychedelic web experience: choose a mood, drag the energy spectrum, and find the Tame Impala song that matches your current state of mind.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SECTIONS = ["experience", "timeline", "orbit", "about"];

function Index() {
  const [mood, setMood] = useState<MoodId | null>(null);
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.35 });
  const [active, setActive] = useState("experience");

  useEffect(() => {
    const move = (e: PointerEvent) =>
      setPointer({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0.05, 0.3, 0.6] },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div data-mood={mood ?? undefined} className="relative min-h-screen">
      <PsychedelicBackground pointer={pointer} />
      <CursorTrail />
      <FloatingNav active={active} />

      <main>
        <Hero
          onEnter={() =>
            document.getElementById("experience")?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        />
        <Experience mood={mood} onMoodChange={setMood} />
        <SonicTimeline />
        <LyricEchoes />
        <MyOrbit />
        <AboutExperience />
      </main>

      <footer className="border-t border-border/60 px-6 py-10 text-center text-xs text-foreground/55">
        Currents of Sound · An unofficial fan-made experience. Not affiliated with Tame Impala.
      </footer>
    </div>
  );
}
