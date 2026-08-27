import React from 'react';
import { ArrowRight, Layers, Cpu, Sparkles, Shield, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onExploreProjects: () => void;
  onExploreVision: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onExploreVision }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      {/* Background Image with Layered Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="VEXSA Digital Ecosystem"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[1.02] contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-white/75 sm:bg-white/70 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-transparent to-white/90" />
      </div>

      {/* Dynamic Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/15 to-cyan-400/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-2xl pointer-events-none z-0 animate-pulse-slow" />
      <div className="absolute top-2/3 right-1/4 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          
          {/* Top Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/80 shadow-sm">
              <img
                src="/vexsa-logo.png"
                alt="VEXSA"
                className="w-5 h-5 object-contain"
              />
              <span className="text-xs sm:text-sm font-bold text-slate-900 tracking-wide">
                VEXSA<span className="text-blue-600">.</span>
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span className="text-xs sm:text-sm font-semibold text-blue-700">
                Tout pour un, tout en œuvre
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 backdrop-blur-md border border-blue-200/60 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping" />
              <span className="text-xs sm:text-sm font-semibold text-blue-800 tracking-wide">
                Écosystème Technologique & Digital 2026
              </span>
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            </div>
          </motion.div>

          {/* Main Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]"
          >
            VEXSA — L'écosystème qui transforme les{' '}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 bg-clip-text text-transparent">
                idées en solutions.
              </span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-100/70 -z-10 transform -rotate-1 rounded"></span>
            </span>
          </motion.h1>

          {/* Hero Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal"
          >
            VEXSA conçoit et développe des solutions technologiques, digitales et innovantes pour simplifier la vie des utilisateurs et créer de nouvelles opportunités pour les entreprises de demain.
          </motion.p>

          {/* Interactive Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={onExploreProjects}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Découvrir nos projets</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onExploreVision}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              <span>Explorer VEXSA</span>
            </button>
          </motion.div>

          {/* Micro Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/70 backdrop-blur-sm border border-slate-100 text-slate-700 text-xs sm:text-sm font-medium">
              <Cpu className="w-4 h-4 text-blue-600" />
              <span>Intelligence Artificielle</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/70 backdrop-blur-sm border border-slate-100 text-slate-700 text-xs sm:text-sm font-medium">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Plateformes SaaS</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/70 backdrop-blur-sm border border-slate-100 text-slate-700 text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Outils Numériques</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/70 backdrop-blur-sm border border-slate-100 text-slate-700 text-xs sm:text-sm font-medium">
              <Shield className="w-4 h-4 text-blue-600" />
              <span>Architecture Robuste</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 opacity-75 animate-bounce">
        <span className="text-[11px] font-medium uppercase tracking-widest text-slate-500">Explorer</span>
        <ChevronDown className="w-4 h-4 text-blue-500" />
      </div>
    </section>
  );
};
