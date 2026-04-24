import React from 'react';
import { motion } from 'motion/react';
import { FAQAccordion } from '../components/FAQAccordion';

export const FAQPage = () => {
  const categories = [
    {
      title: "Gerais sobre Leilões de Imóveis",
      items: [
        { question: "O que é um leilão de imóveis?", answer: "Um leilão de imóveis é um evento público de venda de propriedades, geralmente por um preço abaixo do valor de mercado, que pode ser judicial (determinado pela justiça) ou extrajudicial (promovido por instituições financeiras ou empresas)." },
        { question: "Quem pode participar de um leilão de imóveis?", answer: "Qualquer pessoa física ou jurídica, maior de idade e capaz, pode participar, desde que não esteja impedida por lei (como juízes, promotores, servidores públicos ligados ao processo, ou o próprio devedor)." },
        { question: "Quais são os tipos de leilões de imóveis?", answer: "Os principais tipos são os leilões judiciais (determinados pela justiça) e os extrajudiciais (promovidos por bancos ou credores fiduciários)." },
        { question: "É seguro comprar imóveis em leilão?", answer: "Sim, é seguro, desde que se faça uma análise criteriosa do edital e do processo. A assessoria especializada da TJ Invest é fundamental para garantir essa segurança." },
        { question: "Qual a principal vantagem de comprar em leilão?", answer: "A principal vantagem é a possibilidade de adquirir imóveis por um preço significativamente abaixo do valor de mercado." },
        { question: "Qual a principal desvantagem ou risco?", answer: "A principal desvantagem é a impossibilidade de visitar o interior do imóvel antes da arrematação e a necessidade de lidar com a desocupação, caso o imóvel esteja ocupado." },
        { question: "Posso usar o imóvel para moradia ou investimento?", answer: "Sim, os imóveis arrematados podem ser utilizados tanto para moradia própria quanto para investimento (revenda, locação tradicional ou via Airbnb)." },
        { question: "Preciso de um advogado para participar de um leilão?", answer: "É altamente recomendável contar com assessoria jurídica especializada, como a da TJ Invest, para analisar o edital e o processo, minimizando riscos." },
      ]
    },
    {
      title: "Leilões Judiciais",
      items: [
        { question: "Como funciona um leilão judicial?", answer: "É uma venda pública de bens determinada por um juiz, para quitar dívidas ou partilhar bens em processos judiciais. O leiloeiro oficial conduz o evento sob supervisão judicial." },
        { question: "O que é primeira e segunda praça?", answer: "São as duas tentativas de venda do imóvel. Na primeira praça, o lance mínimo é o valor da avaliação. Na segunda praça, o lance mínimo pode ser menor, geralmente 50% do valor da avaliação, desde que não seja preço vil." },
        { question: "Qual a segurança jurídica de um leilão judicial?", answer: "É alta, pois o processo é conduzido e homologado por um juiz, o que confere maior respaldo legal à arrematação." },
      ]
    },
    {
      title: "Leilões Extrajudiciais",
      items: [
        { question: "Como funciona um leilão extrajudicial?", answer: "É uma venda pública promovida por um credor (geralmente um banco) que retomou o imóvel por inadimplência do financiamento. O processo é regido pela Lei de Alienação Fiduciária." },
        { question: "Qual a principal diferença entre leilão judicial e extrajudicial?", answer: "A principal diferença é que o judicial é determinado pela justiça, enquanto o extrajudicial é promovido por um credor fora do âmbito judicial, com base em contrato de alienação fiduciária." },
        { question: "Posso financiar a compra de um imóvel em leilão extrajudicial?", answer: "Sim, muitos bancos permitem o financiamento de imóveis arrematados em seus próprios leilões extrajudiciais, mas as condições devem ser verificadas previamente." },
      ]
    },
    {
      title: "Custos e Financiamento",
      items: [
        { question: "Quais são os custos envolvidos na arrematação?", answer: "Além do valor do lance, há custos com ITBI (Imposto sobre Transmissão), registro, honorários do leiloeiro (geralmente 5%), custas judiciais (se houver) e os honorários da assessoria TJ Invest." },
        { question: "Qual o valor da assessoria da TJ Invest?", answer: "Nossa assessoria tem uma entrada de R$ 1.500,00 (totalmente abatida após a arrematação) e 6% sobre o valor da arrematação. Para gestão de venda pós-leilão, os honorários também são de 6% sobre o valor da venda." },
        { question: "Posso usar meu FGTS para arrematar?", answer: "Sim, em alguns casos é possível, especialmente em leilões judiciais. As regras são específicas e devem ser verificadas em cada edital junto à Caixa Econômica Federal." },
        { question: "É possível financiar um imóvel de leilão?", answer: "Sim, leilões extrajudiciais de bancos frequentemente permitem financiamento. Em leilões judiciais o financiamento é mais raro, mas o parcelamento judicial pode ser uma opção viável dependendo do edital." },
      ]
    },
    {
      title: "Riscos e Segurança",
      items: [
        { question: "Posso perder o imóvel após a arrematação?", answer: "É extremamente raro, mas pode ocorrer em casos de nulidade do leilão por vícios graves no processo. A análise jurídica profunda da TJ Invest visa mitigar esse risco ao máximo." },
        { question: "O que é um 'vício' no processo de leilão?", answer: "São falhas ou irregularidades na condução do leilão ou na documentação que podem levar à anulação. Nossa equipe identifica e alerta sobre esses vícios antes de você dar o lance." },
        { question: "Como a TJ Invest me protege de fraudes?", answer: "Verificamos a idoneidade do leiloeiro, a autenticidade do edital e a legalidade de todo o processo, garantindo que você participe apenas de leilões legítimos." },
        { question: "O que acontece se o imóvel tiver dívidas ocultas?", answer: "Nossa análise documental busca identificar todas as dívidas. Caso surjam dívidas ocultas após a arrematação, nossa assessoria orienta sobre as medidas cabíveis para proteger seus interesses conforme a lei." },
      ]
    },
    {
       title: "Assessoria da TJ Invest",
       items: [
         { question: "Como a TJ Invest me ajuda a encontrar imóveis?", answer: "Após formalizar nossa assessoria, você terá acesso a um grupo exclusivo de WhatsApp onde nossa equipe envia oportunidades filtradas e analisadas diariamente." },
         { question: "A TJ Invest cuida da desocupação do imóvel?", answer: "Sim, oferecemos a Gestão de Desocupação, priorizando a via extrajudicial para agilizar o processo e garantir a posse ao arrematante." },
         { question: "Quanto tempo leva para desocupar um imóvel?", answer: "Em leilões extrajudiciais, a via extrajudicial geralmente permite a desocupação em 15 a 30 dias. Em leilões judiciais o prazo pode ser maior, mas buscamos a solução mais rápida." },
       ]
    }
  ];

  return (
    <div className="bg-brand-black min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-20"
        >
          <span className="text-brand-gold uppercase tracking-[0.3em] text-[10px] mb-4 block font-medium">FAQ</span>
          <h1 className="text-fluid-h2 font-display text-brand-white mb-6">Perguntas <span className="italic text-brand-gold">Frequentes</span></h1>
          <p className="text-brand-white/60 font-light text-lg">Esclareça suas dúvidas sobre o mercado de leilões com a TJ Invest.</p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h2 className="text-2xl font-display text-brand-gold mb-8 border-l-2 border-brand-gold pl-6">{category.title}</h2>
              <FAQAccordion items={category.items} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-12 bg-brand-surface border border-brand-white/5 text-center"
        >
          <h3 className="text-2xl font-display mb-6">Ainda tem dúvidas?</h3>
          <p className="text-brand-white/60 mb-10 font-light">Nossa equipe está pronta para te atender de forma personalizada.</p>
          <a 
            href="https://wa.me/553173590970"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-gold text-brand-black px-12 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-brand-white transition-all duration-300"
          >
            Falar com especialista
          </a>
        </motion.div>
      </div>
    </div>
  );
};
