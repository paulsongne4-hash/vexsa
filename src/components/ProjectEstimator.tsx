import React, { useState } from 'react';
import { 
  Cpu, 
  Smartphone, 
  Layers, 
  Globe, 
  Check, 
  ArrowRight, 
  Clock, 
  Zap, 
  Send,
  MessageCircle
} from 'lucide-react';

interface ProjectTypeOption {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  baseDuration: string;
  recommendedFeatures: string[];
}

const projectTypes: ProjectTypeOption[] = [
  {
    id: 'saas',
    title: 'Plateforme SaaS & Web App',
    subtitle: 'Tableau de bord, abonnements Stripe & architecture cloud scalable',
    icon: Layers,
    baseDuration: '3 à 6 semaines',
    recommendedFeatures: ['Auth multi-tenants', 'Facturation récurrente', 'Dashboard analytique', 'API Rest / GraphQL'],
  },
  {
    id: 'ai',
    title: 'Solution IA & Automatisation',
    subtitle: 'Agents intelligents, intégration LLM, génération & workflows',
    icon: Cpu,
    baseDuration: '2 à 4 semaines',
    recommendedFeatures: ['Connecteur LLM (OpenAI/Claude)', 'Traitement de données', 'Automatisation métiers', 'Interface Chatbot UI'],
  },
  {
    id: 'mobile',
    title: 'Application Mobile (Android / iOS)',
    subtitle: 'Conversion Web to App ou bundle optimisé Store avec push',
    icon: Smartphone,
    baseDuration: '2 à 5 semaines',
    recommendedFeatures: ['Notifications Push', 'Mode Hors-Ligne', 'Prêt Google Play', 'Expérience tactile 60fps'],
  },
  {
    id: 'web',
    title: 'Site Web & Plateforme Interactive',
    subtitle: 'Design sur-mesure ultra-rapide, vitrine d\'excellence & SEO',
    icon: Globe,
    baseDuration: '1 à 3 semaines',
    recommendedFeatures: ['Performance 99/100', 'Animations interactives', 'Optimisation SEO', 'CMS sur-mesure'],
  },
];

const availableFeatures = [
  { id: 'auth', label: 'Authentification & Rôles', category: 'Sécurité' },
  { id: 'payment', label: 'Paiements & Abonnements', category: 'Fintech' },
  { id: 'ai-engine', label: 'Moteur IA / LLM dédié', category: 'IA' },
  { id: 'mobile-app', label: 'Export Mobile Natif', category: 'Mobile' },
  { id: 'admin-panel', label: 'Espace d\'administration complet', category: 'Gestion' },
  { id: 'push-notif', label: 'Notifications & Alertes en temps réel', category: 'Communication' },
];

