# Build Prompt — Mujeeb Rahman Graphic Design Portfolio

Use this as the master prompt for Antigravity (or any AI coding agent) to build the site.

---

## 1. Project Brief

Build a modern, high-craft one-page portfolio website for **Mujeeb Rahman**, a graphic designer and visual storyteller based in Qatar. The site's job is to make posters, brand identity work, and social content look like a *premium creative studio's* work — bold typography, generous whitespace, confident motion, and a project showcase that feels editorial, not templated.

**Design reference:** Model the structure, typographic scale, motion language, and overall feel on **https://www.nithinmwarrier.com/** — specifically:
- The oversized two-line name lockup in the hero, with a rotating/cycling line of role words underneath (e.g. "Brand Designer / Social Media Designer / Print Designer")
- The looping marquee-style line above the project grid: a sentence like "Designing visuals that help brands grow through — Posters, Branding, Social Content" with keywords swapped in on a timed cycle
- The "Curated Projects" section: a clean vertical stack of project cards, each with year + category tags, a large hero image, and a "View project" link — hover state scales/reveals the image
- Decorative hand-drawn scribble/underline SVG accents near the name or headline (small, tasteful, not overused)
- The closing "Let's build something" contact section: huge serif-or-bold statement type, name repeated as a background/marquee element, simple email + socials below
- A footer with a subtle animated nav (letters doubling/scrambling on hover) — optional polish item, not critical path
- Overall restraint: lots of black/white/off-white base, one accent color max, strong grid discipline, no visual clutter

Do **not** copy Nithin's copy, project names, or imagery — only the structural/motion/typographic system. All content must be Mujeeb's own.

---

## 2. Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (or GSAP) for scroll reveals, marquee loops, and hover states
- **Mobile-first, fully responsive.** Design and build for the smallest viewport first, then scale up — don't design desktop-first and shrink it down. On mobile: the hero name lockup should still feel oversized and confident (not shrunk to a timid size), the marquee strip should keep looping smoothly, project cards should stack full-width with generous tap targets, and the rotating role-word animation should stay legible at small sizes. Test breakpoints at ~375px, ~768px, and ~1440px minimum.
- Optimize images (next/image), lazy-load below-the-fold sections
- Deploy-ready for Vercel

---

## 3. Site Structure & Content

### Hero
- Large two-line name lockup: **MUJEEB / RAHMAN**
- Rotating role/skill line beneath: *Brand Designer · Social Media Designer · Print Designer*
- One-line positioning statement (paraphrase, don't just paste verbatim):
  > Turns ideas into visuals people remember — logos, brand systems, posters, brochures and social content that build trust and drive results.
- Subtle scribble/underline accent near the name
- Scroll cue ("View all works below" style)

### Marquee / Intro strip
Looping headline above the work section, cycling through key offerings, e.g.:
> Designing visuals that help brands grow through — **Brand Identity** · **Posters & Print** · **Social Media** · **Video**

### About
- Short bio paraphrased from:
  > Background in B.Com Computer Applications, with hands-on experience leading design & social for real businesses — an accessibility centre, a medical brand, and a travel agency. Blends strategy with craft. Cares about the small details: the kerning, the crop, the second of video that makes someone stop scrolling.
- Keep it to 2–3 short lines, editorial tone, not a wall of text

### Curated Work / Poster Showcase (the centerpiece)
This is the most important section — Mujeeb's strongest asset is his posters, so give them the largest visual real estate on the page.
- A vertical stack of large project/case cards (Nithin-style), OR a masonry/grid poster wall if there isn't enough case-study depth per project — build both options as components and use whichever fits once real images are dropped in
- Each entry: year, category tag(s), title, large image, hover scale/reveal, "View project" link
- **Real poster/work images will be supplied** — build the `<ProjectCard>` component to accept an image (or array of images for multi-image projects) as a prop so real assets slot straight in, with correct aspect-ratio handling (posters are often portrait-oriented, so don't assume landscape crops)
- Categories to tag posters/work by (use as filter chips or section dividers):
  1. **Brand Identity** — logos, colour systems, typography & guidelines
  2. **Social Media** — content strategy, post design, reels
  3. **Posters & Print** — event posters, brochures, flyers, magazine layouts
  4. **Video Editing** — event reels, promos, social cuts, colour-graded
  5. **Marketing Design** — ad creatives, campaign assets
  6. **Package & Stationery** — business cards, packaging, brand collateral
- Build this as a reusable `<ProjectCard>` component that takes image(s), title, year, and category tags as props, so real poster images can be dropped in later without touching layout code

### Experience ("Where I've Worked")
Timeline/list format, most recent first:
1. **Social Media Manager / Designer** — Ispeak Center for People with Disabilities — 2023–Present. Designed digital posters & promos, filmed and covered live events, edited video, shaped the brand's social presence.
2. **Marketing & Design** — Promed Trading (Medical devices & cosmetics) — Jan–Aug 2023. Ran social media, created promotional ads, managed the medical store, ran paid ad campaigns.
3. **Graphic Designer** — Flywings Travels (Travel Agency) — 2022 (12 months). Posters, banners & thumbnails, event shoots, full video editing pipelines from raw footage to final output.

### Contact / Closing
- Big bold statement: **"Let's make it real."**
- Email: mujeebmuji.888@gmail.com
- Phone: 🇶🇦 Qatar +974 30482688 · 🇮🇳 India +91 81295 51217
- Keep it minimal — large type, generous space, no form clutter unless a contact form is explicitly wanted later

### Footer
- Name repeat / signature mark
- Simple nav links (Home / Work / Contact), animated hover if time allows
- No social links were provided — leave placeholders commented out for Instagram/LinkedIn to be added later

---

## 4. Visual Direction

- Base palette: near-black + off-white, one confident accent color (suggest something that reads "creative studio" — e.g. a warm orange or electric lime; leave it configurable as a CSS variable so it's easy to swap)
- Typography: one bold display/grotesk typeface for headlines (huge scale, tight tracking), one clean sans for body copy
- Motion: purposeful, not decorative — scroll-triggered fades/slides, marquee loops, image hover reveals. Nothing that fights the reading flow
- Whitespace is a feature — don't crowd sections

---

## 5. Build Instructions for the Agent

1. Scaffold a Next.js + Tailwind + TypeScript project.
2. Build reusable components: `Hero`, `MarqueeStrip`, `About`, `ProjectCard` + `ProjectGrid`, `ExperienceTimeline`, `ContactSection`, `Footer`.
3. Wire up the content above as placeholder data in a single `content.ts` (or `.json`) file so copy and images can be swapped without touching component code.
4. Real poster and project images will be provided as assets — set up an `/public/images/work/` (or similar) folder structure and reference images by filename in `content.ts`, so dropping in the supplied files is a one-step swap. Use `next/image` with correct `width`/`height` or `fill` + aspect-ratio wrappers so portrait posters don't get cropped or distorted.
5. Implement the rotating hero role-word animation and the marquee strip as small, isolated components.
6. Build mobile-first: write base styles for small screens, then layer on `md:`/`lg:` Tailwind variants for larger viewports. Verify no horizontal scroll, no tiny tap targets, and no text overflow at 375px width.
7. Make sure the whole page is performant (Lighthouse-friendly: lazy images, no layout shift, especially important once real high-res poster images are added).
8. Leave clear `// TODO:` comments anywhere still using a placeholder image, and a short README note listing exactly which image files go in which folder/filename.
