import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../.prerender/main.js";
import { basePath, locales, pagePath, profileCopy, siteUrl } from "../src/site.js";
import { caseStudies } from "../src/case-studies.js";

const template = await readFile("dist/index.html", "utf8");
if (template.includes('rel="canonical"')) throw new Error("Run npm run build to generate a fresh Vite template before prerendering.");
const escape = (text) => text.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const routes = [];
for (const language of locales) {
  for (const project of [null, ...caseStudies]) {
    const slug = project?.slug || "";
    const route = pagePath(language, slug);
    const url = `https://nahuel149.github.io${route}`;
    const copy = profileCopy[language];
    const title = project ? `${project.title} | Nahuel Balsas` : copy.title;
    const description = project ? project.copy[language].summary : copy.description;
    const alternates = locales.map((locale) => `<link rel="alternate" hreflang="${locale}" href="https://nahuel149.github.io${pagePath(locale, slug)}" />`).join("\n");
    const schema = {
      "@context": "https://schema.org", "@graph": [
        { "@type": "Person", "@id": `${siteUrl}#person`, name: "Nahuel Balsas", url: siteUrl, jobTitle: "Full-stack developer", image: `${siteUrl}nahuel-balsas.jpg`, sameAs: ["https://github.com/Nahuel149", "https://www.linkedin.com/in/nahuel-balsas"] },
        { "@type": "WebPage", "@id": url, url, name: title, description, inLanguage: language, about: { "@id": `${siteUrl}#person` } },
      ],
    };
    const head = `<title>${escape(title)}</title>
<meta name="description" content="${escape(description)}" />
<link rel="canonical" href="${url}" />
${alternates}
<link rel="alternate" hreflang="x-default" href="https://nahuel149.github.io${pagePath("en", slug)}" />
<meta property="og:type" content="website" />
<meta property="og:title" content="${escape(title)}" />
<meta property="og:description" content="${escape(description)}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${siteUrl}${project?.image || "nahuel-balsas.jpg"}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escape(title)}" />
<meta name="twitter:description" content="${escape(description)}" />
<meta name="twitter:image" content="${siteUrl}${project?.image || "nahuel-balsas.jpg"}" />
<script type="application/ld+json">${JSON.stringify(schema).replaceAll("<", "\\u003c")}</script>`;
    const html = template.replace('<html lang="en">', `<html lang="${language}">`)
      .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, "")
      .replace(/<title>.*?<\/title>/, head)
      .replace('<div id="root"></div>', `<div id="root">${renderToString(React.createElement(App, { language, slug }))}</div>`)
      .replace(/^[ \t]+$/gm, "");
    const directory = path.join("dist", route.slice(basePath.length));
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, "index.html"), html);
    routes.push(url);
  }
}
await writeFile("dist/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}\n</urlset>\n`);
await writeFile("dist/.nojekyll", "");
console.log(`Prerendered ${routes.length} pages with canonical URLs, language alternates and structured data.`);
