/**
 * ============================================================================
 * LOGIQUE INTERACTIVE DU PORTFOLIO BTS SIO (E4 / E5 / E6)
 * ============================================================================
 * Ce script exploite l'objet global PORTFOLIO_DATA (défini dans js/data.js)
 * pour rendre dynamiquement les sections, gérer les filtres, le mode clair/sombre,
 * les modales de réalisations et de mentions légales, la navigation et le contact.
 */

document.addEventListener("DOMContentLoaded", () => {
    if (typeof PORTFOLIO_DATA === "undefined") {
        console.error("Erreur : js/data.js n'est pas chargé.");
        return;
    }

    initTheme();
    renderAllSections();
    initNavigation();
    initTypewriter();
    initSkillFilters();
    initProjectFilters();
    initModalEvents();
    initContactForm();
    initScrollAnimations();
    initBackToTop();
});

/* ============================================================================
 * 1. GESTION DU THÈME CLAIR / SOMBRE (localStorage)
 * ============================================================================ */
function initTheme() {
    const themeToggle = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("portfolio_theme") || "dark";

    applyTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
            const nextTheme = currentTheme === "dark" ? "light" : "dark";
            applyTheme(nextTheme);
            localStorage.setItem("portfolio_theme", nextTheme);
        });
    }
}

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;

    const icon = themeToggle.querySelector("i");
    if (theme === "light") {
        if (icon) icon.className = "fas fa-moon";
        themeToggle.setAttribute("aria-label", "Activer le mode sombre");
        themeToggle.setAttribute("title", "Passer en mode sombre");
    } else {
        if (icon) icon.className = "fas fa-sun";
        themeToggle.setAttribute("aria-label", "Activer le mode clair");
        themeToggle.setAttribute("title", "Passer en mode clair");
    }
}

/* ============================================================================
 * 2. RENDU DYNAMIQUE DES SECTIONS DEPUIS PORTFOLIO_DATA
 * ============================================================================ */
function renderAllSections() {
    renderHeroAndAbout();
    renderBtsSio();
    renderCompetences();
    renderTableauSynthese();
    renderExperiences();
    renderRealisations("all", "all");
    renderVeille();
    renderCV();
    renderMentionsLegales();
}

// Utilitaire pour retrouver le libellé complet d'une compétence à partir de son code (ex: B1.4)
function getCompetenceInfo(code) {
    const blocs = [PORTFOLIO_DATA.referentiel.bloc1, PORTFOLIO_DATA.referentiel.bloc2, PORTFOLIO_DATA.referentiel.bloc3];
    for (const bloc of blocs) {
        const found = bloc.competences.find(c => c.id === code);
        if (found) {
            return { ...found, blocCode: bloc.code };
        }
    }
    return { id: code, nomCourt: code, intitule: code, blocCode: "" };
}

/* --- 2.1 Accueil & À propos --- */
function renderHeroAndAbout() {
    const { profil, aPropos } = PORTFOLIO_DATA;

    // Terminal dynamique
    const terminalBody = document.getElementById("terminal-lines");
    if (terminalBody && profil.terminal) {
        const linesHtml = profil.terminal.lignes.map(l => `
            <div class="code-line"><span class="prompt">$</span> <span class="command">${l.commande}</span></div>
            <div class="code-line"><span class="output">${l.sortie}</span></div>
        `).join("");
        terminalBody.innerHTML = linesHtml + `
            <div class="code-line"><span class="prompt">$</span> <span class="command">./status --jury-bts-sio</span></div>
            <div class="code-line"><span class="output typing" id="typewriter-text">Réseau opérationnel ✔</span></div>
        `;
    }

    // Texte À propos
    const aboutTextContainer = document.getElementById("about-presentation");
    if (aboutTextContainer) {
        aboutTextContainer.innerHTML = aPropos.presentation.map(p => `<p>${p}</p>`).join("") +
            `<div class="objective-banner"><i class="fas fa-bullseye"></i><div><strong>Projet professionnel & poursuite d'études :</strong> ${aPropos.objectifs}</div></div>`;
    }

    // Cartes Infos clés
    const infoGrid = document.getElementById("about-info-grid");
    if (infoGrid) {
        infoGrid.innerHTML = aPropos.cartesInfos.map(c => `
            <div class="info-card">
                <i class="${c.icone}" aria-hidden="true"></i>
                <h4>${c.titre}</h4>
                <p>${c.texte}</p>
            </div>
        `).join("");
    }

    // Qualités professionnelles
    const qualitesGrid = document.getElementById("about-qualites-grid");
    if (qualitesGrid) {
        qualitesGrid.innerHTML = aPropos.qualites.map(q => `
            <div class="quality-card">
                <div class="quality-icon"><i class="${q.icone}" aria-hidden="true"></i></div>
                <div>
                    <h4>${q.titre}</h4>
                    <p>${q.description}</p>
                </div>
            </div>
        `).join("");
    }
}

