import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'vyronbook-ia',
    name: 'VyronBook IA',
    shortDescription: 'Plateforme intelligente permettant de concevoir, rédiger et formater des ebooks complets grâce à l\'IA générative.',
    fullDescription: 'VyronBook IA révolutionne la création éditoriale et le contenu numérique en automatisant la structuration de chapitres, la génération assistée par IA, la mise en page multi-formats et la création de couvertures graphiques.',
    category: 'IA',
    additionalCategories: ['SaaS', 'Outils'],
    status: 'En développement',
    problemSolved: 'La rédaction d\'ebooks professionnels prend des semaines et nécessite des compétences multiples (rédaction, mise en page, design graphique).',
    solution: 'Un studio tout-en-un guidé par des modèles d\'IA avancés qui produit un livre structuré, fluide et prêt à la publication en quelques minutes.',
    technologies: ['React', 'Next.js', 'OpenAI / Claude LLM', 'Tailwind CSS', 'Node.js', 'PDF Engine'],
    period: '2026',
    features: [
      'Génération de plan et sommaire automatisé',
      'Édition collaborative en temps réel',
      'Export multi-formats (PDF, ePub, Kindle)',
      'Générateur de couvertures via IA'
    ],
    iconName: 'BookOpen',
    highlighted: true
  },
  {
    id: 'vexsa-android-app-builder',
    name: 'VEXSA / Android App Builder',
    shortDescription: 'Solution innovante permettant de convertir instantanément n\'importe quel site web ou plateforme SaaS en application Android native.',
    fullDescription: 'Une passerelle technologique haute performance qui encapsule les expériences web dans des applications Android modernes, intégrant les notifications push, le mode hors ligne et une conformité totale avec le Google Play Store.',
    category: 'Applications',
    additionalCategories: ['Web', 'Outils'],
    status: 'En développement',
    problemSolved: 'Développer une application mobile native requiert des mois de travail et des budgets élevés pour les PME et créateurs web.',
    solution: 'Génération automatique de bundles APK/AAB optimisés avec synchronisation dynamique du contenu web et performances natives.',
    technologies: ['Kotlin', 'Android SDK', 'React', 'Capacitor/Webview Turbo', 'OneSignal API'],
    period: '2026',
    features: [
      'Export AAB prêt pour le Google Play Store',
      'Support des notifications push intégrées',
      'Moteur de cache & mode hors-ligne intelligent',
      'Personnalisation complète du Splashscreen et de l\'icône'
    ],
    iconName: 'Smartphone',
    highlighted: true
  },
  {
    id: 'qrlink',
    name: 'QRLink',
    shortDescription: 'Solution moderne de création, personnalisation et analyse de QR Codes dynamiques et intelligents.',
    fullDescription: 'QRLink offre aux entreprises et professionnels une plateforme pour générer des QR codes dynamiques personnalisés avec logos, palettes de marques, redirections conditionnelles et statistiques de scan approfondies.',
    category: 'Outils',
    additionalCategories: ['Web', 'Produits'],
    status: 'Projet',
    problemSolved: 'Les QR codes statiques classiques ne permettent ni mise à jour d\'URL après impression, ni suivi statistique précis.',
    solution: 'QR codes vectoriels dynamiques et modifiables en temps réel avec tableau de bord analytique complet.',
    technologies: ['React', 'TypeScript', 'Vector Canvas SVG', 'PostgreSQL', 'Chart.js'],
    period: '2026 - Q2',
    features: [
      'Redirection dynamique sans réimpression',
      'Design sur-mesure (couleurs, logos, contours)',
      'Statistiques de scans (géolocalisation, appareils)',
      'API pour l\'intégration e-commerce'
    ],
    iconName: 'QrCode'
  },
  {
    id: 'ed-exchange-ai-studio',
    name: 'ED Exchange AI Studio',
    shortDescription: 'Écosystème unifié regroupant de multiples outils numériques et micro-services d\'intelligence artificielle.',
    fullDescription: 'Une plateforme modulaire conçue comme un carrefour d\'outils d\'IA générative et de traitement de données : génération textuelle, analyse prédictive, traduction automatique contextualisée et connecteurs API.',
    category: 'IA',
    additionalCategories: ['SaaS', 'Outils'],
    status: 'Projet',
    problemSolved: 'La dispersion des outils d\'IA entraîne des coûts d\'abonnement multiples et des ruptures dans les flux de travail.',
    solution: 'Un hub centralisé combinant les meilleurs micro-services IA au sein d\'une interface unique et fluide.',
    technologies: ['FastAPI', 'React', 'Python', 'LLM Orchestration', 'Redis'],
    period: '2026 - Q3',
    features: [
      'Hub centralisé multi-outils',
      'Pipelines automatisés de productivité',
      'API unifiée pour développeurs',
      'Espace de travail partagé pour équipes'
    ],
    iconName: 'Cpu',
    highlighted: true
  },
  {
    id: 'vocalify',
    name: 'Vocalify',
    shortDescription: 'Studio audio nouvelle génération axé sur la synthèse vocale ultra-réaliste et la transformation de voix par IA.',
    fullDescription: 'Vocalify permet aux créateurs de contenu, studios de jeux vidéo et entreprises d\'accéder à une technologie de clonage vocal haute fidélité, de doublage multilingue et de text-to-speech naturel avec émotion réglable.',
    category: 'IA',
    additionalCategories: ['Outils', 'Futurs projets'],
    status: 'Projet',
    problemSolved: 'Le doublage vocal professionnel et l\'enregistrement de voix-off sont coûteux et chronophages.',
    solution: 'Génération instantanée de voix naturelles avec contrôle précis des émotions, du rythme et de la langue.',
    technologies: ['PyTorch', 'Audio Neural Synthesis', 'Web Audio API', 'React', 'Node.js'],
    period: '2026 - Q4',
    features: [
      'Synthèse text-to-speech multilingue',
      'Clonage vocal sécurisé et éthique',
      'Contrôle des intonations et émotions',
      'Exports en studio mastering haute résolution'
    ],
    iconName: 'Mic'
  },
  {
    id: 'iit-image-improvement-tool',
    name: 'IIT — Image Improvement Tool',
    shortDescription: 'Outil haute précision destiné à la restauration, à l\'upscaling sans perte et à l\'optimisation intelligente des images.',
    fullDescription: 'Un outil puissant utilisant des réseaux de neurones pour supprimer le bruit, améliorer la netteté, agrandir les images jusqu\'à 8x sans perte de qualité et compresser intelligemment pour le web.',
    category: 'IA',
    additionalCategories: ['Outils', 'Web'],
    status: 'Projet',
    problemSolved: 'Les images pixelisées ou compressées dégradent la crédibilité des boutiques en ligne et des médias.',
    solution: 'Restauration instantanée des détails et optimisation de la taille de fichier par algorithmes neuronaux.',
    technologies: ['WebAssembly', 'TensorFlow.js', 'React', 'Canvas API', 'Rust backend'],
    period: '2026 - Q3',
    features: [
      'Upscaling IA jusqu\'à 8x sans perte',
      'Suppression automatique du bruit et des artefacts',
      'Compression WebP/AVIF ultra-légère',
      'Traitement par lot en un clic'
    ],
    iconName: 'Image'
  },
  {
    id: 'viewword',
    name: 'ViewWord',
    shortDescription: 'Plateforme collaborative mettant en relation marques innovantes et créateurs de contenu à fort impact.',
    fullDescription: 'ViewWord structure et sécurise la creator economy en fournissant une place de marché fluide avec contrats automatisés, suivi des campagnes en direct et paiements garantis par séquestre numérique.',
    category: 'Services',
    additionalCategories: ['Web', 'Produits', 'Futurs projets'],
    status: 'Projet',
    problemSolved: 'Difficulté pour les marques de cibler les créateurs pertinents et opacité dans le suivi du ROI des partenariats.',
    solution: 'Matching algorithmique, métriques d\'engagement certifiées et gestion centralisée des campagnes d\'influence.',
    technologies: ['Next.js', 'Tailwind CSS', 'Stripe Connect', 'Supabase', 'Analytics API'],
    period: '2026 - Q4',
    features: [
      'Algorithme de matching d\'audience',
      'Contrats numériques et paiements sécurisés',
      'Tableau de bord de suivi ROI en temps réel',
      'Messagerie et validation des livrables'
    ],
    iconName: 'Users'
  }
];
