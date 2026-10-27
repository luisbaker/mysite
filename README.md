# Luis Ferreira · Portfolio BTS SIO SISR

Portfolio de Luis Ferreira, étudiant en BTS SIO option SISR en alternance chez [BoucheCousue](https://bouchecousue.com).

## Sections

1. **Accueil** : présentation rapide
2. **Profil** : formation, entreprise, poste
3. **Alternance** : BoucheCousue et mes missions (réseau, WiFi, accès internet, support, sûreté)
4. **Projets personnels** : Mirror, serveur Proxmox, Portugal Towers, CellularFR, Edge Linky TIC
5. **Compétences** : les 3 blocs du BTS SIO SISR et les outils utilisés
6. **Veille technologique** : le Wi-Fi 7
7. **Contact**

## Lancer le site

```bash
npm install
npm start
```

Puis ouvrir http://localhost:3000. `npm run dev` relance le serveur à chaque modification (nodemon).

## Accès par code

Le site est fermé par un code d'accès, lu dans la variable d'environnement `SITE_CODE` (à définir dans Koyeb, jamais dans le code) :

- sans `SITE_CODE`, le site reste fermé pour tout le monde (seul `/health` répond) ;
- avec `SITE_CODE`, une page demande le code et le bon code ouvre le site pendant 30 jours sur ce navigateur ;
- changer `SITE_CODE` oblige tout le monde à ressaisir le nouveau code.

En local : `SITE_CODE=moncode npm start`.

## Structure

```
public/
├── index.html   # Contenu du site
├── styles.css   # Styles (thème sombre)
├── script.js    # Menu mobile, animations, effet terminal
└── docs/        # Tableau de synthèse E5 en PDF (téléchargeable sur le site)
docs/            # Tableau de synthèse E5 rempli (xlsx, modèle officiel session 2026)
server.js        # Serveur Express (+ /health pour Koyeb)
```
