import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, TRUSTED_BRANDS } from '../data/portfolioData';
import profile from "../assets/profile.jpeg"

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* Left Column: Hero copy and CTA */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Creator Info: Avatar + Name + Title */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex items-center gap-3.5 mb-7"
            >
              <div className="relative">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt="Calib Harrison portrait"
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
              className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-neutral-950 tracking-tight leading-[1.18] max-w-2xl mb-5"
            >
              {PERSONAL_INFO.headline}
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
              className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-xl mb-8"
            >
              {PERSONAL_INFO.subtext}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-3"
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
          </div>

          {/* Right Column: Interactive B&W to Color Stacked Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[310px] sm:max-w-[340px] select-none">
              {/* Stacked background cards (layered 3D frame effect matching reference) */}
              <div 
                aria-hidden="true" 
                className="absolute -bottom-3.5 -right-3.5 w-full h-full rounded-[2.3rem] bg-white border border-neutral-200/90 shadow-sm -z-10"
              />
              <div 
                aria-hidden="true" 
                className="absolute -bottom-6 -right-6 w-[96%] h-[96%] rounded-[2.3rem] bg-neutral-100/70 border border-neutral-200/60 -z-20 hidden sm:block"
              />

              {/* Main Card Frame */}
              <div 
                id="hero-partner-card"
                className="group relative bg-white rounded-[2.3rem] p-3 sm:p-3.5 border border-neutral-200 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                {/* Inner Image Container */}
                <div className="relative aspect-[4/5] rounded-[1.8rem] overflow-hidden bg-neutral-900">
                  {/* Top-Left Badge: ACTIVE PARTNERS */}
                  {/* <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#101214]/90 backdrop-blur-md border border-white/10 shadow-sm">
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase text-[#ffeedd]">
                      ACTIVE PARTNERS
                    </span>
                  </div> */}



                  {/* Portrait Image with Black & White -> Color Hover Transition */}
                  <img
                    src={profile}
                    alt="Rashish Regmi"
                    className="w-full h-full object-cover object-center filter grayscale contrast-[1.12] brightness-[0.96] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-105 group-hover:scale-105 transition-all duration-700 ease-out"
                    loading="eager"
                  />

                  {/* Bottom Vignette Gradient */}
                  <div 
                    aria-hidden="true" 
                    className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10 pointer-events-none"
                  />

                  {/* Floating Bottom Card: Name + Title + OK Button */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20 bg-[#ece8df]/95 group-hover:bg-[#f4f1ea]/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-white/70 shadow-lg flex items-center justify-between transition-colors duration-300">
                    <div className="pr-2">
                      <h3 className="text-sm sm:text-base font-bold text-neutral-950 tracking-tight leading-tight">
                        Reshish Regmi
                      </h3>
                      <p className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase text-neutral-500 mt-0.5">
                        UI/UX DESIGNER
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

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
