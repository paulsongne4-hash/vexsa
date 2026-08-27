import { ServiceItem, ValuePillar, StatItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Développement Web',
    description: 'Création de sites web ultra-modernes, plateformes interactives et applications web performantes adaptées à votre croissance.',
    icon: 'Globe',
    benefits: ['Architecture React & Next.js réactive', 'Design UI/UX sur-mesure & responsive', 'Performances & SEO de pointe'],
    popular: true
  },
  {
    id: 'mobile-development',
    title: 'Développement Mobile',
    description: 'Création et transformation d\'expériences web en applications mobiles fluides, rapides et prêtes pour les stores.',
    icon: 'Smartphone',
    benefits: ['Conversion web to mobile optimisée', 'Notifications push & mode hors-ligne', 'Compatibilité Android & iOS']
  },
  {
    id: 'ai-integration',
    title: 'Intelligence Artificielle',
    description: 'Conception et intégration de solutions IA concrètes : assistants intelligents, traitement automatisé de données et génération de contenu.',
    icon: 'Bot',
    benefits: ['Intégration d\'API LLM de pointe', 'Automatisation des flux récurrents', 'Modèles adaptés à vos besoins métier'],
    popular: true
  },
  {
    id: 'saas-architecture',
    title: 'Solutions SaaS',
    description: 'Conception de plateformes SaaS sécurisées, scalables et dotées d\'abonnements récurrents et de tableaux de bord intuitifs.',
    icon: 'Layers',
    benefits: ['Gestion d\'abonnements & facturation', 'Bases de données hautement disponibles', 'Espaces clients multi-tenants']
  },
  {
    id: 'digital-tools',
    title: 'Solutions Numériques',
    description: 'Création d\'outils et utilitaires logiciels sur mesure répondant précisément aux défis opérationnels des entreprises.',
    icon: 'Cpu',
    benefits: ['Outils de productivité personnalisés', 'Interfaces intuitives sans friction', 'Gain de temps mesurable']
  },
  {
    id: 'digital-consulting',
    title: 'Accompagnement Digital',
    description: 'Conseil stratégique, audit technique et accompagnement continu de l\'idéation jusqu\'au déploiement et à la mise à l\'échelle.',
    icon: 'Sparkles',
    benefits: ['Feuille de route technologique claire', 'Veille et choix des meilleures stacks', 'Suivi agile et itératif']
  }
];

export const valuePillars: ValuePillar[] = [
  {
    title: 'Innovation',
    description: 'Concevoir des solutions agiles et visionnaires, parfaitement alignées avec les usages technologiques de demain.',
    icon: 'Zap',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'Simplicité',
    description: 'Transformer la complexité algorithmique et technologique en interfaces épurées, intuitives et immédiatement utilisables.',
    icon: 'ShieldCheck',
    color: 'from-blue-600 to-blue-400'
  },
  {
    title: 'Écosystème',
    description: 'Fédérer une constellation d\'outils complémentaires sous une même vision cohérente et un standard d\'excellence.',
    icon: 'Share2',
    color: 'from-indigo-600 to-blue-500'
  },
  {
    title: 'Vision Long Terme',
    description: 'Bâtir une infrastructure durable et évolutive capable d\'accueillir et propulser de nouveaux projets pendant des décennies.',
    icon: 'Compass',
    color: 'from-cyan-500 to-blue-600'
  }
];

export const statisticsData: StatItem[] = [
  {
    value: '10+',
    numericTarget: 10,
    suffix: '+',
    label: 'Projets Imaginés',
    description: 'Concepts et prototypes novateurs développés au sein du laboratoire VEXSA.'
  },
  {
    value: '5+',
    numericTarget: 5,
    suffix: '+',
    label: 'Solutions Développées',
    description: 'Produits fonctionnels et architectures logicielles actives.'
  },
  {
    value: '3',
    numericTarget: 3,
    suffix: '',
    label: 'Domaines Clés',
    description: 'Intelligence Artificielle, Logiciels SaaS et Applications Digitales.'
  },
  {
    value: '∞',
    label: 'Possibilités Futures',
    description: 'Un écosystème ouvert à l\'exploration continue et aux innovations sans limites.'
  }
];
