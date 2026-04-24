import React from 'react';

export const HowItWorks = () => (
  <section id="como-funciona" className="py-20 md:py-32 bg-white text-black">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl md:text-5xl font-display mb-16 text-center text-black">Como Funciona Nossa Assessoria</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "1. Captação e Análise", desc: "Busca ativa e criteriosa, com análise mercadológica, documental e jurídica detalhada." },
          { title: "2. Arrematação", desc: "Condução estratégica do processo de arrematação para garantir o melhor lance." },
          { title: "3. Desocupação", desc: "Gestão completa da desocupação, priorizando a via extrajudicial para rapidez." },
          { title: "4. Reforma e Preparação", desc: "Coordenação remota de reforma para potencializar o valor do seu imóvel." }
        ].map((step, i) => (
          <div key={i} className="p-8 bg-gray-100 border-t-4 border-brand-gold shadow-md hover:shadow-xl transition-all">
            <h3 className="text-brand-gold font-display text-2xl mb-4 font-bold">{step.title}</h3>
            <p className="text-gray-900 leading-relaxed text-sm font-medium">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
