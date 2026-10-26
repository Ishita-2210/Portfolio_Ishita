"use strict";
const projectNotes = {
  entropy: {
    title: "Image Entropy Analyzer",
    category: "Scientific computing / A closer look at pixels",
    description:
      "A shared scientific engine, with a visual workbench for understanding what changes inside an image.",
    image: "assets/projects/entropy.png",
    alt: "Actual Image Entropy Analyzer workbench",
    repo: "image-entropy-analyzer",
    sections: [
      [
        "What’s inside",
        "Information-theory, spatial, frequency and colour measurements; actual codec comparisons; a React workbench, FastAPI API and command-line entry point.",
      ],
      [
        "Follow the evidence",
        "Numerical checks and browser journeys exercise the shared engine and interface. The screenshot uses a labelled synthetic landscape.",
      ],
      [
        "Scope",
        "These measurements are scientific heuristics, not a universal perceptual-quality score. The application is designed as a trusted local workspace.",
      ],
    ],
  },
  scout: {
    title: "Scout AI",
    category: "Applied AI / Education, continued",
    description:
      "An education-support workspace for students and families navigating disruption.",
    image: "assets/projects/scout.png",
    alt: "Actual Scout six-topic support workspace",
    repo: "scout-ai",
    sections: [
      [
        "What’s inside",
        "A React/FastAPI application with six specialist domains, structured Groq responses, local PDF text retrieval, optional Serper search and owned conversation history.",
      ],
      [
        "How it evolved",
        "The June–July 2026 resume project describes a five-agent Google ADK/Gemini design. The maintained source uses a root router and six Groq-powered specialist domains.",
      ],
      [
        "Scope",
        "Browser journeys validate application contracts with controlled external-model transport. Scout provides guidance; changing eligibility, legal and health details require official verification.",
      ],
    ],
  },
  teamforge: {
    title: "TeamForge",
    category: "Recommendation / Talent-to-Team",
    description:
      "A teammate-ranking prototype that combines skills, semantic caches and collaboration-graph relationships.",
    image: "assets/projects/teamforge.svg",
    alt: "Original illustration of skill and collaboration relationships",
    repo: "teamforge-recommender",
    sections: [
      [
        "What’s inside",
        "Qualification-aware skill scoring, graph-schema compatibility, owner and participant exclusion, an explicit weighted baseline and optional trained XGBoost/LightGBM rankers.",
      ],
      [
        "Follow the evidence",
        "Regression tests cover ranking behavior and constraints. A private CSV smoke check verifies original schema compatibility without redistributing records.",
      ],
      [
        "Scope",
        "The November–December 2025 resume experiment’s training pairs, metric manifests and model artifacts are not bundled. Historical benchmark numbers are not reproduced here. The visual is an illustration.",
      ],
    ],
  },
  sentinel: {
    title: "SentinelAI",
    category: "Perception & systems / Evidence matters",
    description:
      "A local video-intelligence system that makes its observations inspectable.",
    image: "assets/projects/sentinel.png",
    alt: "Actual SentinelAI temporal event feed",
    repo: "SentinelAI",
    sections: [
      [
        "What’s inside",
        "YOLO/ByteTrack processing, temporal event rules, SQLite/JPEG evidence and a FastAPI dashboard. Local-model observations link to the frames and events behind them.",
      ],
      [
        "Follow the evidence",
        "Host contract tests exercise API, event, persistence and controlled model/serial boundaries. The image is a real screenshot of the event feed.",
      ],
      [
        "Scope",
        "Host tests do not establish field accuracy or physical ESP32 camera performance. This is separate from the ongoing four-way traffic-signal research.",
      ],
    ],
  },
  blinkgrid: {
    title: "BlinkGrid",
    category: "Full-stack analytics / Less noise, more signal",
    description:
      "A focused customer-support analytics interface, backed by real customer-scoped SQL aggregation.",
    image: "assets/projects/blinkgrid.png",
    alt: "Actual populated BlinkGrid top-failure-categories card",
    repo: "blinkgrid-analytics-dashboard",
    sections: [
      [
        "What’s inside",
        "A React/TypeScript interface, Express HTTP routes, parameterized PostgreSQL aggregation, deterministic count ties and loading, empty and error states.",
      ],
      [
        "Follow the evidence",
        "The integration suite executes the real route against isolated PostgreSQL tables, checking category filters, customer isolation, invalid IDs and the partial index.",
      ],
      [
        "Scope",
        "This May 2026 project uses a fixed demo customer. Account authentication, a customer picker and query-speed benchmarks are outside its current implementation.",
      ],
    ],
  },
  parking: {
    title: "Dynamic Parking Pricing",
    category: "Streaming experiments / A study in changing demand",
    description:
      "An exploration of occupancy- and demand-based pricing, from notebook heuristics to a live change stream.",
    image: "assets/projects/parking.svg",
    alt: "Original abstract illustration of changing demand",
    repo: "Capstone_iitg",
    sections: [
      [
        "What’s inside",
        "Preserved pandas studies plus a separate bounded-pricing module and Pathway CSV pipeline supporting file additions, replacements and removals.",
      ],
      [
        "Follow the evidence",
        "Hand-calculated synthetic fixtures and real Linux Pathway integration checks make the maintained rule reproducible.",
      ],
      [
        "Scope",
        "The July–August 2025 historical notebook streaming prototype remains preserved and unfinished. Real-world calibration, congestion and revenue outcomes are not validated. The visual is an illustration.",
      ],
    ],
  },
};

