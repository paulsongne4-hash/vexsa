import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Layers, Smartphone, Wrench, Briefcase, Box, Rocket, Sparkles, ArrowDown } from 'lucide-react';
import { valuePillars } from '../data/content';

export const AboutSection: React.FC = () => {
  const ecosystemBranches = [
    { name: 'Applications', icon: Smartphone, color: 'text-blue-600 bg-blue-50 border-blue-200' },
    { name: 'SaaS', icon: Layers, color: 'text-blue-700 bg-blue-50/80 border-blue-200' },
    { name: 'Intelligence Artificielle', icon: Bot, color: 'text-cyan-600 bg-cyan-50 border-cyan-200' },
    { name: 'Outils Numériques', icon: Wrench, color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
    { name: 'Services & Conseils', icon: Briefcase, color: 'text-blue-600 bg-blue-50 border-blue-200' },
    { name: 'Produits', icon: Box, color: 'text-slate-700 bg-slate-100 border-slate-200' },
    { name: 'Futurs Projets', icon: Rocket, color: 'text-blue-500 bg-blue-50 border-blue-200' },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>À Propos de VEXSA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Qu'est-ce que <span className="text-blue-600">VEXSA</span> ?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            VEXSA est un écosystème technologique et commercial qui imagine, développe et rassemble des solutions numériques et physiques destinées à répondre aux besoins du monde moderne.
          </p>
        </div>

        {/* VEXSA Identity — Acronym & Definition */}
        <div className="mb-20">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Identité de marque</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Two-column layout: Acronym left, Definition right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm">

            {/* Left — Acronym */}
            <div className="bg-[#F8FAFC] border-b lg:border-b-0 lg:border-r border-slate-200/80 px-6 sm:px-8 lg:px-10 py-8 sm:py-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-8">A · C · R · O · N · Y · M · E</p>

              <div className="space-y-0">
                {[
                  { letter: 'V', word: 'Vision',      sub: 'Clarté stratégique & direction globale' },
                  { letter: 'E', word: 'Écosystème',  sub: 'Toutes les solutions, un seul endroit' },
                  { letter: 'X', word: 'eXpérience',  sub: 'Ergonomie, fluidité & simplicité' },
                  { letter: 'S', word: 'Solutions',   sub: 'B2B, e-commerce, automatisation, apps' },
                  { letter: 'A', word: 'Avenir',      sub: 'Innovation continue & mise à l\'échelle' },
                ].map(({ letter, word, sub }, i) => (
                  <motion.div
                    key={letter}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="flex items-baseline gap-5 py-4 border-b border-slate-200/60 last:border-b-0 group"
                  >
                    {/* Large letter */}
                    <span className="w-10 flex-shrink-0 text-4xl font-black text-slate-900 leading-none tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                      {letter}
                    </span>
                    {/* Content */}
                    <div className="min-w-0">
                      <span className="block text-base font-bold text-slate-800 leading-tight">{word}</span>
                      <span className="block text-xs text-slate-400 mt-0.5 leading-snug">{sub}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right — Official Definition */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#0B132B] px-6 sm:px-8 lg:px-10 py-8 sm:py-10 flex flex-col justify-between min-h-[260px]"
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-6">Définition officielle</p>

                {/* The big "VEXSA" wordmark */}
                <p className="text-5xl sm:text-6xl font-black tracking-tight text-white leading-none mb-8">
                  VEX<span className="text-blue-500">SA</span>
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-[1.8] mb-6">
                  Un écosystème technologique unifié conçu pour{' '}
                  <span className="text-white font-medium">centraliser, simplifier et propulser</span>{' '}
                  l'ensemble de vos outils digitaux. En réunissant des solutions sur-mesure — du commerce B2B
                  à l'automatisation de workflows en passant par le développement d'applications —, VEXSA
                  incarne une synergie totale où chaque module renforce les autres.
                </p>
              </div>

              {/* Manifesto line */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-white font-semibold text-sm tracking-wide">
                  « Tout pour un, tout en œuvre. »
                </p>
                <p className="text-slate-500 text-xs mt-1 tracking-widest uppercase">— Philosophie VEXSA</p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Ecosystem Interactive Architecture Diagram */}

        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-slate-50/80 border border-slate-200/80 relative shadow-card">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600 font-mono">
              Structure de la Maison Mère
            </span>
          </div>

          {/* Central VEXSA Core Hub */}
          <div className="flex flex-col items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative p-6 sm:px-12 sm:py-7 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white shadow-xl shadow-blue-900/20 border border-blue-500/30 flex items-center gap-4 z-10"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center font-mono font-bold text-2xl text-white shadow-md">
                V
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-black tracking-wider text-white">VEXSA</h3>
                <p className="text-xs text-blue-300 font-medium">Maison Mère & Hub Technologique</p>
              </div>
            </motion.div>

            {/* Connecting line */}
            <div className="w-0.5 h-10 bg-gradient-to-b from-blue-600 to-blue-400 my-2 flex items-center justify-center">
              <ArrowDown className="w-4 h-4 text-blue-500 animate-bounce" />
            </div>

            {/* Ecosystem Branches Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-5xl mt-2">
              {ecosystemBranches.map((branch, index) => {
                const IconComponent = branch.icon;
                return (
                  <motion.div
                    key={branch.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-3 hover:border-blue-300 hover:shadow-md transition-all"
                  >
                    <div className={`p-2.5 rounded-lg border ${branch.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-slate-800 tracking-tight">
                      {branch.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4 Core Pillars / Pourquoi VEXSA */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Pourquoi l'écosystème <span className="text-blue-600">VEXSA</span> ?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Quatre piliers fondamentaux guident chacune de nos réalisations et investissements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuePillars.map((pillar, index) => {
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white font-bold text-lg mb-5 shadow-md shadow-blue-500/20`}>
                      0{index + 1}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{pillar.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-600">
                    <span>Pilier Fondateur</span>
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
