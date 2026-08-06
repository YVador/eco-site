import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE = "http://localhost:3000";
const OUT = path.join(__dirname, "..", "screenshots");

const pages = [
  "/",
  "/solutions",
  "/solutions/prise-en-charge-cee",
  "/solutions/mandat-administratif",
  "/solutions/mandat-financier",
  "/solutions/delegation-cee",
  "/solutions/accompagnement-administratif",
  "/solutions/verification-documentaire",
  "/pour-qui/entreprises-emettrices",
  "/pour-qui/fournisseurs-energie",
  "/pour-qui/collectivites",
  "/pour-qui/bailleurs-sociaux",
  "/pour-qui/installateurs-artisans",
  "/pour-qui/particuliers",
  "/demande",
  "/fiches-cee",
  "/guides",
  "/guides/quest-ce-quun-cee",
  "/guides/mandataire-cee-maprimerenov",
  "/guides/valoriser-ses-cee",
  "/certifications",
  "/coup-de-pouce",
  "/a-propos",
  "/realisations",
  "/contact",
  "/mentions-legales",
  "/confidentialite",
  "/cookies",
];

function slugify(route) {
  if (route === "/") return "accueil";
  return route
    .replace(/^\//, "")
    .replace(/\//g, "__")
    .replace(/[^a-zA-Z0-9_-]/g, "-");
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
const page = await context.newPage();

fs.mkdirSync(OUT, { recursive: true });
const results = [];

for (let i = 0; i < pages.length; i++) {
  const route = pages[i];
  const url = `${BASE}${route}`;
  const name = `${String(i + 1).padStart(2, "0")}-${slugify(route)}.png`;
  const file = path.join(OUT, name);

try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
      // Force reveal + laisser le filet de sécurité Reveal s'appliquer
      await page.evaluate(() => {
        document.querySelectorAll(".reveal").forEach((el) => {
          el.classList.add("is-visible");
          el.classList.remove("is-pending");
        });
      });
      await page.waitForTimeout(400);
      await page.screenshot({
        path: file,
        fullPage: true,
        animations: "disabled",
      });
      results.push({ route, file: name, ok: true });
      console.log(`OK  ${route} -> ${name}`);
    } catch (err) {
    results.push({ route, error: String(err), ok: false });
    console.error(`ERR ${route}`, err.message);
  }
}

await browser.close();
fs.writeFileSync(path.join(OUT, "index.json"), JSON.stringify(results, null, 2));
console.log(`\nDone: ${results.filter((r) => r.ok).length}/${pages.length}`);
