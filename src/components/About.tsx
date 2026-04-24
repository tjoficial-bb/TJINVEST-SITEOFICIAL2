import React from 'react';
import mapa from '../assets/images/mapa.png';

export const About = () => {
    return (
        <section id="sobre" className="py-32 bg-brand-black text-brand-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="aspect-[16/11] bg-brand-surface overflow-hidden shadow-2xl border border-brand-white/5 relative">
                    <img 
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
                        alt="Escritório TJ Invest" 
                        className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                    />
                    {/* Badge */}
                    <div className="absolute bottom-0 right-0 bg-[#0A0A0A] border-l border-t border-brand-white/10 p-8 max-w-[220px] backdrop-blur-sm">
                      <div className="flex flex-col gap-4">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        <span className="text-[10px] uppercase tracking-[0.2em] leading-relaxed text-brand-white/80 font-medium">
                          Atuação nacional com excelência em cada detalhe.
                        </span>
                      </div>
                    </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <span className="text-brand-gold uppercase tracking-[0.2em] text-[10px] mb-6 block font-medium">Sobre a TJ Invest</span>
                <h2 className="text-fluid-h2 font-display mb-10 leading-[1.1]">
                  Assessoria completa. <br/>
                  <span className="text-brand-gold italic">Resultados reais.</span>
                </h2>
                <p className="text-lg text-brand-white/70 mb-6 font-light leading-relaxed">
                  A TJ Invest é uma assessoria especializada em leilões de imóveis, com foco em segurança jurídica, transparência e alta performance.
                </p>
                <p className="text-lg text-brand-white/70 mb-12 font-light leading-relaxed">
                  Nossa equipe multidisciplinar acompanha todas as etapas do processo, desde a análise do edital até a entrega das chaves.
                </p>
                <a 
                  href="https://wa.me/553173590970"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-b border-brand-gold/30 text-brand-gold pb-2 text-[11px] font-bold tracking-[0.2em] uppercase hover:text-brand-white hover:border-brand-white transition-all duration-300"
                >
                  Saiba mais sobre nós
                </a>
              </div>
            </div>
          </div>
        </section>
      );
};
