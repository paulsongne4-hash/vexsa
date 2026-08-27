import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Compass, Lightbulb } from 'lucide-react';

export const VisionSection: React.FC = () => {
  return (
    <section id="vision" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>Notre Philosophie & Vision</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Construire aujourd'hui les <span className="text-blue-600">solutions de demain.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            VEXSA ne se limite pas à un seul produit. L'objectif est de construire progressivement un écosystème regroupant plusieurs solutions capables de répondre à différents besoins numériques, commerciaux et technologiques.
          </p>
        </div>

        {/* Highlighted Vision Manifest Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-8 sm:p-14 shadow-2xl border border-blue-500/20 overflow-hidden"
        >
          {/* Subtle background graphic */}
          <div className="absolute -right-10 -bottom-10 opacity-10 text-white pointer-events-none">
            <Quote className="w-64 h-64" />
          </div>

          <div className="relative z-10 space-y-8 text-center sm:text-left">
            <div className="inline-flex p-3 rounded-2xl bg-blue-600/30 border border-blue-400/30 text-cyan-300">
              <Lightbulb className="w-6 h-6" />
            </div>

            {/* Core Manifesto Phrase */}
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-200">
              “ Une idée peut devenir un produit.<br className="hidden sm:inline" />
              Un produit peut devenir une solution.<br className="hidden sm:inline" />
              Une solution peut devenir un écosystème. ”
            </blockquote>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white shadow-md">
                  V
                </div>
                <div>
                  <div className="font-bold text-white">Le Manifeste VEXSA</div>
                  <div className="text-xs text-blue-300">Vision Stratégique Multi-Projets</div>
                </div>
              </div>

              <span className="text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                Horizon 2026 & Au-delà
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
