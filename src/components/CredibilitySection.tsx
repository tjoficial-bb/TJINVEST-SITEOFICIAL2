import React from 'react';

export const CredibilitySection = () => {
  return (
    <section className="py-16 bg-brand-white text-brand-black">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-3xl md:text-5xl font-display font-bold text-brand-gold mb-2">+120</div>
          <div className="text-sm uppercase tracking-wider">Imóveis Arrematados</div>
        </div>
        <div>
          <div className="text-3xl md:text-5xl font-display font-bold text-brand-gold mb-2">+80</div>
          <div className="text-sm uppercase tracking-wider">Clientes Atendidos</div>
        </div>
        <div>
          <div className="text-3xl md:text-5xl font-display font-bold text-brand-gold mb-2">100%</div>
          <div className="text-sm uppercase tracking-wider">Acompanhamento Jurídico</div>
        </div>
        <div>
          <div className="text-3xl md:text-5xl font-display font-bold text-brand-gold mb-2">+5</div>
          <div className="text-sm uppercase tracking-wider">Anos de Mercado</div>
        </div>
      </div>
    </section>
  );
};
