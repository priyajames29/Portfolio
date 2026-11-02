// Single source of truth for portfolio content.
// Edit these values — the UI reads everything from here.

export const profile = {
  name: "Priya Anna James",
  handle: "priya",
  host: "thoughtworks",
  role: "Software Engineer · Full-Stack",
  stack: "Node.js / TypeScript / React",
  bio: [
    "Hey, I’m Priya 👋 I build things for the web — mostly with Node.js, TypeScript, and React.",
    "4 years in, and I still get way too excited about a clean PR. I care about APIs that actually behave,",
    "tests that catch bugs before my users do, and code that doesn’t page me at 2am.",
    " Based in Bengaluru, usually collaborating with people scattered across way too many time zones.",
  ],
};

export const files = [
  { id: "about", label: "about.tsx" },
  { id: "experience", label: "experience.ts" },
  { id: "skills", label: "skills.json" },
  { id: "projects", label: "projects/" },
  { id: "education", label: "education.md" },
  { id: "awards", label: "awards.md" },
  { id: "contact", label: "contact.md" },
] as const;

export type FileId = (typeof files)[number]["id"];

export const links = {
  github: {
    label: "github.com/priyajames29",
    href: "https://github.com/priyajames29",
  },
  linkedin: {
    label: "linkedin.com/in/priya-anna-james",
    href: "https://linkedin.com/in/priya-anna-james",
  },
  website: {
    label: "priya-anna-james.com",
    href: "https://priya-anna-james.com/",
  },
  resume: { label: "resume.pdf", href: "/Priya_Anna_James_Resume.pdf" },
};

export const experience = [
  {
    role: "Full-Stack Developer",
    org: "Thoughtworks",
    location: "Bengaluru, India",
    period: "Sep 2022 — Present",
    points: [
      "Designed and developed full-stack applications using Node.js, TypeScript and React, supporting platforms serving 300K+ active users",
      "Built reusable backend APIs and frontend components that reduced feature delivery time by 20% through improved application architecture",
      "Increased automated test coverage from 85% to 97% by introducing better testing practices with Vitest, code refactoring and pair programming",
      "Developed responsive user interfaces while collaborating closely with backend engineers, QA and clients to deliver high-quality releases",
      "Contributed to CI/CD workflows and engineering best practices to improve development velocity and software quality",
    ],
  },
];

export const skills: Record<string, string[]> = {
  languages: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5", "CSS3"],
  frontend: [
    "React.js",
    "Redux",
    "Tailwind",
    "Bootstrap",
    "Responsive Design",
    "Accessibility (WCAG)",
    "Semantic HTML",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "GraphQL",
    "Microservices",
    "Sequelize",
    "SQL",
    "Design Patterns",
  ],
  testing: ["Vitest", "Jest", "Integration Testing", "Testcontainers", "TDD"],
  databases: ["PostgreSQL", "MySQL"],
  devops: ["Docker", "Helm", "GitLab", "CI/CD", "Jira"],
};

export const projects = [
  {
    name: "AI-Powered Legal QA Bot",
    blurb:
      "NLP question-answering bot for legal queries, built for the OpenNyai mission.",
    tags: ["Python", "NLP", "LLMs"],
    link: "https://www.linkedin.com/posts/priya-anna-james_the-rate-of-diffusion-of-this-next-generation-activity-7067358516491010048-K5jb",
  },
  {
    name: "GCP App Engine Deployment Guide",
    blurb:
      "A walkthrough of deploying apps on Google Cloud App Engine and the workflow around it.",
    tags: ["GCP", "DevOps", "Writing"],
    link: "https://medium.com/@priyajames29/gcp-app-engine-deploy-a-project-34d2a194f300",
  },
  {
    name: "Mobility Middleware Solution",
    blurb:
      "Middleware enabling seamless integration between ONDC mobility services and apps.",
    tags: ["Node.js", "ONDC", "Open Source"],
    link: "https://www.linkedin.com/posts/priya-anna-james_ondc-mobility-app-activity-7071776917670023168-_bxE",
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school:
      "Govt. Model Engineering College — APJ Abdul Kalam Technological University",
    location: "Kerala, India",
    period: "2018 — 2022",
  },
];

export const awards = [
  {
    title: "Grace Hopper Celebration (GHC) Scholarship",
    period: "2022",
    detail:
      "Awarded by AnitaB.org for contributions to technology and gender equity.",
  },
];

export const contact = [
  {
    key: "email",
    value: "priyajames.mec@gmail.com",
    href: "mailto:priyajames.mec@gmail.com",
  },
  {
    key: "website",
    value: "priya-anna-james.com",
    href: "https://priya-anna-james.com/",
  },
  {
    key: "github",
    value: "github.com/priyajames29",
    href: "https://github.com/priyajames29",
  },
  {
    key: "linkedin",
    value: "linkedin.com/in/priya-anna-james",
    href: "https://linkedin.com/in/priya-anna-james",
  },
  {
    key: "resume",
    value: "download resume.pdf",
    href: "/Priya_Anna_James_Resume.pdf",
    download: true,
  },
  { key: "location", value: "Bengaluru, India" },
];

// ─── Portfolio v3 (bold dark design) ────────────────────────────────────────

