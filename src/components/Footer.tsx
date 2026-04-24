import React from 'react';
import { Logo } from './Logo';
import { MapPin, Clock, MessageCircle, Instagram, Linkedin, Facebook } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-white/80">
              <div className="col-span-1">
                <Logo className="h-16 mb-8 block" />
                <p className="text-white/40 text-sm font-light leading-relaxed mb-8">
                  A TJ INVEST é referência em gestão de investimentos e negócios estratégicos, oferecendo soluções personalizadas para clientes de alta performance.
                </p>
                <div className="flex gap-6">
                  <Instagram size={18} className="text-white/40 hover:text-brand-gold cursor-pointer transition-colors" />
                  <Linkedin size={18} className="text-white/40 hover:text-brand-gold cursor-pointer transition-colors" />
                  <Facebook size={18} className="text-white/40 hover:text-brand-gold cursor-pointer transition-colors" />
                </div>
              </div>
    
              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase mb-8 text-white">Navegação</h4>
                <ul className="space-y-4 text-sm font-light">
                  <li className="hover:text-brand-gold cursor-pointer transition-colors">Home</li>
                  <li className="hover:text-brand-gold cursor-pointer transition-colors">Quem Somos</li>
                  <li className="hover:text-brand-gold cursor-pointer transition-colors">Assessoria para Leilões</li>
                </ul>
              </div>
    
              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase mb-8 text-white">Serviços</h4>
                <ul className="space-y-4 text-sm font-light">
                  <li className="hover:text-brand-gold cursor-pointer transition-colors">Assessoria Jurídica</li>
                  <li className="hover:text-brand-gold cursor-pointer transition-colors">Análise de Riscos</li>
                  <li className="hover:text-brand-gold cursor-pointer transition-colors">Ações Possessórias</li>
                </ul>
              </div>
    
              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase mb-8 text-white">Contato</h4>
                <ul className="space-y-4 text-sm font-light">
                  <li className="flex items-start">
                      <MapPin size={16} className="mr-2 text-brand-gold shrink-0 mt-1"/> 
                      <span>Av. do Contorno, 6283, Sl 1602<br/>São Pedro, Belo Horizonte - MG</span>
                  </li>
                  <li><Clock size={16} className="inline mr-2 text-brand-gold"/> Seg-Sex 8h às 18h</li>
                  <li>
                    <a href="tel:+553173590970" className="hover:text-brand-gold transition-colors flex items-center">
                        <MessageCircle size={16} className="inline mr-2 text-brand-gold"/> (31) 7359-0970
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/5 pt-10 text-center text-[10px] text-white/30 uppercase tracking-widest">
                © 2024 TJ INVEST. Todos os direitos reservados.
            </div>
          </div>
        </footer>
      );
};
