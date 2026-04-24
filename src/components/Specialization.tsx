import React from 'react';
import { MessageCircle } from 'lucide-react';
import assinatura from '../assets/images/assinatura.png';

export const Specialization = () => {
    return (
        <section id="servicos" className="py-32 bg-brand-black text-brand-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left Card */}
                <div className="p-12 bg-brand-surface border border-brand-white/10 relative overflow-hidden group">
                    <div className="relative z-10">
                        <span className="text-brand-gold uppercase tracking-[0.2em] text-[10px] mb-6 block font-medium">Segurança Jurídica</span>
                        <h2 className="text-fluid-h3 font-display mb-8 leading-tight">
                          Imóveis de leilão podem ter riscos. <br/>
                          <span className="text-brand-gold italic">Nós eliminamos todos eles.</span>
                        </h2>
                        <p className="text-brand-white/60 mb-8 font-light leading-relaxed max-w-md">
                          Riscos como dívidas, ocupações, pendências judiciais e vícios ocultos podem transformar um bom negócio em um grande problema.
                        </p>
                        <p className="text-brand-white/60 mb-12 font-light leading-relaxed max-w-md">
                          Nossa assessoria jurídica especializada atua para blindar seu investimento e garantir tranquilidade do início ao fim.
                        </p>
                        <a 
                          href="https://wa.me/553173590970"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-[#C29B61]/20 border border-[#C29B61]/30 text-[#C29B61] px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#C29B61] hover:text-brand-black transition-all duration-500"
                        >
                          Saiba como garantimos sua segurança
                        </a>
                    </div>
                </div>

                {/* Right Card */}
                <div className="p-12 bg-brand-surface border border-brand-white/10 relative overflow-hidden group">
                    <div className="relative z-10">
                        <span className="text-brand-gold uppercase tracking-[0.2em] text-[10px] mb-6 block font-medium">Nossa Especialidade</span>
                        <h2 className="text-fluid-h3 font-display mb-8 leading-tight">
                          Especialistas em <br/>
                          <span className="text-brand-white italic">leilões de imóveis.</span>
                        </h2>
                        <p className="text-brand-white/60 mb-12 font-light leading-relaxed max-w-md">
                          Não atuamos com compra e venda tradicional. Nosso foco é 100% em leilões, o que nos torna referência em identificar oportunidades reais e entregar resultados consistentes.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-brand-white/5">
                          <div className="flex items-center gap-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            <div className="flex flex-col">
                              <span className="text-brand-white font-semibold text-sm">+10 anos</span>
                              <span className="text-[10px] uppercase tracking-widest text-brand-white/40">de experiência</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            <div className="flex flex-col">
                              <span className="text-brand-white font-semibold text-sm">Atuação</span>
                              <span className="text-[10px] uppercase tracking-widest text-brand-white/40">em todo Brasil</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 sm:col-span-2">
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                             <div className="flex flex-col">
                              <span className="text-brand-white font-semibold text-sm">+500 imóveis</span>
                              <span className="text-[10px] uppercase tracking-widest text-brand-white/40">arrematados</span>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
      );
};
