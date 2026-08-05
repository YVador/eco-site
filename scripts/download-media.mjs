import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "media");
fs.mkdirSync(outDir, { recursive: true });

const files = {
  "hero.jpg":
    "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=2200&q=80",
  "audience-entreprise.jpg":
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
  "audience-energie.jpg":
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80",
  "audience-collectivite.jpg":
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1400&q=80",
  "audience-bailleur.jpg":
    "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80",
  "audience-artisan.jpg":
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=80",
  "audience-particulier.jpg":
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
  "guide-cee.jpg":
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80",
  "guide-mandat.jpg":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
  "guide-valorisation.jpg":
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=80",
  "temoin-marie.jpg":
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
  "temoin-lucas.jpg":
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  "temoin-nathalie.jpg":
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
  "step-01.jpg":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  "step-02.jpg":
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
  "step-03.jpg":
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  "step-04.jpg":
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  "step-05.jpg":
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
  "step-06.jpg":
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
  "atelier.jpg":
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
};

for (const [name, url] of Object.entries(files)) {
  const dest = path.join(outDir, name);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
    console.log("SKIP", name);
    continue;
  }
  const res = await fetch(url);
  if (!res.ok) {
    console.log("FAIL", name, res.status);
    continue;
  }
  fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
  console.log("OK", name);
}
