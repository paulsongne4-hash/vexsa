import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowUpRight, 
  BookOpen, 
  Smartphone, 
  QrCode, 
  Cpu, 
  Mic, 
  Image as ImageIcon, 
  Users, 
  Layers,
  CheckCircle,
  Filter
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Tous');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterCategories = [
    'Tous',
    'IA',
    'SaaS',
    'Applications',
    'Web',
    'Outils',
    'Services',
    'Produits',
    'Futurs projets'
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return BookOpen;
      case 'Smartphone': return Smartphone;
      case 'QrCode': return QrCode;
      case 'Cpu': return Cpu;
      case 'Mic': return Mic;
      case 'Image': return ImageIcon;
      case 'Users': return Users;
      default: return Layers;
    }
  };

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'Tous') return true;
    if (activeFilter === 'Futurs projets') return project.status === 'Projet' || project.status === 'Futur';
    if (project.category === activeFilter) return true;
    if (project.additionalCategories?.includes(activeFilter as ProjectCategory)) return true;
    return false;
  });

  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case 'Terminé':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'En développement':
        return 'bg-blue-50 text-blue-700 border-blue-200 font-medium';
      case 'Projet':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cœur de l'Écosystème</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nos Projets & Solutions
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Explorez les applications, outils d'IA et plateformes SaaS nés et propulsés par VEXSA. Chaque solution répond à un défi technologique précis.
          </p>
        </div>

        {/* Dynamic Filters Bar */}
        <div className="flex items-center justify-center mb-12 overflow-x-auto pb-4 no-scrollbar">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-full overflow-x-auto">
            {filterCategories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const IconComp = getIcon(project.iconName);
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Card Header & Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    {/* Top row: Icon & Status */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                        <IconComp className="w-6 h-6" />
                      </div>
                      
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusBadgeStyle(project.status)}`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Title & Category */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                          {project.category}
                        </span>
                        {project.period && (
                          <span className="text-[11px] text-slate-500 font-medium">
                            • {project.period}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {project.name}
                      </h3>
                    </div>

                    {/* Short Description */}
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/60 text-slate-600 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 rounded-md bg-slate-50 border border-slate-200/60 text-slate-500 text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="px-6 py-4 bg-slate-50/60 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-blue-600 group-hover:bg-blue-50/50 transition-colors">
                    <span>Découvrir le projet</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty state if no projects in filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <Filter className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-slate-800">Aucun projet dans cette catégorie</h4>
            <p className="text-slate-600 text-sm mt-1">
              De nouvelles initiatives sont régulièrement ajoutées à l'écosystème VEXSA.
            </p>
          </div>
        )}

      </div>

      {/* Detailed Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
