# Accenergie — Spec de génération du site

Document de production. Stack : libre (pas PrestaShop).  
Références look : EcoFlow · Victron · Bluetti.  
Langue : FR uniquement.

---

## 0. Fondations

### 0.1 Marque

| Élément | Valeur |
|---|---|
| Nom | **Accenergie** (jamais ACE / ACC+ / Accenergies) |
| Tagline | Batteries lithium conçues pour durer |
| Email | contact@accenergie.com |
| Téléphone | 06 24 85 29 27 |
| Zone | France |
| Tone | Expert, clair, rassurant — pas corporate creux |

### 0.2 Direction visuelle

- **Atmosphère :** tech énergie premium, atelier réel, outdoor / van / marine.
- **Fonds :** pas de plat unique — gradients subtils, texture légère, ou photo full-bleed.
- **Typo :** expressive (display + texte). Interdite : Inter, Roboto, Arial, system-ui seul.
- **Éviter :** violet/indigo IA, crème + terracotta, broadsheet, dark glow, pills partout, multi-shadows, emojis UI.
- **Cartes :** interdites dans le hero. Ailleurs : seulement si interaction (produit cliquable, filtre). Sinon : layout ouvert.
- **Motion :** 2–3 intentions max (fade-in hero, reveal sections, hover produit léger).

### 0.3 Tokens (à définir en CSS variables)

```
--color-bg:          #F7F6F3        /* clair chaud neutre, pas crème “AI” */
--color-bg-muted:    #ECEAE4
--color-bg-inverse:  #0F1A17        /* vert-noir profond */
--color-accent:      #1F6B4A        /* vert technique */
--color-accent-2:    #C4F04D        /* lime signal (CTA secondaire / highlight) */
--color-text:        #121816
--color-text-muted:  #5A635E
--color-border:      #D8D5CC
--font-display:      /* ex. "Syne" ou "Outfit" */
--font-body:         /* ex. "Manrope" ou "Satoshi" */
--radius:            4px            /* anguleux, pas rounded-full */
--space-section:     clamp(4rem, 10vw, 7rem)
```

Ajuster après choix logo réel. L’important : **une** direction, pas un thème générique.

### 0.4 CTA — lexique

| Usage | Label |
|---|---|
| Principal | Trouver ma batterie |
| Secondaire conseil | Demander un conseil technique |
| Listing | Voir les meilleures ventes |
| Comparaison | Comparer les modèles |
| Pro | Obtenir un devis |
| Produit | Ajouter au panier |
| Guide | Lire le guide |

Un seul CTA primaire par viewport.

### 0.5 Réassurance — données (placeholders à valider)

> Remplacer par chiffres réels avant mise en ligne. Ne pas inventer.

| Preuve | Placeholder |
|---|---|
| Note Google | 4.8/5 |
| Batteries vendues | À confirmer |
| Garantie | 5 ans |
| SAV | Basé en France |
| Livraison | 24/48 h (si vrai) sinon “2–4 jours ouvrés” |
| Certifs | CE · UN38.3 · RoHS |
| Entreprise | Française |

---

## 1. Sitemap

```
/                         Accueil
/batteries                Catalogue (tous)
/batteries/camping-car    Usage
/batteries/bateau
/batteries/solaire
/batteries/vehicule
/batteries/nomade
/batteries/[slug]         Fiche produit
/trouver-ma-batterie      Configurateur / quiz
/comparer                 Comparateur (phase 2)
/calculateur-autonomie    Calculateur (phase 2)
/guides                   Index guides
/guides/[slug]            Article guide
/realisations             Ateliers + installations
/pourquoi-le-lithium      Hub pédagogique
/a-propos
/pro                      Compte / offre pro
/contact
/mentions-legales
/cgv
/confidentialite
/cookies
```

URLs propres, français, sans ID numériques.

---

## 2. Composants globaux

### 2.1 Header

- Logo Accenergie (wordmark fort)
- Nav : Batteries · Par usage ▾ · Guides · Réalisations · Pro · Contact
- Actions : Recherche · Compte · Panier (compteur)
- Sticky léger au scroll (fond blur / solid, pas ombre lourde)
- Mobile : menu full-screen sobre

### 2.2 Bandeau réassurance

Ligne horizontale scannable (icônes simples + texte court).  
Emplacements : sous hero · haut catalogue · près CTA fiche produit.

