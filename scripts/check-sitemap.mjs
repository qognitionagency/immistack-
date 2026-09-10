// Fails the build when public/sitemap.xml drifts from the pages actually built.
//
// The sitemap is a hand-maintained static file copied verbatim out of public/,
// so nothing kept it honest. It drifted: it advertised /affiliate — a route
// deliberately unregistered because the page made a revenue-share offer to
// registered migration agents with no s.34 conflict disclosure behind it — so
// the one page we most needed crawlers not to find was the one we told them
// about.
//
// This compares the sitemap against `dist/`, the real build output, rather
// than against `allStaticPaths()` in seo/site.ts. Two reasons:
//
//   1. It is ground truth. A path can be declared and still fail to prerender;
//      the sitemap's job is to describe what a crawler will actually receive.
//   2. Reading the TS source meant shelling `npx tsx`, which is in neither
//      package.json nor node_modules — so the production build of a live site
//      fetched an unpinned package mid-build, with its stderr discarded. A
//      build gate must not be the least reliable step in the build.
//
// Consequence: this runs AFTER the build, not before. It still fails the
// build, because it is the last link in the `&&` chain.

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const SITEMAP = "public/sitemap.xml";
const DIST = "dist";
const ORIGIN = "https://www.immistack.com";

if (!existsSync(DIST)) {
  console.error(`check:sitemap — ${DIST} not found. Run this after the build.`);
  process.exit(1);
}

/** Every prerendered page, as the path a crawler would request. */
function builtPaths(dir = DIST) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name === "assets") continue;
      out.push(...builtPaths(p));
    } else if (name.endsWith(".html")) {
      const rel = relative(DIST, p).replace(/\.html$/, "");
      // 404 is for the host to serve, never for a crawler to be sent to.
      if (rel === "404") continue;
      out.push(rel === "index" ? "/" : `/${rel}`);
    }
  }
  return out;
}

const built = builtPaths().sort();
const xml = readFileSync(SITEMAP, "utf8");
const listed = [
  ...xml.matchAll(
    new RegExp(`<loc>${ORIGIN.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&")}([^<]*)</loc>`, "g"),
  ),
].map((m) => m[1] || "/");

const missing = built.filter((p) => !listed.includes(p));
const stale = listed.filter((p) => !built.includes(p));

if (missing.length === 0 && stale.length === 0) {
  console.log(`check:sitemap — ${listed.length} URLs, matches the built pages.`);
  process.exit(0);
}

console.error("");
console.error("check:sitemap FAILED — public/sitemap.xml does not match dist/.");
if (stale.length)
  console.error(
    `\n  Listed but NOT built (404s advertised to crawlers):\n${stale
      .map((p) => `    · ${p}`)
      .join("\n")}`,
  );
if (missing.length)
  console.error(
    `\n  Built but NOT listed (crawlers will not be told about these):\n${missing
      .map((p) => `    · ${p}`)
      .join("\n")}`,
  );
console.error(`\nEdit ${SITEMAP} to match.\n`);
process.exit(1);
