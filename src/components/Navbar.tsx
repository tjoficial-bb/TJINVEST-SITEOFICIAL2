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
    { name: 'HOME', href: '/' },
    { name: 'QUEM SOMOS', href: '/quem-somos' },
    { name: 'COMO FUNCIONA', href: '/como-funciona' },
    { name: 'CONTATO', href: '/contato' },
  ];

  const whatsappUrl = "https://wa.me/553173590970";
  
  const navbarBackground = isScrolled || !isHome ? 'bg-brand-black/95 backdrop-blur-lg py-3 border-b border-brand-white/5' : 'bg-transparent py-6';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${navbarBackground}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Logo className="h-10" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className="text-[10px] font-medium tracking-[0.2em] hover:text-brand-gold transition-colors duration-300 text-brand-white"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-brand-gold/30 px-6 py-2 text-[10px] font-semibold tracking-[0.2em] hover:bg-brand-gold hover:text-brand-black transition-all duration-500 text-brand-white"
          >
            INVESTIR
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

