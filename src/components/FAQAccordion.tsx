import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border-b border-brand-white/10 last:border-b-0">
          <button
            className="w-full flex justify-between items-center py-8 text-left font-normal text-brand-white/90 hover:text-brand-gold transition-colors group"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="text-base tracking-wide">{item.question}</span>
            <ChevronDown 
              className={`transition-transform duration-500 text-brand-gold/50 group-hover:text-brand-gold ${openIndex === index ? 'rotate-180' : ''}`} 
              size={18}
            />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <p className="pb-6 text-white/60 text-sm leading-relaxed">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
