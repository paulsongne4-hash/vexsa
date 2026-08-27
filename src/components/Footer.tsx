import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'À propos', path: '/about' },
    { label: 'Projets', path: '/projects' },
    { label: 'Services', path: '/services' },
    { label: 'Vision', path: '/vision' },
    { label: 'Contact', path: '/contact' },
  ];

  const projects = [
    'VyronBook IA', 'Android App Builder', 'QRLink',
    'ED Exchange AI Studio', 'Vocalify',
  ];

  return (
    <footer className="bg-[#0B132B] text-slate-300 relative overflow-hidden border-t border-blue-900/40">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-6 sm:pb-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-8 sm:pb-10 border-b border-slate-800">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/vexsa-logo.png" alt="VEXSA" className="h-10 w-10 object-contain rounded-xl bg-white/95 p-1 shadow-md" />
              <span className="font-extrabold text-xl tracking-tight text-white">
                VEXSA<span className="text-blue-500">.</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              L'écosystème qui transforme les idées en solutions. SaaS, IA, Applications Digitales.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              {[
                { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
                { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://github.com', icon: Github, label: 'GitHub' },
                { href: 'mailto:contact@vexsa.io', icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projets */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest">Projets Phares</h4>
            <ul className="space-y-2">
              {projects.map((p) => (
                <li key={p}>
                  <button onClick={() => navigate('/projects')}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors text-left">
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest">Informations</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {['Mentions Légales', 'Politique de Confidentialité', 'Cookies'].map((l) => (
                <li key={l}><a href="#" className="hover:text-cyan-400 transition-colors">{l}</a></li>
              ))}
            </ul>

            <div className="pt-4">
              <button onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                <span>Nous contacter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>© 2026 <strong className="text-slate-400">VEXSA</strong> — Tous droits réservés.</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
            <span>Systèmes opérationnels & Écosystème actif</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
