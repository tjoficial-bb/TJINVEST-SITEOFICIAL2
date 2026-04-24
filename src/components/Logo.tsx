import React from 'react';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex flex-col">
        <span className="text-2xl md:text-3xl font-display font-light tracking-widest text-brand-white leading-none">
          TJ <span className="text-brand-gold font-normal">INVEST</span>
        </span>
        <span className="text-[7px] tracking-[0.2em] md:tracking-[0.4em] uppercase font-medium text-brand-gold mt-1 leading-none border-t border-brand-white/10 pt-1">
          Assessoria especializada em leilões de imóveis
        </span>
      </div>
    </div>
  );
};
