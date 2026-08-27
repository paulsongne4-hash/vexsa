export type ProjectCategory = 
  | 'IA'
  | 'SaaS'
  | 'Applications'
  | 'Web'
  | 'Outils'
  | 'Services'
  | 'Produits'
  | 'Futurs projets';

export type ProjectStatus = 
  | 'Terminé'
  | 'En développement'
  | 'Projet'
  | 'Futur';

export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: ProjectCategory;
  additionalCategories?: ProjectCategory[];
  status: ProjectStatus;
  problemSolved: string;
  solution: string;
  technologies: string[];
  period?: string;
  features: string[];
  badgeColor?: string;
  externalLink?: string;
  iconName: string;
  highlighted?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  popular?: boolean;
}

export interface StatItem {
  value: string;
  numericTarget?: number;
  suffix?: string;
  label: string;
  description: string;
}

export interface ValuePillar {
  title: string;
  description: string;
  icon: string;
  color: string;
}
