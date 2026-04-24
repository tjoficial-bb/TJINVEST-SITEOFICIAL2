import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { SpecialtiesPage } from './pages/SpecialtiesPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <Router>
      <div className="bg-brand-black text-brand-white selection:bg-brand-gold selection:text-brand-black min-h-screen">
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quem-somos" element={<AboutPage />} />
            <Route path="/como-funciona" element={<HowItWorksPage />} />
            <Route path="/especialidade" element={<SpecialtiesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <a 
          href="https://wa.me/553173590970"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
        >
          <MessageCircle size={32} />
        </a>
      </div>
    </Router>
  );
}
