// Single source of truth for portfolio content.
// Edit these values — the UI reads everything from here.

export const profile = {
  name: "Priya Anna James",
  handle: "priya",
  host: "thoughtworks",
  role: "Software Engineer · Full-Stack",
  stack: "Node.js / TypeScript / React",
  bio: [
    "Software Engineer with 4 years of experience designing and building scalable web applications with Node.js, TypeScript and React.",
    "I build secure REST APIs, frontend applications and microservices, backed by automated testing, CI/CD pipelines and cloud-native deployment workflows.",
    "Strong focus on software quality — unit and integration testing, performance optimization and clean architecture — and on collaborating across global engineering teams.",
    "Based in Bengaluru, India.",
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
