import React from 'react';
import { Logo } from './Logo';
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="bg-[#050505] border-t border-brand-white/5 pt-12 pb-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="space-y-6">
                <Logo className="block" />
                <p className="text-brand-white/40 text-[10px] uppercase tracking-wide">
                  Assessoria especializada em leilões de imóveis.
                </p>
                <div className="flex gap-4">
                  <a href="https://instagram.com/tjinvestoficial" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} className="text-brand-gold cursor-pointer hover:scale-110 transition-transform" /></a>
                </div>
              </div>
    
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 text-brand-white">Navegação</h4>
                    <ul className="space-y-3 text-[11px] font-light tracking-wide">
                      <li><Link to="/" className="text-brand-white/50 hover:text-brand-gold transition-colors">Início</Link></li>
                      <li><Link to="/quem-somos" className="text-brand-white/50 hover:text-brand-gold transition-colors">Sobre</Link></li>
                      <li><Link to="/contato" className="text-brand-white/50 hover:text-brand-gold transition-colors">Contato</Link></li>
                    </ul>
                  </div>
    
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 text-brand-white">Serviços</h4>
                    <ul className="space-y-3 text-[11px] font-light tracking-wide">
                      <li className="text-brand-white/50">Análise de editais</li>
                      <li className="text-brand-white/50">Assessoria jurídica</li>
                      <li className="text-brand-white/50">Arrematação & Desocupação</li>
                    </ul>
                  </div>
                </div>
    
                <div>
                  <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 text-brand-white">Contato</h4>
                  <ul className="space-y-3 text-[11px] font-light tracking-wide">
                    <a href="tel:+553173590970" className="flex items-center gap-2 text-brand-white/50 hover:text-brand-gold transition-colors">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      (31) 7359-0970
                    </a>
                    <a href="mailto:contato@tjinvest.com.br" className="flex items-center gap-2 text-brand-white/50 hover:text-brand-gold transition-colors">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                      contato@tjinvest.com.br
                    </a>
                    <li className="flex items-start gap-2 text-brand-white/50 text-[10px] leading-tight">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      Av. do Contorno, 6283 - Sala 1602<br/>Savassi, BH/MG
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="border-t border-brand-white/5 pt-8 text-center text-[9px] text-brand-white/20 uppercase tracking-[0.2em] font-light">
              © 2024 TJ Invest. Todos os direitos reservados.
            </div>
          </div>
        </footer>
      );
};
