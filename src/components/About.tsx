import React from 'react';
import { ChevronRight } from 'lucide-react';

export const About = () => {
    return (
        <section id="sobre" className="py-24 bg-white text-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-display mb-6 md:mb-8">Conheça nosso escritório</h2>
                <div className="w-16 md:w-20 h-1 bg-brand-gold mb-6 md:mb-10" />
                <p className="text-base md:text-lg text-gray-800 mb-4 md:mb-6 font-light leading-relaxed">
                  Há operações que exigem precisão, visão e coragem medida. No universo dos investimentos imobiliários e dos leilões, o sucesso não nasce do acaso. Ele é construído com método, inteligência jurídica e experiência real no campo.
                </p>
                <p className="text-base md:text-lg text-gray-800 mb-8 md:mb-10 font-light leading-relaxed">
                  O escritório TJ INVEST surgiu com um propósito claro: transformar operações imobiliárias complexas em investimentos seguros, rentáveis e juridicamente blindados.
                </p>
                <a 
                  href="#contato"
                  className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm font-bold tracking-[0.2em] uppercase hover:bg-brand-gold hover:text-black transition-all w-full md:w-auto"
                >
                  Conhecer <ChevronRight size={14} md:size={16} />
                </a>
              </div>
                    <div className="relative">
                <div className="aspect-[4/3] bg-gray-100 shadow-sm overflow-hidden">
                    <img 
                        src="/mapa_brasil_pin_1776959798921.png" 
                        alt="Mapa de localização" 
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                    />
                </div>
              </div>
            </div>
          </div>
        </section>
      );
};
