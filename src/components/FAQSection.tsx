import React from 'react';
import { FAQAccordion } from './FAQAccordion';

export const FAQSection = () => {
    const leftFaq = [
      { question: "Qual o valor mínimo para investir?", answer: "O valor mínimo varia conforme o edital, mas existem excelentes oportunidades a partir de R$ 150 mil." },
      { question: "Quais são os custos envolvidos?", answer: "Além do valor do lance, existem custos como ITBI, escritura, IPTU em atraso (se houver) e comissão do leiloeiro." },
      { question: "O imóvel pode estar ocupado?", answer: "Sim, muitos imóveis de leilão estão ocupados. Nossa assessoria cuida de todo o processo de desocupação judicial ou extrajudicial." },
      { question: "Posso financiar um imóvel de leilão?", answer: "Sim, muitos leilões extrajudiciais permitem financiamento bancário e uso de FGTS." }
    ];
    const rightFaq = [
      { question: "Como é feita a análise jurídica?", answer: "Analisamos minuciosamente o edital, o processo judicial, dívidas do espólio e histórico dos proprietários." },
      { question: "Em quanto tempo recebo o imóvel?", answer: "Em média de 3 a 8 meses, dependendo se o imóvel está desocupado ou se exige processo legal." },
      { question: "Vocês atuam em todo o Brasil?", answer: "Sim, nossa assessoria é 100% digital e atendemos investidores em todas as regiões do país." },
      { question: "Como funciona o pagamento?", answer: "Geralmente é feito à vista ou com entrada + parcelamento, conforme as regras específicas do edital." }
    ];
    return (
        <section id="faq" className="py-32 bg-brand-black text-brand-white">
          <div className="max-w-7xl mx-auto px-6">
            <span className="text-brand-gold uppercase tracking-[0.2em] text-[10px] mb-6 block text-center font-medium">Dúvidas Frequentes</span>
            <h2 className="text-fluid-h2 font-display mb-24 text-center">
              Perguntas <span className="text-brand-gold italic">mais comuns</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
              <FAQAccordion items={leftFaq} />
              <FAQAccordion items={rightFaq} />
            </div>
          </div>
        </section>
      );
};
