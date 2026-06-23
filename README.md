# Martha · Portfolio

A dark, instrument-panel portfolio site. Built with Vite and React. The
signature element is a live signal-trace waveform in the hero that nods to a
circuits and robotics background.

## See it instantly (no setup)

Double-click `preview.html`. It opens in any browser, animation and all, with
nothing to install. Great for a quick look. The real site is the Vite project
below.

## Run the real project

```bash
npm install
npm run dev      # local dev server, usually http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Make it yours

Almost everything personal lives in a few data files:

1. `src/data/profile.js` — your name, surname, roles (these cycle in the hero),
   tagline, status pill, CV link, the headline stats, and your links. Replace
   the placeholders in CAPS.
2. `src/data/projects.js` — your selected work, the "how I build" groups, and
   the scrolling marquee. Each project takes a `status` of `live`, `shipped`,
   `building`, or a year like `2026`.
3. `src/data/experience.js` — the tabbed experience section: work and
   internships, hackathons, robotics, community, and courses.

### Your CV

Either drop a `cv.pdf` into the `public/` folder, or paste a share link (Google
Drive, Notion, and so on) into `cvUrl` in `src/data/profile.js`.

## Design notes

- Colors and type are tokens at the top of `src/index.css`. Change the accent
  in one place by editing `--signal`.
- Fonts: Bricolage Grotesque (display), Familjen Grotesk (body), JetBrains Mono
  (data and labels). Loaded from Google Fonts in `index.html`.
- Motion: kinetic hero, cursor glow, role rotator, infinite tool marquee,
  count-up stats, animated experience tabs, and scroll reveals.
- Respects `prefers-reduced-motion`: animations freeze gracefully.
- Responsive down to mobile, with visible keyboard focus rings.

## Deploy

Any static host works. For Vercel: push to GitHub, import the repo, and it
detects Vite automatically. The build command is `npm run build` and the output
directory is `dist`.
