import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  BriefcaseBusiness,
  Bug,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  FileCheck2,
  Gamepad2,
  GraduationCap,
  Github,
  Globe2,
  Languages,
  Layers3,
  Linkedin,
  Mail,
  Network,
  PenTool,
  Rocket,
  Route,
  ShieldCheck,
  ShoppingCart,
  Terminal,
  TestTubeDiagonal,
  Trophy,
} from "lucide-react";
import "./styles.css";

const links = {
  github: "https://github.com/Nahuel149/",
  linkedin: "https://www.linkedin.com/in/nahuel-balsas",
  email: "mailto:nahuelbalsas199@gmail.com",
  dunit: "https://d-unit.world",
  scoutboard: "https://github.com/Nahuel149/scoutboard-ai",
  autoresearch: "https://github.com/Nahuel149/autoresearch-rtx3070",
  copaKahl: "https://copa-kahl.onrender.com/",
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

const proofRoutes = [
  {
    label: "Full-stack SaaS",
    title: "Start with D-Unit",
    text: "Best signal for React, FastAPI, integrations, auth, billing, deployment, and production-style debugging.",
    href: "#case-study",
    icon: Rocket,
  },
  {
    label: "QA / testing",
    title: "Read the QA range",
    text: "Best signal for bug reports, regression checks, localization QA, Playwright, pytest, and developer-ready reproduction notes.",
    href: "#qa-range",
    icon: Bug,
  },
  {
    label: "Data / AI workflows",
    title: "Open ScoutBoard",
    text: "Best signal for source tracking, validation rules, report workflows, football analytics, and public-safe TypeScript code.",
    href: links.scoutboard,
    icon: Network,
  },
  {
    label: "Writing / research",
    title: "Use the proof pack",
    text: "Best signal for source-backed summaries, AI-draft cleanup, readable Japanese samples, and careful delivery checks.",
    href: "#proof-points",
    icon: PenTool,
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
    eyebrow: "Live product design",
    title: "Copa Kahl",
    role: "World Cup 2026 prediction app",
    summary:
      "A deployed prode app with standings, prediction flows, rules, champions views, admin result loading, comments, sharing, and image export for tournament groups.",
    tags: ["React", "Product UX", "Game rules", "Standings", "Sharing", "Render"],
    href: links.copaKahl,
    cta: "Open live app",
    icon: Trophy,
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

const projectAtlas = [
  {
    eyebrow: "Full-stack SaaS",
    title: "D-Unit",
    type: "Private codebase, public product page",
    summary:
      "Analytics SaaS for digital businesses. I worked across dashboards, FastAPI services, Meta integrations, AI chat, billing, security middleware, tests, Docker, and AWS/EKS deployment work.",
    proof: "Public product page, private GitHub history, architecture notes, 177 tracked commits, 94 deployment records.",
    tags: ["React", "TypeScript", "FastAPI", "MongoDB", "MySQL", "OpenAI", "Meta API", "MercadoPago"],
    href: links.dunit,
    icon: Rocket,
  },
  {
    eyebrow: "Public portfolio app",
    title: "ScoutBoard AI",
    type: "Public-safe code repo",
    summary:
      "A football research and data QA app with source policies, validation rules, analytics pages, report previews, and workflow documentation.",
    proof: "Next.js app, tests, build scripts, sample data, public-safe reports, and source-tracking workflow.",
    tags: ["Next.js", "TypeScript", "Vitest", "Data QA", "Football analytics"],
    href: links.scoutboard,
    icon: Network,
  },
  {
    eyebrow: "Live sports product",
    title: "Copa Kahl",
    type: "Deployed Render app",
    summary:
      "World Cup 2026 prediction game for friends or groups, with participant standings, exact-score and knockout scoring, rules, champions views, comments, share actions, and downloadable table images.",
    proof: "Live Render deployment reviewed from public routes including table, predictions, rules, champions, admin entry, comments, sharing, and image download surfaces.",
    tags: ["React", "Render", "Tournament UX", "Scoring logic", "Admin flows", "Social sharing"],
    href: links.copaKahl,
    icon: Trophy,
  },
  {
    eyebrow: "ML experimentation",
    title: "Autoresearch RTX 3070 fork",
    type: "Public GitHub fork",
    summary:
      "Local adaptation of the autoresearch experiment setup for a Windows/RTX 3070 environment. The work is useful as evidence of AI-agent experimentation, Python setup, and research workflow curiosity.",
    proof: "Fork under Nahuel149 with local branch work.",
    tags: ["Python", "PyTorch", "LLM training", "Agent workflow", "RTX 3070"],
    href: links.autoresearch,
    icon: Cpu,
  },
  {
    eyebrow: "Remote web development",
    title: "Smart Wifi Access",
    type: "Contract work",
    summary:
      "Web application work focused on performance, retention, PWA behavior, WebAssembly, server-side rendering, frontend optimization, and ecommerce usability.",
    proof: "Resume-backed contract experience. No private client files published.",
    tags: ["PWA", "WebAssembly", "SSR", "Frontend optimization", "Ecommerce UX"],
    href: links.linkedin,
    icon: Globe2,
  },
  {
    eyebrow: "Enterprise development",
    title: "IBM Java/Spring systems",
    type: "Professional experience",
    summary:
      "Java/Spring work for enterprise financial systems, including database tasks, JUnit/Mockito tests, functional testing, and end-to-end test work.",
    proof: "Resume-backed employment history. Client-specific internals are not public.",
    tags: ["Java", "Spring", "JUnit", "Mockito", "Financial systems"],
    href: links.linkedin,
    icon: BriefcaseBusiness,
  },
  {
    eyebrow: "Game localization QA",
    title: "Keywords Studios Tokyo",
    type: "Professional QA experience",
    summary:
      "Mobile and console localization QA with English-Spanish, Spanish-English, and Japanese source reference work. Publicly mentionable context includes PS5, iOS, Android, Jira bug reporting, regression checks, smoke tests, and build tracking.",
    proof: "NDA-safe role summary and fictional bug-report sample.",
    tags: ["LQA", "Jira", "PS5", "iOS", "Android", "Regression testing"],
    href: links.linkedin,
    icon: Gamepad2,
  },
  {
    eyebrow: "Ecommerce operator",
    title: "Electronic Commerce NB",
    type: "Self-employed business",
    summary:
      "Ran a digital-products ecommerce business with online marketing across social channels. This supports product sense, customer communication, inventory/sales thinking, and small-business operations.",
    proof: "Timeline and resume-backed self-employment history.",
    tags: ["Ecommerce", "Digital products", "Marketing", "Customer support", "Operations"],
    href: links.linkedin,
    icon: ShoppingCart,
  },
  {
    eyebrow: "Writing and QA samples",
    title: "Public-safe proof pack",
    type: "Self-created samples",
    summary:
      "NDA-safe samples for bug reports, source-backed research summaries, AI-draft cleanup, and Kyoto local-area article writing. These are samples, not client deliverables.",
    proof: "Local Markdown samples and public-safe portfolio notes.",
    tags: ["Bug reports", "Research summaries", "Japanese writing", "Editing", "Source checks"],
    href: links.github,
    icon: PenTool,
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

const qaFacts = [
  "Spanish and English localization QA, with Japanese source reference when needed.",
  "Publicly mentionable titles include Dead Space, Sword Art Online Variant Showdown, Exoprimal, and Street Fighter 6.",
  "Reported localization, truncation, UI overlap, placeholder, terminology, crash/log, and gameplay clarity issues.",
  "Used reproducible steps, actual/expected results, evidence, build/platform/language details, and regression notes.",
];

const caseStudyDetails = [
  {
    title: "Integration reliability",
    text: "Debugged Meta/OAuth connection states, token behavior, reconnect flows, manual sync behavior, API response handling, and entitlement mismatches.",
  },
  {
    title: "AI and reporting flow",
    text: "Built AI chat behavior around conversation history, context refresh, feedback, MongoDB-backed retrieval, report flows, and human review needs.",
  },
  {
    title: "Security and operations",
    text: "Worked with CSRF checks, security headers, gateway middleware, rate-limit records, threat alerts, cost tracking, TTL-indexed collections, and health checks.",
  },
  {
    title: "Testing discipline",
    text: "Used Vitest, Testing Library, Playwright, pytest, and regression checks around auth, billing, Meta integrations, automation, and AI chat context.",
  },
];

const operatingPrinciples = [
  "Ask early when expected behavior is unclear.",
  "Keep private client data out of public proof.",
  "Write bugs with enough detail for another person to reproduce them.",
  "Use AI as draft support, then verify sources and edit manually.",
  "Prefer small verified releases over impressive claims.",
];

const credentials = [
  {
    icon: GraduationCap,
    title: "Education",
    lines: ["University of Buenos Aires", "Bachelor's degree in Accounting / CPA track"],
  },
  {
    icon: BadgeCheck,
    title: "Certifications",
    lines: [
      "Cambridge English First Certificate Exam",
      "Certified Analytics & Data Specialist",
      "Certified Email Marketing Specialist",
      "Certified Ecommerce Marketing Specialist",
      "Certified Customer Acquisition Specialist",
    ],
  },
  {
    icon: Languages,
    title: "Languages",
    lines: ["Spanish native-level", "English fluent", "Japanese: simple conversation, stronger written work communication"],
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
          <a href="#atlas">Atlas</a>
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

        <section className="routePanel" aria-labelledby="route-title">
          <div className="routeIntro">
            <Route size={24} aria-hidden="true" />
            <div>
              <p className="eyebrow">Proof navigator</p>
              <h2 id="route-title">Pick the track that matches the role.</h2>
            </div>
          </div>
          <div className="routeGrid">
            {proofRoutes.map((route) => {
              const Icon = route.icon;
              return (
                <a className="routeCard" href={route.href} key={route.title}>
                  <span>{route.label}</span>
                  <Icon size={22} aria-hidden="true" />
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                </a>
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

        <section className="sectionShell atlasShell" id="atlas" aria-labelledby="atlas-title">
          <div className="sectionIntro">
            <p className="eyebrow">Project atlas</p>
            <h2 id="atlas-title">More of the work I can safely talk about.</h2>
          </div>
          <div className="atlasGrid">
            {projectAtlas.map((project) => {
              const Icon = project.icon;
              return (
                <article className="atlasCard" key={project.title}>
                  <div className="atlasHead">
                    <Icon size={24} />
                    <div>
                      <p className="eyebrow">{project.eyebrow}</p>
                      <h3>{project.title}</h3>
                    </div>
                  </div>
                  <span className="projectType">{project.type}</span>
                  <p>{project.summary}</p>
                  <p className="proofLine">{project.proof}</p>
                  <ul className="tagList" aria-label={`${project.title} tags`}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a className="textLink" href={project.href} target="_blank" rel="noreferrer">
                    <span>Reference</span>
                    <ExternalLink size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section className="caseBand" id="case-study" aria-labelledby="case-title">
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

        <section className="caseDetailShell" aria-label="D-Unit case study details">
          {caseStudyDetails.map((item) => (
            <article className="caseDetailCard" key={item.title}>
              <CheckCircle2 size={20} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className="qaBand" id="qa-range" aria-labelledby="qa-title">
          <div>
            <p className="eyebrow">QA range</p>
            <h2 id="qa-title">Game testing taught me to write bugs developers can actually use.</h2>
            <p>
              My QA background sits next to my development work. That matters: when something breaks, I think about user state, build number, locale, platform, logs, expected behavior, and regression risk.
            </p>
          </div>
          <div className="qaList">
            {qaFacts.map((fact) => (
              <article key={fact}>
                <TestTubeDiagonal size={18} />
                <span>{fact}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="principlesBand" aria-labelledby="principles-title">
          <div>
            <p className="eyebrow">Operating principles</p>
            <h2 id="principles-title">How I try to make the work easier to trust.</h2>
          </div>
          <ol>
            {operatingPrinciples.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ol>
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

        <section className="sectionShell credentialsShell" aria-labelledby="credentials-title">
          <div className="sectionIntro">
            <p className="eyebrow">Background</p>
            <h2 id="credentials-title">The non-code pieces still matter.</h2>
          </div>
          <div className="credentialGrid">
            {credentials.map((item) => {
              const Icon = item.icon;
              return (
                <article className="credentialCard" key={item.title}>
                  <Icon size={24} />
                  <h3>{item.title}</h3>
                  <ul>
                    {item.lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
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

        <section className="proofBand" id="proof-points" aria-label="Proof points">
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