### 2.3 Carte produit

Contenu obligatoire :
- Image produit (ratio fixe)
- Badges optionnels : Meilleure vente | Nouveau
- Nom commercial + référence petite
- Note avis (★ 4.7 · 23 avis)
- Specs ligne : `12V · 180Ah · ~X j autonomie*`
- Usages (3 max)
- Prix TTC
- Dispo + délai (“En stock · Expédition sous 48 h”)
- CTA : Ajouter au panier (ou Voir le produit sur mobile étroit)

Pas de carte dans le hero. Sur listing : la carte = zone cliquable = interaction OK.

### 2.4 Bloc preuve / split

Alternance texte gauche / image droite (et inverse). Fonds `--bg` / `--bg-muted` / `--bg-inverse`.

### 2.5 FAQ accordion

Questions + réponses courtes. Schema FAQPage.

### 2.6 Footer

Colonnes :
1. Marque + pitch 1 ligne + réseaux
2. Produits / usages
3. Guides
4. Société (à propos, pro, contact, magasins)
5. Légal

Bas de footer :
- Adresse atelier · tél · email · horaires
- Mini carte Google (embed ou lien)
- Certifications (logos)
- Moyens de paiement
- Note Google
- Newsletter (email + consentement)
- © année Accenergie

---

## 3. Page d’accueil — sections

### S1 — Hero ⭐

**Job :** première impression marque + promesse + 1 action.

**Layout :** full-bleed photo réelle (installation ou produit en situation). Overlay sombre léger pour lisibilité. Pas de cartes, pas de badges flottants, pas de double CTA équivalent.

**Contenu :**
```
[Accenergie]  ← signal marque hero-level

Des batteries lithium
conçues pour durer
plus de 5000 cycles.

Pour camping-cars, bateaux,
installations solaires et véhicules électriques.

✓ Garantie 5 ans
✓ Livraison rapide
✓ Support technique français

[ Trouver ma batterie ]     ← seul CTA primaire
```

Lien texte discret optionnel sous le CTA : `Demander un conseil technique →`

**Assets :** 1 photo hero desktop + crop mobile (van/bateau/atelier réel). Alt descriptif.

**Motion :** fade-up titre + CTA (0.6s), Ken Burns très léger sur image (option).

---

### S2 — Réassurance

**Job :** baisser l’anxiété d’un achat 400–1200 €.

Bandeau 5–8 items (scroll horizontal mobile si besoin) :
- ★ 4.8/5 Google
- Garantie 5 ans
- SAV France
- Paiement sécurisé
- Livraison 24/48 h
- Entreprise française
- CE · UN38.3 · RoHS
- (Volume / années si validé)

---

### S3 — Catégories d’usage

**Job :** orienter sans jargon modèle.

**Titre :** Quelle batterie pour votre usage ?  
**Sous-titre :** Choisissez votre contexte. On vous montre les modèles adaptés.

**6 entrées (image réelle + label) :**
1. Camping-car / van
2. Bateau
3. Solaire / maison
4. Véhicule électrique léger
5. Batterie nomade
6. Voir tout le catalogue

Lien → `/batteries/[usage]`

---

### S4 — Produits populaires

**Job :** conversion catalogue.

**Titre :** Les plus demandées  
**Sous-titre :** Performances prouvées, prêtes à expédier.

Grille 3–4 cartes produit (meilleures ventes).  
CTA section : `Voir les meilleures ventes`

---

### S5 — Pourquoi Accenergie

**Job :** différenciation marque.

**Titre :** Pourquoi choisir Accenergie  
**Points (4 max, layout split + photo atelier) :**
1. Assemblées et contrôlées dans nos ateliers
2. BMS intelligent & Bluetooth
3. Conseil technique humain (pas un chatbot seul)
4. SAV et garantie gérés en France

CTA : `Découvrir nos ateliers` → `/realisations`

---

### S6 — Réalisations / preuve

**Job :** crédibilité (anti-IA).

**Titre :** Du banc de montage à votre installation  
**Sous-titre :** Ateliers, techniciens, expéditions, projets clients.

Grille / bande photos réelles (6–8) :
- Atelier
- Montage cellules / BMS
- Contrôle qualité
- Expédition
- Van équipé
- Bateau
- Maison / solaire
- (option) équipe

