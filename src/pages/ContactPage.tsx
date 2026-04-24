import React from 'react';
import { motion } from 'motion/react';
import { Contact } from '../components/Contact';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactPage = () => {
  const contactInfo = [
    { icon: Phone, title: "Telefone / WhatsApp", detail: "(31) 7359-0970", sub: "Atendimento imediato" },
    { icon: Mail, title: "E-mail", detail: "contato@tjinvest.com.br", sub: "Resposta em até 24h" },
    { icon: MapPin, title: "Localização", detail: "Atendimento em todo o Brasil", sub: "Assessoria 100% digital" },
    { icon: Clock, title: "Horário", detail: "Seg à Sex, 08h às 18h", sub: "Sábados sob agendamento" },
  ];

  return (
    <main className="bg-brand-black min-h-screen">
      {/* Hero */}
      <section className="py-32 bg-texture border-b border-brand-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-brand-gold uppercase tracking-[0.4em] text-[10px] mb-6 block font-medium"
          >
            Contato
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-fluid-h1 font-display mb-10"
          >
            Fale com um <br/>
            <span className="text-brand-gold italic">Especialista</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-white/60 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            Estamos prontos para analisar sua próxima oportunidade de investimento. Entre em contato pelos canais oficiais ou envie uma mensagem.
          </motion.p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {contactInfo.map((info, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-brand-surface border border-brand-white/5 text-center group hover:border-brand-gold/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-brand-gold/5 flex items-center justify-center mb-6 mx-auto border border-brand-gold/10 group-hover:bg-brand-gold/10 transition-colors">
                  <info.icon size={20} className="text-brand-gold" />
                </div>
                <h3 className="text-brand-white/40 uppercase tracking-[0.2em] text-[10px] font-bold mb-4">{info.title}</h3>
                <p className="text-brand-white text-lg font-display mb-1 tracking-wide">{info.detail}</p>
                <p className="text-brand-white/20 text-[10px] uppercase font-light tracking-widest">{info.sub}</p>
              </motion.div>
            ))}
          </div>

          <Contact />
        </div>
      </section>
    </main>
  );
};
