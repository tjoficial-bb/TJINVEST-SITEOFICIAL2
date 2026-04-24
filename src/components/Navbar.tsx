import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/quem-somos' },
    { name: 'Como funciona', href: '/como-funciona' },
    { name: 'Especialidade', href: '/especialidade' },
    { name: 'Depoimentos', href: '/#depoimentos' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contato', href: '/contato' },
  ];

  const whatsappUrl = "https://wa.me/553173590970";
  
  const navbarBackground = isScrolled || !isHome ? 'bg-brand-black/95 backdrop-blur-lg py-4 border-b border-brand-white/5' : 'bg-transparent py-8';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${navbarBackground}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="h-10" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className="text-[11px] font-normal tracking-[0.05em] hover:text-brand-gold transition-colors duration-300 text-brand-white/90 uppercase"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C29B61] px-6 py-3 text-[10px] font-semibold tracking-[0.1em] uppercase hover:bg-white hover:text-black transition-all duration-500 text-brand-black flex items-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Falar com especialista
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-brand-surface border-b border-brand-white/5 p-8 flex flex-col gap-6 md:hidden text-brand-white"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className="text-xs font-medium tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-brand-gold px-6 py-3 text-xs font-bold tracking-widest w-full text-center text-brand-gold"
            >
              INVESTIR AGORA
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

