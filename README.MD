# Kerax hero

A standalone recreation of the hero at https://ryandeming.com/, with no header or additional sections.

## Run locally

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The hero retains the reference's 700px height, spacing, colors, typography, 540px responsive breakpoint, texture, and looping globe video. Original media and Lora/Lato fonts are stored locally under `public/assets`.

Reduced-motion preferences display the static globe image. The image also stays visible if video playback is unavailable.
