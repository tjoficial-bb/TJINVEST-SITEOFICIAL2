import React from 'react';
import { motion } from 'motion/react';

export const Testimonials = () => {
    const testimonials = [
        { name: "Murillo A. Borges", text: "A assessoria da TJ Invest foi fundamental para arrematar meu primeiro imóvel com segurança." },
        { name: "Mônica Scarazzati", text: "Excelente trabalho! Equipe muito atenciosa e detalhista." },
        { name: "Thiago S. Moreira", text: "Tive uma ótima experiência, profissionalismo em todas as etapas." },
        { name: "Carlos Eduardo", text: "Segurança total em leilões, recomendo fortemente." },
        { name: "Ana Paula", text: "O processo todo foi muito transparente e eficiente." },
        { name: "Roberto Lima", text: "Consegui um ótimo preço abaixo do mercado, valeu a pena." },
        { name: "Fernanda Dias", text: "A gestão de desocupação foi rápida e tranquila." },
        { name: "Ricardo Souza", text: "Estou muito satisfeito com o retorno do meu investimento." },
        { name: "Beatriz Oliveira", text: "Excelente suporte pós-arrematação na reforma." },
        { name: "Gustavo Santos", text: "Parceria de confiança, com certeza farei novos negócios." }
    ];
    return (
        <section className="py-24 md:py-32 bg-[#050505]">
            <div className="max-w-6xl mx-auto px-6 overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-display mb-20 text-center text-white">O que dizem sobre nós</h2>
                <motion.div 
                    className="flex gap-8"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                >
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div key={i} className="bg-white/5 p-8 min-w-[320px] max-w-[320px] border border-white/10 flex flex-col items-center">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, star) => <span key={star} className="text-[#FFB900] text-xl">★</span>)}
                            </div>
                            <p className="italic text-white/80 text-center text-sm flex-grow">"{t.text}"</p>
                            <p className="mt-6 text-white font-bold text-sm">{t.name}</p>
                            <p className="text-white/40 text-xs mt-1">Google Local Guide</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
