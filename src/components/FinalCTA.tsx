import React from 'react';

export const FinalCTA = () => (
  <section className="py-32 bg-brand-black text-center relative overflow-hidden border-t border-brand-white/5">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=2000" 
        alt="Office Building" 
        className="w-full h-full object-cover opacity-10"
      />
      <div className="absolute inset-0 bg-brand-black/80" />
    </div>

    <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-fluid-h2 font-display mb-8 text-brand-white leading-tight">
          Decisões inteligentes exigem <br/>
          <span className="text-brand-gold italic">segurança jurídica.</span>
        </h2>
        <p className="text-brand-white/50 text-lg mb-12 font-light tracking-wide">
          Fale agora com um especialista e descubra as melhores oportunidades.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <a href="https://wa.me/553173590970" 
             target="_blank"
             rel="noopener noreferrer"
             className="bg-[#C29B61] px-12 py-5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500 text-brand-black flex items-center gap-3"
          >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Falar com especialista
          </a>
          <span className="text-brand-white/30 text-[10px] tracking-[0.3em] uppercase font-light">Atendimento rápido e personalizado</span>
        </div>
    </div>
  </section>
);