export const v3 = {
  // Set to an image path in /public (e.g. "/banner.jpg") to replace the
  // generated banner pattern.
  banner: "" as string,
  avatar: "/avatar.png",
  email: "priyajames.mec@gmail.com",
  phone: "+91 8301840790",
  location: "Bengaluru, Karnataka",
  status: "Open to senior roles",
  intro:
    "Full-stack engineer at Thoughtworks. Four years building and scaling web platforms in Node.js, TypeScript and React, from architecture through CI/CD, and tested at every level.",
  ticker: [
    "OPEN TO SENIOR ENGINEERING ROLES",
    "NODE.JS",
    "TYPESCRIPT",
    "REACT",
    "BENGALURU, IST",
  ],
  roles: [
    "Full-Stack Engineer",
    "Node.js + TypeScript",
    "React, with opinions",
    "Writes the tests too",
  ],
  stack: [
    "Node.js", "TypeScript", "React", "Express", "GraphQL", "REST APIs",
    "Sequelize", "PostgreSQL", "MySQL", "Vitest", "Jest", "Playwright", "TDD",
    "Redux", "Tailwind CSS", "GCP", "Docker", "GitLab CI/CD", "Python",
    "Claude Code", "GitHub Copilot",
  ],
  faq: [
    {
      q: "Frontend or backend?",
      a: "Yes. Node.js and Express on the server, React and TypeScript in the browser, and the CI/CD pipeline in between. When the team is stretched, I cover whichever side needs it.",
    },
    {
      q: "How big is big?",
      a: "A public platform serving 300K+ active users, a digital health initiative reaching 70K+ students, and now an energy platform orchestrating billions of data points at national scale.",
    },
    {
      q: "What are you working on now?",
      a: "React on a 5-person team building energy software for grid management, billing and customer operations. I led an epic end to end over 5 sprints and shipped it on time.",
    },
    {
      q: "Anything else?",
      a: "GHC Scholar 2022 with AnitaB.org. B.Tech in Computer Science and Engineering from Govt. Model Engineering College, Kerala.",
    },
  ],
  work: [
    {
      meta: "FRONTEND · DEC 2025 — NOW",
      title: "Energy Software Platform",
      big: "5 sprints",
      bigLabel: "EPIC LED END TO END, ON TIME",
      body: "React on a 5-person team, for a platform used at national scale for grid management, billing and customer operations. Requirements and demos through release, Node.js when needed, Playwright for end-to-end tests, and a seat on the support rotation.",
      tags: "REACT · TYPESCRIPT · NODE.JS · PLAYWRIGHT",
      theme: "dark",
      rot: -2,
    },
    {
      meta: "FULL STACK · 2024 — 2025",
      title: "Government Fitness App",
      big: "70K+",
      bigLabel: "STUDENTS REACHED",
      body: "Node.js backend and React UI for a public app tracking youth health metrics. Helm charts with DevOps cut microservice deployment time by 20%; an integration testing strategy reached 90% coverage.",
      tags: "NODE.JS · REACT · HELM · INTEGRATION TESTING",
      theme: "accent",
      rot: 2,
    },
    {
      meta: "FRONTEND · 2023",
      title: "AI-Powered Legal QA Bot",
      big: "4 wks",
      bigLabel: "TO MVP",
      body: "OpenNyai Mission. Led React frontend development and integrated OpenAI APIs with backend services, cutting user correction time by 25%.",
      tags: "REACT · OPENAI APIS",
      theme: "light",
      rot: -1.5,
    },
    {
      meta: "FULL STACK · 2022 — 2023",
      title: "Open-Source Mobility Middleware",
      big: "Day 1",
      bigLabel: "UNIT TESTS FROM THE FIRST RELEASE",
      body: "Greenfield mobility platform. Backend services and frontend apps, with REST APIs compliant with the ONDC Beckn Protocol for secure, standardized partner communication.",
      tags: "NODE.JS · EXPRESS · REACT · TYPESCRIPT · BECKN",
      theme: "dark2",
      rot: 1.5,
    },
  ] as {
    meta: string;
    title: string;
    big: string;
    bigLabel: string;
    body: string;
    tags: string;
    theme: "dark" | "dark2" | "accent" | "light";
    rot: number;
  }[],
  writing: [
    {
      title: "GCP App Engine: Deploy a Project",
      blurb:
        "A walkthrough of deploying apps on Google Cloud App Engine and the workflow around it.",
      meta: "MEDIUM · GCP · DEVOPS",
      href: "https://medium.com/@priyajames29/gcp-app-engine-deploy-a-project-34d2a194f300",
      image: "/blogBG.png",
    },
  ],
  timeline: [
    {
      title: "Full Stack Developer",
      org: "Thoughtworks · Bengaluru",
      period: "Sep 2022 — Present",
      current: true,
      body: "Scalable full-stack applications with Node.js, TypeScript, React and REST APIs for large public-sector and enterprise platforms. Reusable backend APIs and responsive frontend components cut feature delivery time by 20%. Raised automated test coverage from 85% to 97% with Vitest, unit and integration testing, refactoring and pair programming. Client engagements: energy software, government fitness, legal AI, open mobility.",
    },
    {
      title: "B.Tech, Computer Science",
      org: "Govt. Model Engineering College, APJ Abdul Kalam Technological University",
      period: "Jun 2018 — Jun 2022",
    },
    {
      title: "Grace Hopper Celebration (GHC) Scholarship",
      org: "AnitaB.org",
      period: "2022",
    },
  ] as { title: string; org: string; period: string; current?: boolean; body?: string }[],
};
