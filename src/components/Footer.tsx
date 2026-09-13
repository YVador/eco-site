import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/data/site";

const certs = ["Mandataire CEE", "Contrôle documentaire", "Guichet unique"];

export function Footer() {
  return (
    <footer className="bg-bg-inverse text-white">
      <div className="container-site section grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Link href="/" className="inline-flex" aria-label={site.name}>
            <Logo height={56} className="max-h-14" />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
            Transition énergétique, conformité et primes accélérées pour vos
            dossiers CEE.
          </p>
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

        <div className="lg:col-span-3">
          <p className="text-sm font-semibold tracking-wide">Liens</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/65">
            <li>
              <Link href="/qui-sommes-nous" className="transition hover:text-cta">
                Qui sommes-nous ?
              </Link>
            </li>
            <li>
              <Link href="/guides" className="transition hover:text-cta">
                Prime CEE
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-cta">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="text-sm font-semibold tracking-wide">Un expert vous rappelle</p>
          <p className="mt-3 text-sm text-white/65">
            Dossier CEE — on vous recontacte rapidement.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-cta px-5 py-3">
              Être rappelé
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost border-white/20 px-5 py-3">
              {site.phoneDisplay}
            </a>
          </div>

          <div className="mt-8 grid gap-1 text-sm text-white/65">
            <p className="font-medium text-white">Coordonnées</p>
            <p>{site.address}</p>
            <a href={`mailto:${site.email}`} className="transition hover:text-cta">
              {site.email}
            </a>
            <a href={site.phoneHref} className="transition hover:text-cta">
              {site.phoneDisplay}
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
