# Ramzi & Sana Wedding Website

Site de mariage statique, bilingue FR/EN, construit avec React + Vite + TypeScript et compatible GitHub Pages.

## Lancer le projet

```bash
npm install
npm run dev
```

Pour produire la version de production :

```bash
npm run build
```

Le dossier genere est `dist/`.

## Ou modifier le contenu

Toute la configuration principale se trouve dans [src/data/weddingContent.ts](/Users/rsellami/Documents/codex/WedSite/src/data/weddingContent.ts).

Vous pouvez y modifier facilement :

- les noms des maries
- la date
- l'heure de debut
- le lieu
- l'adresse
- le lien RSVP Google Form
- le lien Google Maps
- la date limite RSVP
- l'email de contact
- tous les textes FR/EN
- la timeline
- les infos pratiques
- la FAQ
- les placeholders de galerie

## Ou remplacer les images

Le site utilise pour l'instant des placeholders elegants dans :

- [src/App.tsx](/Users/rsellami/Documents/codex/WedSite/src/App.tsx)
- [src/styles.css](/Users/rsellami/Documents/codex/WedSite/src/styles.css)

Pour ajouter de vraies images plus tard :

1. Ajoutez vos fichiers dans `public/` ou `src/assets/`.
2. Remplacez les blocs placeholder de la section lieu et de la galerie par des balises `img`.
3. Conservez des `alt` descriptifs pour l'accessibilite.

## Deploiement gratuit sur GitHub Pages

Cette configuration utilise deja `base: './'` dans [vite.config.ts](/Users/rsellami/Documents/codex/WedSite/vite.config.ts), ce qui convient bien a GitHub Pages pour un site statique simple.

### Option 1: deploiement manuel

1. Creez un repository GitHub.
2. Poussez ce projet sur la branche `main`.
3. Lancez `npm install` puis `npm run build`.
4. Envoyez le contenu du dossier `dist/` sur une branche `gh-pages`, ou utilisez l'interface GitHub Pages avec un workflow.

### Option 2: via GitHub Actions

Ajoutez un workflow `.github/workflows/deploy.yml` :

```yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Puis dans GitHub :

1. Ouvrez `Settings > Pages`.
2. Choisissez `GitHub Actions` comme source.
3. Poussez vos changements sur `main`.

## Notes utiles

- Le site est mobile-first et entierement statique.
- Aucun backend ni service payant n'est necessaire.
- Le bouton RSVP mobile est flottant sur petit ecran.
- Un fichier `.ics` est genere cote client pour "Ajouter au calendrier".
- Les animations restent legeres et compatibles avec une premiere mise en ligne rapide.
