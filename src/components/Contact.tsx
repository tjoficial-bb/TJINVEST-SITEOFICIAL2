import React from 'react';
import { MessageCircle } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contato" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
              alt="Office" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black" />
          </div>
    
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="text-brand-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-6">Fale Conosco</p>
            <h2 className="text-4xl md:text-6xl font-display mb-8">Pronto para expandir seus horizontes?</h2>
            <p className="text-white/60 text-lg mb-12 font-light">
              Entre em contato com nossa equipe de especialistas e descubra como podemos potencializar seus resultados.
            </p>
            <a 
              href="https://wa.me/553173590970"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gold text-black px-12 py-5 text-sm font-bold tracking-widest hover:bg-white transition-all inline-flex items-center gap-3 mx-auto"
            >
              <MessageCircle size={18} /> FALAR NO WHATSAPP
            </a>
          </div>
        </section>
      );
};
