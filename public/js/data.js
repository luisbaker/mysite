/**
 * ============================================================================
 * DONNÉES CENTRALISÉES DU PORTFOLIO BTS SIO (E4 / E5 / E6)
 * ============================================================================
 * Modifiez uniquement ce fichier pour mettre à jour l'ensemble du site :
 * profil, formation BTS SIO (Ingetis Paris), compétences, expériences/alternance,
 * réalisations professionnelles (fiches E5/E6), tableau de synthèse,
 * veille technologique et CV.
 */

const PORTFOLIO_DATA = {
    // ------------------------------------------------------------------------
    // 1. INFORMATIONS PERSONNELLES & ACCUEIL
    // ------------------------------------------------------------------------
    profil: {
        prenom: "Luis",
        nom: "Ferreira",
        nomComplet: "Luis Ferreira",
        initiales: "LF",
        option: "SISR",
        optionTitreComplet: "Solutions d'Infrastructure, Systèmes et Réseaux",
        statut: "Étudiant en BTS SIO option SISR à Ingetis Paris · Alternant Technicien Systèmes & Réseaux",
        etablissement: "École Supérieure d'Informatique INGETIS — Paris 5e (62 bis rue Gay-Lussac)",
        etablissementUrl: "https://www.ingetis.com",
        promotion: "Session 2026 (2024 – 2026)",
        entrepriseActuelle: "BoucheCousue",
        entrepriseUrl: "https://bouchecousue.com",
        localisation: "Paris (Île-de-France)",
        accroche: "Étudiant en BTS SIO option SISR chez Ingetis (Paris 5e) et alternant technicien systèmes et réseaux chez BoucheCousue, intégrateur IT à Paris (10e). Je participe à la conception, au déploiement et à l'exploitation des réseaux, du Wi-Fi, de la fibre optique et des infrastructures systèmes de clients professionnels.",
        cvPdf: "docs/CV_Luis_Ferreira.pdf",
        tableauSynthesePdf: "docs/tableau-de-synthese-e5.pdf",
        tableauSyntheseImg: "docs/tableau-de-synthese-e5.png",
        email: "iluisferreira1516@gmail.com",
        github: "https://github.com/luisbaker",
        githubLabel: "github.com/luisbaker",
        linkedin: "https://www.linkedin.com/in/luis-ferreira-5aa571257/",
        linkedinLabel: "Luis Ferreira",
        formspreeEndpoint: "", // Optionnel : ex. "https://formspree.io/f/xxxxxx" (sinon bascule automatique sur mailto:)
        terminal: {
            utilisateur: "luis@sisr:~",
            lignes: [
                { commande: "whoami", sortie: "luis_ferreira — Technicien Systèmes & Réseaux" },
                { commande: "cat ecole.txt", sortie: "INGETIS Paris 5e | BTS SIO option SISR | Alternance (2j école / 3j entreprise)" },
                { commande: "cat entreprise.txt", sortie: "BoucheCousue | Paris 10e | Intégrateur IT & Réseaux" },
                { commande: "ip -br addr show up", sortie: "eth0  UP  100Gb/s  L3-Routing / Meraki / UniFi / Proxmox" }
            ],
            commandesMachineAEcrire: [
                "Déploiement réseau & Wi-Fi haute densité ✔",
                "Interconnexion fibre optique 100 Gb/s L3 ✔",
                "Administration Linux, Proxmox VE & Cybersécurité ✔",
                "Prêt pour l'épreuve orale du BTS SIO ✔"
            ]
        }
    },

    // ------------------------------------------------------------------------
    // 2. À PROPOS (Présentation, parcours Ingetis + BoucheCousue, objectifs, qualités)
    // ------------------------------------------------------------------------
    aPropos: {
        presentation: [
            "Je prépare un <strong>BTS Services Informatiques aux Organisations (SIO)</strong>, option <strong>SISR</strong> (Solutions d'Infrastructure, Systèmes et Réseaux), au sein de l'école supérieure d'informatique <strong><a href=\"https://www.ingetis.com\" target=\"_blank\" rel=\"noopener\" class=\"inline-link\">Ingetis</a></strong> à Paris (5<sup>e</sup>), en alternance chez <strong><a href=\"https://bouchecousue.com\" target=\"_blank\" rel=\"noopener\" class=\"inline-link\">BoucheCousue</a></strong> (Paris 10<sup>e</sup>).",
            "Passionné par les réseaux, les télécoms et l'administration système depuis plusieurs années, je mène en parallèle de mon alternance des projets techniques d'auto-hébergement (serveur dédié Proxmox VE, miroir officiel de distributions Linux) ainsi que des projets de cartographie d'infrastructures mobiles 4G/5G.",
            "Le rythme d'alternance d'Ingetis me permet de confronter immédiatement mes acquis théoriques et les travaux pratiques de laboratoire à des environnements de production exigeants chez BoucheCousue : déploiement d'immeubles entiers, interconnexions fibre à très haut débit (100 Gb/s), audits radio Wi-Fi, sécurisation d'accès et infogérance multi-clients."
        ],
        objectifs: "À l'issue de mon BTS SIO chez Ingetis, je souhaite poursuivre mon cursus en alternance vers un Bachelor (Bac+3) puis un Mastère (Bac+5) en ingénierie des systèmes, réseaux, cloud et cybersécurité, tout en continuant d'évoluer sur des architectures réseau d'opérateurs ou d'intégrateurs.",
        cartesInfos: [
            { icone: "fas fa-graduation-cap", titre: "École & Formation", texte: "BTS SIO SISR chez Ingetis (Paris 5e — Quartier Latin)" },
            { icone: "fas fa-building", titre: "Entreprise d'accueil", texte: "BoucheCousue, intégrateur IT à Paris 10e" },
            { icone: "fas fa-network-wired", titre: "Spécialités", texte: "Réseaux L2/L3, Wi-Fi, Fibre, Linux & Proxmox" },
            { icone: "fas fa-broadcast-tower", titre: "Intérêts", texte: "Télécoms, réseaux mobiles 4G/5G, auto-hébergement" }
        ],
        qualites: [
            { titre: "Rigueur & Méthode", description: "Application stricte des procédures de déploiement, d'adressage IP/VLAN et de documentation technique.", icone: "fas fa-clipboard-check" },
            { titre: "Réactivité en production", description: "Diagnostic rapide d'incidents réseau ou système, sur site client comme en télémaintenance.", icone: "fas fa-bolt" },
            { titre: "Autonomie & Curiosité", description: "Apprentissage continu par le maintien d'un homelab Proxmox, d'un serveur miroir Linux et d'une veille active.", icone: "fas fa-compass" },
            { titre: "Sens du service client", description: "Communication claire avec les interlocuteurs techniques (opérateurs, DSI) et accompagnement pédagogique des utilisateurs.", icone: "fas fa-handshake" }
        ]
    },

    // ------------------------------------------------------------------------
    // 3. PRÉSENTATION DU BTS SIO (Réforme 2020 — Cursus Ingetis Paris)
    // ------------------------------------------------------------------------
    btsSio: {
        introduction: "Le Brevet de Technicien Supérieur Services Informatiques aux Organisations (BTS SIO), rénové par la réforme 2020, est un diplôme d'État de niveau Bac+2 (Niveau 5 / RNCP35340). Préparé en alternance au sein de l'école supérieure d'informatique Ingetis à Paris (5e), il forme des professionnels capables de gérer le patrimoine informatique, d'administrer des infrastructures systèmes et réseaux ou de développer des applications tout en intégrant la cybersécurité dès la conception.",
        options: [
            {
                code: "SISR",
                nom: "Solutions d'Infrastructure, Systèmes et Réseaux",
                estMonOption: true,
                icone: "fas fa-server",
                description: "L'option SISR (que je prépare chez Ingetis Paris) forme des spécialistes des réseaux et équipements informatiques : installation, administration, virtualisation, supervision et sécurisation des serveurs et réseaux d'entreprise et d'opérateurs.",
                debouches: [
                    "Technicien systèmes et réseaux",
                    "Administrateur systèmes et réseaux",
                    "Technicien d'infrastructure / télécoms",
                    "Technicien support et déploiement",
                    "Analyste d'exploitation / NOC"
                ]
            },
            {
                code: "SLAM",
                nom: "Solutions Logicielles et Applications Métiers",
                estMonOption: false,
                icone: "fas fa-code",
                description: "L'option SLAM forme des spécialistes de la conception, du développement et de la maintenance de programmes applicatifs (web, mobile, client lourd) ainsi que de l'administration et de la sécurisation des bases de données.",
                debouches: [
                    "Développeur d'applications web / mobile",
                    "Programmeur analyste",
                    "Technicien d'études informatiques",
                    "Chargé d'études et développement"
                ]
            }
        ],
        epreuves: [
            {
                code: "Épreuve E4",
                intitule: "Support et mise à disposition de services informatiques",
                blocLie: "Bloc 1 (Tronc commun SISR & SLAM)",
                coefficient: "Coeff. 4",
                modalite: "Oral de 40 min appuyé sur le portfolio et le tableau de synthèse",
                description: "Évalue l'aptitude du candidat à gérer le patrimoine informatique, répondre aux incidents, travailler en mode projet, mettre à disposition des services, développer la présence en ligne et organiser son développement professionnel (veille technologique et identité numérique) à partir du tableau de synthèse officiel."
            },
            {
                code: "Épreuve E5",
                intitule: "Administration des systèmes et des réseaux (Option SISR)",
                blocLie: "Bloc 2 (Spécialité SISR)",
                coefficient: "Coeff. 4",
                modalite: "Oral & Pratique sur deux expressions de besoins",
                description: "Valide les compétences métier de l'option SISR : conception, installation, test, déploiement, exploitation, dépannage et supervision d'une solution d'infrastructure système et réseau."
            },
            {
                code: "Épreuve E6",
                intitule: "Cybersécurité des services informatiques",
                blocLie: "Bloc 3 (Transversal adapté à l'option SISR)",
                coefficient: "Coeff. 4",
                modalite: "Écrit de 4h / Dossier et soutenance des réalisations",
                description: "Évalue la capacité à protéger les données personnelles, préserver l'identité numérique, sécuriser les équipements et usages, garantir la disponibilité/intégrité/confidentialité (DIC) et assurer la cybersécurité d'une infrastructure réseau."
            }
        ]
    },

    // ------------------------------------------------------------------------
    // 4. COMPÉTENCES DU RÉFÉRENTIEL (Blocs 1, 2 SISR, 3) & COMPÉTENCES TECHNIQUES
    // ------------------------------------------------------------------------
    referentiel: {
        bloc1: {
            code: "Bloc 1",
            titre: "Support et mise à disposition de services informatiques",
            sousTitre: "Tronc commun aux options SISR et SLAM",
            competences: [
                {
                    id: "B1.1",
                    nomCourt: "Patrimoine",
                    intitule: "Gérer le patrimoine informatique",
                    details: [
                        "Recenser et identifier les ressources numériques",
                        "Exploiter des référentiels, normes et standards adoptés par le prestataire",
                        "Mettre en place et vérifier les niveaux d'habilitation associés à un service",
                        "Vérifier les conditions de la continuité d'un service informatique",
                        "Gérer des sauvegardes",
                        "Vérifier le respect des règles d'utilisation des ressources numériques"
                    ]
                },
                {
                    id: "B1.2",
                    nomCourt: "Incidents",
                    intitule: "Répondre aux incidents et aux demandes d'assistance et d'évolution",
                    details: [
                        "Collecter, suivre et orienter des demandes",
                        "Traiter des demandes concernant les services réseau et système, applicatifs",
                        "Traiter des demandes concernant les applications"
                    ]
                },
                {
                    id: "B1.3",
                    nomCourt: "Présence en ligne",
                    intitule: "Développer la présence en ligne de l'organisation",
                    details: [
                        "Participer à la valorisation de l'image de l'organisation sur les médias numériques",
                        "Référencer les services en ligne de l'organisation et mesurer leur visibilité",
                        "Participer à l'évolution d'un site Web exploitant les données de l'organisation"
                    ]
                },
                {
                    id: "B1.4",
                    nomCourt: "Mode projet",
                    intitule: "Travailler en mode projet",
                    details: [
                        "Analyser les objectifs et les modalités d'organisation d'un projet",
                        "Planifier les activités",
                        "Évaluer les indicateurs de suivi d'un projet et analyser les écarts"
                    ]
                },
                {
                    id: "B1.5",
                    nomCourt: "Mise à dispo",
                    intitule: "Mettre à disposition des utilisateurs un service informatique",
                    details: [
                        "Réaliser les tests d'intégration et d'acceptation d'un service",
                        "Déployer un service",
                        "Accompagner les utilisateurs dans la mise en place d'un service"
                    ]
                },
                {
                    id: "B1.6",
                    nomCourt: "Dév. pro",
                    intitule: "Organiser son développement professionnel",
                    details: [
                        "Mettre en place son environnement d'apprentissage personnel",
                        "Mettre en œuvre des outils et stratégies de veille informationnelle",
                        "Gérer son identité professionnelle",
                        "Développer son projet professionnel"
                    ]
                }
            ]
        },
        bloc2: {
            code: "Bloc 2 SISR",
            titre: "Administration des systèmes et des réseaux",
            sousTitre: "Compétences propres à l'option SISR",
            competences: [
                {
                    id: "B2.1",
                    nomCourt: "Conception Infra",
                    intitule: "Concevoir une solution d'infrastructure réseau",
                    details: [
                        "Analyser un besoin et définir une architecture réseau et système adaptée",
                        "Choisir les équipements actifs, supports de transmission et services réseau",
                        "Élaborer un plan d'adressage IP, de segmentation VLAN et de routage",
                        "Maquetter et documenter l'architecture cible"
                    ]
                },
                {
                    id: "B2.2",
                    nomCourt: "Déploiement Infra",
                    intitule: "Installer, tester et déployer une solution d'infrastructure réseau",
                    details: [
                        "Installer et configurer les éléments d'infrastructure (switchs, routeurs, bornes Wi-Fi, hyperviseurs)",
                        "Déployer des serveurs physiques et virtuels (Linux, Windows, services d'infrastructure)",
                        "Effectuer les tests de recette, de débit, de couverture radio et de bascule",
                        "Rédiger la documentation technique et le dossier d'exploitation"
                    ]
                },
                {
                    id: "B2.3",
                    nomCourt: "Exploitation & Supervision",
                    intitule: "Exploiter, dépanner et superviser une solution d'infrastructure réseau",
                    details: [
                        "Administrer et maintenir en condition opérationnelle les systèmes et réseaux",
                        "Superviser la disponibilité, la bande passante et l'état de santé des équipements",
                        "Diagnostiquer et résoudre les dysfonctionnements matériels, logiciels ou réseau",
                        "Automatiser les tâches d'administration et de synchronisation"
                    ]
                }
            ]
        },
        bloc3: {
            code: "Bloc 3",
            titre: "Cybersécurité des services informatiques",
            sousTitre: "Sécurité appliquée aux infrastructures systèmes et réseaux",
            competences: [
                {
                    id: "B3.1",
                    nomCourt: "Données personnelles",
                    intitule: "Protéger les données à caractère personnel",
                    details: [
                        "Identifier les données à caractère personnel et appliquer les principes du RGPD",
                        "Limiter les accès et journaliser les traitements conformément aux recommandations CNIL"
                    ]
                },
                {
                    id: "B3.2",
                    nomCourt: "Identité numérique",
                    intitule: "Préserver l'identité numérique de l'organisation",
                    details: [
                        "Sécuriser les noms de domaine, certificats TLS/HTTPS et accès aux services publics",
                        "Protéger la réputation numérique et prévenir l'usurpation d'identité"
                    ]
                },
                {
                    id: "B3.3",
                    nomCourt: "Sécurité équipements",
                    intitule: "Sécuriser les équipements et les usages des utilisateurs",
                    details: [
                        "Gérer les postes et terminaux via MDM/GPO (Jamf, Microsoft 365)",
                        "Mettre en œuvre l'authentification forte, le contrôle d'accès physique (2N, Ajax) et sensibiliser les utilisateurs"
                    ]
                },
                {
                    id: "B3.4",
                    nomCourt: "Disponibilité / DIC",
                    intitule: "Garantir la disponibilité, l'intégrité et la confidentialité des services informatiques",
                    details: [
                        "Mettre en place la redondance des liens WAN (FTTO/FTTH + secours 4G/5G automatique)",
                        "Planifier, tester et vérifier les sauvegardes (Proxmox Backup, Synology)"
                    ]
                },
                {
                    id: "B3.5",
                    nomCourt: "Cybersécurité Réseau",
                    intitule: "Assurer la cybersécurité d'une infrastructure réseau",
                    details: [
                        "Segmenter les réseaux (VLANs d'entreprise, réseaux invités isolés, coworkings multi-tenants)",
                        "Configurer les pare-feux, ACL, VPN et durcir les serveurs exposés"
                    ]
                }
            ]
        }
    },

    competencesTechniques: [
        // Catégorie : Réseaux & Télécoms
        { nom: "VLAN, Trunking 802.1Q & STP", categorie: "reseau", niveau: 90, detail: "Segmentation L2, isolation multi-clients, Meraki / UniFi", icone: "fas fa-project-diagram" },
        { nom: "Routage L3 & Fibre Optique (10G/100G)", categorie: "reseau", niveau: 85, detail: "Interconnexion inter-sites, SFP+/QSFP28, FTTH/FTTO", icone: "fas fa-route" },
        { nom: "Services Réseau (DHCP, DNS, NAT, VPN)", categorie: "reseau", niveau: 90, detail: "Architecture d'adressage IP, passerelles et tunnels sécurisés", icone: "fas fa-network-wired" },
        { nom: "Réseaux Mobiles 4G / 5G & Failover WAN", categorie: "reseau", niveau: 90, detail: "Bascule automatique multi-WAN, analyse radio cellulaire", icone: "fas fa-broadcast-tower" },

        // Catégorie : Wi-Fi & Radio
        { nom: "Cisco Meraki & Ubiquiti UniFi", categorie: "wifi", niveau: 95, detail: "Déploiement Cloud Controller, profils RF, portails invités", icone: "fas fa-wifi" },
        { nom: "Audit de couverture Wi-Fi & Site Survey", categorie: "wifi", niveau: 85, detail: "Mesures par sonde, heatmaps, planification des canaux 2.4/5/6 GHz", icone: "fas fa-satellite-dish" },

        // Catégorie : Systèmes & Virtualisation
        { nom: "Linux (Debian / Ubuntu Server)", categorie: "systeme", niveau: 90, detail: "Administration CLI, systemd, NGINX/Apache, rsync, durcissement SSH", icone: "fab fa-linux" },
        { nom: "Proxmox VE (Virtualisation KVM / LXC)", categorie: "systeme", niveau: 85, detail: "Gestion d'hyperviseur dédié, bridge réseau VM, snapshots & sauvegardes", icone: "fas fa-cubes" },
        { nom: "Windows & Stockage NAS Synology", categorie: "systeme", niveau: 85, detail: "Déploiement postes, partages SMB/NFS, RAID et sauvegardes", icone: "fas fa-hdd" },
        { nom: "Microsoft 365 & Jamf (MDM Apple)", categorie: "systeme", niveau: 80, detail: "Administration des comptes, flotte macOS/iOS et support utilisateurs", icone: "fas fa-laptop-medical" },

        // Catégorie : Cybersécurité & Sûreté
        { nom: "Pare-feux, ACL & Isolation Réseau", categorie: "securite", niveau: 85, detail: "Filtrage inter-VLAN, cloisonnement coworkings & réseaux invités", icone: "fas fa-shield-alt" },
        { nom: "Sûreté IP (Vidéosurveillance, 2N, Ajax)", categorie: "securite", niveau: 80, detail: "Caméras IP PoE, contrôle d'accès interphonie SIP 2N, alarmes Ajax", icone: "fas fa-video" },

        // Catégorie : Scripts & Développement
        { nom: "Bash & Automatisation Linux (Cron / rsync)", categorie: "code", niveau: 85, detail: "Scripts de synchronisation miroir, maintenance et alertes", icone: "fas fa-terminal" },
        { nom: "Python, Lua & Kotlin (Outils & IoT)", categorie: "code", niveau: 75, detail: "Driver SmartThings Edge (Lua), relevés cellulaires Android (Kotlin)", icone: "fas fa-code" }
    ],

    // ------------------------------------------------------------------------
    // 5. EXPÉRIENCES PROFESSIONNELLES / STAGES & ALTERNANCE (TIMELINE)
    // ------------------------------------------------------------------------
    experiences: [
        {
            id: "exp-bouchecousue-2",
            periode: "2025 – 2026 (2e année BTS SIO — Ingetis Paris)",
            type: "Alternance (2j école / 3j entreprise)",
            poste: "Technicien Systèmes et Réseaux (Alternant)",
            entreprise: "BoucheCousue",
            lieu: "Paris 10e (Rue de la Grange aux Belles)",
            siteWeb: "https://bouchecousue.com",
            slogan: "« Tout votre IT, un seul partenaire »",
            presentationEntreprise: "BoucheCousue est un intégrateur IT parisien qui prend en charge l'informatique de ses clients de la conception à l'exploitation : accès internet (parc FTTH, FTTO et 4G/5G), réseau LAN et Wi-Fi haute densité, infogérance, téléphonie IP, visioconférence et sûreté (vidéosurveillance, contrôle d'accès, alarme) pour des grands comptes, startups, coworkings, hôtels et boutiques.",
            contexte: "Montée en responsabilité sur des projets d'infrastructure d'envergure (nouveaux sièges sociaux, liaisons fibre inter-sites à très haut débit, audits Wi-Fi) et maintien en condition opérationnelle du parc clients en infogérance.",
            missions: [
                "Participation au déploiement complet d'infrastructures réseaux LAN et Wi-Fi haute densité pour des sièges sociaux d'entreprise à Paris (immeubles multi-étages, centaines de postes de travail).",
                "Participation à des interconnexions inter-sites en niveau 3 (routage L3) à 100 Gb/s en Île-de-France via fibre optique dédiée.",
                "Réalisation d'audits Wi-Fi sur site avec sonde radio : génération de cartes de couverture (heatmaps) et préconisations d'implantation et de plan de fréquences.",
                "Conception et exploitation de réseaux de coworkings et lieux ouverts au public : Wi-Fi haute densité et cloisonnement sécurisé entre entreprises résidentes.",
                "Mise en service de liens fibre FTTH/FTTO avec bascule automatique (failover) sur secours 4G/5G."
            ],
            technologies: ["Cisco Meraki", "Ubiquiti UniFi", "Fibre 100 Gb/s", "Routage L3", "FTTO / FTTH / 5G", "Audit Wi-Fi", "VLAN"],
            competencesMobilisees: ["B1.1", "B1.2", "B1.4", "B1.5", "B2.1", "B2.2", "B2.3", "B3.4", "B3.5"]
        },
        {
            id: "exp-bouchecousue-1",
            periode: "2024 – 2025 (1re année BTS SIO — Ingetis Paris)",
            type: "Alternance (2j école / 3j entreprise)",
            poste: "Technicien Support, Réseaux et Sûreté IP (Alternant)",
            entreprise: "BoucheCousue",
            lieu: "Paris 10e (Rue de la Grange aux Belles)",
            siteWeb: "https://bouchecousue.com",
            slogan: "Intégration IT, Réseaux, Infogérance & Sûreté",
            presentationEntreprise: "Intégrateur IT accompagnant les entreprises dans l'installation et la gestion quotidienne de leurs infrastructures réseaux, postes de travail, salles de réunion et équipements de sécurité physique connectés.",
            contexte: "Intégration à l'équipe technique pour assurer le déploiement d'équipements réseaux chez les clients, le support utilisateur N1/N2 et l'installation de solutions de sûreté sur IP.",
            missions: [
                "Installation et configuration de switchs PoE et bornes Wi-Fi Cisco Meraki et Ubiquiti UniFi (création de VLANs, SSID entreprise et réseau invité isolé).",
                "Support technique et infogérance à distance et sur site : traitement des tickets d'incidents, préparation et gestion de parc sous Microsoft 365 et Jamf (macOS).",
                "Déploiement et maintenance de la téléphonie sur IP et de salles de visioconférence professionnelles.",
                "Installation et mise en réseau d'équipements de sûreté : caméras de vidéosurveillance IP, interphones connectés 2N et systèmes d'alarme Ajax."
            ],
            technologies: ["Cisco Meraki", "Ubiquiti UniFi", "Microsoft 365", "Jamf", "Synology", "Interphonie 2N", "Ajax", "VoIP"],
            competencesMobilisees: ["B1.1", "B1.2", "B1.5", "B2.2", "B2.3", "B3.3", "B3.5"]
        }
    ],

    // ------------------------------------------------------------------------
    // 6. RÉALISATIONS PROFESSIONNELLES (CŒUR DES ÉPREUVES E4 / E5 / E6)
    // ------------------------------------------------------------------------
    realisations: [
        {
            id: "real-siege-lan",
            titre: "Déploiement réseau LAN & Wi-Fi haute densité d'un siège social",
            sousTitre: "En entreprise (BoucheCousue) · Immeuble de 11 000 m² sur 9 étages (~900 postes)",
            categorie: "alternance",
            categorieLabel: "En entreprise (BoucheCousue)",
            periode: "2025 – 2026",
            lieu: "Paris",
            icone: "fas fa-building",
            dansTableauSynthese: true,
            resume: "Participation au déploiement complet de l'infrastructure réseau filaire et sans-fil d'un nouveau siège social d'entreprise à Paris : 11 000 m² répartis sur 9 étages pour raccorder environ 900 postes de travail en LAN et Wi-Fi haute densité.",
            technologies: ["LAN", "Wi-Fi", "Switchs PoE", "VLAN", "Cisco Meraki / UniFi", "Brassage & Recette"],
            blocs: ["Bloc 1", "Bloc 2", "Bloc 3"],
            competencesValidees: ["B1.4", "B1.5", "B2.2", "B3.5"],
            contexte: "Dans le cadre d'un emménagement dans un nouveau siège social situé à Paris, le bâtiment de 11 000 m² répartis sur 9 étages devait accueillir près de 900 collaborateurs et postes de travail avec une exigence élevée de disponibilité, de sécurité et de débit.",
            besoin: "Fournir une connectivité filaire (LAN) et sans-fil (Wi-Fi) fiable, performante et sécurisée sur l'ensemble des 9 plateaux, des salles de réunion et des espaces communs, dans un calendrier d'emménagement contraint.",
            objectifs: [
                "Raccorder et brasser l'ensemble des prises RJ45 destinées aux ~900 postes de travail et équipements (bornes Wi-Fi, salles de visio, contrôle d'accès).",
                "Déployer, adopter et configurer les switchs d'accès PoE dans les baies de brassage de chaque étage.",
                "Installer les bornes Wi-Fi pour garantir une couverture homogène haute densité sans zone blanche.",
                "Segmenter les flux par VLAN (collaborateurs, invités, équipements techniques) et valider le fonctionnement avant l'arrivée des équipes."
            ],
            environnementTechnique: [
                "Architecture LAN multi-étages (9 niveaux, baies de brassage d'étage reliées en fibre optique)",
                "Switchs administrables PoE+ et bornes Wi-Fi professionnelles haute densité",
                "Segmentation réseau par VLANs (802.1Q) et politiques de pare-feu",
                "Outils de test de câblage, sonde d'audit Wi-Fi et tableau de bord de supervision Cloud"
            ],
            etapes: [
                "1. Préparation et repérage : vérification des plans d'étage, de l'implantation des baies et du plan d'adressage IP / VLAN.",
                "2. Installation en baies : montage des switchs d'accès PoE, raccordement des liens montants (uplinks fibre) et organisation du brassage sur les bandeaux.",
                "3. Déploiement Wi-Fi : pose et raccordement PoE des bornes Wi-Fi sur les 9 étages selon le plan de couverture radio.",
                "4. Configuration logique : attribution des VLANs sur les ports des switchs, paramétrage des SSID, de la sécurité et des profils radio.",
                "5. Tests et recette : vérification de la connectivité filaire sur les plateaux, tests de débit et mesures de couverture Wi-Fi en conditions réelles."
            ],
            difficultesSolutions: [
                {
                    difficulte: "Volume important d'équipements et de prises (9 étages, ~900 postes) avec un planning d'ouverture strict.",
                    solution: "Organisation méthodique étage par étage en mode projet, pré-configuration des profils de ports dans le contrôleur et étiquetage rigoureux des baies."
                },
                {
                    difficulte: "Gestion de la haute densité Wi-Fi sur des plateaux ouverts très peuplés (risque d'interférences co-canal).",
                    solution: "Ajustement de la puissance d'émission (Tx Power), répartition des canaux sur la bande 5 GHz et largeur de canal adaptée à la densité."
                }
            ],
            resultats: "Mise en production réussie dans les délais pour l'emménagement des ~900 collaborateurs : réseau filaire et Wi-Fi stable, supervisé de manière centralisée et conforme aux exigences de sécurité.",
            captures: [
                { titre: "Architecture LAN multi-étages (9 plateaux / 900 postes)", legende: "Distribution par baies d'étage, switchs PoE et couverture Wi-Fi haute densité." },
                { titre: "Segmentation VLAN & Supervision Cloud", legende: "Séparation des flux utilisateurs, invités et équipements techniques." }
            ],
            liens: {
                docPdf: "docs/dossier-technique-siege-lan.pdf",
                siteExterne: "",
                github: ""
            }
        },
        {
            id: "real-liaison-100g",
            titre: "Interconnexion fibre optique L3 inter-sites à 100 Gb/s",
            sousTitre: "En entreprise (BoucheCousue) · Routage niveau 3 Paris ↔ Montreuil",
            categorie: "alternance",
            categorieLabel: "En entreprise (BoucheCousue)",
            periode: "2025 – 2026",
            lieu: "Paris ↔ Montreuil",
            icone: "fas fa-route",
            dansTableauSynthese: true,
            resume: "Participation à l'interconnexion en niveau 3 (routage L3) entre deux sites de production multimédia distants (Paris et Montreuil), via une liaison fibre optique dédiée à 100 Gb/s empruntant les tunnels du métro parisien.",
            technologies: ["Fibre optique", "100 Gb/s", "Routage L3", "QSFP28", "Architecture inter-sites"],
            blocs: ["Bloc 1", "Bloc 2"],
            competencesValidees: ["B1.4", "B1.5", "B2.1", "B2.2"],
            contexte: "Une entreprise de post-production image et son (cinéma et musique) répartit ses équipes sur deux sites : un site de post-production à Paris et un studio à Montreuil. Les flux vidéo non compressés (4K/RAW) et audio multipistes représentent des volumes de données massifs.",
            besoin: "Relier les deux sites distants avec une bande passante très élevée (100 Gb/s) et une latence minimale afin de permettre le travail collaboratif en temps réel sur les serveurs de stockage partagés, tout en isolant proprement les sous-réseaux de chaque site.",
            objectifs: [
                "Mettre en œuvre une liaison optique directe à 100 Gb/s entre les deux sites de Paris et Montreuil.",
                "Concevoir et configurer une architecture d'interconnexion en niveau 3 (routage IP L3) plutôt qu'un simple pontage L2 afin d'éviter la propagation des domaines de broadcast entre les deux sites.",
                "Tester la continuité optique, la négociation à 100 Gb/s, le routage inter-VLAN et les débits réels."
            ],
            environnementTechnique: [
                "Liaison fibre optique noire dédiée à 100 Gb/s entre Paris et Montreuil",
                "Équipements de commutation/routage L3 haute capacité avec interfaces optiques 100G (QSFP28)",
                "Plan d'adressage IP routé entre les réseaux de production des deux sites",
                "Outils de mesure optique et de test de débit réseau (iperf / monitoring d'interfaces)"
            ],
            etapes: [
                "1. Étude et conception : définition du plan d'adressage IP d'interconnexion, des tables de routage L3 et du choix des modules optiques 100G adaptés à l'atténuation du parcours.",
                "2. Coordination opérateurs : suivi de la livraison de la fibre dans les baies des deux sites.",
                "3. Installation matérielle : insertion des transceivers optiques 100G, jarretière fibre sur les tiroirs optiques et contrôle des niveaux de puissance lumineuse (dBm).",
                "4. Configuration L3 : paramétrage des interfaces d'interconnexion point-à-point, des routes inter-sites et des règles de filtrage.",
                "5. Validation : tests de latence, validation de la montée du lien à 100 Gb/s full-duplex et recette avec les flux métiers audio/vidéo."
            ],
            difficultesSolutions: [
                {
                    difficulte: "Éviter qu'une tempête de broadcast ou une boucle sur un site ne paralyse le second site de production.",
                    solution: "Choix d'une architecture routée en niveau 3 (L3) avec sous-réseau d'interconnexion dédié (/30 ou /31), cloisonnant les domaines L2 de chaque site."
                },
                {
                    difficulte: "Exigence de budget optique strict sur une liaison fibre longue distance souterraine.",
                    solution: "Vérification précise des valeurs d'atténuation (DOM/DDM sur les transceivers) et nettoyage rigoureux des connecteurs optiques avant mise en service."
                }
            ],
            resultats: "Liaison 100 Gb/s opérationnelle à très faible latence entre Paris et Montreuil, permettant aux équipes de production d'accéder instantanément aux médias lourds d'un site à l'autre.",
            captures: [
                { titre: "Topologie L3 inter-sites Paris ↔ Montreuil à 100 Gb/s", legende: "Interconnexion 100 Gb/s routée sur infrastructure fibre optique dédiée." },
                { titre: "Recette du lien 100G & Routage inter-sites", legende: "Validation de la synchronisation optique et de l'isolation des domaines de diffusion." }
            ],
            liens: {
                docPdf: "docs/dossier-technique-liaison-100g.pdf",
                siteExterne: "",
                github: ""
            }
        },
        {
            id: "real-infogerance",
            titre: "Support, Infogérance, Audits Wi-Fi & Sûreté IP multi-clients",
            sousTitre: "BoucheCousue · Gestion de parc, FTTH/FTTO + failover 4G/5G & Coworkings",
            categorie: "alternance",
            categorieLabel: "En entreprise (BoucheCousue)",
            periode: "2024 – 2026",
            lieu: "Paris & Île-de-France",
            icone: "fas fa-headset",
            dansTableauSynthese: true,
            resume: "Exploitation quotidienne, support N1/N2, gestion de parc (Microsoft 365, Jamf, Synology), audits de couverture Wi-Fi par sonde, mise en service d'accès FTTH/FTTO avec bascule 4G/5G et déploiement de réseaux de coworkings et équipements de sûreté (2N, Ajax).",
            technologies: ["Cisco Meraki", "Ubiquiti UniFi", "Microsoft 365", "Jamf", "Synology", "FTTO / 5G", "2N / Ajax"],
            blocs: ["Bloc 1", "Bloc 2", "Bloc 3"],
            competencesValidees: ["B1.1", "B1.2", "B2.3", "B3.3", "B3.4", "B3.5"],
            contexte: "BoucheCousue assure l'infogérance globale de nombreux clients professionnels (startups, grands comptes, espaces de coworking, hôtels et boutiques). Ces organisations dépendent entièrement de la disponibilité de leur accès internet, de leur Wi-Fi et de la réactivité du support technique.",
            besoin: "Maintenir en condition opérationnelle le patrimoine informatique des clients, traiter les incidents rapidement, auditer et optimiser les réseaux Wi-Fi existants, et garantir la continuité de service Internet ainsi que la sécurité physique et logique des locaux.",
            objectifs: [
                "Gérer le parc d'équipements réseaux (Meraki, UniFi), serveurs NAS (Synology) et postes clients (Microsoft 365, flotte Apple sous Jamf).",
                "Assurer le traitement des tickets d'incidents et des demandes d'assistance ou d'évolution sur site et à distance.",
                "Réaliser des audits Wi-Fi par sonde sur site pour éliminer les zones d'ombre et optimiser le plan de fréquences.",
                "Mettre en service des accès FTTH/FTTO avec bascule automatique (failover) sur lien cellulaire 4G/5G.",
                "Cloisonner les réseaux d'espaces de coworking (isolation entre entreprises résidentes et réseau invité) et intégrer la sûreté IP (caméras, interphones 2N, alarmes Ajax)."
            ],
            environnementTechnique: [
                "Contrôleurs Cloud Cisco Meraki Dashboard et Ubiquiti UniFi Network",
                "Sonde d'audit radio Wi-Fi et logiciel de cartographie (heatmaps RSSI / SNR)",
                "Routeurs multi-WAN (FTTO / FTTH + modem 4G/5G en failover automatique)",
                "Administration Microsoft 365, MDM Jamf Pro, NAS Synology DSM, téléphonie IP, interphones SIP 2N et centrales Ajax"
            ],
            etapes: [
                "1. Gestion des incidents (Ticketing) : qualification de la demande, diagnostic à distance (tableaux de bord Meraki/UniFi, ping, logs) ou intervention sur site.",
                "2. Gestion du patrimoine : inventaire des équipements, mise à jour des firmwares, gestion des comptes utilisateurs M365 et enrôlement des Mac sous Jamf.",
                "3. Continuité WAN : configuration des interfaces WAN primaire (fibre) et secondaire (4G/5G) avec sondes de détection de perte de lien pour bascule transparente.",
                "4. Audits Wi-Fi : relevés sur plans avec sonde radio, analyse du rapport signal/bruit et réajustement du placement des bornes et des canaux.",
                "5. Déploiement Sûreté & Coworking : création de VLANs dédiés par entreprise résidente (ACL d'isolation) et mise en réseau PoE des caméras et portiers 2N."
            ],
            difficultesSolutions: [
                {
                    difficulte: "Coupures fibre opérateur pouvant bloquer l'activité de boutiques, d'hôtels ou d'espaces de coworking.",
                    solution: "Systématisation du secours 4G/5G avec test périodique de bascule automatique (WAN Failover) et alertes de supervision."
                },
                {
                    difficulte: "Coexistence de dizaines d'entreprises différentes sur la même infrastructure physique en coworking.",
                    solution: "Segmentation stricte par VLANs, isolation des clients Wi-Fi (Client Isolation) sur les réseaux publics et règles de pare-feu inter-VLAN."
                }
            ],
            resultats: "Haute disponibilité des infrastructures clientes, résolution rapide des demandes d'assistance et amélioration mesurable de la qualité Wi-Fi après audit.",
            captures: [
                { titre: "Supervision Multi-Sites & Failover WAN 4G/5G", legende: "Suivi en temps réel des liens FTTO/FTTH et bascule automatique en cas d'incident opérateur." },
                { titre: "Cartographie d'audit Wi-Fi (Heatmap)", legende: "Analyse de couverture radio et optimisation des canaux en environnement dense." }
            ],
            liens: {
                docPdf: "docs/dossier-technique-infogerance.pdf",
                siteExterne: "https://bouchecousue.com",
                github: ""
            }
        },
        {
            id: "real-mirror",
            titre: "Mirror — Serveur miroir public de distributions Linux",
            sousTitre: "mirror.bakertelekom.fr · Synchronisation rsync, serveur HTTP & métriques",
            categorie: "formation",
            categorieLabel: "Projet personnel / Formation Ingetis",
            periode: "2024 – 2026",
            lieu: "Infrastructure auto-hébergée (BakerTelekom)",
            icone: "fas fa-server",
            dansTableauSynthese: false,
            resume: "Mise en place et exploitation d'un serveur miroir public de distributions Linux (mirror.bakertelekom.fr) : synchronisation automatisée des dépôts officiels via rsync, service web HTTP optimisé pour les téléchargements haut débit et supervision de la bande passante.",
            technologies: ["Linux Debian", "rsync", "Serveur Web HTTP/HTTPS", "Bash / Cron", "Supervision réseau"],
            blocs: ["Bloc 1", "Bloc 2", "Bloc 3"],
            competencesValidees: ["B1.5", "B2.2", "B2.3", "B3.4"],
            contexte: "Les distributions Linux s'appuient sur un réseau mondial de serveurs miroirs pour distribuer leurs images ISO et leurs paquets logiciels rapidement aux utilisateurs. Disposant d'une infrastructure serveur à haut débit, j'ai souhaité contribuer à la communauté open-source en opérant un miroir public français.",
            besoin: "Fournir un serveur HTTP/HTTPS rapide, fiable et constamment synchronisé avec les dépôts amont (upstream), tout en évitant la saturation disque ou les synchronisations concurrentes.",
            objectifs: [
                "Installer et durcir un serveur Linux Debian dédié à la diffusion de fichiers volumineux et de milliers de petits paquets.",
                "Automatiser la synchronisation périodique des dépôts via rsync avec gestion de fichiers de verrouillage (lockfiles).",
                "Configurer un serveur web performant (indexation claire, compression, TLS Let's Encrypt) et suivre la consommation de bande passante."
            ],
            environnementTechnique: [
                "Serveur Linux Debian en production (domaine mirror.bakertelekom.fr)",
                "Démon et scripts rsync planifiés via systemd timers / cron",
                "Serveur web NGINX / HTTP optimisé (sendfile, tcp_nopush, autoindex personnalisé, certificats TLS)",
                "Monitoring du trafic réseau et de l'espace de stockage"
            ],
            etapes: [
                "1. Dimensionnement du stockage : préparation des partitions dédiées aux dépôts pour isoler le système d'exploitation des données synchronisées.",
                "2. Scripts de synchronisation : écriture de scripts Bash utilisant rsync en deux passes (paquets puis métadonnées) avec contrôle de lockfile pour empêcher deux syncs simultanées.",
                "3. Configuration du serveur Web : publication de l'arborescence en HTTP/HTTPS avec une interface de navigation lisible et rapide.",
                "4. Supervision : mise en place du suivi de la bande passante sortante et de l'état de fraîcheur des synchronisations."
            ],
            difficultesSolutions: [
                {
                    difficulte: "Incohérence des dépôts si un utilisateur télécharge les index (`Packages` / `InRelease`) pendant que les paquets sont encore en cours de copie.",
                    solution: "Synchronisation atomique en deux étapes (d'abord les fichiers binaires, puis les fichiers d'index en dernier) et utilisation de `--delay-updates`."
                }
            ],
            resultats: "Serveur miroir public opérationnel et accessible sur mirror.bakertelekom.fr, offrant des téléchargements rapides et fiables à la communauté Linux.",
            captures: [
                { titre: "Interface publique mirror.bakertelekom.fr", legende: "Accès direct aux dépôts synchronisés et suivi de l'état du miroir." }
            ],
            liens: {
                docPdf: "docs/dossier-technique-mirror.pdf",
                siteExterne: "https://mirror.bakertelekom.fr",
                github: ""
            }
        },
        {
            id: "real-proxmox",
            titre: "Serveur dédié Proxmox VE — Virtualisation & Hébergement",
            sousTitre: "Hyperviseur KVM/LXC · Machines Debian, réseau virtuel & sauvegardes",
            categorie: "formation",
            categorieLabel: "Projet personnel / Formation Ingetis",
            periode: "2024 – 2026",
            lieu: "Serveur dédié",
            icone: "fas fa-cubes",
            dansTableauSynthese: false,
            resume: "Déploiement et administration d'un serveur dédié sous Proxmox VE : virtualisation de machines virtuelles (KVM) et conteneurs (LXC) sous Debian, architecture réseau virtuelle, pare-feu, sauvegardes automatisées et hébergement de mes services web et API.",
            technologies: ["Proxmox VE", "Debian", "Virtualisation KVM/LXC", "Réseau Bridge / NAT", "Sauvegardes", "Pare-feu"],
            blocs: ["Bloc 2", "Bloc 3"],
            competencesValidees: ["B2.1", "B2.2", "B2.3", "B3.4", "B3.5"],
            contexte: "Pour héberger mes différents projets (bases de données télécoms Portugal Towers et CellularFR, API, services d'expérimentation SISR) de façon isolée et sécurisée, j'ai mis en place une infrastructure de virtualisation sur serveur dédié.",
            besoin: "Mutualiser les ressources matérielles d'un serveur dédié tout en cloisonnant chaque service dans sa propre machine virtuelle ou son propre conteneur, avec une politique de sauvegarde et de sécurité robuste.",
            objectifs: [
                "Installer et configurer l'hyperviseur Proxmox VE sur un serveur dédié.",
                "Concevoir l'architecture réseau virtuelle (Linux Bridges vmbr, routage/NAT, reverse-proxy HTTPS).",
                "Déployer des VM et conteneurs Debian isolés par service et automatiser leurs sauvegardes régulières.",
                "Sécuriser l'accès d'administration (SSH par clés, 2FA sur l'interface Proxmox, pare-feu PVE)."
            ],
            environnementTechnique: [
                "Hyperviseur Proxmox Virtual Environment (PVE) basé sur Debian GNU/Linux",
                "Machines virtuelles KVM et conteneurs légers LXC sous Debian",
                "Réseau virtuel (vmbr0 / sous-réseaux internes), Reverse Proxy TLS et Proxmox Firewall",
                "Planification de sauvegardes automatisées (vzdump / snapshots)"
            ],
            etapes: [
                "1. Installation et durcissement de l'hôte Proxmox VE : sécurisation SSH, activation de l'authentification à deux facteurs (TOTP) et configuration du pare-feu intégré.",
                "2. Configuration réseau : création des ponts réseau (bridges) pour interconnecter les VM et acheminer les flux web via un reverse-proxy.",
                "3. Provisionnement : création de modèles (templates) Debian pour déployer rapidement de nouvelles instances propres.",
                "4. Politique de sauvegarde : planification de sauvegardes complètes compressées avec vérification d'intégrité."
            ],
            difficultesSolutions: [
                {
                    difficulte: "Exposer plusieurs services web en HTTPS avec un nombre limité d'adresses IPv4 publiques sur le serveur dédié.",
                    solution: "Mise en place d'un réseau interne privé pour les conteneurs applicatifs et d'un reverse-proxy frontal gérant la terminaison TLS (SNI) et le renouvellement Let's Encrypt."
                }
            ],
            resultats: "Plateforme de virtualisation stable, sécurisée et évolutive hébergeant en production mes projets web et mes laboratoires de test SISR.",
            captures: [
                { titre: "Architecture Proxmox VE & Isolation des VM/LXC", legende: "Cloisonnement des services applicatifs, reverse-proxy TLS et sauvegardes planifiées." }
            ],
            liens: {
                docPdf: "docs/dossier-technique-proxmox.pdf",
                siteExterne: "",
                github: ""
            }
        },
        {
            id: "real-telecoms",
            titre: "Portugal Towers & CellularFR — Cartographie des réseaux 4G/5G",
            sousTitre: "portugaltowers.eu & cellularfr.fr · Bases de données cellulaires & App Android",
            categorie: "formation",
            categorieLabel: "Projet personnel / Formation",
            periode: "2024 – 2026",
            lieu: "En ligne (France & Portugal)",
            icone: "fas fa-broadcast-tower",
            dansTableauSynthese: false,
            resume: "Conception et hébergement de deux plateformes publiques dédiées aux réseaux mobiles : Portugal Towers (base de données et carte des antennes 4G/5G des opérateurs portugais alimentée par une application Android) et CellularFR (base de données Netmonster des antennes Orange France).",
            technologies: ["Télécoms 4G/5G", "Base de données", "Android / Kotlin", "Cartographie Web", "API REST"],
            blocs: ["Bloc 1", "Bloc 2"],
            competencesValidees: ["B1.3", "B1.5", "B2.3"],
            contexte: "Passionné par l'ingénierie des réseaux mobiles (identification des cellules eNodeB/gNodeB, bandes de fréquences, TAC, PCI), j'ai développé et mis en ligne deux outils destinés aux passionnés et techniciens télécoms en France et au Portugal.",
            besoin: "Collecter, structurer et rendre consultables sur le web et dans l'application Netmonster les données techniques des antennes-relais 4G/5G relevées sur le terrain.",
            objectifs: [
                "Développer une application Android (Kotlin) capable de relever les identifiants cellulaires 4G/5G sur le terrain pour alimenter la base Portugal Towers.",
                "Mettre en ligne une interface cartographique interactive sur portugaltowers.eu.",
                "Générer et distribuer sur cellularfr.fr une base de données formatée pour Netmonster couvrant le réseau mobile d'Orange France."
            ],
            environnementTechnique: [
                "Serveurs web et bases de données hébergés sur mon infrastructure Proxmox Debian",
                "Application mobile Android développée en Kotlin (API TelephonyManager)",
                "Sites web publics portugaltowers.eu et cellularfr.fr"
            ],
            etapes: [
                "1. Collecte et modélisation : structuration des identifiants radio (MCC, MNC, eNB/gNB ID, Cell ID, bandes de fréquences).",
                "2. Développement de l'outil de relevé Android et de l'API de réception des mesures terrain.",
                "3. Déploiement des portails web cartographiques et d'export Netmonster, avec mise à jour régulière des jeux de données."
            ],
            difficultesSolutions: [
                {
                    difficulte: "Dédoublonnage et fiabilisation des relevés radio provenant de différents terminaux mobiles sur le terrain.",
                    solution: "Filtrage et agrégation par identifiant unique de station de base (eNodeB / gNodeB) et validation par croisement des secteurs."
                }
            ],
            resultats: "Deux sites de référence utilisés par la communauté télécom pour identifier et localiser les émetteurs 4G/5G au Portugal et chez Orange France.",
            captures: [
                { titre: "Portails portugaltowers.eu & cellularfr.fr", legende: "Cartographie interactive des cellules 4G/5G et exports de bases Netmonster." }
            ],
            liens: {
                docPdf: "",
                siteExterne: "https://portugaltowers.eu",
                siteSecondaire: "https://cellularfr.fr",
                github: ""
            }
        },
        {
            id: "real-linky",
            titre: "Edge Linky TIC — Driver IoT SmartThings pour compteur Linky",
            sousTitre: "Open-source sur GitHub · Lua, IoT & Télé-Information Client",
            categorie: "formation",
            categorieLabel: "Projet personnel / Formation",
            periode: "2024 – 2025",
            lieu: "GitHub (Open Source)",
            icone: "fas fa-plug",
            dansTableauSynthese: false,
            resume: "Développement en Lua d'un driver SmartThings Edge permettant de lire en temps réel les trames de Télé-Information Client (TIC) d'un compteur électrique Linky pour suivre la consommation énergétique dans un système domotique.",
            technologies: ["Lua", "IoT / Zigbee", "SmartThings Edge", "Git / GitHub"],
            blocs: ["Bloc 1"],
            competencesValidees: ["B1.5", "B1.6"],
            contexte: "Suite à la migration de la plateforme domotique Samsung SmartThings vers l'architecture locale « Edge » (exécution locale en Lua sur le hub), les anciens gestionnaires Groovy pour modules Linky TIC n'étaient plus compatibles.",
            besoin: "Créer et publier en open-source un pilote (driver) SmartThings Edge capable d'interpréter les attributs électriques envoyés par un module TIC branché sur le compteur Linky.",
            objectifs: [
                "Développer le driver en langage Lua selon les spécifications de l'API SmartThings Edge.",
                "Remonter la puissance apparente (VA), l'intensité et les index de consommation (Wh/kWh) dans l'interface utilisateur.",
                "Publier le code source documenté sur GitHub pour la communauté."
            ],
            environnementTechnique: [
                "Langage Lua & SDK SmartThings Edge CLI",
                "Protocole Zigbee (clusters SimpleMetering et ElectricalMeasurement)",
                "Gestion de versions Git et dépôt public GitHub"
            ],
            etapes: [
                "1. Analyse des clusters Zigbee exposés par le module Linky TIC.",
                "2. Écriture des gestionnaires (handlers) Lua pour convertir les valeurs brutes en unités standardisées (W, kWh, A).",
                "3. Packaging, tests sur hub physique et publication sur GitHub."
            ],
            difficultesSolutions: [
                {
                    difficulte: "Mise à l'échelle (diviseurs et multiplicateurs Zigbee) différente selon le mode du compteur Linky (Historique ou Standard).",
                    solution: "Gestion dynamique des facteurs d'échelle directement dans le handler de mesure Lua."
                }
            ],
            resultats: "Driver fonctionnel en exécution 100 % locale sur le hub et partagé en open-source sur GitHub.",
            captures: [
                { titre: "Dépôt GitHub luisbaker/EdgeLinkyTIC", legende: "Pilote Lua local pour le suivi énergétique temps réel sur SmartThings." }
            ],
            liens: {
                docPdf: "",
                siteExterne: "",
                github: "https://github.com/luisbaker/EdgeLinkyTIC"
            }
        }
    ],

    // ------------------------------------------------------------------------
    // 7. TABLEAU DE SYNTHÈSE OFFICIEL (CROISEMENT RÉALISATIONS × BLOC 1)
    // ------------------------------------------------------------------------
    tableauSynthese: [
        {
            titre: "Déploiement réseau LAN & Wi-Fi d'un nouveau siège social (11 000 m², 9 étages, ~900 postes)",
            lieu: "BoucheCousue",
            periode: "2025 – 2026",
            categorie: "En entreprise",
            realisationId: "real-siege-lan",
            competences: ["B1.4", "B1.5"]
        },
        {
            titre: "Interconnexion fibre optique L3 inter-sites à 100 Gb/s (Paris ↔ Montreuil)",
            lieu: "BoucheCousue",
            periode: "2025 – 2026",
            categorie: "En entreprise",
            realisationId: "real-liaison-100g",
            competences: ["B1.4", "B1.5"]
        },
        {
            titre: "Support, infogérance des clients, audits Wi-Fi et gestion de parc",
            lieu: "BoucheCousue",
            periode: "2024 – 2026",
            categorie: "En entreprise",
            realisationId: "real-infogerance",
            competences: ["B1.1", "B1.2", "B1.5"]
        },
        {
            titre: "Mirror (mirror.bakertelekom.fr) & Serveur dédié Proxmox VE",
            lieu: "Ingetis / Perso",
            periode: "2024 – 2026",
            categorie: "En formation / Personnel",
            realisationId: "real-mirror",
            competences: ["B1.1", "B1.5"]
        },
        {
            titre: "Portugal Towers (portugaltowers.eu) & CellularFR (cellularfr.fr)",
            lieu: "Ingetis / Perso",
            periode: "2024 – 2026",
            categorie: "En formation / Personnel",
            realisationId: "real-telecoms",
            competences: ["B1.3", "B1.5"]
        },
        {
            titre: "Veille technologique sur le Wi-Fi 7 (IEEE 802.11be) & Portfolio BTS SIO",
            lieu: "Ingetis Paris",
            periode: "2024 – 2026",
            categorie: "En formation",
            realisationId: "section-veille",
            competences: ["B1.6"]
        }
    ],

    // ------------------------------------------------------------------------
    // 8. VEILLE TECHNOLOGIQUE (Sujet, problématique, méthode, articles, synthèse)
    // ------------------------------------------------------------------------
    veille: {
        sujet: "Le Wi-Fi 7 (norme IEEE 802.11be — Extremely High Throughput)",
        problematique: "En quoi le Wi-Fi 7 (802.11be) transforme-t-il la conception et les performances des réseaux sans-fil d'entreprise à haute densité, et quelles sont ses contraintes de déploiement en Europe ?",
        justification: "Le déploiement et l'audit de réseaux Wi-Fi professionnels (Cisco Meraki, Ubiquiti UniFi) étant au cœur de mes missions d'alternance chez BoucheCousue (sièges sociaux, coworkings, hôtels), suivre l'arrivée et la standardisation du Wi-Fi 7 me permet d'anticiper le renouvellement des infrastructures clientes et les nouvelles règles d'ingénierie radio.",
        pointsCles: [
            {
                titre: "MLO (Multi-Link Operation)",
                icone: "fas fa-random",
                texte: "Un même terminal peut émettre et recevoir simultanément ou basculer dynamiquement sur plusieurs bandes de fréquences (2,4 GHz, 5 GHz et 6 GHz), réduisant drastiquement la latence et augmentant la résilience."
            },
            {
                titre: "Canaux ultra-larges de 320 MHz",
                icone: "fas fa-wave-square",
                texte: "Doublement de la largeur maximale des canaux dans la bande des 6 GHz (320 MHz contre 160 MHz en Wi-Fi 6E), doublant le débit crête théorique sur un lien radio."
            },
            {
                titre: "Modulation 4096-QAM & Multi-RU Puncturing",
                icone: "fas fa-microchip",
                texte: "La modulation 4096-QAM offre +20 % de débit à fort rapport signal/bruit (SNR), tandis que le Preamble Puncturing permet d'exploiter un canal large même si une sous-portion est parasitée."
            },
            {
                titre: "Réglementation européenne (Bande 6 GHz basse)",
                icone: "fas fa-globe-europe",
                texte: "En Europe (décision CEPT/ARCEP), seule la tranche basse du 6 GHz (5945 – 6425 MHz, soit 480 MHz) est ouverte au Wi-Fi (LPI), limitant à un seul canal de 320 MHz non chevauchant et rendant le 80/160 MHz plus pertinent en haute densité."
            }
        ],
        methodologie: [
            {
                outil: "Forum spécialisé lafibre.info",
                type: "Veille communautaire & terrain (Push/Pull)",
                icone: "fas fa-comments",
                description: "Participation active aux discussions techniques sur le Wi-Fi 6E/7, l'attribution du spectre 6 GHz par l'ARCEP, la fibre optique et la 4G/5G.",
                lien: "https://lafibre.info"
            },
            {
                outil: "Sources officielles & Constructeurs",
                type: "Documentation normative & Hardware",
                icone: "fas fa-broadcast-tower",
                description: "Suivi des publications de la Wi-Fi Alliance, de l'ARCEP / ANFR, ainsi que des fiches techniques (datasheets) Cisco Meraki (série CW917x) et Ubiquiti UniFi (U7 Pro / Enterprise)."
            },
            {
                outil: "LinkedIn & Newsletters Télécoms",
                type: "Réseau professionnel & Flux d'experts",
                icone: "fab fa-linkedin",
                description: "Abonnement aux ingénieurs radio (CWNE), aux pages constructeurs et aux listes de diffusion spécialisées en réseaux et infrastructures IT."
            },
            {
                outil: "Flux RSS / Agrégateur (Feedly & Alertes)",
                type: "Agrégation automatisée",
                icone: "fas fa-rss",
                description: "Centralisation des flux RSS de Next (ex-NextInpact), LeMagIT, Silicon et des blogs d'architecture réseau sur les mots-clés « 802.11be », « Wi-Fi 7 », « MLO » et « 6 GHz »."
            }
        ],
        articles: [
            {
                date: "Janvier 2024",
                source: "Wi-Fi Alliance",
                categorie: "Standardisation",
                titre: "Lancement officiel du programme de certification « Wi-Fi CERTIFIED 7 »",
                resume: "La Wi-Fi Alliance ouvre la certification officielle Wi-Fi 7 basée sur le draft IEEE 802.11be. Le programme garantit l'interopérabilité des fonctions phares : Multi-Link Operation (MLO), canaux de 320 MHz en 6 GHz, 4096-QAM et Multi-RU / Preamble Puncturing.",
                impactSISR: "Permet de recommander des équipements certifiés interopérables entre bornes d'entreprise et nouveaux terminaux clients.",
                url: "https://www.wi-fi.org/discover-wi-fi/wi-fi-certified-7"
            },
            {
                date: "Février 2024",
                source: "Ubiquiti UniFi",
                categorie: "Équipements Entreprise",
                titre: "Arrivée des bornes Wi-Fi 7 tri-bandes chez Ubiquiti (UniFi U7 Pro & U7 Pro Max)",
                resume: "Ubiquiti démocratise le Wi-Fi 7 en environnement professionnel avec des bornes tri-bandes (2,4 / 5 / 6 GHz) dotées d'un port uplink Ethernet 2,5 GbE PoE+, indispensable pour ne pas brider les débits radio du 802.11be sur le réseau filaire.",
                impactSISR: "Impact direct sur le câblage et le switching en entreprise : nécessité de prévoir des ports switch Multi-Gigabit (2.5G/5G/10G) et un budget PoE+ ou PoE++ accru.",
                url: "https://ui.com/wifi"
            },
            {
                date: "Juillet 2024",
                source: "IEEE Standards Association",
                categorie: "Norme IEEE 802.11be",
                titre: "Approbation finale de l'amendement IEEE 802.11be-2024",
                resume: "Après plusieurs années de travaux du groupe TGbe, l'IEEE ratifie officiellement le standard 802.11be (Extremely High Throughput). Les constructeurs peuvent désormais finaliser leurs firmwares sur une spécification figée, notamment pour l'ordonnancement MLO déterministe.",
                impactSISR: "Stabilité des implémentations logicielles (firmwares des contrôleurs Wi-Fi) pour les déploiements critiques en production.",
                url: "https://standards.ieee.org/ieee/802.11be/7516/"
            },
            {
                date: "Octobre 2024",
                source: "Cisco Meraki",
                categorie: "Haute Densité & Cloud",
                titre: "Annonce des points d'accès Wi-Fi 7 globaux Cisco Wireless CW9176 / CW9178",
                resume: "Cisco présente ses bornes Wi-Fi 7 d'entreprise unifiées (compatibles Catalyst et gestion Cloud Meraki), intégrant des radios tri-bandes 4x4, une radio d'analyse spectrale dédiée, un uplink 10G Multigigabit et le support d'AFC / LPI sur le 6 GHz.",
                impactSISR: "Convergence matérielle chez Cisco/Meraki et supervision avancée du spectre 6 GHz pour les sièges sociaux à très haute densité.",
                url: "https://meraki.cisco.com/products/wi-fi/"
            },
            {
                date: "2025 – 2026",
                source: "ARCEP / CEPT & Retours terrain (lafibre.info)",
                categorie: "Réglementation Spectre 6 GHz",
                titre: "Déploiement du Wi-Fi 7 en Europe : l'enjeu de la bande 6 GHz basse (5945–6425 MHz)",
                resume: "Contrairement aux États-Unis (FCC) qui ont ouvert 1200 MHz en 6 GHz, l'Europe maintient pour le Wi-Fi LPI (Low Power Indoor) uniquement la sous-bande basse de 480 MHz, tandis que la bande haute (6425–7125 MHz) reste disputée entre l'industrie mobile (5G/6G) et le Wi-Fi.",
                impactSISR: "En audit et déploiement d'entreprise en France, il est préférable d'utiliser 3 canaux de 160 MHz ou 6 canaux de 80 MHz en 6 GHz plutôt qu'un unique canal de 320 MHz afin d'éviter les interférences co-canal entre bornes voisines.",
                url: "https://www.arcep.fr/la-regulation/grands-dossiers-thematiques-transverses/le-wi-fi.html"
            }
        ],
        conclusion: "Le Wi-Fi 7 n'est pas qu'une course au débit théorique : pour un administrateur systèmes et réseaux (SISR), son véritable apport en entreprise réside dans le Multi-Link Operation (MLO) et le Preamble Puncturing qui fiabilisent la latence et la stabilité en environnement dense. En France, la limitation actuelle à 480 MHz dans la bande 6 GHz impose de privilégier des largeurs de canal de 80 ou 160 MHz lors des audits radio, et de dimensionner les switchs d'accès en Multi-Gigabit (2,5 GbE / 10 GbE) avec PoE+."
    },

    // ------------------------------------------------------------------------
    // 9. CURRICULUM VITAE (APERÇU INTÉGRÉ & TÉLÉCHARGEMENT PDF)
    // ------------------------------------------------------------------------
    cv: {
        titrePoste: "Technicien Systèmes, Réseaux & Télécoms — BTS SIO option SISR",
        accroche: "Étudiant en BTS SIO option SISR à l'école Ingetis (Paris 5e) en alternance chez BoucheCousue (Paris 10e). Expérience concrète en déploiement LAN/Wi-Fi haute densité, interconnexion fibre optique 100 Gb/s, administration Linux/Proxmox et support multi-clients.",
        formation: [
            {
                periode: "2024 – 2026",
                diplome: "BTS Services Informatiques aux Organisations (SIO) — Option SISR",
                etablissement: "École Supérieure d'Informatique INGETIS — Paris 5e (62 bis rue Gay-Lussac)",
                details: "Formation en alternance (rythme 2 jours école / 3 jours entreprise). Administration des systèmes et des réseaux, virtualisation, cybersécurité des services informatiques et gestion de projet."
            }
        ],
        experiencesResume: [
            {
                periode: "2024 – 2026",
                poste: "Alternant Technicien Systèmes et Réseaux",
                entreprise: "BoucheCousue — Paris 10e",
                points: [
                    "Déploiement réseau LAN/Wi-Fi haute densité de nouveaux sièges sociaux (jusqu'à 11 000 m², 9 étages, ~900 postes).",
                    "Interconnexion routée L3 à 100 Gb/s inter-sites entre Paris et Montreuil sur liaison fibre optique dédiée.",
                    "Audits Wi-Fi sur site par sonde, réseaux de coworkings, liens FTTH/FTTO avec secours 4G/5G.",
                    "Support N1/N2, infogérance (Microsoft 365, Jamf, Synology) et sûreté IP (caméras, 2N, Ajax)."
                ]
            }
        ],
        projetsPhares: [
            "Mirror (mirror.bakertelekom.fr) : serveur miroir public de distributions Linux sous Debian / rsync.",
            "Serveur dédié Proxmox VE : virtualisation KVM/LXC, hébergement sécurisé et sauvegardes.",
            "Portugal Towers & CellularFR : cartographie et bases de données publiques des antennes mobiles 4G/5G.",
            "Edge Linky TIC : driver open-source en Lua pour le suivi énergétique Linky sur SmartThings."
        ],
        languesEtAtouts: [
            "Français (courant), Portugais, Anglais technique",
            "Capacité d'intervention sur site client (baies de brassage, optique, radio) et en administration distante CLI"
        ]
    },

    // ------------------------------------------------------------------------
    // 10. MENTIONS LÉGALES (Modale du pied de page)
    // ------------------------------------------------------------------------
    mentionsLegales: {
        editeur: "Luis Ferreira — Étudiant en BTS SIO option SISR (École Ingetis Paris 5e)",
        contact: "iluisferreira1516@gmail.com",
        hebergeur: "GitHub Pages (GitHub, Inc. — 88 Colin P. Kelly Jr. St, San Francisco, CA 94107, USA) / Koyeb (Koyeb SAS, Paris, France)",
        objet: "Portfolio personnel et pédagogique réalisé dans le cadre des épreuves professionnelles (E4, E5, E6) du BTS Services Informatiques aux Organisations (SIO).",
        donneesPersonnelles: "Ce site ne dépose aucun cookie publicitaire ou de pistage. Le seul stockage local (localStorage) sert à mémoriser votre préférence d'affichage (thème clair ou sombre). Les données saisies dans le formulaire de contact servent exclusivement à répondre à votre message.",
        proprieteIntellectuelle: "L'ensemble des textes, schémas et codes sources de ce portfolio sont la propriété de Luis Ferreira (licence MIT). Les marques citées (Ingetis, BoucheCousue, Cisco Meraki, Ubiquiti, Proxmox) appartiennent à leurs propriétaires respectifs."
    }
};
