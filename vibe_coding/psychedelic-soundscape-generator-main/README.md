# Tame Impala Mindscape

Create a responsive, visually immersive website called “Currents of Sound,” inspired by the psychedelic world and music of Tame Impala. It should feel like an interactive digital art experience rather than a conventional artist website.

VISUAL DIRECTION

Use an original psychedelic aesthetic inspired by:

Dreamlike gradients in deep purple, magenta, burnt orange, electric blue, and warm yellow

Fluid distortion, soft grain, blurred light, ripples, and chromatic effects

Retro 1970s typography mixed with a clean modern sans-serif

Slow, atmospheric animation that feels hypnotic rather than overwhelming

Rounded, organic shapes and layered depth

Subtle parallax movement and cursor-reactive visuals

Original abstract graphics—do not directly copy official album artwork or logos

The homepage should open with a full-screen animated psychedelic background. In the center, display:

“Let It Happen”

Below it, include the subtitle:

“Find the Tame Impala song that matches your current state of mind.”

Add a prominent button labeled “Enter the Mind.”

CORE FUNCTION: MOOD-BASED SONG GENERATOR

Create an interactive experience where users select their current mood from animated cards:

Euphoric

Nostalgic

Heartbroken

Restless

Dreamy

Transcendent

After choosing a mood, ask one additional question:

“What kind of energy are you looking for?”

Include a draggable spectrum from “Float Away” to “Lose Yourself.”

Based on the user’s selections, recommend a Tame Impala song. Show:

Song title

Album title and release year

A short explanation of why the song fits the selected mood

A Spotify embed or clearly functional Spotify link

A unique animated visual environment matching the recommendation

Buttons for “Save to My Orbit” and “Try Another Mood”

Create a thoughtful set of recommendations using songs from albums such as Innerspeaker, Lonerism, Currents, The Slow Rush, and Deadbeat. Avoid random results—the mood and energy selections should meaningfully affect the recommendation.

ADDITIONAL SECTIONS

Sonic Timeline

Create a horizontally scrolling, interactive timeline showing the evolution of Tame Impala’s sound across each studio album. Each album should have:

Album name

Release year

A short description of its sonic identity

Three essential tracks

An original abstract visual treatment inspired by its mood

My Orbit

Allow users to save recommended songs to a personal collection. Store saved songs locally in the browser using localStorage so they remain after refreshing the page. Users should also be able to remove songs from their collection.

Lyric Echoes

Create an atmospheric section that displays short, legally appropriate lyric fragments or original paraphrased themes from selected songs. The text should slowly appear, dissolve, and transform as the user moves through the section. Do not reproduce full lyrics.

About the Experience

Include a short note explaining that this is an unofficial fan-made interactive experience celebrating the emotional and visual world surrounding Tame Impala.

INTERACTIONS

Make background colors and animated visuals transition smoothly when the selected mood changes

Add subtle hover distortion to buttons and cards

Use smooth scrolling

Give the cursor a soft glowing trail on desktop

Respect prefers-reduced-motion accessibility settings

Ensure all text remains readable over animated backgrounds

Make every button and navigation item functional

Include a minimal floating navigation bar with: Experience, Timeline, My Orbit, and About

TECHNICAL REQUIREMENTS

Build with React and TypeScript

Use Tailwind CSS for styling

Use Framer Motion for smooth animation

Make the site fully responsive on desktop, tablet, and mobile

Use semantic HTML and accessible controls

Persist saved songs using localStorage

Use reusable components and clean code

Do not require users to create an account

Do not leave placeholder buttons or unfinished interactions

If external music data is unavailable, use a well-structured local song dataset and link each recommendation to its official Spotify search page

The final result should feel polished, cinematic, slightly surreal, and emotionally immersive—like entering a visual world shaped by Tame Impala’s music.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://psychedelic-soundscape-generator.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/bfac5ae6-2b32-4daa-bde4-8fdeceae7e82).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
