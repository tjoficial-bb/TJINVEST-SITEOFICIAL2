import React from 'react';
import { motion } from 'motion/react';
import { About } from '../components/About';
import { Award, ShieldCheck, Target, Users, Zap, Search, FileCheck, Landmark } from 'lucide-react';

export const AboutPage = () => {
  const differentials = [
    { icon: Award, title: "Expertise Comprovada", desc: "Anos de experiência no mercado de leilões de imóveis, garantindo conhecimento técnico e estratégico." },
    { icon: ShieldCheck, title: "Segurança Jurídica", desc: "Análise rigorosa de editais e processos para blindar seu investimento contra riscos judiciais." },
    { icon: Search, title: "Oportunidades em Todo o Brasil", desc: "Acesso a um vasto portfólio de imóveis em todo o território nacional, filtrados por nossa equipe." },
    { icon: Target, title: "Foco no Seu Objetivo", desc: "Seja para moradia própria ou investimento, personalizamos nossa assessoria para seus planos." },
    { icon: Users, title: "Grupo Exclusivo WhatsApp", desc: "Comunicação direta e oportunidades filtradas enviadas em tempo real para nossos clientes." },
    { icon: Zap, title: "Processo Completo", desc: "Cuidamos de tudo, desde a busca da oportunidade até a entrega das chaves e pós-arrematação." },
  ];

  const pillars = [
    { title: "Análise Mercadológica", desc: "Avaliamos o valor real de mercado do imóvel e o potencial de desconto em relação ao preço de leilão, garantindo um bom negócio." },
    { title: "Análise Documental e Jurídica", desc: "Verificamos minuciosamente o edital, processos, débitos de IPTU e condomínio, penhoras e quaisquer riscos." },
    { title: "Análise Financeira", desc: "Elaboramos uma planilha de custos completa (ITBI, registro, honorários, desocupação) para clareza sobre o lucro líquido." },
  ];

  return (
    <main className="bg-brand-black text-brand-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-black/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
            className="w-full h-full object-cover grayscale opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-gold uppercase tracking-[0.4em] text-[10px] mb-6 block font-medium"
          >
            Nossa História e Missão
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-fluid-h1 font-display mb-10 leading-[1.1]"
          >
            Transforme Oportunidades em <br/>
            <span className="text-brand-gold italic">Conquistas com a TJ Invest</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-white/70 text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed"
          >
            Bem-vindo à TJ Invest, sua parceira especializada em arrematação e investimento em imóveis de leilão. Com um time experiente e metodologia comprovada, descomplicamos o que parece complexo em uma jornada clara, transparente e lucrativa.
          </motion.p>
        </div>
      </section>

      {/* Main About Component Content */}
      <About />

      {/* Pillars of Success */}
      <section className="py-32 bg-brand-surface relative overflow-hidden">
        <div className="bg-texture absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <span className="text-brand-gold uppercase tracking-[0.2em] text-[10px] mb-4 block">Nossa Metodologia</span>
            <h2 className="text-fluid-h2 font-display mb-6">Os Três Pilares da <span className="italic text-brand-gold">Nossa Análise</span></h2>
            <div className="w-24 h-px bg-brand-gold/30 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-12 bg-brand-card border border-brand-white/5 hover:border-brand-gold/30 transition-all duration-500"
              >
                <div className="text-brand-gold font-display text-4xl mb-8">0{idx + 1}</div>
                <h3 className="text-2xl font-display text-brand-white mb-6 uppercase tracking-wide">{pillar.title}</h3>
                <p className="text-brand-white/60 font-light leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Grid */}
      <section className="py-32 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24">
            <span className="text-brand-gold uppercase tracking-[0.2em] text-[10px] mb-4 block">Diferenciais</span>
            <h2 className="text-fluid-h2 font-display mb-6">Por que escolher a <br/><span className="italic text-brand-gold text-fluid-h1">TJ Invest?</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-10 border border-brand-white/5 bg-brand-surface group hover:bg-brand-card transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-full bg-brand-gold/5 flex items-center justify-center mb-8 border border-brand-gold/10 group-hover:bg-brand-gold/10 transition-colors">
                  <item.icon className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-xl font-display tracking-widest text-brand-white mb-4 uppercase">{item.title}</h3>
                <p className="text-brand-white/50 font-light leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