/* --- 2.2 Section BTS SIO (Options & Épreuves E4, E5, E6) --- */
function renderBtsSio() {
    const { btsSio } = PORTFOLIO_DATA;

    const introEl = document.getElementById("bts-intro");
    if (introEl) introEl.textContent = btsSio.introduction;

    const optionsGrid = document.getElementById("bts-options-grid");
    if (optionsGrid) {
        optionsGrid.innerHTML = btsSio.options.map(opt => `
            <article class="bts-option-card ${opt.estMonOption ? "active-option" : ""}">
                <div class="option-card-header">
                    <div class="option-icon"><i class="${opt.icone}" aria-hidden="true"></i></div>
                    <div>
                        <span class="option-code">Option ${opt.code}</span>
                        <h3>${opt.nom}</h3>
                    </div>
                    ${opt.estMonOption ? `<span class="my-option-badge"><i class="fas fa-check-circle"></i> Mon option</span>` : ""}
                </div>
                <p class="option-desc">${opt.description}</p>
                <div class="option-jobs">
                    <h4>Débouchés principaux :</h4>
                    <ul>
                        ${opt.debouches.map(d => `<li>${d}</li>`).join("")}
                    </ul>
                </div>
            </article>
        `).join("");
    }

    const epreuvesGrid = document.getElementById("bts-epreuves-grid");
    if (epreuvesGrid) {
        epreuvesGrid.innerHTML = btsSio.epreuves.map(ep => `
            <div class="epreuve-card">
                <div class="epreuve-top">
                    <span class="epreuve-badge">${ep.code}</span>
                    <span class="epreuve-coeff">${ep.coefficient}</span>
                </div>
                <h4>${ep.intitule}</h4>
                <p class="epreuve-bloc"><i class="fas fa-layer-group"></i> ${ep.blocLie} · ${ep.modalite}</p>
                <p class="epreuve-desc">${ep.description}</p>
            </div>
        `).join("");
    }
}

/* --- 2.3 Section Compétences (3 Blocs + Jauges techniques filtrables) --- */
function renderCompetences() {
    const { referentiel } = PORTFOLIO_DATA;
    const blocsContainer = document.getElementById("referentiel-blocs-grid");

    if (blocsContainer) {
        const blocs = [referentiel.bloc1, referentiel.bloc2, referentiel.bloc3];
        blocsContainer.innerHTML = blocs.map(bloc => `
            <article class="bloc-card">
                <div class="bloc-header">
                    <span class="bloc-number">${bloc.code}</span>
                    <h3>${bloc.titre}</h3>
                    <p class="bloc-subtitle">${bloc.sousTitre}</p>
                </div>
                <ul class="bloc-competences-list">
                    ${bloc.competences.map(comp => `
                        <li>
                            <div class="comp-title">
                                <span class="comp-id">${comp.id}</span>
                                <strong>${comp.intitule}</strong>
                            </div>
                            <ul class="comp-sublist">
                                ${comp.details.map(d => `<li>${d}</li>`).join("")}
                            </ul>
                        </li>
                    `).join("")}
                </ul>
            </article>
        `).join("");
    }

    renderTechSkills("all");
}

