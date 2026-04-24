import React from 'react';
import { Hero } from '../components/Hero';
import { Testimonials } from '../components/Testimonials';
import { FAQSection } from '../components/FAQSection';
import { FinalCTA } from '../components/FinalCTA';
import { HowItWorks } from '../components/HowItWorks';
import { About } from '../components/About';
import { Specialization } from '../components/Specialization';
import { OtherServices } from '../components/OtherServices';
import { Contact } from '../components/Contact';

export const HomePage = () => (
  <main>
    <Hero />
    <About />
    <HowItWorks />
    <Specialization />
    <OtherServices />
    <FAQSection />
    <Testimonials />
    <FinalCTA />
    <Contact />
  </main>
);
