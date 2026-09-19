import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez ECO INGENIERIE pour une demande CEE.",
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container-site grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-2 font-display text-4xl md:text-6xl">
            Envoyez une demande d’informations
          </h1>
          <p className="mt-4 text-text-muted">
            Notre équipe vous recontactera pour avancer sur votre dossier CEE.
          </p>
          <dl className="mt-8 space-y-3 text-sm">
            <div>
              <dt className="text-text-muted">Téléphone</dt>
              <dd>
                <a
                  href={site.phoneHref}
                  className="text-lg font-medium text-accent"
                >
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-text-muted">Email</dt>
              <dd>
                <a
                  href={`mailto:${site.email}`}
                  className="text-lg font-medium text-accent"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-text-muted">Horaires</dt>
              <dd>{site.hours}</dd>
            </div>
            <div>
              <dt className="text-text-muted">Adresse</dt>
              <dd>{site.address}</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact#formulaire" className="btn btn-cta">
              Un expert vous rappelle
            </Link>
          </div>
        </div>

        <form
          id="formulaire"
          className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 md:p-8"
          action="#"
        >
          <div className="grid gap-4">
            <Field id="name" label="Nom" required />
            <Field id="email" label="Email" type="email" required />
            <Field id="phone" label="Téléphone" type="tel" />
            <div>
              <label htmlFor="vous" className="text-sm font-medium">
                Vous êtes
              </label>
              <select
                id="vous"
                name="vous"
                className="mt-1 w-full rounded-[var(--radius-sm)] border border-border bg-bg px-3 py-2"
                defaultValue=""
              >
                <option value="" disabled>
                  Sélectionner
                </option>
                <option>Artisan / installateur</option>
                <option>Bâtiment tertiaire ou industriel</option>
                <option>Mairie ou collectivité</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <label htmlFor="demande" className="text-sm font-medium">
                Votre demande
              </label>
              <select
                id="demande"
                name="demande"
                className="mt-1 w-full rounded-[var(--radius-sm)] border border-border bg-bg px-3 py-2"
                defaultValue=""
              >
                <option value="" disabled>
                  Sélectionner
                </option>
                <option>Demande d’informations</option>
                <option>Conformité CEE</option>
                <option>Conseils réglementaires</option>
                <option>Dépôts de dossier</option>
                <option>Valorisation CEE</option>
                <option>Orientation de projet</option>
              </select>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="ville" label="Ville" required />
              <Field id="cp" label="Code postal" required />
            </div>
            <Field id="societe" label="Votre société" />
            <div>
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-1 w-full rounded-[var(--radius-sm)] border border-border bg-bg px-3 py-2"
              />
            </div>
            <button type="submit" className="btn btn-cta">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-1 w-full rounded-[var(--radius-sm)] border border-border bg-bg px-3 py-2"
      />
    </div>
  );
}
