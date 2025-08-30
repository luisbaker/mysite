// Language System
const languages = {
    pt: {
        nav: {
            home: "Início",
            about: "Sobre",
            projects: "Projetos",
            contact: "Contato"
        },
        hero: {
            greeting: "Oi, eu sou o",
            subtitle: "Apaixonado por telecom e tecnologia",
            description: "Gosto de criar coisas legais e resolver problemas chatos",
            seeProjects: "Ver Projetos",
            contact: "Falar Comigo"
        },
        about: {
            title: "Sobre Mim",
            description1: "Sou um cara que curte muito tecnologia, telecomunicações e informática. Adoro criar soluções diferentes e trabalhar em projetos que me desafiam.",
            description2: "Tenho vários projetos legais que mostram como eu gosto de resolver problemas complicados e criar ferramentas úteis pra galera.",
            techStack: "O que eu faço"
        },
        projects: {
            title: "Meus Projetos",
            project1: {
                title: "Mirror",
                description: "Servidor pra distribuir pacotes de distros Linux, com downloads rápidos e confiáveis pra comunidade open source."
            },
            project2: {
                title: "NetmonsterPT",
                description: "Projeto pra localizar e mapear todas as torres móveis de Portugal de todas as operadoras, com dados precisos sobre cobertura de rede."
            },
            project3: {
                title: "CellularFR",
                description: "Projeto pra banco de dados Netmonster com todas as antenas da Orange France, mapeando a infraestrutura de telecom francesa."
            }
        },
        contact: {
            title: "Contato",
            subtitle: "Redes Sociais",
            description: "Me encontra nas redes sociais pra conversar sobre tecnologia e projetos.",
            send: "Contato"
        },
        terminal: {
            skills: "telecom | desenvolvimento | solucionador",
            starting: "Iniciando projetos..."
        },
        tech: {
            development: "Desenvolvimento",
            infrastructure: "Infraestrutura",
            telecom: "Telecomunicações",
            mobile: "Redes Móveis"
        },
        footer: {
            copyright: "© 2025 Luis Baker. Feito com ❤️ e ☕"
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            greeting: "Hey, I'm",
            subtitle: "Passionate about telecom and tech",
            description: "I love creating cool stuff and solving tricky problems",
            seeProjects: "View Projects",
            contact: "Get in Touch"
        },
        about: {
            title: "About Me",
            description1: "I'm a tech enthusiast who's crazy about telecommunications and IT. I love coming up with creative solutions and working on challenging projects.",
            description2: "I've got several cool projects that show how I enjoy tackling complex problems and building useful tools for the community.",
            techStack: "What I Do"
        },
        projects: {
            title: "My Projects",
            project1: {
                title: "Mirror",
                description: "Server for distributing Linux distro packages, with fast and reliable downloads for the open source community."
            },
            project2: {
                title: "NetmonsterPT",
                description: "Project to locate and map all mobile towers in Portugal from all operators, with accurate data on network coverage."
            },
            project3: {
                title: "CellularFR",
                description: "Project for Netmonster database with all Orange France antennas, mapping French telecom infrastructure."
            }
        },
        contact: {
            title: "Contact",
            subtitle: "Social Media",
            description: "Find me on social media to chat about tech and projects.",
            send: "Contact"
        },
        terminal: {
            skills: "telecom | development | problem solver",
            starting: "Starting projects..."
        },
        tech: {
            development: "Development",
            infrastructure: "Infrastructure",
            telecom: "Telecommunications",
            mobile: "Mobile Networks"
        },
        footer: {
            copyright: "© 2025 Luis Baker. Built with ❤️ and ☕"
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            about: "À Propos",
            projects: "Projets",
            contact: "Contact"
        },
        hero: {
            greeting: "Salut, je suis",
            subtitle: "Passionné par les télécoms et la tech",
            description: "J'aime faire des trucs que presque personne aime ou veut faire et résoudre des problèmes x) mais ma vie est un problème",
            seeProjects: "Voir les Projets",
            contact: "Me Contacter"
        },
        about: {
            title: "À Propos de Moi",
            description1: "Je suis un passionné de tech qui adore les télécoms et l'informatique. J'aime inventer des solutions créatives et bosser sur des projets qui me challengent.",
            description2: "J'ai plusieurs projets sympas qui montrent comment j'aime m'attaquer aux problèmes complexes et construire des outils utiles pour la communauté.",
            techStack: "Ce que je fais"
        },
        projects: {
            title: "Mes Projets",
            project1: {
                title: "Mirror",
                description: "Serveur pour distribuer des paquets de distros Linux, avec des téléchargements rapides et fiables pour la communauté open source."
            },
            project2: {
                title: "NetmonsterPT",
                description: "Projet pour localiser et cartographier toutes les tours mobiles du Portugal de tous les opérateurs, avec des données précises sur la couverture réseau."
            },
            project3: {
                title: "CellularFR",
                description: "Projet pour base de données Netmonster avec toutes les antennes Orange France, cartographiant l'infrastructure télécom française."
            }
        },
        contact: {
            title: "Contact",
            subtitle: "Réseaux Sociaux",
            description: "Trouve-moi sur les réseaux sociaux pour discuter de tech et de projets.",
            send: "Contact"
        },
        terminal: {
            skills: "télécom | développement | résolveur",
            starting: "Démarrage des projets..."
        },
        tech: {
            infrastructure: "Infrastructure",
            telecom: "Télécommunications",
            mobile: "Réseaux Mobiles"
        },
        footer: {
            copyright: "© 2025 Luis Baker. Créé avec ❤️ et ☕"
        }
    }
};

