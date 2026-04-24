import React from 'react';
import { motion } from 'motion/react';
import { HowItWorks } from '../components/HowItWorks';
import { FileText, Gavel, Key, Home, BarChart3, Briefcase, Plane } from 'lucide-react';

export const HowItWorksPage = () => {
  const processDetails = [
    { icon: FileText, title: "1. Captação e Análise", desc: "Busca ativa em 3 plataformas. Análises: Mercadológica, Documental/Jurídica e Financeira (planilha de custos detalhada)." },
    { icon: Gavel, title: "2. Arrematação e Transferência", desc: "Condução estratégica no leilão. Após arrematar, cuidamos de toda burocracia, ITBI, registro de escritura e regularização." },
    { icon: Key, title: "3. Gestão de Desocupação", desc: "Nossa prioridade é a via extrajudicial. Em 90% dos casos, resolvemos em 15 a 30 dias." },
    { icon: Home, title: "4. Gestão de Reforma", desc: "Coordenação remota com equipes terceirizadas validadas. Inclui orçamento detalhado e diligência externa." },
  ];

  const posArrematacao = [
    { icon: BarChart3, title: "Gestão de Venda", desc: "Precificação estratégica ao suporte na comercialização." },
    { icon: Briefcase, title: "Gestão de Locação", desc: "Suporte na locação tradicional (seleção de inquilinos, contratos)." },
    { icon: Plane, title: "Gestão via Airbnb", desc: "Orientação para rentabilidade por temporada." },
  ];

  return (
    <main className="pt-20 bg-white text-black">
      <div className="bg-black py-32 text-center px-6 text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display mb-8"
        >
          Como Funciona Nossa Assessoria
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Estruturamos nossa gestão em etapas fundamentais para garantir segurança desde a identificação da oportunidade até a entrega final.
        </motion.p>
      </div>

      <HowItWorks />

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-display text-center mb-20 text-black">Detalhamento das Etapas</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {processDetails.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 border border-gray-200"
              >
                <step.icon className="w-12 h-12 text-brand-gold mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-black">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed font-normal">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-display text-center mb-20 text-white">Serviços Pós-Arrematação</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {posArrematacao.map((service, index) => (
              <div key={index} className="bg-white/5 p-10 border border-white/10 text-center">
                <service.icon className="w-12 h-12 text-brand-gold mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/70">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
