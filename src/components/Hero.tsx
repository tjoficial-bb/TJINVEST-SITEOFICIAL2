import React from 'react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden bg-brand-black">
      {/* Refined Background Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl mb-8 leading-[0.95] text-brand-white"
        >
          Invista em Imóveis de Leilão com blindagem jurídica total
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide"
        >
          Expandir seu patrimônio exige inteligência. Deixe a complexidade jurídica conosco e foque na rentabilidade.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <a 
            href="https://wa.me/553173590970"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-brand-gold text-brand-gold px-10 py-4 text-xs font-semibold tracking-[0.25em] uppercase hover:bg-brand-gold hover:text-brand-black transition-all duration-500"
          >
            Falar com especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
};
