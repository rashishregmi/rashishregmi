import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" aria-label="Services I Provide" className="mb-8">
      <div className="bg-white rounded-3xl p-7 sm:p-10 md:p-12 border border-neutral-200/80 shadow-xs">
        {/* Header */}
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
            Services I Provide
          </h3>
          <p className="text-xs sm:text-sm text-neutral-500 font-normal mt-1">
            Helping businesses build intuitive products that drive growth.
          </p>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              onClick={() => onSelectService?.(service.title)}
              className="group p-6 sm:p-8 rounded-2xl bg-[#fafafa] border border-neutral-200/60 hover:border-neutral-300 hover:bg-white transition-all duration-200 flex flex-col justify-between min-h-[190px] cursor-pointer"
            >
              {/* Service Number */}
              <div className="text-2xl sm:text-3xl font-normal text-neutral-300 group-hover:text-neutral-400 font-mono tracking-tighter mb-6 transition-colors">
                {service.number}
              </div>

              {/* Service Content */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-neutral-900 group-hover:text-black leading-snug tracking-tight mb-2 transition-colors">
                  {service.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-500 font-normal">
                  {service.categories}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