export const ProjectEstimator: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('saas');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['auth', 'payment', 'admin-panel']);
  const [urgency, setUrgency] = useState<'standard' | 'express'>('standard');

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const currentType = projectTypes.find(t => t.id === selectedType) || projectTypes[0];

  const generateWhatsAppMessage = () => {
    const featuresList = selectedFeatures
      .map(fid => availableFeatures.find(f => f.id === fid)?.label)
      .filter(Boolean)
      .join(', ');

    const text = `Bonjour VEXSA ! Je souhaite configurer un projet :
- *Type* : ${currentType.title}
- *Délai souhaité* : ${urgency === 'express' ? '⚡ Mode Express Prioritaire' : 'Standard (~' + currentType.baseDuration + ')'}
- *Fonctionnalités sélectionnées* : ${featuresList || 'Sur-mesure'}

Pouvons-nous en discuter ?`;

    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="estimator" className="py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden border-t border-slate-100">
      
      {/* Background glow & mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wider uppercase font-mono">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>Simulateur & Configurateur</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Configurez votre solution en <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 bg-clip-text text-transparent">30 secondes</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Sélectionnez votre type de solution et vos fonctionnalités clés pour obtenir un cadrage technique instantané.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left / Steps: Type & Features (8 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Select Type */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-blue-600">
                  01. Choisissez votre domaine
                </span>
                <span className="text-xs text-slate-400 font-medium">1 choix possible</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {projectTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[120px] relative ${
                        isSelected
                          ? 'bg-blue-50/70 border-blue-600 ring-2 ring-blue-600/20 shadow-md shadow-blue-600/10'
                          : 'bg-white border-slate-200/80 hover:border-blue-300 hover:bg-slate-50/60 shadow-sm'
                      }`}
                    >
                      <div className="flex items-start justify-between w-full mb-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                          isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                        }`}>
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        {isSelected && (
                          <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900 leading-tight">{type.title}</h4>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-snug">{type.subtitle}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Key Features */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-blue-600">
                  02. Fonctionnalités prioritaires
                </span>
                <span className="text-xs text-slate-400 font-medium">Sélection multiple</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {availableFeatures.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`px-3.5 py-3 rounded-xl border text-left flex items-center justify-between text-xs sm:text-sm font-semibold transition-all duration-200 ${
                        isChecked
                          ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200/80 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <span className="truncate pr-2">{feat.label}</span>
                      <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 ${
                        isChecked ? 'bg-blue-500 text-white' : 'border border-slate-300'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Priority */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-blue-600">
                03. Rythme de livraison
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setUrgency('standard')}
                  className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all ${
                    urgency === 'standard'
                      ? 'bg-blue-50 border-blue-600 text-blue-950 ring-1 ring-blue-600'
                      : 'bg-white border-slate-200 text-slate-600'
                  }`}
                >
                  <div className="font-bold">Standard & Structuré</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Livraison itérative pas à pas</div>
                </button>
                <button
                  onClick={() => setUrgency('express')}
                  className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all ${
                    urgency === 'express'
                      ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-600/20'
                      : 'bg-white border-slate-200 text-slate-600'
                  }`}
                >
                  <div className="font-bold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-300" />
                    <span>Sprint Express</span>
                  </div>
                  <div className={`text-[11px] mt-0.5 ${urgency === 'express' ? 'text-blue-100' : 'text-slate-500'}`}>
                    Priorité absolue VEXSA Lab
                  </div>
                </button>
              </div>
            </div>

          </div>

          {/* Right / Summary Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-card relative overflow-hidden">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-slate-400 block">
                    Cahier de route
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                    Fiche Récapitulative
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold flex items-center gap-1.5 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>DISPONIBLE</span>
                </div>
              </div>

              {/* Specs */}
              <div className="space-y-4 mb-6">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-[11px] text-slate-500 font-medium">Architecture ciblée :</span>
                  <div className="font-bold text-slate-900 text-sm">{currentType.title}</div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] text-slate-400 font-mono uppercase block">Délai estimé</span>
                    <div className="font-bold text-slate-900 text-sm mt-0.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      <span>{urgency === 'express' ? 'Sprint 2 sem.' : currentType.baseDuration}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] text-slate-400 font-mono uppercase block">Modules clés</span>
                    <div className="font-bold text-slate-900 text-sm mt-0.5">
                      {selectedFeatures.length} actif(s)
                    </div>
                  </div>
                </div>

                {/* Modules list */}
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 block mb-2">Composants intégrés :</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedFeatures.map((fid) => {
                      const f = availableFeatures.find(item => item.id === fid);
                      return (
                        <span key={fid} className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
                          {f?.label}
                        </span>
                      );
                    })}
                    {selectedFeatures.length === 0 && (
                      <span className="text-xs text-slate-400 italic">Aucun module additionnel sélectionné</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-glow w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md"
                >
                  <MessageCircle className="w-4.5 h-4.5 text-cyan-200" />
                  <span>Transmettre ce brief direct</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-slate-500" />
                  <span>Envoyer par formulaire d'audit</span>
                </button>
              </div>

              {/* Guarantee footer */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Étude sans engagement • Réponse sous 24h</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
