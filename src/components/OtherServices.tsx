import React from 'react';

export const OtherServices = () => {
    const services = [
        { title: "Assessoria Jurídica em Leilões de Imóveis" }
    ];
    return (
        <section className="py-16 md:py-24 bg-white text-black">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-display mb-12 md:mb-16 text-center">Nossa Especialidade</h2>
            <div className="flex justify-center">
              {services.map((service, index) => (
                <div key={index} className="p-8 md:p-12 border border-black hover:border-brand-gold transition-colors text-center w-full md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-display text-black mb-4">{service.title}</h3>
                  <p className="text-gray-700">Foco total em segurança e rentabilidade em leilões.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
};
