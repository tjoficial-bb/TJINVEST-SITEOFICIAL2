import React from 'react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-brand-black text-center">
      {/* Background Image with stronger overlay for luxury */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070" 
          alt="Modern House" 
          className="w-full h-full object-cover opacity-40 hover:scale-105 transition-transform duration-[10s] ease-linear"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/40 to-brand-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-4xl mx-auto flex flex-col items-center"
        >
            <h1 className="text-[34px] md:text-fluid-h1 mb-6 md:mb-10 leading-[1.1] md:leading-[1.02] text-brand-white font-display tracking-tight text-center px-2">
              <span className="whitespace-nowrap">Investimento seguro com</span> <br className="md:hidden" />
              <span className="text-brand-gold italic font-extralight mt-1 block md:inline whitespace-nowrap">rentabilidade real</span>
            </h1>
            <p className="text-brand-white/70 text-base md:text-xl max-w-2xl mb-10 md:mb-12 font-light leading-relaxed md:tracking-wide mx-auto text-center px-4 md:px-0 text-balance">
              Segurança jurídica total para você investir com tranquilidade nos melhores leilões do Brasil.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 md:mb-16 w-full px-6 md:px-0">
              <a 
                  href="https://wa.me/553173590970"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#C29B61] px-14 py-6 text-[14px] md:text-[13px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500 text-brand-black flex items-center justify-center gap-4 shadow-2xl shadow-brand-gold/20"
              >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Falar com especialista
              </a>
              <div className="hidden md:flex flex-col items-center sm:items-start border-l-0 sm:border-l border-brand-white/10 sm:pl-8">
                <span className="text-brand-white/40 text-[9px] tracking-[0.3em] uppercase font-light text-center sm:text-left">
                  Atendimento <br className="hidden sm:block"/>
                  Personalizado
                </span>
              </div>
            </div>

            <div className="hidden md:flex flex-row justify-center gap-20 pt-10 border-t border-brand-white/5 w-full">
              <div className="flex items-center justify-center sm:justify-start gap-4">
                <div className="p-2 rounded-full bg-brand-gold/5 border border-brand-gold/10">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <div className="text-brand-white text-[10px] md:text-xs tracking-wide leading-tight text-left">
                  <span className="block font-semibold mb-0.5 text-brand-gold/90 uppercase tracking-wider">Segurança</span>
                  <span className="text-brand-white/40 font-light italic">Jurídica Completa</span>
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-4">
                <div className="p-2 rounded-full bg-brand-gold/5 border border-brand-gold/10">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 6l-9.5 9.5-5-5L1 18"></path><path d="M17 6h6v6"></path></svg>
                </div>
                <div className="text-brand-white text-[10px] md:text-xs tracking-wide leading-tight text-left">
                  <span className="block font-semibold mb-0.5 text-brand-gold/90 uppercase tracking-wider">Oportunidade</span>
                  <span className="text-brand-white/40 font-light italic">Abaixo de Mercado</span>
                </div>
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};
