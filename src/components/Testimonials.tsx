import React from 'react';
import { motion } from 'motion/react';

export const Testimonials = () => {
    const testimonials = [
        { 
          name: "Ricardo S.", 
          location: "São Paulo - SP",
          text: "Excelente assessoria! Me acompanharam em todas as etapas e o imóvel foi entregue sem nenhuma dor de cabeça.", 
          img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop"
        },
        { 
          name: "Juliana M.", 
          location: "Curitiba - PR",
          text: "Profissionais extremamente competentes e transparentes. Recomendo para quem quer investir com segurança.", 
          img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
        },
        { 
          name: "Fernando T.", 
          location: "Belo Horizonte - MG",
          text: "Consegui arrematar meu primeiro imóvel com a TJ Invest. Todo o processo foi muito tranquilo.", 
          img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop"
        }
    ];
    return (
        <section id="depoimentos" className="py-24 md:py-32 bg-brand-black">
            <div className="max-w-7xl mx-auto px-6">
                <span className="text-brand-gold uppercase tracking-[0.2em] text-[10px] mb-6 block text-center font-medium">Depoimentos</span>
                <h2 className="text-[32px] md:text-fluid-h2 font-display mb-16 md:mb-24 text-center text-brand-white leading-tight">
                  Quem investe com <span className="text-brand-gold italic">segurança, recomenda.</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-brand-surface p-8 md:p-10 border border-brand-white/10 relative group hover:border-brand-gold/30 transition-all duration-500">
                            <div className="flex justify-between items-start mb-6 md:mb-8">
                              <div className="flex gap-1">
                                  {[...Array(5)].map((_, star) => (
                                    <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="#C5A059" stroke="#C5A059" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                  ))}
                              </div>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12.48 10.92v3.28h4.74c-.2 1.06-1.2 3.12-4.74 3.12-3.07 0-5.57-2.54-5.57-5.68s2.5-5.68 5.57-5.68c1.75 0 2.92.74 3.59 1.39l2.59-2.5c-1.66-1.55-3.82-2.49-6.18-2.49-5.14 0-9.3 4.16-9.3 9.3s4.16 9.3 9.3 9.3c5.36 0 8.93-3.77 8.93-9.09 0-.61-.07-1.08-.14-1.54H12.48z" fill="#4285F4"/></svg>
                            </div>
                            
                            <p className="text-brand-white/70 text-sm md:text-base font-light leading-relaxed mb-8 md:mb-10 min-h-[5rem] md:min-h-[6rem] italic">
                              "{t.text}"
                            </p>
                            
                            <div className="flex items-center gap-4 pt-6 md:pt-8 border-t border-brand-white/5">
                              <img 
                                src={t.img} 
                                alt={t.name} 
                                className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all object-cover" 
                                referrerPolicy="no-referrer"
                              />
                              <div>
                                <h4 className="text-brand-white font-medium text-sm tracking-wide">{t.name}</h4>
                                <p className="text-brand-white/40 text-[10px] uppercase tracking-widest mt-1">{t.location}</p>
                              </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-2 mt-12">
                  <div className="w-2 h-2 rounded-full bg-brand-gold/20" />
                  <div className="w-2 h-2 rounded-full bg-brand-gold" />
                  <div className="w-2 h-2 rounded-full bg-brand-gold/20" />
                </div>
            </div>
        </section>
    );
};
