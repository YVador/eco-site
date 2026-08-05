import Link from "next/link";
import { Logo } from "@/components/Logo";
import { audiences, site } from "@/data/site";

const socials = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

const certs = ["ISO 9001", "COFRAC", "CEE", "MaPrimeRénov’"];

export function Footer() {
  return (
    <footer className="bg-bg-inverse text-white">
      <div className="container-site section grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Link href="/" className="inline-flex" aria-label={site.name}>
            <Logo height={56} className="max-h-14" />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
            Votre bureau unique pour les prises en charge CEE. Transition
            énergétique, conformité et primes accélérées.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/70 transition hover:border-cta hover:text-cta"
              >
                {s.label}
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {certs.map((c) => (
              <span
                key={c}
                className="rounded-[var(--radius-sm)] bg-white/5 px-3 py-1.5 text-xs font-semibold text-cta"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="text-sm font-semibold tracking-wide">Pour qui</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/65">
            {audiences.slice(0, 5).map((u) => (
              <li key={u.slug}>
                <Link href={`/pour-qui/${u.slug}`} className="transition hover:text-cta">
                  {u.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="text-sm font-semibold tracking-wide">Ressources</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/65">
            <li>
              <Link href="/solutions" className="transition hover:text-cta">
                Solutions
              </Link>
            </li>
            <li>
              <Link href="/guides" className="transition hover:text-cta">
                Les CEE
              </Link>
            </li>
            <li>
              <Link href="/certifications" className="transition hover:text-cta">
                Certifications
              </Link>
            </li>
            <li>
              <Link href="/coup-de-pouce" className="transition hover:text-cta">
                Coup de pouce
              </Link>
            </li>
            <li>
              <Link href="/simulation" className="transition hover:text-cta">
                Simulation
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="text-sm font-semibold tracking-wide">Newsletter</p>
          <p className="mt-3 text-sm text-white/65">
            Veille CEE et actualités de la transition énergétique.
          </p>
          <form className="mt-4 flex gap-2" action="/contact" method="get">
            <label className="sr-only" htmlFor="newsletter-email">
              Email
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="votre@email.fr"
              className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-cta"
            />
            <button type="submit" className="btn btn-cta px-5 py-3">
              OK
            </button>
          </form>

          <div className="mt-8 grid gap-1 text-sm text-white/65">
            <p className="font-medium text-white">Coordonnées</p>
            <p>{site.address}</p>
            <a href={`mailto:${site.email}`} className="transition hover:text-cta">
              {site.email}
            </a>
            <p>{site.hours}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ECO INGENIERIE. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/mentions-legales" className="hover:text-white">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-white">
              Confidentialité
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