const filterButtons = [...document.querySelectorAll("[data-filter]")];
const projects = [...document.querySelectorAll(".project[data-category]")];
document.querySelector(".filters").hidden = false;
filterButtons.forEach((button) =>
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) =>
      item.setAttribute("aria-pressed", String(item === button)),
    );
    let count = 0;
    projects.forEach((project) => {
      project.hidden =
        filter !== "all" &&
        !project.dataset.category.split(" ").includes(filter);
      if (!project.hidden) count++;
    });
    document
      .querySelector("#project-grid")
      .classList.toggle("is-filtered", filter !== "all");
    document.querySelector("#project-count").textContent =
      count + (count === 1 ? " project" : " projects");
  }),
);

const dialog = document.querySelector("#case-dialog");
let lastCaseButton = null;
if (typeof dialog.showModal === "function") {
  document.querySelectorAll("[data-case]").forEach((button) => {
    button.hidden = false;
    button.addEventListener("click", () => {
      const data = projectNotes[button.dataset.case];
      if (!data) return;
      lastCaseButton = button;
      document.querySelector("#case-category").textContent = data.category;
      document.querySelector("#case-title").textContent = data.title;
      document.querySelector("#case-description").textContent =
        data.description;
      const image = document.querySelector("#case-image");
      image.src = data.image;
      image.alt = data.alt;
      const sections = document.querySelector("#case-sections");
      sections.replaceChildren();
      data.sections.forEach(([title, text]) => {
        const section = document.createElement("section");
        section.className = "case-section";
        const heading = document.createElement("h3");
        heading.textContent = title;
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        section.append(heading, paragraph);
        sections.append(section);
      });
      document.querySelector("#case-source").href =
        "https://github.com/Ishita-2210/" + data.repo;
      dialog.showModal();
      dialog.scrollTop = 0;
      document.body.classList.add("dialog-open");
    });
  });
  document
    .querySelector(".dialog-close")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    if (
      event.target === dialog &&
      (event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom)
    )
      dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
    if (lastCaseButton?.isConnected)
      lastCaseButton.focus({ preventScroll: true });
  });
}

const copyButton = document.querySelector("#copy-email");
if (navigator.clipboard?.writeText) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    const status = document.querySelector("#copy-status");
    try {
      await navigator.clipboard.writeText("ishitasahu2210@gmail.com");
      status.textContent = "Copied. Say hello!";
    } catch {
      status.textContent = "Use the email link above.";
    }
  });
}

