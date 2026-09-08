import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/portfolioData';

export const FAQSection: React.FC = () => {
  // In reference screenshot, the first item is open by default
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" aria-label="Frequently Asked Questions" className="mb-8">
      <div className="bg-white rounded-3xl p-7 sm:p-10 md:p-12 border border-neutral-200/80 shadow-xs">
        {/* Header */}
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
            Frequently Asked Questions
          </h3>
          <p className="text-xs sm:text-sm text-neutral-500 font-normal mt-1">
            Everything you need to know before we work together.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="border border-neutral-200/70 rounded-2xl bg-[#fafafa] overflow-hidden transition-colors hover:border-neutral-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-neutral-900 text-xs sm:text-sm transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-neutral-500"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-4 sm:px-5 pb-5 pt-0 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal border-t border-neutral-200/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
