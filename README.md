# Luis Ferreira · Portfolio BTS SIO option SISR (Ingetis Paris · BoucheCousue)

Portfolio professionnel de **Luis Ferreira**, étudiant en **BTS SIO option SISR** (Solutions d'Infrastructure, Systèmes et Réseaux — Réforme 2020) au sein de l'école supérieure d'informatique **[Ingetis Paris](https://www.ingetis.com)** (Paris 5e), en alternance chez **[BoucheCousue](https://bouchecousue.com)** (Paris 10e).

Ce site sert de support officiel pour les épreuves professionnelles du BTS SIO (**E4**, **E5** et **E6**) et présente mes réalisations en entreprise et en formation, mon tableau de synthèse officiel, mes compétences et ma veille technologique sur le **Wi-Fi 7 (IEEE 802.11be)**.

---

## Arborescence du projet

```text
mysite/
├── docs/
│   └── tableau-de-synthese-e5.xlsx          # Tableau de synthèse E5 source (modèle officiel 2026)
├── public/                                  # Racine du site statique (servie par Express ou GitHub Pages)
│   ├── index.html                           # Structure HTML5 sémantique et accessible (sans photo ni certifications)
│   ├── css/
│   │   └── style.css                        # Feuille de style CSS3 (Thèmes Sombre & Clair, Responsive, Print)
│   ├── js/
│   │   ├── data.js                          # TOUTES les données centralisées (Ingetis, BoucheCousue, projets E6, veille, CV)
│   │   └── main.js                          # Logique Vanilla JS (rendu dynamique, filtres, modales, thème)
│   ├── docs/
│   │   ├── tableau-de-synthese-e5.pdf         # Tableau de synthèse officiel en PDF téléchargeable
│   │   ├── tableau-de-synthese-e5.png         # Aperçu haute définition du tableau officiel
│   │   ├── CV_Luis_Ferreira.pdf               # PDF placeholder du CV (à remplacer par votre CV final)
│   │   ├── dossier-technique-siege-lan.pdf    # PDF placeholder du dossier technique Siège Social LAN/Wi-Fi
│   │   ├── dossier-technique-liaison-100g.pdf # PDF placeholder du dossier technique Liaison L3 100 Gb/s
│   │   ├── dossier-technique-infogerance.pdf  # PDF placeholder du dossier technique Support / Audits Wi-Fi
│   │   ├── dossier-technique-mirror.pdf       # PDF placeholder de la documentation Mirror Linux
│   │   └── dossier-technique-proxmox.pdf      # PDF placeholder de la documentation Proxmox VE
│   ├── styles.css                           # Redirection @import vers css/style.css
│   ├── script.js                            # Script de compatibilité
│   ├── robots.txt                           # Directives d'indexation
│   └── sitemap.xml                          # Plan du site SEO
├── server.js                                # Serveur Express pour Koyeb (+ contrôle d'accès SITE_CODE & /health)
├── package.json                             # Dépendances Node.js (Express)
└── README.md                                # Documentation complète
```

---

## 1. Comment personnaliser le contenu (`public/js/data.js`)

Toutes les informations affichées sur le site sont regroupées dans un unique fichier commenté en français : **`public/js/data.js`** (objet `PORTFOLIO_DATA`). Vous n'avez **pas besoin de modifier `index.html`** pour mettre à jour vos textes :

- **`PORTFOLIO_DATA.profil`** : votre nom, option (`SISR`), école (`Ingetis Paris 5e`), entreprise (`BoucheCousue`), email, liens GitHub/LinkedIn et lignes du terminal d'accueil.
- **`PORTFOLIO_DATA.aPropos`** : votre présentation, vos objectifs de poursuite d'études (Bachelor / Mastère chez Ingetis) et vos qualités.
- **`PORTFOLIO_DATA.btsSio`** : présentation des options SISR / SLAM et des épreuves E4, E5, E6.
- **`PORTFOLIO_DATA.referentiel` & `competencesTechniques`** : les 3 blocs officiels du référentiel BTS SIO et vos jauges techniques filtrables (`reseau`, `wifi`, `systeme`, `securite`, `code`).
- **`PORTFOLIO_DATA.experiences`** : la timeline de votre alternance (2j école Ingetis / 3j entreprise BoucheCousue).
- **`PORTFOLIO_DATA.realisations`** : vos fiches détaillées pour l'oral (Siège social LAN/Wi-Fi, Interconnexion L3 100 Gb/s, Support/Infogérance, Mirror, Proxmox VE, Portugal Towers & CellularFR, Edge Linky TIC).
- **`PORTFOLIO_DATA.tableauSynthese`** : les lignes du tableau interactif croisant vos réalisations avec les 6 compétences du Bloc 1 (`B1.1` à `B1.6`).
- **`PORTFOLIO_DATA.veille`** : votre dossier de veille technologique sur le **Wi-Fi 7 (802.11be)** (problématique, méthodologie, articles datés et conclusion).
- **`PORTFOLIO_DATA.cv`** : l'aperçu imprimable de votre CV et le lien vers `docs/CV_Luis_Ferreira.pdf`.

### Remplacer un PDF placeholder par votre vrai PDF
Tous les PDF vides (placeholders valides) ont déjà été créés dans `public/docs/` pour qu'aucun bouton ne renvoie d'erreur 404 :
- `public/docs/CV_Luis_Ferreira.pdf`
- `public/docs/dossier-technique-siege-lan.pdf`
- `public/docs/dossier-technique-liaison-100g.pdf`
- `public/docs/dossier-technique-infogerance.pdf`
- `public/docs/dossier-technique-mirror.pdf`
- `public/docs/dossier-technique-proxmox.pdf`

Il vous suffit d'écraser ces fichiers dans `public/docs/` avec vos PDF définitifs en gardant le même nom de fichier.

---

## 2. Lancer le site en local ou sur Koyeb (avec `server.js`)

```bash
npm install
SITE_CODE=moncode npm start
```

Puis ouvrez `http://localhost:3000`.

---

## 3. Déployer gratuitement sur GitHub Pages

1. Allez sur votre dépôt GitHub `https://github.com/luisbaker/mysite`.
2. Cliquez sur **Settings** → **Pages**.
3. Configurez le déploiement du dossier `public/` (via GitHub Actions Static HTML ou branche dédiée).
