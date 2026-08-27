import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Layers,
  Cpu,
  Sparkles,
  Shield,
  ChevronDown,
  Lightbulb,
  Hammer,
  Rocket,
  BookOpen,
  Smartphone,
  Users,
  ArrowUpRight,
  Mail,
} from 'lucide-react';
import { projectsData } from '../data/projects';

/* ─── Helpers ─────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const getProjectIcon = (iconName: string) => {
  switch (iconName) {
    case 'BookOpen':  return BookOpen;
    case 'Smartphone': return Smartphone;
    case 'Users':     return Users;
    default:          return Cpu;
  }
};

/* ─── Component ───────────────────────────────── */
export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const featuredProjects = projectsData.filter((p) => p.highlighted).slice(0, 3);

  return (
    <div className="overflow-x-hidden">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[calc(100vh-72px)] flex items-center justify-center py-16 sm:py-24 overflow-hidden">
        {/* Background Image with Layered Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.png"
            alt="VEXSA Digital Ecosystem"
            className="w-full h-full object-cover object-center scale-105 filter brightness-[1.02] contrast-[1.02]"
          />
          {/* Subtle gradient overlays to ensure extreme text readability and brand elegance */}
          <div className="absolute inset-0 bg-white/75 sm:bg-white/70 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-white" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-transparent to-white/90" />
        </div>

        {/* Ambient glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-blue-500/15 to-cyan-400/10 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute top-1/4 left-[10%] w-[220px] h-[220px] bg-blue-600/10 rounded-full blur-2xl pointer-events-none animate-pulse-slow z-0" />
        <div className="absolute bottom-1/4 right-[8%] w-[260px] h-[260px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none z-0" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-7 sm:space-y-9">

            {/* Logo Badge & Live badge */}
            <motion.div {...fadeUp(0)} className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/80 shadow-sm hover:shadow-md transition-all">
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

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 backdrop-blur-md border border-blue-200/70 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-blue-800 tracking-wide">
                  Écosystème Technologique & Digital — 2026
                </span>
                <Sparkles className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.08)}
              className="text-4xl sm:text-6xl lg:text-[5.25rem] font-extrabold tracking-tight text-slate-900 leading-[1.08]"
            >
              L'écosystème qui transforme les{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 bg-clip-text text-transparent">
                  idées en solutions.
                </span>
                <span className="absolute bottom-1 left-0 w-full h-2.5 sm:h-3.5 bg-blue-100/80 -z-10 -rotate-1 rounded" />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...fadeUp(0.16)}
              className="text-base sm:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto font-medium"
            >
              VEXSA conçoit et développe des solutions technologiques, digitales et innovantes pour simplifier
              la vie des utilisateurs et créer de nouvelles opportunités pour les entreprises de demain.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.24)}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2"
            >
              <button
                onClick={() => navigate('/projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Découvrir nos projets</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => navigate('/about')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl bg-white/95 hover:bg-white text-slate-800 font-semibold text-sm sm:text-base border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 backdrop-blur-sm"
              >
                <span>Explorer VEXSA</span>
              </button>
            </motion.div>

            {/* Trust pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-6 flex flex-wrap justify-center gap-2.5"
            >
              {[
                { icon: Cpu,     label: 'Intelligence Artificielle' },
                { icon: Layers,  label: 'Plateformes SaaS' },
                { icon: Sparkles,label: 'Outils Numériques' },
                { icon: Shield,  label: 'Architecture Robuste' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 py-2 px-3.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/70 text-slate-700 text-xs sm:text-sm font-semibold shadow-sm hover:border-blue-300 hover:shadow transition-all"
                >
                  <Icon className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 animate-bounce pointer-events-none z-10">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-600">Défiler</span>
          <ChevronDown className="w-4 h-4 text-blue-600" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COMMENT ÇA MARCHE — 3 Étapes
      ══════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-100 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-14 sm:mb-20 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Notre Approche</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              De l'idée à l'<span className="text-blue-600">impact</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Trois phases simples, une philosophie unique — faire émerger les meilleures idées et les pousser jusqu'à l'excellence.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-10 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px bg-gradient-to-r from-blue-200 via-blue-400 to-cyan-300 z-0" />

            {[
              {
                step: '01',
                icon: Lightbulb,
                title: 'Imaginer',
                desc: 'Identifier un besoin réel, challenger l\'idée et définir la vision produit avec une précision stratégique.',
                color: 'bg-slate-100 text-slate-700',
                ring: 'ring-slate-200',
              },
              {
                step: '02',
                icon: Hammer,
                title: 'Construire',
                desc: 'Concevoir, développer et itérer rapidement avec les meilleures technologies disponibles.',
                color: 'bg-blue-600 text-white shadow-lg shadow-blue-600/30',
                ring: 'ring-blue-200',
              },
              {
                step: '03',
                icon: Rocket,
                title: 'Propulser',
                desc: 'Déployer, scaler et intégrer chaque solution dans l\'écosystème VEXSA pour maximiser la valeur.',
                color: 'bg-gradient-to-br from-blue-700 to-cyan-500 text-white shadow-lg shadow-cyan-500/20',
                ring: 'ring-cyan-200',
              },
            ].map(({ step, icon: Icon, title, desc, color, ring }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative z-10 flex flex-col items-center text-center p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ring-4 ${ring} ${color} transition-all`}>
                  <Icon className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-1">{step}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROJETS VEDETTES
      ══════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-slate-50/60 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Projets Phares</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Nos solutions en action
              </h2>
            </div>
            <button
              onClick={() => navigate('/projects')}
              className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors group"
            >
              Voir tous les projets
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {featuredProjects.map((project, i) => {
              const Icon = getProjectIcon(project.iconName);
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => navigate('/projects')}
                  className="group cursor-pointer bg-white rounded-2xl border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Card header */}
                  <div className="p-5 sm:p-6 flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>
                  {/* Card footer */}
                  <div className="px-5 sm:px-6 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                    <span>En savoir plus</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MANIFESTE / CITATION
      ══════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.03] to-cyan-500/[0.03] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              Manifeste VEXSA
            </p>
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
              "Une idée peut devenir un produit.{' '}
              <span className="text-blue-600">Un produit peut devenir une solution.</span>{' '}
              Une solution peut devenir un écosystème."
            </blockquote>
            <p className="text-slate-400 text-sm font-medium tracking-wide">— Philosophie VEXSA, Horizon 2026</p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-[#0B132B] relative overflow-hidden border-t border-blue-900/40">
        {/* Ambient */}
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/12 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <span>Écosystème actif & opérationnel</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Un projet ? Une idée ?{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Construisons-la ensemble.
              </span>
            </h2>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Que vous souhaitiez collaborer, intégrer une solution ou confier la réalisation d'une plateforme sur-mesure, notre équipe est prête.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Nous contacter</span>
              </button>
              <button
                onClick={() => navigate('/services')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-base border border-white/15 hover:border-white/25 transition-all duration-200"
              >
                <span>Voir nos services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