const canvas = document.querySelector("#signal-canvas");
const context = canvas.getContext("2d");
if (context) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const motionButton = document.querySelector("#motion-toggle");
  const formButton = document.querySelector("#change-form");
  const artStatus = document.querySelector("#art-status");
  const names = [
    "Intertwined signals",
    "A field of possibilities",
    "An orbit of ideas",
  ];
  let width = 0,
    height = 0,
    frame = 0,
    lastPaint = 0,
    phase = 0,
    mode = 0;
  let userPaused = false;
  let paused = reducedMotion.matches,
    visible = true,
    pointerX = 0,
    pointerY = 0,
    tiltX = 0,
    tiltY = 0;
  motionButton.hidden = false;
  formButton.hidden = false;
  function updateMotionLabel() {
    motionButton.textContent = paused ? "Resume motion" : "Pause motion";
  }
  function project(x, y, z, angle) {
    const a = angle + tiltX,
      b = -0.36 + tiltY;
    const xx = x * Math.cos(a) + z * Math.sin(a),
      zz = -x * Math.sin(a) + z * Math.cos(a);
    const yy = y * Math.cos(b) - zz * Math.sin(b),
      depth = y * Math.sin(b) + zz * Math.cos(b);
    const scale = Math.min(width, height) * 0.185;
    const perspective = 5 / (5 + depth * 0.22);
    return [
      width * 0.5 + xx * scale * perspective,
      height * 0.5 + yy * scale * perspective,
      depth,
    ];
  }
  function point(u, v) {
    if (mode === 1)
      return [
        1.85 * Math.sin(v) * Math.cos(u),
        1.85 * Math.cos(v),
        1.85 * Math.sin(v) * Math.sin(u),
      ];
    if (mode === 2)
      return [
        (1.45 + 0.48 * Math.cos(v)) * Math.cos(u),
        0.48 * Math.sin(v),
        (1.45 + 0.48 * Math.cos(v)) * Math.sin(u),
      ];
    const radius = 1.32 + 0.38 * Math.cos(3 * u);
    const tube = 0.24;
    return [
      (radius + tube * Math.cos(v)) * Math.cos(2 * u),
      0.68 * Math.sin(3 * u) + tube * Math.sin(v),
      (radius + tube * Math.cos(v)) * Math.sin(2 * u),
    ];
  }
  function draw() {
    if (!width || !height) return;
    context.clearRect(0, 0, width, height);
    tiltX += (pointerX - tiltX) * 0.04;
    tiltY += (pointerY - tiltY) * 0.04;
    const angle = phase * 0.27;
    const rings = mode === 1 ? 17 : 23;
    for (let strand = 0; strand < rings; strand++) {
      const v =
        mode === 1
          ? ((strand + 1) * Math.PI) / (rings + 1)
          : (strand * Math.PI * 2) / rings;
      const blend = strand / (rings - 1);
      const r = Math.round(213 + (185 - 213) * blend),
        g = Math.round(255 + (164 - 255) * blend),
        b = Math.round(104 + (255 - 104) * blend);
      context.strokeStyle =
        "rgba(" + r + "," + g + "," + b + "," + (mode === 1 ? 0.52 : 0.6) + ")";
      context.lineWidth = mode === 1 ? 0.8 : 1.05;
      context.beginPath();
      for (let step = 0; step <= 135; step++) {
        const p = point((step * Math.PI * 2) / 135, v);
        const q = project(p[0], p[1], p[2], angle);
        if (!step) context.moveTo(q[0], q[1]);
        else context.lineTo(q[0], q[1]);
      }
      context.stroke();
    }
    for (let i = 0; i < 7; i++) {
      const u = (i * Math.PI * 2) / 7 + phase * 0.12;
      const p = point(u, i * 0.8);
      const q = project(p[0], p[1], p[2], angle);
      context.fillStyle = i % 2 ? "#b9a4ff" : "#d5ff68";
      context.beginPath();
      context.arc(q[0], q[1], i % 3 === 0 ? 2.8 : 1.5, 0, Math.PI * 2);
      context.fill();
    }
  }
  function tick(timestamp) {
    frame = 0;
    if (paused || !visible || document.hidden) return;
    if (timestamp - lastPaint >= 32) {
      phase += 0.012;
      draw();
      lastPaint = timestamp;
    }
    frame = requestAnimationFrame(tick);
  }
  function schedule() {
    cancelAnimationFrame(frame);
    frame = 0;
    if (!paused && visible && !document.hidden)
      frame = requestAnimationFrame(tick);
    else draw();
  }
  function resize() {
    const bounds = canvas.getBoundingClientRect();
    width = bounds.width;
    height = bounds.height;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.6);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
  }
  canvas.addEventListener("pointermove", (event) => {
    if (paused || reducedMotion.matches) return;
    const bounds = canvas.getBoundingClientRect();
    pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.65;
    pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.5;
  });
  canvas.addEventListener("pointerleave", () => {
    pointerX = 0;
    pointerY = 0;
  });
  motionButton.addEventListener("click", () => {
    paused = !paused;
    userPaused = paused;
    updateMotionLabel();
    artStatus.textContent = paused ? "Motion paused" : "Motion resumed";
    schedule();
  });
  formButton.addEventListener("click", () => {
    mode = (mode + 1) % 3;
    artStatus.textContent = names[mode];
    draw();
  });
  reducedMotion.addEventListener("change", (event) => {
    paused = event.matches || userPaused;
    updateMotionLabel();
    schedule();
  });
  document.addEventListener("visibilitychange", schedule);
  const observer = new IntersectionObserver(
    (entries) => {
      visible = entries[0].isIntersecting;
      schedule();
    },
    { threshold: 0.05 },
  );
  observer.observe(canvas);
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);
  updateMotionLabel();
  resize();
  canvas.removeAttribute("aria-hidden");
  document
    .querySelector(".signal-fallback")
    .setAttribute("aria-hidden", "true");
  document.documentElement.classList.add("art-ready");
  schedule();
}