// Language Switcher
const languageSwitcher = document.querySelector('.language-switcher');
const langButtons = document.querySelectorAll('.lang-btn');

let currentLang = 'pt';

// Function to detect browser language
function detectBrowserLanguage() {
    // Get all browser languages
    const browserLangs = navigator.languages || [navigator.language || navigator.userLanguage];
    
    // Map of language variations to our supported languages
    const languageMap = {
        'pt': 'pt',      // Portuguese
        'pt-br': 'pt',   // Portuguese (Brazil)
        'pt-pt': 'pt',   // Portuguese (Portugal)
        'en': 'en',      // English
        'en-us': 'en',   // English (US)
        'en-gb': 'en',   // English (UK)
        'en-ca': 'en',   // English (Canada)
        'fr': 'fr',      // French
        'fr-fr': 'fr',   // French (France)
        'fr-ca': 'fr',   // French (Canada)
        'fr-be': 'fr',   // French (Belgium)
        'fr-ch': 'fr'    // French (Switzerland)
    };
    
    // Try to find a supported language
    for (const lang of browserLangs) {
        const langCode = lang.toLowerCase();
        
        // Check exact match first
        if (languageMap[langCode]) {
            return languageMap[langCode];
        }
        
        // Check primary language code
        const primaryLang = langCode.split('-')[0];
        if (languageMap[primaryLang]) {
            return languageMap[primaryLang];
        }
    }
    
    // Fallback to English if no supported language found
    return 'en';
}

// Function to change language
function changeLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all text elements
    document.querySelectorAll('[data-text]').forEach(element => {
        const key = element.dataset.text;
        const keys = key.split('.');
        let value = languages[lang];
        
        for (const k of keys) {
            value = value[k];
        }
        
        if (value) {
            element.textContent = value;
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Save preference
    localStorage.setItem('preferred-language', lang);
    
    // Add some fun animation
    document.body.style.animation = 'none';
    document.body.offsetHeight; // Trigger reflow
    document.body.style.animation = 'languageChange 0.5s ease';
    
    // Log language change
    console.log(`🌍 Language changed to: ${lang}`);
}

// Language button event listeners
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        changeLanguage(lang);
        
        // Add some fun feedback
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 150);
    });
});

