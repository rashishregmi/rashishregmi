import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" aria-label="Client Testimonials" className="mb-8">
      <div className="bg-white rounded-3xl p-7 sm:p-10 md:p-12 border border-neutral-200/80 shadow-xs">
        {/* Header */}
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
            What Clients Are Saying
          </h3>
          <p className="text-xs sm:text-sm text-neutral-500 font-normal mt-1">
            Insights from clients who trusted me to bring their ideas to life through design.
          </p>
        </div>

        {/* 2x2 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="p-6 rounded-2xl bg-white border border-neutral-200/70 hover:border-neutral-300 transition-all flex flex-col justify-between"
            >
              {/* Client Info Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-neutral-200/80"
                    loading="lazy"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-semibold text-neutral-900 tracking-tight">
                        {item.name}
                      </h4>
                      {/* Verified Badge */}
                      <svg
                        className="w-3.5 h-3.5 text-sky-500 fill-current"
                        viewBox="0 0 24 24"
                        aria-label="Verified Client"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </div>
                    <p className="text-xs text-neutral-400 font-normal">
                      {item.handle}
                    </p>
                  </div>
                </div>

                {/* X / Twitter icon */}
                <div className="text-neutral-300">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                "{item.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