function renderTechSkills(categorie) {
    const grid = document.getElementById("tech-skills-grid");
    if (!grid) return;

    const skills = categorie === "all"
        ? PORTFOLIO_DATA.competencesTechniques
        : PORTFOLIO_DATA.competencesTechniques.filter(s => s.categorie === categorie);

    grid.innerHTML = skills.map(s => `
        <div class="skill-gauge-card">
            <div class="skill-gauge-top">
                <div class="skill-title-group">
                    <i class="${s.icone}" aria-hidden="true"></i>
                    <div>
                        <h4>${s.nom}</h4>
                        <small>${s.detail}</small>
                    </div>
                </div>
                <span class="skill-percent">${s.niveau}%</span>
            </div>
            <div class="skill-bar-bg" role="progressbar" aria-valuenow="${s.niveau}" aria-valuemin="0" aria-valuemax="100" aria-label="${s.nom}">
                <div class="skill-bar-fill" style="width: ${s.niveau}%"></div>
            </div>
        </div>
    `).join("");
}

function initSkillFilters() {
    const buttons = document.querySelectorAll("[data-skill-filter]");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderTechSkills(btn.getAttribute("data-skill-filter"));
        });
    });
}

/* --- 2.4 Tableau de synthèse interactif --- */
function renderTableauSynthese() {
    const tbody = document.getElementById("synthese-tbody");
    if (!tbody) return;

    const b1Ids = ["B1.1", "B1.2", "B1.3", "B1.4", "B1.5", "B1.6"];

    tbody.innerHTML = PORTFOLIO_DATA.tableauSynthese.map(row => {
        const cells = b1Ids.map(id => {
            const checked = row.competences.includes(id);
            return `<td class="${checked ? "check" : ""}" aria-label="${checked ? "Compétence mobilisée" : "Non mobilisée"}">${checked ? "✔" : ""}</td>`;
        }).join("");

        return `
            <tr class="synthese-row-clickable" tabindex="0" role="button" data-open-realisation="${row.realisationId}" aria-label="Ouvrir la fiche de la réalisation ${row.titre}">
                <td>
                    <div class="synthese-real-title">
                        <strong>${row.titre}</strong>
                        <span class="synthese-open-hint"><i class="fas fa-up-right-from-square"></i> Voir la fiche</span>
                    </div>
                </td>
                <td><span class="synthese-place-badge">${row.lieu}</span></td>
                <td><small>${row.periode}</small></td>
                ${cells}
            </tr>
        `;
    }).join("");

    // Clic ou touche Entrée sur une ligne du tableau de synthèse
    tbody.querySelectorAll("[data-open-realisation]").forEach(rowEl => {
        const trigger = () => {
            const targetId = rowEl.getAttribute("data-open-realisation");
            if (targetId === "section-veille") {
                const veilleSection = document.getElementById("veille");
                if (veilleSection) veilleSection.scrollIntoView({ behavior: "smooth" });
            } else {
                openRealisationModal(targetId);
            }
        };
        rowEl.addEventListener("click", trigger);
        rowEl.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                trigger();
            }
        });
    });
}

/* --- 2.5 Stages & Alternance (Timeline) --- */
function renderExperiences() {
    const timeline = document.getElementById("experiences-timeline");
    if (!timeline) return;

    timeline.innerHTML = PORTFOLIO_DATA.experiences.map(exp => `
        <article class="timeline-item">
            <div class="timeline-marker" aria-hidden="true">
                <i class="fas fa-briefcase"></i>
            </div>
            <div class="timeline-card">
                <div class="timeline-header">
                    <div>
                        <span class="timeline-period"><i class="far fa-calendar-alt"></i> ${exp.periode} · ${exp.type}</span>
                        <h3>${exp.poste} — <a href="${exp.siteWeb}" target="_blank" rel="noopener">${exp.entreprise} <i class="fas fa-external-link-alt"></i></a></h3>
                        <p class="timeline-location"><i class="fas fa-map-marker-alt"></i> ${exp.lieu} · <em>${exp.slogan}</em></p>
                    </div>
                </div>
                <p class="timeline-company-desc">${exp.presentationEntreprise}</p>
                <p class="timeline-context"><strong>Contexte :</strong> ${exp.contexte}</p>
                <div class="timeline-missions">
                    <h4>Missions réalisées :</h4>
                    <ul>
                        ${exp.missions.map(m => `<li>${m}</li>`).join("")}
                    </ul>
                </div>
                <div class="timeline-footer">
                    <div class="project-tech">
                        ${exp.technologies.map(t => `<span class="tech-tag">${t}</span>`).join("")}
                    </div>
                    <div class="timeline-comp-badges">
                        ${exp.competencesMobilisees.map(c => {
                            const info = getCompetenceInfo(c);
                            return `<span class="bloc-tag" title="${info.intitule}">${info.id} · ${info.nomCourt}</span>`;
                        }).join("")}
                    </div>
                </div>
            </div>
        </article>
    `).join("");
}

