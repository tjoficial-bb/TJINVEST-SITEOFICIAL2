import React from 'react';
import { motion } from 'motion/react';
import { HowItWorks } from '../components/HowItWorks';
import { FileText, Gavel, Key, Home, BarChart3, Briefcase, Plane, ClipboardCheck, Truck, ShieldCheck, PieChart } from 'lucide-react';

export const HowItWorksPage = () => {
  const detailedSteps = [
    { 
      stage: "Etapa 1",
      title: "Captação e Análise de Oportunidades",
      desc: "Nossa equipe inicia uma busca ativa e criteriosa por imóveis em leilão. Utilizamos três plataformas de busca abrangentes que nos permitem acessar praticamente todas as oportunidades de leilões judiciais e extrajudiciais disponíveis no Brasil.",
      details: [
        { label: "Análise Mercadológica", text: "Avaliamos o valor real de mercado e o potencial de desconto." },
        { label: "Análise Documental/Jurídica", text: "Verificamos edital, processo judicial, débitos e penhoras." },
        { label: "Análise Financeira", text: "Planilha detalhada de todos os custos envolvidos na operação." }
      ]
    },
    { 
      stage: "Etapa 2",
      title: "Arrematação e Transferência",
      desc: "Nossa equipe assume a condução do processo de arrematação. Atuamos de forma estratégica para garantir o sucesso no leilão.",
      details: [
        { label: "Estratégia de Lance", text: "Definição do teto máximo e condução profissional no leilão." },
        { label: "Acompanhamento Buropcrático", text: "Emissão de ITBI, registro no cartório e formalização da escritura." },
        { label: "Regularização Documental", text: "Asseguramos que você se torne o legítimo proprietário sem preocupações." }
      ]
    },
    { 
      stage: "Etapa 3",
      title: "Gestão de Desocupação",
      desc: "Caso o imóvel esteja ocupado, a TJ Invest assume a gestão. Nossa prioridade é resolver de forma rápida e eficiente.",
      details: [
        { label: "Via Extrajudicial", text: "Priorizamos o acordo amigável para rapidez no processo." },
        { label: "Efetividade", text: "Cerca de 90% dos casos resolvidos em um prazo de 15 a 30 dias." },
        { label: "Segurança Jurídica", text: "Se necessário, acionamos judicialmente com foco em agilidade." }
      ]
    },
    { 
      stage: "Etapa 4",
      title: "Gestão de Reforma e Preparação",
      desc: "Se o imóvel necessitar de reformas para atingir seu potencial máximo, a TJ Invest coordena todo o processo de forma remota.",
      details: [
        { label: "Orçamento Detalhado", text: "Elaboramos orçamentos de mão de obra e materiais." },
        { label: "Diligência Externa", text: "Confirmação in loco das informações e necessidades de serviços." },
        { label: "Acompanhamento", text: "Execução acompanhada passo a passo com filmagens das etapas." }
      ]
    }
  ];

  const services = [
    { icon: BarChart3, title: "Gestão de Venda", desc: "Suporte completo para a comercialização do imóvel, da precificação estratégica à negociação final." },
    { icon: Briefcase, title: "Gestão de Locação", desc: "Suporte para quem busca renda passiva no modelo tradicional, cuidando de divulgação e contratos." },
    { icon: PieChart, title: "Gestão via Airbnb", desc: "Explore o potencial de rentabilidade por temporada com nossa orientação estratégica de ocupação." },
  ];

  return (
    <main className="bg-brand-black text-brand-white">
      {/* Page Hero */}
      <section className="pt-32 pb-24 border-b border-brand-white/5 relative bg-texture">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.span 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-brand-gold uppercase tracking-[0.4em] text-[10px] mb-6 block font-medium"
            >
              Nossa Metodologia
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-fluid-h1 font-display mb-8"
            >
              Gestão Completa em <span className="text-brand-gold italic">4 Etapas</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-brand-white/60 text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed"
            >
              Nosso trabalho é estruturado para minimizar riscos e maximizar seu retorno, garantindo que cada passo seja dado com segurança e inteligência.
            </motion.p>
        </div>
      </section>

      {/* Main How it Works Component */}
      <HowItWorks />

      {/* Detailed Steps */}
      <section className="py-32 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6 text-center mb-24">
          <h2 className="text-fluid-h2 font-display mb-6">Detalhamento das <span className="text-brand-gold italic">Etapas Cruciais</span></h2>
          <div className="w-24 h-px bg-brand-gold/30 mx-auto" />
        </div>
        
        <div className="max-w-5xl mx-auto space-y-12 px-6">
          {detailedSteps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-card border border-brand-white/5 p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-brand-white/5 font-display text-8xl pointer-events-none">{idx + 1}</div>
              <span className="text-brand-gold font-display text-xl mb-4 block">{step.stage}</span>
              <h3 className="text-3xl font-display mb-8 tracking-wide text-brand-white uppercase">{step.title}</h3>
              <p className="text-brand-white/60 font-light mb-10 leading-relaxed max-w-3xl">
                {step.desc}
              </p>
              <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-brand-white/5">
                {step.details.map((detail, dIdx) => (
                  <div key={dIdx}>
                    <h4 className="text-brand-gold text-xs uppercase tracking-widest mb-3 font-semibold">{detail.label}</h4>
                    <p className="text-brand-white/50 text-[11px] leading-relaxed font-light">{detail.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-brand-black border-t border-brand-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-brand-gold uppercase tracking-[0.2em] text-[10px] mb-4 block">Pós-Arrematação</span>
            <h2 className="text-fluid-h2 font-display mb-6">Maximizando Seu <span className="italic text-brand-gold">Investimento</span></h2>
            <p className="text-brand-white/60 font-light max-w-2xl mx-auto mt-6">Continue ao nosso lado após a conquista do imóvel para extrair o máximo valor do seu patrimônio.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-12 border border-brand-white/5 bg-brand-surface hover:border-brand-gold/30 transition-all duration-500 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-brand-gold/5 flex items-center justify-center mb-8 border border-brand-gold/10 mx-auto">
                  <service.icon className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-2xl font-display text-brand-white mb-6 uppercase tracking-wide">{service.title}</h3>
                <p className="text-brand-white/50 font-light text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
