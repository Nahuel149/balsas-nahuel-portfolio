# Search and Hiring Visibility

## Published foundations

The production build prerenders three language homepages and three case studies
in each language. Each URL has readable HTML, a self-canonical URL, reciprocal
hreflang links, sharing metadata, and Person/WebPage structured data.
The English homepage remains at the existing root URL; Spanish and Japanese use
`/es/` and `/ja/`. Explicit URLs determine language, not browser storage.

Public interface capture: `public/copa-kahl.webp`, taken on 2026-10-01.
The deployment currently displays Copa Se mató Pavón branding. The screenshot
contains no entered credentials or participant records.

## Search Console: verified setup

On 2026-10-01, the URL-prefix property was created and ownership was verified
in the owner's signed-in Google account using Google's HTML file. Keep
`public/google89747c0ddf6f4c40.html` and its deployed copy in place.

The `sitemap.xml` submission was accepted by Search Console. Its initial
processing status was "Couldn't fetch", with zero discovered pages. A separate
live check returned HTTP 200, `application/xml`, and 12 valid sitemap URLs,
including with a Googlebot user-agent string. This local request is not proof
that Google's crawler successfully fetched it. Recheck the processing status
before reporting the sitemap as processed.

The homepage inspection initially reported "URL is not on Google" and
"URL is unknown to Google". Do not report any URL as indexed without a fresh
inspection showing that result.

An indexing request for the English homepage was accepted on 2026-10-01.
Search Console confirmed that the URL was added to its priority crawl queue.
This is a request, not confirmation of indexing. Do not repeatedly resubmit the
same URL to try to increase priority.

### Reverification steps

1. Add a URL-prefix property for
   `https://nahuel149.github.io/balsas-nahuel-portfolio/` in Google Search Console.
2. Obtain the verification HTML file or meta tag from that account. If using an
   HTML file, add the exact supplied file to `public/`, build, and publish.
   Do not invent verification tokens.
3. Verify ownership in Search Console, then submit `sitemap.xml`.
4. Inspect the homepages and case-study URLs. Check actual indexing status before
   reporting them as indexed. Deployment and sitemap submission do not prove it.

No third-party analytics or visitor tracking is installed.

## Hiring profile updates: owner review

Suggested LinkedIn headline, subject to the owner's review:
`Full-Stack Developer | React, TypeScript & Backend APIs | QA Background | Kyoto`

Add the portfolio URL to LinkedIn Featured and the GitHub profile's website field.
Keep location, experience, skills and language proficiency consistent with the
actual profile. These external account fields have not been edited.

## Measurement

Review Search Console's queries, impressions, clicks and indexed URLs separately
from genuine employer enquiries. Record application/interview outcomes separately.
Do not treat traffic, GitHub activity or a successful build as a hiring result.

## Domain and robots.txt

No domain was purchased. Update `src/site.js` and `vite.config.js` together if the
site moves to a custom domain, and set up redirects/canonical migration carefully.
On the current project-subdirectory deployment, a robots.txt placed under this
repo's URL is not the origin-root robots.txt and cannot control crawling. This
build therefore does not publish a misleading project-scoped robots.txt.

Sources: [Google's localized-page guidance](https://developers.google.com/search/docs/specialty/international/localized-versions),
[JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).
