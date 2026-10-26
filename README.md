# Ishita Sahu — engineering portfolio

A single-page HTML/CSS/JavaScript portfolio covering Embedded AI, FPGA, ADAS, computer vision and software projects. The existing dark grid layout uses restrained sage and muted burgundy accents, with responsive project and experience filters.

[Portfolio](https://portfolioishita-nine.vercel.app/) · [GitHub](https://github.com/Ishita-2210) · [LinkedIn](https://www.linkedin.com/in/ishita-sahu-8b3165326/)

## Local preview

No package installation or build step is required. From the repository root:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/. The page uses Tailwind's browser CDN, Google Fonts and Lucide icons. Internet access is required for these resources and the GitHub profile avatar. Inline JavaScript handles filtering and icon initialization; there is no backend, account system or contact-form service.

The profile image uses the account's existing GitHub avatar because the previously referenced local screenshot was not included in the repository. Project summaries distinguish Scout AI's original ADK/Gemini implementation from its current Groq-based source, describe the runnable TeamForge baseline without unverified benchmark claims, identify the microplastics project as an upstream-attributed fork, and label ongoing EEG and traffic work without implying public source is available.

The page includes a skip link, visible keyboard focus, named repository links, pressed states for the filter buttons and reduced-motion support. The two existing external resume links are retained; no resume PDFs or private contact details are stored in this repository.

For a local check, inspect desktop and narrow mobile widths, exercise all three filters with mouse and keyboard, check the selected button's pressed state, and confirm the avatar loads. Hidden cards should leave the layout and accessibility tree; visible project cards should retain their flex layout. This repository contains no automated browser test suite. CDN availability and the external deployment are separate from the local static page; a source push alone does not establish that the linked deployment was updated.
