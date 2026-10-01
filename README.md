# Nahuel Balsas Portfolio

Futuristic personal portfolio site for Nahuel Balsas Faravelli.

This repository is intentionally separate from the private job-search workspace.
It contains only public-safe portfolio content, a profile photo, and links to
public profiles or public project pages.

## Stack

- Vite
- React
- Lucide icons
- CSS modules through a single global stylesheet
- GitHub Pages deployment workflow

## Local Development

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```powershell
npm run build
```

The live GitHub Pages site is published from the committed `docs/` folder on
`main`. After changing the site, run `npm run build`, refresh `docs/` from
`dist/`, commit, and push.

## GitHub Project Refresh

Public project links and descriptions were reviewed on 2026-10-01.
The curated additions in `src/github-projects.js` are translated into English,
Spanish, and Japanese. They link to repository evidence, with separate app links
where GitHub lists a deployment. Deployments are links, not uptime guarantees.
Private repositories are not presented as public code. Personal family projects
and upstream-derived projects without a clear contribution summary are omitted.

## Privacy Boundary

Do not copy resumes, CrowdWorks logs, proposal files, screenshots with private
data, phone numbers, visa details, client conversations, or raw workspace files
into this repository.
