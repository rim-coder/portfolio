export const PERSONAL_INFO = {
  name: "Rim Barradah",
  title: "Ingénierie Informatique (LST2I)",
  subTitle: "Développeuse Full Stack | IA & Automatisation (n8n, Botpress) | Business Intelligence",
  university: "Faculté des Sciences et Techniques de Mohammedia (FST) — Université Hassan II",
  bio: "Diplômée en Licence Sciences et Techniques — Ingénierie Informatique (LST2I). Passionnée par la conception d'architectures logicielles modernes, l'automatisation par agents intelligents (n8n, Botpress) et la valorisation des données décisionnelles (Business Intelligence & Dashboards KPI).",
  github: "https://github.com/rim-coder",
  email: "barradahrim@gmail.com",
  location: "Casablanca-Settat, Maroc",
};

export const CATEGORIES = [
  { id: "all", label: "Tous les projets" },
  { id: "fullstack", label: "Full Stack & BI" },
  { id: "ai", label: "IA & Agents Autonomes" },
  { id: "web_db", label: "Web & SGBD" },
  { id: "algorithms", label: "Algorithmique & BDD" },
];

export const PROJECTS = [
  {
    id: "wajba-chatbot",
    title: "WAJBA (وجبة) — Assistant IA Anti-Gaspillage",
    category: "ai",
    badge: "IA & Automatisation",
    featured: true,
    summary: "Assistant culinaire intelligent et éco-responsable qui analyse les restes d'ingrédients disponibles pour concevoir des recettes marocaines savoureuses et limiter le gaspillage.",
    architecture: "Frontend Web custom (HTML/CSS/JS + polling asynchrone) ↔ Botpress Cloud (NLU, Few-Shot prompting, mémoire) ↔ Workflows n8n (Webhooks, API Gmail pour envoi des listes de courses, Google Sheets pour traçabilité).",
    tags: ["Botpress Cloud", "n8n Workflows", "JavaScript", "Few-Shot Prompting", "Webhooks", "API Gmail"],
    githubUrl: "https://github.com/rim-coder/wajba-chatbot",
    videoUrl: "https://drive.google.com/file/d/1QsxtIByhFEgVuJ-xcimMpv934Q8cnjMU/view?usp=sharing",
    highlights: [
      "Agent conversationnel personnalisé avec personnalité marocaine chaleureuse",
      "Workflows automatisés n8n pour expédier la liste d'achats par mail",
      "Calcul de l'impact écologique et comptabilisation des denrées sauvées",
      "Interface utilisateur animée et ergonomique sans dépendance lourde"
    ]
  },
  {
    id: "plateforme-pilotage",
    title: "Plateforme de Pilotage & Décisionnelle (PFE)",
    category: "fullstack",
    badge: "Projet de Fin d'Études",
    featured: true,
    summary: "Système complet de pilotage de performance et de suivi d'indicateurs stratégiques (KPIs) avec alertes visuelles automatisées et reporting décisionnel pour l'Artisanat.",
    architecture: "React 19 + Vite ↔ API REST Node.js / Express ↔ PostgreSQL (Vues complexes v_dashboard_global, CTE, triggers, journal d'audit) ↔ 2FA OTP Nodemailer & RBAC.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Recharts", "2FA OTP", "RBAC", "Reporting PDF/Excel"],
    githubUrl: "https://github.com/rim-coder/plateforme-de-pilotage",
    highlights: [
      "Tableaux de bord dynamiques avec graphiques Recharts (atterrissage prévisionnel vs réalisation)",
      "Gestion granulaire des permissions selon les rôles (Admin, Contributeur, Lecteur, Groupe)",
      "Génération et export instantanés de rapports PDF et tableurs Excel",
      "Sécurité renforcée : authentification par code OTP expirable, hachage bcrypt, JWT"
    ]
  },
  {
    id: "gestion-hotel",
    title: "Système de Gestion Hôtelière & Réservations",
    category: "web_db",
    badge: "Web & Bases de Données",
    featured: false,
    summary: "Application web de gestion des hébergements, chambres et réservations clients avec interface d'administration complète et contrôles d'intégrité relationnelle.",
    architecture: "Architecture Modulaire PHP ↔ Base de données relationnelle MySQL (schéma normalisé avec clés étrangères et contraintes d'intégrité).",
    tags: ["PHP", "MySQL", "Architecture MVC", "SQL Avancé", "CRUD"],
    highlights: [
      "Modélisation relationnelle rigoureuse de la base de données hôtelière",
      "Gestion des réservations en temps réel, disponibilités et tarification",
      "Sécurisation des entrées contre les injections SQL via requêtes préparées"
    ]
  },
  {
    id: "data-structures",
    title: "Algorithmes & Structures de Données Avancées",
    category: "algorithms",
    badge: "Fondamentaux & Optimisation",
    featured: false,
    summary: "Conception, implémentation et analyse de performance d'algorithmes et de structures de données complexes pour la résolution efficace de problèmes computationnels.",
    architecture: "Optimisation de complexité temporelle et spatiale, manipulation de mémoire et gestion de structures arborescentes et dynamiques.",
    tags: ["Structures de Données", "Algorithmique Avancée", "Arbres & Graphes", "Optimisation", "POO"],
    highlights: [
      "Implémentation rigoureuse d'arbres binaires de recherche, piles, files et graphes",
      "Étude de la complexité spatio-temporelle (notation Grand O)",
      "Application des principes de programmation orientée objet et modularité logicielle"
    ]
  }
];

export const SKILL_GROUPS = [
  {
    title: "Développement Web & Full Stack",
    skills: ["React", "Node.js", "Express", "JavaScript (ES6+)", "PHP", "HTML5 / CSS3", "Tailwind CSS", "REST APIs"]
  },
  {
    title: "IA, Agents & Automatisation",
    skills: ["Botpress Cloud", "n8n Workflows", "Agents Autonomes", "Prompt Engineering / Few-Shot", "Webhooks", "Machine Learning"]
  },
  {
    title: "Data, SGBD & Business Intelligence",
    skills: ["PostgreSQL", "MySQL", "Modélisation Merise / UML", "Vues & Requêtes SQL Avancées", "Dashboards KPI", "Business Intelligence"]
  },
  {
    title: "Méthodes & Outils d'Ingénierie",
    skills: ["Git & GitHub", "Vite", "Postman", "Génie Logiciel", "Sécurité JWT & 2FA", "Gestion de Projet"]
  }
];
