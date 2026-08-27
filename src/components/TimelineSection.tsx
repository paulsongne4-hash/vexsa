import React from 'react';
import { motion } from 'framer-motion';
import { History, PlayCircle, Rocket, Sparkles, CheckCircle } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const steps = [
    {
      period: 'PASSÉ',
      title: 'Fondations & Expérimentations',
      description: 'Premiers projets pilotes, apprentissages techniques intensifs et validation des besoins marchés pour forger les bases méthodologiques de VEXSA.',
      icon: History,
      color: 'bg-slate-100 text-slate-700 border-slate-300',
      badge: 'Acquis',
      badgeColor: 'bg-slate-100 text-slate-700'
    },
    {
      period: 'PRÉSENT',
      title: 'Développement & Accélération',
      description: 'Conception et industrialisation des solutions les plus prometteuses : outils SaaS, moteurs d\'IA générative et générateurs d\'applications.',
      icon: PlayCircle,
      color: 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/30 ring-4 ring-blue-100',
      badge: 'En cours',
      badgeColor: 'bg-blue-100 text-blue-800 animate-pulse'
    },
    {
      period: 'FUTUR',
      title: 'L\'Écosystème Global VEXSA',
      description: 'Interconnexion totale de l\'ensemble des plateformes au sein d\'un écosystème technologique unifié, autonome et créateur de valeur durable.',
      icon: Rocket,
      color: 'bg-gradient-to-r from-blue-700 to-cyan-500 text-white border-cyan-400',
      badge: 'Vision',
      badgeColor: 'bg-cyan-100 text-cyan-800'
    }
  ];

  return (
    <section className="py-24 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Feuille de Route</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            L'Évolution de <span className="text-blue-600">VEXSA</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            De la première ligne de code à l'écosystème multi-solutions : découvrez notre trajectoire d'innovation.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Central connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-slate-200 via-blue-400 to-cyan-400 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={step.period}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top row */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${step.badgeColor}`}>
                        {step.badge}
                      </span>
                      <span className="text-xs font-mono font-bold tracking-widest text-slate-600">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Step Icon */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${step.color}`}>
                      <IconComp className="w-7 h-7" />
                    </div>

                    <div className="text-xs font-black uppercase tracking-widest text-blue-600 mb-1">
                      {step.period}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
