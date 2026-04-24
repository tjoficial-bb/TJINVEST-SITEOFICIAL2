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
        <div key={index} className="border-b border-white/10">
          <button
            className="w-full flex justify-between items-center py-6 text-left font-semibold text-white/90 hover:text-brand-gold transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {item.question}
            <ChevronDown 
              className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
              size={20}
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
