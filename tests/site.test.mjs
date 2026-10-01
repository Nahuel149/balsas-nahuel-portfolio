import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { basePath, locales, pagePath, profileCopy } from "../src/site.js";
import { caseStudies } from "../src/case-studies.js";

test("URL generation preserves the project base and English root", () => {
  assert.equal(pagePath("en"), basePath);
  assert.equal(pagePath("es", "copa-kahl"), `${basePath}es/projects/copa-kahl/`);
});

for (const language of locales) {
  for (const project of [null, ...caseStudies]) {
    const slug = project?.slug || "";
    test(`${language}/${slug || "home"}: static content, metadata, links and assets`, async () => {
      const html = await readFile(path.join("dist", pagePath(language, slug).slice(basePath.length), "index.html"), "utf8");
      assert.ok(html.includes(`<html lang="${language}">`));
      assert.equal((html.match(/<h1\b/g) || []).length, 1);
      assert.equal((html.match(/name="description"/g) || []).length, 1);
      assert.ok(html.includes(`rel="canonical" href="https://nahuel149.github.io${pagePath(language, slug)}"`));
      for (const alternate of locales) assert.ok(html.includes(`hreflang="${alternate}" href="https://nahuel149.github.io${pagePath(alternate, slug)}"`));
      assert.ok(html.includes('hreflang="x-default"'));
      assert.ok(html.includes('property="og:image"'));
      const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
      assert.equal(schema["@graph"][1].inLanguage, language);
      assert.ok(html.includes(project ? project.copy[language].sections[0][0] : profileCopy[language].lead));
      for (const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
        const url = match[1].split("#")[0];
        if (!url.startsWith(basePath)) continue;
        const file = url.endsWith("/") ? `${url}index.html` : url;
        await access(path.join("dist", file.slice(basePath.length)));
      }
    });
  }
}

test("sitemap lists all twelve localized canonical pages", async () => {
  const xml = await readFile("dist/sitemap.xml", "utf8");
  assert.equal((xml.match(/<loc>/g) || []).length, 12);
  for (const language of locales) for (const project of [null, ...caseStudies]) {
    assert.ok(xml.includes(`https://nahuel149.github.io${pagePath(language, project?.slug || "")}`));
  }
});
