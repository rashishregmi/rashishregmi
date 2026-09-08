import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, TRUSTED_BRANDS } from '../data/portfolioData';

interface HeroProps {
  onBookCall?: () => void;
  onViewProjects?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookCall, onViewProjects }) => {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onViewProjects) {
      onViewProjects();
    } else {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="hero" aria-label="Introduction" className="relative pt-6 pb-12 overflow-hidden">
      {/* Subtle perspective grid lines on the right (matching reference image) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute right-0 top-12 w-64 md:w-80 h-72 opacity-35 hidden sm:block"
      >
        <div className="w-full h-full border-r border-b border-neutral-300 grid grid-cols-3 grid-rows-3">
          <div className="border-r border-t border-neutral-300/60"></div>
          <div className="border-r border-t border-neutral-300/60"></div>
          <div className="border-t border-neutral-300/60 bg-neutral-200/20"></div>
          <div className="border-r border-t border-neutral-300/60"></div>
          <div className="border-r border-t border-neutral-300/60 bg-neutral-200/30"></div>
          <div className="border-t border-neutral-300/60"></div>
          <div className="border-r border-t border-neutral-300/60 bg-neutral-200/40"></div>
          <div className="border-r border-t border-neutral-300/60"></div>
          <div className="border-t border-neutral-300/60"></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Creator Info: Avatar + Name + Title */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex items-center gap-3.5 mb-8"
        >
          <div className="relative">
            <img
              src={PERSONAL_INFO.avatar}
              alt="Rashish Regmi portrait"
              className="w-13 h-13 rounded-full object-cover border border-neutral-200 shadow-xs"
              loading="eager"
            />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xs sm:text-sm text-neutral-500 font-normal">
              {PERSONAL_INFO.role}
            </p>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-neutral-950 tracking-tight leading-[1.18] max-w-3xl xl:max-w-4xl mb-5"
        >
          {PERSONAL_INFO.headline}
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
          className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-2xl mb-8"
        >
          {PERSONAL_INFO.subtext}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-wrap items-center gap-3 mb-14"
        >
          <button
            id="hero-book-call-btn"
            onClick={onBookCall}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#111315] hover:bg-neutral-800 text-white text-sm font-semibold tracking-tight transition-all duration-200 shadow-xs active:scale-[0.98] cursor-pointer"
          >
            Book a Free Call
          </button>
          <a
            id="hero-see-projects-btn"
            href="#projects"
            onClick={handleScrollToProjects}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300/90 text-sm font-medium tracking-tight transition-all duration-200 shadow-2xs active:scale-[0.98] cursor-pointer"
          >
            See my Projects
          </a>
        </motion.div>

        {/* Social Proof / Brands Strip */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-6 border-t border-neutral-200/70"
        >
          <p className="text-xs sm:text-sm text-neutral-500 font-medium mb-4 tracking-tight">
            Trusted by 30+ Brands including
          </p>
          <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {TRUSTED_BRANDS.map((brand, idx) => (
              <div key={idx} className="flex items-center gap-2 text-neutral-700 font-medium text-xs sm:text-sm">
                <span className="text-base text-neutral-900">{brand.symbol}</span>
                <span className="font-semibold tracking-tight">{brand.label}</span>
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};
