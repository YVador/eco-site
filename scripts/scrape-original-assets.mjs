import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "media");
fs.mkdirSync(outDir, { recursive: true });

const html = await (await fetch("https://eco-ingenierie.fr/", {
  headers: { "User-Agent": "Mozilla/5.0" },
})).text();

const socials = [...html.matchAll(/https?:\/\/(?:www\.)?(?:facebook|twitter|x|youtube|linkedin|instagram)\.com\/[^"'\\\s>]+/gi)].map((m) => m[0].replace(/\\/g, ""));
console.log("SOCIALS", [...new Set(socials)]);

const tels = [...html.matchAll(/0\d(?:[\s.-]?\d{2}){4}/g)].map((m) => m[0]);
console.log("TELS", [...new Set(tels)]);

const imgUrls = [...html.matchAll(/https?:\/\/[^"'\\\s>]+\.(?:jpg|jpeg|png|webp)/gi)]
  .map((m) => m[0].replace(/\\/g, "").split("?")[0])
  .filter((u) => /eco-ingenierie|wp-content|uploads/i.test(u));

const unique = [...new Set(imgUrls)].slice(0, 20);
console.log("IMGS", unique.length);

for (let i = 0; i < unique.length; i++) {
  const url = unique[i];
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) {
      console.log("FAIL", res.status, url);
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    const ext = path.extname(new URL(url).pathname) || ".jpg";
    const file = path.join(outDir, `src-${String(i + 1).padStart(2, "0")}${ext}`);
    fs.writeFileSync(file, buf);
    console.log("OK", file, buf.length);
  } catch (e) {
    console.log("ERR", url, e.message);
  }
}
