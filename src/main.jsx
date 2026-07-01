import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Bug,
  Code2,
  Database,
  ExternalLink,
  FileCheck2,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  Network,
  Rocket,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import "./styles.css";

const links = {
  github: "https://github.com/Nahuel149/",
  linkedin: "https://www.linkedin.com/in/nahuel-balsas",
  email: "mailto:nahuelbalsas199@gmail.com",
  dunit: "https://d-unit.world",
  scoutboard: "https://github.com/Nahuel149/scoutboard-ai",
};

const stats = [
  ["177", "tracked D-Unit commits"],
  ["94", "deployment records"],
  ["4", "work languages"],
  ["JST", "remote-ready schedule"],
];

const focus = [
  {
    icon: Code2,
    title: "Full-stack product builds",
    text: "React, TypeScript, FastAPI, Java/Spring, dashboards, APIs, auth flows, billing, and product-facing features.",
  },
  {
    icon: ShieldCheck,
    title: "QA-minded delivery",
    text: "Playwright, Vitest, Testing Library, pytest, Jira-style bug reports, regression checks, and clear reproduction notes.",
  },
  {
    icon: Database,
    title: "Data and integrations",
    text: "MongoDB, MySQL, Meta Graph API, OpenAI, MailerLite, MercadoPago, data checks, reports, and source-backed research.",
  },
];

const projects = [
  {
    eyebrow: "Primary case study",
    title: "D-Unit",
    role: "Full-stack SaaS developer",
    summary:
      "SaaS analytics platform for digital businesses, with dashboards, Meta integrations, AI-assisted insights, marketing automation, subscription billing, security middleware, and deployment workflows.",
    tags: ["React", "TypeScript", "FastAPI", "MongoDB", "MySQL", "AWS/EKS", "OpenAI"],
    href: links.dunit,
    cta: "View public product",
    icon: Rocket,
  },
  {
    eyebrow: "Public-safe code proof",
    title: "ScoutBoard AI",
    role: "Football research and data QA portfolio app",
    summary:
      "A self-created research operations app that turns football sample data into validation checks, analytics screens, and report-ready proof without using private client material.",
    tags: ["Next.js", "TypeScript", "Vitest", "Data QA", "Reports"],
    href: links.scoutboard,
    cta: "Open repository",
    icon: Network,
  },
  {
    eyebrow: "QA and writing proof",
    title: "Bug reports and research samples",
    role: "Localization QA, source summaries, and rewrite work",
    summary:
      "Reusable proof for game QA, technical research, AI-draft cleanup, and client-ready documentation based on public-safe examples.",
    tags: ["Jira", "LQA", "English", "Spanish", "Japanese reading"],
    href: links.github,
    cta: "See GitHub profile",
    icon: Bug,
  },
];

const stack = [
  ["Frontend", "React", "TypeScript", "Vite", "Next.js", "Tailwind", "Material UI"],
  ["Backend", "Python", "FastAPI", "Java", "Spring", "REST APIs", "Webhooks"],
  ["Data", "MongoDB", "MySQL", "ETL scripts", "Analytics models", "Embedding collections"],
  ["Testing", "Playwright", "Vitest", "Testing Library", "pytest", "JUnit", "Mockito"],
  ["Ops", "Docker", "AWS", "EKS", "Kubernetes", "Health checks", "GitHub workflows"],
  ["Workflow", "Jira", "Slack", "Docs", "Remote updates", "Stakeholder notes", "Readable commits"],
];

const timeline = [
  {
    period: "2024 - 2026",
    title: "D-Unit full-stack SaaS project",
    text: "Built across frontend, backend, integrations, testing, security middleware, documentation, and deployment workflows.",
  },
  {
    period: "2023 - 2024",
    title: "Smart Wifi Access web development",
    text: "Shipped web application work around performance, PWA behavior, WebAssembly, server-side rendering, and usability.",
  },
  {
    period: "2022 - 2023",
    title: "Keywords Studios Tokyo localization QA",
    text: "Tested mobile and console games with Jira bug reports, regression checks, build tracking, and English-Spanish LQA.",
  },
  {
    period: "2019 - 2022",
    title: "IBM Java/Spring development",
    text: "Implemented enterprise software features, database tasks, unit tests, and functional/end-to-end tests for financial systems.",
  },
];

