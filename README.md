# Accenergie — Phase A

Site Next.js (App Router) généré selon `SPEC-GENERATION.md`.

## Démarrer

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Inclus (Phase A)

- Homepage S1→S10 (hero, réassurance, usages, produits, preuve, guides, avis, FAQ, contact)
- Catalogue `/batteries` + pages usage
- Fiches produit `/batteries/produit/[slug]`
- Configurateur `/trouver-ma-batterie`
- Guides, réalisations, à propos, pro, contact, légal

## À remplacer avant prod

- Photos Unsplash → photos réelles Accenergie
- Chiffres de réassurance (Google, volumes)
- Panier / checkout backend
- Formulaires → endpoint réel
- Textes légaux validés

## Stack

Next.js 16 · React 19 · Tailwind 4 · TypeScript · fonts Syne + Manrope
