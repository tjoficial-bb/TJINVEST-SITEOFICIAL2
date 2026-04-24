import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ContactPage } from './pages/ContactPage';
import { MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <Router>
      <div className="bg-black text-white selection:bg-brand-gold selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quem-somos" element={<AboutPage />} />
          <Route path="/como-funciona" element={<HowItWorksPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
        <Footer />
        <a 
          href="https://wa.me/553173590970"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <MessageCircle size={32} />
        </a>
      </div>
    </Router>
  );
}
