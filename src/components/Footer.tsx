import React from 'react';
import { Logo } from './Logo';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="bg-[#050505] border-t border-brand-white/5 pt-32 pb-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
              <div className="col-span-1 border-r border-brand-white/5 pr-16 hidden lg:block">
                <Logo className="mb-12 block" />
                <p className="text-brand-white/40 text-[11px] font-medium leading-loose mb-10 tracking-wide uppercase">
                  Assessoria especializada em leilões de imóveis, com segurança jurídica em todas as etapas e foco em resultados reais.
                </p>
                <div className="flex gap-6 grayscale opacity-40 hover:opacity-100 transition-all">
                  <Instagram size={18} className="text-brand-white/80 hover:text-brand-gold cursor-pointer transition-colors" />
                  <Linkedin size={18} className="text-brand-white/80 hover:text-brand-gold cursor-pointer transition-colors" />
                  <Facebook size={18} className="text-brand-white/80 hover:text-brand-gold cursor-pointer transition-colors" />
                </div>
              </div>

              <div className="lg:hidden block">
                <Logo className="mb-8 block" />
              </div>
    
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-10 text-brand-white">Navegação</h4>
                <ul className="space-y-4 text-[11px] font-light tracking-wide">
                  <li><Link to="/" className="text-brand-white/50 hover:text-brand-gold transition-colors">Início</Link></li>
                  <li><Link to="/quem-somos" className="text-brand-white/50 hover:text-brand-gold transition-colors">Sobre</Link></li>
                  <li><Link to="/como-funciona" className="text-brand-white/50 hover:text-brand-gold transition-colors">Como funciona</Link></li>
                  <li><Link to="/especialidade" className="text-brand-white/50 hover:text-brand-gold transition-colors">Especialidade</Link></li>
                  <li><Link to="/#depoimentos" className="text-brand-white/50 hover:text-brand-gold transition-colors">Depoimentos</Link></li>
                  <li><Link to="/faq" className="text-brand-white/50 hover:text-brand-gold transition-colors">FAQ</Link></li>
                  <li><Link to="/contato" className="text-brand-white/50 hover:text-brand-gold transition-colors">Contato</Link></li>
                </ul>
              </div>
    
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-10 text-brand-white">Serviços</h4>
                <ul className="space-y-4 text-[11px] font-light tracking-wide">
                  <li className="text-brand-white/50 hover:text-brand-gold cursor-pointer transition-colors">Análise de editais</li>
                  <li className="text-brand-white/50 hover:text-brand-gold cursor-pointer transition-colors">Assessoria jurídica</li>
                  <li className="text-brand-white/50 hover:text-brand-gold cursor-pointer transition-colors">Arrematação</li>
                  <li className="text-brand-white/50 hover:text-brand-gold cursor-pointer transition-colors">Desocupação</li>
                  <li className="text-brand-white/50 hover:text-brand-gold cursor-pointer transition-colors">Acompanhamento completo</li>
                </ul>
              </div>
    
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-10 text-brand-white">Contato</h4>
                <ul className="space-y-6 text-[11px] font-light tracking-wide">
                  <li className="flex items-center gap-3 text-brand-white/50">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    (31) 7359-0970
                  </li>
                  <li className="flex items-center gap-3 text-brand-white/50">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    contato@tjinvest.com.br
                  </li>
                  <li className="flex items-start gap-3 text-brand-white/50 leading-relaxed">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Avenida do Contorno 6283 <br/>
                    Sala 1602, Savassi <br/>
                    Belo Horizonte/MG
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-brand-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
              <span className="text-[9px] text-brand-white/20 uppercase tracking-[0.3em] font-light">
                © 2024 TJ Invest. Todos os direitos reservados.
              </span>
              <div className="flex gap-8 text-[9px] text-brand-white/20 uppercase tracking-[0.3em] font-light">
                <a href="#" className="hover:text-brand-gold transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-brand-gold transition-colors">Termos de Uso</a>
              </div>
            </div>
          </div>
        </footer>
      );
};
