# Ishita Sahu — code, circuits & curiosity

A personal portfolio exploring intelligent software, embedded systems and hardware-aware machine learning. Near-black, acid lime and lavender; oversized type, an original moving signal sculpture and six projects you can inspect.

[Live portfolio](https://portfolioishita-nine.vercel.app/) · [GitHub](https://github.com/Ishita-2210) · [LinkedIn](https://www.linkedin.com/in/ishita-sahu-8b3165326/)

## Run locally

No package installation or build step is required. From the repository root:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/. `index.html`, `styles.css` and `app.js` provide the complete static application. Google Fonts supplies Space Grotesk and Instrument Serif, with local system-font fallbacks. The profile avatar loads from GitHub. There is no backend, account system or contact-form service.

## Explore

- Switch between three original canvas signal forms, or pause the motion. Animation respects reduced-motion preferences and suspends while offscreen or the page is hidden.
- Filter selected projects by subject and open **Inside the project** for implementation notes, evidence and scope. Native dialogs support Escape, keyboard navigation and focus restoration.
- Expand experience and learning entries, open the two original resume links, or copy the public email address.

All project summaries, repository links, resume links, contact links and native expandable entries work without JavaScript. Enhancement-only controls appear when available; an original SVG replaces the canvas artwork. The page includes visible keyboard focus, a skip link, descriptive link names and live status updates.

## Project imagery and content

The four PNGs in `assets/projects/` are unchanged screenshots from the corresponding maintained repositories: Image Entropy Analyzer's synthetic-landscape workbench, Scout's six-topic workspace, SentinelAI's temporal event feed and BlinkGrid's populated analytics card. `teamforge.svg` and `parking.svg` are original abstract illustrations, not application screenshots or measured results. The favicon and hero artwork are original vector/canvas drawings.

Case notes distinguish Scout's historical ADK/Gemini design from its maintained Groq implementation, explain TeamForge's reproducible ranking behavior without repeating unverified benchmarks, and preserve the distinction between the parking notebook experiments and the separate Pathway pipeline. Ongoing EEG and traffic research is labelled without implying public source is available. Maintained forks retain upstream attribution.

The two existing external resume links are retained. No resume PDFs, phone numbers, credentials or private datasets are stored here.

## Check changes

Preview desktop and narrow mobile widths. Check all filters, six project dialogs, Escape and restored focus, experience/learning expansion, artwork controls and email copying. Scroll through the page so lazy images load before taking a full-page screenshot. Also check reduced motion, JavaScript disabled, keyboard-only navigation and accessibility. This repository has no package-based build or automated test dependency.

## Deployment

The existing Vercel project `portfolio_ishita` is connected to `Ishita-2210/Portfolio_Ishita`, with `main` as its production branch. Pushes to `main` request production deployments for [the live portfolio](https://portfolioishita-nine.vercel.app/). The framework preset is **Other**, using the repository root; no build command is needed.

After a push, confirm that Vercel reports **Ready** for the expected commit and verify the public page and its assets.
