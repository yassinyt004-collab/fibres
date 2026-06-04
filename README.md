# Dashboard Fibre - Commune de Tiznit

Site static HTML/CSS/JavaScript pour gérer un dashboard des lignes fibre/internet.

## Contenu

- `index.html` : structure du site
- `style.css` : design responsive moderne
- `script.js` : données extraites du fichier Excel + interactions

## Pages incluses

- Dashboard
- Routeurs
- Transferts
- Les problèmes
- Paramètres

## Utilisation avec GitHub Pages

1. Créez un repository GitHub.
2. Uploadez les fichiers `index.html`, `style.css`, `script.js`, `README.md`.
3. Allez dans `Settings > Pages`.
4. Choisissez `Deploy from a branch` puis `main` et `/root`.
5. Ouvrez le lien GitHub Pages généré.

## Modifier les données

Les données principales sont dans `script.js` :

- `mainLines`
- `fiberSubscriptions`
- `internetSubscriptions`

Les transferts et problèmes ajoutés depuis le navigateur sont stockés en `localStorage`.
