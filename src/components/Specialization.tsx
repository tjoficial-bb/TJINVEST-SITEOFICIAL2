import React from 'react';
import { MessageCircle } from 'lucide-react';

export const Specialization = () => {
    return (
        <section id="servicos" className="py-24 bg-white text-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="order-1 lg:order-1">
                    <p className="text-brand-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-3 md:mb-4">Serviços Especializados</p>
                    <h2 className="text-3xl md:text-5xl font-display mb-6 md:mb-8">Segurança Jurídica em Leilões de Imóveis</h2>
                    <p className="text-base md:text-lg text-gray-800 mb-4 md:mb-6 font-normal leading-relaxed">
                      Participar de um leilão pode ser uma excelente oportunidade de investimento, mas envolve riscos que muitos desconhecem.
                    </p>
                    <p className="text-base md:text-lg text-gray-800 mb-6 md:mb-8 font-normal leading-relaxed">
                      Oferecemos orientação completa: desde a análise prévia do imóvel ou bem, passando pela avaliação jurídica de possíveis riscos, até a efetiva posse do bem.
                    </p>
                    <a 
                      href="https://wa.me/553173590970"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 md:gap-3 bg-brand-gold text-black px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all w-full md:w-auto justify-center"
                    >
                      <MessageCircle size={16} md:size={18} /> Quero investir com segurança
                    </a>
                </div>
                <div className="order-2 lg:order-2">
                    <div className="aspect-[4/3] bg-gray-100 overflow-hidden shadow-sm">
                        <img 
                            src="/assinatura.png"
                            alt="Profissional assinando contrato" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                </div>
            </div>
          </div>
        </section>
      );
};