CTA : `Voir toutes les réalisations`

---

### S7 — Pédagogie (teaser)

**Job :** éduquer + SEO interne.

**Titre :** Bien choisir, sans être expert  
3 liens cards-légères (ou listes ouvertes) :
- Pourquoi passer au lithium ?
- Lithium vs AGM
- Comment choisir sa batterie ?

CTA : `Tous les guides`

---

### S8 — Témoignages

**Job :** preuve sociale.

3 avis (note, prénom, usage, citation courte, photo optionnelle installation).  
Lien : avis Google.

---

### S9 — FAQ

**Titre :** Questions fréquentes

Questions type :
1. Quelle capacité pour un camping-car ?
2. Les batteries Accenergie sont-elles compatibles Bluetooth ?
3. Quel délai de livraison ?
4. Que couvre la garantie 5 ans ?
5. Puis-je avoir un tarif professionnel ?
6. Comment se passe le SAV ?

---

### S10 — Contact / conseil

**Job :** lead pour indécis.

Fond inverse.  
**Titre :** Besoin d’un avis technique ?  
**Texte :** Décrivez votre usage. On vous oriente vers le bon modèle.  
CTA : `Demander un conseil technique` + tél cliquable.

---

## 4. Catalogue `/batteries`

- H1 : Batteries lithium Accenergie
- Intro 2 lignes
- Bandeau réassurance compact
- Filtres : Usage · Tension · Capacité · Bluetooth · Chauffage · Dispo
- Tri : Popularité · Prix · Capacité
- Grille cartes produit
- SEO : texte bas de page 150–250 mots (unique par catégorie usage)

### Catégories usage

Même template, H1/intro/filtre pré-coché selon usage.  
Photo header catégorie (réelle).

---

## 5. Fiche produit `/batteries/[slug]`

### Above the fold
- Galerie (produit + détail + usage)
- Badges (Meilleure vente / Nouveau)
- H1 nom commercial
- Réf. technique petite
- Note avis
- Prix TTC
- Dispo + date d’expédition estimée
- Specs clés chips : 12V · 180Ah · 5000+ cycles · Bluetooth · BMS
- Usages
- Quantité + **Ajouter au panier**
- Lien : Demander un conseil technique
- Micro-réassurance (garantie, livraison, SAV, paiement)

### Below
1. Description courte (bénéfices, pas roman)
2. Tableau specs complet
3. Autonomie estimée (hypothèses visibles)
4. Compatibilité / consignes sécurité
5. Garantie & livraison
6. Avis clients
7. Conformité (fabricant, responsable UE, alertes) — design intégré
8. Produits complémentaires / accessoires
9. FAQ produit

**Schema :** Product + Offer + AggregateRating + FAQ

**Slug exemple :** `batterie-lithium-12v-180ah-lifepo4`

---

## 6. Configurateur `/trouver-ma-batterie`

**Job :** CTA hero → recommandation.

### Quiz v1 (4 étapes)
1. Usage (camping-car / bateau / solaire / véhicule / nomade)
2. Besoin (autonomie weekend / quotidien / backup / propulsion)
3. Contraintes (budget max · Bluetooth oui/non · chauffage)
4. Résultat : 2–3 produits + “Pourquoi ces modèles” + CTA panier / conseil

Pas de compte requis. Sauvegarde session locale OK.

Phase 2 : calculateur Wh lié.

---

## 7. Guides

### Index `/guides`
Grille articles : titre, extrait, temps de lecture, catégorie.

### Articles prioritaires (copy outline)

| Slug | H1 |
|---|---|
| `pourquoi-passer-au-lithium` | Pourquoi passer au lithium ? |
| `lithium-vs-agm` | Lithium vs AGM : le comparatif |
| `comment-choisir-sa-batterie` | Comment choisir sa batterie lithium |
| `batterie-camping-car` | Quelle batterie pour mon camping-car ? |
| `comprendre-le-bms` | Quel BMS choisir ? (et à quoi il sert) |
| `duree-de-vie-cycles` | Durée de vie et cycles expliqués |
| `temps-de-recharge` | Temps de recharge : ce qu’il faut savoir |

Structure article :
- Intro problème
- 4–6 sections H2
- Tableau ou liste si comparatif
- CTA `Trouver ma batterie`
- Produits liés

---

## 8. Réalisations `/realisations`

