// All site content lives here, so updating the portfolio never means editing markup.
// Keep it in sync with LinkedIn and the resume: recruiters and background checks compare them.

export const profile = {
  name: "Amod Dhopavkar",
  role: "Software Engineer at Goldman Sachs",
  location: "Salt Lake City, UT",
  summary:
    "I build and run backend and platform systems: Java services on Kubernetes, data pipelines, REST APIs and auth. Promoted to Associate in 13 months.",
  email: "amoddhopavkar2@gmail.com",
  links: {
    resume: "/resume.pdf",
    github: "https://github.com/amoddhopavkar2",
    linkedin: "https://www.linkedin.com/in/amoddho2/",
  },
  seo: {
    title: "Amod Dhopavkar | Software Engineer",
    description:
      "Amod Dhopavkar is a software engineer at Goldman Sachs building backend and platform systems with Java, Spring Boot and Kubernetes.",
    // Bump ?v= whenever og-image.png changes: LinkedIn caches preview images by URL.
    image: "/og-image.png?v=2",
    imageAlt: "Amod Dhopavkar, Software Engineer: Java, Spring Boot, Kubernetes, Distributed Systems",
  },
}

export type Impact = { value: string; label: string }

export const impact: Impact[] = [
  { value: "30+ → <5 min", label: "Kubernetes deploy time for a production backend and UI" },
  { value: "5K+", label: "self-service API calls that retired a weekly support release" },
  { value: "47 repos", label: "prepared for a critical security-library upgrade" },
]

export type Role = { title: string; dates: string; bullets: string[] }
export type Job = {
  company: string
  url?: string
  location?: string
  roles: Role[]
  summary?: string
}

// Current employer: full detail.
export const featuredJob: Job = {
  company: "Goldman Sachs",
  url: "https://www.goldmansachs.com/",
  location: "Salt Lake City, UT",
  roles: [
    {
      title: "Software Engineer, Associate",
      dates: "Jan 2026 – Present",
      bullets: [
        "Cut deploy times for a production backend and UI from 30+ minutes to under 5, and CI/CD build times by 40–50% across the team's Kubernetes services.",
        "Built the backend for a new compliance rules engine (~45K lines, 19 database tables), plus the UI and search at the center of a new internal compliance platform.",
        "Moved a compliance app to single sign-on, ending repeated logins for every business user, and blocked non-production accounts from production APIs.",
        "Drove a critical security-library upgrade across 47 repositories, preparing every change so owners only had to test and merge.",
      ],
    },
    {
      title: "Software Engineer, Analyst",
      dates: "Dec 2024 – Jan 2026",
      bullets: [
        "Sole owner of the employee data pipeline that feeds the firm's compliance apps; one enhancement saved 6+ months of headcount effort and ~16K manual tasks a year.",
        "Built self-service REST APIs that business users have called 5K+ times, retiring a weekly database support release.",
      ],
    },
  ],
}

// Earlier roles: one line each.
export const earlierJobs: Job[] = [
  {
    company: "DataRobot",
    url: "https://www.datarobot.com/",
    roles: [{ title: "Software Engineer Intern", dates: "May – Sep 2024", bullets: [] }],
    summary: "Streamlit front end over TensorFlow Serving; shared TypeScript component library.",
  },
  {
    company: "Addgene",
    url: "https://www.addgene.org/",
    roles: [{ title: "Software Engineer Intern", dates: "May – Dec 2023", bullets: [] }],
    summary: "Real-time order tracking over WebSockets; Redis caching and Postgres tuning.",
  },
  {
    company: "Northeastern University",
    url: "https://www.khoury.northeastern.edu/",
    roles: [{ title: "Graduate Teaching Assistant", dates: "Jan 2023 – Dec 2024", bullets: [] }],
    summary: "CS 3520, Programming in C++.",
  },
  {
    company: "Quantiphi",
    url: "https://quantiphi.com/",
    roles: [{ title: "Software Engineer", dates: "May 2021 – Aug 2022", bullets: [] }],
    summary: "Migrated a log-analytics pipeline from Elasticsearch to BigQuery with Apache Spark.",
  },
  {
    company: "Veritas Technologies",
    url: "https://www.veritas.com/",
    roles: [{ title: "Software Engineer", dates: "Aug 2020 – Mar 2021", bullets: [] }],
  },
]

export type Project = {
  name: string
  description: string
  stack: string[]
  links: { label: string; url: string }[]
}

export const projects: Project[] = [
  {
    name: "ClauseGuard",
    description:
      "Privacy-first Chrome extension that scans Terms of Service fully offline and flags 40+ risky clause types, like forced arbitration and data sale, with severity scoring.",
    stack: ["JavaScript", "Chrome Extensions"],
    links: [
      {
        label: "Chrome Web Store",
        url: "https://chromewebstore.google.com/detail/clauseguard-terms-privacy/hobknhfcdglmcoognfmgmdclkofljhfi",
      },
      { label: "GitHub", url: "https://github.com/amoddhopavkar2/clauseguard" },
    ],
  },
  {
    name: "DevCV",
    description:
      "Live-preview LaTeX resume builder with multiple templates, auto-save and PDF export.",
    stack: ["React", "TypeScript", "Node.js", "LaTeX"],
    links: [{ label: "GitHub", url: "https://github.com/amoddhopavkar2/devcv.xyz" }],
  },
  {
    name: "LeetCode PowerUp",
    description:
      "Chrome extension that adds YouTube solution links and a per-problem scratchpad to LeetCode problem pages.",
    stack: ["JavaScript", "YouTube Data API", "Chrome Extensions"],
    links: [{ label: "GitHub", url: "https://github.com/amoddhopavkar2/leetcode-powerup" }],
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Java", "Python", "TypeScript", "JavaScript", "SQL"] },
  {
    group: "Backend",
    items: ["Spring Boot", "REST / OpenAPI", "Kafka", "Postgres", "MongoDB", "Redis", "Elasticsearch"],
  },
  { group: "Infrastructure", items: ["Kubernetes", "Argo CD", "Docker", "GitLab CI/CD", "AWS", "Nginx"] },
  { group: "AI-native dev", items: ["Claude Code skills and hooks", "agentic repo design"] },
]