// Initialize language system
function initializeLanguage() {
    // First, try to load saved preference
    const savedLang = localStorage.getItem('preferred-language');
    
    if (savedLang && languages[savedLang]) {
        // Use saved preference
        changeLanguage(savedLang);
    } else {
        // Auto-detect browser language
        const detectedLang = detectBrowserLanguage();
        changeLanguage(detectedLang);
        
        // Show a small notification about auto-detection
        setTimeout(() => {
            const langNames = {
                'pt': 'Português',
                'en': 'English',
                'fr': 'Français'
            };
            showNotification(`🌍 Idioma detectado: ${langNames[detectedLang]}`, 'info');
        }, 1000);
    }
}

// Initialize language when page loads
document.addEventListener('DOMContentLoaded', initializeLanguage);

// Listen for language changes in the browser
if ('onlanguagechange' in window) {
    window.addEventListener('languagechange', () => {
        console.log('🌍 Browser language changed, re-detecting...');
        const newLang = detectBrowserLanguage();
        if (newLang !== currentLang) {
            changeLanguage(newLang);
            showNotification(`🌍 Idioma atualizado para: ${newLang === 'pt' ? 'Português' : newLang === 'en' ? 'English' : 'Français'}`, 'info');
        }
    });
}

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Add some fun animation
    if (navMenu.classList.contains('active')) {
        navMenu.style.animation = 'slideDown 0.3s ease';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.borderBottom = '1px solid #00d4aa';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        navbar.style.borderBottom = '1px solid #333';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe all sections for animations
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Animate skill bars when skills section is visible
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 200);
            });
        }
    });
}, { threshold: 0.5 });

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Contact form handling - Removed as per user request
// const contactForm = document.querySelector('.contact-form');
// if (contactForm) {
//     // Form functionality removed
// }

// Email validation function - No longer needed
// function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// Fun notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#00d4aa' : type === 'error' ? '#ff6b6b' : '#9333ea'};
        color: ${type === 'success' ? '#000' : '#fff'};
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        font-weight: 600;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Typing effect for terminal
function typeTerminal() {
    const typingElement = document.querySelector('.typing');
    if (!typingElement) return;
    
    const text = typingElement.textContent;
    typingElement.textContent = '';
    
    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
            // Add blinking cursor effect
            setInterval(() => {
                typingElement.style.borderRightColor = 
                    typingElement.style.borderRightColor === 'transparent' ? '#00d4aa' : 'transparent';
            }, 500);
        }
    }, 100);
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    setTimeout(typeTerminal, 2000);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.3;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active navigation state and animations
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #00d4aa !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: inherit;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
    
    @keyframes languageChange {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }
    
    @keyframes slideDown {
        from { transform: translateY(-20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    .project-card {
        transition: all 0.3s ease;
    }
    
    .project-card:hover {
        transform: translateY(-8px) scale(1.02);
    }
    
    .tech-item {
        transition: all 0.3s ease;
    }
    
    .tech-item:hover {
        transform: translateY(-5px) scale(1.05);
    }
`;
document.head.appendChild(style);

// Add loading animation for project cards
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Add some fun hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
        this.style.borderColor = '#00d4aa';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.borderColor = '#333';
    });
});

// Add click effect for buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(0, 212, 170, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Add some fun console messages
console.log('🚀 Luis Baker Portfolio loaded successfully!');
console.log('💻 Dark theme activated');
console.log('🌍 Multi-language support ready');
console.log('🎯 Projects section loaded');
console.log('📱 Mobile responsive design active');

// Add some fun Easter eggs
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        showNotification('🎉 Easter egg encontrado! Você é um hacker!', 'info');
    }
});

// Add some fun stats
let clickCount = 0;
document.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 100) {
        showNotification('🎯 100 cliques! Você é persistente!', 'info');
    }
});
