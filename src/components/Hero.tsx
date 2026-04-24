import React from 'react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-24 overflow-hidden bg-brand-black text-center">
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
            <h1 className="text-[28px] md:text-fluid-h1 mb-6 leading-[1.1] text-brand-white font-display tracking-tight text-center px-4 max-w-2xl mx-auto">
              Arremate imóveis com <span className="text-brand-gold italic">até 70% de desconto</span> <br className="hidden md:block"/>
              com total segurança.
            </h1>
            <p className="text-brand-white/80 text-base md:text-xl max-w-xl mb-8 font-light leading-relaxed mx-auto text-center px-4">
              Assessoria especializada. Do edital à entrega das chaves. Nós cuidamos de toda a análise jurídica e estratégica para você.
            </p>

            <div className="flex flex-col items-center gap-4 mb-10 w-full px-6 md:px-0">
              <a 
                  href="https://wa.me/553173590970"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#C29B61] px-10 py-4 text-[14px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500 text-brand-black flex items-center justify-center gap-4 shadow-2xl shadow-brand-gold/20"
              >
                  Falar agora com um especialista
              </a>
              <span className="text-xs text-brand-white/50">+80 clientes já arremataram conosco</span>
            </div>

            <div className="hidden md:flex flex-row justify-center gap-20 pt-6 border-t border-brand-white/5 w-full">
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
