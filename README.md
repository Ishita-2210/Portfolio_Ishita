# Ishita Sahu — engineering portfolio

A single-page HTML/CSS/JavaScript portfolio covering Embedded AI, FPGA, ADAS, computer vision and software projects. The source includes responsive layouts and buttons that filter the project and experience tracks.

[Portfolio](https://portfolioishita-nine.vercel.app/) · [GitHub](https://github.com/Ishita-2210) · [LinkedIn](https://www.linkedin.com/in/ishita-sahu-8b3165326/)

## Local preview

No package installation or build step is required. From the repository root:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/. The page uses Tailwind's browser CDN, Google Fonts and Lucide icons. Internet access is required for these resources and the GitHub profile avatar. Inline JavaScript handles filtering and icon initialization; there is no backend, account system or contact-form service.

The profile image uses the account's existing GitHub avatar because the previously referenced local screenshot was not included in the repository. The page preserves its existing experience statements and dates; these are profile-provided information, not independently certified employment records.

For a local check, inspect the page at desktop and mobile widths and exercise each track button. This repository contains no automated browser test suite. CDN availability and the external deployment are separate from the local static page.