/* --- 2.6 Réalisations professionnelles (Grille filtrable + Modales E5/E6) --- */
function renderRealisations(filterCat = "all", filterTech = "all") {
    const grid = document.getElementById("realisations-grid");
    if (!grid) return;

    const filtered = PORTFOLIO_DATA.realisations.filter(r => {
        const matchCat = filterCat === "all" || r.categorie === filterCat;
        const matchTech = filterTech === "all" || r.technologies.some(t => t.toLowerCase().includes(filterTech.toLowerCase()));
        return matchCat && matchTech;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<p class="empty-filter-msg">Aucune réalisation ne correspond à ce filtre.</p>`;
        return;
    }

    grid.innerHTML = filtered.map(r => `
        <article class="project-card" data-realisation-card="${r.id}">
            <div class="project-header">
                <div class="project-icon">
                    <i class="${r.icone}" aria-hidden="true"></i>
                </div>
                <div class="project-meta-badges">
                    <span class="realisation-client">${r.categorieLabel}</span>
                    ${r.dansTableauSynthese ? `<span class="e5-badge" title="Présent dans le tableau de synthèse officiel"><i class="fas fa-table"></i> Dossier E5/E6</span>` : ""}
                </div>
            </div>
            <div class="project-content">
                <span class="project-period"><i class="far fa-calendar"></i> ${r.periode} · ${r.lieu}</span>
                <h3>${r.titre}</h3>
                <p>${r.resume}</p>
                <ul class="realisation-skills">
                    ${r.competencesValidees.map(code => {
                        const info = getCompetenceInfo(code);
                        return `<li><strong>${info.id}</strong> : ${info.intitule}</li>`;
                    }).join("")}
                </ul>
                <div class="project-tech">
                    ${r.technologies.map(t => `<span class="tech-tag">${t}</span>`).join("")}
                    ${r.blocs.map(b => `<span class="bloc-tag">${b}</span>`).join("")}
                </div>
                <div class="project-actions">
                    <button type="button" class="btn btn-primary btn-sm" data-open-modal="${r.id}">
                        <i class="fas fa-folder-open"></i> Ouvrir la fiche détaillée E6
                    </button>
                    ${r.liens.siteExterne ? `
                        <a href="${r.liens.siteExterne}" target="_blank" rel="noopener" class="project-link-url" title="Ouvrir le lien externe">
                            <i class="fas fa-up-right-from-square"></i> Voir en ligne
                        </a>
                    ` : ""}
                    ${r.liens.github ? `
                        <a href="${r.liens.github}" target="_blank" rel="noopener" class="project-link-url" title="Voir le code sur GitHub">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    ` : ""}
                </div>
            </div>
        </article>
    `).join("");

    grid.querySelectorAll("[data-open-modal]").forEach(btn => {
        btn.addEventListener("click", () => {
            openRealisationModal(btn.getAttribute("data-open-modal"));
        });
    });
}

function initProjectFilters() {
    let currentCat = "all";
    let currentTech = "all";

    const catButtons = document.querySelectorAll("[data-project-cat]");
    const techButtons = document.querySelectorAll("[data-project-tech]");

    catButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            catButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCat = btn.getAttribute("data-project-cat");
            renderRealisations(currentCat, currentTech);
        });
    });

    techButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            techButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentTech = btn.getAttribute("data-project-tech");
            renderRealisations(currentCat, currentTech);
        });
    });
}

/* --- 2.7 Modale Fiche Réalisation E5/E6 --- */
function openRealisationModal(realisationId) {
    const r = PORTFOLIO_DATA.realisations.find(item => item.id === realisationId);
    if (!r) return;

    const modal = document.getElementById("realisation-modal");
    const modalBody = document.getElementById("realisation-modal-body");
    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
        <div class="modal-fiche-header">
            <div class="modal-fiche-badges">
                <span class="realisation-client">${r.categorieLabel}</span>
                <span class="project-period"><i class="far fa-calendar-alt"></i> ${r.periode} · ${r.lieu}</span>
                ${r.blocs.map(b => `<span class="bloc-tag">${b}</span>`).join("")}
            </div>
            <h2 id="modal-title">${r.titre}</h2>
            <p class="modal-subtitle">${r.sousTitre}</p>
        </div>

        <div class="modal-grid-2">
            <div class="modal-section-box">
                <h3><i class="fas fa-building-circle-check"></i> 1. Contexte</h3>
                <p>${r.contexte}</p>
            </div>
            <div class="modal-section-box">
                <h3><i class="fas fa-crosshairs"></i> 2. Besoin exprimé</h3>
                <p>${r.besoin}</p>
            </div>
        </div>

        <div class="modal-grid-2">
            <div class="modal-section-box">
                <h3><i class="fas fa-list-check"></i> 3. Objectifs</h3>
                <ul class="modal-list">
                    ${r.objectifs.map(o => `<li>${o}</li>`).join("")}
                </ul>
            </div>
            <div class="modal-section-box">
                <h3><i class="fas fa-microchip"></i> 4. Environnement technique</h3>
                <ul class="modal-list">
                    ${r.environnementTechnique.map(env => `<li>${env}</li>`).join("")}
                </ul>
                <div class="project-tech" style="margin-top: 1rem;">
                    ${r.technologies.map(t => `<span class="tech-tag">${t}</span>`).join("")}
                </div>
            </div>
        </div>

        <div class="modal-section-box">
            <h3><i class="fas fa-gears"></i> 5. Étapes de réalisation</h3>
            <ul class="modal-steps-list">
                ${r.etapes.map(et => `<li>${et}</li>`).join("")}
            </ul>
        </div>

        <div class="modal-section-box">
            <h3><i class="fas fa-triangle-exclamation"></i> 6. Difficultés rencontrées & Solutions apportées</h3>
            <div class="difficulties-grid">
                ${r.difficultesSolutions.map(ds => `
                    <div class="difficulty-item">
                        <p class="diff-problem"><strong><i class="fas fa-circle-exclamation"></i> Difficulté :</strong> ${ds.difficulte}</p>
                        <p class="diff-solution"><strong><i class="fas fa-circle-check"></i> Solution :</strong> ${ds.solution}</p>
                    </div>
                `).join("")}
            </div>
        </div>

        <div class="modal-grid-2">
            <div class="modal-section-box">
                <h3><i class="fas fa-flag-checkered"></i> 7. Résultats obtenus & Bilan</h3>
                <p>${r.resultats}</p>
                ${r.captures && r.captures.length ? `
                    <div class="captures-preview">
                        ${r.captures.map(c => `
                            <div class="capture-card">
                                <i class="fas fa-diagram-project"></i>
                                <div>
                                    <strong>${c.titre}</strong>
                                    <small>${c.legende}</small>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                ` : ""}
            </div>
            <div class="modal-section-box">
                <h3><i class="fas fa-graduation-cap"></i> 8. Compétences du référentiel BTS SIO validées</h3>
                <ul class="modal-competences-list">
                    ${r.competencesValidees.map(code => {
                        const info = getCompetenceInfo(code);
                        return `
                            <li>
                                <span class="comp-id">${info.id}</span>
                                <div>
                                    <strong>${info.intitule}</strong>
                                    <small>${info.blocCode}</small>
                                </div>
                            </li>
                        `;
                    }).join("")}
                </ul>
            </div>
        </div>

        <div class="modal-footer-actions">
            ${r.liens.docPdf ? `
                <a href="${r.liens.docPdf}" target="_blank" rel="noopener" class="btn btn-primary">
                    <i class="fas fa-file-pdf"></i> Consulter le justificatif / Tableau E5 (PDF)
                </a>
            ` : ""}
            ${r.liens.siteExterne ? `
                <a href="${r.liens.siteExterne}" target="_blank" rel="noopener" class="btn btn-secondary">
                    <i class="fas fa-globe"></i> Ouvrir le site (${r.liens.siteExterne.replace("https://", "")})
                </a>
            ` : ""}
            ${r.liens.siteSecondaire ? `
                <a href="${r.liens.siteSecondaire}" target="_blank" rel="noopener" class="btn btn-secondary">
                    <i class="fas fa-globe"></i> Ouvrir ${r.liens.siteSecondaire.replace("https://", "")}
                </a>
            ` : ""}
            ${r.liens.github ? `
                <a href="${r.liens.github}" target="_blank" rel="noopener" class="btn btn-secondary">
                    <i class="fab fa-github"></i> Voir le dépôt GitHub
                </a>
            ` : ""}
        </div>
    `;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function initModalEvents() {
    document.querySelectorAll("[data-close-modal]").forEach(btn => {
        btn.addEventListener("click", closeAllModals);
    });

    document.querySelectorAll(".modal-overlay").forEach(overlay => {
        overlay.addEventListener("click", e => {
            if (e.target === overlay) closeAllModals();
        });
    });

    const legalBtn = document.getElementById("open-mentions-legales");
    if (legalBtn) {
        legalBtn.addEventListener("click", e => {
            e.preventDefault();
            const modal = document.getElementById("mentions-modal");
            if (modal) {
                modal.classList.add("open");
                modal.setAttribute("aria-hidden", "false");
                document.body.style.overflow = "hidden";
            }
        });
    }

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") closeAllModals();
    });
}

function closeAllModals() {
    document.querySelectorAll(".modal-overlay.open").forEach(m => {
        m.classList.remove("open");
        m.setAttribute("aria-hidden", "true");
    });
    document.body.style.overflow = "";
}

/* --- 2.8 Veille Technologique --- */
function renderVeille() {
    const { veille } = PORTFOLIO_DATA;

    const headerBox = document.getElementById("veille-header-box");
    if (headerBox) {
        headerBox.innerHTML = `
            <div class="veille-topic-badge"><i class="fas fa-wifi"></i> Sujet de veille technologique (Bloc 1 — Compétence B1.6)</div>
            <h3>${veille.sujet}</h3>
            <p class="veille-problematique"><strong>Problématique :</strong> « ${veille.problematique} »</p>
            <p class="veille-justif">${veille.justification}</p>
            <div class="veille-keypoints-grid">
                ${veille.pointsCles.map(pt => `
                    <div class="veille-keypoint">
                        <i class="${pt.icone}" aria-hidden="true"></i>
                        <div>
                            <h4>${pt.titre}</h4>
                            <p>${pt.texte}</p>
                        </div>
                    </div>
                `).join("")}
            </div>
        `;
    }

    const methodGrid = document.getElementById("veille-method-grid");
    if (methodGrid) {
        methodGrid.innerHTML = veille.methodologie.map(m => `
            <div class="veille-method-card">
                <div class="method-top">
                    <i class="${m.icone}" aria-hidden="true"></i>
                    <div>
                        <h4>${m.outil}</h4>
                        <span>${m.type}</span>
                    </div>
                </div>
                <p>${m.description}</p>
                ${m.lien ? `<a href="${m.lien}" target="_blank" rel="noopener" class="contact-link"><i class="fas fa-external-link-alt"></i> Consulter la source</a>` : ""}
            </div>
        `).join("");
    }

    const articlesGrid = document.getElementById("veille-articles-grid");
    if (articlesGrid) {
        articlesGrid.innerHTML = veille.articles.map(art => `
            <article class="veille-article-card">
                <div class="article-meta">
                    <span class="article-date"><i class="far fa-calendar-alt"></i> ${art.date}</span>
                    <span class="tech-tag">${art.categorie}</span>
                </div>
                <h4>${art.titre}</h4>
                <p class="article-source">Source : <strong>${art.source}</strong></p>
                <p class="article-resume">${art.resume}</p>
                <div class="article-impact">
                    <strong><i class="fas fa-network-wired"></i> Intérêt SISR / Entreprise :</strong> ${art.impactSISR}
                </div>
                <a href="${art.url}" target="_blank" rel="noopener" class="project-link-url">
                    <i class="fas fa-arrow-up-right-from-square"></i> Consulter la publication officielle
                </a>
            </article>
        `).join("");
    }

    const conclusionBox = document.getElementById("veille-conclusion-box");
    if (conclusionBox) {
        conclusionBox.innerHTML = `
            <h4><i class="fas fa-lightbulb"></i> Synthèse & Conclusion pour mon métier</h4>
            <p>${veille.conclusion}</p>
        `;
    }
}

/* --- 2.9 Section CV --- */
function renderCV() {
    const container = document.getElementById("cv-preview-card");
    if (!container) return;
    const { cv, profil } = PORTFOLIO_DATA;

    container.innerHTML = `
        <div class="cv-sheet">
            <div class="cv-sheet-header">
                <div>
                    <h3>${profil.nomComplet}</h3>
                    <p class="cv-role">${cv.titrePoste}</p>
                    <p class="cv-summary">${cv.accroche}</p>
                </div>
                <div class="cv-contact-mini">
                    <span><i class="fas fa-location-dot"></i> ${profil.localisation}</span>
                    <span><i class="fas fa-envelope"></i> ${profil.email}</span>
                    <span><i class="fab fa-github"></i> ${profil.githubLabel}</span>
                </div>
            </div>
            <div class="cv-sheet-grid">
                <div class="cv-col">
                    <h4><i class="fas fa-briefcase"></i> Expérience en alternance</h4>
                    ${cv.experiencesResume.map(e => `
                        <div class="cv-item">
                            <span class="cv-date">${e.periode}</span>
                            <strong>${e.poste} — ${e.entreprise}</strong>
                            <ul>
                                ${e.points.map(pt => `<li>${pt}</li>`).join("")}
                            </ul>
                        </div>
                    `).join("")}
                </div>
                <div class="cv-col">
                    <h4><i class="fas fa-graduation-cap"></i> Formation</h4>
                    ${cv.formation.map(f => `
                        <div class="cv-item">
                            <span class="cv-date">${f.periode}</span>
                            <strong>${f.diplome}</strong>
                            <p>${f.etablissement}</p>
                            <small>${f.details}</small>
                        </div>
                    `).join("")}
                    <h4 style="margin-top: 1.25rem;"><i class="fas fa-server"></i> Projets techniques</h4>
                    <ul class="cv-projects-list">
                        ${cv.projetsPhares.map(p => `<li>${p}</li>`).join("")}
                    </ul>
                </div>
            </div>
        </div>
    `;
}

/* --- 2.11 Mentions Légales --- */
function renderMentionsLegales() {
    const body = document.getElementById("mentions-modal-body");
    if (!body) return;
    const m = PORTFOLIO_DATA.mentionsLegales;

    body.innerHTML = `
        <h2 id="mentions-title">Mentions légales & Confidentialité</h2>
        <div class="modal-section-box" style="margin-top: 1rem;">
            <h3>1. Éditeur du site</h3>
            <p><strong>${m.editeur}</strong><br>Contact : <a href="mailto:${m.contact}" class="contact-link">${m.contact}</a></p>
        </div>
        <div class="modal-section-box">
            <h3>2. Hébergement</h3>
            <p>${m.hebergeur}</p>
        </div>
        <div class="modal-section-box">
            <h3>3. Finalité pédagogique (Épreuves BTS SIO)</h3>
            <p>${m.objet}</p>
        </div>
        <div class="modal-section-box">
            <h3>4. Protection des données personnelles (RGPD)</h3>
            <p>${m.donneesPersonnelles}</p>
        </div>
        <div class="modal-section-box">
            <h3>5. Propriété intellectuelle</h3>
            <p>${m.proprieteIntellectuelle}</p>
        </div>
    `;
}

/* ============================================================================
 * 3. NAVIGATION, SCROLL ACTIF, EFFET MACHINE À ÉCRIRE, FORMULAIRE & BOUTON TOP
 * ============================================================================ */
function initNavigation() {
    const hamburger = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            const expanded = hamburger.getAttribute("aria-expanded") === "true";
            hamburger.setAttribute("aria-expanded", String(!expanded));
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
    }

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            if (hamburger && navMenu) {
                hamburger.classList.remove("active");
                hamburger.setAttribute("aria-expanded", "false");
                navMenu.classList.remove("active");
            }
        });
    });

    // Surlignage de la section active au défilement
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 180) {
                current = section.getAttribute("id");
            }
        });
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    }, { passive: true });
}

function initTypewriter() {
    const el = document.getElementById("typewriter-text");
    const phrases = PORTFOLIO_DATA.profil.terminal?.commandesMachineAEcrire || [
        "Réseau opérationnel ✔",
        "Déploiement LAN / Wi-Fi & Fibre 100 Gb/s ✔",
        "Portfolio BTS SIO option SISR ✔"
    ];
    if (!el) return;

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function tick() {
        const currentPhrase = phrases[phraseIndex];
        if (isDeleting) {
            charIndex--;
            el.textContent = currentPhrase.substring(0, charIndex);
        } else {
            charIndex++;
            el.textContent = currentPhrase.substring(0, charIndex);
        }

        let delay = isDeleting ? 30 : 65;

        if (!isDeleting && charIndex === currentPhrase.length) {
            delay = 2400;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            delay = 400;
        }
        setTimeout(tick, delay);
    }

    setTimeout(tick, 1000);
}

function initContactForm() {
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("contact-feedback");
    if (!form) return;

    form.addEventListener("submit", async e => {
        e.preventDefault();
        const nom = form.querySelector("#contact-name").value.trim();
        const email = form.querySelector("#contact-email").value.trim();
        const sujet = form.querySelector("#contact-subject").value.trim();
        const message = form.querySelector("#contact-message").value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!nom || !emailRegex.test(email) || !sujet || message.length < 10) {
            if (feedback) {
                feedback.className = "form-feedback error";
                feedback.textContent = "Veuillez remplir tous les champs correctement (message d'au moins 10 caractères).";
            }
            return;
        }

        const endpoint = PORTFOLIO_DATA.profil.formspreeEndpoint;
        if (endpoint) {
            try {
                const res = await fetch(endpoint, {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Accept": "application/json" },
                    body: JSON.stringify({ nom, email, sujet, message })
                });
                if (res.ok) {
                    feedback.className = "form-feedback success";
                    feedback.textContent = "Merci ! Votre message a bien été envoyé.";
                    form.reset();
                    return;
                }
            } catch (err) {
                console.warn("Formspree non disponible, bascule sur mailto:", err);
            }
        }

        // Envoi direct via le client mail (mailto:) sans dépendance externe
        const dest = PORTFOLIO_DATA.profil.email;
        const mailtoUrl = `mailto:${dest}?subject=${encodeURIComponent(`[Portfolio BTS SIO] ${sujet}`)}&body=${encodeURIComponent(`De : ${nom} (${email})\n\n${message}`)}`;
        window.location.href = mailtoUrl;

        if (feedback) {
            feedback.className = "form-feedback success";
            feedback.textContent = "Ouverture de votre messagerie pour envoyer le message à " + dest + ".";
        }
        form.reset();
    });
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-up");
            }
        });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

    document.querySelectorAll("section:not(.hero)").forEach(section => {
        observer.observe(section);
    });
}

function initBackToTop() {
    const btn = document.getElementById("back-to-top");
    if (!btn) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            btn.classList.add("visible");
        } else {
            btn.classList.remove("visible");
        }
    }, { passive: true });

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
