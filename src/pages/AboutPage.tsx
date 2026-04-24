import React from 'react';
import { motion } from 'motion/react';
import { About } from '../components/About';
import { Award, ShieldCheck, Target, Users, Zap } from 'lucide-react';

export const AboutPage = () => {
  const differentials = [
    { icon: Award, title: "Expertise Comprovada", desc: "Anos de experiência no mercado de leilões de imóveis." },
    { icon: ShieldCheck, title: "Segurança Jurídica", desc: "Análise rigorosa para proteger seu investimento." },
    { icon: Zap, title: "Processo Completo", desc: "Do início ao fim, cuidamos de tudo para você." },
    { icon: Target, title: "Foco no Seu Objetivo", desc: "Seja moradia ou investimento, personalizamos nossa assessoria." },
    { icon: Users, title: "Grupo Exclusivo", desc: "Comunicação direta e oportunidades filtradas via WhatsApp." },
  ];

  return (
    <main className="pt-20 bg-black text-white">
      <div className="bg-gradient-to-b from-black to-gray-900 py-32 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display text-white mb-8"
        >
          Transformando Oportunidades em Conquistas
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Bem-vindo à TJ Invest, sua parceira especializada em arrematação e investimento em imóveis de leilão. Nosso objetivo é transformar processos complexos em jornadas claras, lucrativas e seguras.
        </motion.p>
      </div>

      <About />

      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-display text-center mb-20 text-black">Por que a TJ Invest?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {differentials.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 border border-gray-200 hover:border-brand-gold transition-all duration-300"
              >
                <item.icon className="w-12 h-12 text-brand-gold mb-6" />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
