import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { PRICING_PLANS } from '../data/portfolioData';

interface PricingSectionProps {
  onBookPlan?: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onBookPlan }) => {
  return (
    <section id="pricing" aria-label="Simple & Transparent Pricing" className="mb-8">
      <div className="bg-white rounded-3xl p-7 sm:p-10 md:p-12 border border-neutral-200/80 shadow-xs">
        {/* Header */}
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
            Simple & Transparent Pricing
          </h3>
          <p className="text-xs sm:text-sm text-neutral-500 font-normal mt-1">
            Clear pricing for startups, founders, and growing businesses.
          </p>
        </div>

        {/* 2 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRICING_PLANS.map((plan) => {
            const isDark = plan.isPopular;
            return (
              <motion.div
                key={plan.id}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                  isDark
                    ? 'bg-[#111315] text-white shadow-md'
                    : 'bg-white border border-neutral-200/80 text-neutral-900 shadow-2xs'
                }`}
              >
                <div>
                  {/* Title & Subtitle */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold tracking-tight">
                      {plan.name}
                    </h4>
                    <p className={`text-xs mt-1 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl sm:text-4xl font-bold tracking-tight">
                      {plan.price}
                    </span>
                    <span className={`text-xs font-normal ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {plan.period}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => onBookPlan?.(plan.name)}
                    className={`w-full py-3 px-5 rounded-full text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 active:scale-98 cursor-pointer mb-8 ${
                      isDark
                        ? 'bg-white text-neutral-950 hover:bg-neutral-100 shadow-2xs'
                        : 'bg-[#111315] text-white hover:bg-neutral-800 shadow-2xs'
                    }`}
                  >
                    {plan.buttonText}
                  </button>

                  {/* What's included */}
                  <div className="pt-2 border-t border-dashed border-neutral-200/20">
                    <p className={`text-xs font-medium mb-3.5 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      What's included:
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm">
                          <Check
                            className={`w-3.5 h-3.5 shrink-0 stroke-[2.5] ${
                              isDark ? 'text-white' : 'text-neutral-900'
                            }`}
                          />
                          <span className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