function App() {
  return (
    <>
      <header className="siteHeader" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Nahuel Balsas home">
          <span className="brandMark">NB</span>
          <span>Nahuel Balsas</span>
        </a>
        <nav>
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a href="#timeline">Timeline</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="iconButton" href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
          <Github size={19} />
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="heroGrid" aria-hidden="true" />
          <img className="heroPortrait" src="./nahuel-balsas.jpg" alt="" />
          <div className="heroCopy">
            <p className="eyebrow">Kyoto based full-stack developer</p>
            <h1 id="hero-title">Nahuel Balsas</h1>
            <p className="heroLead">
              I build practical SaaS interfaces, backend APIs, data workflows, and QA-heavy product features for teams that need reliable execution across English, Spanish, and written Japanese contexts.
            </p>
            <div className="heroActions" aria-label="Main links">
              <a className="primaryButton" href="#work">
                <span>Explore work</span>
                <ArrowRight size={18} />
              </a>
              <a className="secondaryButton" href={links.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="signalPanel" aria-label="Current work signal">
            <div>
              <span className="signalDot" />
              <span>Available for remote and Japan-based product work</span>
            </div>
            <strong>Full-stack + QA + research</strong>
          </div>
        </section>

        <section className="statRail" aria-label="Portfolio highlights">
          {stats.map(([value, label]) => (
            <article className="statTile" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </section>

        <section className="sectionShell introShell" aria-labelledby="intro-title">
          <div className="sectionIntro">
            <p className="eyebrow">Working profile</p>
            <h2 id="intro-title">Developer discipline with a tester's eye.</h2>
          </div>
          <div className="focusGrid">
            {focus.map((item) => {
              const Icon = item.icon;
              return (
                <article className="focusCard" key={item.title}>
                  <Icon size={24} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="sectionShell workShell" id="work" aria-labelledby="work-title">
          <div className="sectionIntro">
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title">Portfolio signals that are safe to show.</h2>
          </div>
          <div className="projectGrid">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article className="projectCard" key={project.title}>
                  <div className="projectVisual" aria-hidden="true">
                    <Icon size={44} />
                    <span />
                    <span />
                  </div>
                  <div className="projectBody">
                    <p className="eyebrow">{project.eyebrow}</p>
                    <h3>{project.title}</h3>
                    <strong>{project.role}</strong>
                    <p>{project.summary}</p>
                    <ul className="tagList" aria-label={`${project.title} technologies`}>
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    <a className="textLink" href={project.href} target="_blank" rel="noreferrer">
                      <span>{project.cta}</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="caseBand" aria-labelledby="case-title">
          <div className="caseCopy">
            <p className="eyebrow">Case study snapshot</p>
            <h2 id="case-title">D-Unit connected product analytics, AI assistance, billing, and operations.</h2>
            <p>
              My work covered React dashboards, FastAPI services, MongoDB/MySQL data flows, Meta and MercadoPago integrations, AI/RAG chat behavior, marketing automation, route gating, health checks, and test coverage.
            </p>
            <a className="primaryButton dark" href={links.dunit} target="_blank" rel="noreferrer">
              <Globe2 size={18} />
              <span>Open D-Unit</span>
            </a>
          </div>
          <div className="caseConsole" aria-label="D-Unit build notes">
            <div><Terminal size={18} /> build notes</div>
            <pre>{`frontend: React + TypeScript + Vite
backend: FastAPI + Python
data: MongoDB + MySQL
testing: Vitest + Playwright + pytest
ops: Docker + AWS/EKS + health checks`}</pre>
          </div>
        </section>

        <section className="sectionShell" id="stack" aria-labelledby="stack-title">
          <div className="sectionIntro">
            <p className="eyebrow">Stack matrix</p>
            <h2 id="stack-title">Tools I can connect into actual product flow.</h2>
          </div>
          <div className="stackMatrix">
            {stack.map(([group, ...items]) => (
              <article className="stackRow" key={group}>
                <h3>{group}</h3>
                <div>
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="sectionShell timelineShell" id="timeline" aria-labelledby="timeline-title">
          <div className="sectionIntro">
            <p className="eyebrow">Experience path</p>
            <h2 id="timeline-title">Software, QA, and product support from multiple angles.</h2>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timelineItem" key={item.title}>
                <span>{item.period}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="proofBand" aria-label="Proof points">
          <article>
            <BadgeCheck size={24} />
            <h3>Remote communication</h3>
            <p>Clear written updates, early questions, documentation, GitHub workflow, and stakeholder-ready summaries.</p>
          </article>
          <article>
            <FileCheck2 size={24} />
            <h3>Source-backed writing</h3>
            <p>Technical research summaries, rewrite/proofreading samples, and report drafts with human review checkpoints.</p>
          </article>
          <article>
            <Bot size={24} />
            <h3>AI used carefully</h3>
            <p>AI assistance is treated as draft support, with source checks, manual editing, and delivery rules before final output.</p>
          </article>
          <article>
            <Layers3 size={24} />
            <h3>Multilingual range</h3>
            <p>Fluent English and Spanish, plus stronger written Japanese work communication for specs, tickets, and instructions.</p>
          </article>
        </section>

        <section className="contactSection" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">For product teams that need implementation plus verification.</h2>
            <p>
              Best fit: full-stack development, backend-oriented product work, QA/debugging support, data-heavy dashboards, technical research, and public-safe portfolio work.
            </p>
          </div>
          <div className="contactActions">
            <a className="primaryButton" href={links.email}>
              <Mail size={18} />
              <span>Email</span>
            </a>
            <a className="secondaryButton light" href={links.github} target="_blank" rel="noreferrer">
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a className="secondaryButton light" href={links.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
