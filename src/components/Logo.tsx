import React from 'react';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-2">
        <span className="text-2xl font-display font-bold tracking-tighter">
          TJ <span className="text-brand-gold">INVEST</span>
        </span>
      </div>
    </div>
  );
};