- Hero court (pas full marketing) + H1
- Bloc Ateliers (texte + galerie)
- Bloc Installations clients filtrable (van / bateau / maison)
- CTA conseil

---

## 9. À propos `/a-propos`

- Qui est Accenergie (texte corrigé, phrases complètes)
- Activités : vente, atelier, conseil, SAV
- Photo équipe / atelier
- Valeurs : performance, sécurité, proximité
- Contact atelier

Corriger les erreurs de l’ancien site (phrases tronquées, email avec “s”).

---

## 10. Pro `/pro`

- H1 : Compte professionnel Accenergie
- Avantages : tarifs dégressifs, devis, accompagnement intégrateurs
- Formulaire demande compte / devis
- CTA téléphone

---

## 11. Contact `/contact`

- Formulaire : nom, email, tél, usage, message
- Coordonnées + horaires
- Carte
- Alternative : “Demander un conseil technique” prérempli usage

---

## 12. Assets à prévoir (checklist)

### Photos (priorité absolue — réelles)
- [ ] Hero homepage (1 desktop + 1 mobile)
- [ ] 5 photos usages (van, bateau, solaire, véhicule, nomade)
- [ ] Packshot chaque produit (fond neutre)
- [ ] Détail borne / BMS / Bluetooth app si existant
- [ ] Atelier (4+)
- [ ] Montage / contrôle (3+)
- [ ] Expédition (1–2)
- [ ] Installations clients (6+)
- [ ] Équipe / technicien (2+)

### Marque
- [ ] Logo SVG (clair + inverse)
- [ ] Favicon
- [ ] Open Graph image 1200×630

### UI
- [ ] Icônes set cohérent (stroke, pas emoji)
- [ ] Logos certifs CE / UN38.3 / RoHS
- [ ] Logos paiement
- [ ] Avatar / photos avis (si droits)

### Contenu data
- [ ] Catalogue produits (nom, slug, prix, specs, stock)
- [ ] Chiffres réassurance validés
- [ ] Avis Google (embed ou import)
- [ ] Horaires + adresse atelier exacte

---

## 13. SEO & technique (contraintes build)

- Meta title/description uniques
- Canonical
- `sitemap.xml` à la racine
- JSON-LD : Organization, Product, FAQPage, BreadcrumbList
- Images : WebP/AVIF, lazy, dimensions explicites
- LCP hero optimisé (priority fetch)
- Pas de scripts inutiles (pas de countdown gadget)
- Accessibilité : contrastes, focus, labels, textes d’icônes
- RGPD : banner cookies + pages légales
- Tracking : view_item, add_to_cart, begin_checkout, generate_lead, pro_devis

---

## 14. Phasage production

### Phase A — Impact max (MVP)
1. Design system + header/footer
2. Homepage (S1→S10)
3. Catalogue + fiche produit
4. Contact + à propos + légal
5. Photos réelles branchées
6. Réassurance chiffres validés

### Phase B
7. Configurateur `/trouver-ma-batterie`
8. Guides (3 premiers articles)
9. Réalisations
10. Espace Pro

### Phase C
11. Comparateur
12. Calculateur autonomie
13. Vidéos installation
14. Chat / assistance

---

## 15. Critères d’acceptation homepage

- [ ] Viewport 1 = marque + 1 titre + 1 phrase + preuves-preuves + 1 CTA + 1 image dominante
- [ ] Aucune carte / badge flottant sur le hero
- [ ] Bandeau réassurance visible sans scroll profond
- [ ] Parcours = histoire (pas double grille produits)
- [ ] CTA formulés en bénéfice
- [ ] Photos réelles (pas stock abstrait) sur hero + réalisations
- [ ] Mobile : lisible, CTA sticky éventuel panier seulement sur fiche produit
- [ ] Perf ressentie : hero net < 3 s 4G

---

## 16. Copy bank — microtextes

**Erreur stock :** “Rupture temporaire — être notifié”  
**Livraison :** “Expédition sous 48 h · Livraison France 2–4 jours”  
**Garantie :** “Garantie fabricant 5 ans — SAV France”  
**Pro vide panier :** “Besoin d’un volume ? Obtenir un devis”  
**Quiz empty :** “Aucun modèle parfait — un technicien vous rappelle”

---

*Fin de spec. Prête pour génération Phase A.*
