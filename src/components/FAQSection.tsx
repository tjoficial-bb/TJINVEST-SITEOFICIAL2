import React from 'react';
import { FAQAccordion } from './FAQAccordion';

export const FAQSection = () => {
    const faqItems = [
      { question: "O que é um leilão de imóveis?", answer: "Evento público de venda de propriedades, geralmente abaixo do valor de mercado, que pode ser judicial ou extrajudicial." },
      { question: "É seguro comprar imóveis em leilão?", answer: "Sim, desde que realizada uma análise criteriosa do edital e processo. Nossa assessoria garante essa segurança." },
      { question: "Preciso de um advogado para participar?", answer: "É altamente recomendável contar com assessoria especializada para analisar riscos e edital." },
      { question: "Posso usar o FGTS?", answer: "Em alguns casos, sim. As regras são específicas e devem ser verificadas no edital e junto à Caixa." },
      { question: "Como funciona a desocupação?", answer: "Atuamos com gestão de desocupação, priorizando a via extrajudicial para agilizar a posse." }
    ];
    return (
        <section className="py-16 md:py-32 bg-[#050505] text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-display mb-12 text-center">Dúvidas Frequentes</h2>
            <FAQAccordion items={faqItems} />
          </div>
        </section>
      );
};
