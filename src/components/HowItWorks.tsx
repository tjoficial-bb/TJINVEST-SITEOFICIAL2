import React from 'react';

export const HowItWorks = () => (
  <section id="como-funciona" className="py-32 bg-brand-black text-brand-white">
    <div className="max-w-7xl mx-auto px-6">
      <span className="text-brand-gold uppercase tracking-[0.2em] text-[10px] mb-6 block text-center font-medium">Como Funciona</span>
      <h2 className="text-fluid-h2 font-display mb-24 text-center">
        Do edital à <span className="text-brand-gold italic">entrega das chaves</span>
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { 
            title: "Captação e análise", 
            desc: "Selecionamos os melhores imóveis e analisamos toda a documentação e riscos.",
            icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
          },
          { 
            title: "Arrematação", 
            desc: "Representamos você no leilão e garantimos a melhor estratégia para arrematar.",
            icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M14 7l-5 5 5 5V7z"></path><path d="M11 7l-5 5 5 5V7z"></path></svg>
          },
          { 
            title: "Desocupação", 
            desc: "Cuidamos de toda a parte jurídica para posse limpa do imóvel.",
            icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-13a8.38 8.38 0 0 1 3.8.9"></path><polyline points="16 5 21 5 21 10"></polyline><line x1="21" y1="5" x2="14.5" y2="11.5"></line></svg>
          },
          { 
            title: "Reforma e preparação", 
            desc: "Indicamos os melhores profissionais para valorizar e rentabilizar o imóvel.",
            icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          }
        ].map((step, i) => (
          <div key={i} className="relative group">
            <div className="p-10 border border-brand-white/10 bg-brand-surface group-hover:border-brand-gold/30 transition-all duration-500 h-full flex flex-col items-center text-center">
              <span className="text-[10px] font-bold text-brand-gold/40 border border-brand-gold/20 px-2 py-1 mb-10 block tracking-widest">0{i+1}</span>
              <div className="mb-8 p-4 rounded-full bg-brand-gold/5 border border-brand-gold/10 group-hover:bg-brand-gold/10 transition-colors">
                {step.icon}
              </div>
              <h3 className="text-brand-white text-xl mb-6 font-display tracking-wide">{step.title}</h3>
              <p className="text-brand-white/60 leading-relaxed text-sm font-light">{step.desc}</p>
            </div>
            {i < 3 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-20"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);
