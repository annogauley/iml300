export type MoodId =
  | "euphoric"
  | "nostalgic"
  | "heartbroken"
  | "restless"
  | "dreamy"
  | "transcendent";

export type EnergyBand = "float" | "drift" | "lose";

export interface Mood {
  id: MoodId;
  label: string;
  blurb: string;
}

export interface Song {
  id: string;
  title: string;
  album: string;
  year: number;
  why: string;
}

export const MOODS: Mood[] = [
  { id: "euphoric", label: "Euphoric", blurb: "Light spilling over the edges" },
  { id: "nostalgic", label: "Nostalgic", blurb: "A memory playing in another room" },
  { id: "heartbroken", label: "Heartbroken", blurb: "The slow ache of after" },
  { id: "restless", label: "Restless", blurb: "Movement without a destination" },
  { id: "dreamy", label: "Dreamy", blurb: "Half awake, fully elsewhere" },
  { id: "transcendent", label: "Transcendent", blurb: "Dissolving into the sound" },
];

export const ENERGY_BANDS: { id: EnergyBand; label: string }[] = [
  { id: "float", label: "Float Away" },
  { id: "drift", label: "Somewhere Between" },
  { id: "lose", label: "Lose Yourself" },
];

export function energyToBand(value: number): EnergyBand {
  if (value < 34) return "float";
  if (value < 67) return "drift";
  return "lose";
}

export const RECOMMENDATIONS: Record<MoodId, Record<EnergyBand, Song>> = {
  euphoric: {
    float: {
      id: "feels-like-we-only-go-backwards",
      title: "Feels Like We Only Go Backwards",
      album: "Lonerism",
      year: 2012,
      why: "Weightless euphoria with a bruise underneath — the kind of joy that keeps looping back on itself while the melody lifts you clean off the floor.",
    },
    drift: {
      id: "borderline",
      title: "Borderline",
      album: "The Slow Rush",
      year: 2020,
      why: "Sunlit flutes over a shuffling groove. It's the sound of walking outside and realising the day is on your side, without ever rushing you.",
    },
    lose: {
      id: "elephant",
      title: "Elephant",
      album: "Lonerism",
      year: 2012,
      why: "Pure stomping swagger. When the euphoria needs a body to move through, this riff hands you one and turns the volume up.",
    },
  },
  nostalgic: {
    float: {
      id: "yes-im-changing",
      title: "Yes I'm Changing",
      album: "Currents",
      year: 2015,
      why: "A soft farewell to a former self. It holds the past gently while quietly closing the door on it.",
    },
    drift: {
      id: "posthumous-forgiveness",
      title: "Posthumous Forgiveness",
      album: "The Slow Rush",
      year: 2020,
      why: "Memory as a two-part suite — heavy and unresolved at first, then unexpectedly tender. Nostalgia that finally makes peace.",
    },
    lose: {
      id: "lost-in-yesterday",
      title: "Lost in Yesterday",
      album: "The Slow Rush",
      year: 2020,
      why: "The dancefloor answer to looking back. It admits the past gets prettier the further away it gets, and then insists you keep moving anyway.",
    },
  },
  heartbroken: {
    float: {
      id: "eventually",
      title: "Eventually",
      album: "Currents",
      year: 2015,
      why: "A breakup rendered as a huge, forgiving wave of synth. It hurts, it says so plainly, and it still sounds like sunrise.",
    },
    drift: {
      id: "the-less-i-know-the-better",
      title: "The Less I Know the Better",
      album: "Currents",
      year: 2015,
      why: "Jealousy with a bassline you can't resist. The perfect contradiction: dancing to your own disappointment.",
    },
    lose: {
      id: "new-person-same-old-mistakes",
      title: "New Person, Same Old Mistakes",
      album: "Currents",
      year: 2015,
      why: "Seven minutes of arguing with yourself inside a swirl of low-end. When the heartbreak needs to be loud enough to drown out the thinking.",
    },
  },
  restless: {
    float: {
      id: "why-wont-you-make-up-your-mind",
      title: "Why Won't You Make Up Your Mind?",
      album: "Innerspeaker",
      year: 2010,
      why: "Woozy, indecisive, hypnotically patient. Restlessness slowed down until it becomes something almost comfortable.",
    },
    drift: {
      id: "be-above-it",
      title: "Be Above It",
      album: "Lonerism",
      year: 2012,
      why: "A looping mantra over a nervous pulse — the sound of talking yourself down while your feet keep tapping.",
    },
    lose: {
      id: "elephant-restless",
      title: "Half Full Glass of Wine",
      album: "Tame Impala EP",
      year: 2008,
      why: "Fuzzed-out, blues-heavy and impatient. When restlessness wants to break something instead of think about it.",
    },
  },
  dreamy: {
    float: {
      id: "solitude-is-bliss",
      title: "Solitude Is Bliss",
      album: "Innerspeaker",
      year: 2010,
      why: "Reverb-soaked and happily alone. A room of your own where the guitars are the only company you need.",
    },
    drift: {
      id: "one-more-year",
      title: "One More Year",
      album: "The Slow Rush",
      year: 2020,
      why: "Choral loops folding over each other like time itself. Dreaming forward instead of backward, for once.",
    },
    lose: {
      id: "dracula",
      title: "Dracula",
      album: "Deadbeat",
      year: 2025,
      why: "Nocturnal, pulsing and strange. A dream that keeps going past the point where you meant to wake up.",
    },
  },
  transcendent: {
    float: {
      id: "sun-strokes",
      title: "Sun's Coming Up",
      album: "Lonerism",
      year: 2012,
      why: "Piano, sea air, and a guitar that walks off into the distance. The quiet transcendence of an ending you accept.",
    },
    drift: {
      id: "apocalypse-dreams",
      title: "Apocalypse Dreams",
      album: "Lonerism",
      year: 2012,
      why: "It keeps rebuilding itself in bigger and bigger shapes until the last minute feels like leaving the atmosphere.",
    },
    lose: {
      id: "let-it-happen",
      title: "Let It Happen",
      album: "Currents",
      year: 2015,
      why: "Eight minutes of surrender: the stutter, the collapse, the rebirth. The definitive instruction to stop resisting the current.",
    },
  },
};

