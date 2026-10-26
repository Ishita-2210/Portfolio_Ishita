# Ishita Sahu — engineering portfolio

A structured portfolio for embedded ADAS software, FPGA research and applied AI. The original dark grid, sage/burgundy palette, two-column introduction and full experience cards are retained, with original signal artwork and genuine project screenshots.

[Live portfolio](https://portfolioishita-nine.vercel.app/) · [GitHub](https://github.com/Ishita-2210) · [LinkedIn](https://www.linkedin.com/in/ishita-sahu-8b3165326/)

## Local preview

No package installation or build step is required:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/. The site uses static HTML, local CSS and JavaScript. `assets/layout.css` contains the generated utility styles for the retained Tailwind v3 theme; `styles.css` adds imagery, artwork, experience typography and dialogs. Icons are inline SVG. Google Fonts and the GitHub avatar are the only external display resources; system-font fallbacks are supplied.

## Page structure

1. Identity, introduction, public contact and both original resume links.
2. Professional experience, with workplace/lab, role, dates, location and responsibilities shown in full.
3. Six featured public builds with screenshots or original illustrations, followed by ongoing and earlier explorations.
4. Technical skills and community roles.
5. Education, courses and participation.

The All / AI / Embedded track controls filter experience and project cards. Section navigation links jump to each major part of the page. Six **Project details** buttons open native dialogs with implementation notes, evidence and scope.

The signal sculpture supports three forms, pause/resume and reduced-motion preferences. It pauses offscreen or when the tab is hidden and remembers an explicit pause. Without JavaScript, local styling, all experience/project content and links remain available; the static SVG artwork replaces the canvas and enhancement-only buttons stay hidden.

## Visuals and factual scope

The four PNGs in `assets/projects/` are unchanged screenshots of Image Entropy Analyzer's synthetic-landscape workbench, Scout's education-support interface, SentinelAI's temporal event feed and BlinkGrid's populated analytics card. `teamforge.svg` and `parking.svg` are original illustrations, not application screenshots or measured results.

Project copy distinguishes historical resume implementations from the maintained repositories. Ongoing EEG and traffic research is labelled; maintained forks credit their upstream authors. Experience uses the organization/lab labels supplied in the resumes. No private datasets, resume PDFs, phone numbers or credentials are stored here.

## Verification

Check desktop and narrow mobile layouts, all three track filters, section anchors, six project dialogs, Escape/focus restoration, keyboard access, loaded images, reduced motion and JavaScript disabled. Scroll through lazy images before capturing a full-page screenshot. There is no package-based test dependency or build command.

## Deployment

Vercel project `portfolio_ishita` is connected to `Ishita-2210/Portfolio_Ishita`. Pushes to `main` request production deployment at [the existing public URL](https://portfolioishita-nine.vercel.app/), using the repository root and the **Other** framework preset.

After a push, confirm **Ready** for the expected commit and verify the public page and its local assets.
