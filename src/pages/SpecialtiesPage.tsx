import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Landmark, Gavel, FileText, Search, Scale } from 'lucide-react';

export const SpecialtiesPage = () => {
  const specialties = [
    {
      icon: Scale,
      title: "Leilões Judiciais",
      desc: "Supervisionados pelo Poder Judiciário para quitação de dívidas. Oferecemos segurança absoluta na análise de editais do CPC.",
      features: ["Decisão Judicial", "Chancelado pelo Juiz", "Sub-rogação de dívidas"]
    },
    {
      icon: Landmark,
      title: "Leilões Extrajudiciais",
      desc: "Promovidos por instituições financeiras com base na Lei de Alienação Fiduciária. Agilidade e preços altamente competitivos.",
      features: ["Lei 9.514/97", "Maior agilidade", "Possibilidade de financiamento"]
    },
    {
      icon: Search,
      title: "Análise Mercadológica",
      desc: "Identificação do real potencial de lucro e avaliação precisa do valor de mercado para garantir a melhor arrematação.",
      features: ["Avaliação de valor real", "Margem de segurança", "Foco em rentabilidade"]
    }
  ];

  const services = [
    { title: "Análise de Riscos", desc: "Varredura completa de processos e editais para eliminar qualquer surpresa jurídica." },
    { title: "Gestão de Desocupação", desc: "Acompanhamento profissional para posse do imóvel em tempo recorde." },
    { title: "Planilha de Custos", desc: "Transparência total sobre impostos, taxas e reformas necessárias." },
    { title: "Regularização de Escritura", desc: "Cuidamos de toda a burocracia documental pós-arrematação." }
  ];

  return (
    <div className="bg-brand-black min-h-screen">
      {/* Hero */}
      <section className="py-32 bg-texture border-b border-brand-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-brand-gold uppercase tracking-[0.4em] text-[10px] mb-6 block font-medium"
          >
            Nossa Especialidade
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-fluid-h1 font-display mb-10"
          >
            Especialistas em <br/>
            <span className="text-brand-gold italic">Leilões de Imóveis</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-white/60 text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed"
          >
            Não atuamos com compra e venda tradicional. Nosso foco é 100% em leilões, transformando complexidade em oportunidades seguras e rentáveis.
          </motion.p>
        </div>
      </section>

      {/* Grid Specialties */}
      <section className="py-32 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {specialties.map((spec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-brand-surface p-12 border border-brand-white/5 hover:border-brand-gold/30 transition-all duration-500 flex flex-col"
              >
                <div className="w-16 h-16 rounded-full bg-brand-gold/5 flex items-center justify-center mb-10 border border-brand-gold/10">
                  <spec.icon className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-3xl font-display text-brand-white mb-6 uppercase tracking-wider">{spec.title}</h3>
                <p className="text-brand-white/50 font-light mb-10 leading-relaxed text-sm flex-grow">
                  {spec.desc}
                </p>
                <ul className="space-y-3 pt-8 border-t border-brand-white/5">
                  {spec.features.map((f, i) => (
                    <li key={i} className="text-[10px] uppercase tracking-widest text-brand-gold/60 flex items-center gap-3">
                      <div className="w-1 h-1 bg-brand-gold rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Stats/Features */}
      <section className="py-32 bg-brand-surface border-y border-brand-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h4 className="text-brand-white font-display text-2xl mb-4 tracking-wide uppercase">{service.title}</h4>
                <p className="text-brand-white/40 font-light text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-brand-black text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-fluid-h2 font-display mb-10">Invista com quem <span className="italic text-brand-gold">domina o mercado</span></h2>
          <a 
            href="https://wa.me/553173590970"
            target="_blank"
            rel="noopener noreferrer"
             className="bg-brand-gold text-brand-black px-12 py-5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-brand-white transition-all duration-300"
          >
            Agendar Consulta Gratuita
          </a>
        </div>
      </section>
    </div>
  );
};