export function spotifySearchUrl(song: Song) {
  return `https://open.spotify.com/search/${encodeURIComponent(`${song.title} Tame Impala`)}`;
}

export interface Album {
  id: string;
  name: string;
  year: number;
  identity: string;
  tracks: [string, string, string];
}

export const ALBUMS: Album[] = [
  {
    id: "innerspeaker",
    name: "Innerspeaker",
    year: 2010,
    identity:
      "Sun-bleached guitar psychedelia recorded in a beach shack. Fuzz, reverb and solitude, played like a live band caught mid-daydream.",
    tracks: ["Solitude Is Bliss", "Alter Ego", "Why Won't You Make Up Your Mind?"],
  },
  {
    id: "lonerism",
    name: "Lonerism",
    year: 2012,
    identity:
      "Guitars step aside for swelling synthesizers and crowd-noise loneliness. Bigger, stranger, and painted in wide psychedelic colour.",
    tracks: ["Apocalypse Dreams", "Elephant", "Feels Like We Only Go Backwards"],
  },
  {
    id: "currents",
    name: "Currents",
    year: 2015,
    identity:
      "The turn toward disco, R&B and heartbreak. Low-end, falsetto and synth washes replace the fuzz almost entirely.",
    tracks: ["Let It Happen", "The Less I Know the Better", "Eventually"],
  },
  {
    id: "the-slow-rush",
    name: "The Slow Rush",
    year: 2020,
    identity:
      "An album about time — house pianos, flutes and enormous drums, glossy on the surface and anxious underneath.",
    tracks: ["One More Year", "Borderline", "Lost in Yesterday"],
  },
  {
    id: "deadbeat",
    name: "Deadbeat",
    year: 2025,
    identity:
      "Nocturnal and rhythm-forward. Desert-rave pulses, hollowed-out space and vocals floating far back in the mix.",
    tracks: ["End of Summer", "Dracula", "Loser"],
  },
];

export const LYRIC_ECHOES: { text: string; source: string }[] = [
  { text: "Surrender is not the same as losing.", source: "on Let It Happen" },
  { text: "The past keeps getting prettier the further away it drifts.", source: "on Lost in Yesterday" },
  { text: "Being alone stopped feeling like being left behind.", source: "on Solitude Is Bliss" },
  { text: "Change arrives quietly, then all at once.", source: "on Yes I'm Changing" },
  { text: "Time moves slower the harder you watch it.", source: "on The Slow Rush" },
  { text: "Sometimes the joy and the ache share the same chord.", source: "on Eventually" },
];
