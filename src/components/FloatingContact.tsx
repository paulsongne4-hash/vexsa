import React, { useState, useEffect } from 'react';
import { MessageCircle, Mail, X, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 shadow-md flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
          aria-label="Remonter en haut"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Popover Options when clicked */}
      {isOpen && (
        <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-2xl space-y-2.5 w-64 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-900 font-mono">ASSISTANCE VEXSA</span>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-slate-400 hover:text-slate-600 p-0.5 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <a
            href="https://wa.me/?text=Bonjour%20VEXSA,%20je%20souhaite%20des%20informations%20sur%20vos%20solutions."
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-sm">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold leading-none">WhatsApp Direct</div>
              <div className="text-[10px] text-slate-400 mt-1">Réponse rapide & devis</div>
            </div>
          </a>

          <button
            onClick={() => {
              setIsOpen(false);
              navigate('/contact');
            }}
            className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50 text-slate-700 hover:text-blue-700 transition-colors text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-sm">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold leading-none">Formulaire de contact</div>
              <div className="text-[10px] text-slate-400 mt-1">Cahier des charges & audit</div>
            </div>
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-glow flex items-center gap-2.5 px-4 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-blue-600/30"
        aria-label="Contact rapide"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span className="tracking-wide">Échanger avec nous</span>
        <MessageCircle className="w-4 h-4 text-cyan-200" />
      </button>

    </div>
  );
};
